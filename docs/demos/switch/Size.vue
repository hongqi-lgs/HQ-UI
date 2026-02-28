<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <lu-switch v-model="checked" size="sm" label="小" />
    <lu-switch v-model="checked" size="md" label="中" />
    <lu-switch v-model="checked" size="lg" label="大" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LuSwitch } from 'luna-ui'

const checked = ref(true)
</script>


