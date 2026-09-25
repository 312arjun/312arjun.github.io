export function Icon({ svg, className }) {
  if (!svg) return null;
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
