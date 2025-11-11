import React from 'react'
import intaglioTech from '../../assets/images/intaglio-tech.png'
import techCardBg from '../../assets/images/tech-card-bg.svg'
import chevronRight from '../../assets/images/chevron-right.svg'

const HeroSection = () => {
  return (
    <section className="bg-primary-red text-white min-h-screen flex items-end relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-18 pb-12 sm:pb-24 lg:pb-57">
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-66 items-start lg:items-end">
          {/* Mission Text - Left side */}
          <div className="flex-1 lg:max-w-3xl mb-8 lg:mb-0">
            <h1 className="font-helvetica font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight mb-4 lg:mb-4">
              INNOVATIVE SECURITY PRINTING
            </h1>
            <p className="font-helvetica text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-full lg:max-w-2xl">
              Safeguarding national tax governance security with innovative anti-counterfeiting technology, 
              becoming a trusted strategic partner for governments around the world!
            </p>
          </div>
          
          {/* Technology Card - Right side */}
          <div className="relative w-full lg:w-auto lg:shrink-0">
            {/* Card Background */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:w-96 xl:w-114">
              <img 
                src={techCardBg} 
                alt="Technology Card Background" 
                className="w-full h-auto"
              />
              
              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-4 lg:p-5 xl:p-8 flex flex-col">
                {/* Latest Technology Label */}
                <div className="mb-4 lg:mb-5">
                  <p className="font-helvetica text-xs text-black">
                    Lasted Technology
                  </p>
                </div>
                
                {/* Technology Details */}
                <div className="flex gap-4 lg:gap-6 xl:gap-6 items-center mb-auto">
                  {/* Technology Image */}
                  <div className="w-20 sm:w-24 lg:w-32 xl:w-42 h-12 sm:h-16 lg:h-20 xl:h-26 rounded overflow-hidden shrink-0">
                    <img 
                      src={intaglioTech} 
                      alt="INTAGLIO Technology" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Technology Text */}
                  <div className="flex-1">
                    <h3 className="font-helvetica font-bold text-lg sm:text-xl lg:text-2xl xl:text-2xl text-black mb-1">
                      INTAGLIO
                    </h3>
                    <p className="font-helvetica text-sm sm:text-sm lg:text-base xl:text-base text-black leading-tight">
                      3D True Color Dynamic Depth Effect
                    </p>
                  </div>
                </div>
                
                {/* View More Button */}
                <div className="flex items-center justify-end mt-4 lg:mt-6 xl:mt-8">
                  <div className="flex items-center gap-1 text-black">
                    <span className="font-helvetica text-sm lg:text-base">View More</span>
                    <img 
                      src={chevronRight} 
                      alt="Arrow Right" 
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection