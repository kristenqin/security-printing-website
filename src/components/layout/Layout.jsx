import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LiquidChromeBackground from './LiquidChromeBackground'

const Layout = ({ children }) => {
  return (
    <>
      <LiquidChromeBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout