import { PageHeader } from "../ContentComponents";

export const Community = () => (
  <div className="page-container glassmorphism text-center">
    <PageHeader
      title="The Developer Peer Network"
      subtitle="Learn inside a community built around collaboration, review, and deliberate practice."
    />

    <div className="community-detailed">
      <div className="benefit-grid">
        <div className="benefit-card">
          <h3>Open Source Incubator</h3>
          <p>
            Get paired with maintainers, contribute to meaningful projects, and
            build a stronger public portfolio.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Expert-Led Hackathons</h3>
          <p>
            Join monthly sprints focused on practical problem solving, teamwork,
            and feedback loops.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Private Job Board</h3>
          <p>
            Access curated opportunities and network introductions connected to
            technical learning paths.
          </p>
        </div>
      </div>

      <div className="cta-box">
        <h3>Join a High-Signal Learning Community</h3>
        <p>Applications help keep the environment focused and collaborative.</p>
        <button className="primary-btn">Submit Your Application</button>
      </div>
    </div>
  </div>
);
