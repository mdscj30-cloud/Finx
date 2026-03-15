import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Globe, FileText, AlertCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ComplianceDeadlinesPage = () => {
  const countries = [
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      path: '/usa',
      deadlines: [
        { category: 'Financial Reporting', items: ['10-K Filing (Public): 60-90 days after fiscal year end', '10-Q Filing (Public): 40-45 days after quarter end', 'Annual Report: Varies by state'] },
        { category: 'Taxation', items: ['Federal Income Tax (C-Corp): April 15', 'Federal Income Tax (S-Corp/Partnership): March 15', 'Estimated Tax Payments: Apr 15, Jun 15, Sep 15, Jan 15'] },
        { category: 'State Taxes', items: ['State Income Tax: Varies (typically matches Federal)', 'Sales Tax: Monthly/Quarterly (varies by state)', 'Franchise Tax: Varies by state (e.g., DE due Mar 1)'] },
        { category: 'Other Regulatory', items: ['BOI Reporting (FinCEN): Jan 1, 2025 (for existing companies)', 'Form 5500 (ERISA): July 31 (calendar year plans)', '1099 Filing: January 31'] }
      ]
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      path: '/uk',
      deadlines: [
        { category: 'Financial Reporting', items: ['Annual Accounts (Companies House): 9 months after year end', 'Confirmation Statement: Every 12 months (14 day grace period)'] },
        { category: 'Taxation', items: ['Corporation Tax Payment: 9 months + 1 day after year end', 'Company Tax Return (CT600): 12 months after year end', 'VAT Returns: Quarterly (1 month + 7 days after period)'] },
        { category: 'State Taxes', items: ['N/A (Centralized Tax System)', 'Business Rates: Annual billing (April)'] },
        { category: 'Other Regulatory', items: ['PAYE & NICs: 22nd of following month (electronic)', 'P11D (Benefits in Kind): July 6', 'Gender Pay Gap Reporting: April 4'] }
      ]
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      path: '/australia',
      deadlines: [
        { category: 'Financial Reporting', items: ['Annual Financial Report (ASIC): 4 months after year end (Public)', 'Solvency Resolution: Within 2 months of review date'] },
        { category: 'Taxation', items: ['Company Tax Return: Oct 31 or May 15 (if tax agent)', 'BAS (Business Activity Statement): Quarterly (28th of month following quarter)', 'FBT Return: May 21'] },
        { category: 'State Taxes', items: ['Payroll Tax: Monthly (7th of following month)', 'Land Tax: Annual assessment'] },
        { category: 'Other Regulatory', items: ['Superannuation Guarantee: 28th of month following quarter', 'TPAR (Taxable Payments): August 28', 'ASIC Annual Review Fee: 2 months after review date'] }
      ]
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      flag: '🇳🇱',
      path: '/netherlands',
      deadlines: [
        { category: 'Financial Reporting', items: ['Annual Accounts (KvK): Within 5 months of year end (extensible)', 'Publication of Accounts: Within 8 days of adoption'] },
        { category: 'Taxation', items: ['BTW (VAT): End of month following the quarter', 'VPB (Corp Tax): June 1 (5 months after year end)', 'ICP Declaration: End of month following the quarter'] },
        { category: 'State Taxes', items: ['N/A (Centralized)', 'Municipal Taxes (WOZ): Annual assessment'] },
        { category: 'Other Regulatory', items: ['Loonheffingen (Payroll Tax): End of following month', 'UBO Register: Keep updated continuously', 'Dividend Tax: Within 1 month of distribution'] }
      ]
    },
    {
      id: 'egypt',
      name: 'Egypt',
      flag: '🇪🇬',
      path: '/egypt',
      deadlines: [
        { category: 'Financial Reporting', items: ['Financial Statements: Within 3 months of year end', 'Commercial Register Renewal: Every 5 years'] },
        { category: 'Taxation', items: ['Corporate Tax: April 30', 'VAT Return: 1 month after tax period', 'Salary Tax: Quarterly (Jan, Apr, Jul, Oct)'] },
        { category: 'State Taxes', items: ['Property Tax: Annual assessment', 'Stamp Duty: Varies by transaction'] },
        { category: 'Other Regulatory', items: ['Social Insurance: 15th of each month', 'E-Invoice Submission: Real-time'] }
      ]
    },
    {
      id: 'uae',
      name: 'UAE',
      flag: '🇦🇪',
      path: '/uae',
      deadlines: [
        { category: 'Financial Reporting', items: ['Audited Financials: Per Free Zone regulations (often 3-6 months post YE)'] },
        { category: 'Taxation', items: ['Corporate Tax Filing: 9 months after FY end', 'VAT Return: 28th day following tax period', 'Excise Tax: 15th day following tax period'] },
        { category: 'State Taxes', items: ['N/A (Federal System)', 'Municipality Fees: Monthly (via utility bill)'] },
        { category: 'Other Regulatory', items: ['ESR Notification: 6 months after FY end', 'ESR Report: 12 months after FY end', 'UBO Update: Within 15 days of change'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Upcoming Compliance Deadlines | FinxisAI</title>
        <meta name="description" content="Stay ahead of regulatory requirements with our comprehensive guide to financial and tax deadlines for USA, UK, Australia, Netherlands, Egypt, and UAE." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Regulatory Calendar
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Upcoming Compliance <span className="gradient-text">Deadlines</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Essential dates for financial reporting, taxation, and regulatory compliance across key global markets.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <Tabs defaultValue="usa" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="flex flex-wrap justify-center w-full max-w-5xl h-auto p-2 gap-2">
                  {countries.map(country => (
                    <TabsTrigger key={country.id} value={country.id} className="text-lg py-3 px-6">
                      <span className="mr-2">{country.flag}</span> <span className="hidden sm:inline">{country.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {countries.map(country => (
                <TabsContent key={country.id} value={country.id}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      {country.deadlines.map((section, idx) => (
                        <Card key={idx} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader>
                            <CardTitle className="flex items-center text-xl text-slate-800">
                              {section.category === 'Financial Reporting' && <FileText className="w-5 h-5 mr-2 text-blue-500" />}
                              {section.category === 'Taxation' && <Globe className="w-5 h-5 mr-2 text-green-500" />}
                              {section.category === 'State Taxes' && <Globe className="w-5 h-5 mr-2 text-orange-500" />}
                              {section.category === 'Other Regulatory' && <AlertCircle className="w-5 h-5 mr-2 text-purple-500" />}
                              {section.category === 'ETA Deadlines' && <Globe className="w-5 h-5 mr-2 text-green-600" />}
                              {section.category === 'FTA Deadlines' && <Globe className="w-5 h-5 mr-2 text-green-600" />}
                              {section.category === 'Regulatory' && <AlertCircle className="w-5 h-5 mr-2 text-purple-500" />}
                              {section.category}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {section.items.map((item, i) => (
                                <li key={i} className="flex items-start text-slate-600">
                                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="flex justify-center">
                      <Button asChild className="btn-primary group">
                        <Link to={country.path}>
                          View Full {country.name} Page
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
              <p className="text-blue-800 text-sm">
                <strong>Disclaimer:</strong> Deadlines are provided for general information purposes only and may vary based on your specific fiscal year, entity type, or extensions. Always consult with a qualified tax professional or CPA.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceDeadlinesPage;