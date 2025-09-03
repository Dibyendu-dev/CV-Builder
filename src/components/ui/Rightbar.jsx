import { useMemo, useRef, useState } from "react";
import { CVPreview } from "./CVPreview";

export const Rightbar = ({
  sections = [],
  personal = {},
  education = [],
  experience = [],
  skills = [],
  objective = "",
  references = [],
  projects = [],
}) => {
  const [template, setTemplate] = useState(0);
  const cvRef = useRef(null);

  const orderedData = useMemo(
    () => ({
      sections,
      data: {
        Personal: personal,
        Education: education,
        Experience: experience,
        Skills: skills,
        Objective: objective,
        References: references,
        Projects: projects,
      },
    }),
    [
      sections,
      personal,
      education,
      experience,
      skills,
      objective,
      references,
      projects,
    ]
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <span className="text-sm text-slate-500">
          Template {template + 1} / 5
        </span>
      </div>
      <div ref={cvRef} className="bg-white border rounded-2xl shadow p-6">
        <CVPreview template={template} orderedData={orderedData} />
      </div>
    </div>
  );
};
