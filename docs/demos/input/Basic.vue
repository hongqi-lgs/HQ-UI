<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
    <lu-input v-model="value1" placeholder="请输入内容..." />
    <lu-input v-model="value2" placeholder="可清除" clearable />
    <lu-input v-model="value3" type="password" placeholder="密码输入" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LuInput } from 'luna-ui'

const value1 = ref('')
const value2 = ref('可以清除的内容')
const value3 = ref('')
</script>


