import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Link } from 'react-router-dom';

const OurStoryPhilosophyPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FinxisAI Origin Story & Philosophy",
    "description": "Why we built FinxisAI: To bridge the gap between expensive legacy firms and unreliable DIY software.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "problem", label: "The Problem We Saw" },
    { id: "solution", label: "The Solution" },
    { id: "values", label: "Our Core Values" }
  ];

  const relatedLinks = [
    { title: "Our Team", desc: "Meet the founders.", path: "/about/team" },
    { title: "Future Vision", desc: "Where we are going.", path: "/how-we-think/future-of-ai-accounting" }
  ];

  return (
    <HowWeThinkLayout 
      title="Why We Chose This Path: Our Origin Story"
      description="We didn't just want to build another accounting firm. We wanted to fix a broken industry."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="problem">
        <p className="lead text-xl text-slate-600 mb-8">
          The idea for FinxisAI was born from frustration. As founders ourselves, we saw that businesses had two bad options. Option A: Expensive, slow legacy firms that still billed by the hour. Option B: DIY software that forced us to play accountant.
        </p>
        <p>
          There was a missing middle. Where was the service that was fast, affordable, <em>and</em> professional? Where was the "Self-Driving Car" of accounting?
        </p>
      </section>

      <section id="solution">
        <h2>The Solution: Humans + Machines</h2>
        <p>We realized that software alone wasn't the answer—software doesn't sign tax returns or give strategic advice. But humans alone weren't scalable. The solution was a hybrid. We built FinxisAI to use AI for the grunt work, freeing up brilliant humans to do the brain work.</p>
      </section>

      <section id="values">
        <h2>Our Core Philosophy</h2>
        <div className="grid gap-6 my-8 not-prose">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 text-slate-900">1. Clarity Over Complexity</h3>
            <p className="text-slate-600">We speak plain English, not "accountant-ese." Financial data should be understandable.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 text-slate-900">2. Proactive Over Reactive</h3>
            <p className="text-slate-600">We don't wait for you to ask. We bring insights to you before problems arise.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 text-slate-900">3. Speed is a Feature</h3>
            <p className="text-slate-600">In the modern economy, waiting 3 weeks for month-end close is unacceptable. We aim for real-time.</p>
          </div>
        </div>
      </section>

      <div className="bg-slate-100 p-8 rounded-2xl mt-12 text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Join Our Journey</h2>
        <p className="mb-6 text-slate-600 max-w-2xl mx-auto">We are building the firm we always wished we could hire.</p>
        <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">Work With Us</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default OurStoryPhilosophyPage;