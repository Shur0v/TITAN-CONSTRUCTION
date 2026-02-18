
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Numbers/Stats Banner */}
        <Stats />
        
        {/* Section 3: Detailed About Us */}
        <About />
        
        {/* Section 4: Grid of Services */}
        <Services />

        {/* Section 5: Step by Step Process */}
        <Process />

        {/* Section 6: Key Project Showcase */}
        <Portfolio />

        {/* Section 7: Middle CTA Bar */}
        <section className="bg-slate-100 py-20 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Ready to start your next construction project?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-all">
                Request a Proposal
              </a>
              <a href="tel:+15551234567" className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded hover:bg-slate-900 hover:text-white transition-all">
                Call Us (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        {/* Section 8: Social Proof */}
        <Testimonials />

        {/* Section 9: Humanizing the Brand */}
        <Team />

        {/* Section 10: Engagement & Conversion */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 hidden md:flex w-12 h-12 bg-blue-700 text-white rounded-full shadow-lg items-center justify-center hover:bg-blue-800 transition-all z-40 active:scale-90"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default App;
