# 主题定制

Luna UI 使用 CSS Variables 实现主题系统，支持运行时动态切换主题。

## 主题模式

内置三种主题模式：

| 模式 | 说明 |
|------|------|
| `light` | 亮色主题（默认） |
| `dark` | 暗色主题 |
| `auto` | 跟随系统设置 |

## 使用 useTheme

```vue
<script setup lang="ts">
import { useTheme } from 'luna-ui'

const { theme, setTheme, toggleTheme } = useTheme()
</script>

<template>
  <p>当前主题：{{ theme }}</p>

  <!-- 切换到指定主题 -->
  <button @click="setTheme('light')">亮色</button>
  <button @click="setTheme('dark')">暗色</button>
  <button @click="setTheme('auto')">跟随系统</button>

  <!-- 循环切换 -->
  <button @click="toggleTheme">切换主题</button>
</template>
```

`useTheme` 会自动：
- 在 `<html>` 标签上设置 `data-theme` 属性
- 将用户选择持久化到 `localStorage`
- 监听系统主题变化（auto 模式下）

## 自定义主题变量

覆盖 CSS Variables 即可自定义主题：

```css
:root {
  /* 品牌色 */
  --lu-color-primary: #6366f1;
  --lu-color-primary-light: #818cf8;
  --lu-color-primary-dark: #4f46e5;

  /* 背景色 */
  --lu-color-bg: #ffffff;
  --lu-color-bg-elevated: #f8fafc;

  /* 文字色 */
  --lu-color-text: #1e293b;
  --lu-color-text-secondary: #64748b;

  /* 边框 */
  --lu-color-border: #e2e8f0;

  /* 圆角 */
  --lu-radius-sm: 4px;
  --lu-radius-md: 8px;
  --lu-radius-lg: 12px;

  /* 阴影 */
  --lu-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --lu-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

## 完整变量列表

查看 [variables.css](https://github.com/hongqi-lgs/HQ-UI/blob/main/packages/luna-ui/src/theme/variables.css) 获取所有可用的 CSS 变量。

## 暗色模式变量

暗色模式下会自动切换一组变量：

```css
[data-theme="dark"] {
  --lu-color-bg: #0f172a;
  --lu-color-bg-elevated: #1e293b;
  --lu-color-text: #f1f5f9;
  --lu-color-text-secondary: #94a3b8;
  --lu-color-border: #334155;
  /* ... */
}
```


