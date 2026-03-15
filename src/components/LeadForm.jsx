import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const LeadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isOnline = useNetworkStatus();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isOnline) {
      toast({
        variant: "destructive",
        title: "No Internet Connection",
        description: "Please check your network and try again.",
      });
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');

    try {
      // Implement timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      );

      const dbPromise = supabase.from('leads').insert({
        name,
        email,
        company,
        status: 'new'
      });

      const { error: dbError } = await Promise.race([dbPromise, timeoutPromise]);

      if (dbError) throw dbError;

      // Trigger Email Notification (non-blocking)
      supabase.functions.invoke('send-lead-email', {
        body: { name, email, company }
      }).catch(err => console.error('Email notification failed:', err));

      toast({
        title: "✅ Request Sent!",
        description: "We've received your details and will be in touch shortly.",
      });
      e.target.reset();
    } catch (error) {
      console.error('[LeadForm] Error submitting lead:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message === 'Request timeout' 
          ? "The request took too long. Please try again." 
          : "There was a problem sending your request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-2">Get a Personalized Demo</h3>
      <p className="text-slate-600 text-center mb-6">See how FinxisAI can work for you.</p>
      
      {!isOnline && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center text-amber-800 text-sm">
          <AlertCircle className="w-4 h-4 mr-2" />
          You are currently offline. Forms cannot be submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" placeholder="" required disabled={isLoading || !isOnline} className="text-slate-900" />
        </div>
        <div>
          <Label htmlFor="email">Work Email</Label>
          <Input id="email" name="email" type="email" placeholder="" required disabled={isLoading || !isOnline} className="text-slate-900" />
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" name="company" type="text" placeholder="" required disabled={isLoading || !isOnline} className="text-slate-900" />
        </div>
        <Button type="submit" className="w-full btn-primary group" disabled={isLoading || !isOnline}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default LeadForm;