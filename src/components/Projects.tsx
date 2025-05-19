import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Soumya Shyam Makeup',
    description: 'Developed a professional website for Soumya Shyam Makeup Studio, a renowned bridal makeup artist with clientele across India. Delivered a high-quality website tailored to the client’s branding and aesthetic.',
    technologies: ['HTML5', 'SCSS', 'JavaScript', 'Bootstrap5' , 'Tailwind CSS'],
    imageUrl: '../../public/projects/soumyashyam.png',
    projectUrl: 'https://www.soumyashyammakeup.com/',
    githubUrl: 'https://www.soumyashyammakeup.com/',
  },
  {
    title: 'Luktana',
    description: 'An interactive dashboard for social media analytics with real-time data visualization and reporting tools.',
    technologies: ['HTML5', 'SCSS', 'JavaScript', 'Bootstrap5' , 'Tailwind CSS'],
    imageUrl: '../../public/projects/luktana.png',
    projectUrl: 'https://www.luktana.com/',
    githubUrl: 'https://www.luktana.com/',
  },
  {
    title: 'Nutriboxx',
    description: 'Developed a clean, responsive static website for Nutriboxx, a health and nutrition brand. The site highlights the brand’s offerings, philosophy, and product details with an engaging layout. Focused on performance optimization and mobile responsiveness.',
    technologies: ['HTML5', 'SCSS', 'JavaScript','Bootstrap5' , 'Tailwind CSS'],
    imageUrl: '../../public/projects/nutriboxx.png',
    projectUrl: 'https://www.nutriboxx.co.in/',
    githubUrl: 'https://www.nutriboxx.co.in/',
  },
  {
    title: 'Task Management App',
    description: 'A comprehensive task management application with drag-and-drop organization, filters, and collaborative features.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/6804586/pexels-photo-6804586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.fromTo(
      cardRef.current,
      { 
        y: 50,
        opacity: 0 
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1 * index 
      }
    );
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className="group backdrop-blur-sm bg-background-secondary/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-background p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="View project"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={project.githubUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-background p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="View code on GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-text-default">{project.title}</h3>
        <p className="text-text-secondary mb-4">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="text-xs bg-background/50 px-2 py-1 rounded-full text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.from('.projects-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.projects-description', {
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

    // Animate gradient background
    gsap.to('.projects-gradient-bg', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div 
        className="projects-gradient-bg absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
        style={{
          backgroundImage: 'linear-gradient(135deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
          filter: 'brightness(0.8) contrast(1.2)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.3), transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="projects-title text-white text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="projects-description text-text-secondary text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block backdrop-blur-sm bg-background-secondary/80 hover:bg-background-tertiary text-text-default border border-primary px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;