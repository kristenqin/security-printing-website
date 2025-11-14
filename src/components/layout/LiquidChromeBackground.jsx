import { useState, useEffect, useRef, useCallback } from 'react';
import LiquidChrome from '../animations/LiquidChrome';

const LiquidChromeBackground = () => {
  const [backgroundState, setBackgroundState] = useState({
    opacity: 1,
    isVisible: true,
    shouldRender: true
  });
  
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const servicesSection = document.querySelector('#services');
    if (!servicesSection) return;
    
    servicesRef.current = servicesSection;
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(servicesSection);
    
    return () => observer.disconnect();
  }, []);
  
  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      const opacity = Math.max(0, 1 - entry.intersectionRatio);
      setBackgroundState(prev => ({
        ...prev,
        opacity,
        shouldRender: opacity > 0.01
      }));
    });
  }, []);
  
  return (
    <>
      {backgroundState.shouldRender && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            opacity: backgroundState.opacity,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <LiquidChrome
            baseColor={[0.3, 0.1, 0]}
            speed={0.3}
            amplitude={0.3}
            frequencyX={2.2}
            frequencyY={1.6}
            interactive={true}
          />
        </div>
      )}
    </>
  );
};

export default LiquidChromeBackground;
