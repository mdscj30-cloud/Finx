import { usStates, services } from './usStateLocationData';

export const generateStateLinks = (currentServiceSlug, currentStateSlug) => {
  const currentState = usStates.find(s => s.slug === currentStateSlug);
  if (!currentState) return { internal: [], external: [], related: [] };

  // 1. Related Services in Same State
  const relatedServices = services
    .filter(s => s.slug !== currentServiceSlug)
    .slice(0, 4)
    .map(s => ({
      label: `${s.name} in ${currentState.name}`,
      path: `/services/${s.slug}-${currentStateSlug}`
    }));

  // 2. Same Service in Nearby States (Region)
  const nearbyStates = usStates
    .filter(s => s.region === currentState.region && s.slug !== currentStateSlug)
    .sort(() => 0.5 - Math.random()) // Shuffle slightly
    .slice(0, 4)
    .map(s => ({
      label: `${services.find(ser => ser.slug === currentServiceSlug).name} in ${s.name}`,
      path: `/services/${currentServiceSlug}-${s.slug}`
    }));

  // 3. Comparisons
  const comparisons = [
    { label: "AI vs Traditional Bookkeeping", path: "/comparison/ai-vs-traditional-bookkeeping" },
    { label: "Outsourced vs In-House", path: "/comparison/outsourced-bookkeeping-vs-in-house" }
  ];

  // 4. External Links (Mocked based on tax body)
  const externalLinks = [
    { label: currentState.taxBody, url: `https://www.google.com/search?q=${encodeURIComponent(currentState.taxBody)}` }, // In prod, use real URLs
    { label: `${currentState.name} Chamber of Commerce`, url: `https://www.google.com/search?q=${encodeURIComponent(currentState.name + " Chamber of Commerce")}` },
    { label: "IRS Small Business", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }
  ];

  return {
    internalLinks: [...relatedServices, ...comparisons],
    relatedPages: nearbyStates,
    externalLinks
  };
};