import Header from "./components/ui/Header";
import Leftbar from "./components/ui/Leftbar";
import { Rightbar } from "./components/ui/Rightbar";
import { useRef, useState } from "react";

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
