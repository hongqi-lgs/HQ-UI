<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
    <lu-input placeholder="默认状态" />
    <lu-input placeholder="错误状态" status="error" />
    <lu-input placeholder="成功状态" status="success" />
    <lu-input placeholder="禁用状态" disabled />
  </div>
</template>

<script setup lang="ts">
import { LuInput } from 'luna-ui'
</script>


