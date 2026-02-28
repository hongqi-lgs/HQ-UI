# 快速上手

## 安装

::: code-group

```bash [pnpm]
pnpm add luna-ui
```

```bash [npm]
npm install luna-ui
```

```bash [yarn]
yarn add luna-ui
```

:::

## 全局注册

在入口文件中全局注册所有组件：

```ts
import { createApp } from 'vue'
import LunaUI from 'luna-ui'
import 'luna-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(LunaUI)
app.mount('#app')
```

## 按需引入

推荐使用按需引入的方式，可以有效减小打包体积：

```vue
<script setup lang="ts">
import { LuButton, LuInput, LuSwitch } from 'luna-ui'
import 'luna-ui/dist/style.css'
</script>

<template>
  <LuButton type="primary">按钮</LuButton>
  <LuInput placeholder="请输入..." />
  <LuSwitch />
</template>
```

## 在浏览器中使用

通过 CDN 直接在 HTML 中使用：

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/luna-ui/dist/style.css">
  <script src="https://unpkg.com/vue@3"></script>
  <script src="https://unpkg.com/luna-ui"></script>
</head>
<body>
  <div id="app">
    <lu-button type="primary">Hello Luna UI</lu-button>
  </div>
  <script>
    const app = Vue.createApp({})
    app.use(LunaUI)
    app.mount('#app')
  </script>
</body>
```


