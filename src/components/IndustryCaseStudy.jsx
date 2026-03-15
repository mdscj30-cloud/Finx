import React from 'react';
import { Quote } from 'lucide-react';

const IndustryCaseStudy = ({ caseStudy }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 text-sm font-bold mb-6 w-fit">
                Featured Success Story
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">"{caseStudy.title}"</h2>
              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-blue-400 mb-1">Challenge</h3>
                  <p>{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-blue-400 mb-1">Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold text-blue-400 mb-1">Results</h3>
                  <p className="text-white font-medium">{caseStudy.result}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-12 lg:p-16 flex items-center justify-center relative">
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5" />
              <blockquote className="text-center relative z-10">
                <p className="text-xl md:text-2xl font-light text-slate-200 italic leading-relaxed">
                  "The transformation in our financial clarity was immediate. We went from guessing to knowing, which is invaluable in this industry."
                </p>
                <footer className="mt-8">
                  <div className="font-bold text-white">Client CFO</div>
                  <div className="text-sm text-slate-400">Industry Leader</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCaseStudy;