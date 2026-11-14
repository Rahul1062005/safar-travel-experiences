import { DESTINATIONS } from '../data/destinations.js';
import { PACKAGES, formatIndicativePrice } from '../data/packages.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHAR_PATTERN = /^[+\d\s().-]+$/;

/**
 * Builds the flat selectable value used by the enquiry <select> element.
 */
export function buildPackageInterestValue(slug) {
  return `package:${slug}`;
}

export function buildDestinationInterestValue(slug) {
  return `destination:${slug}`;
}

/**
 * Resolves ?package=<slug> or ?destination=<slug> from URL query parameters.
 * Falls back safely to 'general' when missing or unknown so direct /contact visits
 * and invalid query strings never break the form.
 */
export function resolveEnquiryPrefill(searchParams) {
  const packageParam = searchParams.get('package')?.trim().toLowerCase() || '';
  const destinationParam = searchParams.get('destination')?.trim().toLowerCase() || '';

  if (packageParam) {
    const matchedPkg = PACKAGES.find((item) => item.slug === packageParam);
    if (matchedPkg) {
      return {
        initialInterest: buildPackageInterestValue(matchedPkg.slug),
        matchedItem: {
          kind: 'package',
          title: matchedPkg.title,
          subtitle: `${matchedPkg.duration} · Illustrative from ${formatIndicativePrice(matchedPkg.startingPrice)}`,
          to: `/packages/${matchedPkg.slug}`,
          ctaLabel: 'Review package itinerary',
        },
        unknownQuery: null,
      };
    }

    if (!destinationParam) {
      return {
        initialInterest: 'general',
        matchedItem: null,
        unknownQuery: packageParam,
      };
    }
  }

  if (destinationParam) {
    const matchedDest = DESTINATIONS.find((item) => item.slug === destinationParam);
    if (matchedDest) {
      return {
        initialInterest: buildDestinationInterestValue(matchedDest.slug),
        matchedItem: {
          kind: 'destination',
          title: matchedDest.name,
          subtitle: `${matchedDest.region} · ${matchedDest.tripType}`,
          to: `/destinations/${matchedDest.slug}`,
          ctaLabel: 'Review destination guide',
        },
        unknownQuery: null,
      };
    }

    return {
      initialInterest: 'general',
      matchedItem: null,
      unknownQuery: destinationParam,
    };
  }

  return {
    initialInterest: 'general',
    matchedItem: null,
    unknownQuery: null,
  };
}

/**
 * Checks whether an interest value matches 'general' or an existing package/destination.
 */
export function isValidInterestValue(value) {
  if (!value || value === 'general') return true;
  if (value.startsWith('package:')) {
    const slug = value.slice('package:'.length);
    return PACKAGES.some((item) => item.slug === slug);
  }
  if (value.startsWith('destination:')) {
    const slug = value.slice('destination:'.length);
    return DESTINATIONS.some((item) => item.slug === slug);
  }
  return false;
}

/**
 * Returns a human-readable summary label for the selected package, destination, or general option.
 */
export function getInterestLabel(value) {
  if (value?.startsWith('package:')) {
    const slug = value.slice('package:'.length);
    const pkg = PACKAGES.find((item) => item.slug === slug);
    if (pkg) {
      return `${pkg.title} (${pkg.duration} · Sample from ${formatIndicativePrice(pkg.startingPrice)})`;
    }
  }

  if (value?.startsWith('destination:')) {
    const slug = value.slice('destination:'.length);
    const dest = DESTINATIONS.find((item) => item.slug === slug);
    if (dest) {
      return `${dest.name} (${dest.region})`;
    }
  }

  return 'General Travel Enquiry';
}

/**
 * Validates all enquiry form values and returns a map of fieldName -> errorMessage.
 */
export function validateEnquiryForm(values) {
  const errors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Please enter at least 2 characters for your full name.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address (for example, name@example.com).';
  }

  const phone = values.phone.trim();
  if (phone) {
    const digitsOnly = phone.replace(/\D/g, '');
    if (!PHONE_CHAR_PATTERN.test(phone) || digitsOnly.length < 7 || digitsOnly.length > 15) {
      errors.phone = 'If provided, please enter a valid phone number (7–15 digits).';
    }
  }

  if (!isValidInterestValue(values.interest)) {
    errors.interest = 'Please choose a valid trip option or General Travel Enquiry.';
  }

  const travelDate = values.travelDate.trim();
  if (travelDate.length > 80) {
    errors.travelDate = 'Please keep your preferred travel month or dates under 80 characters.';
  }

  const travellers = values.travellers.trim();
  if (travellers) {
    const parsedCount = Number(travellers);
    if (!/^\d+$/.test(travellers) || parsedCount < 1 || parsedCount > 30) {
      errors.travellers = 'Please enter a whole number of travellers between 1 and 30.';
    }
  }

  const message = values.message.trim();
  if (message.length > 1000) {
    errors.message = 'Please keep additional notes under 1000 characters.';
  }

  return errors;
}

/**
 * Constructs an optional mailto: handoff URL carrying the visitor's demo enquiry details.
 */
export function buildMailtoHref(demoEmail, submission) {
  const subject = `Safar Portfolio Demo Enquiry — ${submission.interestLabel}`;
  const lines = [
    `Hello Safar Team,`,
    ``,
    `Interested in: ${submission.interestLabel}`,
    `Full Name: ${submission.fullName}`,
    `Email: ${submission.email}`,
    submission.phone ? `Phone: ${submission.phone}` : null,
    submission.travelDate ? `Preferred Travel Month/Dates: ${submission.travelDate}` : null,
    submission.travellers ? `Number of Travellers: ${submission.travellers}` : null,
    submission.message ? `\nAdditional Notes:\n${submission.message}` : null,
    ``,
    `(Sent from the Safar portfolio concept website enquiry demo.)`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return `mailto:${demoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
}
