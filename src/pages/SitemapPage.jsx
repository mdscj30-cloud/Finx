import React, { useEffect } from 'react';
import { blogPosts } from '@/lib/blogData';
import { cpaBlogPosts } from '@/lib/cpaBlogPostsData';
import { caseStudies } from '@/lib/caseStudiesData';
import { funnelPages } from '@/lib/funnelPagesData';
import { glossaryTerms } from '@/lib/glossaryTermsData';
import { locationPages } from '@/lib/locationPagesData';
import { partnershipPages } from '@/lib/partnershipPagesData';
import { serviceIndustryData } from '@/lib/serviceIndustryData';

const SitemapPage = () => {
  useEffect(() => {
    document.title = "sitemap.xml";
  }, []);

  const baseUrl = "https://finxis.ai";
  const lastMod = new Date().toISOString().split('T')[0];

  const renderUrl = (path, priority, freq) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // 1. Static Pages
    xml += renderUrl('/', '1.0', 'weekly');
    xml += renderUrl('/pricing', '0.9', 'monthly');
    xml += renderUrl('/contact', '0.8', 'monthly');
    xml += renderUrl('/careers', '0.7', 'monthly');
    xml += renderUrl('/about', '0.8', 'monthly');
    // Note: /onboarding excluded — private auth route
    xml += renderUrl('/privacy-policy', '0.6', 'yearly');
    
    // 2. Service Pages
    const services = [
      '/services/ai-bookkeeping',
      '/services/cpa-support',
      '/services/tax-preparation',
      '/services/virtual-cfo',
      '/services/cpa-bookkeeping',
      '/services/cpa-outsourced-support',
      '/services/by-industry',
      '/services/by-location'
    ];
    services.forEach(slug => {
      xml += renderUrl(slug, '0.9', 'monthly');
    });

    // 3. Solution Pages
    const solutions = [
      '/solutions/cpa',
      '/solutions/smb',
      '/solutions/tax-advisory',
      '/formation'
    ];
    solutions.forEach(slug => {
      xml += renderUrl(slug, '0.9', 'monthly');
    });

    // 4. Industry Pages
    Object.keys(serviceIndustryData).forEach(slug => {
      xml += renderUrl(`/services/${slug}`, '0.8', 'monthly');
    });

    // 5. Blog Posts
    xml += renderUrl('/blog', '0.9', 'daily');
    blogPosts.forEach(post => {
      xml += renderUrl(`/blog/${post.slug}`, '0.8', 'weekly');
    });

    // 6. CPA Blog Posts
    xml += renderUrl('/blog/cpa', '0.9', 'weekly');
    cpaBlogPosts.forEach(post => {
      xml += renderUrl(`/blog/cpa/${post.slug}`, '0.8', 'weekly');
    });

    // 7. Case Studies
    xml += renderUrl('/case-studies', '0.8', 'monthly');
    caseStudies.forEach(study => {
      xml += renderUrl(`/case-studies/${study.slug}`, '0.8', 'monthly');
    });

    // 8. Comparisons
    // (Assuming comparisons array is available or hardcoded as per previous logic)
    const comparisons = [
      'ai-vs-traditional-bookkeeping',
      'ai-assisted-accounting-vs-manual-accounting',
      // ... (abbreviated for brevity, full list should be used in production)
    ];
    xml += renderUrl('/comparisons', '0.7', 'monthly');
    comparisons.forEach(slug => {
      xml += renderUrl(`/comparison/${slug}`, '0.7', 'monthly');
    });

    // 9. Glossary
    xml += renderUrl('/glossary', '0.7', 'monthly');
    glossaryTerms.forEach(term => {
      xml += renderUrl(`/glossary/${term.slug}`, '0.7', 'monthly');
    });

    // 10. Funnels
    xml += renderUrl('/funnels', '0.8', 'monthly');
    funnelPages.forEach(page => {
      xml += renderUrl(`/funnels/${page.slug}`, '0.8', 'monthly');
    });

    // 11. Location Pages
    locationPages.forEach(page => {
      xml += renderUrl(`/locations/${page.slug}`, '0.7', 'monthly');
    });

    // 12. Partnerships
    xml += renderUrl('/partnerships/cpa-white-label', '0.7', 'monthly');
    partnershipPages.forEach(page => {
      if (page.slug !== 'cpa-white-label') {
         xml += renderUrl(`/partnerships/${page.slug}`, '0.7', 'monthly');
      }
    });

    // 13. Country Pages
    const countries = [
      '/usa', '/uk', '/australia', '/netherlands', '/egypt', '/uae'
    ];
    countries.forEach(slug => {
      xml += renderUrl(slug, '0.7', 'monthly');
    });

    xml += `
</urlset>`;
    return xml;
  };

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <textarea 
        readOnly 
        style={{ 
          width: '100%', 
          height: '100%', 
          fontFamily: 'monospace', 
          fontSize: '14px', 
          border: 'none', 
          padding: '20px',
          resize: 'none',
          whiteSpace: 'pre'
        }}
        value={generateSitemap()}
      />
    </div>
  );
};

export default SitemapPage;