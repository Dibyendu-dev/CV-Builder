import { Section } from "../cv/Section";
import { TemplateClassic } from "./TempleteClassic";
import { PersonalBlock } from "../cv/PersonalBlock";

export function TemplateTimeline({ sections, data }) {
  return (
    <div>
      <PersonalBlock data={data.Personal} />
      {sections.includes("Objective") && (
        <Section title="Objective">
          <p className="text-sm">{data.Objective}</p>
        </Section>
      )}
      {sections.includes("Experience") && (
        <Section title="Experience (Timeline)">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-300" />
            {data.Experience?.length ? (
              data.Experience.map((x) => (
                <div key={x.id} className="mb-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400 absolute -left-[7px] mt-2" />
                  <div className="font-medium">
                    {x.title} — {x.company}
                  </div>
                  <div className="text-xs text-slate-600">
                    {x.start} – {x.end || "Present"}
                  </div>
                  <div className="text-sm mt-1 whitespace-pre-wrap">
                    {x.details}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No experience yet</p>
            )}
          </div>
        </Section>
      )}
      <TemplateClassic
        sections={sections.filter((s) =>
          ["Education", "Projects", "Skills", "References"].includes(s)
        )}
        data={data}
      />
    </div>
  );
}
