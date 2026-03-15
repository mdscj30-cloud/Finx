export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FinxisAI",
  "url": "https://finxisai.com",
  "logo": "https://finxisai.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/finxisai",
    "https://twitter.com/finxisai",
    "https://facebook.com/finxisai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service",
    "areaServed": ["US", "UK"],
    "availableLanguage": "English"
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FinxisAI",
  "image": "https://finxisai.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PO Box 830",
    "addressLocality": "Wilmington",
    "addressRegion": "DE",
    "postalCode": "19801",
    "addressCountry": "US"
  },
  "telephone": "+1-800-555-0199",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "url": "https://finxisai.com"
});

export const generateServiceSchema = (serviceName, description, provider = "FinxisAI") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": provider,
    "url": "https://finxisai.com"
  }
});

export const generateComprehensiveServiceSchema = (serviceName, description, provider = "FinxisAI", url, areaServed = "US", priceRange = "$$", availability = "https://schema.org/OnlineOnly") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": provider,
    "url": "https://finxisai.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": areaServed
  },
  "url": url,
  "priceRange": priceRange,
  "offers": {
    "@type": "Offer",
    "availability": availability,
    "priceCurrency": "USD"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateArticleSchema = (title, description, image, datePublished, author, url) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinxisAI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finxisai.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

export const generateFAQPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question || faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer || faq.a
    }
  }))
});

export const generateWebPageSchema = (title, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url
});

export const generateProductSchema = (name, description, image, url, price) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "image": image,
  "url": url,
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": price,
    "availability": "https://schema.org/InStock"
  }
});

export const generateNewsArticleSchema = (title, description, image, datePublished, url) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "url": url
});

export const generateVideoSchema = (name, description, thumbnailUrl, uploadDate, contentUrl) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": name,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "contentUrl": contentUrl
});

export const generateMetaDescription = (title, keywords = [], length = 160) => {
  let desc = `Learn about ${title}. Discover expert insights and solutions for ${keywords.slice(0, 3).join(', ')}.`;
  return desc.length > length ? desc.substring(0, length - 3) + '...' : desc;
};

export const generatePageTitle = (primary, secondary = "FinxisAI", maxLength = 60) => {
  const title = `${primary} | ${secondary}`;
  return title.length > maxLength ? title.substring(0, maxLength - 3) + '...' : title;
};

export const generateCanonicalUrl = (pathname) => {
  const baseUrl = "https://finxisai.com";
  return `${baseUrl}${pathname.startsWith('/') ? pathname : '/' + pathname}`;
};

export const generateOGTags = (title, description, image, url, type = "website") => ({
  title, description, image, url, type
});

export const generateTwitterCardTags = (title, description, image) => ({
  card: "summary_large_image",
  title,
  description,
  image
});