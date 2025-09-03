import { TemplateSelector } from "./TempleteSelector";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

function Header({ template, setTemplate, cvRef }) {
  const [generating, setGenerating] = useState(false);
  const onDownloadPDF = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const node = cvRef?.current;
      if (!node) throw new Error("Preview not ready");
      const rect = node.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0)
        throw new Error("Preview has no size");

      const canvas = await html2canvas(node, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

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
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold">CV Builder</h1>
          <div className="flex gap-2">
            <button
              onClick={onDownloadPDF}
              disabled={generating}
              className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 disabled:opacity-60 active:scale-[.99]"
            >
              {generating ? "Generating..." : "Download PDF"}
            </button>
            <TemplateSelector template={template} setTemplate={setTemplate} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
