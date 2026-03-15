import LINKING_RULES from './LinkingStrategy';
import { blogPosts } from './blogData';
import { caseStudies } from './caseStudiesData';
import { serviceIndustryData } from './serviceIndustryData';
import { locationServiceData } from './locationServiceData';

// Helper to get random items from an array
const getRandom = (arr, n) => {
  if (!arr || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

// Helper to find related comparisons (Mock data for demo as Comparison data isn't fully structured in a single export)
const getComparisonPages = (context) => {
  // In a real app, this would query a comparisonData file. 
  // Returning static relevant comparisons based on context keywords.
  const comparisons = [
    { title: "AI vs Traditional Bookkeeping", path: "/comparison/ai-vs-traditional-bookkeeping", tags: ["bookkeeping", "ai"] },
    { title: "Outsourced vs In-House Finance", path: "/comparison/outsourced-bookkeeping-vs-in-house", tags: ["finance", "outsourcing"] },
    { title: "Virtual CFO vs Fractional CFO", path: "/comparison/virtual-cfo-vs-fractional-cfo", tags: ["cfo", "advisory"] },
    { title: "DIY vs AI Tax Prep", path: "/comparison/diy-tax-software-vs-ai-assisted", tags: ["tax", "software"] }
  ];
  
  if (!context) return getRandom(comparisons, 2);
  return comparisons.filter(c => c.tags.some(t => context.toLowerCase().includes(t))).slice(0, 2);
};

class LinkGeneratorEngine {
  constructor() {
    this.strategies = LINKING_RULES;
  }

  // --- Generic Generator ---
  generateLinks(pageType, pageData) {
    const strategy = this.strategies[pageType.toUpperCase().replace(/-/g, '_')];
    if (!strategy) {
      console.warn(`No linking strategy found for page type: ${pageType}`);
      return { early: [], mid: [], end: [], sidebar: [] };
    }

    const placements = {
      'early-content': [],
      'mid-content': [],
      'near-conclusion': [],
      'near-cta': [], // Maps to near-conclusion or specific CTA section
      'end-of-page': [],
      'sidebar-or-inline': [],
      'distributed': [], // Spread across sections
      'results-section': [],
      'resources-section': []
    };

    strategy.rules.forEach(rule => {
      const links = this._generateLinksForRule(rule, pageData);
      
      // Map rule placement to result object keys
      let targetPlacement = rule.placement;
      if (targetPlacement === 'near-pricing') targetPlacement = 'mid-content';
      if (targetPlacement === 'use-cases') targetPlacement = 'mid-content';
      if (targetPlacement === 'testimonials') targetPlacement = 'mid-content';
      if (targetPlacement === 'hero-or-results') targetPlacement = 'early-content';
      
      // Fallback mapping if exact key doesn't exist
      if (!placements[targetPlacement]) {
        // Find best fit
        if (targetPlacement.includes('early')) targetPlacement = 'early-content';
        else if (targetPlacement.includes('mid')) targetPlacement = 'mid-content';
        else if (targetPlacement.includes('end')) targetPlacement = 'end-of-page';
        else targetPlacement = 'mid-content';
      }

      placements[targetPlacement] = [...placements[targetPlacement], ...links];
    });

    return placements;
  }

  // --- Rule Processor ---
  _generateLinksForRule(rule, pageData) {
    const { targetType, count } = rule;
    let generatedLinks = [];

    switch (targetType) {
      case 'service-page':
        generatedLinks = this._getServiceLinks(count, pageData);
        break;
      case 'location-page':
        generatedLinks = this._getLocationLinks(count, pageData);
        break;
      case 'blog-post':
        generatedLinks = this._getBlogLinks(count, pageData);
        break;
      case 'comparison-page':
        generatedLinks = this._getComparisonLinks(count, pageData);
        break;
      case 'case-study':
        generatedLinks = this._getCaseStudyLinks(count, pageData);
        break;
      case 'industry-page':
        generatedLinks = this._getIndustryLinks(count, pageData);
        break;
      default:
        break;
    }

    return generatedLinks.map(link => ({
      ...link,
      context: targetType
    }));
  }

  // --- Specific Retrieval Logics ---

  _getServiceLinks(count, pageData) {
    // Core services
    const services = [
      { title: "AI Bookkeeping", path: "/services/ai-bookkeeping", keywords: ["bookkeeping", "accounting", "finance"] },
      { title: "Tax Preparation", path: "/services/tax-preparation", keywords: ["tax", "filing", "compliance"] },
      { title: "Virtual CFO", path: "/services/virtual-cfo", keywords: ["cfo", "strategy", "forecast"] },
      { title: "CPA Support", path: "/services/cpa-support", keywords: ["cpa", "firm", "practice"] }
    ];

    // Filter by relevance to pageData if possible
    let relevant = services;
    if (pageData && (pageData.title || pageData.content)) {
      const text = (pageData.title + " " + pageData.content).toLowerCase();
      const scored = services.map(s => ({
        ...s,
        score: s.keywords.reduce((acc, k) => acc + (text.includes(k) ? 1 : 0), 0)
      })).sort((a, b) => b.score - a.score);
      relevant = scored;
    }

    return relevant.slice(0, count).map(s => ({ text: s.title, href: s.path }));
  }

  _getLocationLinks(count, pageData) {
    // Sample locations from data
    const locationKeys = Object.keys(locationServiceData);
    let selectedKeys = getRandom(locationKeys, count);

    // If page is location specific (e.g., NY), prioritize nearby or major hubs
    // For this engine, we'll randomize for variety unless we implement geolocation logic
    return selectedKeys.map(key => ({
      text: locationServiceData[key].location || "Location Services",
      href: `/services/${key}`
    }));
  }

  _getBlogLinks(count, pageData) {
    let posts = blogPosts;
    
    // Filter out self
    if (pageData && pageData.slug) {
      posts = posts.filter(p => p.slug !== pageData.slug);
    }

    // Filter by category relevance
    if (pageData && pageData.category) {
      const sameCat = posts.filter(p => p.category === pageData.category);
      if (sameCat.length >= count) posts = sameCat;
    }

    return getRandom(posts, count).map(p => ({
      text: p.title,
      href: `/blog/${p.slug}`
    }));
  }

  _getComparisonLinks(count, pageData) {
    // Context string from page title/content
    const context = pageData ? (pageData.title || "") : "";
    const comparisons = getComparisonPages(context);
    return comparisons.slice(0, count).map(c => ({
      text: c.title,
      href: c.path
    }));
  }

  _getCaseStudyLinks(count, pageData) {
    let studies = caseStudies;
    // Filter by industry if available
    if (pageData && (pageData.industry || pageData.category)) {
      const industry = pageData.industry || pageData.category;
      const relevant = studies.filter(s => s.industry === industry);
      if (relevant.length > 0) studies = relevant;
    }
    return getRandom(studies, count).map(s => ({
      text: s.title,
      href: `/case-studies/${s.slug}`
    }));
  }

  _getIndustryLinks(count, pageData) {
    const industries = Object.values(serviceIndustryData);
    return getRandom(industries, count).map(i => ({
      text: i.industryName || "Industry Solution",
      href: `/services/by-industry` // Ideally specific industry pages if routes known
    }));
  }
}

export default new LinkGeneratorEngine();