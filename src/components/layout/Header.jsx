import React from 'react'

const Header = () => {
  return (
    <header className="bg-primary-red w-full">
      <div className="flex items-center justify-between px-10 py-9">
        {/* Logo */}
        <div className="text-white font-helvetica font-bold text-xl">
          logo
        </div>
        
        {/* Navigation */}
        <nav className="bg-white bg-opacity-20 rounded px-6 py-6 flex items-center gap-8">
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            Top
          </a>
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            Solutions
          </a>
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            News
          </a>
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            Products
          </a>
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            Tech & Design +
          </a>
          <a href="#" className="text-white font-helvetica text-base hover:opacity-80">
            Business
          </a>
          <a href="#" className="text-white font-helvetica text-base font-bold hover:opacity-80">
            Contact
          </a>
          
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
  )
}

export default Header