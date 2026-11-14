import { ArrowRight, Compass, FileText, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import keralaImage from '../assets/images/kerala.jpg';
import rishikeshImage from '../assets/images/rishikesh.jpg';
import { Button } from '../components/Button.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { PrincipleCard } from '../components/PrincipleCard.jsx';
import { ABOUT_CONTENT } from '../data/siteContent.js';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';
import './AboutPage.css';

const PRINCIPLE_ICONS = {
  FileText,
  SlidersHorizontal,
  Compass,
  ShieldCheck,
};

export function AboutPage() {
  useDocumentMeta({
    title: 'About Safar — Travel Philosophy & Concept',
    description:
      'Learn about Safar — Travel & Experiences, a fictional Indian travel portfolio concept built around thoughtful pacing, regional curation, and transparent trip planning.',
  });

  return (
    <>
      <PageHero
        eyebrow={ABOUT_CONTENT.eyebrow}
        title={ABOUT_CONTENT.title}
        description={ABOUT_CONTENT.intro}
        note={ABOUT_CONTENT.heroNote}
        image={keralaImage}
        imageAlt="Traditional wooden boat gliding along palm-lined Kerala backwaters in calm daylight"
      />

      {/* Brand Concept & Introduction */}
      <section className="section" aria-labelledby="about-story-heading">
        <div className="container about-story-grid">
          <figure className="about-story__media">
            <img
              src={rishikeshImage}
              alt="Clear emerald Ganga river winding between forested Himalayan foothills in Rishikesh"
              loading="lazy"
              decoding="async"
              className="about-story__img"
            />
          </figure>

          <div>
            <span className="eyebrow">Portfolio Concept</span>
            <h2 id="about-story-heading" className="about-story__heading">
              {ABOUT_CONTENT.storyHeading}
            </h2>

            <div className="about-story__prose">
              {ABOUT_CONTENT.storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <aside className="about-concept-banner" aria-label="Portfolio disclosure">
              <strong>Fictional Brand Disclosure:</strong> Safar does not represent a registered
              commercial tour operator. No agency history, client count, partner network, or
              verified customer testimonial is implied.
            </aside>
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="section about-band-surface" aria-labelledby="philosophy-heading">
        <div className="container">
          <div className="about-section-head">
            <span className="eyebrow">Travel Philosophy</span>
            <h2 id="philosophy-heading" className="about-section-head__title">
              How every journey is framed
            </h2>
            <p className="about-section-head__lead">
              Rather than chasing crowded multi-city checklists, Safar sample routes are organized
              around four practical travel priorities.
            </p>
          </div>

          <div className="about-cards-grid">
            {ABOUT_CONTENT.philosophy.map((item, index) => (
              <PrincipleCard
                key={item.id}
                badge={String(index + 1).padStart(2, '0')}
                title={item.title}
                description={item.description}
                variant="ivory"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Principles */}
      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="about-section-head">
            <span className="eyebrow">Service Principles</span>
            <h2 id="principles-heading" className="about-section-head__title">
              Clarity before commitment
            </h2>
            <p className="about-section-head__lead">
              Four guiding principles shape the structure, tone, and transparency of this travel
              concept.
            </p>
          </div>

          <div className="about-cards-grid">
            {ABOUT_CONTENT.principles.map((item) => (
              <PrincipleCard
                key={item.id}
                icon={PRINCIPLE_ICONS[item.icon]}
                title={item.title}
                description={item.description}
                variant="surface"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section about-band-sand" aria-labelledby="about-cta-heading">
        <div className="container">
          <div className="about-cta-card">
            <div>
              <span className="eyebrow">Explore Further</span>
              <h2 id="about-cta-heading" className="about-cta-card__title">
                Ready to review sample routes or try a demo enquiry?
              </h2>
              <p className="about-cta-card__text">
                Compare illustrative itineraries across all six Indian regions or test the frontend
                enquiry form directly.
              </p>
            </div>
            <div className="about-cta-card__actions">
              <Button to="/packages" variant="primary" size="lg">
                Browse Sample Packages
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
