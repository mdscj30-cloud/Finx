import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ArrowLeft, Building2, Briefcase, Zap, CreditCard, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    revenue: '',
    accountingSystem: '',
    services: [],
    email: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Get Started with FinxisAI | Onboarding</title>
        <meta name="description" content="Start your journey with FinxisAI. Configure your AI bookkeeping and financial automation package in minutes." />
      </Helmet>
      
      <Header />

      <main className="pt-32 pb-20">
        <div className="container-max max-w-4xl">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progressPercentage)}% Completed</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Company Information */}
            {step === 1 && (
              <Card className="border-0 shadow-2xl shadow-blue-900/10 overflow-hidden">
                <div className="grid md:grid-cols-2">
                   <div className="p-8 bg-white">
                      <h1 className="text-2xl font-bold text-slate-900 mb-2">Tell us about your business</h1>
                      <p className="text-slate-600 mb-6">We'll tailor your financial automation plan based on your profile.</p>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input 
                            id="company" 
                            placeholder="Acme Corp" 
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Industry</Label>
                          <Select onValueChange={(val) => handleInputChange('industry', val)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="saas">SaaS / Technology</SelectItem>
                              <SelectItem value="ecommerce">E-Commerce</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="agency">Agency / Services</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Annual Revenue</Label>
                          <Select onValueChange={(val) => handleInputChange('revenue', val)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Revenue Range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pre-revenue">Pre-Revenue</SelectItem>
                              <SelectItem value="0-500k">$0 - $500k</SelectItem>
                              <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                              <SelectItem value="5m+">$5M+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button onClick={nextStep} className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                   </div>
                   <div className="hidden md:block bg-slate-900 relative">
                      <OptimizedImage 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                        alt="Office" 
                        className="w-full h-full object-cover opacity-60" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-white max-w-sm">
                           <h3 className="text-xl font-bold mb-2">Did you know?</h3>
                           <p className="text-slate-300">Automating your bookkeeping can save up to 15 hours per month in administrative work.</p>
                        </div>
                      </div>
                   </div>
                </div>
              </Card>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <Card className="border-0 shadow-2xl shadow-blue-900/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" onClick={prevStep} size="icon"><ArrowLeft className="w-5 h-5" /></Button>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Choose your services</h2>
                    <p className="text-slate-600">Select the solutions you need to scale.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { id: 'ai-bookkeeping', title: 'AI Bookkeeping', desc: 'Automated daily reconciliation' },
                    { id: 'tax-prep', title: 'Tax Preparation', desc: 'Annual filing & strategy' },
                    { id: 'cpa-support', title: 'CPA Support', desc: 'White-label back office' },
                    { id: 'virtual-cfo', title: 'Virtual CFO', desc: 'Strategic forecasting' },
                    { id: 'outsourced', title: 'Outsourced Accounting', desc: 'Full finance team replacement' },
                    { id: 'payroll', title: 'Payroll Management', desc: 'Compliance & distribution' }
                  ].map((service) => (
                    <div 
                      key={service.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.services.includes(service.id) 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-slate-100 hover:border-blue-200'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox 
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <div>
                          <h3 className="font-bold text-slate-900">{service.title}</h3>
                          <p className="text-sm text-slate-600">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button onClick={nextStep} className="w-full md:w-auto md:px-8 bg-blue-600 hover:bg-blue-700">
                   Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            )}

            {/* Step 3: Timeline & Pricing */}
            {step === 3 && (
              <Card className="border-0 shadow-2xl shadow-blue-900/10 p-8">
                 <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" onClick={prevStep} size="icon"><ArrowLeft className="w-5 h-5" /></Button>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Estimated Value</h2>
                    <p className="text-slate-600">Based on your selection, here is your potential ROI.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-emerald-900 font-bold mb-1">Time Saved</h3>
                      <p className="text-3xl font-bold text-emerald-600">~20 hrs</p>
                      <p className="text-xs text-emerald-700">per month</p>
                   </div>
                   <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <h3 className="text-blue-900 font-bold mb-1">Cost Savings</h3>
                      <p className="text-3xl font-bold text-blue-600">40%</p>
                      <p className="text-xs text-blue-700">vs. full-time hire</p>
                   </div>
                   <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-indigo-900 font-bold mb-1">Implementation</h3>
                      <p className="text-3xl font-bold text-indigo-600">2 Wks</p>
                      <p className="text-xs text-indigo-700">average setup time</p>
                   </div>
                </div>

                <div className="space-y-4 mb-8">
                   <h3 className="font-bold text-slate-900">Enter email to view detailed pricing</h3>
                   <Input 
                      placeholder="work@company.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                   />
                </div>

                <Button onClick={nextStep} className="w-full md:w-auto md:px-8 bg-blue-600 hover:bg-blue-700">
                   See Pricing & Finish <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            )}

            {/* Step 4: Next Steps */}
            {step === 4 && (
              <Card className="border-0 shadow-2xl shadow-blue-900/10 p-8 text-center">
                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <Check className="w-10 h-10" />
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">You're All Set!</h2>
                 <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
                   Thanks for starting your journey with FinxisAI. We've sent a customized proposal to <strong>{formData.email}</strong>.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                   <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                     Schedule Onboarding Call
                   </Button>
                   <Button size="lg" variant="outline">
                     Download Service Guide
                   </Button>
                 </div>

                 <div className="bg-slate-50 rounded-xl p-8 text-left">
                   <h3 className="font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                   <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800">What happens next?</h4>
                        <p className="text-slate-600 text-sm">An account manager will review your profile and reach out within 24 hours to schedule your kickoff.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Do I need to migrate data?</h4>
                        <p className="text-slate-600 text-sm">We handle the heavy lifting. We'll connect to your existing QBO/Xero account or help you migrate.</p>
                      </div>
                   </div>
                 </div>
              </Card>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnboardingPage;