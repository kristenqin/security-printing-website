import React from 'react'
import externalLinkWhite from '../../assets/images/external-link-white.svg'

const ContactSection = () => {
  return (
    <section className="bg-primary-red text-white relative">
      <div className="px-4 sm:px-8 lg:px-18 py-32 min-h-screen flex flex-col items-center justify-center">
        {/* Content Container */}
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          {/* Main Title */}
          <h2 className="font-helvetica text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal leading-normal text-white">
            Contact us
          </h2>
          
          {/* Inquiries Button */}
          <div 
            className="inline-flex items-center justify-between px-5 py-3 rounded w-87 h-14 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ backgroundColor: 'rgba(241, 241, 243, 0.2)' }}
          >
            <span className="font-helvetica text-lg sm:text-xl lg:text-2xl text-white">Inquiries</span>
            <img 
              src={externalLinkWhite} 
              alt="External Link" 
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection