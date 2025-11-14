# 动画开发架构规范

## 🎯 核心原则

### 关注点分离（Separation of Concerns）

**核心思想：动画只负责动画，不涉及DOM结构和静态样式**

```
❌ 错误做法：动画与DOM耦合
✅ 正确做法：动画逻辑独立，可复用到任何元素
```

### 设计哲学

1. **动画是行为，不是结构** - 动画不应该决定DOM如何组织
2. **样式是外观，不是动画** - 静态样式用CSS，动画状态用GSAP
3. **配置化优于硬编码** - 通过参数控制行为，而非修改代码
4. **组合优于继承** - 小的动画Hook可以组合成复杂效果

---

## 🏗️ 架构设计

### 1. 动画抽象形式：React Hooks

**为什么选择Hooks？**
- 符合React生态习惯
- 自动处理生命周期和清理
- 易于组合和复用
- 类型提示友好

**基本模式**：
```jsx
const useAnimationName = (targetRef, config) => {
  // 返回动画控制函数
  return {
    play: () => {},
    pause: () => {},
    reverse: () => {},
    kill: () => {}
  };
};
```

### 2. DOM要求：不关心实现

**原则：动画Hook不应该强制DOM结构**

```jsx
// ✅ 好的设计 - 不关心DOM如何实现颜色变化
const useSlotMachineFlip = (targetRef, config) => {
  const play = () => {
    gsap.to(targetRef.current, {
      y: -30,
      color: config.toColor,
      duration: config.duration
    });
  };
  
  return { play };
};

// 组件可以自由选择实现方式
const NavItem = () => {
  const ref = useRef();
  const { play } = useSlotMachineFlip(ref, { toColor: 'orange' });
  
  // 方式1：用CSS color属性
  return <a ref={ref} onMouseEnter={play}>Text</a>;
  
  // 方式2：用data-attribute + CSS
  return <a ref={ref} data-state="default">Text</a>;
  
  // 方式3：用className切换
  return <a ref={ref} className="nav-item">Text</a>;
};
```

### 3. 样式处理：混合方式

**分工明确**：
- **CSS负责**：静态样式、默认状态、布局
- **GSAP负责**：动画过程中的样式变化、transform、opacity

```css
/* CSS: 静态样式和布局 */
.nav-item {
  color: white;
  padding: 12px 20px;
  /* 其他静态样式 */
}

.nav-item.active {
  background-color: #FF6B35;
  /* 选中状态的静态样式 */
}
```

```jsx
// GSAP: 动画行为
const useSlotMachineFlip = (targetRef, config) => {
  const play = () => {
    gsap.to(targetRef.current, {
      y: -30,           // transform动画
      color: '#FF6B35', // 颜色动画
      duration: 0.3     // 动画时长
    });
  };
  
  return { play };
};
```

### 4. 组织方式：按类型分类

**目录结构**：
```
src/
├── hooks/
│   └── animations/
│       ├── useSlotMachineFlip.js   // 老虎机翻转
│       ├── useSlideIn.js           // 滑入动画
│       ├── useFadeIn.js            // 淡入动画
│       ├── useStaggerIn.js         // 错位入场
│       ├── useHoverScale.js        // 悬停缩放
│       └── index.js                // 统一导出
│
├── utils/
│   └── animations/
│       ├── presets.js              // 预设配置
│       ├── easings.js              // 缓动函数
│       └── constants.js            // 动画常量
│
└── components/
    └── sections/
        └── Header/
            ├── Header.jsx          // 只关注业务逻辑
            └── Header.css          // 只关注静态样式
```

**为什么按类型分类？**
- 更通用，不绑定特定场景
- `useSlotMachineFlip` 可以用在导航、按钮、卡片等任何地方
- 易于发现和复用

### 5. 配置方式：预设 + 自定义配置

**预设配置**：
```jsx
// utils/animations/presets.js
export const ANIMATION_PRESETS = {
  slotMachine: {
    default: {
      duration: 0.3,
      ease: 'none',
      distance: 30,
      direction: 'up'
    },
    fast: {
      duration: 0.2,
      ease: 'power2.out',
      distance: 20,
      direction: 'up'
    },
    slow: {
      duration: 0.5,
      ease: 'power1.inOut',
      distance: 40,
      direction: 'up'
    }
  }
};
```

