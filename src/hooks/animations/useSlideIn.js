import { useEffect } from 'react';
import gsap from 'gsap';

export const useSlideIn = (targetRef, config = {}) => {
  const defaults = {
    direction: 'top',
    distance: '100%',
    duration: 0.6,
    delay: 1,
    ease: 'power3.out',
    opacity: true
  };
  
  const settings = { ...defaults, ...config };
  
  useEffect(() => {
    if (!targetRef.current) return;
    
    const initialProps = {
      opacity: settings.opacity ? 0 : 1
    };
    
    switch (settings.direction) {
      case 'top':
        initialProps.y = `-${settings.distance}`;
        break;
      case 'bottom':
        initialProps.y = settings.distance;
        break;
      case 'left':
        initialProps.x = `-${settings.distance}`;
        break;
      case 'right':
        initialProps.x = settings.distance;
        break;
    }
    
    gsap.fromTo(targetRef.current,
      initialProps,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: settings.duration,
        delay: settings.delay,
        ease: settings.ease
      }
    );
  }, []);
};
