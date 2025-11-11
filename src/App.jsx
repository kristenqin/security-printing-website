import React from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Temporary content for other sections */}
      <div className="bg-primary-red px-4 lg:px-18 py-20">
        <div className="text-center text-white">
          <h2 className="text-4xl font-helvetica font-bold mb-8">
            HeroSection 组件开发完成 🎉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ 像素级还原</h3>
              <p>严格按照Figma设计稿进行一比一还原</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ 响应式适配</h3>
              <p>支持桌面端、平板端、手机端三种设备</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ 图片资源</h3>
              <p>从Figma导出真实图片和SVG资源</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg">接下来开发NewsSection组件...</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
