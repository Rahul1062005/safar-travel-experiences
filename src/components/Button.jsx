import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable editorial button primitive.
 * Automatically renders a React Router <Link> when `to` is passed,
 * an external/anchor <a> when `href` is passed, or a native <button>.
 */
export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
