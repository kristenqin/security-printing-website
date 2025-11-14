import React from 'react'
import intaglioTech from '../../assets/images/intaglio-tech.png'
import techCardBg from '../../assets/images/tech-card-bg.svg'
import chevronRight from '../../assets/images/chevron-right.svg'

const HeroSection = () => {
  return (
    <section className="text-white">
      {/* Main Content Area - matches data-layer-id="163:6139" */}
      <div className="h-220 flex flex-row gap-66 justify-start items-end px-18 pb-57">
        {/* Mission Text - Left side - width: 787px */}
        <div className="w-197 flex flex-col gap-4 justify-start items-start">
          <h1 className="w-197 h-14 font-helvetica font-bold text-5xl leading-tight text-white">
            INNOVATIVE SECURITY PRINTING
          </h1>
          <p className="w-172 h-17 font-helvetica text-xl leading-relaxed text-white">
            Safeguarding national tax governance security with innovative anti-counterfeiting technology, 
            becoming a trusted strategic partner for governments around the world!
          </p>
        </div>
        
        {/* Technology Card - Right side - 455px × 179px */}
        <div className="w-114 h-45 flex-shrink-0 relative">
          {/* SVG Background - z-index:1 */}
          <img 
            src={techCardBg} 
            alt="Technology Card Background" 
            className="absolute left-0 top-0 w-114 h-45 z-10"
          />
          
          {/* View More Button - z-index:2, left:341px;top:138px */}
          <div className="absolute left-85 top-34 flex flex-row gap-0.5 justify-start items-center z-20">
            <span className="font-helvetica text-base text-black">View More</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <img 
                src={chevronRight} 
                alt="Arrow Right" 
                className="w-1 h-2"
              />
            </div>
          </div>
          
          {/* Technology Content - z-index:3, left:13px;top:20px;width:333px */}
          <div className="absolute left-3 top-5 w-83 flex flex-col gap-5 justify-start items-start z-30">
            <p className="w-83 h-3 font-helvetica text-xs text-black">
              Lasted Technology
            </p>
            {/* Technology details - gap:26px */}
            <div className="w-83 flex flex-row gap-7 justify-start items-start">
              {/* Technology Image - 168px × 102px, using background-image style */}
              <div 
                className="w-42 h-26 flex-shrink-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${intaglioTech})` }}
              />
              
              {/* Technology Text - 228px */}
              <div className="w-57 flex flex-col gap-1 justify-start items-start">
                <h3 className="w-57 h-7 font-helvetica font-normal text-2xl text-black">
                  INTAGLIO
                </h3>
                <p className="w-57 h-9 font-helvetica font-normal text-base text-black leading-tight">
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