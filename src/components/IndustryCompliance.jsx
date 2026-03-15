import React from 'react';
import { Shield, FileText } from 'lucide-react';

const IndustryCompliance = ({ compliance }) => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-6">
              <Shield className="w-4 h-4 mr-2" /> Compliance & Standards
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Uncompromising Adherence</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {compliance.text}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {compliance.regulations.map((reg, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                  <FileText className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="font-medium text-slate-800">{reg}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
             <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="font-bold text-xl text-slate-900 mb-4">Our Compliance Framework</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-sm text-slate-600">Continuous monitoring of regulatory changes impacting your sector.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-sm text-slate-600">SOC 2 Type II certified data handling procedures.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-sm text-slate-600">Mandatory ethics training for all staff working on your accounts.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-sm text-slate-600">Audit-ready documentation maintained at all times.</p>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCompliance;