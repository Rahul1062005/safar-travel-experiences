import brandCourtyardImage from '../assets/images/brand-courtyard.jpg';
import closingValleyImage from '../assets/images/closing-valley.jpg';
import heroHimalayasImage from '../assets/images/hero-himalayas.jpg';

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const HERO_CONTENT = {
  eyebrow: 'Curated Indian Travel',
  headline: 'Find your way to somewhere wonderful.',
  description:
    'Discover thoughtfully curated journeys across India, from quiet mountain escapes to vibrant coastal experiences.',
  primaryCta: { label: 'Explore Destinations', to: '/destinations' },
  secondaryCta: { label: 'Plan Your Trip', to: '/contact' },
  note: 'Self-initiated portfolio concept · Illustrative journeys & sample itineraries across India',
  image: heroHimalayasImage,
  imageAlt:
    'Still mountain lake reflecting snow-capped Himalayan peaks beneath a clear morning sky in India',
};

export const BRAND_INTRO_CONTENT = {
  eyebrow: 'About Safar',
  heading: 'Travel planned with clarity, warmth, and room to breathe.',
  paragraphs: [
    'Planning a holiday across India often means piecing together scattered social media posts, unclear inclusions, and rushed schedules. Safar brings destinations, sample itineraries, and straightforward trip enquiries into one calm, readable space.',
    'Whether you are comparing a quiet week in the Himachal hills, a houseboat glide through Kerala, or a heritage loop across Rajasthan, each journey is framed around sensible pacing and transparent details.',
  ],
  cta: { label: 'Read Our Story', to: '/about' },
  image: brandCourtyardImage,
  imageAlt:
    'Sunlit carved sandstone and white marble palace courtyard in Rajasthan framed by leafy courtyard trees',
};

export const SAFAR_VALUES = [
  {
    id: 'curated',
    icon: 'Compass',
    title: 'Thoughtfully curated journeys',
    description:
      'Every sample route focuses on a few meaningful stops rather than cramming landmarks into exhausting checklists.',
  },
  {
    id: 'flexible',
    icon: 'SlidersHorizontal',
    title: 'Flexible travel experiences',
    description:
      'Sample packages are structured as starting points you can adapt around travel dates, group size, and preferred pace.',
  },
  {
    id: 'clear',
    icon: 'FileText',
    title: 'Clear travel information',
    description:
      'Durations, indicative prices, highlights, and inclusions are laid out plainly so comparing options stays effortless.',
  },
  {
    id: 'discovery',
    icon: 'MapPin',
    title: 'Memorable destination discovery',
    description:
      'Explore mountain valleys, coastal towns, heritage cities, and river retreats across India in one organized guide.',
  },
];

export const CLOSING_CTA_CONTENT = {
  eyebrow: 'Start Planning',
  heading: 'Have a region or season in mind?',
  description:
    'Browse our sample packages for inspiration or send a quick enquiry with your preferred month and travel style.',
  primaryCta: { label: 'Plan Your Trip', to: '/contact' },
  secondaryCta: { label: 'Browse All Packages', to: '/packages' },
  image: closingValleyImage,
  imageAlt:
    'Expansive high-altitude lake and snow-dusted Himalayan ridge across northern India',
};

export const DEMO_CONTACT_INFO = {
  brandName: 'Safar',
  tagline: 'Travel & Experiences',
  description:
    'A warm, editorial Indian travel agency concept built to demonstrate thoughtful destination discovery and clean frontend engineering.',
  email: 'hello@safar-demo.example',
  location: 'New Delhi, India (Portfolio Concept)',
  disclaimer:
    'Safar is a fictional concept brand built for portfolio demonstration. Destinations, packages, and indicative prices are sample examples only — no live bookings or payments are processed.',
};

export const ABOUT_CONTENT = {
  eyebrow: 'About Safar',
  title: 'Calm travel planning, shaped around real Indian journeys.',
  intro:
    'Safar — Travel & Experiences is a fictional Indian travel agency concept built to explore how destination discovery and trip planning can feel clear, unhurried, and trustworthy.',
  heroNote:
    'Self-initiated portfolio project · No real bookings, paid partnerships, or invented company credentials.',
  storyHeading: 'Why this travel concept exists',
  storyParagraphs: [
    'Planning a domestic trip in India often means sorting through cluttered feeds, ambiguous day plans, and hidden costs before knowing whether a pace actually fits your holiday.',
    'Safar was designed around the opposite approach: calm editorial typography, focused regional guides across six distinct corners of India, transparent sample budgets, and a straightforward enquiry experience.',
    'Everything presented here is illustrative portfolio work demonstrating frontend architecture, responsive design, and clear user journeys — not a commercial travel agency.',
  ],
  philosophy: [
    {
      id: 'meaningful-experiences',
      title: 'Meaningful experiences',
      description:
        'Routes prioritize fewer, richer stops—such as heritage walks in Udaipur or riverside mornings in Rishikesh—over rushing through crowded checklists.',
    },
    {
      id: 'thoughtful-planning',
      title: 'Thoughtful planning',
      description:
        'Each sample itinerary balances road transfer times, realistic seasonal timing, and clear summaries of what is included or excluded.',
    },
    {
      id: 'local-discovery',
      title: 'Local discovery',
      description:
        'Destination guides highlight quieter neighbourhoods, village lanes, local architecture, and practical tips helpful to first-time visitors.',
    },
    {
      id: 'comfortable-journeys',
      title: 'Comfortable journeys',
      description:
        'Trips are paced around single-base or twin-base stays wherever possible so travellers spend more hours enjoying places than repacking luggage.',
    },
  ],
  principles: [
    {
      id: 'transparent-structure',
      icon: 'FileText',
      title: 'Transparent sample information',
      description:
        'Sample INR starting figures and day-by-day outlines are written plainly as planning references rather than opaque teaser rates.',
    },
    {
      id: 'tailored-pacing',
      icon: 'SlidersHorizontal',
      title: 'Adaptable trip framing',
      description:
        'Illustrative itineraries serve as flexible starting points that travellers can adjust around preferred months, group sizes, and budgets.',
    },
    {
      id: 'curated-regions',
      icon: 'Compass',
      title: 'Focused regional curation',
      description:
        'Six complementary regions—Himalayan hills, desert heritage, palm-lined coasts, backwaters, lakes, and river valleys—anchor the catalog.',
    },
    {
      id: 'honest-portfolio',
      icon: 'ShieldCheck',
      title: 'Honest portfolio presentation',
      description:
        'No invented testimonials, fabricated partner badges, countdown timers, or pretend instant-booking promises appear anywhere on the site.',
    },
  ],
};

export const IMAGE_CREDITS = [
  { subject: 'Hero Himalayan Lake', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf' },
  { subject: 'Rajasthan Courtyard (Brand Intro)', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1676444490527-cf8f7894e9f0' },
  { subject: 'Manali', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868' },
  { subject: 'Kashmir (Dal Lake)', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be' },
  { subject: 'Goa Coast', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1695411560235-595738c0dbda' },
  { subject: 'Rajasthan (Udaipur City Palace)', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1589901164570-f9de6556e1c1' },
  { subject: 'Kerala Backwaters', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1792767556926-d2c4233a8ca0' },
  { subject: 'Rishikesh Ganga', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1598609970679-53239f2ede82' },
  { subject: 'Closing Himalayan Ridge', source: 'Unsplash', url: 'https://images.unsplash.com/photo-1768728584560-ebff06739236' },
];
