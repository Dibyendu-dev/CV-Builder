import { Input } from "../atoms/Input";

export function PersonalForm({ value, onChange }) {

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      onChange({
        ...value,
        photo:  (reader.result || ""),
      });
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Full Name"
          value={value.name}
          onChange={(v) => onChange({ ...value, name: v })}
        />
      <Input
        label="Email"
        value={value.email}
        onChange={(v) => onChange({ ...value, email: v })}
      />
      <Input
        label="Phone"
        value={value.phone}
        onChange={(v) => onChange({ ...value, phone: v })}
      />
      <Input
        label="Address"
        value={value.address}
        onChange={(v) => onChange({ ...value, address: v })}
      />
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium mb-1">Photo</label>
        <input type="file" accept="image/*" onChange={onFile} />
        {value.photo && (
          <img
            src={value.photo}
            alt="photo"
            className="mt-2 h-24 w-24 rounded-xl object-cover border"
          />
        )}
      </div>
    </div>
  );
}
