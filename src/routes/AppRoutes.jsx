import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { ContactPage } from '../pages/ContactPage.jsx';
import { DestinationDetailPage } from '../pages/DestinationDetailPage.jsx';
import { DestinationsPage } from '../pages/DestinationsPage.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';
import { PackageDetailPage } from '../pages/PackageDetailPage.jsx';
import { PackagesPage } from '../pages/PackagesPage.jsx';

/**
 * Centralized application route map.
 * All routes share MainLayout via React Router's nested <Route> + <Outlet /> pattern.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
