# 🌙 Luna UI

A modern Vue 3 component library built with TypeScript, featuring a powerful theme system and clean design.

[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## ✨ Features

- 🎨 **Theme System** — Light / Dark / Auto mode with CSS Variables, fully customizable
- 🧩 **Vue 3 + TypeScript** — Full type support with composition API
- 📦 **Tree-shakable** — Import only what you need
- 🔨 **Vite Powered** — Fast dev & optimized library build
- 📐 **Monorepo** — Clean pnpm workspace structure

## 📦 Installation

```bash
# npm
npm install luna-ui

# pnpm
pnpm add luna-ui
```

## 🚀 Quick Start

### Global Registration

```ts
import { createApp } from 'vue'
import LunaUI from 'luna-ui'
import 'luna-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(LunaUI)
app.mount('#app')
```

### On-demand Import

```vue
<script setup lang="ts">
import { LuButton, LuInput, LuSwitch } from 'luna-ui'
import 'luna-ui/dist/style.css'
</script>

<template>
  <LuButton type="primary">Click Me</LuButton>
  <LuInput v-model="value" placeholder="Type here..." />
  <LuSwitch v-model="checked" />
</template>
```

## 🧩 Components

### Button

A versatile button component with multiple variants and states.

```vue
<!-- Types -->
<LuButton>Default</LuButton>
<LuButton type="primary">Primary</LuButton>
<LuButton type="success">Success</LuButton>
<LuButton type="warning">Warning</LuButton>
<LuButton type="danger">Danger</LuButton>
<LuButton type="info">Info</LuButton>

<!-- Variants -->
<LuButton type="primary" variant="solid">Solid</LuButton>
<LuButton type="primary" variant="outline">Outline</LuButton>
<LuButton type="primary" variant="ghost">Ghost</LuButton>
<LuButton type="primary" variant="link">Link</LuButton>

<!-- Sizes -->
<LuButton size="sm">Small</LuButton>
<LuButton size="md">Medium</LuButton>
<LuButton size="lg">Large</LuButton>

<!-- States -->
<LuButton loading>Loading</LuButton>
<LuButton disabled>Disabled</LuButton>
<LuButton round>Round</LuButton>
<LuButton block>Full Width</LuButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Button color type |
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'link'` | `'solid'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `round` | `boolean` | `false` | Round corners |
| `block` | `boolean` | `false` | Full width |

### Input

A flexible input component with prefix/suffix slots and clearable support.

```vue
<LuInput v-model="value" placeholder="Enter text..." />
<LuInput v-model="value" clearable />
<LuInput v-model="value" status="error" />
<LuInput v-model="value" size="lg" />

<!-- With slots -->
<LuInput v-model="value">
  <template #prefix>🔍</template>
  <template #suffix>@gmail.com</template>
</LuInput>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Input value (v-model) |
| `type` | `string` | `'text'` | Native input type |
| `placeholder` | `string` | `''` | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `clearable` | `boolean` | `false` | Show clear button |
| `disabled` | `boolean` | `false` | Disable input |
| `status` | `'default' \| 'error' \| 'success'` | `'default'` | Validation status |

### Switch

A toggle switch component with label support.

```vue
<LuSwitch v-model="checked" />
<LuSwitch v-model="checked" label="Enable notifications" />
<LuSwitch v-model="checked" size="lg" />
<LuSwitch v-model="checked" disabled />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Switch state (v-model) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `label` | `string` | `''` | Label text |
| `disabled` | `boolean` | `false` | Disable switch |
| `loading` | `boolean` | `false` | Show loading state |

## 🎨 Theme System

Luna UI uses CSS Variables for theming, making it easy to customize and switch themes at runtime.

### Using the Theme Composable

```vue
<script setup lang="ts">
import { useTheme } from 'luna-ui'

const { theme, setTheme, toggleTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme">
    Current: {{ theme }}
  </button>
  <button @click="setTheme('dark')">Dark Mode</button>
  <button @click="setTheme('light')">Light Mode</button>
  <button @click="setTheme('auto')">System</button>
</template>
```

### Custom Theme Variables

Override CSS variables to create your own theme:

```css
:root {
  /* Brand Colors */
  --lu-color-primary: #6366f1;
  --lu-color-primary-light: #818cf8;
  --lu-color-primary-dark: #4f46e5;

  /* Neutral */
  --lu-color-bg: #ffffff;
  --lu-color-bg-elevated: #f8fafc;
  --lu-color-text: #1e293b;
  --lu-color-border: #e2e8f0;

  /* Radius */
  --lu-radius-sm: 4px;
  --lu-radius-md: 8px;
  --lu-radius-lg: 12px;

  /* Shadows */
  --lu-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --lu-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

See [`packages/luna-ui/src/theme/variables.css`](packages/luna-ui/src/theme/variables.css) for the full list of available variables.

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Setup

```bash
# Clone the repo
git clone git@github.com:hongqi-lgs/HQ-UI.git
cd HQ-UI

# Install dependencies
pnpm install

# Start playground dev server
pnpm dev

# Build the component library
pnpm build
```

### Project Structure

```
HQ-UI/
├── packages/
│   └── luna-ui/               # Component library
│       ├── src/
│       │   ├── components/    # Vue components
│       │   │   ├── button/    # LuButton
│       │   │   ├── input/     # LuInput
│       │   │   └── switch/    # LuSwitch
│       │   ├── theme/         # Theme system & CSS variables
│       │   └── utils/         # Shared utilities
│       ├── vite.config.ts     # Library build config
│       └── package.json
├── playground/                # Demo & development app
│   ├── src/
│   │   └── App.vue           # Component showcase
│   └── package.json
├── pnpm-workspace.yaml
└── package.json
```

## 📋 Roadmap

- [ ] **Form Components** — Select, Checkbox, Radio, DatePicker
- [ ] **Feedback** — Modal, Drawer, Toast, Tooltip, Popover
- [ ] **Data Display** — Table, Tag, Badge, Avatar, Card
- [ ] **Navigation** — Tabs, Menu, Breadcrumb, Pagination
- [ ] **Layout** — Grid, Space, Divider
- [ ] **Documentation Site** — VitePress powered docs
- [ ] **Unit Tests** — Vitest + Vue Test Utils
- [ ] **npm Publish** — Automated CI/CD pipeline

## 📄 License

[MIT](LICENSE)

---

Made with ❤️ by [hongqi-lgs](https://github.com/hongqi-lgs)

