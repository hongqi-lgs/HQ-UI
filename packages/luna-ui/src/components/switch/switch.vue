<template>
  <button
    :class="classes"
    role="switch"
    :aria-checked="modelValue"
    :disabled="disabled"
    @click="toggle"
  >
    <span class="lu-switch__track">
      <span class="lu-switch__thumb">
        <span v-if="loading" class="lu-switch__loading">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" stroke-dasharray="31.4 31.4" />
          </svg>
        </span>
      </span>
    </span>
    <span v-if="$slots.default" class="lu-switch__label">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface SwitchProps {
  modelValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  activeColor?: string
  inactiveColor?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  size: 'md',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const classes = computed(() => [
  'lu-switch',
  `lu-switch--${props.size}`,
  {
    'lu-switch--checked': props.modelValue,
    'lu-switch--disabled': props.disabled || props.loading,
  },
])

function toggle() {
  if (props.disabled || props.loading) return
  const newVal = !props.modelValue
  emit('update:modelValue', newVal)
  emit('change', newVal)
}
</script>


