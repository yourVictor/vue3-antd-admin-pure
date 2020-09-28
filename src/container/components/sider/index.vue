<template>
  <a-layout-sider :collapsed="collapsed" :width="200" :collapsedWidth="60" theme="light">
    sider
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sider',
  components: {},
  data() {
    return {
      collapsed: true,
      selectedKeys: []
    }
  }
})
</script>
