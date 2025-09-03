import { useState } from "react";
import { CRUDCard } from "../atoms/CRUDCard";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";

export function ExperienceForm({ list, setList }) {
  const [draft, setDraft] = useState({
    company: "",
    title: "",
    start: "",
    end: "",
    details: "",
  });

  const uid = () => Math.random().toString(36).slice(2, 9);

  const [editId, setEditId] = useState(null);
  const save = () => {
    if (!draft.company || !draft.title) return;
    if (editId) {
      setList(list.map((it) => (it.id === editId ? { ...it, ...draft } : it)));
      setEditId(null);
    } else {
      setList([...list, { ...draft, id: uid() }]);
    }
    setDraft({ company: "", title: "", start: "", end: "", details: "" });
  };
  const onEdit = (it) => {
    setEditId(it.id);
    setDraft({
      company: it.company,
      title: it.title,
      start: it.start,
      end: it.end,
      details: it.details,
    });
  };
  const onDel = (id) => setList(list.filter((it) => it.id !== id));

  return (
    <CRUDCard
      title="Experience"
      fields={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            label="Company"
            value={draft.company}
            onChange={(v) => setDraft({ ...draft, company: v })}
          />
          <Input
            label="Job Title"
            value={draft.title}
            onChange={(v) => setDraft({ ...draft, title: v })}
          />
          <Input
            label="Start"
            value={draft.start}
            onChange={(v) => setDraft({ ...draft, start: v })}
          />
          <Input
            label="End"
            value={draft.end}
            onChange={(v) => setDraft({ ...draft, end: v })}
          />
          <Textarea
            label="Details"
            value={draft.details}
            onChange={(v) => setDraft({ ...draft, details: v })}
          />
        </div>
      }
      onSave={save}
      saveLabel={editId ? "Update" : "Add"}
      list={list}
      columns={["company", "title", "start", "end"]}
      onEdit={onEdit}
      onDelete={onDel}
    />
  );
}