**使用方式**：
```jsx
// 方式1：使用预设
const { play } = useSlotMachineFlip(ref, 'default');

// 方式2：使用预设 + 部分覆盖
const { play } = useSlotMachineFlip(ref, { 
  preset: 'fast',
  toColor: 'orange' 
});

// 方式3：完全自定义
const { play } = useSlotMachineFlip(ref, {
  duration: 0.35,
  ease: 'linear',
  distance: 25,
  fromColor: 'white',
  toColor: '#FF6B35'
});
```

---

## 📝 Hook 开发规范

### Hook 命名规范

```
use + 动画类型 + 动作
```

**示例**：
- `useSlotMachineFlip` - 老虎机翻转
- `useSlideIn` - 滑入
- `useFadeIn` - 淡入
- `useStaggerIn` - 错位入场
- `useHoverScale` - 悬停缩放

### Hook 参数规范

**标准签名**：
```typescript
const useAnimationName = (
  targetRef: RefObject,           // 必需：目标元素引用
  config?: string | AnimationConfig  // 可选：预设名称或配置对象
) => AnimationControls
```

**配置对象结构**：
```typescript
interface AnimationConfig {
  // 基础参数
  duration?: number;        // 动画时长（秒）
  delay?: number;          // 延迟时间（秒）
  ease?: string;           // 缓动函数
  
  // 预设
  preset?: string;         // 使用预设配置
  
  // 动画特定参数
  [key: string]: any;      // 各动画特有的参数
}
```

**返回值结构**：
```typescript
interface AnimationControls {
  play: () => void;        // 播放动画
  pause: () => void;       // 暂停动画
  reverse: () => void;     // 反向播放
  restart: () => void;     // 重新开始
  kill: () => void;        // 销毁动画
  timeline?: gsap.Timeline; // 可选：暴露timeline供高级控制
}
```

### Hook 实现模板

```jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ANIMATION_PRESETS } from '@/utils/animations/presets';

/**
 * 老虎机翻转动画Hook
 * @param {RefObject} targetRef - 目标元素引用
 * @param {string|object} config - 预设名称或配置对象
 */
export const useSlotMachineFlip = (targetRef, config = 'default') => {
  const timelineRef = useRef();
  
  // 解析配置
  const settings = typeof config === 'string'
    ? ANIMATION_PRESETS.slotMachine[config]
    : { ...ANIMATION_PRESETS.slotMachine.default, ...config };
  
  // 清理函数
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);
  
  // 播放动画
  const play = () => {
    if (!targetRef.current) return;
    
    if (timelineRef.current) {
      timelineRef.current.restart();
    } else {
      const tl = gsap.timeline();
      
      tl.to(targetRef.current, {
        y: settings.direction === 'up' ? -settings.distance : settings.distance,
        color: settings.toColor,
        duration: settings.duration,
        ease: settings.ease
      });
      
      timelineRef.current = tl;
    }
  };
  
  // 反向播放
  const reverse = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse();
    } else {
      // 简单的反向逻辑
      gsap.to(targetRef.current, {
        y: 0,
        color: settings.fromColor,
        duration: settings.duration * 0.6,
        ease: 'power2.out'
      });
    }
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
    kill,
    timeline: timelineRef.current
  };
};
```

---

## 🎨 使用示例

### 示例1：Header导航项

```jsx
// Header/NavItem.jsx
import { useRef } from 'react';
import { useSlotMachineFlip } from '@/hooks/animations';
import './NavItem.css';

const NavItem = ({ children, href, isActive }) => {
  const itemRef = useRef();
  
  // 使用动画Hook - 只关注动画行为
  const { play, reverse } = useSlotMachineFlip(itemRef, {
    duration: 0.3,
    distance: 30,
    fromColor: 'white',
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
```

```css
/* NavItem.css - 只关注静态样式 */
.nav-item {
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  display: inline-block;
  transition: none; /* 动画由GSAP控制 */
}

.nav-item.active {
  background-color: #FF6B35;
  border-radius: 4px;
}
```

### 示例2：按钮复用相同动画

