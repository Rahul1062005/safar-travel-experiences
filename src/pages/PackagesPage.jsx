import { ArrowRight, RotateCcw, Search, X } from 'lucide-react';
import { useState } from 'react';
import rajasthanImage from '../assets/images/rajasthan.jpg';
import { Button } from '../components/Button.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { PackageCard } from '../components/PackageCard.jsx';
import { PageHero } from '../components/PageHero.jsx';
import {
  PACKAGES,
  PACKAGE_CATEGORIES,
  PACKAGE_DURATIONS,
} from '../data/packages.js';
import '../styles/filters.css';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';
import './PackagesPage.css';

export function PackagesPage() {
  useDocumentMeta({
    title: 'Sample Travel Packages',
    description:
      'Browse illustrative multi-day travel packages across Manali, Kashmir, Goa, Rajasthan, Kerala, and Rishikesh with transparent highlights and starting budgets.',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPackages = PACKAGES.filter((pkg) => {
    const matchesDuration =
      selectedDuration === 'All' || pkg.durationGroup === selectedDuration;
    const matchesCategory =
      selectedCategory === 'All' || pkg.category === selectedCategory;

    if (!matchesDuration || !matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = [
      pkg.title,
      pkg.destinationName,
      pkg.duration,
      pkg.shortDescription,
      ...pkg.tags,
      ...(pkg.highlights || []),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
    if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
    if (sortBy === 'duration-asc') return a.days - b.days;
    return Number(b.featured) - Number(a.featured);
  });

  const hasActiveFilters =
    Boolean(normalizedQuery) ||
    selectedDuration !== 'All' ||
    selectedCategory !== 'All' ||
    sortBy !== 'featured';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDuration('All');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  return (
    <>
      <PageHero
        eyebrow="Sample Travel Packages"
        title="Curated journeys across India"
        description="Compare sample multi-day routes across mountains, coastal retreats, backwaters, and heritage cities. Open any package for a full day-by-day itinerary, inclusions, and planning notes."
        note="Illustrative portfolio examples: displayed durations and starting prices in INR are sample references, not live commercial offers or confirmed availability."
        image={rajasthanImage}
        imageAlt="Lake Pichola and Udaipur City Palace in warm afternoon sunlight"
      />

      <section className="section" aria-label="Travel package search and listing">
        <div className="container">
          <h2 className="sr-only">Sample travel packages directory</h2>
          <div className="discovery-toolbar">
            <div className="discovery-toolbar__top discovery-toolbar__top--with-sort">
              <div className="discovery-field">
                <label htmlFor="package-search" className="discovery-field__label">
                  Search packages
                </label>
                <div className="discovery-search">
                  <Search size={18} aria-hidden="true" className="discovery-search__icon" />
                  <input
                    id="package-search"
                    type="search"
                    className="discovery-search__input"
                    placeholder="Search by package title, destination, or interest..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="discovery-search__clear"
                      aria-label="Clear package search"
                      onClick={() => setSearchQuery('')}
                    >
                      <X size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>

              <div className="discovery-field">
                <label htmlFor="package-sort" className="discovery-field__label">
                  Sort by
                </label>
                <select
                  id="package-sort"
                  className="discovery-select"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Featured first</option>
                  <option value="price-asc">Indicative price: Low to High</option>
                  <option value="price-desc">Indicative price: High to Low</option>
                  <option value="duration-asc">Duration: Shortest first</option>
                </select>
              </div>
            </div>

            <div className="discovery-groups">
              <div className="discovery-group">
                <span className="discovery-field__label" id="package-duration-label">
                  Duration
                </span>
                <div
                  className="discovery-pills"
                  role="group"
                  aria-labelledby="package-duration-label"
                >
                  {PACKAGE_DURATIONS.map((duration) => {
                    const isActive = selectedDuration === duration;
                    return (
                      <button
                        key={duration}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setSelectedDuration(duration)}
                        className={`discovery-pill ${isActive ? 'discovery-pill--active' : ''}`}
                      >
                        {duration}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="discovery-group">
                <span className="discovery-field__label" id="package-category-label">
                  Travel style
                </span>
                <div
                  className="discovery-pills"
                  role="group"
                  aria-labelledby="package-category-label"
                >
                  {PACKAGE_CATEGORIES.map((category) => {
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
            </div>

            <div className="discovery-meta">
              <p className="discovery-count" aria-live="polite">
                Showing <strong>{sortedPackages.length}</strong> of{' '}
                <strong>{PACKAGES.length}</strong> sample packages
              </p>

              {hasActiveFilters && (
                <button type="button" className="discovery-reset" onClick={resetFilters}>
                  <RotateCcw size={14} aria-hidden="true" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {sortedPackages.length > 0 ? (
            <div className="packages-listing-grid">
              {sortedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} showHighlights />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No matching sample packages"
              message="No travel packages matched your current search or filter combination. Try resetting filters to browse all sample itineraries."
              actionLabel="Reset all filters"
              onAction={resetFilters}
            />
          )}

          <div className="packages-demo-notice">
            <p>
              <strong>Portfolio Demo Notice:</strong> All packages, day-by-day outlines, and INR
              starting budgets are illustrative examples designed to showcase travel discovery UX.
              No real-time inventory or instant bookings take place.
            </p>
            <Button to="/contact" variant="secondary" size="md">
              Send a Sample Enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
