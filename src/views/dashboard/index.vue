<template>
  <div class="dashboard-wrapper">Dashboard</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  components: {},
  setup(c, context) {
    console.log(c, context)
  }
})
</script>