```jsx
// Button.jsx
import { useRef } from 'react';
import { useSlotMachineFlip } from '@/hooks/animations';

const Button = ({ children, variant = 'primary' }) => {
  const buttonRef = useRef();
  
  // 复用相同的动画Hook，但配置不同
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

### 示例3：组合多个动画

```jsx
// Card.jsx
import { useRef } from 'react';
import { useSlotMachineFlip, useHoverScale, useFadeIn } from '@/hooks/animations';

const Card = ({ title, description }) => {
  const cardRef = useRef();
  const titleRef = useRef();
  
  // 组合多个动画
  const scale = useHoverScale(cardRef, { scale: 1.05 });
  const titleFlip = useSlotMachineFlip(titleRef, 'fast');
  
  // 入场动画
  useFadeIn(cardRef, { delay: 0.2 });
  
  return (
    <div 
      ref={cardRef}
      className="card"
      onMouseEnter={() => {
        scale.play();
        titleFlip.play();
      }}
      onMouseLeave={() => {
        scale.reverse();
        titleFlip.reverse();
      }}
    >
      <h3 ref={titleRef}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

---

## 📊 动画分类体系

### 1. 入场动画（Entry Animations）
- `useFadeIn` - 淡入
- `useSlideIn` - 滑入
- `useStaggerIn` - 错位入场
- `useScaleIn` - 缩放入场

### 2. 交互动画（Interactive Animations）
- `useHoverScale` - 悬停缩放
- `useHoverRotate` - 悬停旋转
- `useSlotMachineFlip` - 老虎机翻转
- `useRipple` - 涟漪效果

### 3. 过渡动画（Transition Animations）
- `useFadeTransition` - 淡入淡出过渡
- `useSlideTransition` - 滑动过渡
- `useCrossFade` - 交叉淡化

### 4. 滚动动画（Scroll Animations）
- `useScrollReveal` - 滚动揭示
- `useParallax` - 视差滚动
- `useScrollProgress` - 滚动进度

---

## ✅ 开发检查清单

### 创建新动画Hook时

- [ ] 动画逻辑与DOM结构完全分离
- [ ] 不强制要求特定的DOM结构或class
- [ ] 提供预设配置 + 自定义配置能力
- [ ] 正确处理ref.current为null的情况
- [ ] 在useEffect中清理GSAP timeline
- [ ] 返回标准的控制函数（play, pause, reverse, kill）
- [ ] 添加JSDoc注释说明用法
- [ ] 提供使用示例

### 使用动画Hook时

- [ ] 静态样式写在CSS中
- [ ] 只在需要动画的元素上使用Hook
- [ ] 正确处理条件渲染（如isActive时不执行动画）
- [ ] 考虑性能，避免在列表中过度使用复杂动画

---

## 🎯 最佳实践

### 1. 保持动画简单

```jsx
// ✅ 好 - 简单直接
const { play } = useSlotMachineFlip(ref);

// ❌ 避免 - 过度复杂
const { play } = useSlotMachineFlip(ref, {
  duration: 0.3,
  ease: 'power2.out',
  distance: 30,
  fromColor: 'white',
  toColor: 'orange',
  onStart: () => {},
  onComplete: () => {},
  stagger: 0.1,
  // ... 太多配置
});
```

### 2. 使用预设

```jsx
// ✅ 好 - 使用预设保持一致性
const { play } = useSlotMachineFlip(ref, 'fast');

// ❌ 避免 - 到处写不同的配置
const { play } = useSlotMachineFlip(ref, { duration: 0.32 });
```

### 3. 合理组合

```jsx
// ✅ 好 - 多个小动画组合
const scale = useHoverScale(ref, 'subtle');
const fade = useFadeIn(ref);

// ❌ 避免 - 创建一个巨大的万能动画Hook
const everything = useMegaAnimation(ref); // 不推荐
```

### 4. 性能考虑

```jsx
// ✅ 好 - 条件执行
const { play } = useSlotMachineFlip(ref);
if (!isActive) play();

// ❌ 避免 - 列表中每项都创建动画实例
{items.map(item => {
  const anim = useComplexAnimation(ref); // 性能问题
})}
```

---

## 📚 参考资源

- [GSAP官方文档](https://greensock.com/docs/)
- [React Hooks规范](https://react.dev/reference/react)
- [动画设计原则](https://material.io/design/motion)

---

**文档版本**: 1.0  
**最后更新**: 2024-11-14  
**核心原则**: 关注点分离、可复用性、配置化  
