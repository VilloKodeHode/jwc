import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  // Define the base URL of your website
  const baseUrl = 'https://villoutvikling.com';

  // Define static pages manually (can also fetch from CMS if necessary)
  const staticPages = [
    { url: '/', lastmod: '2024-09-18', priority: 1.0 }, // Homepage - highest priority
    { url: '/about', lastmod: '2024-03-18', priority: 0.8 },
    { url: '/portfolio', lastmod: '2024-03-18', priority: 0.9 }, // Portfolio - high priority
    { url: '/contact', lastmod: '2024-03-18', priority: 0.7 }, // Contact page - lower priority
    // { url: '/services_provided/website', lastmod: '2024-03-18', priority: 0.8 },
    // { url: '/services_provided/SEO', lastmod: '2024-03-18', priority: 0.8 },
    // { url: '/services_provided/webcontent', lastmod: '2024-03-18', priority: 0.8 },
    // { url: '/services_provided/CMS', lastmod: '2024-09-18', priority: 0.8 },
    // { url: '/services_provided/sosialmedia_integration', lastmod: '2024-09-18', priority: 0.8 },
    { url: '/website', lastmod: '2024-03-18', priority: 0.8 },
    { url: '/SEO', lastmod: '2024-03-18', priority: 0.8 },
    { url: '/webcontent', lastmod: '2024-03-18', priority: 0.8 },
    { url: '/CMS', lastmod: '2024-09-18', priority: 0.8 },
    { url: '/sosialmedia_integration', lastmod: '2024-09-18', priority: 0.8 },
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
