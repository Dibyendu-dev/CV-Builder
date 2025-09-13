import { TemplateSelector } from "./TempleteSelector";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

function Header({ template, setTemplate, cvRef, onClearData }) {
  const [generating, setGenerating] = useState(false);

 
  const onDownloadPDF = async () => {
    if (generating) return;
    setGenerating(true);
    let node;
    try {
      node = cvRef?.current;
      if (!node) throw new Error("Preview not ready");

      // Debug: Log the node content
      console.log("CV Node:", node);
      console.log("CV Node innerHTML:", node.innerHTML);
      console.log("CV Node textContent:", node.textContent);

      // Check if there's any visible content
      if (!node.textContent || node.textContent.trim().length === 0) {
        throw new Error(
          "No content found in CV preview. Please add some information to your CV first."
        );
      }

      const rect = node.getBoundingClientRect();
      console.log("CV Node rect:", rect);
      if (rect.width === 0 || rect.height === 0)
        throw new Error("Preview has no size");

      // Wait for fonts to load
      await document.fonts.ready;

      // Add a temporary class to override unsupported styles
      node.classList.add("pdf-export");

      // Wait a bit for styles to apply
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Try multiple approaches to capture the content
      let canvas;
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts) {
        try {
          console.log(`Attempt ${attempts + 1} to capture content...`);

          const options = {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
            allowTaint: false,
            foreignObjectRendering: false,
            logging: true,
            width: rect.width,
            height: rect.height,
            scrollX: 0,
            scrollY: 0,
            windowWidth: rect.width,
            windowHeight: rect.height,
            ignoreElements: (element) => {
              return (
                element.classList.contains("sticky") ||
                element.classList.contains("fixed") ||
                element.style.position === "fixed" ||
                element.style.position === "sticky"
              );
            },
            onclone: (clonedDoc) => {
              const clonedNode = clonedDoc.querySelector('[class*="bg-white"]');
              if (clonedNode) {
                clonedNode.style.backgroundColor = "#ffffff";
                clonedNode.style.color = "#000000";
                clonedNode.style.position = "static";
                clonedNode.style.transform = "none";
              }

              const allElements = clonedDoc.querySelectorAll("*");
              allElements.forEach((el) => {
                if (el.style) {
                  el.style.position = "static";
                  el.style.transform = "none";
                  el.style.filter = "none";
                  el.style.backdropFilter = "none";
                  el.style.boxShadow = "none";
                  el.style.textShadow = "none";
                }
              });
            },
          };

          // Try different approaches based on attempt number
          if (attempts === 1) {
            // Second attempt: try with different settings
            options.foreignObjectRendering = true;
            options.scale = 1;
          } else if (attempts === 2) {
            // Third attempt: try with minimal options
            options.scale = 1;
            options.backgroundColor = null;
            delete options.onclone;
          }

          canvas = await html2canvas(node, options);

          // Test if the canvas has content
          const ctx = canvas.getContext("2d");
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          let nonWhitePixels = 0;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            if (r < 250 || g < 250 || b < 250) {
              nonWhitePixels++;
            }
          }

          console.log(
            `Attempt ${attempts + 1} - Non-white pixels:`,
            nonWhitePixels
          );

          if (nonWhitePixels > 100) {
            console.log(`Success on attempt ${attempts + 1}!`);
            break; // Success, exit the retry loop
          } else {
            console.log(
              `Attempt ${attempts + 1} failed - canvas appears blank`
            );
            attempts++;
            if (attempts < maxAttempts) {
              await new Promise((resolve) => setTimeout(resolve, 200)); // Wait before retry
            }
          }
        } catch (error) {
          console.error(`Attempt ${attempts + 1} failed with error:`, error);
          attempts++;
          if (attempts >= maxAttempts) {
            throw error;
          }
          await new Promise((resolve) => setTimeout(resolve, 200)); // Wait before retry
        }
      }

      console.log("Generated canvas:", canvas);
      console.log("Canvas dimensions:", canvas.width, "x", canvas.height);

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error("Canvas generation failed");
      }

      const imgData = canvas.toDataURL("image/png", 1.0);
      console.log("Image data length:", imgData.length);

      const pdf = new jsPDF({
        orientation: "p",
        unit: "pt",
        format: "a4",
        compress: true,
      });

      // Fit image to A4 while preserving aspect ratio
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const w = imgWidth * ratio;
      const h = imgHeight * ratio;
      const x = (pageWidth - w) / 2;
      const y = 20; // top margin

      pdf.addImage(imgData, "PNG", x, y, w, h, undefined, "FAST");
      pdf.save("My_CV.pdf");

      console.log("PDF generated successfully!");
      alert("PDF downloaded successfully!");
    } catch (err) {
      console.error("PDF generation failed:", err);
      console.error("Error details:", {
        message: err.message,
        stack: err.stack,
        node: node,
        nodeContent: node?.innerHTML,
        nodeText: node?.textContent,
      });
      alert(
        `Failed to generate PDF: ${err.message}. Check console for details.`
      );
    } finally {
      // Remove the temporary class after PDF generation
      if (node) {
        node.classList.remove("pdf-export");
      }
      setGenerating(false);
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold"></h1>
          <div className="flex gap-2">
            <button
              onClick={onDownloadPDF}
              disabled={generating}
              className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 disabled:opacity-60 active:scale-[.99]"
            >
              {generating ? "Generating..." : "Download PDF"}
            </button>

            

            {onClearData && (
              <button
                onClick={onClearData}
                className="px-3 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 active:scale-[.99]"
              >
                Clear data
              </button>
            )}

            <TemplateSelector template={template} setTemplate={setTemplate} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
