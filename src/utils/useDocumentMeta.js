import { useEffect } from 'react';

const DEFAULT_TITLE = 'Safar — Travel & Experiences';
const DEFAULT_DESCRIPTION =
  'Safar is a fictional Indian travel agency portfolio concept showcasing curated domestic destinations, sample tour packages, and a client-side trip enquiry flow.';

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  }
}

/**
 * Updates the document title, meta description, and Open Graph tags for the active route.
 * Keeps browser tab text and link-preview metadata accurate across client-side navigation.
 */
export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const resolvedTitle = title ? `${title} | Safar` : DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;

    document.title = resolvedTitle;
    setMetaContent('meta[name="description"]', resolvedDescription);
    setMetaContent('meta[property="og:title"]', resolvedTitle);
    setMetaContent('meta[property="og:description"]', resolvedDescription);
  }, [title, description]);
}
