import React, { useRef } from 'react';
import { useSlotMachineFlip } from '../../hooks/animations';

const AnimatedButton = ({ 
  children, 
  icon, 
  className = '', 
  textColor = 'white',
  onClick,
  ...props 
}) => {
  const textWhiteRef = useRef();
  const textOrangeRef = useRef();
  
  const { play, reverse } = useSlotMachineFlip(
    { white: textWhiteRef, orange: textOrangeRef },
    { duration: 0.3 }
  );
  
  return (
    <div 
      className={`inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 cursor-pointer ${className}`}
      onMouseEnter={play}
      onMouseLeave={reverse}
      onClick={onClick}
      {...props}
    >
      <div className="relative inline-block overflow-hidden" style={{ height: '1em', lineHeight: '1em' }}>
        <span 
          ref={textWhiteRef}
          className={`block font-helvetica text-base text-${textColor} whitespace-nowrap`}
          style={{ lineHeight: '1em' }}
        >
          {children}
        </span>
        <span 
          ref={textOrangeRef}
          className={`block font-helvetica text-base text-${textColor} whitespace-nowrap absolute left-0`}
          style={{ top: '1em', lineHeight: '1em' }}
        >
          {children}
        </span>
      </div>
      {icon && (
        <img 
          src={icon} 
          alt="Arrow" 
          className="w-4 h-4"
        />
      )}
    </div>
  );
};

export default AnimatedButton;
