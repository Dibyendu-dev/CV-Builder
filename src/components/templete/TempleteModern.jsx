import { Section } from "../cv/Section";
import { TemplateClassic } from "./TempleteClassic";

export function TemplateModern({ sections, data }) {
  return (
    <div>
      {/* Sticky-style header */}
      <div className="rounded-xl p-4 bg-slate-900 text-white">
        <div className="flex items-center gap-4">
          {data.Personal.photo && (
            <img
              src={data.Personal.photo}
              className="w-16 h-16 rounded-lg object-cover border border-white/20"
            />
          )}
          <div>
            <div className="text-2xl font-bold">
              {data.Personal.name || "Your Name"}
            </div>
            <div className="text-xs opacity-80">
              {data.Personal.email} · {data.Personal.phone}
            </div>
            <div className="text-xs opacity-80">{data.Personal.address}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {sections.includes("Objective") && (
            <Section title="Objective">
              <p className="text-sm">
                {data.Objective || "Objective goes here."}
              </p>
            </Section>
          )}
          {sections.includes("Skills") && (
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {data.Skills?.map((s) => (
                  <span
                    key={s.id}
                    className="px-2 py-1 rounded-lg bg-slate-100 text-xs"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </Section>
          )}
          {sections.includes("References") && (
            <TemplateClassic sections={["References"]} data={data} />
          )}
        </div>
        <div className="space-y-4">
          <TemplateClassic
            sections={["Experience", "Education", "Projects"]}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
