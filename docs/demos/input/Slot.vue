<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
    <lu-input v-model="value1" placeholder="搜索...">
      <template #prefix>🔍</template>
    </lu-input>
    <lu-input v-model="value2" placeholder="请输入邮箱">
      <template #suffix>@gmail.com</template>
    </lu-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LuInput } from 'luna-ui'

const value1 = ref('')
const value2 = ref('')
</script>


