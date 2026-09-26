/** Prefix public asset paths for Vite base "./" */
export function asset(path) {
  const clean = String(path || "").replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "./";
  if (base.endsWith("/")) return base + clean;
  return base + "/" + clean;
}

/**
 * Absolute (root-relative) asset path — safe to use anywhere a relative
 * path would resolve against the WRONG base, e.g. inside a CSS custom
 * property like `--page-bg: url("...")`. Relative url()s set via
 * setProperty() resolve against the stylesheet file (dist/assets/*.css)
 * in production, not the page, which breaks "./assets/..." paths after
 * build even though they work fine in dev. This site is hosted at the
 * domain root, so a leading "/" always resolves correctly regardless
 * of which file references it.
 */
export function absAsset(path) {
  const clean = String(path || "").replace(/^\/+/, "");
  return "/" + clean;
}
