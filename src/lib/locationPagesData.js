// Generating comprehensive location data

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const usCities = [
  "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "San Francisco", "Charlotte", "Indianapolis", "Seattle", "Denver", "Washington DC",
  "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore"
];

const intlCities = [
  "London", "Toronto", "Sydney", "Amsterdam", "Cairo", "Dubai", "Singapore", "Berlin", "Paris", "Tokyo",
  "Mumbai", "Hong Kong", "Dublin", "Zurich", "Vancouver", "Montreal", "Melbourne", "Barcelona", "Stockholm", "Copenhagen"
];

const generateLocation = (name, type, country) => {
  const slug = name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
  
  let taxInfo = "Comprehensive tax compliance services tailored to local regulations.";
  if (country === 'USA') taxInfo = `Expert handling of IRS federal filing plus ${name} state/local tax requirements.`;
  if (country === 'UK') taxInfo = "Full HMRC compliance including VAT, Corporation Tax, and PAYE.";
  if (country === 'Canada') taxInfo = "CRA compliance including GST/HST and provincial tax filings.";

  return {
    slug,
    name,
    type, // 'State', 'City', 'International'
    country,
    title: `Accounting Services in ${name}`,
    description: `Professional AI-driven accounting and bookkeeping services for businesses in ${name}. Local compliance, tax prep, and CFO advisory.`,
    taxInfo,
    requirements: `Businesses in ${name} must adhere to specific reporting standards. We automate the collection and categorization of financial data to ensure you are always audit-ready.`,
    industries: ["Tech", "Retail", "Healthcare", "Real Estate"],
    successStory: {
      title: `${name} Retailer Saves 20hrs/Week`,
      desc: `A local retail chain in ${name} automated their daily sales reconciliation and saved 20 hours of manual work per week.`
    },
    testimonial: {
      quote: `FinxisAI understands the specific business environment in ${name}.`,
      author: `Local Business Owner, ${name}`
    }
  };
};

let allLocations = [];

// Generate States
states.forEach(state => {
  allLocations.push(generateLocation(state, 'State', 'USA'));
});

// Generate US Cities
usCities.forEach(city => {
  allLocations.push(generateLocation(city, 'City', 'USA'));
});

// Generate Intl Cities
intlCities.forEach(city => {
  let country = 'International';
  if (['London'].includes(city)) country = 'UK';
  if (['Toronto', 'Vancouver', 'Montreal'].includes(city)) country = 'Canada';
  if (['Sydney', 'Melbourne'].includes(city)) country = 'Australia';
  allLocations.push(generateLocation(city, 'International', country));
});

export const locationPages = allLocations;
export const getLocationPageBySlug = (slug) => locationPages.find(p => p.slug === slug);

export const generateLocationSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `FinxisAI ${page.name}`,
  "description": page.description,
  "areaServed": page.name
});