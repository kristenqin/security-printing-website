import React from 'react'
import chevronRightWhite from '../../assets/images/chevron-right-white.svg'
import AnimatedButton from '../common/AnimatedButton'

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
          <AnimatedButton
            icon={chevronRightWhite}
            textColor="white"
            style={{ backgroundColor: 'rgba(161, 161, 161, 0.2)' }}
          >
            Company
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}

export default StandardSection