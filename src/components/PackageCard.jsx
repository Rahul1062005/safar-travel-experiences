import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatIndicativePrice } from '../data/packages.js';
import './PackageCard.css';

/**
 * Editorial tour package preview card.
 * Displays illustrative starting pricing and links to the individual package route.
 * Pass `showHighlights` on the Packages listing to surface top highlights inline.
 */
export function PackageCard({ pkg, showHighlights = false }) {
  const previewHighlights = showHighlights && pkg.highlights ? pkg.highlights.slice(0, 3) : [];

  return (
    <article className="package-card">
      <Link to={`/packages/${pkg.slug}`} className="package-card__media-link">
        <div className="package-card__media">
          <img
            src={pkg.image}
            alt={pkg.imageAlt}
            loading="lazy"
            decoding="async"
            className="package-card__image"
          />
        </div>
      </Link>

      <div className="package-card__body">
        <div className="package-card__details">
          <span className="package-card__meta-item">
            <MapPin size={14} aria-hidden="true" />
            {pkg.destinationName}
          </span>
          <span className="package-card__meta-item">
            <Clock size={14} aria-hidden="true" />
            {pkg.duration}
          </span>
        </div>

        <h3 className="package-card__title">
          <Link to={`/packages/${pkg.slug}`}>{pkg.title}</Link>
        </h3>

        <p className="package-card__desc">{pkg.shortDescription}</p>

        {previewHighlights.length > 0 && (
          <ul className="package-card__highlights" aria-label="Package highlights">
            {previewHighlights.map((item) => (
              <li key={item} className="package-card__highlight-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="package-card__footer">
          <div className="package-card__price-group">
            <span className="package-card__price-label">Illustrative from</span>
            <span className="package-card__price">{formatIndicativePrice(pkg.startingPrice)}</span>
          </div>

          <Link to={`/packages/${pkg.slug}`} className="package-card__link">
            View Package
            <ArrowRight size={16} aria-hidden="true" className="package-card__arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
