import React, { useRef } from 'react';
import { useSlideIn } from '../../hooks/animations';
import NavItem from './NavItem';

const Header = () => {
  const headerRef = useRef();
  
  useSlideIn(headerRef, {
    direction: 'top',
    distance: '100%',
    duration: 0.6,
    delay: 1,
    ease: 'power3.out',
    opacity: true
  });
  
  const navItems = [
    { label: 'Top', href: '#', active: true },
    { label: 'Solutions', href: '#' },
    { label: 'News', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Tech & Design +', href: '#' },
    { label: 'Business', href: '#' },
    { label: 'Contact', href: '#' }
  ];
  
  return (
    <header ref={headerRef} className="w-full relative z-20" style={{ opacity: 0 }}>
      <div className="flex items-center justify-between px-10 py-9">
        {/* Logo */}
        <div className="text-white font-helvetica font-bold text-xl">
          logo
        </div>
        
        {/* Navigation */}
        <nav 
          className="rounded px-6 py-6 flex items-center gap-8 h-[70px]"
          style={{ backgroundColor: 'rgba(192, 192, 192, 0.2)' }}
        >
          {navItems.map((item, index) => (
            <NavItem key={index} href={item.href} isActive={item.active}>
              {item.label}
            </NavItem>
          ))}
          
          {/* Language Switch */}
          <div className="flex items-center gap-2">
            <span className="text-white font-helvetica text-base">(</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-helvetica text-base">CN</span>
              <div className="w-px h-4 bg-white transform rotate-90"></div>
              <span className="text-white font-helvetica text-base border-b border-white">EN</span>
            </div>
            <span className="text-white font-helvetica text-base">)</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;