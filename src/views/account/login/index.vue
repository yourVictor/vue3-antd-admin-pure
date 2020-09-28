<template>
  <div class="login-wrapper" :style="`background: url(${pageBgImg}) no-repeat;background-size: cover;`">
    <a-card class="animate__animated animate__zoomInRight login-form" :bodyStyle="bodyStyle" :bordered="false" hoverable>
      <div class="form-title">{{ appName }}</div>
      <a-form layout="horizontal" :model="form" :rules="formRules">
        <a-form-item name="username">
          <a-input v-model:value="form.username" placeholder="用户名" size="large" :maxlength="20" allow-clear>
            <template v-slot:prefix><icon type="el-icon-extend-username"/></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input type="password" v-model:value="form.password" placeholder="密码" size="large" :maxlength="20" allow-clear>
            <template v-slot:prefix><icon type="el-icon-extend-password"/></template>
            <template v-slot:suffix><icon type="el-icon-extend-eye_close"/></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" size="large" block>登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import config from '@/utils/config'
import './index.scss'

export default defineComponent({
  name: 'Login',
  components: {},
  data() {
    return {
      pageBgImg: `${process.env.BASE_URL}img/bg/page_login.jpg`,
      appName: config.appName,
      bodyStyle: {
        background: 'transparent'
      },
      form: {
        username: '',
        password: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  setup(props) {
    const ctx = getCurrentInstance()
    console.log(props, ctx)
  },
  created() {
    // console.log(this)
  }
})
</script>
