import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const SegmentCTA = ({ segment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const content = {
    smb: {
      title: "Get Your Free Financial Assessment",
      subtitle: "See exactly how much time and money FinxisAI can save your business.",
      btnText: "Get Free Assessment",
      fields: [
        { name: "business_name", label: "Business Name", type: "text" },
        { name: "revenue", label: "Annual Revenue", type: "select", options: ["<$500k", "$500k-$1M", "$1M-$5M", "$5M+"] }
      ]
    },
    cpa: {
      title: "Schedule a Partner Demo",
      subtitle: "See how our white-label platform works and discuss partnership pricing.",
      btnText: "Schedule Demo",
      fields: [
        { name: "firm_name", label: "Firm Name", type: "text" },
        { name: "client_count", label: "Number of Clients", type: "select", options: ["1-20", "21-50", "50-100", "100+"] }
      ]
    },
    startup: {
      title: "Start Your 30-Day Free Trial",
      subtitle: "No credit card required. Get investor-ready financials in minutes.",
      btnText: "Get Started Free",
      fields: [
        { name: "startup_name", label: "Startup Name", type: "text" },
        { name: "funding_stage", label: "Funding Stage", type: "select", options: ["Bootstrapped", "Pre-Seed", "Seed", "Series A+"] }
      ]
    },
    saas: {
      title: "See FinxisAI in Action",
      subtitle: "Get a custom demo of our ASC 606 revenue recognition engine.",
      btnText: "Schedule Demo",
      fields: [
        { name: "company_name", label: "Company Name", type: "text" },
        { name: "arr", label: "Current ARR", type: "select", options: ["<$1M", "$1M-$5M", "$5M-$10M", "$10M+"] }
      ]
    },
    ecommerce: {
      title: "Get Your Profitability Analysis",
      subtitle: "Connect your store and get a free audit of your true margins.",
      btnText: "Get Free Analysis",
      fields: [
        { name: "store_name", label: "Store Name", type: "text" },
        { name: "platform", label: "Primary Platform", type: "select", options: ["Shopify", "Amazon", "WooCommerce", "Other"] }
      ]
    }
  };

  const data = content[segment] || content.smb;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const submissionData = {};
    formData.forEach((value, key) => submissionData[key] = value);

    try {
      // 1. Save Lead
      const { data: lead, error: dbError } = await supabase.from('leads').insert({
        name: submissionData.name,
        email: submissionData.email,
        company: submissionData.business_name || submissionData.firm_name || submissionData.startup_name || submissionData.company_name || submissionData.store_name,
        status: 'new',
        segment: segment, // We will need to add this column to schema
        funnel_source: window.location.pathname, // And this
        form_data: submissionData // And this
      }).select().single();

      if (dbError) throw dbError;

      // 2. Trigger Email Sequence (Welcome Email)
      const { error: emailError } = await supabase.functions.invoke('send-segment-email', {
        body: { 
          to: submissionData.email,
          segment: segment,
          emailType: 'welcome',
          data: { name: submissionData.name }
        }
      });

      if (emailError) console.error("Email trigger failed:", emailError);

      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "We've received your request. Check your email for next steps.",
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container-max max-w-xl">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/10 p-12 rounded-3xl backdrop-blur-sm border border-white/20"
          >
            <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-blue-100 text-lg mb-8">
              Thanks for your interest. We've sent a confirmation email to your inbox with the next steps.
            </p>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-0" onClick={() => window.location.reload()}>
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-form" className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="text-white">
              <h2 className="text-4xl font-display font-bold mb-6">{data.title}</h2>
              <p className="text-xl text-blue-100 mb-8">{data.subtitle}</p>
              <ul className="space-y-4">
                {["No commitment required", "Free expert consultation", "Personalized roadmap"].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-50">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
           </div>

           <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label htmlFor="name">Full Name</Label>
                       <Input id="name" name="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="email">Work Email</Label>
                       <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
                 </div>

                 {data.fields.map((field, i) => (
                   <div key={i} className="space-y-2">
                      <Label htmlFor={field.name}>{field.label}</Label>
                      {field.type === 'select' ? (
                        <select 
                          id={field.name} 
                          name={field.name}
                          className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select...</option>
                          {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      ) : (
                        <Input id={field.name} name={field.name} type={field.type} required />
                      )}
                   </div>
                 ))}

                 <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 text-lg mt-4" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : data.btnText}
                 </Button>
                 
                 <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting, you agree to our Terms and Privacy Policy.
                 </p>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentCTA;