
import React from 'react';

const Hero: React.FC = () => {
  const [currentVideo, setCurrentVideo] = React.useState(0);
  const videos = ['/video1.mp4', '/video2.mp4'];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
          src={videos[currentVideo]}
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-700 rounded-full">
          Quality Built Since 1998
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Building the Future <br />
          <span className="text-blue-400">Restoring the Past.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          From large-scale commercial developments to custom residential homes, Titan Construction delivers professional excellence on every project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded font-bold transition-all text-lg shadow-lg hover:shadow-blue-900/20"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded font-bold transition-all text-lg"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
