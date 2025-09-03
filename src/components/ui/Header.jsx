
function Header() {
  return (
    <div>
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold">CV Builder</h1>
          <div className="flex gap-2">
            <button
            //   onClick={onDownloadPDF}
              className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 active:scale-[.99]"
            >
              Download PDF
            </button>
            {/* <TemplateSelector template={template} setTemplate={setTemplate} /> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
