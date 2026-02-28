<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" class="lu-button__loading">
      <svg class="lu-button__spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="31.4 31.4" />
      </svg>
    </span>
    <span v-if="$slots.icon && !loading" class="lu-button__icon">
      <slot name="icon" />
    </span>
    <span class="lu-button__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  block?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'md',
  variant: 'solid',
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  block: false,
  nativeType: 'button',
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const classes = computed(() => [
  'lu-button',
  `lu-button--${props.type}`,
  `lu-button--${props.size}`,
  `lu-button--${props.variant}`,
  {
    'lu-button--round': props.round,
    'lu-button--circle': props.circle,
    'lu-button--disabled': props.disabled,
    'lu-button--loading': props.loading,
    'lu-button--block': props.block,
  },
])

function handleClick(e: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>


