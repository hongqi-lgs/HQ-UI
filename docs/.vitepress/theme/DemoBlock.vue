<template>
  <div class="demo-block">
    <div class="demo-block__preview">
      <slot />
    </div>
    <div class="demo-block__actions">
      <button class="demo-block__toggle" @click="showCode = !showCode">
        {{ showCode ? '隐藏代码' : '查看代码' }}
        <svg
          :class="{ 'rotated': showCode }"
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
    <Transition name="slide">
      <div v-show="showCode" class="demo-block__code">
        <slot name="code" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: '',
  description: ''
})

const showCode = ref(false)
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-block__preview {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-block__actions {
  border-top: 1px solid var(--vp-c-divider);
  padding: 8px 16px;
  display: flex;
  justify-content: center;
}

.demo-block__toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border: none;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.demo-block__toggle:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.demo-block__toggle svg {
  transition: transform 0.3s;
}

.demo-block__toggle svg.rotated {
  transform: rotate(180deg);
}

.demo-block__code {
  border-top: 1px solid var(--vp-c-divider);
}

.demo-block__code :deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>


