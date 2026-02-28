# Input 输入框

通过鼠标或键盘输入内容。

## 基础用法

<DemoBlock>
  <BasicInput />

<template #code>

```vue
<template>
  <lu-input v-model="value" placeholder="请输入内容..." />
  <lu-input v-model="value2" placeholder="可清除" clearable />
  <lu-input type="password" placeholder="密码输入" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const value2 = ref('可以清除的内容')
</script>
```

</template>
</DemoBlock>

## 状态

使用 `status` 属性设置输入框的校验状态。

<DemoBlock>
  <StatusInput />

<template #code>

```vue
<template>
  <lu-input placeholder="默认状态" />
  <lu-input placeholder="错误状态" status="error" />
  <lu-input placeholder="成功状态" status="success" />
  <lu-input placeholder="禁用状态" disabled />
</template>
```

</template>
</DemoBlock>

## 前后缀插槽

使用 `prefix` 和 `suffix` 插槽添加前后缀内容。

<DemoBlock>
  <SlotInput />

<template #code>

```vue
<template>
  <lu-input v-model="value" placeholder="搜索...">
    <template #prefix>🔍</template>
  </lu-input>
  <lu-input v-model="value2" placeholder="请输入邮箱">
    <template #suffix>@gmail.com</template>
  </lu-input>
</template>
```

</template>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 绑定值 | `string` | `''` |
| `type` | 原生 input 类型 | `string` | `'text'` |
| `placeholder` | 占位文本 | `string` | `''` |
| `size` | 输入框尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `clearable` | 是否可清除 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `status` | 校验状态 | `'default' \| 'error' \| 'success'` | `'default'` |
| `maxlength` | 最大输入长度 | `number` | — |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| `update:modelValue` | 值变化时触发 | `(value: string)` |
| `input` | 输入时触发 | `(value: string)` |
| `change` | 值改变时触发 | `(value: string)` |
| `focus` | 获取焦点时触发 | `(event: FocusEvent)` |
| `blur` | 失去焦点时触发 | `(event: FocusEvent)` |
| `clear` | 点击清除按钮时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| `prefix` | 输入框前缀内容 |
| `suffix` | 输入框后缀内容 |

### Exposes

| 名称 | 说明 | 类型 |
|------|------|------|
| `focus` | 聚焦输入框 | `() => void` |
| `blur` | 失焦输入框 | `() => void` |
| `ref` | input 元素引用 | `Ref<HTMLInputElement>` |

<script setup>
import BasicInput from '../demos/input/Basic.vue'
import StatusInput from '../demos/input/Status.vue'
import SlotInput from '../demos/input/Slot.vue'
</script>


