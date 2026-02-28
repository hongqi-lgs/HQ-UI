<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <lu-button type="primary" variant="solid">Solid</lu-button>
      <lu-button type="primary" variant="outline">Outline</lu-button>
      <lu-button type="primary" variant="ghost">Ghost</lu-button>
      <lu-button type="primary" variant="link">Link</lu-button>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <lu-button type="success" variant="solid">Solid</lu-button>
      <lu-button type="success" variant="outline">Outline</lu-button>
      <lu-button type="success" variant="ghost">Ghost</lu-button>
      <lu-button type="success" variant="link">Link</lu-button>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <lu-button type="danger" variant="solid">Solid</lu-button>
      <lu-button type="danger" variant="outline">Outline</lu-button>
      <lu-button type="danger" variant="ghost">Ghost</lu-button>
      <lu-button type="danger" variant="link">Link</lu-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LuButton } from 'luna-ui'
</script>


