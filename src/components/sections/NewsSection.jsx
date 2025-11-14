import React from 'react'
import lineDivider from '../../assets/images/line-divider.svg'
import chevronRightWhite from '../../assets/images/chevron-right-white.svg'

const NewsSection = () => {
  // 新闻数据
  const newsItems = [
    {
      date: "2025.03.25",
      title: "About Our Patent Certificate",
      category: "Patent Certificate"
    },
    {
      date: "2025.03.25", 
      title: "Brazil International Entertainment and Gaming Exhibition",
      category: "Exhibition"
    },
    {
      date: "2025.03.25",
      title: "Hologram Security Technology", 
      category: "Lasted Technology"
    },
    {
      date: "2025.03.25",
      title: "QR Code & Digital Security Technology",
      category: "Lasted Technology"
    },
    {
      date: "2025.03.25",
      title: "Microtext Printing Technology",
      category: "Lasted Technology"
    },
    {
      date: "2025.03.25",
      title: "3D True Color Dynamic Depth Effect",
      category: "Lasted Technology"
    }
  ]

  return (
    <section className="text-white">
      <div className="px-4 sm:px-8 lg:px-18 pt-20 pb-45">
        {/* Top Divider Line */}
        <div className="w-full h-px mb-0">
          <img 
            src={lineDivider} 
            alt="Divider Line" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0">
          {/* Left Side - Title and News Button */}
          <div className="flex flex-col gap-8 lg:gap-9 lg:w-69 lg:shrink-0">
            <h2 className="font-helvetica text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-normal min-w-max">
              New Topics
            </h2>
            
            {/* News Button */}
            <div 
              className="inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'rgba(161, 161, 161, 0.2)' }}
            >
              <span className="font-helvetica text-base text-white">News</span>
              <img 
                src={chevronRightWhite} 
                alt="Arrow Right" 
                className="w-4 h-4"
              />
            </div>
          </div>
          
          {/* Right Side - News List */}
          <div className="flex flex-col gap-5 lg:w-229 lg:max-w-229">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start border-b border-text-gray pb-10 last:border-b-0"
              >
                {/* Date */}
                <div className="w-20 sm:w-21 shrink-0">
                  <p className="font-helvetica text-base text-white leading-normal">
                    {item.date}
                  </p>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="font-helvetica text-base text-white leading-normal">
                    {item.title}
                  </h3>
                  <p className="font-helvetica text-xs text-white leading-normal">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection