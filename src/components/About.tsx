import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Lightbulb, Layers, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.from('.about-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.about-content', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.about-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.about-cards',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Animate gradient background
    gsap.to('.gradient-bg', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }, { scope: sectionRef });
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="gradient-bg absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
           style={{
             backgroundImage: 'linear-gradient(45deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
             filter: 'brightness(0.8) contrast(1.2)'
           }}
      />
      <div className="absolute inset-0 opacity-30"
           style={{
             backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(121, 40, 202, 0.3), transparent 70%)',
             animation: 'pulse 8s ease-in-out infinite'
           }}
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-white  text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          
          <div className="about-content max-w-3xl mx-auto">
            <p className="text-text-secondary text-lg mb-8">
              I'm a passionate web developer with a keen eye for design and a love for creating interactive, 
              user-friendly applications. My journey in web development began 5 years ago, and I've been 
              crafting digital experiences ever since.
            </p>
            
            <p className="text-text-secondary text-lg">
              I specialize in building modern web applications using React, TypeScript, and other cutting-edge 
              technologies. I'm constantly exploring new tools and techniques to enhance my skills and deliver 
              exceptional results.
            </p>
          </div>
        </div>
        
        <div className="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Code className="text-primary" size={36} />,
              title: 'Clean Code',
              description: 'I write clean, maintainable code following best practices and design patterns.'
            },
            {
              icon: <Lightbulb className="text-secondary" size={36} />,
              title: 'Creative Solutions',
              description: 'I approach challenges with creativity and develop innovative solutions.'
            },
            {
              icon: <Layers className="text-accent" size={36} />,
              title: 'Modern Stack',
              description: 'I work with modern technologies and frameworks to build robust applications.'
            },
            {
              icon: <Globe className="text-primary" size={36} />,
              title: 'Responsive Design',
              description: 'I create responsive designs that work flawlessly across all devices.'
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="about-card backdrop-blur-sm bg-background-secondary/80 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl  font-semibold mb-3">{card.title}</h3>
              <p className="text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;