import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEOHead 
        title="Page Not Found - 404 | FinxisAI"
        description="The page you are looking for does not exist. Explore FinxisAI's AI-driven financial services, blog, or return home."
        url="https://finxis.ai/404"
      />
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search size={48} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">404 - Page Not Found</h1>
          <p className="text-xl text-slate-600 mb-10">
            We couldn't find the page you were looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
          
          <div className="max-w-md mx-auto mb-10 relative">
            <Input 
              type="text" 
              placeholder="Search FinxisAI..." 
              className="pl-12 h-14 text-lg rounded-full"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Popular Pages</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services/ai-bookkeeping" className="text-blue-600 hover:underline">AI Bookkeeping</Link>
              <span className="text-slate-300">•</span>
              <Link to="/services/tax-preparation" className="text-blue-600 hover:underline">Tax Preparation</Link>
              <span className="text-slate-300">•</span>
              <Link to="/pricing" className="text-blue-600 hover:underline">Pricing</Link>
              <span className="text-slate-300">•</span>
              <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
              <span className="text-slate-300">•</span>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;