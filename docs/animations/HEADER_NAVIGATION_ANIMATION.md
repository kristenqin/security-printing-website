# Header 导航动效设计规范

## 📋 基本信息
- **动效位置**: Header 导航栏
- **触发条件**: 鼠标悬停 / 页面加载
- **优先级**: P1 (重要实现)
- **复杂度**: 中等
- **可复用性**: 高（可用于导航、按钮、链接、卡片等）
- **技术选择**: GSAP

---

## 🎨 动效1: 老虎机翻转效果

### 用户观察描述
> "悬停时导航项从下往上翻转，白色文字消失同时橙色文字出现，像老虎机那种效果，大概0.3秒，翻转感觉是匀速的。鼠标离开后橙色文字直接变回白色，不需要翻转动画。选中状态有橙色背景，不执行翻转动画。"

### 动效目的
- **功能目的**: 提供即时的悬停反馈，强化交互感
- **用户体验**: 通过翻转动画营造动感和趣味性
- **情感传达**: 科技感、创新感、品牌活力

### 时序控制
```javascript
{
  // 悬停进入
  mouseEnter: {
    总时长: "0.3s",
    效果: "从下往上滚动翻转",
    缓动: "none", // 匀速
  },
  
  // 鼠标离开
  mouseLeave: {
    总时长: "0.2s",
    效果: "颜色直接过渡",
    缓动: "power2.out"
  }
}
```

---

## 🔧 可复用动画Hook设计

### Hook定义

```jsx
// src/hooks/animations/useSlotMachineFlip.js
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * 老虎机翻转动画Hook
 * 文字从下往上滚动翻转，颜色同时变化
 * 
 * @param {RefObject} targetRef - 目标元素引用
 * @param {string|object} config - 预设名称或配置对象
 * @returns {object} 动画控制函数
 * 
 * @example
 * // 使用默认配置
 * const { play, reverse } = useSlotMachineFlip(ref);
 * 
 * // 自定义配置
 * const { play, reverse } = useSlotMachineFlip(ref, {
 *   duration: 0.3,
 *   distance: 30,
 *   toColor: '#FF6B35'
 * });
 */
export const useSlotMachineFlip = (targetRef, config = 'default') => {
  const timelineRef = useRef();
  
  // 预设配置
  const PRESETS = {
    default: {
      duration: 0.3,
      distance: 30,
      direction: 'up',
      ease: 'none',
      fromColor: 'white',
      toColor: '#FF6B35'
    },
    fast: {
      duration: 0.2,
      distance: 20,
      direction: 'up',
      ease: 'power2.out',
      fromColor: 'white',
      toColor: '#FF6B35'
    }
  };
  
  // 合并配置
  const settings = typeof config === 'string'
    ? PRESETS[config]
    : { ...PRESETS.default, ...config };
  
  // 清理函数
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);
  
  // 播放动画（悬停进入）
  const play = () => {
    if (!targetRef.current) return;
    
    // 老虎机效果：文字向上移动 + 颜色变化
    gsap.to(targetRef.current, {
      y: settings.direction === 'up' ? -settings.distance : settings.distance,
      color: settings.toColor,
      duration: settings.duration,
      ease: settings.ease
    });
  };
  
  // 反向恢复（鼠标离开）
  const reverse = () => {
    if (!targetRef.current) return;
    
    // 直接颜色过渡，无翻转
    gsap.to(targetRef.current, {
      y: 0,
      color: settings.fromColor,
      duration: 0.2,
      ease: 'power2.out'
    });
  };
  
  // 销毁动画
  const kill = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };
  
  return {
    play,
    reverse,
    kill
  };
};
```

### 配置参数

```typescript
interface SlotMachineConfig {
  // 基础参数
  duration?: number;        // 动画时长（秒）默认0.3
  distance?: number;        // 移动距离（px）默认30
  direction?: 'up' | 'down'; // 翻转方向，默认'up'
  ease?: string;           // 缓动函数，默认'none'（匀速）
  
  // 颜色参数
  fromColor?: string;      // 初始颜色，默认'white'
  toColor?: string;        // 目标颜色，默认'#FF6B35'
  
  // 预设
  preset?: 'default' | 'fast'; // 使用预设配置
}
```

---

## 💻 使用示例

### 示例1：在Header导航中使用

