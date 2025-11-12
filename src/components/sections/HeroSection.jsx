import React from 'react'
import intaglioTech from '../../assets/images/intaglio-tech.png'
import techCardBg from '../../assets/images/tech-card-bg.svg'
import chevronRight from '../../assets/images/chevron-right.svg'

const HeroSection = () => {
  return (
    <section className="bg-primary-red text-white">
      {/* Main Content Area - matches data-layer-id="163:6139" */}
      <div className="h-220 flex flex-row gap-16 lg:gap-66 justify-start items-end px-4 sm:px-8 lg:px-18 pb-57">
        {/* Mission Text - Left side - width: 787px */}
        <div className="w-full lg:w-197 flex flex-col gap-4 lg:gap-4 justify-start items-start">
          <h1 className="w-full h-14 font-helvetica font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight text-white">
            INNOVATIVE SECURITY PRINTING
          </h1>
          <p className="w-172 h-17 font-helvetica text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-white">
            Safeguarding national tax governance security with innovative anti-counterfeiting technology, 
            becoming a trusted strategic partner for governments around the world!
          </p>
        </div>
        
        {/* Technology Card - Right side - 455px × 179px */}
        <div className="w-114 h-45 flex-shrink-0 relative">
          {/* SVG Background */}
          <img 
            src={techCardBg} 
            alt="Technology Card Background" 
            className="absolute left-0 top-0 w-114 h-45"
          />
          
          {/* View More Button - positioned absolutely */}
          <div className="absolute left-85 top-34 flex flex-row gap-0 justify-start items-end">
            <span className="w-19 h-4 font-helvetica text-sm text-black">View More</span>
            <div className="w-4 h-4 flex-shrink-0 overflow-hidden">
              <img 
                src={chevronRight} 
                alt="Arrow Right" 
                className="absolute left-1 top-1 w-1 h-2"
              />
            </div>
          </div>
          
          {/* Technology Content */}
          <div className="absolute left-3 top-5 w-83 flex flex-col gap-5 justify-start items-start">
            <p className="w-83 h-3 font-helvetica text-xs text-black">
              Lasted Technology
            </p>
            <div className="w-full flex flex-row gap-6 justify-start items-center">
              {/* Technology Image */}
              <div className="w-42 h-26 flex-shrink-0">
                <img 
                  src={intaglioTech} 
                  alt="INTAGLIO Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Technology Text */}
              <div className="w-57 flex flex-col gap-1 justify-start items-start">
                <h3 className="w-57 h-7 font-helvetica font-bold text-2xl text-black">
                  INTAGLIO
                </h3>
                <p className="w-57 h-9 font-helvetica text-base text-black leading-tight">
                  3D True Color Dynamic Depth Effect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection