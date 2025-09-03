export function PersonalBlock({ data }) {
  return (
    <div className="flex items-start gap-4">
      {data.photo && (
        <img
          src={data.photo}
          alt="profile"
          className="w-20 h-20 rounded-xl object-cover border"
        />
      )}
      <div>
        <h2 className="text-2xl font-bold">{data.name || "Your Name"}</h2>
        <p className="text-sm text-slate-600">{data.address}</p>
        <p className="text-sm text-slate-600">
          {data.email} · {data.phone}
        </p>
      </div>
    </div>
  );
}
