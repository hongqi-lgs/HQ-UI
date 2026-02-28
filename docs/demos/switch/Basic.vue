<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <lu-switch v-model="checked1" />
    <lu-switch v-model="checked2" label="开启通知" />
    <lu-switch v-model="checked3" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LuSwitch } from 'luna-ui'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
</script>


