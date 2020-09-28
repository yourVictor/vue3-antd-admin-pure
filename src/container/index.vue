<template>
  <a-layout class="main-container">
    <sider></sider>
    <a-layout>
      <header-bar class="header"></header-bar>
      <a-layout-content>
        <router-view ref="child-ref" />
      </a-layout-content>
      <footer-bar></footer-bar>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import sider from './components/sider/index.vue'
import headerBar from './components/header/index.vue'
import footerBar from './components/footer/index.vue'
import './index.scss'

export default defineComponent({
  name: 'Container',
  components: {
    sider,
    headerBar,
    footerBar
  },
  data() {
    return {
      collapsed: true,
      selectedKeys: []
    }
  }
})
</script>
