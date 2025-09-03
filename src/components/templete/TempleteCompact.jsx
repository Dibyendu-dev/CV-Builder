import { PersonalBlock } from "../cv/PersonalBlock";
import { TemplateClassic } from "./TempleteClassic";

export function TemplateCompact({ sections, data }) {
  return (
    <div className="text-sm">
      <div className="border-b pb-2 mb-3">
        <PersonalBlock data={data.Personal} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TemplateClassic
          sections={sections.filter((s) =>
            ["Objective", "Skills", "References"].includes(s)
          )}
          data={data}
        />
        <TemplateClassic
          sections={sections.filter((s) =>
            ["Experience", "Education", "Projects"].includes(s)
          )}
          data={data}
        />
      </div>
    </div>
  );
}
