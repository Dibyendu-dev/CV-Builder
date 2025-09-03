export function SectionReorder({ sections, moveSection }) {
  return (
    <div className="p-4 rounded-2xl border bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Reorder Sections</h3>
        <p className="text-sm text-slate-500">
          Drag & drop could be added later — for now use Up/Down
        </p>
      </div>
      <ul className="space-y-2">
        {sections.map((s, i) => (
          <li
            key={s}
            className="flex items-center justify-between border rounded-xl px-3 py-2"
          >
            <span className="font-medium">{s}</span>
            <div className="flex gap-2">
              <button
                className="px-2 py-1 border rounded-lg"
                onClick={() => moveSection(i, -1)}
              >
                Up
              </button>
              <button
                className="px-2 py-1 border rounded-lg"
                onClick={() => moveSection(i, 1)}
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
