import React from 'react';
import { Helmet } from 'react-helmet';
import { generateWebPageSchema } from '@/lib/seoHelpers';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = "https://finxisai.com/og-image.jpg", 
  url, 
  type = "website", 
  schema 
}) => {
  const defaultSchema = generateWebPageSchema(title, description, url);
  const schemasToInject = Array.isArray(schema) ? schema : schema ? [schema] : [defaultSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Open Graph image dimensions */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@finxisai" />
      <meta name="twitter:creator" content="@finxisai" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schemas */}
      {schemasToInject.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;