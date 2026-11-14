import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';
import { Navbar } from '../components/Navbar.jsx';
import './MainLayout.css';

/**
 * Shared layout shell wrapping every page route with the persistent
 * Navbar, skip-to-content accessibility link, main landmark, and Footer.
 */
export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
