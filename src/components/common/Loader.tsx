import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    })
    .to(textRef.current, {
      letterSpacing: '10px',
      duration: 1.5,
      ease: 'power3.inOut'
    })
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power3.inOut'
    });
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
    >
      <div 
        ref={textRef}
        className="text-4xl font-bold opacity-0"
      >
        <span className="text-primary">PORT</span>
        <span className="text-secondary">FOLIO</span>
      </div>
    </div>
  );
};

export default Loader;