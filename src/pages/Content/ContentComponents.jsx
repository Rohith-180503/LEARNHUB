import "./ContentPages.css";

export function PageHeader({ title, subtitle }) {
  return (
    <div className="content-header">
      <h1 className="gradient-text">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export function DetailCard({ title, body, tags = [] }) {
  return (
    <div className="course-card-detailed">
      <h3>{title}</h3>
      <p>{body}</p>
      {tags.length > 0 && (
        <ul className="tag-list">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function InfoCard({ title, body, highlight = false }) {
  return (
    <div className={highlight ? "feature-card highlight" : "feature-card"}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export function InstructorCard({ name, title, body, tags }) {
  return (
    <div className="instructor-hero-card">
      <div className="hero-content">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{body}</p>
        <div className="expertise-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
