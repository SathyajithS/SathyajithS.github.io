import FadeUp from "./FadeUp";
import StaggerFade from "./StaggerFade";

const projects = [
  {
    name: "Croma.com — E-Commerce Automation",
    date: "Jan 2026 · Automation Testing",
    desc: "End-to-end Selenium framework covering product search, category navigation, cart operations, and checkout validation. Data-driven testing via Excel, with reusable utilities for waits, screenshots, and common actions.",
    stack: ["Selenium", "Java", "TestNG", "Maven", "POM"],
  },
  {
    name: "BS Sports — E-Commerce Testing",
    date: "Oct 2025 · Manual Testing",
    desc: "Designed and executed 50+ test cases across major modules. Functional, UI, regression, and compatibility testing, backed by full defect reports and test summaries.",
    stack: ["Manual QA", "Test Design", "Defect Reporting"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">projects</div>
        <FadeUp>
          <h2 className="sec-title">
            Case <span>files</span>
          </h2>
        </FadeUp>
        <StaggerFade className="proj-grid" itemSelector=".proj-card" stagger={0.12}>
          {projects.map((p) => (
            <div className="proj-card" key={p.name}>
              <div className="proj-head">
                <div className="proj-name">{p.name}</div>
                <div className="proj-status pass">PASS</div>
              </div>
              <div className="proj-date">{p.date}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </StaggerFade>
      </div>
    </section>
  );
}
