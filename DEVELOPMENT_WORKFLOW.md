# 安全印刷公司官网 - Section组件开发工作流程

## 📋 确认的开发工作流程

### 🔍 1. 分析设计稿阶段
对每个Section执行：
- 重新分析Figma设计稿中该Section的具体设计
- 提取关键视觉元素：颜色、字体、间距、布局
- **从Figma中直接导出所需图片资源**
- 分解出子组件需求（如按钮、卡片等）

### 💻 2. 组件开发阶段
- 在`src/components/sections/`目录下创建对应组件
- 严格按照设计稿进行像素级还原
- 使用已配置的Tailwind CSS设计tokens
- **同时开发桌面端、平板端、手机端的响应式适配**
- 先开发静态组件，预留动态交互接口

### 🧪 3. 测试验证阶段
- 在App.jsx中集成新组件测试视觉效果
- **使用Chrome DevTools MCP进行自查验证**：
  - 打开浏览器导航到开发服务器
  - 使用`mcp__chrome-devtools__take_screenshot`拍摄当前实现截图
  - 对比Figma设计稿和实际截图，识别差异
  - 检查响应式表现和样式细节
  - 根据对比结果调整代码实现
- 检查与相邻Section的衔接
- **验证三种设备尺寸的响应式表现**
- 确保符合设计规范

### 📝 4. 提交代码阶段
- 每个Section完成后单独提交
- 使用中文commit信息描述开发内容
- 更新todo列表进度

## 🎯 开发顺序（已确认）

按以下顺序开发（由上到下的页面结构）：

1. **HeroSection** - 主英雄区域（包含技术卡片）
2. **NewsSection** - 新闻话题列表
3. **SolutionsSection** - 解决方案图片展示
4. **PartnersSection** - 合作伙伴圆形图标区域
5. **ServicesSection** - 三个服务卡片
6. **StandardSection** - 标准化区域
7. **ContactSection** - 联系我们
8. **最终集成测试** - 完整页面测试和优化

## 📱 响应式设计规范

### 断点设置
- **桌面端**: 1440px+ (主要设计基准)
- **平板端**: 768px - 1439px
- **手机端**: 320px - 767px

### 适配原则
- 使用Tailwind CSS响应式前缀：`sm:` `md:` `lg:` `xl:`
- 保持设计稿视觉层次和比例关系
- 移动端优先的响应式设计策略

## 🖼️ 图片资源处理

### 来源
- 直接从Figma设计稿导出图片资源
- 保存到`src/assets/images/`目录

### 格式要求
- 优先使用WebP格式（带PNG降级）
- 适当压缩以优化加载性能
- 为不同设备提供合适尺寸

## 🎨 已配置的设计系统

### 颜色系统
```css
--color-primary-red: #96310c;    /* 主要棕红色 */
--color-bg-light: #e8e8eb;       /* 浅灰色背景 */
--color-bg-dark: #33323d;        /* 深色背景 */
--color-footer-dark: #1a1a1c;    /* 页脚深色 */
--color-text-gray: #726766;      /* 灰色文字 */
--color-accent-orange: #e86621;  /* 强调橙色 */
--color-silver: #c0c0c0;         /* 银色 */
```

### 字体系统
```css
--font-family-helvetica: Helvetica, Arial, sans-serif;
```

## 🔧 技术栈提醒

### 当前架构
- **前端框架**: React 19.2.0
- **路由**: TanStack Router 1.132.0
- **样式**: Tailwind CSS v4.1.17
- **构建工具**: Vite 7.1.7
- **包管理**: pnpm

### 组件开发规范
- 使用函数式组件
- 采用ES6+语法
- 遵循React Hooks最佳实践
- 组件名使用PascalCase
- 文件名与组件名保持一致

## ✅ 当前完成状态

### 已完成
- [x] TanStack Router项目基础架构
- [x] Tailwind CSS v4配置和设计系统
- [x] 项目文件结构和组件架构
- [x] Layout组件(Header和Footer)
- [x] 基础页面结构

### 待开发
- [ ] HeroSection组件
- [ ] NewsSection组件
- [ ] SolutionsSection组件
- [ ] PartnersSection组件
- [ ] ServicesSection组件
- [ ] StandardSection组件
- [ ] ContactSection组件
- [ ] 完整页面集成测试

## 🚀 下次开发恢复流程

1. **环境准备**
   ```bash
   cd security-printing-website
   pnpm install
   pnpm dev
   ```

2. **检查当前进度**
   - 查看git提交历史: `git log --oneline`
   - 检查todo列表状态
   - 确认当前开发的Section

3. **继续开发**
   - 按照工作流程开发下一个Section
   - 从Figma导出必要的图片资源
   - 严格按照响应式适配要求开发

---

**创建时间**: 2025-11-11  
**项目**: 安全印刷公司官网  
**技术栈**: React + TanStack Router + Tailwind CSS v4