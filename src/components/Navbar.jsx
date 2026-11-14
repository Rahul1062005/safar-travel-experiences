import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/siteContent.js';
import { Button } from './Button.jsx';
import './Navbar.css';

/**
 * Responsive shared site header.
 * Shows horizontal links + primary CTA on desktop, and an overlay drawer
 * with backdrop + scroll lock on mobile screens without wrapping links.
 */
export function Navbar() {
  const { pathname } = useLocation();
  const [openForPath, setOpenForPath] = useState(null);
  const menuButtonRef = useRef(null);

  // Derived open state: automatically closes when the route pathname changes
  const isMenuOpen = openForPath === pathname;

  const closeMenu = () => setOpenForPath(null);
  const toggleMenu = () => {
    setOpenForPath((prev) => (prev === pathname ? null : pathname));
  };

  // Lock background page scrolling while mobile drawer is open,
  // and handle Escape key + desktop resize cleanup.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenForPath(null);
        menuButtonRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setOpenForPath(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Semi-transparent backdrop covering page content underneath the mobile drawer */}
      <div
        className={`mobile-backdrop ${isMenuOpen ? 'mobile-backdrop--visible' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <header className="site-header">
        <div className="container site-header__bar">
          <Link to="/" className="site-logo" onClick={closeMenu}>
            <span className="site-logo__wordmark">Safar</span>
            <span className="site-logo__sub">Travel &amp; Experiences</span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="desktop-nav">
            <ul className="desktop-nav__list">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      isActive
                        ? 'desktop-nav__link desktop-nav__link--active'
                        : 'desktop-nav__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <div className="site-header__desktop-cta">
              <Button to="/contact" variant="primary" size="sm">
                Plan Your Trip
              </Button>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className={`mobile-menu-toggle ${isMenuOpen ? 'mobile-menu-toggle--open' : ''}`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={toggleMenu}
            >
              <span className="mobile-menu-toggle__icons" aria-hidden="true">
                <Menu size={22} className="mobile-menu-toggle__icon mobile-menu-toggle__icon--menu" />
                <X size={22} className="mobile-menu-toggle__icon mobile-menu-toggle__icon--close" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        <div
          id="mobile-navigation"
          className={`mobile-drawer ${isMenuOpen ? 'mobile-drawer--open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-drawer__inner">
            <nav aria-label="Mobile navigation" className="container mobile-nav">
              <ul className="mobile-nav__list">
                {NAV_LINKS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      tabIndex={isMenuOpen ? 0 : -1}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? 'mobile-nav__link mobile-nav__link--active'
                          : 'mobile-nav__link'
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mobile-nav__cta">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  Plan Your Trip
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
