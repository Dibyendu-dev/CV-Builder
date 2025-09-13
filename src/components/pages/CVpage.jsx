import Header from "../ui/Header";
import Leftbar from "../ui/Leftbar";
import { Rightbar } from "../ui/Rightbar";
import { useEffect, useRef, useState } from "react";

function CVpage() {
  const [personal, setPersonal] = useState({
    name: "John Doe",
    address: "123 Main St, City, State 12345",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    photo: "",
  });
  const [education, setEducation] = useState([
    {
      id: "1",
      course: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2020-2024",
      grade: "3.8 GPA",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: "1",
      company: "Tech Corp",
      title: "Software Developer",
      start: "2024",
      end: "Present",
      details:
        "Developed web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
  ]);
  const [skills, setSkills] = useState([
    { id: "1", name: "JavaScript" },
    { id: "2", name: "React" },
    { id: "3", name: "Node.js" },
    { id: "4", name: "Python" },
  ]);
  const [objective, setObjective] = useState(
    "Seeking a challenging software development position where I can utilize my technical skills and passion for creating innovative solutions."
  );
  const [references, setReferences] = useState([
    {
      id: "1",
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "(555) 987-6543",
      relation: "Former Manager",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce application with React frontend and Node.js backend. Features include user authentication, product catalog, and payment processing.",
      link: "https://github.com/johndoe/ecommerce",
    },
  ]);

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

  // Function to clear all data
  const clearAllData = () => {
    setPersonal({
      name: "",
      address: "",
      email: "",
      phone: "",
      photo: "",
    });
    setEducation([]);
    setExperience([]);
    setSkills([]);
    setObjective("");
    setReferences([]);
    setProjects([]);
  };

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
        <Header
          template={template}
          setTemplate={setTemplate}
          cvRef={cvRef}
          onClearData={clearAllData}
        />
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

export default CVpage;
