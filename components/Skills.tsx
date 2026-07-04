import FadeUp from "./FadeUp";
import StaggerFade from "./StaggerFade";

const suites = [
  {
    name: "manual_testing.suite",
    items: [
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity",
      "Black / White Box",
      "Defect Life Cycle",
      "Test Planning",
    ],
  },
  {
    name: "automation.suite",
    items: ["Selenium WebDriver", "Java", "TestNG / JUnit", "Maven", "Page Object Model"],
  },
  {
    name: "api_and_performance.suite",
    items: ["Postman", "Apache JMeter"],
  },
  {
    name: "tooling.suite",
    items: ["Jira", "Git / GitHub", "MySQL", "Eclipse"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">skills</div>
        <FadeUp>
          <h2 className="sec-title">
            Test suite: <span>capabilities</span>
          </h2>
        </FadeUp>
        {suites.map((suite) => (
          <div className="suite" key={suite.name}>
            <div className="suite-name">{suite.name}</div>
            <StaggerFade className="assert-grid" itemSelector=".assert-item">
              {suite.items.map((item) => (
                <div className="assert-item" key={item}>
                  {item}
                  <span className="tag">PASS</span>
                </div>
              ))}
            </StaggerFade>
          </div>
        ))}
      </div>
    </section>
  );
}
