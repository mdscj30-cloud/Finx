import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Shield, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { navigationData } from '@/lib/NavigationData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Create columns based on navigationData, plus a specific Legal column
  const sections = [
    { key: 'services', title: 'Services', items: navigationData.services.items },
    { key: 'solutions', title: 'Solutions', items: navigationData.solutions.items },
    { key: 'resources', title: 'Resources', items: navigationData.resources.items },
    { key: 'company', title: 'Company', items: navigationData.company.items },
  ];

  const legalItems = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-and-conditions" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container-max">
        
        <div className="grid lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-slate-800">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">FinxisAI</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering CPAs and small businesses with intelligent financial automation. 
              The future of accounting is hybrid.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 text-slate-400 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:pl-12">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Subscribe to our newsletter</h3>
                  <p className="text-slate-400 text-sm">Get the latest financial insights and AI trends delivered to your inbox.</p>
                </div>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {sections.map((section) => (
            <div key={section.key}>
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link 
                      to={item.path} 
                      className={`text-sm transition-colors block py-0.5 ${
                        item.isAction ? 'text-blue-400 hover:text-blue-300 font-medium' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalItems.map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-slate-800 mb-8">
           <div className="flex items-center justify-center gap-3">
             <Shield className="w-6 h-6 text-green-500" />
             <div>
               <span className="block text-white font-semibold text-sm">SOC 2 Certified</span>
               <span className="block text-xs text-slate-500">Enterprise Security</span>
             </div>
           </div>
           <div className="flex items-center justify-center gap-3">
             <Award className="w-6 h-6 text-yellow-500" />
             <div>
               <span className="block text-white font-semibold text-sm">ISO 27001</span>
               <span className="block text-xs text-slate-500">Information Security</span>
             </div>
           </div>
           <div className="flex items-center justify-center gap-3">
             <Globe className="w-6 h-6 text-blue-500" />
             <div>
               <span className="block text-white font-semibold text-sm">GDPR Compliant</span>
               <span className="block text-xs text-slate-500">Data Protection</span>
             </div>
           </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} FinxisAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;