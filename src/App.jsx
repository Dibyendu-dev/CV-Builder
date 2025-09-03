import Header from "./components/ui/Header";
import Leftbar from "./components/ui/Leftbar";
import { Rightbar } from "./components/ui/Rightbar";
import { useEffect, useRef, useState } from "react";

function App() {
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

  const DEFAULT_SECTIONS = [
    "Personal",
    "Education",
    "Experience",
    "Skills",
    "Objective",
    "References",
    "Projects",
  ];
  const [sections, setSections] = useState(DEFAULT_SECTIONS);

  const moveSection = (index, dir) => {
    const swapWith = index + dir;
    if (swapWith < 0 || swapWith >= sections.length) return;
    const next = sections.slice();
    [next[index], next[swapWith]] = [next[swapWith], next[index]];
    setSections(next);
  };

  const [template, setTemplate] = useState(0);
  const cvRef = useRef(null);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted state on first mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cv_builder_state");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.personal) setPersonal(parsed.personal);
      if (Array.isArray(parsed.education)) setEducation(parsed.education);
      if (Array.isArray(parsed.experience)) setExperience(parsed.experience);
      if (Array.isArray(parsed.skills)) setSkills(parsed.skills);
      if (typeof parsed.objective === "string") setObjective(parsed.objective);
      if (Array.isArray(parsed.references)) setReferences(parsed.references);
      if (Array.isArray(parsed.projects)) setProjects(parsed.projects);
      if (Array.isArray(parsed.sections)) setSections(parsed.sections);
      if (typeof parsed.template === "number") setTemplate(parsed.template);
    } catch (error) {
      console.error(error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist state whenever it changes
  useEffect(() => {
    if (!hydrated) return;
    const toSave = {
      personal,
      education,
      experience,
      skills,
      objective,
      references,
      projects,
      sections,
      template,
    };
    try {
      localStorage.setItem("cv_builder_state", JSON.stringify(toSave));
    } catch (error) {
      console.error(error); // storage might be full/blocked; fail silently
    }
  }, [
    personal,
    education,
    experience,
    skills,
    objective,
    references,
    projects,
    sections,
    template,
    hydrated,
  ]);

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Header template={template} setTemplate={setTemplate} cvRef={cvRef} />
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Leftbar
            personal={personal}
            setPersonal={setPersonal}
            education={education}
            setEducation={setEducation}
            experience={experience}
            setExperience={setExperience}
            skills={skills}
            setSkills={setSkills}
            objective={objective}
            setObjective={setObjective}
            references={references}
            setReferences={setReferences}
            projects={projects}
            setProjects={setProjects}
            sections={sections}
            moveSection={moveSection}
          />
          <Rightbar
            sections={sections}
            personal={personal}
            education={education}
            experience={experience}
            skills={skills}
            objective={objective}
            references={references}
            projects={projects}
            template={template}
            cvRef={cvRef}
          />
        </div>
      </div>
    </>
  );
}

export default App;
