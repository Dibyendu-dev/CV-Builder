import { useState } from "react";
import { uid } from "../../utils/uid";

export function SkillsForm({ list, setList }) {
  const [skill, setSkill] = useState("");
  const add = () => {
    const s = skill.trim();
    if (!s) return;
    setList([...list, { name: s, id: uid() }]);
    setSkill("");
  };
  const onDel = (id) => setList(list.filter((it) => it.id !== id));

  return (
    <div>
      <label className="block text-sm font-medium mb-1">Add Skill</label>
      <div className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 rounded-xl border"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="e.g. React, Sales, Node.js"
        />
        <button className="px-3 py-2 rounded-xl border" onClick={add}>
          Add
        </button>
      </div>
      {list.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {list.map((s) => (
            <span
              key={s.id}
              className="px-2 py-1 rounded-full border text-sm flex items-center gap-2"
            >
              {s.name}
              <button className="text-slate-500" onClick={() => onDel(s.id)}>
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
