/**
 * Link that opens in a new tab safely.
 * Pass `label` to give screen readers a more descriptive name.
 */
export default function ExternalLink({ href, label, className, children }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
    >
      {children}
    </a>
  );
}
