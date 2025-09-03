export function Stepper({ step, setStep }) {
  const steps = [
    "Personal",
    "Education",
    "Experience",
    "Skills",
    "Objective",
    "References",
    "Projects",
  ];
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-2">
        {steps.map((label, idx) => (
          <button
            key={label}
            onClick={() => setStep(idx)}
            className={`px-3 py-2 rounded-2xl border transition-all whitespace-nowrap ${
              step === idx
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white border-slate-300 hover:bg-slate-100"
            }`}
          >
            {idx + 1}. {label}
          </button>
        ))}
      </div>
    </div>
  );
}
