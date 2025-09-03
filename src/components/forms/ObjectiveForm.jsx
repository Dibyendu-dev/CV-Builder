import { Textarea } from "../atoms/Textarea";

export function ObjectiveForm({ value, onChange }) {
  return (
    <Textarea
      label="Objective"
      value={value}
      onChange={onChange}
      placeholder="A concise 1–2 sentence career objective."
    />
  );
}
