import { Compass } from 'lucide-react';
import { EmptyState } from '../components/EmptyState.jsx';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';

export function NotFoundPage() {
  useDocumentMeta({
    title: '404 — Page Not Found',
    description:
      'The requested page could not be found on Safar. Explore curated destinations, sample travel packages, or return to the homepage.',
  });

  return (
    <section className="section" aria-label="Page not found">
      <div className="container">
        <EmptyState
          icon={Compass}
          headingTag="h1"
          title="We could not find that page"
          message="The route you requested does not exist or may have moved. Return to the Safar homepage or browse curated Indian destinations and sample packages."
          actionLabel="Return Home"
          actionTo="/"
          secondaryAction={{ to: '/destinations', label: 'Browse Destinations' }}
        />
      </div>
    </section>
  );
}
