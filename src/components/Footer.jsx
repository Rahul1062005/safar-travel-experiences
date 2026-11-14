import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/destinations.js';
import { DEMO_CONTACT_INFO, NAV_LINKS } from '../data/siteContent.js';
import './Footer.css';

/**
 * Shared editorial footer across every Safar page.
 * Includes brand summary, navigation links, destination quick links,
 * and a transparent fictional portfolio disclaimer.
 */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo">
              {DEMO_CONTACT_INFO.brandName}
            </Link>
            <p className="site-footer__tagline">{DEMO_CONTACT_INFO.tagline}</p>
            <p className="site-footer__desc">{DEMO_CONTACT_INFO.description}</p>
            <span className="site-footer__badge">Portfolio Concept · Illustrative Demo</span>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__list">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Destinations</h2>
            <ul className="site-footer__list">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <Link to={`/destinations/${dest.slug}`} className="site-footer__link">
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Demo Contact</h2>
            <ul className="site-footer__meta">
              <li>
                <a href={`mailto:${DEMO_CONTACT_INFO.email}`} className="site-footer__link">
                  {DEMO_CONTACT_INFO.email}
                </a>
              </li>
              <li>{DEMO_CONTACT_INFO.location}</li>
              <li>
                <Link to="/contact" className="site-footer__cta-link">
                  Send a demo enquiry &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__disclaimer">{DEMO_CONTACT_INFO.disclaimer}</p>
          <p className="site-footer__credits">
            Photography sourced from Unsplash. Built with React, Vite &amp; React Router.
          </p>
        </div>
      </div>
    </footer>
  );
}
