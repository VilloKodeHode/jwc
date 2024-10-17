import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  // Define the base URL of your website
  const baseUrl = 'https://www.villoutvikling.com';

  // Define static pages manually (can also fetch from CMS if necessary)
  const staticPages = [
    { url: '/', lastmod: '2024-09-18', priority: 1.0 }, // Homepage - highest priority
    { url: '/portfolio', lastmod: '2024-03-18', priority: 0.9 }, // Portfolio - high priority
    { url: '/about', lastmod: '2024-03-18', priority: 0.8 }, // About page - medium priority
    { url: '/contact', lastmod: '2024-03-18', priority: 0.8 }, // Contact page - lower priority
    { url: '/services_provided', lastmod: '2024-10-16', priority: 0.8 }, // Services - lower priority
    { url: '/services_provided/website', lastmod: '2024-03-18', priority: 0.6 },
    { url: '/services_provided/SEO', lastmod: '2024-03-18', priority: 0.6 },
    { url: '/services_provided/webcontent', lastmod: '2024-03-18', priority: 0.6 },
    { url: '/services_provided/CMS', lastmod: '2024-09-18', priority: 0.6 },
    { url: '/services_provided/sosialmedia_integration', lastmod: '2024-09-18', priority: 0.6 },
  ];

  // Initialize sitemap stream
  const sitemap = new SitemapStream({ hostname: baseUrl });
  
  // Create a readable stream from static pages
  const stream = Readable.from(
    staticPages.map(page => ({
      url: page.url,
      lastmod: page.lastmod,
      changefreq: 'monthly', // Optional: set changefreq and priority
      priority: page.priority // Use the priority from the staticPages array
    }))
  );

  // Pipe the stream into the sitemap generator
  stream.pipe(sitemap);

  // Get the sitemap in XML format
  const sitemapBuffer = await streamToPromise(sitemap);

  // Send the sitemap
  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemapBuffer);
  res.end();
}
