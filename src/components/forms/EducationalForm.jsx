import { useState } from "react";

export function EducationForm({ list, setList }) {

    const uid = () => Math.random().toString(36).slice(2, 9);

    const [draft, setDraft] = useState({
        course: "",
        school: "",
        year: "",
        grade: "",
    });

  const [editId, setEditId] = useState(null);

  const save = () => {
    if (!draft.course || !draft.school) return;
    if (editId) {
      setList(list.map((it) => (it.id === editId ? { ...it, ...draft } : it)));
      setEditId(null);
    } else {
      setList([...list, { ...draft, id: uid() }]);
    }
    setDraft({ course: "", school: "", year: "", grade: "" });
  };

  const onEdit = (it) => {
    setEditId(it.id);
    setDraft({
      course: it.course,
      school: it.school,
      year: it.year || "",
      grade: it.grade || "",
    });
  };
  
  const onDel = (id) => setList(list.filter((it) => it.id !== id));

  return (
    <CRUDCard
      title="Education"
      fields={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            label="Course / Degree"
            value={draft.course}
            onChange={(v) => setDraft({ ...draft, course: v })}
          />
          <Input
            label="School / University"
            value={draft.school}
            onChange={(v) => setDraft({ ...draft, school: v })}
          />
          <Input
            label="Year"
            value={draft.year}
            onChange={(v) => setDraft({ ...draft, year: v })}
          />
          <Input
            label="Grade"
            value={draft.grade}
            onChange={(v) => setDraft({ ...draft, grade: v })}
          />
        </div>
      }
      onSave={save}
      saveLabel={editId ? "Update" : "Add"}
      list={list}
      columns={["course", "school", "year", "grade"]}
      onEdit={onEdit}
      onDelete={onDel}
    />
  );
}
