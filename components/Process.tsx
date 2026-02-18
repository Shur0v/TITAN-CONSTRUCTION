
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">How We Work</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Streamlined Construction Process</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From the first handshake to the final walkthrough, we maintain complete transparency and rigorous standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary/30 z-0"></div>

          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="relative z-10 bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-primary/40">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
