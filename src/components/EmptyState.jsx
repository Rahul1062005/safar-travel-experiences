import { SearchX } from 'lucide-react';
import { Button } from './Button.jsx';
import './EmptyState.css';

/**
 * Reusable empty/not-found recovery block used across search/filter views
 * and invalid dynamic slug states.
 */
export function EmptyState({
  icon: Icon = SearchX,
  title,
  message,
  headingTag = 'h2',
  actionLabel,
  onAction,
  actionTo,
  secondaryAction,
}) {
  const HeadingTag = headingTag;

  return (
    <div className="empty-state" role="status">
      <div className="empty-state__icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <HeadingTag className="empty-state__title">{title}</HeadingTag>
      <p className="empty-state__message">{message}</p>

      {(actionLabel || secondaryAction) && (
        <div className="empty-state__actions">
          {actionLabel && onAction && (
            <Button onClick={onAction} variant="primary" size="md">
              {actionLabel}
            </Button>
          )}
          {actionLabel && actionTo && (
            <Button to={actionTo} variant="primary" size="md">
              {actionLabel}
            </Button>
          )}
          {secondaryAction && (
            <Button to={secondaryAction.to} variant="secondary" size="md">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
