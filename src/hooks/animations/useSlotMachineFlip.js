import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PRESETS = {
  default: {
    duration: 0.3,
    ease: 'none'
  },
  fast: {
    duration: 0.2,
    ease: 'power2.out'
  }
};

export const useSlotMachineFlip = (targetRef, config = 'default') => {
  const tweensRef = useRef([]);
  
  const settings = typeof config === 'string'
    ? PRESETS[config]
    : { ...PRESETS.default, ...config };
  
  useEffect(() => {
    return () => {
      tweensRef.current.forEach(tween => tween.kill());
      tweensRef.current = [];
    };
  }, []);
  
  const play = () => {
    const whiteEl = targetRef.white?.current;
    const orangeEl = targetRef.orange?.current;
    
    if (!whiteEl || !orangeEl) return;
    
    tweensRef.current.forEach(tween => tween.kill());
    tweensRef.current = [];
    
    const whiteTween = gsap.to(whiteEl, {
      y: '-100%',
      duration: settings.duration,
      ease: settings.ease,
      overwrite: 'auto'
    });
    
    const orangeTween = gsap.to(orangeEl, {
      y: '-100%',
      duration: settings.duration,
      ease: settings.ease,
      overwrite: 'auto'
    });
    
    tweensRef.current.push(whiteTween, orangeTween);
  };
  
  const reverse = () => {
    const whiteEl = targetRef.white?.current;
    const orangeEl = targetRef.orange?.current;
    
    if (!whiteEl || !orangeEl) return;
    
    tweensRef.current.forEach(tween => tween.kill());
    tweensRef.current = [];
    
    const whiteTween = gsap.to(whiteEl, {
      y: 0,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto'
    });
    
    const orangeTween = gsap.to(orangeEl, {
      y: 0,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto'
    });
    
    tweensRef.current.push(whiteTween, orangeTween);
  };
  
  const kill = () => {
    tweensRef.current.forEach(tween => tween.kill());
    tweensRef.current = [];
  };
  
  return {
    play,
    reverse,
    kill
  };
};
