# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 属性定义按钮的颜色类型。

<DemoBlock>
  <BasicButton />

<template #code>

```vue
<template>
  <lu-button>默认按钮</lu-button>
  <lu-button type="primary">主要按钮</lu-button>
  <lu-button type="success">成功按钮</lu-button>
  <lu-button type="warning">警告按钮</lu-button>
  <lu-button type="danger">危险按钮</lu-button>
  <lu-button type="info">信息按钮</lu-button>
</template>
```

</template>
</DemoBlock>

## 按钮变体

使用 `variant` 属性定义按钮的样式变体。

<DemoBlock>
  <VariantButton />

<template #code>

```vue
<template>
  <lu-button type="primary" variant="solid">Solid</lu-button>
  <lu-button type="primary" variant="outline">Outline</lu-button>
  <lu-button type="primary" variant="ghost">Ghost</lu-button>
  <lu-button type="primary" variant="link">Link</lu-button>
</template>
```

</template>
</DemoBlock>

## 按钮尺寸

使用 `size` 属性定义按钮的大小。

<DemoBlock>
  <SizeButton />

<template #code>

```vue
<template>
  <lu-button type="primary" size="sm">小按钮</lu-button>
  <lu-button type="primary" size="md">中按钮</lu-button>
  <lu-button type="primary" size="lg">大按钮</lu-button>
</template>
```

</template>
</DemoBlock>

## 加载 & 禁用 & 其他

<DemoBlock>
  <LoadingButton />

<template #code>

```vue
<template>
  <lu-button type="primary" loading>加载中</lu-button>
  <lu-button type="primary" disabled>禁用</lu-button>
  <lu-button type="primary" round>圆角按钮</lu-button>
  <lu-button type="primary" block>块级按钮</lu-button>
</template>
```

</template>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `type` | 按钮类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
| `variant` | 按钮变体 | `'solid' \| 'outline' \| 'ghost' \| 'link'` | `'solid'` |
| `size` | 按钮尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `nativeType` | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `loading` | 是否加载中 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `round` | 是否圆角 | `boolean` | `false` |
| `circle` | 是否圆形 | `boolean` | `false` |
| `block` | 是否块级 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| `click` | 点击按钮时触发 | `(event: MouseEvent)` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| `default` | 按钮内容 |
| `icon` | 图标内容 |

<script setup>
import BasicButton from '../demos/button/Basic.vue'
import VariantButton from '../demos/button/Variant.vue'
import SizeButton from '../demos/button/Size.vue'
import LoadingButton from '../demos/button/Loading.vue'
</script>


