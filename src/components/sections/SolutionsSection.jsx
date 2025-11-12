import React from 'react'
import chevronRightWhite from '../../assets/images/chevron-right-white.svg'
import solution1 from '../../assets/images/solution-1.png'
import solution2 from '../../assets/images/solution-2.png'
import solution3 from '../../assets/images/solution-3.png'
import solution4 from '../../assets/images/solution-4.png'
import solution5 from '../../assets/images/solution-5.png'

const SolutionsSection = () => {
  return (
    <section className="bg-primary-red text-white">
      <div className="px-4 sm:px-8 lg:px-18 pt-12 pb-45">
        {/* Content Container */}
        <div className="flex flex-col gap-12">
          {/* Top Section - Title and Solutions Button */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-8 lg:gap-9">
              <h2 className="font-helvetica text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-normal">
                What can we do?
              </h2>
              
              {/* Solutions Button */}
              <div 
                className="inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(161, 161, 161, 0.2)' }}
              >
                <span className="font-helvetica text-base text-white">Solutions</span>
                <img 
                  src={chevronRightWhite} 
                  alt="Arrow Right" 
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
          
          {/* Solutions Gallery */}
          <div className="flex flex-col gap-8">
            {/* Images Container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 items-start justify-start w-full overflow-x-auto">
              {/* Image 1 - Tall */}
              <div className="flex-none w-full lg:w-41 h-82">
                <img 
                  src={solution1} 
                  alt="Security Product 1" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Image 2 - Medium, rotated */}
              <div className="flex-none w-full lg:w-56 h-64 lg:h-80">
                <img 
                  src={solution2} 
                  alt="Security Product 2" 
                  className="w-full h-full object-cover rounded-lg transform lg:rotate-90 origin-center"
                />
              </div>
              
              {/* Image 3 - Large center */}
              <div className="flex-1 w-full lg:w-139 h-80 lg:h-119">
                <img 
                  src={solution3} 
                  alt="Security Product 3" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Image 4 - Medium, rotated */}
              <div className="flex-none w-full lg:w-55 h-64 lg:h-80">
                <img 
                  src={solution4} 
                  alt="Security Product 4" 
                  className="w-full h-full object-cover rounded-lg transform lg:rotate-90 origin-center"
                />
              </div>
              
              {/* Image 5 - Tall */}
              <div className="flex-none w-full lg:w-42 h-82">
                <img 
                  src={solution5} 
                  alt="Security Product 5" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Description Section */}
            <div className="flex flex-col gap-5 px-0 lg:px-110 text-center lg:text-left">
              <h3 className="font-helvetica text-xl sm:text-2xl font-normal leading-normal text-white">
                Security Printing Safeguards National Fiscal Revenue
              </h3>
              <p className="font-helvetica text-xs leading-normal text-white">
                Leveraging our professional printing technology and anti-counterfeiting processes, we have developed a diversified product portfolio. This includes anti-counterfeit tax stamps, securities, confidential documents, anti-counterfeit ID cards, and instant lottery tickets—all featuring high security attributes and integrating multiple anti-counterfeiting technologies. Through advanced printing techniques and digital quality control, we ensure each printed item delivers both functionality and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection