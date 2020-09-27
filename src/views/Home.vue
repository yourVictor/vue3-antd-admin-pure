<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button type="primary" ghost>
      Primary
    </a-button>
    <a-checkbox v-model="checked" @change="onChange">
      Checkbox
    </a-checkbox>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  checked = true
  onChange(val: boolean) {
    this.checked = val
  }
}
</script>
