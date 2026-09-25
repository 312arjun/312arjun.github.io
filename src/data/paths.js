/** Prefix public asset paths for Vite base "./" */
export function asset(path) {
  const clean = String(path || "").replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "./";
  if (base.endsWith("/")) return base + clean;
  return base + "/" + clean;
}
