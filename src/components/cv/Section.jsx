export function Section({ title, children }) {
  return (
    <section className="mt-5">
      <h3 className="text-base font-semibold tracking-wide text-slate-700 uppercase">
        {title}
      </h3>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}
