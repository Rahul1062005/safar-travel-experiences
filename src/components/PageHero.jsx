import './PageHero.css';

/**
 * Reusable editorial introduction banner for top-level directory pages
 * (/destinations and /packages) ensuring consistent rhythm and hierarchy.
 */
export function PageHero({ eyebrow, title, description, note, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className={`container ${image ? 'page-hero__grid' : ''}`}>
        <div className="page-hero__content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__desc">{description}</p>
          {note && <p className="page-hero__note">{note}</p>}
        </div>

        {image && (
          <figure className="page-hero__media">
            <img
              src={image}
              alt={imageAlt || ''}
              decoding="async"
              fetchPriority="high"
              className="page-hero__img"
            />
          </figure>
        )}
      </div>
    </section>
  );
}
