import { useState } from "react";
import { uid } from "../../utils/uid";
import { CRUDCard } from "../atoms/CRUDCard";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";

export function ProjectsForm({ list, setList }) {
  const [draft, setDraft] = useState({ title: "", description: "", link: "" });
  const [editId, setEditId] = useState(null);
  const save = () => {
    if (!draft.title) return;
    if (editId) {
      setList(list.map((it) => (it.id === editId ? { ...it, ...draft } : it)));
      setEditId(null);
    } else {
      setList([...list, { ...draft, id: uid() }]);
    }
    setDraft({ title: "", description: "", link: "" });
  };
  const onEdit = (it) => {
    setEditId(it.id);
    setDraft({
      title: it.title,
      description: it.description || "",
      link: it.link || "",
    });
  };
  const onDel = (id) => setList(list.filter((it) => it.id !== id));

  return (
    <CRUDCard
      title="Projects"
      fields={
        <div className="grid grid-cols-1 gap-3">
          <Input
            label="Title"
            value={draft.title}
            onChange={(v) => setDraft({ ...draft, title: v })}
          />
          <Textarea
            label="Description"
            value={draft.description}
            onChange={(v) => setDraft({ ...draft, description: v })}
          />
          <Input
            label="Link"
            value={draft.link}
            onChange={(v) => setDraft({ ...draft, link: v })}
            placeholder="https://..."
          />
        </div>
      }
      onSave={save}
      saveLabel={editId ? "Update" : "Add"}
      list={list}
      columns={["title", "link"]}
      onEdit={onEdit}
      onDelete={onDel}
    />
  );
}
