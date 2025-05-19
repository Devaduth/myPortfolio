import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'Next.js', level: 85, color: '#FFFFFF' },
  { name: 'HTML/CSS', level: 90, color: '#E34F26' },
  { name: 'Tailwind CSS', level: 85, color: '#38B2AC' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Express', level: 80, color: '#FFFFFF' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'Firebase', level: 80, color: '#FFCA28' },
  { name: 'GraphQL', level: 70, color: '#E535AB' },
];

const otherSkills: Skill[] = [
  { name: 'Three.js', level: 80, color: '#FFFFFF' },
  { name: 'GSAP', level: 85, color: '#88CE02' },
  { name: 'Git', level: 85, color: '#F05032' },
  { name: 'Figma', level: 75, color: '#F24E1E' },
  { name: 'Docker', level: 70, color: '#2496ED' },
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.fromTo(
      barRef.current,
      { width: 0 },
      {
        width: `${skill.level}%`,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: barRef });

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-text-default font-medium">{skill.name}</span>
        <span className="text-text-secondary">{skill.level}%</span>
      </div>
      <div className="w-full bg-background-tertiary rounded-full h-2.5">
        <div
          ref={barRef}
          className="h-2.5 rounded-full"
          style={{ width: '0%', backgroundColor: skill.color }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.from('.skills-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.skills-description', {
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
    
    gsap.from('.skills-category', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Animate gradient background
    gsap.to('.skills-gradient-bg', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div 
        className="skills-gradient-bg absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
        style={{
          backgroundImage: 'linear-gradient(-45deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
          filter: 'brightness(0.8) contrast(1.2)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 207, 253, 0.3), transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-16">
          {/* <h2 className="skills-title text-3xl md:text-4xl font-bold mb-6">
            My Skills
          </h2> */}
          <p className="skills-description text-text-secondary text-lg max-w-3xl mx-auto">
            I've developed expertise in various technologies throughout my journey as a web developer.
            Here's a glimpse of my technical skills:
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="skills-category backdrop-blur-sm bg-background-secondary/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-primary/20 text-primary">
              Frontend
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="skills-category backdrop-blur-sm bg-background-secondary/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-secondary/20 text-secondary">
              Backend
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="skills-category backdrop-blur-sm bg-background-secondary/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-accent/20 text-accent">
              Other Skills
            </h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;