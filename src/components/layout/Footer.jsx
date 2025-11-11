import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-footer-dark text-white">
      <div className="px-18 py-14">
        <div className="flex justify-between items-start mb-6">
          {/* Left side - Logo and navigation */}
          <div className="flex gap-28">
            <div className="text-white font-helvetica text-xs">
              logooooooooooooooooooo
            </div>
            
            <div className="flex gap-14">
              {/* Contents Section */}
              <div className="w-69">
                <div className="border-t-2 border-silver py-2 mb-3">
                  <h3 className="text-silver font-helvetica text-xs">Contents</h3>
                </div>
                <div className="flex gap-9">
                  <div className="w-33">
                    <ul className="text-white font-helvetica text-lg space-y-5">
                      <li>Top</li>
                      <li>Solutions</li>
                      <li>News</li>
                      <li>Products</li>
                      <li>Tech & Design</li>
                    </ul>
                  </div>
                  <div className="w-19">
                    <ul className="text-white font-helvetica text-lg space-y-5">
                      <li>Business</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Legal and Social Section */}
              <div className="w-33">
                <div className="mb-7">
                  <div className="border-t-2 border-silver py-2 mb-2">
                    <h3 className="text-silver font-helvetica text-xs">Legal</h3>
                  </div>
                  <ul className="text-white font-helvetica text-xs space-y-4">
                    <li className="drop-shadow-sm">Top</li>
                    <li className="drop-shadow-sm">Company</li>
                    <li className="drop-shadow-sm">News</li>
                    <li className="drop-shadow-sm">Products</li>
                  </ul>
                </div>
                
                <div>
                  <div className="border-t-2 border-silver py-2 mb-2">
                    <h3 className="text-silver font-helvetica text-xs">Social Media</h3>
                  </div>
                  <ul className="text-white font-helvetica text-xs space-y-4">
                    <li>Top</li>
                    <li>Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Language switch */}
          <div className="flex items-center gap-2">
            <span className="text-white font-helvetica text-base">(</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-helvetica text-base">CN</span>
              <div className="w-px h-4 bg-white transform rotate-90"></div>
              <span className="text-white font-helvetica text-base border-b border-white">EN</span>
            </div>
            <span className="text-white font-helvetica text-base">)</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-right">
          <p className="text-silver font-helvetica text-xs">
            DDDDD版权信息
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer