<template>
  <div class="dashboard-wrapper">Dashboard</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class Dashboard extends Vue {
  msg!: string
}
</script>
