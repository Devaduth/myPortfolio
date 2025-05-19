import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-10 text-text-secondary overflow-hidden">
      <div 
        className="absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
        style={{
          backgroundImage: 'linear-gradient(315deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
          filter: 'brightness(0.8) contrast(1.2)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at  50% 50%, rgba(0, 207, 253, 0.2), transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold flex items-center gap-2">
              <span className="text-primary">Dev</span>Portfolio
            </a>
            <p className="mt-2 text-sm">
              Crafting exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#"
              className="hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <img src="https://cdn.simpleicons.org/twitter/ffffff" alt="Twitter" className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <img src="https://cdn.simpleicons.org/linkedin/ffffff" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="hover:text-primary transition-colors duration-300"
              aria-label="Dribbble"
            >
              <img src="https://cdn.simpleicons.org/dribbble/ffffff" alt="Dribbble" className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="text-secondary" size={14} /> in {currentYear}
            </p>
            <p className="mt-1">
              All rights reserved &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;