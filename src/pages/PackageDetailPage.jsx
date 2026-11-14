import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  Minus,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { PackageCard } from '../components/PackageCard.jsx';
import { PACKAGES, formatIndicativePrice } from '../data/packages.js';
import '../styles/detailPage.css';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';

export function PackageDetailPage() {
  const { slug } = useParams();
  const pkg = PACKAGES.find((item) => item.slug === slug);

  useDocumentMeta({
    title: pkg ? `${pkg.title} — ${pkg.duration}` : 'Package Not Found',
    description: pkg
      ? `${pkg.heroIntro} View the day-by-day sample itinerary, inclusions, and planning notes.`
      : 'The requested sample travel package could not be found on Safar.',
  });

  if (!pkg) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            icon={MapPin}
            headingTag="h1"
            title="Sample package not found"
            message={`We could not find a travel package matching "${slug}". Browse all illustrative packages or explore destinations across India.`}
            actionLabel="View All Packages"
            actionTo="/packages"
            secondaryAction={{ to: '/destinations', label: 'Explore Destinations' }}
          />
        </div>
      </section>
    );
  }

  const relatedPackages = PACKAGES.filter((item) => item.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      {/* A. Package Hero */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/packages" className="detail-breadcrumb">
            <ArrowLeft size={16} aria-hidden="true" />
            All Packages
          </Link>

          <div className="detail-hero__grid">
            <div>
              <div className="detail-hero__meta">
                <span className="detail-hero__badge">
                  <MapPin size={14} aria-hidden="true" />
                  {pkg.destinationName}
                </span>
                <span className="detail-hero__badge">
                  <Clock size={14} aria-hidden="true" />
                  {pkg.duration}
                </span>
              </div>

              <h1 className="detail-hero__title">{pkg.title}</h1>
              <p className="detail-hero__intro">{pkg.heroIntro}</p>

              <div className="detail-hero__price-box">
                <span className="detail-hero__price-label">Illustrative Starting Price</span>
                <span className="detail-hero__price-value">
                  {formatIndicativePrice(pkg.startingPrice)}
                </span>
                <span className="detail-hero__price-note">
                  Per person sample guide · Portfolio demo (not a live offer)
                </span>
              </div>

              <div className="detail-hero__actions">
                <Button to={`/contact?package=${pkg.slug}`} variant="primary" size="lg">
                  Plan Your Trip
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button to={`/destinations/${pkg.destinationSlug}`} variant="secondary" size="lg">
                  Destination Guide
                </Button>
              </div>
            </div>

            <figure className="detail-hero__media">
              <img
                src={pkg.image}
                alt={pkg.imageAlt}
                fetchPriority="high"
                decoding="async"
                className="detail-hero__img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* B. Package Overview */}
      <section className="section" aria-labelledby="pkg-overview-heading">
        <div className="container detail-split">
          <div>
            <span className="eyebrow">Package Overview</span>
            <h2 id="pkg-overview-heading" className="detail-section-title">
              How this journey flows
            </h2>
            <div className="detail-prose">
              {pkg.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="detail-aside-card" aria-labelledby="ideal-for-heading">
            <span className="eyebrow">Ideal Traveller</span>
            <h3 id="ideal-for-heading" className="detail-aside-card__title">
              Who this route suits best
            </h3>
            <span className="detail-aside-card__highlight">{pkg.category}</span>
            <p className="detail-aside-card__text">{pkg.idealFor}</p>
          </aside>
        </div>
      </section>

      {/* C. Highlights */}
      <section className="section detail-surface-band" aria-labelledby="pkg-highlights-heading">
        <div className="container">
          <span className="eyebrow">At a Glance</span>
          <h2 id="pkg-highlights-heading" className="detail-section-title">
            Key journey highlights
          </h2>

          <div className="activity-list">
            {pkg.highlights.map((highlight) => (
              <div key={highlight} className="activity-item">
                <CheckCircle2 size={20} aria-hidden="true" className="activity-item__icon" />
                <p className="activity-item__title activity-item__title--single">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Day-by-Day Itinerary */}
      <section className="section" aria-labelledby="pkg-itinerary-heading">
        <div className="container">
          <span className="eyebrow">Sample Schedule</span>
          <h2 id="pkg-itinerary-heading" className="detail-section-title">
            Day-by-day itinerary
          </h2>

          <ol className="itinerary-list">
            {pkg.itinerary.map((step) => (
              <li key={step.day} className="itinerary-day">
                <span className="itinerary-day__badge">
                  Day {String(step.day).padStart(2, '0')}
                </span>
                <div>
                  <p className="itinerary-day__location">{step.location}</p>
                  <h3 className="itinerary-day__title">{step.title}</h3>
                  <p className="itinerary-day__desc">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* E. What's Included & F. What's Not Included */}
      <section className="section detail-surface-band" aria-labelledby="pkg-inclusions-heading">
        <div className="container">
          <span className="eyebrow">Illustrative Scope</span>
          <h2 id="pkg-inclusions-heading" className="detail-section-title">
            What’s included and excluded
          </h2>

          <div className="detail-grid-2">
            <div className="info-panel">
              <h3 className="info-panel__title">What’s included (illustrative)</h3>
              <ul className="check-list">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="check-list__item">
                    <Check
                      size={18}
                      aria-hidden="true"
                      className="check-list__icon check-list__icon--included"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-panel">
              <h3 className="info-panel__title">What’s not included (illustrative)</h3>
              <ul className="check-list">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="check-list__item">
                    <Minus
                      size={18}
                      aria-hidden="true"
                      className="check-list__icon check-list__icon--excluded"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* G. Important Information */}
      <section className="section detail-sand-band" aria-labelledby="pkg-important-heading">
        <div className="container">
          <span className="eyebrow">Before You Plan</span>
          <h2 id="pkg-important-heading" className="detail-section-title">
            Important trip notes
          </h2>

          <div className="detail-grid-3">
            <div className="info-panel">
              <h3 className="info-panel__title">
                <Calendar size={18} aria-hidden="true" className="detail-inline-icon" />
                Suitable Season
              </h3>
              <p className="info-panel__text">{pkg.importantInfo.bestSeason}</p>
            </div>

            <div className="info-panel">
              <h3 className="info-panel__title">
                <Clock size={18} aria-hidden="true" className="detail-inline-icon" />
                Itinerary Pace
              </h3>
              <p className="info-panel__text">{pkg.importantInfo.pace}</p>
            </div>

            <div className="info-panel">
              <h3 className="info-panel__title">
                <Info size={18} aria-hidden="true" className="detail-inline-icon" />
                Portfolio Demo Disclaimer
              </h3>
              <p className="info-panel__text">{pkg.importantInfo.disclaimer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* H. Related Packages */}
      <section className="section" aria-labelledby="related-pkg-heading">
        <div className="container">
          <span className="eyebrow">More Journeys</span>
          <h2 id="related-pkg-heading" className="detail-section-title">
            Alternative sample packages
          </h2>

          <div className="detail-grid-3">
            {relatedPackages.map((item) => (
              <PackageCard key={item.id} pkg={item} />
            ))}
          </div>
        </div>
      </section>

      {/* I. Closing CTA */}
      <section className="section detail-section--flush-top" aria-labelledby="pkg-detail-cta">
        <div className="container">
          <div className="detail-cta-card">
            <div>
              <span className="eyebrow">Custom Enquiry</span>
              <h2 id="pkg-detail-cta" className="detail-cta-card__title">
                Interested in {pkg.title}?
              </h2>
              <p className="detail-cta-card__text">
                This sample itinerary cannot be booked online, but you can share your preferred
                dates and group size through our demo enquiry page.
              </p>
            </div>
            <div className="detail-cta-card__actions">
              <Button to={`/contact?package=${pkg.slug}`} variant="primary" size="lg">
                Plan Your Trip
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to="/destinations" variant="secondary" size="lg">
                Explore Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
