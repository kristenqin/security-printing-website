import React from 'react'
import chevronRightBlack from '../../assets/images/chevron-right-black.svg'
import arrowUpRightWhite from '../../assets/images/arrow-up-right-white.svg'
import service1 from '../../assets/images/service-1.png'
import service2 from '../../assets/images/service-2.png'
import service3 from '../../assets/images/service-3.png'

const ServicesSection = () => {
  const services = [
    {
      image: service1,
      title: "Anti-counterfeiting Technology",
      subtitle: "Selection",
      description: "Your Role"
    },
    {
      image: service2,
      title: "Digital Tax Receipt Management System",
      subtitle: "Traceability", 
      description: "Full Lifecycle"
    },
    {
      image: service3,
      title: "Anti-counterfeiting Design",
      subtitle: "Aesthetics",
      description: "Cultural Integration"
    }
  ]

  return (
    <section className="bg-bg-light text-black">
      <div className="px-4 sm:px-8 lg:px-20 py-24">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
          {/* Left Side - Title and Tech & Design Button */}
          <div className="flex flex-col gap-8 lg:gap-9 lg:w-79 lg:shrink-0">
            <h2 className="font-helvetica text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-normal">
              The services we offer
            </h2>
            
            {/* Tech & Design Button */}
            <div className="inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 bg-white cursor-pointer hover:opacity-80 transition-opacity">
              <span className="font-helvetica text-base text-black">Tech & Design</span>
              <img 
                src={chevronRightBlack} 
                alt="Arrow Right" 
                className="w-4 h-4"
              />
            </div>
          </div>
          
          {/* Right Side - Services Cards */}
          <div className="flex flex-col gap-6 lg:w-210 lg:max-w-210">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative h-65 rounded-lg overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-9 text-white">
                  {/* Top Section - Title and Arrow */}
                  <div className="flex justify-between items-start">
                    <h3 className="font-helvetica text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-normal max-w-82">
                      {service.title}
                    </h3>
                    <img 
                      src={arrowUpRightWhite} 
                      alt="Arrow Up Right" 
                      className="w-7 h-7 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Bottom Section - Subtitle and Description */}
                  <div className="text-right">
                    <h4 className="font-helvetica text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-normal">
                      {service.subtitle}
                    </h4>
                    <p className="font-helvetica text-base leading-normal mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection