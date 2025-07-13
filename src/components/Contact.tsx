import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Animation for success message
      gsap.fromTo(
        '.success-message',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  useGSAP(() => {
    gsap.from('.contact-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.contact-description', {
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
    
    gsap.from('.contact-info-item', {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    gsap.from('.form-control', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Animate gradient background
    gsap.to('.contact-gradient-bg', {
      backgroundPosition: '200% 200%',
      repeat: -1,
      duration: 15,
      ease: 'none'
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div 
        className="contact-gradient-bg absolute inset-0 bg-[length:200%_200%] animate-gradient-slow"
        style={{
          backgroundImage: 'linear-gradient(225deg, #121212, #1a1a1a, #222222, #1a1a1a, #121212)',
          filter: 'brightness(0.8) contrast(1.2)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(121, 40, 202, 0.3), transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="contact-title text-3xl text-white md:text-4xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="contact-description text-text-secondary text-lg max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            Feel free to reach out using the form below or through my contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="contact-info">
            <div className="backdrop-blur-sm bg-background-secondary/80 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="contact-info-item flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-1">Email</h4>
                    <a href="mailto:kmdevaduth@gmail.com" className="text-text-secondary hover:text-primary transition-colors duration-300">
                      kmdevaduth@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-info-item flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg text-secondary font-medium mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-text-secondary hover:text-secondary transition-colors duration-300">
                      +1 (91) 9074646886
                    </a>
                  </div>
                </div>
                
                <div className="contact-info-item flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg text-accent font-medium mb-1">Location</h4>
                    <p className="text-text-secondary">
                      Vaikom, Kottayam, Kerala
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg text-white font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {['github', 'x', 'discord', 'dribbble'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-background/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                      aria-label={`Follow on ${platform}`}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${platform}/ffffff`}
                        alt={platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="backdrop-blur-sm bg-background-secondary/80 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Send Message</h3>
              
              {submitted ? (
                <div className="success-message bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6">
                  <p className="font-medium">Your message has been sent successfully!</p>
                  <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <div className="space-y-6">
                <div className="form-control">
                  <label htmlFor="name" className="block text-text-default mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-background-tertiary rounded-lg px-4 py-3 text-text-default focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="email" className="block text-text-default mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-background-tertiary rounded-lg px-4 py-3 text-text-default focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="subject" className="block text-text-default mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-background-tertiary rounded-lg px-4 py-3 text-text-default focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="message" className="block text-text-default mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-background-tertiary rounded-lg px-4 py-3 text-text-default focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary-hover text-white font-medium rounded-lg py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;