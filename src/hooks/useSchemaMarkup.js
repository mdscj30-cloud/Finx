import { useEffect } from 'react';

export const useSchemaMarkup = ({
  organization,
  service,
  faq,
  article,
  localBusiness
}) => {
  useEffect(() => {
    const scripts = [];

    const addSchema = (data) => {
      if (!data) return;
      
      try {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
        scripts.push(script);
      } catch (error) {
        console.error('Schema Markup Error:', error);
      }
    };

    // Organization Schema
    if (organization) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FinxisAI",
        "url": "https://finxisai.com",
        "logo": "https://finxisai.com/logo.png",
        "sameAs": [
          "https://twitter.com/finxisai",
          "https://linkedin.com/company/finxisai"
        ],
        ...organization
      });
    }

    // LocalBusiness Schema
    if (localBusiness) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FinxisAI",
        "image": "https://finxisai.com/logo.png",
        "@id": "https://finxisai.com",
        "url": "https://finxisai.com",
        "telephone": "+18005550199",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        ...localBusiness
      });
    }

    // Service Schema
    if (service) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "FinxisAI"
        },
        ...service
      });
    }

    // FAQ Schema
    if (faq && faq.length > 0) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question || item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer || item.a
          }
        }))
      });
    }

    // Article Schema
    if (article) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
          "@type": "Organization",
          "name": "FinxisAI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://finxisai.com/logo.png"
          }
        },
        ...article
      });
    }

    // Cleanup
    return () => {
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, [organization, service, faq, article, localBusiness]);
};