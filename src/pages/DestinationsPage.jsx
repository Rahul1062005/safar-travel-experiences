import { ArrowRight, RotateCcw, Search, X } from 'lucide-react';
import { useState } from 'react';
import closingValleyImage from '../assets/images/closing-valley.jpg';
import { Button } from '../components/Button.jsx';
import { DestinationCard } from '../components/DestinationCard.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { DESTINATIONS, DESTINATION_CATEGORIES } from '../data/destinations.js';
import '../styles/filters.css';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';
import './DestinationsPage.css';

export function DestinationsPage() {
  useDocumentMeta({
    title: 'Curated Indian Destinations',
    description:
      'Explore six curated destinations across India — Manali, Kashmir, Goa, Rajasthan, Kerala, and Rishikesh — with regional highlights and seasonal guidance.',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'All' || dest.category === selectedCategory;

    if (!normalizedQuery) return matchesCategory;

    const searchableText = [
      dest.name,
      dest.region,
      dest.zone,
      dest.tripType,
      dest.shortDescription,
    ]
      .join(' ')
      .toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  const hasActiveFilters = Boolean(normalizedQuery) || selectedCategory !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <>
      <PageHero
        eyebrow="Destination Guide"
        title="Curated Indian Destinations"
        description="From Himalayan valleys and quiet river towns to sandstone palaces and palm-lined backwaters, explore six regions shaped around calm, meaningful travel."
        note="Illustrative portfolio destination guide · Select any region for seasonal tips, highlights, and related packages."
        image={closingValleyImage}
        imageAlt="High-altitude lake and snow-dusted mountain ridges in northern India"
      />

      <section className="section" aria-label="Destination discovery and listing">
        <div className="container">
          <h2 className="sr-only">Curated Indian destinations directory</h2>
          <div className="discovery-toolbar">
            <div className="discovery-toolbar__top">
              <div className="discovery-field">
                <label htmlFor="destination-search" className="discovery-field__label">
                  Search destinations
                </label>
                <div className="discovery-search">
                  <Search size={18} aria-hidden="true" className="discovery-search__icon" />
                  <input
                    id="destination-search"
                    type="search"
                    className="discovery-search__input"
                    placeholder="Search by place, state, or landscape (e.g. Kerala, mountains, forts)..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="discovery-search__clear"
                      aria-label="Clear destination search"
                      onClick={() => setSearchQuery('')}
                    >
                      <X size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="discovery-group">
              <span className="discovery-field__label" id="destination-category-label">
                Filter by travel style
              </span>
              <div
                className="discovery-pills"
                role="group"
                aria-labelledby="destination-category-label"
              >
                {DESTINATION_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`discovery-pill ${isActive ? 'discovery-pill--active' : ''}`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="discovery-meta">
              <p className="discovery-count" aria-live="polite">
                Showing <strong>{filteredDestinations.length}</strong> of{' '}
                <strong>{DESTINATIONS.length}</strong> destinations
              </p>

              {hasActiveFilters && (
                <button type="button" className="discovery-reset" onClick={resetFilters}>
                  <RotateCcw size={14} aria-hidden="true" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="destinations-listing-grid">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No matching destinations found"
              message={`No destinations matched "${searchQuery || selectedCategory}". Try clearing your search term or switching travel styles.`}
              actionLabel="Reset all filters"
              onAction={resetFilters}
            />
          )}
        </div>
      </section>

      <section className="section destinations-cta-band" aria-labelledby="dest-cta-heading">
        <div className="container">
          <div className="destinations-cta-box">
            <div>
              <span className="eyebrow">Next Step</span>
              <h2 id="dest-cta-heading" className="destinations-cta-box__title">
                Compare sample itineraries for these regions
              </h2>
              <p className="destinations-cta-box__text">
                Explore Safar’s illustrative tour packages to see sample durations, highlights,
                inclusions, and day-by-day pacing.
              </p>
            </div>
            <div className="destinations-cta-box__actions">
              <Button to="/packages" variant="primary" size="lg">
                Explore Packages
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
