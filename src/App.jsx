import React from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import NewsSection from './components/sections/NewsSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <NewsSection />
      
      {/* Temporary content for other sections */}
      <div className="bg-primary-red px-4 lg:px-18 py-20">
        <div className="text-center text-white">
          <h2 className="text-4xl font-helvetica font-bold mb-8">
            NewsSection 组件开发完成 🎉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ 新闻列表</h3>
              <p>包含6条新闻项目，支持日期、标题、分类</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ 分割线效果</h3>
              <p>从Figma导出SVG分割线，完美还原设计</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">✅ News按钮</h3>
              <p>半透明背景按钮，带白色箭头图标</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg">接下来开发SolutionsSection组件...</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
