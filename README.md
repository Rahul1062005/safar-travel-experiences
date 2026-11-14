# Safar — Travel & Experiences

Safar is a fictional Indian travel and experiences website built as a frontend portfolio project. Guided by a warm editorial aesthetic—soft ivory (`#F5F1E8`), deep charcoal (`#20211F`), muted terracotta (`#C56B45`), Cormorant Garamond headings, and Inter body copy—it demonstrates structured React architecture, responsive layout design, interactive client-side discovery, and accessible form flows.

> **Fictional Concept Notice:** Safar is not a commercial travel agency. All packages, INR starting budgets, itineraries, contact details (`hello@safar-demo.example`), and enquiry previews are portfolio demonstrations only.

---

## Key Features

- **Editorial Homepage:** Hero introduction, fictional brand overview, six featured Indian regions, featured travel packages showcase, travel principles, and closing call to action.
- **Destination Discovery & Guides (`/destinations`, `/destinations/:slug`):** Live search and travel-style filtering across six curated destinations (*Manali*, *Kashmir*, *Goa*, *Rajasthan*, *Kerala*, *Rishikesh*), each with a dedicated regional guide page covering seasonal advice, top attractions, things to do, travel notes, and related sample packages.
- **Sample Tour Packages (`/packages`, `/packages/:slug`):** Multi-criteria filtering across seven illustrative itineraries by keyword, duration bucket, and travel style, paired with sorting (featured, price low-to-high, price high-to-low, shortest duration), one-click filter reset, and empty states. Individual detail views display indicative starting budgets, highlights, day-by-day outlines, and sample inclusions/exclusions.
- **About & Travel Philosophy (`/about`):** Dedicated brand concept story explaining the editorial travel philosophy and four guiding principles using reusable visual components.
- **Interactive Enquiry Flow (`/contact`):** Controlled React form with client-side required and format validation, accessible inline error readouts (`aria-invalid`, `aria-describedby`, `role="alert"`), local demo submission summary (`role="status"`), reset workflow, and an optional pre-filled `mailto:` email client handoff.
- **URL Query Preselection & Safe Fallback:** Clicking **Plan Your Trip** from any package (`/contact?package=<slug>`) or destination (`/contact?destination=<slug>`) preselects that option in the enquiry form with contextual back-links, while direct `/contact` visits and unrecognized query parameters fall back gracefully to *General Travel Enquiry*.
- **Reusable UI Architecture & Responsive Accessibility:** Shared [`Navbar`](src/components/Navbar.jsx) with scroll-locked mobile drawer and backdrop, consistent footer, skip-to-content link, reduced-motion support, and modular CSS custom properties.

---

## Technology Stack

- **UI Library:** React 19 (`react`, `react-dom`)
- **Client-Side Routing:** React Router DOM 7 (`react-router-dom`)
- **Build Tooling:** Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Icons:** Lucide React (`lucide-react`)
- **Styling:** Plain modular CSS built on centralized design tokens (`src/styles/tokens.css`, `src/styles/reset.css`, `src/styles/global.css`)
- **Linting:** Oxlint (`oxlint`)

---

## Installation & Local Development

### Prerequisites

- Node.js (v18 or later recommended) and `npm`

### Commands

```bash
# 1. Clone the repository
git clone <repository-url>
cd Safar

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev

# 4. Run the linter
npm run lint

# 5. Build for production
npm run build

# 6. Preview the production bundle locally
npm run preview
```

> **Deployment Note (Static Hosting):** Because Safar uses React Router `BrowserRouter` client-side routes (such as `/packages/himalayan-escape`), configure your static host to rewrite unknown paths to `index.html` so refreshing nested routes directly works smoothly.

---

## Project Structure

```text
Safar/
├── public/                 # Favicon, robots.txt, and sitemap.xml
├── src/
│   ├── assets/images/      # Local Indian travel photography used across routes
│   ├── components/         # Reusable UI primitives (Navbar, Footer, Button, cards, EmptyState)
│   ├── data/               # Static destinations, sample packages, and brand content modules
│   ├── layouts/            # Shared MainLayout wrapper (skip link, header, main, footer)
│   ├── pages/              # Route-level views (Home, Destinations, Packages, Details, About, Contact, 404)
│   ├── routes/             # Centralized React Router route configuration
│   ├── styles/             # Design tokens, reset, typography primitives, filter/detail stylesheets
│   └── utils/              # Enquiry URL preselection/validation helpers and route document metadata hook
├── index.html              # Base HTML shell, Google Fonts, theme colour, and Open Graph metadata
└── package.json            # Dependencies and scripts
```

---

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage overview, featured destinations, featured packages, and closing CTA |
| `/destinations` | Searchable, filterable directory of six curated Indian regions |
| `/destinations/:slug` | Dedicated guide page for an individual destination (`manali`, `kashmir`, `goa`, `rajasthan`, `kerala`, `rishikesh`) |
| `/packages` | Searchable, filterable, sortable directory of seven sample tour packages |
| `/packages/:slug` | Detailed sample itinerary, highlights, inclusions/exclusions, and starting guide price |
| `/about` | Fictional brand story, travel philosophy, and service principles |
| `/contact` | Responsive trip enquiry demo with validation, confirmation summary, and `?package=` / `?destination=` preselection |
| `*` | Editorial 404 fallback page with quick navigation links |

---

## Screenshots

> Add captured screenshots below before publishing to your portfolio or GitHub repository:

- **Homepage (Desktop & Mobile Hero + Featured Destinations):** _[Screenshot placeholder — capture `/` at 1440px and 375px]_
- **Packages Directory (`/packages`) Filters & Grid:** _[Screenshot placeholder — capture active filters and package cards]_
- **Package Detail Itinerary (`/packages/himalayan-escape`):** _[Screenshot placeholder — capture hero, day-by-day plan, and CTA]_
- **Enquiry Flow & Demo Confirmation (`/contact?package=himalayan-escape`):** _[Screenshot placeholder — capture prefilled form and submitted summary card]_
- **Mobile Navigation Drawer (`375px`):** _[Screenshot placeholder — capture expanded mobile menu with backdrop]_

---

## Disclaimer

Safar is a self-initiated **fictional portfolio concept** created strictly for frontend web development and UI/UX design demonstration.

- **No Live Bookings or Payments:** Displayed pricing in INR, durations, and sample itineraries are illustrative references and do not represent verified travel availability or commercial offers.
- **No Backend Storage:** Form validation runs completely inside React in the browser; no personal enquiry details are sent to a server or stored in a database.
- **Demo Contact Information:** Email addresses (`hello@safar-demo.example`) and sample office details are fictional placeholders.
