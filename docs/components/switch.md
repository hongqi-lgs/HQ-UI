# Switch 开关

表示两种相互对立的状态间的切换。

## 基础用法

<DemoBlock>
  <BasicSwitch />

<template #code>

```vue
<template>
  <lu-switch v-model="checked" />
  <lu-switch v-model="checked2" label="开启通知" />
  <lu-switch :model-value="true" disabled />
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
const checked2 = ref(false)
</script>
```

</template>
</DemoBlock>

## 尺寸

使用 `size` 属性定义开关的大小。

<DemoBlock>
  <SizeSwitch />

<template #code>

```vue
<template>
  <lu-switch v-model="checked" size="sm" label="小" />
  <lu-switch v-model="checked" size="md" label="中" />
  <lu-switch v-model="checked" size="lg" label="大" />
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```

</template>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 绑定值 | `boolean` | `false` |
| `size` | 开关尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `label` | 标签文本 | `string` | `''` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否加载中 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| `update:modelValue` | 值变化时触发 | `(value: boolean)` |
| `change` | 值改变时触发 | `(value: boolean)` |

<script setup>
import BasicSwitch from '../demos/switch/Basic.vue'
import SizeSwitch from '../demos/switch/Size.vue'
</script>


