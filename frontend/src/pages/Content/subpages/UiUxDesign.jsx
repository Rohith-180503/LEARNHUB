import { PageHeader } from "../ContentComponents";

export const UiUxDesign = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Experience Architecture and Strategy"
      subtitle="Blend research, visual systems, and technical constraints into product decisions that hold up in production."
    />

    <section className="detailed-content">
      <div className="module-box">
        <h2>The Science of User Experience</h2>
        <p>
          Build strong UX habits through research, requirement synthesis, and
          measurable validation.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>Cognitive Psychology</h3>
            <p>
              Use attention, memory, and perception principles to reduce user
              friction.
            </p>
          </div>
          <div className="info-card">
            <h3>UX Research Methods</h3>
            <p>
              Practice interviews, card sorting, and remote usability studies to
              generate actionable findings.
            </p>
          </div>
        </div>
      </div>

      <div className="module-box">
        <h2>Design Systems and Handover</h2>
        <p>
          Learn how scalable component systems improve consistency across design
          and engineering.
        </p>
        <div className="curriculum-preview">
          <div className="curriculum-item">
            <div className="step-num">DS</div>
            <div className="step-content">
              <h3>Living Design Systems</h3>
              <p>
                Build Figma libraries and documentation that can serve as a
                practical source of truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
