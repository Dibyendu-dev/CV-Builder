export function CRUDCard({
  title,
  fields,
  onSave,
  saveLabel = "Add",
  list,
  columns,
  onEdit,
  onDelete,
}) {
  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-3">
        {fields}
        <div className="flex justify-end">
          <button className="px-3 py-2 rounded-xl border" onClick={onSave}>
            {saveLabel}
          </button>
        </div>
      </div>

      {list?.length > 0 && (
        <div className="mt-4">
          <table className="w-full text-sm border">
            <thead className="bg-slate-100">
              <tr>
                {columns.map((c) => (
                  <th key={c} className="text-left p-2 capitalize border-r">
                    {c}
                  </th>
                ))}
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((row) => (
                <tr key={row.id} className="border-t hover:bg-slate-50">
                  {columns.map((c) => (
                    <td key={c} className="p-2 border-r">
                      {row[c]}
                    </td>
                  ))}
                  <td className="p-2 flex gap-2">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => onEdit(row)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => onDelete(row.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
