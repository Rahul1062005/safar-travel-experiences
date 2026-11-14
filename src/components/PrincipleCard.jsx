import './PrincipleCard.css';

/**
 * Reusable editorial card used for travel philosophy pillars (numbered)
 * and service principles (icon-badged).
 */
export function PrincipleCard({ icon: Icon, badge, title, description, variant = 'surface' }) {
  return (
    <article className={`principle-card principle-card--${variant}`}>
      {(Icon || badge) && (
        <div className="principle-card__header">
          {Icon && (
            <div className="principle-card__icon" aria-hidden="true">
              <Icon size={20} strokeWidth={1.75} />
            </div>
          )}
          {badge && <span className="principle-card__badge">{badge}</span>}
        </div>
      )}

      <h3 className="principle-card__title">{title}</h3>
      <p className="principle-card__desc">{description}</p>
    </article>
  );
}
