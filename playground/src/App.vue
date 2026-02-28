<template>
  <div class="playground" :data-theme="theme">
    <header class="header">
      <h1>🌙 Luna UI</h1>
      <p class="subtitle">Vue3 Component Library</p>
      <div class="theme-toggle">
        <LuButton variant="ghost" size="sm" @click="toggleTheme">
          {{ theme === 'dark' ? '☀️ Light' : '🌙 Dark' }}
        </LuButton>
      </div>
    </header>

    <main class="content">
      <!-- Button Section -->
      <section class="section">
        <h2>Button 按钮</h2>

        <div class="demo-block">
          <h3>类型 Type</h3>
          <div class="demo-row">
            <LuButton>Default</LuButton>
            <LuButton type="primary">Primary</LuButton>
            <LuButton type="success">Success</LuButton>
            <LuButton type="warning">Warning</LuButton>
            <LuButton type="danger">Danger</LuButton>
            <LuButton type="info">Info</LuButton>
          </div>
        </div>

        <div class="demo-block">
          <h3>变体 Variant</h3>
          <div class="demo-row">
            <LuButton type="primary" variant="solid">Solid</LuButton>
            <LuButton type="primary" variant="outline">Outline</LuButton>
            <LuButton type="primary" variant="ghost">Ghost</LuButton>
            <LuButton type="primary" variant="link">Link</LuButton>
          </div>
        </div>

        <div class="demo-block">
          <h3>尺寸 Size</h3>
          <div class="demo-row" style="align-items: center">
            <LuButton type="primary" size="sm">Small</LuButton>
            <LuButton type="primary" size="md">Medium</LuButton>
            <LuButton type="primary" size="lg">Large</LuButton>
          </div>
        </div>

        <div class="demo-block">
          <h3>状态 State</h3>
          <div class="demo-row">
            <LuButton type="primary" round>Round</LuButton>
            <LuButton type="primary" :loading="true">Loading</LuButton>
            <LuButton type="primary" disabled>Disabled</LuButton>
            <LuButton type="primary" block>Block Button</LuButton>
          </div>
        </div>
      </section>

      <!-- Input Section -->
      <section class="section">
        <h2>Input 输入框</h2>

        <div class="demo-block">
          <h3>基础用法</h3>
          <div class="demo-col">
            <LuInput v-model="inputVal" placeholder="请输入内容..." clearable />
            <p class="demo-hint">值: {{ inputVal || '(空)' }}</p>
          </div>
        </div>

        <div class="demo-block">
          <h3>尺寸 Size</h3>
          <div class="demo-col">
            <LuInput size="sm" placeholder="Small" />
            <LuInput size="md" placeholder="Medium" />
            <LuInput size="lg" placeholder="Large" />
          </div>
        </div>

        <div class="demo-block">
          <h3>状态 Status</h3>
          <div class="demo-col">
            <LuInput placeholder="Default" />
            <LuInput status="error" placeholder="Error" />
            <LuInput status="success" placeholder="Success" />
            <LuInput disabled placeholder="Disabled" />
          </div>
        </div>
      </section>

      <!-- Switch Section -->
      <section class="section">
        <h2>Switch 开关</h2>

        <div class="demo-block">
          <h3>基础用法</h3>
          <div class="demo-row" style="align-items: center">
            <LuSwitch v-model="switchVal">{{ switchVal ? '开启' : '关闭' }}</LuSwitch>
          </div>
        </div>

        <div class="demo-block">
          <h3>尺寸 Size</h3>
          <div class="demo-row" style="align-items: center">
            <LuSwitch size="sm" v-model="switchVal">Small</LuSwitch>
            <LuSwitch size="md" v-model="switchVal">Medium</LuSwitch>
            <LuSwitch size="lg" v-model="switchVal">Large</LuSwitch>
          </div>
        </div>

        <div class="demo-block">
          <h3>状态</h3>
          <div class="demo-row" style="align-items: center">
            <LuSwitch :model-value="true" disabled>Disabled On</LuSwitch>
            <LuSwitch :model-value="false" disabled>Disabled Off</LuSwitch>
            <LuSwitch :model-value="true" loading>Loading</LuSwitch>
          </div>
        </div>
      </section>

      <!-- Theme Section -->
      <section class="section">
        <h2>Theme 主题</h2>
        <div class="demo-block">
          <h3>CSS Variables 主题切换</h3>
          <div class="demo-row">
            <LuButton type="primary" @click="setTheme('light')">☀️ Light</LuButton>
            <LuButton type="primary" @click="setTheme('dark')">🌙 Dark</LuButton>
          </div>
          <div class="color-palette">
            <div class="color-swatch" style="background: var(--lu-color-primary)">Primary</div>
            <div class="color-swatch" style="background: var(--lu-color-success)">Success</div>
            <div class="color-swatch" style="background: var(--lu-color-warning)">Warning</div>
            <div class="color-swatch" style="background: var(--lu-color-danger)">Danger</div>
            <div class="color-swatch" style="background: var(--lu-color-info)">Info</div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Luna UI v0.1.0 · Built with Vue 3 + TypeScript</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { LuButton, LuInput, LuSwitch, useTheme } from 'luna-ui'

const inputVal = ref('')
const switchVal = ref(true)

const { theme, setTheme, toggleTheme } = useTheme()
</script>

<style>
/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--lu-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  background: var(--lu-color-bg);
  color: var(--lu-color-text);
  transition: background 0.3s, color 0.3s;
}

.playground {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 48px 24px 32px;
  position: relative;
  background: var(--lu-color-bg-secondary);
  border-bottom: 1px solid var(--lu-color-border);
}
.header h1 {
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--lu-color-primary), var(--lu-color-info));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.subtitle {
  color: var(--lu-color-text-secondary);
  margin-top: 8px;
  font-size: 16px;
}
.theme-toggle {
  position: absolute;
  top: 16px;
  right: 24px;
}

.content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
  width: 100%;
}

.section {
  margin-bottom: 48px;
}
.section h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--lu-color-primary);
  display: inline-block;
}

.demo-block {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid var(--lu-color-border);
  border-radius: var(--lu-radius-lg);
  background: var(--lu-color-bg);
}
.demo-block h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--lu-color-text-secondary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
}
.demo-hint {
  font-size: 13px;
  color: var(--lu-color-text-secondary);
  margin-top: 4px;
}

.color-palette {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
.color-swatch {
  width: 80px;
  height: 40px;
  border-radius: var(--lu-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.footer {
  text-align: center;
  padding: 24px;
  color: var(--lu-color-text-placeholder);
  font-size: 13px;
  border-top: 1px solid var(--lu-color-border);
}
</style>


