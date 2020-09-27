<template>
  <div class="main-container">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model="selectedKeys">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view ref="child-ref" />
          <icon type="el-icon-extend-back_to_top" :rotate="90" />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class Container extends Vue {
  msg!: string
  collapsed = false
}
</script>
