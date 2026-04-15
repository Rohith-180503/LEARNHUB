/**
 * InfoCard - Generic content card with flexible layout
 * Used for displaying information blocks in pages
 */
export default function InfoCard({ title, subtitle, content, icon, size = "md" }) {
  return (
    <div className={`info-card info-card-${size}`}>
      {icon && <div className="info-card-icon">{icon}</div>}
      <div className="info-card-content">
        {title && <h3 className="info-card-title">{title}</h3>}
        {subtitle && <p className="info-card-subtitle">{subtitle}</p>}
        {content && <div className="info-card-body">{content}</div>}
      </div>
    </div>
  );
}
