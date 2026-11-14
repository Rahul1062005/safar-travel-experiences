import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Mail,
  MapPin,
  RotateCcw,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { DESTINATIONS } from '../data/destinations.js';
import { PACKAGES } from '../data/packages.js';
import { DEMO_CONTACT_INFO } from '../data/siteContent.js';
import {
  buildDestinationInterestValue,
  buildMailtoHref,
  buildPackageInterestValue,
  getInterestLabel,
  resolveEnquiryPrefill,
  validateEnquiryForm,
} from '../utils/enquiryUtils.js';
import { useDocumentMeta } from '../utils/useDocumentMeta.js';
import './ContactPage.css';

const FIELD_ORDER = [
  'fullName',
  'email',
  'phone',
  'interest',
  'travelDate',
  'travellers',
  'message',
];

const FIELD_IDS = {
  fullName: 'enquiry-full-name',
  email: 'enquiry-email',
  phone: 'enquiry-phone',
  interest: 'enquiry-interest',
  travelDate: 'enquiry-travel-date',
  travellers: 'enquiry-travellers',
  message: 'enquiry-message',
};

/**
 * Stateful enquiry form & confirmation card keyed by URL search query
 * so incoming ?package= or ?destination= links reset preselection cleanly.
 */
function EnquiryFormPanel({ prefill }) {
  const confirmationRef = useRef(null);

  const buildInitialValues = () => ({
    fullName: '',
    email: '',
    phone: '',
    interest: prefill.initialInterest,
    travelDate: '',
    travellers: '',
    message: '',
  });

  const [values, setValues] = useState(buildInitialValues);
  const [touched, setTouched] = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);

  const validationErrors = validateEnquiryForm(values);
  const getVisibleError = (fieldName) =>
    hasAttemptedSubmit || touched[fieldName] ? validationErrors[fieldName] : undefined;

  const hasFormInput =
    Boolean(values.fullName.trim()) ||
    Boolean(values.email.trim()) ||
    Boolean(values.phone.trim()) ||
    Boolean(values.travelDate.trim()) ||
    Boolean(values.travellers.trim()) ||
    Boolean(values.message.trim()) ||
    values.interest !== prefill.initialInterest;

  const errorCount = hasAttemptedSubmit ? Object.keys(validationErrors).length : 0;

  const handleFieldChange = (fieldName) => (event) => {
    const nextValue = event.target.value;
    setValues((prev) => ({ ...prev, [fieldName]: nextValue }));
  };

  const handleFieldBlur = (fieldName) => () => {
    setTouched((prev) => (prev[fieldName] ? prev : { ...prev, [fieldName]: true }));
  };

  const handleClear = () => {
    setValues(buildInitialValues());
    setTouched({});
    setHasAttemptedSubmit(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasAttemptedSubmit(true);

    const errors = validateEnquiryForm(values);
    const firstInvalidField = FIELD_ORDER.find((field) => errors[field]);
    if (firstInvalidField) {
      document.getElementById(FIELD_IDS[firstInvalidField])?.focus();
      return;
    }

    const record = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      interest: values.interest,
      interestLabel: getInterestLabel(values.interest),
      travelDate: values.travelDate.trim(),
      travellers: values.travellers.trim(),
      message: values.message.trim(),
    };

    setSubmittedRecord(record);
    requestAnimationFrame(() => {
      confirmationRef.current?.focus();
    });
  };

  const handleResetAfterSubmit = () => {
    setSubmittedRecord(null);
    setValues(buildInitialValues());
    setTouched({});
    setHasAttemptedSubmit(false);
  };

  if (submittedRecord) {
    const mailtoHref = buildMailtoHref(DEMO_CONTACT_INFO.email, submittedRecord);

    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        className="enquiry-panel confirmation-card"
        role="status"
        aria-labelledby="demo-confirmation-heading"
      >
        <span className="confirmation-card__badge">
          <CheckCircle2 size={15} aria-hidden="true" />
          Demo Submission Previewed
        </span>

        <h2 id="demo-confirmation-heading" className="confirmation-card__title">
          Thank you, {submittedRecord.fullName}. Your demo enquiry summary is ready.
        </h2>

        <p className="confirmation-card__notice">
          <strong>Portfolio Demo Notice:</strong> No enquiry has been transmitted to a server, stored
          in a database, or confirmed as a travel booking. This preview shows what a client-side
          submission summary looks like in Safar.
        </p>

        <dl className="confirmation-summary" aria-label="Submitted enquiry summary">
          <div className="confirmation-summary__item confirmation-summary__item--full">
            <dt>Selected Destination or Package</dt>
            <dd>{submittedRecord.interestLabel}</dd>
          </div>

          <div className="confirmation-summary__item">
            <dt>Full Name</dt>
            <dd>{submittedRecord.fullName}</dd>
          </div>

          <div className="confirmation-summary__item">
            <dt>Email Address</dt>
            <dd>{submittedRecord.email}</dd>
          </div>

          {submittedRecord.phone && (
            <div className="confirmation-summary__item">
              <dt>Phone Number</dt>
              <dd>{submittedRecord.phone}</dd>
            </div>
          )}

          {submittedRecord.travelDate && (
            <div className="confirmation-summary__item">
              <dt>Preferred Travel Month / Dates</dt>
              <dd>{submittedRecord.travelDate}</dd>
            </div>
          )}

          {submittedRecord.travellers && (
            <div className="confirmation-summary__item">
              <dt>Number of Travellers</dt>
              <dd>{submittedRecord.travellers}</dd>
            </div>
          )}

          {submittedRecord.message && (
            <div className="confirmation-summary__item confirmation-summary__item--full">
              <dt>Additional Requirements</dt>
              <dd>{submittedRecord.message}</dd>
            </div>
          )}
        </dl>

        <div className="confirmation-card__actions">
          <Button type="button" onClick={handleResetAfterSubmit} variant="primary" size="md">
            <RotateCcw size={16} aria-hidden="true" />
            Submit Another Demo Enquiry
          </Button>
          <Button href={mailtoHref} variant="secondary" size="md">
            <Mail size={16} aria-hidden="true" />
            Open in Email App
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="enquiry-panel">
      <div className="enquiry-panel__header">
        <span className="eyebrow">Trip Enquiry Form</span>
        <h2 className="enquiry-panel__title">Tell us what you are imagining</h2>
        <p className="enquiry-panel__subtitle">
          Required fields are marked with <span aria-hidden="true">*</span>
          <span className="sr-only">an asterisk</span>. All validation and submission run locally in
          your browser.
        </p>
      </div>

      {prefill.matchedItem && (
        <div className="enquiry-prefill-banner">
          <div>
            <p className="enquiry-prefill-banner__title">
              Preselected {prefill.matchedItem.kind}: {prefill.matchedItem.title}
            </p>
            <p className="enquiry-prefill-banner__sub">{prefill.matchedItem.subtitle}</p>
          </div>
          <Link to={prefill.matchedItem.to} className="enquiry-prefill-banner__link">
            {prefill.matchedItem.ctaLabel}
          </Link>
        </div>
      )}

      {prefill.unknownQuery && (
        <div className="enquiry-prefill-banner enquiry-prefill-banner--warning" role="status">
          <div>
            <p className="enquiry-prefill-banner__title">
              Unknown trip reference “{prefill.unknownQuery}”
            </p>
            <p className="enquiry-prefill-banner__sub">
              Defaulted to General Travel Enquiry — you can choose any package or region below.
            </p>
          </div>
        </div>
      )}

      {errorCount > 0 && (
        <div className="enquiry-alert" role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          <p>
            Please fix {errorCount} highlighted {errorCount === 1 ? 'field' : 'fields'} below before
            previewing your demo enquiry.
          </p>
        </div>
      )}

      <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row-2">
          <div className="form-field">
            <label htmlFor={FIELD_IDS.fullName} className="form-label">
              Full name
              <span className="form-label__req" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id={FIELD_IDS.fullName}
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g., Aarav Sharma"
              value={values.fullName}
              onChange={handleFieldChange('fullName')}
              onBlur={handleFieldBlur('fullName')}
              aria-required="true"
              aria-invalid={Boolean(getVisibleError('fullName'))}
              aria-describedby={getVisibleError('fullName') ? `${FIELD_IDS.fullName}-err` : undefined}
              className={`form-control ${getVisibleError('fullName') ? 'form-control--error' : ''}`}
            />
            {getVisibleError('fullName') && (
              <p id={`${FIELD_IDS.fullName}-err`} className="form-error">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{getVisibleError('fullName')}</span>
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={FIELD_IDS.email} className="form-label">
              Email address
              <span className="form-label__req" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id={FIELD_IDS.email}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="e.g., aarav@example.com"
              value={values.email}
              onChange={handleFieldChange('email')}
              onBlur={handleFieldBlur('email')}
              aria-required="true"
              aria-invalid={Boolean(getVisibleError('email'))}
              aria-describedby={getVisibleError('email') ? `${FIELD_IDS.email}-err` : undefined}
              className={`form-control ${getVisibleError('email') ? 'form-control--error' : ''}`}
            />
            {getVisibleError('email') && (
              <p id={`${FIELD_IDS.email}-err`} className="form-error">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{getVisibleError('email')}</span>
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor={FIELD_IDS.interest} className="form-label">
            Destination or sample package
          </label>
          <select
            id={FIELD_IDS.interest}
            name="interest"
            value={values.interest}
            onChange={handleFieldChange('interest')}
            onBlur={handleFieldBlur('interest')}
            aria-invalid={Boolean(getVisibleError('interest'))}
            aria-describedby={getVisibleError('interest') ? `${FIELD_IDS.interest}-err` : undefined}
            className={`form-control ${getVisibleError('interest') ? 'form-control--error' : ''}`}
          >
            <option value="general">General Travel Enquiry (Help me choose)</option>
            <optgroup label="Sample Travel Packages">
              {PACKAGES.map((pkg) => (
                <option key={pkg.id} value={buildPackageInterestValue(pkg.slug)}>
                  {pkg.title} — {pkg.duration}
                </option>
              ))}
            </optgroup>
            <optgroup label="Curated Destinations">
              {DESTINATIONS.map((dest) => (
                <option key={dest.id} value={buildDestinationInterestValue(dest.slug)}>
                  {dest.name} ({dest.region})
                </option>
              ))}
            </optgroup>
          </select>
          {getVisibleError('interest') && (
            <p id={`${FIELD_IDS.interest}-err`} className="form-error">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{getVisibleError('interest')}</span>
            </p>
          )}
        </div>

        <div className="form-row-2">
          <div className="form-field">
            <label htmlFor={FIELD_IDS.phone} className="form-label">
              Phone number
              <span className="form-label__tag">(optional)</span>
            </label>
            <input
              id={FIELD_IDS.phone}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g., +91 98765 43210"
              value={values.phone}
              onChange={handleFieldChange('phone')}
              onBlur={handleFieldBlur('phone')}
              aria-invalid={Boolean(getVisibleError('phone'))}
              aria-describedby={getVisibleError('phone') ? `${FIELD_IDS.phone}-err` : undefined}
              className={`form-control ${getVisibleError('phone') ? 'form-control--error' : ''}`}
            />
            {getVisibleError('phone') && (
              <p id={`${FIELD_IDS.phone}-err`} className="form-error">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{getVisibleError('phone')}</span>
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={FIELD_IDS.travellers} className="form-label">
              Number of travellers
              <span className="form-label__tag">(optional)</span>
            </label>
            <input
              id={FIELD_IDS.travellers}
              name="travellers"
              type="number"
              min="1"
              max="30"
              inputMode="numeric"
              placeholder="e.g., 2"
              value={values.travellers}
              onChange={handleFieldChange('travellers')}
              onBlur={handleFieldBlur('travellers')}
              aria-invalid={Boolean(getVisibleError('travellers'))}
              aria-describedby={
                getVisibleError('travellers')
                  ? `${FIELD_IDS.travellers}-err`
                  : `${FIELD_IDS.travellers}-hint`
              }
              className={`form-control ${getVisibleError('travellers') ? 'form-control--error' : ''}`}
            />
            {getVisibleError('travellers') ? (
              <p id={`${FIELD_IDS.travellers}-err`} className="form-error">
                <AlertCircle size={14} aria-hidden="true" />
                <span>{getVisibleError('travellers')}</span>
              </p>
            ) : (
              <p id={`${FIELD_IDS.travellers}-hint`} className="form-hint">
                Sample group guide supports 1–30 travellers.
              </p>
            )}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor={FIELD_IDS.travelDate} className="form-label">
            Preferred travel month or dates
            <span className="form-label__tag">(optional)</span>
          </label>
          <input
            id={FIELD_IDS.travelDate}
            name="travelDate"
            type="text"
            placeholder="e.g., October 2026 or flexible dates"
            value={values.travelDate}
            onChange={handleFieldChange('travelDate')}
            onBlur={handleFieldBlur('travelDate')}
            aria-invalid={Boolean(getVisibleError('travelDate'))}
            aria-describedby={
              getVisibleError('travelDate') ? `${FIELD_IDS.travelDate}-err` : undefined
            }
            className={`form-control ${getVisibleError('travelDate') ? 'form-control--error' : ''}`}
          />
          {getVisibleError('travelDate') && (
            <p id={`${FIELD_IDS.travelDate}-err`} className="form-error">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{getVisibleError('travelDate')}</span>
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={FIELD_IDS.message} className="form-label">
            Additional requirements or questions
            <span className="form-label__tag">(optional)</span>
          </label>
          <textarea
            id={FIELD_IDS.message}
            name="message"
            rows={4}
            placeholder="Share pace preferences, departure city, or places you would like to linger..."
            value={values.message}
            onChange={handleFieldChange('message')}
            onBlur={handleFieldBlur('message')}
            aria-invalid={Boolean(getVisibleError('message'))}
            aria-describedby={getVisibleError('message') ? `${FIELD_IDS.message}-err` : undefined}
            className={`form-control form-textarea ${
              getVisibleError('message') ? 'form-control--error' : ''
            }`}
          />
          {getVisibleError('message') && (
            <p id={`${FIELD_IDS.message}-err`} className="form-error">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{getVisibleError('message')}</span>
            </p>
          )}
        </div>

        <div className="form-actions">
          <Button type="submit" variant="primary" size="lg">
            Preview Demo Enquiry
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={handleClear}
            disabled={!hasFormInput}
          >
            Clear Form
          </Button>
        </div>

        <p className="form-disclaimer">
          Portfolio demonstration only: submitting generates a local preview card without sending
          or storing personal information.
        </p>
      </form>
    </div>
  );
}

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.toString();
  const prefill = resolveEnquiryPrefill(searchParams);

  useDocumentMeta({
    title: 'Plan Your Trip — Contact & Enquiry',
    description:
      'Try Safar’s client-side trip enquiry demonstration with destination/package preselection and fictional demo contact details.',
  });

  return (
    <>
      <PageHero
        eyebrow="Contact & Enquiry"
        title="Plan Your Trip"
        description="Explore how a calm, transparent enquiry flow works on Safar. Select any destination or sample itinerary below, or ask a general question about timing across India."
        note="Portfolio demonstration notice: Safar is a fictional concept brand — enquiries are validated locally and never sent to a backend or booking system."
      />

      <section className="section" aria-label="Contact details and enquiry form">
        <div className="container contact-layout">
          <aside className="contact-sidebar" aria-label="Demo contact details">
            <div className="contact-card">
              <span className="eyebrow">Demo Contact Details</span>
              <h2 className="contact-card__title">
                {DEMO_CONTACT_INFO.brandName} — {DEMO_CONTACT_INFO.tagline}
              </h2>

              <ul className="contact-meta-list">
                <li className="contact-meta-item">
                  <Mail size={18} aria-hidden="true" className="contact-meta-item__icon" />
                  <div>
                    <span className="contact-meta-item__label">Demo Email</span>
                    <a
                      href={`mailto:${DEMO_CONTACT_INFO.email}`}
                      className="contact-meta-item__value contact-meta-item__link"
                    >
                      {DEMO_CONTACT_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="contact-meta-item">
                  <MapPin size={18} aria-hidden="true" className="contact-meta-item__icon" />
                  <div>
                    <span className="contact-meta-item__label">Concept Location</span>
                    <span className="contact-meta-item__value">{DEMO_CONTACT_INFO.location}</span>
                  </div>
                </li>
              </ul>

              <div className="contact-quick-links">
                <Link to="/destinations" className="contact-quick-links__item">
                  Browse Destinations
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link to="/packages" className="contact-quick-links__item">
                  Compare Packages
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="contact-card contact-card--tinted">
              <span className="eyebrow contact-eyebrow-icon">
                <Info size={14} aria-hidden="true" />
                How This Demo Works
              </span>
              <h2 className="contact-card__title">Frontend-only validation &amp; preview</h2>
              <div className="contact-demo-notes">
                <p>
                  This form checks required fields and formatting inside React state, then renders a
                  clear confirmation summary on screen without any server call.
                </p>
                <p>
                  No personal details are transmitted or saved, and submitting does not confirm
                  pricing, rooms, or availability. An optional email-app link lets you continue the
                  enquiry using your own mail client.
                </p>
              </div>
            </div>
          </aside>

          <EnquiryFormPanel key={searchKey} prefill={prefill} />
        </div>
      </section>
    </>
  );
}
