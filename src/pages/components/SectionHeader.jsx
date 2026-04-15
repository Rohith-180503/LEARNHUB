/**
 * SectionHeader - Reusable page/section header
 */
export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {title && <h2 className="section-header-title">{title}</h2>}
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </div>
  );
}
