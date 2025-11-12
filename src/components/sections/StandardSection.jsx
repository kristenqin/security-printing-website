import React from 'react'
import chevronRightWhite from '../../assets/images/chevron-right-white.svg'

const StandardSection = () => {
  return (
    <section className="bg-bg-dark text-white">
      <div className="px-4 sm:px-8 lg:px-18 pb-18 flex items-end justify-start min-h-64">
        {/* Content Container */}
        <div className="flex flex-col gap-8 lg:gap-9">
          <h2 className="font-helvetica text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-normal">
            Standardization
          </h2>
          
          {/* Company Button */}
          <div 
            className="inline-flex items-center justify-between px-5 py-4 rounded-full w-45 h-11 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ backgroundColor: 'rgba(161, 161, 161, 0.2)' }}
          >
            <span className="font-helvetica text-base text-white">Company</span>
            <img 
              src={chevronRightWhite} 
              alt="Arrow Right" 
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StandardSection