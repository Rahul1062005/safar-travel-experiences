import { ArrowRight, Compass, FileText, MapPin, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { DestinationCard } from '../components/DestinationCard.jsx';
import { PackageCard } from '../components/PackageCard.jsx';
import { DESTINATIONS } from '../data/destinations.js';
import { PACKAGES } from '../data/packages.js';
import {
  BRAND_INTRO_CONTENT,
  CLOSING_CTA_CONTENT,
  HERO_CONTENT,
  SAFAR_VALUES,
} from '../data/siteContent.js';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';
import './HomePage.css';

const VALUE_ICONS = {
  Compass,
  SlidersHorizontal,
  FileText,
  MapPin,
};

export function HomePage() {
  useDocumentMeta({
    title: 'Curated Indian Travel & Experiences',
    description:
      'Discover thoughtfully curated journeys across India with Safar — explore destinations from Manali to Kerala, browse sample packages, and plan your trip.',
  });

  const featuredPackages = PACKAGES.filter((pkg) => pkg.featured);

  return (
    <>
      {/* A. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">{HERO_CONTENT.eyebrow}</span>
            <h1 className="hero-title">{HERO_CONTENT.headline}</h1>
            <p className="hero-description">{HERO_CONTENT.description}</p>

            <div className="hero-actions">
              <Button to={HERO_CONTENT.primaryCta.to} variant="primary" size="lg">
                {HERO_CONTENT.primaryCta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to={HERO_CONTENT.secondaryCta.to} variant="secondary" size="lg">
                {HERO_CONTENT.secondaryCta.label}
              </Button>
            </div>

            <p className="hero-note">{HERO_CONTENT.note}</p>
          </div>

          <figure className="hero-media">
            <img
              src={HERO_CONTENT.image}
              alt={HERO_CONTENT.imageAlt}
              fetchPriority="high"
              decoding="async"
              className="hero-media__img"
            />
          </figure>
        </div>
      </section>

      {/* B. Brand Introduction */}
      <section className="section brand-intro-section" aria-labelledby="brand-intro-heading">
        <div className="container brand-intro-grid">
          <figure className="brand-intro__media">
            <img
              src={BRAND_INTRO_CONTENT.image}
              alt={BRAND_INTRO_CONTENT.imageAlt}
              loading="lazy"
              decoding="async"
              className="brand-intro__img"
            />
          </figure>

          <div className="brand-intro__content">
            <span className="eyebrow">{BRAND_INTRO_CONTENT.eyebrow}</span>
            <h2 id="brand-intro-heading" className="brand-intro__heading">
              {BRAND_INTRO_CONTENT.heading}
            </h2>
            {BRAND_INTRO_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="brand-intro__text">
                {paragraph}
              </p>
            ))}
            <div className="brand-intro__action">
              <Button to={BRAND_INTRO_CONTENT.cta.to} variant="secondary" size="md">
                {BRAND_INTRO_CONTENT.cta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* C. Featured Destinations */}
      <section className="section" aria-labelledby="featured-destinations-heading">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Destinations Across India</span>
              <h2 id="featured-destinations-heading" className="section-header__title">
                Six regions to begin your journey
              </h2>
            </div>
            <Link to="/destinations" className="section-header__link">
              View all destinations
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="destinations-grid">
            {DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* D. Featured Travel Packages */}
      <section className="section packages-section" aria-labelledby="featured-packages-heading">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Sample Itineraries</span>
              <h2 id="featured-packages-heading" className="section-header__title">
                Featured travel packages
              </h2>
            </div>
            <Link to="/packages" className="section-header__link">
              Explore all packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="packages-grid">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <p className="packages-disclaimer">
            Illustrative portfolio examples: displayed durations and starting prices are sample
            planning references and do not indicate real-time availability or confirmed bookings.
          </p>
        </div>
      </section>

      {/* E. Why Travel With Safar? */}
      <section className="section" aria-labelledby="why-safar-heading">
        <div className="container values-layout">
          <div className="values-intro">
            <span className="eyebrow">Why Safar</span>
            <h2 id="why-safar-heading" className="values-intro__title">
              Built around straightforward trip planning
            </h2>
            <p className="values-intro__text">
              Every detail on Safar is designed to help travellers compare regions calmly and move
              from early curiosity to a clear enquiry without clutter.
            </p>
          </div>

          <div className="values-grid">
            {SAFAR_VALUES.map((item) => {
              const IconComponent = VALUE_ICONS[item.icon];
              return (
                <article key={item.id} className="value-item">
                  <div className="value-item__icon" aria-hidden="true">
                    {IconComponent && <IconComponent size={20} strokeWidth={1.75} />}
                  </div>
                  <h3 className="value-item__title">{item.title}</h3>
                  <p className="value-item__desc">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. Travel Inspiration / Closing CTA */}
      <section className="section closing-cta-section" aria-labelledby="closing-cta-heading">
        <div className="container">
          <div className="closing-cta-card">
            <div className="closing-cta__content">
              <span className="eyebrow">{CLOSING_CTA_CONTENT.eyebrow}</span>
              <h2 id="closing-cta-heading" className="closing-cta__title">
                {CLOSING_CTA_CONTENT.heading}
              </h2>
              <p className="closing-cta__desc">{CLOSING_CTA_CONTENT.description}</p>

              <div className="closing-cta__actions">
                <Button to={CLOSING_CTA_CONTENT.primaryCta.to} variant="primary" size="lg">
                  {CLOSING_CTA_CONTENT.primaryCta.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button to={CLOSING_CTA_CONTENT.secondaryCta.to} variant="secondary" size="lg">
                  {CLOSING_CTA_CONTENT.secondaryCta.label}
                </Button>
              </div>
            </div>

            <figure className="closing-cta__media">
              <img
                src={CLOSING_CTA_CONTENT.image}
                alt={CLOSING_CTA_CONTENT.imageAlt}
                loading="lazy"
                decoding="async"
                className="closing-cta__img"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
