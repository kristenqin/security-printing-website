import React, { useRef } from 'react';
import { useSlotMachineFlip } from '../../hooks/animations';

const NavItem = ({ children, href, isActive = false }) => {
  const whiteTextRef = useRef();
  const orangeTextRef = useRef();
  
  const { play, reverse } = useSlotMachineFlip(
    { white: whiteTextRef, orange: orangeTextRef },
    {
      duration: 0.3,
      distance: '100%'
    }
  );
  
  return (
    <a 
      href={href}
      className={`relative inline-block overflow-hidden ${isActive ? 'font-bold' : ''}`}
      onMouseEnter={isActive ? undefined : play}
      onMouseLeave={isActive ? undefined : reverse}
      style={{ height: '1em', lineHeight: '1em' }}
    >
      <span 
        ref={whiteTextRef}
        className="block text-white font-helvetica text-base whitespace-nowrap"
        style={{ lineHeight: '1em' }}
      >
        {children}
      </span>
      <span 
        ref={orangeTextRef}
        className="block font-helvetica text-base whitespace-nowrap absolute left-0"
        style={{ color: '#FF6B35', top: '1em', lineHeight: '1em' }}
      >
        {children}
      </span>
    </a>
  );
};

export default NavItem;
