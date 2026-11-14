import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

/**
 * Editorial card previewing an Indian destination.
 * Reused across the Homepage Featured Destinations grid and Phase 3 Destinations listing.
 */
export function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <Link to={`/destinations/${destination.slug}`} className="destination-card__media-link">
        <div className="destination-card__media">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            loading="lazy"
            decoding="async"
            className="destination-card__image"
          />
        </div>
      </Link>

      <div className="destination-card__body">
        <p className="destination-card__meta">
          <span>{destination.region}</span>
          <span aria-hidden="true">·</span>
          <span>{destination.tripType}</span>
        </p>

        <h3 className="destination-card__title">
          <Link to={`/destinations/${destination.slug}`}>{destination.name}</Link>
        </h3>

        <p className="destination-card__desc">{destination.shortDescription}</p>

        <Link to={`/destinations/${destination.slug}`} className="destination-card__link">
          Explore {destination.name}
          <ArrowRight size={16} aria-hidden="true" className="destination-card__arrow" />
        </Link>
      </div>
    </article>
  );
}
