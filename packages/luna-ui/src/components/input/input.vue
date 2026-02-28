<template>
  <div :class="wrapperClasses">
    <span v-if="$slots.prefix" class="lu-input__prefix">
      <slot name="prefix" />
    </span>
    <input
      ref="inputRef"
      :class="inputClasses"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span v-if="clearable && modelValue" class="lu-input__clear" @click="handleClear">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
    <span v-if="$slots.suffix" class="lu-input__suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

export interface InputProps {
  modelValue?: string | number
  type?: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  maxlength?: number
  status?: 'default' | 'error' | 'success'
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  size: 'md',
  disabled: false,
  readonly: false,
  clearable: false,
  status: 'default',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [value: string]
  change: [value: string]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  clear: []
}>()

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)

const wrapperClasses = computed(() => [
  'lu-input',
  `lu-input--${props.size}`,
  `lu-input--${props.status}`,
  {
    'lu-input--focused': focused.value,
    'lu-input--disabled': props.disabled,
    'lu-input--has-prefix': !!inputRef.value,
  },
])

const inputClasses = computed(() => ['lu-input__inner'])

function handleInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
  emit('input', val)
}

function handleChange(e: Event) {
  emit('change', (e.target as HTMLInputElement).value)
}

function handleFocus(e: FocusEvent) {
  focused.value = true
  emit('focus', e)
}

function handleBlur(e: FocusEvent) {
  focused.value = false
  emit('blur', e)
}

function handleClear() {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  ref: inputRef,
})
</script>


