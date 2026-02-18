
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
              alt="Construction Team" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-10 -right-10 hidden md:block bg-blue-700 text-white p-8 rounded-lg shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-1">25+</p>
              <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">Years of Industry Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h4 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Decades of Excellence in Professional Construction
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Titan Construction has been at the forefront of the building industry for over 25 years. We pride ourselves on our meticulous attention to detail, uncompromising safety standards, and dedication to delivering projects that exceed client expectations.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team consists of certified architects, engineers, and project managers who work in seamless coordination to bring your vision to life. We believe in building not just structures, but long-lasting relationships based on trust and reliability.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Fully Licensed and Bonded",
                "Sustainable Building Practices",
                "On-Time and Within-Budget Delivery",
                "Comprehensive Safety Protocols"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#services" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors">
              Learn More About Our Values
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
