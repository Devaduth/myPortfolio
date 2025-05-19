import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <span className="text-primary">Dev</span>Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="nav-item text-white hover:text-primary transition-colors duration-300 text-sm lg:text-base font-medium"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="nav-item bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-background-secondary z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-24`}
      >
        <nav className="flex flex-col items-center space-y-6 p-4">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-text-default hover:text-primary text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-all duration-300 font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;