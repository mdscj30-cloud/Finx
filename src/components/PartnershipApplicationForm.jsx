import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';
import { Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useNavigate } from 'react-router-dom';

const PartnershipApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const servicesList = [
    "White-Label Bookkeeping",
    "Tax Preparation Support",
    "Virtual CFO Services",
    "Payroll Management",
    "Advisory Tools"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Get selected services
    const selectedServices = servicesList.filter(service => 
      formData.get(`service_${service}`) === 'on'
    );

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase.from('partnership_applications').insert({
        firm_name: data.firm_name,
        number_of_cpas: parseInt(data.cpas),
        current_clients: parseInt(data.clients),
        annual_revenue: data.revenue,
        services: selectedServices,
        email: data.email,
        phone: data.phone,
        message: data.message
      });

      if (dbError) throw dbError;

      // 2. Trigger Welcome Email
      await supabase.functions.invoke('send-partnership-email', {
        body: {
          to: data.email,
          firmName: data.firm_name,
          partnerName: data.firm_name, // Or add specific contact name field
          dashboardLink: `${window.location.origin}/login`
        }
      });

      toast({
        title: "Application Received!",
        description: "Welcome to the partner program. Check your email for next steps.",
      });

      navigate('/partnerships/confirmation');

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Apply for Partnership</h3>
      <p className="text-slate-600 mb-8">Join our network of elite CPA firms.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="firm_name">Firm Name</Label>
          <Input id="firm_name" name="firm_name" required placeholder="e.g. Miller & Associates" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cpas">Number of CPAs</Label>
            <Input id="cpas" name="cpas" type="number" required placeholder="5" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clients">Current Clients</Label>
            <Input id="clients" name="clients" type="number" required placeholder="150" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="revenue">Annual Firm Revenue</Label>
          <select 
            id="revenue" 
            name="revenue" 
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Select Revenue Range</option>
            <option value="< $500k">&lt; $500k</option>
            <option value="$500k - $1M">$500k - $1M</option>
            <option value="$1M - $5M">$1M - $5M</option>
            <option value="$5M+">$5M+</option>
          </select>
        </div>

        <div className="space-y-3">
          <Label>Services Interested In</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {servicesList.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox id={`service_${service}`} name={`service_${service}`} />
                <label 
                  htmlFor={`service_${service}`} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" name="email" type="email" required placeholder="name@firm.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Notes (Optional)</Label>
          <textarea 
            id="message" 
            name="message" 
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tell us about your firm's goals..."
          />
        </div>

        <Button type="submit" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-500" disabled={isLoading}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default PartnershipApplicationForm;