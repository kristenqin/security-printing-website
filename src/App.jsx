import React from 'react'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <div className="bg-primary-red text-white">
        {/* Hero Section */}
        <section className="px-18 py-24 flex gap-16 items-end min-h-screen">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-6xl font-helvetica font-bold mb-4">
              INNOVATIVE SECURITY PRINTING
            </h1>
            <p className="text-xl font-helvetica max-w-2xl">
              Safeguarding national tax governance security with innovative anti-counterfeiting technology, 
              becoming a trusted strategic partner for governments around the world!
            </p>
          </div>
          
          {/* Technology Card */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 w-96">
              <p className="text-xs text-black mb-5">Lasted Technology</p>
              <div className="flex gap-6 items-center">
                <div className="w-42 h-26 bg-gray-300 rounded"></div>
                <div>
                  <h3 className="text-2xl font-helvetica font-bold text-black mb-1">
                    INTAGLIO
                  </h3>
                  <p className="text-base text-black">
                    3D True Color Dynamic Depth Effect
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-8 text-black">
                <span className="text-sm mr-2">View More</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Temporary content for other sections */}
        <div className="px-18 py-20">
          <div className="text-center text-white">
            <h2 className="text-4xl font-helvetica font-bold mb-8">
              项目基础架构已搭建完成 🎉
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">✅ TanStack Router</h3>
                <p>现代化的React路由解决方案，支持类型安全</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">✅ Tailwind CSS v4</h3>
                <p>最新版本的工具优先CSS框架，零配置启动</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">✅ 组件化架构</h3>
                <p>模块化的组件结构，便于维护和扩展</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg">接下来将开发具体的页面Section组件...</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
