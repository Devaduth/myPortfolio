import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ThreeScene from './three/ThreeScene';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(
      '.hero-text',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      '.cta-button',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.3'
    )
    .fromTo(
      '.scroll-indicator',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power1.out', repeat: -1, yoyo: true },
      '-=0.2'
    );

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="container mx-auto px-4 md:px-6 z-10 relative"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
          >
            Creative Web Developer
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-text-secondary mb-6">
            Bringing ideas to life with code and creativity
          </p>
          
          <p className="hero-text text-base md:text-lg text-text-tertiary mb-8 max-w-lg mx-auto">
            I build exceptional digital experiences that live at the intersection of design and technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="cta-button bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="cta-button border-2 border-primary hover:bg-primary/10 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
        <ArrowDown className="text-primary animate-bounce" size={20} />
      </div>
    </section>
  );
};

export default Hero;