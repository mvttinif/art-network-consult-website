/**
 * Native smooth scroll utility — replaces react-scroll (~7KB).
 * Uses the CSS scroll-behavior: smooth already set in index.css.
 */
export function scrollToSection(id, offset = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