```jsx
// components/Header/NavItem.jsx
import { useRef } from 'react';
import { useSlotMachineFlip } from '@/hooks/animations';
import './NavItem.css';

const NavItem = ({ children, href, isActive }) => {
  const itemRef = useRef();
  
  // 使用动画Hook
  const { play, reverse } = useSlotMachineFlip(itemRef, {
    duration: 0.3,
    distance: 30,
    toColor: '#FF6B35'
  });
  
  return (
    <a 
      ref={itemRef}
      href={href}
      className={`nav-item ${isActive ? 'active' : ''}`}
      onMouseEnter={isActive ? undefined : play}
      onMouseLeave={isActive ? undefined : reverse}
    >
      {children}
    </a>
  );
};

export default NavItem;
```

```css
/* NavItem.css - 只包含静态样式 */
.nav-item {
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  /* 动画由GSAP控制，不需要transition */
}

.nav-item.active {
  background-color: #FF6B35;
  border-radius: 4px;
}
```

### 示例2：在按钮中复用

```jsx
// components/Button/Button.jsx
import { useRef } from 'react';
import { useSlotMachineFlip } from '@/hooks/animations';

const Button = ({ children, variant = 'primary' }) => {
  const buttonRef = useRef();
  
  // 复用相同的Hook，但配置不同颜色
  const { play, reverse } = useSlotMachineFlip(buttonRef, {
    preset: 'fast',
    toColor: variant === 'primary' ? '#FF6B35' : '#3B82F6'
  });
  
  return (
    <button 
      ref={buttonRef}
      className={`btn btn-${variant}`}
      onMouseEnter={play}
      onMouseLeave={reverse}
    >
      {children}
    </button>
  );
};
```

### 示例3：在卡片标题中使用

```jsx
// components/Card/Card.jsx
import { useRef } from 'react';
import { useSlotMachineFlip, useHoverScale } from '@/hooks/animations';

const Card = ({ title, description }) => {
  const cardRef = useRef();
  const titleRef = useRef();
  
  // 组合多个动画
  const cardScale = useHoverScale(cardRef, { scale: 1.05 });
  const titleFlip = useSlotMachineFlip(titleRef, 'fast');
  
  const handleMouseEnter = () => {
    cardScale.play();
    titleFlip.play();
  };
  
  const handleMouseLeave = () => {
    cardScale.reverse();
    titleFlip.reverse();
  };
  
  return (
    <div 
      ref={cardRef}
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 ref={titleRef}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

---

## 🎨 动效2: Header入场下滑动画

### 用户观察描述
> "整个Header在背景渲染后的一段时间从屏幕外向下滑动进来，有淡入效果，大概0.6秒。"

### 动效目的
- **功能目的**: 建立内容层次，背景先建立情境
- **用户体验**: 避免所有元素同时出现的视觉混乱
- **情感传达**: 精心设计的专业感

### 时序控制
```javascript
{
  延迟: "1s", // 等待背景稳定
  总时长: "0.6s",
  移动: "translateY(-100%) → translateY(0)",
  透明度: "0 → 1",
  缓动: "power3.out"
}
```

---

## 🔧 可复用动画Hook设计

### Hook定义

```jsx
// src/hooks/animations/useSlideIn.js
import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * 滑入动画Hook
 * 元素从指定方向滑入视口
 * 
 * @param {RefObject} targetRef - 目标元素引用
 * @param {object} config - 配置对象
 */
export const useSlideIn = (targetRef, config = {}) => {
  const defaults = {
    direction: 'top',    // 滑入方向: top/bottom/left/right
    distance: '100%',    // 滑入距离
    duration: 0.6,       // 动画时长
    delay: 1,            // 延迟时间
    ease: 'power3.out',  // 缓动函数
    opacity: true        // 是否包含淡入效果
  };
  
  const settings = { ...defaults, ...config };
  
  useEffect(() => {
    if (!targetRef.current) return;
    
    // 根据方向设置初始位置
    const initialProps = {
      opacity: settings.opacity ? 0 : 1
    };
    
    switch (settings.direction) {
      case 'top':
        initialProps.y = `-${settings.distance}`;
        break;
      case 'bottom':
        initialProps.y = settings.distance;
        break;
      case 'left':
        initialProps.x = `-${settings.distance}`;
        break;
      case 'right':
        initialProps.x = settings.distance;
        break;
    }
    
    // 执行滑入动画
    gsap.fromTo(targetRef.current,
      initialProps,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: settings.duration,
        delay: settings.delay,
        ease: settings.ease
      }
    );
  }, []);
};
```

### 使用示例

```jsx
// components/Header/Header.jsx
import { useRef } from 'react';
import { useSlideIn } from '@/hooks/animations';
import NavItem from './NavItem';

