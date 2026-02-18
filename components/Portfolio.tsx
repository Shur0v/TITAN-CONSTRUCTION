
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Projects</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Showcasing Our Commitment to Quality Craftsmanship
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all rounded">
              View All Projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <a href="#contact" className="text-white font-semibold flex items-center group/link">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
