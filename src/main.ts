import { createApp } from 'vue'
import 'animate.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import antd from '@/plugins/antd'
import common from '@/plugins/common'
import '@/plugins/registerServiceWorker'
import '@/styles/index.scss'
const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(antd)
  .use(common)
  .mount('#app')