const Header = () => {
  const headerRef = useRef();
  
  // Header入场动画
  useSlideIn(headerRef, {
    direction: 'top',
    distance: '100%',
    duration: 0.6,
    delay: 1,
    ease: 'power3.out',
    opacity: true
  });
  
  const navItems = [
    { label: 'Top', href: '#top', active: true },
    { label: 'Company', href: '#company' },
    { label: 'News', href: '#news' },
    { label: 'Business', href: '#business' },
    { label: 'Tech & Design +', href: '#tech' },
    { label: 'Works', href: '#works' },
    { label: 'Careers', href: '#careers', external: true },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <header ref={headerRef} className="header">
      <nav className="nav-container">
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            href={item.href}
            isActive={item.active}
            external={item.external}
          >
            {item.label}
          </NavItem>
        ))}
        
        <div className="nav-lang">
          <span>JP</span>
          <span className="separator">|</span>
          <span>EN</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

```css
/* Header.css */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  opacity: 0; /* 初始隐藏，由GSAP控制 */
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
}

.nav-lang {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
  color: white;
}
```

---

## 🏗️ 架构原则

### 关注点分离
- ✅ `useSlotMachineFlip` Hook不关心DOM结构
- ✅ `useSlideIn` Hook不关心DOM结构
- ✅ 静态样式完全由CSS控制
- ✅ 动画行为完全由GSAP Hook控制
- ✅ Hook可以应用到任何元素

### 可复用场景

**useSlotMachineFlip**:
- ✅ Header导航项悬停效果
- ✅ 按钮悬停效果
- ✅ 链接悬停效果
- ✅ 卡片标题悬停效果
- ✅ 侧边栏菜单项悬停效果

**useSlideIn**:
- ✅ Header入场动画
- ✅ 侧边栏滑入
- ✅ 对话框/Modal滑入
- ✅ 通知/Toast滑入
- ✅ 任何需要滑入效果的元素

---

## ✅ 验收标准（桌面端）

### 功能验收
- [ ] `useSlotMachineFlip` Hook可以独立使用
- [ ] `useSlideIn` Hook可以独立使用
- [ ] 不强制要求特定DOM结构
- [ ] 提供预设 + 自定义配置能力
- [ ] Hook可以在导航、按钮、卡片等多处复用

### 视觉验收
- [ ] 悬停时老虎机翻转流畅 (0.3s 匀速)
- [ ] 鼠标离开后颜色直接过渡回白色
- [ ] 选中项显示橙色背景且不响应悬停
- [ ] Header 延迟1s后从屏幕外下滑进入 (0.6s)
- [ ] Header 入场有淡入效果

### 性能验收
- [ ] 动画流畅度保持 60fps
- [ ] 快速滑动时每个导航项都正常执行动画
- [ ] 无内存泄漏（组件卸载时正确清理）
- [ ] 动画不阻塞主线程

---

## 📝 开发注意事项

### GSAP 依赖
```bash
pnpm add gsap
```

### 文件组织
```
src/
├── hooks/
│   └── animations/
│       ├── useSlotMachineFlip.js  # 老虎机翻转Hook
│       ├── useSlideIn.js          # 滑入动画Hook
│       └── index.js               # 统一导出
│
└── components/
    └── Header/
        ├── Header.jsx             # Header组件
        ├── Header.css             # 静态样式
        ├── NavItem.jsx            # 导航项组件
        └── NavItem.css            # 导航项样式
```

### 代码规范
- Hook只负责动画逻辑，不包含DOM结构
- 静态样式完全由CSS控制
- 动画相关样式由GSAP控制
- 提供清晰的JSDoc注释
- 使用TypeScript类型（如果项目支持）

---

**文档版本**: 2.0（基于关注点分离架构重写）  
**创建时间**: 2024-11-14  
**参考网站**: generosity.co.jp  
**实现阶段**: 桌面端基础实现  
**技术栈**: React + GSAP  
**核心原则**: 关注点分离、可复用性、配置化  
