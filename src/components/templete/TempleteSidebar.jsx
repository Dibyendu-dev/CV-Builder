import { PersonalBlock } from "../cv/PersonalBlock";
import { Section } from "../cv/Section";
import { TemplateClassic } from "./TempleteClassic";

export function TemplateSidebar({ sections, data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
      <aside className="bg-slate-100 p-4 rounded-xl">
        <PersonalBlock data={data.Personal} />
        {sections.includes("Skills") && (
          <Section title="Skills">
            <ul className="list-disc ml-5">
              {data.Skills?.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </Section>
        )}
        {sections.includes("References") && (
          <TemplateClassic sections={["References"]} data={data} />
        )}
      </aside>
      <section>
        <TemplateClassic
          sections={sections.filter((s) =>
            ["Objective", "Experience", "Education", "Projects"].includes(s)
          )}
          data={data}
        />
      </section>
    </div>
  );
}
