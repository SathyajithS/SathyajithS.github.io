import FadeUp from "./FadeUp";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">about</div>
        <FadeUp>
          <h2 className="sec-title">
            Test plans over <span>guesswork</span>.
          </h2>
        </FadeUp>
        <div className="about-grid">
          <FadeUp className="about-body">
            <p>
              I&apos;m a QA Engineer currently at{" "}
              <strong>Webeaz Technologies</strong>, Kozhikode — coordinating
              project delivery while testing a multi-module ERP system and a
              market-ready ride-hailing app across Android and iOS.
            </p>
            <p>
              My work spans the full test lifecycle: writing test plans,
              executing manual functional/regression/smoke passes, automating
              repetitive flows with Selenium and Java, validating APIs in
              Postman, and load-testing with JMeter — then coordinating with
              the team to get fixes shipped.
            </p>
            <p>
              Before this, I trained at <strong>Luminar Technolab</strong>,
              Kochi, building the fundamentals: SDLC, STLC, defect lifecycle,
              and Agile practice.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="stat-card">
              <CountUp value={50} suffix="+" />
              <div className="label">
                test cases designed &amp; executed, single project
              </div>
            </div>
            <div className="stat-card">
              <CountUp value={2} />
              <div className="label">
                platforms tested — Android &amp; iOS, ride-hailing app
              </div>
            </div>
            <div className="stat-card">
              <CountUp value={4} />
              <div className="label">
                ERP modules covered — CRM, Sales, Purchase, Accounts
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
