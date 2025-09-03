import { Section } from "../cv/Section";
import { PersonalBlock } from "../cv/PersonalBlock";

export function TemplateClassic({ sections, data }) {
  return (
    <div>
      {sections.map((s) => (
        <div key={s}>
          {s === "Personal" && <PersonalBlock data={data.Personal} />}
          {s === "Objective" && (
            <Section title="Objective">
              <p className="text-sm leading-relaxed">
                {data.Objective || "Write a concise career objective here."}
              </p>
            </Section>
          )}
          {s === "Skills" && (
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {data.Skills?.length ? (
                  data.Skills.map((sk) => (
                    <span
                      key={sk.id}
                      className="px-2 py-1 rounded-full border text-xs"
                    >
                      {sk.name}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No skills yet</p>
                )}
              </div>
            </Section>
          )}
          {s === "Education" && (
            <Section title="Education">
              {data.Education?.length ? (
                data.Education.map((e) => (
                  <div key={e.id} className="text-sm">
                    <div className="font-medium">
                      {e.course} — {e.school}
                    </div>
                    <div className="text-slate-600">
                      {e.year}
                      {e.grade ? ` · Grade: ${e.grade}` : ""}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No education added</p>
              )}
            </Section>
          )}
          {s === "Experience" && (
            <Section title="Experience">
              {data.Experience?.length ? (
                data.Experience.map((x) => (
                  <div key={x.id} className="text-sm">
                    <div className="font-medium">
                      {x.title} — {x.company}
                    </div>
                    <div className="text-slate-600">
                      {x.start} – {x.end || "Present"}
                    </div>
                    <div className="mt-1 whitespace-pre-wrap">{x.details}</div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No experience yet</p>
              )}
            </Section>
          )}
          {s === "Projects" && (
            <Section title="Projects">
              {data.Projects?.length ? (
                data.Projects.map((p) => (
                  <div key={p.id} className="text-sm">
                    <div className="font-medium">
                      {p.title}{" "}
                      {p.link && (
                        <a
                          href={p.link}
                          className="text-blue-600 underline ml-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          link
                        </a>
                      )}
                    </div>
                    <div className="text-slate-700 whitespace-pre-wrap">
                      {p.description}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No projects yet</p>
              )}
            </Section>
          )}
          {s === "References" && (
            <Section title="References">
              {data.References?.length ? (
                data.References.map((r) => (
                  <div key={r.id} className="text-sm">
                    <div className="font-medium">{r.name}</div>
                    <div className="text-slate-600">
                      {[r.email, r.phone, r.relation]
                        .filter(Boolean)
                        .join(" · ")}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No references yet</p>
              )}
            </Section>
          )}
        </div>
      ))}
    </div>
  );
}
