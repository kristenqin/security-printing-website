import React from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import NewsSection from './components/sections/NewsSection'
import SolutionsSection from './components/sections/SolutionsSection'
import PartnersSection from './components/sections/PartnersSection'
import ServicesSection from './components/sections/ServicesSection'
import StandardSection from './components/sections/StandardSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <NewsSection />
      <SolutionsSection />
      <PartnersSection />
      <ServicesSection />
      <StandardSection />
      <ContactSection />
    </Layout>
  )
}

export default App
