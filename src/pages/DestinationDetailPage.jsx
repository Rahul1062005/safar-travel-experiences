import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Compass,
  Info,
  MapPin,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { PackageCard } from '../components/PackageCard.jsx';
import { DESTINATIONS } from '../data/destinations.js';
import { PACKAGES } from '../data/packages.js';
import '../styles/detailPage.css';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';

export function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = DESTINATIONS.find((item) => item.slug === slug);

  useDocumentMeta({
    title: destination ? `${destination.name} Travel Guide` : 'Destination Not Found',
    description: destination
      ? `${destination.heroIntro} Explore best seasons, highlights, and sample packages for ${destination.name}.`
      : 'The requested destination guide could not be found on Safar.',
  });

  if (!destination) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            icon={MapPin}
            headingTag="h1"
            title="Destination guide not found"
            message={`We could not find a destination guide matching "${slug}". Explore our six curated Indian destinations or return to the homepage.`}
            actionLabel="View All Destinations"
            actionTo="/destinations"
            secondaryAction={{ to: '/', label: 'Return Home' }}
          />
        </div>
      </section>
    );
  }

  const relatedPackages = PACKAGES.filter(
    (pkg) => pkg.destinationSlug === destination.slug
  );

  return (
    <>
      {/* A. Destination Hero */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/destinations" className="detail-breadcrumb">
            <ArrowLeft size={16} aria-hidden="true" />
            All Destinations
          </Link>

          <div className="detail-hero__grid">
            <div>
              <div className="detail-hero__meta">
                <span className="detail-hero__badge">
                  <MapPin size={14} aria-hidden="true" />
                  {destination.region} · {destination.zone}
                </span>
                <span className="detail-hero__badge">{destination.tripType}</span>
              </div>

              <h1 className="detail-hero__title">{destination.name}</h1>
              <p className="detail-hero__intro">{destination.heroIntro}</p>

              <div className="detail-hero__actions">
                <Button
                  to={`/contact?destination=${destination.slug}`}
                  variant="primary"
                  size="lg"
                >
                  Plan Your Trip
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button to="/packages" variant="secondary" size="lg">
                  Browse Sample Packages
                </Button>
              </div>
            </div>

            <figure className="detail-hero__media">
              <img
                src={destination.image}
                alt={destination.imageAlt}
                fetchPriority="high"
                decoding="async"
                className="detail-hero__img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* B. About the Destination & C. Best Time to Visit */}
      <section className="section" aria-labelledby="dest-about-heading">
        <div className="container detail-split">
          <div>
            <span className="eyebrow">Destination Overview</span>
            <h2 id="dest-about-heading" className="detail-section-title">
              About {destination.name}
            </h2>
            <div className="detail-prose">
              {destination.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="detail-aside-card" aria-labelledby="best-time-heading">
            <span className="eyebrow">
              <Calendar size={14} aria-hidden="true" className="detail-inline-icon" />
              Best Time to Visit
            </span>
            <h3 id="best-time-heading" className="detail-aside-card__title">
              {destination.bestTime.season}
            </h3>
            <span className="detail-aside-card__highlight">
              {destination.bestTime.months}
            </span>
            <p className="detail-aside-card__text">{destination.bestTime.summary}</p>
          </aside>
        </div>
      </section>

      {/* D. Top Attractions and Experiences */}
      <section className="section detail-surface-band" aria-labelledby="attractions-heading">
        <div className="container">
          <span className="eyebrow">Key Highlights</span>
          <h2 id="attractions-heading" className="detail-section-title">
            Top attractions and experiences
          </h2>

          <div className="detail-grid-2">
            {destination.attractions.map((attraction, index) => (
              <article key={attraction.name} className="attraction-card">
                <div className="attraction-card__top">
                  <span className="attraction-card__num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="attraction-card__kind">{attraction.kind}</span>
                </div>
                <h3 className="attraction-card__title">{attraction.name}</h3>
                <p className="attraction-card__desc">{attraction.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E. Things to Do */}
      <section className="section" aria-labelledby="things-to-do-heading">
        <div className="container">
          <span className="eyebrow">Experiences</span>
          <h2 id="things-to-do-heading" className="detail-section-title">
            Things to do in {destination.name}
          </h2>

          <div className="activity-list">
            {destination.thingsToDo.map((activity) => (
              <div key={activity.title} className="activity-item">
                <Compass size={20} aria-hidden="true" className="activity-item__icon" />
                <div>
                  <h3 className="activity-item__title">{activity.title}</h3>
                  <p className="activity-item__detail">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Travel Information */}
      <section className="section detail-sand-band" aria-labelledby="travel-info-heading">
        <div className="container">
          <span className="eyebrow">Practical Guidance</span>
          <h2 id="travel-info-heading" className="detail-section-title">
            Travel information for first-time visitors
          </h2>

          <div className="detail-grid-3">
            <div className="info-panel">
              <h3 className="info-panel__title">Suggested Stay</h3>
              <p className="info-panel__text">
                <strong>{destination.travelInfo.suggestedDuration}</strong> works comfortably for a
                relaxed first visit without rushing between sights.
              </p>
            </div>

            <div className="info-panel">
              <h3 className="info-panel__title">Getting There</h3>
              <p className="info-panel__text">{destination.travelInfo.gettingThere}</p>
            </div>

            <div className="info-panel">
              <h3 className="info-panel__title">First-Timer Tips</h3>
              <ul className="check-list">
                {destination.travelInfo.firstTimerTips.map((tip) => (
                  <li key={tip} className="check-list__item">
                    <Info size={16} aria-hidden="true" className="check-list__icon" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* G. Related Travel Packages */}
      <section className="section" aria-labelledby="related-packages-heading">
        <div className="container">
          <span className="eyebrow">Sample Itineraries</span>
          <h2 id="related-packages-heading" className="detail-section-title">
            Sample packages featuring {destination.name}
          </h2>

          {relatedPackages.length > 0 ? (
            <div className="detail-grid-3">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} showHighlights />
              ))}
            </div>
          ) : (
            <p className="detail-prose">
              Explore all available sample packages across India on our packages directory.
            </p>
          )}
        </div>
      </section>

      {/* H. Closing CTA */}
      <section className="section detail-section--flush-top" aria-labelledby="dest-detail-cta">
        <div className="container">
          <div className="detail-cta-card">
            <div>
              <span className="eyebrow">Plan With Safar</span>
              <h2 id="dest-detail-cta" className="detail-cta-card__title">
                Ready to shape a trip to {destination.name}?
              </h2>
              <p className="detail-cta-card__text">
                Compare all sample itineraries across India or share your preferred travel dates in
                a quick demo enquiry.
              </p>
            </div>
            <div className="detail-cta-card__actions">
              <Button
                to={`/contact?destination=${destination.slug}`}
                variant="primary"
                size="lg"
              >
                Plan Your Trip
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to="/packages" variant="secondary" size="lg">
                Explore Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
