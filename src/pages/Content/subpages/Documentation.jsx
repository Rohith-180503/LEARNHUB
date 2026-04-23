import { PageHeader } from "../ContentComponents";

export const Documentation = () => (
  <div className="page-container glassmorphism">
    <PageHeader
      title="Student Playbook and Docs"
      subtitle="A central knowledge base for getting started, understanding workflows, and using platform features effectively."
    />

    <div className="doc-grid-detailed">
      <section className="doc-category">
        <h3>Getting Started</h3>
        <ul className="doc-links">
          <li>Platform orientation and dashboard overview</li>
          <li>Setting up your local development environment</li>
          <li>Connecting GitHub and cloud accounts</li>
          <li>Understanding grading and review flows</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>API and Integration</h3>
        <ul className="doc-links">
          <li>REST API authentication and scopes</li>
          <li>Webhooks for lab submissions</li>
          <li>Exporting certifications to professional profiles</li>
          <li>Customizing student data via API</li>
        </ul>
      </section>
      <section className="doc-category">
        <h3>Workflow and Productivity</h3>
        <ul className="doc-links">
          <li>Time management for part-time learners</li>
          <li>Active recall and spaced repetition strategies</li>
          <li>Using AI tutoring support for feedback</li>
          <li>Best practices for peer code review</li>
        </ul>
      </section>
    </div>
  </div>
);
