export const LINKING_RULES = {
  BLOG_POST: {
    pageType: 'blog-post',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'early-content', // First 500 words
        purpose: 'Direct users to core service offerings related to the blog topic.',
        anchorTextPattern: 'exact-match-service-name'
      },
      {
        targetType: 'location-page',
        count: 1,
        placement: 'mid-content',
        purpose: 'Showcase local expertise relevant to the topic.',
        anchorTextPattern: 'location-specific-context'
      },
      {
        targetType: 'comparison-page',
        count: 1,
        placement: 'near-conclusion',
        purpose: 'Help users deciding between solutions.',
        anchorTextPattern: 'comparison-context'
      },
      {
        targetType: 'case-study',
        count: 1,
        placement: 'sidebar-or-inline',
        purpose: 'Provide social proof.',
        anchorTextPattern: 'case-study-title'
      }
    ]
  },
  LOCATION_PAGE: {
    pageType: 'location-page',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'early-content',
        purpose: 'Link back to the main service definition.',
        anchorTextPattern: 'service-name'
      },
      {
        targetType: 'industry-page',
        count: 1,
        placement: 'mid-content',
        purpose: 'Demonstrate industry expertise in this location.',
        anchorTextPattern: 'industry-context'
      },
      {
        targetType: 'blog-post',
        count: 2, // 1-2
        placement: 'mid-content',
        purpose: 'Provide educational value.',
        anchorTextPattern: 'topic-relevance'
      },
      {
        targetType: 'comparison-page',
        count: 1,
        placement: 'near-cta',
        purpose: 'Address objections before conversion.',
        anchorTextPattern: 'vs-competitor'
      },
      {
        targetType: 'location-page',
        count: 3, // 3-5
        placement: 'end-of-page', // Nearby locations
        purpose: 'Improve local SEO clustering.',
        anchorTextPattern: 'nearby-city-name'
      }
    ]
  },
  SERVICE_PAGE: {
    pageType: 'service-page',
    rules: [
      {
        targetType: 'location-page',
        count: 3, // 3-5
        placement: 'distributed',
        purpose: 'Show service availability in key markets.',
        anchorTextPattern: 'service-in-location'
      },
      {
        targetType: 'blog-post',
        count: 2, // 2-3
        placement: 'mid-content', // FAQ or deeper dive sections
        purpose: 'Explain complex concepts.',
        anchorTextPattern: 'educational-topic'
      },
      {
        targetType: 'comparison-page',
        count: 1,
        placement: 'near-pricing',
        purpose: 'Justify value vs alternatives.',
        anchorTextPattern: 'why-choose-us'
      },
      {
        targetType: 'industry-page',
        count: 2, // 2-3
        placement: 'use-cases',
        purpose: 'Show vertical expertise.',
        anchorTextPattern: 'industry-solution'
      },
      {
        targetType: 'case-study',
        count: 1,
        placement: 'testimonials',
        purpose: 'Proof of results.',
        anchorTextPattern: 'client-result'
      }
    ]
  },
  COMPARISON_PAGE: {
    pageType: 'comparison-page',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'early-content',
        purpose: 'Link to the solution being compared.',
        anchorTextPattern: 'our-solution'
      },
      {
        targetType: 'location-page',
        count: 2, // 1-2
        placement: 'distributed',
        purpose: 'Show local relevance of the comparison.',
        anchorTextPattern: 'local-comparison'
      },
      {
        targetType: 'blog-post',
        count: 1,
        placement: 'mid-content',
        purpose: 'Deep dive into specific features.',
        anchorTextPattern: 'feature-explanation'
      },
      {
        targetType: 'comparison-page',
        count: 2, // 2-3
        placement: 'end-of-page',
        purpose: 'Offer other relevant comparisons.',
        anchorTextPattern: 'competitor-name'
      },
      {
        targetType: 'case-study',
        count: 1,
        placement: 'results-section',
        purpose: 'Prove superior outcomes.',
        anchorTextPattern: 'success-story'
      }
    ]
  },
  INDUSTRY_PAGE: {
    pageType: 'industry-page',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'early-content',
        purpose: 'Core service offering for industry.',
        anchorTextPattern: 'service-name'
      },
      {
        targetType: 'location-page',
        count: 2, // 1-2
        placement: 'mid-content',
        purpose: 'Industry hubs (e.g., Tech in SF).',
        anchorTextPattern: 'industry-in-location'
      },
      {
        targetType: 'blog-post',
        count: 2, // 1-2
        placement: 'resources-section',
        purpose: 'Industry trends and insights.',
        anchorTextPattern: 'industry-topic'
      },
      {
        targetType: 'case-study',
        count: 1,
        placement: 'hero-or-results',
        purpose: 'Industry peer success.',
        anchorTextPattern: 'peer-company'
      }
    ]
  },
  CASE_STUDY: {
    pageType: 'case-study',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'early-content', // Solution section
        purpose: 'The service that delivered results.',
        anchorTextPattern: 'service-used'
      },
      {
        targetType: 'industry-page',
        count: 1,
        placement: 'early-content', // Client background
        purpose: 'The industry context.',
        anchorTextPattern: 'industry-name'
      },
      {
        targetType: 'comparison-page',
        count: 1,
        placement: 'near-results',
        purpose: 'Why they switched to us.',
        anchorTextPattern: 'switch-reason'
      }
    ]
  },
  HOW_WE_THINK: {
    pageType: 'how-we-think',
    rules: [
      {
        targetType: 'service-page',
        count: 1,
        placement: 'mid-content',
        purpose: 'Application of philosophy.',
        anchorTextPattern: 'service-application'
      },
      {
        targetType: 'blog-post',
        count: 2, // 1-2
        placement: 'end-of-page',
        purpose: 'Deep dives on specific concepts.',
        anchorTextPattern: 'concept-exploration'
      }
    ]
  }
};

export default LINKING_RULES;