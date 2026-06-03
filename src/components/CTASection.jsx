import Image from 'next/image';
import React from 'react';

export default function CTASection() {
  return (
    <section className="relative  w-full bg-black py-24 px-6 text-center overflow-hidden font-sans">
      
      {/* --- Visual Backdrop Layer --- */}
      <div className="absolute inset-0 flex justify-center pointer-events-none select-none z-0">
        
        {/* Ambient Radial Blue Glow Effect behind the image */}
        <div className="absolute top-[-20%] w-125 h-75 sm:w-200 sm:h-100 rounded-full bg-indigo-600/25 blur-[100px]" />
        
        {/* Precise UI Grid Background Image */}
        <div className="absolute top-0 w-full max-w-300 h-full opacity-80 mix-blend-screen">
          <Image 
            src="/images/cta-bg.png" 
            alt="Globe Grid Mesh" 
            fill
            priority
            sizes="(max-w-1200px) 100vw, 1200px"
            className="object-top object-contain"
          />
        </div>
        
        {/* Bottom Fade Mask to blend seamlessly with sections below */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* --- Interactive Content Layout --- */}
      <div className="relative max-w-3xl mx-auto flex flex-col items-center pt-12 z-10">
        
        {/* Main Header Copy */}
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-white mb-5 leading-[1.2]">
          Your next role is <br /> already looking for you
        </h2>

        {/* Sub-text Context */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10 font-normal leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* Responsive Dual Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors duration-200 active:scale-95">
            Create a free account
          </button>
          
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-950/40 text-zinc-300 text-sm font-medium border border-zinc-800/80 hover:bg-zinc-900/80 hover:text-white transition-all duration-200 backdrop-blur-sm active:scale-95">
            View pricing
          </button>
        </div>

      </div>
    </section>
  );
}