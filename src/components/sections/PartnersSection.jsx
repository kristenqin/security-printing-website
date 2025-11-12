import React from 'react'
import chevronRightBlack from '../../assets/images/chevron-right-black.svg'

const PartnersSection = () => {
  const businessPrinciples = [
    {
      title: "Manufactured & supplied",
      color: "text-accent-orange",
      size: "large"
    },
    {
      title: "Local factory",
      color: "text-black",
      size: "medium"
    },
    {
      title: "Technical Support", 
      color: "text-black",
      size: "medium"
    },
    {
      title: "Customization",
      color: "text-black", 
      size: "medium"
    }
  ]

  return (
    <section className="bg-bg-light text-black">
      <div className="px-4 sm:px-8 lg:px-18 py-24">
        {/* Content Container */}
        <div className="flex flex-col gap-29">
          {/* Top Section - Title, Button and Description */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-40">
            {/* Left Side - Title and Business Button */}
            <div className="flex flex-col gap-8 lg:gap-9 lg:w-83 lg:shrink-0">
              <h2 className="font-helvetica text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-normal">
                Best partners
              </h2>
              
              {/* Business Button */}
              <div className="inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 bg-white cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-helvetica text-base text-black">Business</span>
                <img 
                  src={chevronRightBlack} 
                  alt="Arrow Right" 
                  className="w-4 h-4"
                />
              </div>
            </div>
            
            {/* Right Side - Description */}
            <div className="lg:w-189 lg:max-w-189">
              <p className="font-helvetica text-base sm:text-lg lg:text-xl leading-normal text-black">
                Our company adheres to two core business principles: First, we prioritize national interests, with advanced anti-counterfeiting technology serving as the primary prerequisite for safeguarding the security, economic sovereignty, and long-term developmental interests of partner nations. Second, we uphold the philosophy of mutual benefit and win-win cooperation, establishing stable partnerships with governments worldwide to drive synchronized progress for all parties involved.
              </p>
            </div>
          </div>
          
          {/* Bottom Section - Business Circles and Benefits */}
          <div className="flex flex-col gap-8">
            {/* Business Circles */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 lg:-space-x-3 overflow-x-auto">
              {businessPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className={`
                    flex items-center justify-center border border-black rounded-full shrink-0
                    ${principle.size === 'large' ? 'w-64 h-64 lg:w-65 lg:h-65' : 'w-52 h-52 lg:w-52 lg:h-52'}
                    px-6 py-6
                  `}
                >
                  <p className={`
                    font-helvetica text-lg sm:text-xl lg:text-2xl leading-normal text-center max-w-38
                    ${principle.color}
                  `}>
                    {principle.title}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Benefits Bar */}
            <div className="flex justify-center">
              <div className="bg-gray-300 rounded px-6 py-4 max-w-4xl">
                <p className="font-helvetica text-sm leading-normal text-black text-center">
                  High efficiency/Strategic reserves/Government centralized procurement/Stable supply/Low risk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection