/**
 * DetailCard - Displays a card with icon, title, and description
 * Used in the course catalog pages like AllCourses, WebDevelopment, etc.
 */
export default function DetailCard({ icon, title, description }) {
  return (
    <div className="detail-card">
      {icon && <div className="detail-card-icon">{icon}</div>}
      <h3 className="detail-card-title">{title}</h3>
      <p className="detail-card-description">{description}</p>
    </div>
  );
}
