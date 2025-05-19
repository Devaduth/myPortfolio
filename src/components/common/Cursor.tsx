import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Cursor: React.FC = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;
    
    // Initial setup
    gsap.set(cursorInnerRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorOuterRef.current, { xPercent: -50, yPercent: -50 });
    
    // Variables for mouse position
    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    let outerX = 0;
    let outerY = 0;
    
    // Speed and lag factors
    const innerFactor = 0.2;
    const outerFactor = 0.1;
    
    // Animation loop for smooth cursor movement
    gsap.ticker.add(() => {
      // Calculate position with easing
      innerX += (mouseX - innerX) * innerFactor;
      innerY += (mouseY - innerY) * innerFactor;
      outerX += (mouseX - outerX) * outerFactor;
      outerY += (mouseY - outerY) * outerFactor;
      
      // Apply transforms
      gsap.set(cursorInnerRef.current, { x: innerX, y: innerY });
      gsap.set(cursorOuterRef.current, { x: outerX, y: outerY });
    });
    
    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Hover effects for links and buttons
    const onMouseHover = () => {
      setIsActive(true);
    };
    
    const onMouseLeave = () => {
      setIsActive(false);
    };
    
    // Add element-specific effects
    const elements = document.querySelectorAll('a, button, input, textarea, .hover-effect');
    
    elements.forEach(el => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    
    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);
  
  // Hide cursor on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  if (isMobile) return null;
  
  return (
    <>
      <div 
        ref={cursorOuterRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 transition-transform duration-300 ${
          isActive ? 'scale-150 border-primary' : 'border-white'
        }`}
        style={{ mixBlendMode: 'difference' }}
      ></div>
      <div 
        ref={cursorInnerRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 transition-transform duration-300 ${
          isActive ? 'scale-0' : 'scale-100'
        }`}
        style={{ mixBlendMode: 'difference' }}
      ></div>
    </>
  );
};

export default Cursor;