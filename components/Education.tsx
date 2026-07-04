import FadeUp from "./FadeUp";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">education</div>
        <FadeUp>
          <h2 className="sec-title">
            Background <span>compile</span>
          </h2>
        </FadeUp>
        <FadeUp>
          <div className="edu-row">
            <div>
              <div className="edu-name">
                B.Tech, Electronics &amp; Communication Engineering
              </div>
              <div className="edu-sub">
                Adi Shankara Institute of Engineering and Technology,
                Ernakulam
              </div>
            </div>
            <div className="edu-year">2020 — 2024</div>
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-name">Higher Secondary Education</div>
              <div className="edu-sub">Bharatiya Vidya Bhavan, Kozhikode</div>
            </div>
            <div className="edu-year">2019 — 2020</div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
