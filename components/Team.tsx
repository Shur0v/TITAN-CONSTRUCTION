
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">Our Leadership</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">The Minds Behind the Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Experience, innovation, and integrity drive our management team to deliver excellence daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-blue-700 font-semibold mb-4 uppercase tracking-widest text-xs">{member.role}</p>
              <div className="flex space-x-4">
                {['linkedin', 'twitter'].map((s) => (
                  <a key={s} href="#" className="text-slate-400 hover:text-blue-700 transition-colors">
                    <div className="w-5 h-5 bg-current opacity-20 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
