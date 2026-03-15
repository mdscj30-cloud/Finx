import { 
  BookOpen, Calculator, Globe, Building2, 
  Briefcase, ShieldCheck, Users, BrainCircuit, 
  FileText, TrendingUp, Scale, MapPin, Filter, Calendar
} from 'lucide-react';

export const navigationData = {
  services: {
    label: "Services",
    path: "/services/by-industry",
    icon: Briefcase,
    items: [
      { label: "AI Bookkeeping", path: "/services/ai-bookkeeping", desc: "Automated daily record-keeping" },
      { label: "Tax Preparation", path: "/services/tax-preparation", desc: "AI-assisted tax filing" },
      { label: "Virtual CFO", path: "/services/virtual-cfo", desc: "Strategic financial advisory" },
      { label: "CPA Support", path: "/services/cpa-support", desc: "White-label back-office for firms" },
      { label: "CPA Bookkeeping", path: "/services/cpa-bookkeeping", desc: "Wholesale AI bookkeeping" },
      { label: "CPA Outsourced Support", path: "/services/cpa-outsourced-support", desc: "Scale your practice" },
      { label: "Industry Hub", path: "/services/by-industry", isAction: true },
      { label: "Location Hub", path: "/services/by-location", isAction: true }
    ]
  },
  solutions: {
    label: "Solutions",
    path: "/solutions/smb",
    icon: BrainCircuit,
    items: [
      { label: "For CPAs", path: "/solutions/cpa", desc: "Scale your firm" },
      { label: "For SMBs", path: "/solutions/smb", desc: "Automate your business" },
      { label: "Tax Advisory", path: "/solutions/tax-advisory", desc: "Strategic planning" },
      { label: "Formation Services", path: "/formation", desc: "Start your business" }
    ]
  },
  resources: {
    label: "Resources",
    path: "/blog",
    icon: BookOpen,
    items: [
      { label: "Blog", path: "/blog", desc: "Expert insights" },
      { label: "Case Studies", path: "/case-studies", desc: "Success stories" },
      { label: "Comparisons", path: "/comparisons", desc: "FinxisAI vs Others" },
      { label: "Glossary", path: "/glossary", desc: "Financial terms" },
      { label: "Industry Solutions", path: "/funnels", desc: "Segment specific" },
      { label: "Compliance Deadlines", path: "/resources/compliance-deadlines", desc: "Key dates & filings" },
      { label: "Partnerships", path: "/partnerships/cpa-white-label", desc: "Become a partner" }
    ]
  },
  company: {
    label: "Company",
    path: "/about",
    icon: Users,
    items: [
      { label: "About Us", path: "/about" },
      { label: "Pricing", path: "/pricing" },
      { label: "Contact", path: "/contact" },
      { label: "Careers", path: "/careers" },
      { label: "Privacy Policy", path: "/privacy-policy" }
    ]
  }
};

export const getBreadcrumbs = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  let breadcrumbs = [{ label: 'Home', path: '/' }];
  
  let currentPath = '';
  
  // Handle specific routes that need custom parent structures
  if (parts[0] === 'blog' && parts.length > 1 && parts[1] !== 'category' && parts[1] !== 'cpa') {
     // Single blog post
     // Do nothing special, standard logic works: Home > Blog > Slug
  }

  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    
    // Formatting label
    let label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
    
    // Custom overrides
    if (part === 'ai-bookkeeping') label = 'AI Bookkeeping';
    if (part === 'tax-preparation') label = 'Tax Prep';
    if (part === 'virtual-cfo') label = 'Virtual CFO';
    if (part === 'cpa-support') label = 'CPA Support';
    if (part === 'smb') label = 'SMB';
    if (part === 'cpa') label = 'CPA';
    if (part === 'usa') label = 'USA';
    if (part === 'uk') label = 'UK';
    if (part === 'uae') label = 'UAE';
    if (part === 'funnels') label = 'Industry Solutions';
    if (part === 'comparisons') label = 'Comparisons';
    
    // Check if it looks like a dynamic slug (usually last item, long, contains hyphens)
    // We want to make it look nicer if it's a known ID or slug
    if (index === parts.length - 1 && parts.length > 1) {
        // If it's a very long slug, maybe truncate or leave as is (styling handles truncation)
    }

    breadcrumbs.push({ label, path: currentPath });
  });
  
  return breadcrumbs;
};