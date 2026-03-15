import { caseStudies } from './caseStudiesData';

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(study => study.slug === slug);
};

export const getAllCaseStudies = () => {
  return caseStudies;
};

export const getCaseStudiesByIndustry = (industry) => {
  return caseStudies.filter(study => study.industry === industry);
};

export const getCaseStudiesByService = (service) => {
  return caseStudies.filter(study => study.service === service);
};

export const getCaseStudiesByCompanySize = (size) => {
  return caseStudies.filter(study => study.companySize === size);
};

export const getRelatedCaseStudies = (currentStudy, limit = 3) => {
  if (!currentStudy) return [];
  
  return caseStudies
    .filter(study => 
      study.id !== currentStudy.id && 
      (study.industry === currentStudy.industry || study.service === currentStudy.service)
    )
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, limit);
};

export const formatReadTime = (wordCount) => {
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

export const generateCaseStudySchema = (study) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.title,
    "description": study.metaDescription,
    "image": `https://finxis.ai/images/case-studies/${study.slug}.jpg`, // Placeholder
    "author": {
      "@type": "Organization",
      "name": "FinxisAI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FinxisAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finxis.ai/logo.png"
      }
    },
    "datePublished": "2024-01-01", // Placeholder
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://finxis.ai/case-studies/${study.slug}`
    },
    "about": {
      "@type": "Organization",
      "name": study.industry
    }
  };
};