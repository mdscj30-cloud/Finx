import { useState, useEffect, useMemo } from 'react';
import LinkGeneratorEngine from '@/lib/LinkGeneratorEngine';

/**
 * Hook to generate links based on page context.
 * @param {string} pageType - The type of page (blog-post, location-page, etc.)
 * @param {object} pageData - Data object containing title, content, slug, category, etc.
 * @returns {object} - Object containing arrays of links for different placements
 */
const useLinkGenerator = (pageType, pageData) => {
  // Use useMemo to prevent regeneration on every render unless pageData changes
  // Stringify pageData to use as dependency since it's an object
  const dataString = JSON.stringify({ 
    id: pageData?.id, 
    slug: pageData?.slug, 
    title: pageData?.title,
    category: pageData?.category 
  });

  const generatedLinks = useMemo(() => {
    if (!pageType) return { early: [], mid: [], end: [], sidebar: [] };
    
    try {
      return LinkGeneratorEngine.generateLinks(pageType, pageData || {});
    } catch (error) {
      console.error("Link Generation Error:", error);
      return { early: [], mid: [], end: [], sidebar: [] };
    }
  }, [pageType, dataString]);

  return generatedLinks;
};

export default useLinkGenerator;