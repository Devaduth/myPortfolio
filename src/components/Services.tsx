import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Globe2, Rocket, Database, File as Mobile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Code2 className="text-primary" size={40} />,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications with cutting-edge technologies.',
    features: [
      'Custom Website Development',
      'Single Page Applications',
      'Progressive Web Apps',
      'Performance Optimization'
    ]
  },
  {
    icon: <Palette className="text-secondary" size={40} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences with beautiful, functional designs.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems'
    ]
  },
  {
    icon: <Mobile className="text-accent" size={40} />,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with native-like performance.',
    features: [
      'React Native Development',
      'iOS & Android Apps',
      'App Store Optimization',
      'Mobile UI Design'
    ]
  },
  {
    icon: <Database className="text-primary" size={40} />,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side solutions for your applications.',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Server Management'
    ]
  },
  {
    icon: <Globe2 className="text-secondary" size={40} />,
    title: 'SEO Optimization',
    description: 'Improving your website\'s visibility and ranking in search engine results.',
    features: [
      'Technical SEO',
      'Content Optimization',
      'Performance Metrics',
      'Analytics Setup'
    ]
  },
  {
    icon: <Rocket className="text-accent" size={40} />,
    title: 'Deployment & Maintenance',
    description: 'Ensuring your applications are deployed securely and maintained efficiently.',
    features: [
      'Cloud Deployment',
      'Continuous Integration',
      'Performance Monitoring',
      'Security Updates'
    ]
  }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="backdrop-blur-sm bg-background-secondary/80 rounded-xl p-6 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
      <p className="text-text-secondary mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.services-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.services-description', {
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
    gsap.to('.services-gradient-bg', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div 
        className="services-gradient-bg absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
        style={{
          backgroundImage: 'linear-gradient(180deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
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
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-6">
            My Services
          </h2>
          <p className="services-description text-text-secondary text-lg max-w-3xl mx-auto">
            I offer a comprehensive range of web development services to help bring your digital ideas to life.
            Each service is tailored to meet your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;