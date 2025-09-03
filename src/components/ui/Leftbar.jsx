import { useState } from "react";
import { Stepper } from "./Stepper";
import { PersonalForm} from "../forms/PersonalForm";
import { EducationForm } from "../forms/EducationalForm";
import { ExperienceForm } from "../forms/ExperienceForm";
import { ObjectiveForm } from "../forms/ObjectiveForm";
import { ReferencesForm } from "../forms/ReferencesForm";
import { ProjectsForm } from "../forms/ProjectForm";

function Leftbar() {
  const [step, setStep] = useState(0);

  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    photo: "",
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

  const [skills, setSkills] = useState([]);

  const [objective, setObjective] = useState("");

  const [references, setReferences] = useState([]);

  const [projects, setProjects] = useState([]);

  return (
    <div>
      <div className="space-y-6">
        <Stepper step={step} setStep={setStep} />

        <div className="p-4 rounded-2xl border bg-white shadow-sm">
          {step === 0 && (
            <PersonalForm value={personal} onChange={setPersonal} />
          )}
          {step === 1 && (
            <EducationForm list={education} setList={setEducation} />
          )}
          {step === 2 && (
            <ExperienceForm list={experience} setList={setExperience} />
          )}
          {step === 3 && <SkillsForm list={skills} setList={setSkills} />}
          {step === 4 && (
            <ObjectiveForm value={objective} onChange={setObjective} />
          )}
          {step === 5 && (
            <ReferencesForm list={references} setList={setReferences} />
          )}
          {step === 6 && <ProjectsForm list={projects} setList={setProjects} />}

          <div className="mt-4 flex items-center justify-between">
            <button
              className="px-3 py-2 rounded-xl border border-slate-300 disabled:opacity-40"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Back
            </button>
            <button
              className="px-3 py-2 rounded-xl border border-slate-300"
              onClick={() => setStep((s) => Math.min(6, s + 1))}
            >
              Next
            </button>
          </div>
        </div>

        {/* <SectionReorder sections={sections} moveSection={moveSection} /> */}
      </div>
    </div>
  );
}

export default Leftbar;
