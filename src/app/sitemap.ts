import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://talentcentre.co.za';

  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/case-studies',
    '/events',
    '/insights'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
