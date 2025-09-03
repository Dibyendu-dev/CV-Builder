import { useState } from "react";
import { uid } from "../../utils/uid";
import { CRUDCard } from "../atoms/CRUDCard";

export function ReferencesForm({ list, setList }) {
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "",
  });
  const [editId, setEditId] = useState(null);
  const save = () => {
    if (!draft.name) return;
    if (editId) {
      setList(list.map((it) => (it.id === editId ? { ...it, ...draft } : it)));
      setEditId(null);
    } else {
      setList([...list, { ...draft, id: uid() }]);
    }
    setDraft({ name: "", email: "", phone: "", relation: "" });
  };
  const onEdit = (it) => {
    setEditId(it.id);
    setDraft({
      name: it.name,
      email: it.email || "",
      phone: it.phone || "",
      relation: it.relation || "",
    });
  };
  const onDel = (id) => setList(list.filter((it) => it.id !== id));

  return (
    <CRUDCard
      title="References"
      fields={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            label="Name"
            value={draft.name}
            onChange={(v) => setDraft({ ...draft, name: v })}
          />
          <Input
            label="Email"
            value={draft.email}
            onChange={(v) => setDraft({ ...draft, email: v })}
          />
          <Input
            label="Phone"
            value={draft.phone}
            onChange={(v) => setDraft({ ...draft, phone: v })}
          />
          <Input
            label="Relation"
            value={draft.relation}
            onChange={(v) => setDraft({ ...draft, relation: v })}
          />
        </div>
      }
      onSave={save}
      saveLabel={editId ? "Update" : "Add"}
      list={list}
      columns={["name", "email", "phone", "relation"]}
      onEdit={onEdit}
      onDelete={onDel}
    />
  );
}
