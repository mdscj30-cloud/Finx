import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

// Fixes broken window.location redirect for legacy /comparison/:slug URLs
const ComparisonRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/comparisons/${slug}`} replace />;
};
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import ProtectedRoute from '@/components/ProtectedRoute';
import AIFloatingWidget from '@/components/AIFloatingWidget';
import SchemaValidator from '@/components/SchemaValidator';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { Loader2, WifiOff } from 'lucide-react';

// Eager Load Critical Dynamic Pages for SEO Crawlers
import BlogPostPage from '@/pages/BlogPostPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import ComparisonPage from '@/pages/comparison/ComparisonPage';
import ServiceIndustryTemplate from '@/components/ServiceIndustryTemplate';
import ServiceLocationPage from '@/components/ServiceLocationPage';
import GlossaryTermPage from '@/pages/GlossaryTermPage';
import FunnelPage from '@/pages/FunnelPage';
import CpaBlogPostPage from '@/pages/CpaBlogPostPage';
import PartnershipPage from '@/pages/PartnershipPage';

// Lazy Load Non-Critical / App Routes
const SolutionsCPA = lazy(() => import('@/pages/SolutionsCPA'));
const SolutionsSMB = lazy(() => import('@/pages/SolutionsSMB'));
const TaxAdvisory = lazy(() => import('@/pages/TaxAdvisory'));
const BlogListPage = lazy(() => import('@/pages/BlogListPage'));
const BlogCategoryPage = lazy(() => import('@/pages/BlogCategoryPage'));
const CpaBlogListPage = lazy(() => import('@/pages/CpaBlogListPage'));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'));
const FunnelListPage = lazy(() => import('@/pages/FunnelListPage'));
const PartnershipLandingPage = lazy(() => import('@/pages/PartnershipLandingPage'));
const LocationPage = lazy(() => import('@/pages/LocationPage'));
const GlossaryIndexPage = lazy(() => import('@/pages/GlossaryIndexPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const ComplianceDeadlinesPage = lazy(() => import('@/pages/ComplianceDeadlinesPage'));
const FormationServicesPage = lazy(() => import('@/pages/FormationServicesPage'));
const OnboardingPage = lazy(() => import('@/pages/OnboardingPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));

// Portals (Lazy)
const ClientPortalLayout = lazy(() => import('@/components/ClientPortalLayout'));
const ClientDashboard = lazy(() => import('@/pages/ClientDashboard'));
const ClientIntegrations = lazy(() => import('@/pages/ClientIntegrations'));
const ClientDocumentsPage = lazy(() => import('@/pages/ClientDocumentsPage'));
const ClientBillingPage = lazy(() => import('@/pages/ClientBillingPage'));
const ClientMessagesPage = lazy(() => import('@/pages/ClientMessagesPage'));
const ClientSettingsPage = lazy(() => import('@/pages/ClientSettingsPage'));
const ClientReportsPage = lazy(() => import('@/pages/ClientReportsPage'));
const CpaPortalLayout = lazy(() => import('@/components/cpa/CpaPortalLayout'));
const CpaDashboard = lazy(() => import('@/pages/cpa/CpaDashboard'));
const CpaClientsPage = lazy(() => import('@/pages/cpa/CpaClientsPage'));
const CpaClientDetailPage = lazy(() => import('@/pages/cpa/CpaClientDetailPage'));
const CpaTasksPage = lazy(() => import('@/pages/cpa/CpaTasksPage'));
const CpaActivityPage = lazy(() => import('@/pages/cpa/CpaActivityPage'));
const CpaStaffPage = lazy(() => import('@/pages/cpa/CpaStaffPage'));
const QuickBooksCallbackPage = lazy(() => import('@/pages/QuickBooksCallbackPage'));
const CpaCommunicationPage = lazy(() => import('@/pages/cpa/CpaCommunicationPage'));
const CpaBuyProductsPage = lazy(() => import('@/pages/cpa/CpaBuyProductsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const PartnershipConfirmationPage = lazy(() => import('@/components/PartnershipConfirmationPage'));
const PartnershipDashboard = lazy(() => import('@/components/PartnershipDashboard'));
const SegmentFunnelAnalytics = lazy(() => import('@/components/SegmentFunnelAnalytics'));

// Service & Hub Pages (Lazy)
const AIBookkeepingPage = lazy(() => import('@/pages/services/AIBookkeepingPage'));
const CPASupportPage = lazy(() => import('@/pages/services/CPASupportPage'));
const TaxPreparationPage = lazy(() => import('@/pages/services/TaxPreparationPage'));
const VirtualCFOPage = lazy(() => import('@/pages/services/VirtualCFOPage'));
const CPABookkeepingPage = lazy(() => import('@/pages/services/CPABookkeepingPage'));
const CPAOutsourcedSupportPage = lazy(() => import('@/pages/services/CPAOutsourcedSupportPage'));
const ServiceIndustryPage = lazy(() => import('@/components/ServiceIndustryPage'));
const IndustryHub = lazy(() => import('@/pages/services/IndustryHub'));
const LocationHub = lazy(() => import('@/pages/services/LocationHub'));
const StateLocationPage = lazy(() => import('@/components/StateLocationPage'));
const ComparisonHub = lazy(() => import('@/pages/ComparisonHub'));

// "How We Think" Pages (Lazy)
const AIResponsibilityPage = lazy(() => import('@/pages/how-we-think/AIResponsibilityPage'));
const WhatWeAutomatePage = lazy(() => import('@/pages/how-we-think/WhatWeAutomatePage'));
const QualityControlFrameworkPage = lazy(() => import('@/pages/how-we-think/QualityControlFrameworkPage'));
const ProfessionalOversightPage = lazy(() => import('@/pages/how-we-think/ProfessionalOversightPage'));
const DataSecurityPrivacyPage = lazy(() => import('@/pages/how-we-think/DataSecurityPrivacyPage'));
const RegulatoryCompliancePage = lazy(() => import('@/pages/how-we-think/RegulatoryCompliancePage'));
const FutureOfAIAccountingPage = lazy(() => import('@/pages/how-we-think/FutureOfAIAccountingPage'));
const OurStoryPhilosophyPage = lazy(() => import('@/pages/how-we-think/OurStoryPhilosophyPage'));

// Country Pages (Lazy)
const USAPage = lazy(() => import('@/pages/country/USAPage'));
const UKPage = lazy(() => import('@/pages/country/UKPage'));
const AustraliaPage = lazy(() => import('@/pages/country/AustraliaPage'));
const NetherlandsPage = lazy(() => import('@/pages/country/NetherlandsPage'));
const EgyptPage = lazy(() => import('@/pages/country/EgyptPage'));
const UAEPage = lazy(() => import('@/pages/country/UAEPage'));

// Other Pages (Lazy)
const FAQAIAccountingPage = lazy(() => import('@/pages/faqs/FAQAIAccountingPage'));
const OurProcessPage = lazy(() => import('@/pages/about/OurProcessPage'));
const DataSecurityPage = lazy(() => import('@/pages/about/DataSecurityPage'));
const OurTeamPage = lazy(() => import('@/pages/about/OurTeamPage'));
const AISafetyPage = lazy(() => import('@/pages/about/AISafetyPage'));
const SMBLandingPage = lazy(() => import('@/pages/funnels/SMBLandingPage'));
const CPAFirmLandingPage = lazy(() => import('@/pages/funnels/CPAFirmLandingPage'));
const StartupLandingPage = lazy(() => import('@/pages/funnels/StartupLandingPage'));
const SaaSLandingPage = lazy(() => import('@/pages/funnels/SaaSLandingPage'));
const ECommerceLandingPage = lazy(() => import('@/pages/funnels/ECommerceLandingPage'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      <p className="text-slate-500 font-medium animate-pulse">Loading FinxisAI...</p>
    </div>
  </div>
);

const OfflineBanner = () => {
  const isOnline = useNetworkStatus();
  if (isOnline) return null;
  return (
    <div className="bg-red-500 text-white text-sm font-medium py-2 px-4 flex items-center justify-center sticky top-0 z-[100]">
      <WifiOff className="w-4 h-4 mr-2" />
      You are currently offline. Some features may be unavailable.
    </div>
  );
};

function App() {
  const cityLocationRoutes = [
    'bookkeeping-london', 'accounting-london', 'tax-preparation-london', 'payroll-london', 'virtual-cfo-london',
    'bookkeeping-manchester', 'accounting-manchester', 'tax-preparation-manchester',
    'bookkeeping-birmingham', 'accounting-birmingham',
    'bookkeeping-toronto', 'accounting-toronto', 'tax-preparation-toronto', 'payroll-toronto', 'virtual-cfo-toronto',
    'bookkeeping-vancouver', 'accounting-vancouver', 'tax-preparation-vancouver', 'payroll-vancouver', 'virtual-cfo-vancouver',
    'bookkeeping-calgary', 'accounting-calgary', 'tax-preparation-calgary',
    'bookkeeping-montreal', 'accounting-montreal'
  ];

  const debugSchema = false;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <OfflineBanner />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/formation" element={<FormationServicesPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/solutions/cpa" element={<SolutionsCPA />} />
            <Route path="/solutions/smb" element={<SolutionsSMB />} />
            <Route path="/solutions/tax-advisory" element={<TaxAdvisory />} />
            
            <Route path="/partnerships/cpa-white-label" element={<PartnershipLandingPage />} />
            <Route path="/partnerships/confirmation" element={<PartnershipConfirmationPage />} />
            
            {/* Dynamic Content Routes (Eager Loaded) */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
            
            <Route path="/blog/cpa" element={<CpaBlogListPage />} />
            <Route path="/blog/cpa/:slug" element={<CpaBlogPostPage />} />

            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />

            <Route path="/glossary" element={<GlossaryIndexPage />} />
            <Route path="/glossary/:slug" element={<GlossaryTermPage />} />

            <Route path="/funnels" element={<FunnelListPage />} />
            <Route path="/funnels/:slug" element={<FunnelPage />} />
            
            <Route path="/partnerships/:slug" element={<PartnershipPage />} />

            <Route path="/comparisons" element={<ComparisonHub />} />
            <Route path="/comparisons/:slug" element={<ComparisonPage />} />
            {/* Redirect singular to plural */}
            <Route path="/comparison/:slug" element={<ComparisonRedirect />} />

            <Route path="/services/by-industry" element={<IndustryHub />} />
            
            {/* NOTE: route order matters — specific /services/* routes above must come before this catch-all */}
            <Route path="/industries/:industry/:segment" element={<ServiceIndustryTemplate />} />
            {/* Keep legacy/flat routes pointing to same template/component logic if needed, or redirect in data */}
            <Route path="/services/:serviceType/:industryType" element={<ServiceIndustryTemplate />} />

            <Route path="/services/by-location" element={<LocationHub />} />
            <Route path="/locations/:service/:location" element={<ServiceLocationPage />} />
            {/* Legacy city routes */}
            {cityLocationRoutes.map(path => (
              <Route key={path} path={`/services/${path}`} element={<ServiceLocationPage />} />
            ))}
            <Route path="/services/:slug" element={<StateLocationPage />} />
            <Route path="/locations/:slug" element={<LocationPage />} />

            {/* Industry Specific Landing Pages (Funnels) */}
            <Route path="/funnels/smb-accounting-solution" element={<SMBLandingPage />} />
            <Route path="/funnels/cpa-firm-accounting-solution" element={<CPAFirmLandingPage />} />
            <Route path="/funnels/startup-accounting-solution" element={<StartupLandingPage />} />
            <Route path="/funnels/saas-accounting-solution" element={<SaaSLandingPage />} />
            <Route path="/funnels/ecommerce-accounting-solution" element={<ECommerceLandingPage />} />

            {/* Protected Routes — use nested pattern so Outlet works correctly */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/funnel-analytics" element={<SegmentFunnelAnalytics />} />
              <Route path="/partners/dashboard" element={<PartnershipDashboard />} />
            </Route>

            {/* Core Resources */}
            <Route path="/resources/compliance-deadlines" element={<ComplianceDeadlinesPage />} />
            <Route path="/faqs/ai-accounting" element={<FAQAIAccountingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/callback" element={<QuickBooksCallbackPage />} />
            
            {/* How We Think */}
            <Route path="/how-we-think/ai-responsibility" element={<AIResponsibilityPage />} />
            <Route path="/how-we-think/what-we-automate" element={<WhatWeAutomatePage />} />
            <Route path="/how-we-think/quality-control-framework" element={<QualityControlFrameworkPage />} />
            <Route path="/how-we-think/professional-oversight" element={<ProfessionalOversightPage />} />
            <Route path="/how-we-think/data-security-privacy" element={<DataSecurityPrivacyPage />} />
            <Route path="/how-we-think/regulatory-compliance" element={<RegulatoryCompliancePage />} />
            <Route path="/how-we-think/future-of-ai-accounting" element={<FutureOfAIAccountingPage />} />
            <Route path="/how-we-think/our-story-philosophy" element={<OurStoryPhilosophyPage />} />

            {/* Services */}
            <Route path="/services/ai-bookkeeping" element={<AIBookkeepingPage />} />
            <Route path="/services/cpa-support" element={<CPASupportPage />} />
            <Route path="/services/tax-preparation" element={<TaxPreparationPage />} />
            <Route path="/services/virtual-cfo" element={<VirtualCFOPage />} />
            <Route path="/services/cpa-bookkeeping" element={<CPABookkeepingPage />} />
            <Route path="/services/cpa-outsourced-support" element={<CPAOutsourcedSupportPage />} />

            {/* Country Pages */}
            <Route path="/usa" element={<USAPage />} />
            <Route path="/uk" element={<UKPage />} />
            <Route path="/australia" element={<AustraliaPage />} />
            <Route path="/netherlands" element={<NetherlandsPage />} />
            <Route path="/egypt" element={<EgyptPage />} />
            <Route path="/uae" element={<UAEPage />} />
            
            <Route path="/about/our-process" element={<OurProcessPage />} />
            <Route path="/about/data-security" element={<DataSecurityPage />} />
            <Route path="/about/team" element={<OurTeamPage />} />
            <Route path="/about/ai-safety" element={<AISafetyPage />} />
            
            {/* Portal Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/client" element={<ClientPortalLayout />}>
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="integrations" element={<ClientIntegrations />} />
                <Route path="documents" element={<ClientDocumentsPage />} />
                <Route path="billing" element={<ClientBillingPage />} />
                <Route path="messages" element={<ClientMessagesPage />} />
                <Route path="settings" element={<ClientSettingsPage />} />
                <Route path="reports" element={<ClientReportsPage />} />
              </Route>

              <Route path="/cpa" element={<CpaPortalLayout />}>
                <Route path="dashboard" element={<CpaDashboard />} />
                <Route path="clients" element={<CpaClientsPage />} />
                <Route path="clients/:clientId" element={<CpaClientDetailPage />} />
                <Route path="tasks" element={<CpaTasksPage />} />
                <Route path="staff" element={<CpaStaffPage />} />
                <Route path="activity" element={<CpaActivityPage />} />
                <Route path="communication" element={<CpaCommunicationPage />} />
                <Route path="buy-products" element={<CpaBuyProductsPage />} />
              </Route>
            </Route>

            {/* 404 Catch-All Route */}
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        
        <Toaster />
        <AIFloatingWidget />
        <SchemaValidator debug={debugSchema} />
      </div>
    </ErrorBoundary>
  );
}

export default App;