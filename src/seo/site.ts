export const SITE = {
  name: 'No Studs',
  tagline: 'Boutique Mobile Game Studio',
  url: 'https://nostuds.com',
  defaultImage: '/og-image.png',
  locale: 'en_US',
  themeColor: '#2c1250',
} as const;

export const DEFAULT_DESCRIPTION =
  "Casual mobile games hand-raised since the '90s by two white-haired Commodore veterans. Big nostalgia. Tiny downloads. Absolutely no studs.";

export const DEFAULT_TITLE = `${SITE.name} — ${SITE.tagline}`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function pageTitle(title: string): string {
  if (title === SITE.name || title === DEFAULT_TITLE) {
    return DEFAULT_TITLE;
  }
  return `${title} — ${SITE.name}`;
}
