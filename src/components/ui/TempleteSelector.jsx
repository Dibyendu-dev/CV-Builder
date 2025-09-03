export function TemplateSelector({ template, setTemplate }) {
    
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-slate-500">Template</label>
      <select
        className="px-3 py-2 rounded-xl border"
        value={template}
        onChange={(e) => setTemplate(Number(e.target.value))}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <option key={i} value={i}>
            Template {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
