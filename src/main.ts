import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import antd from '@/plugins/antd'
import '@/plugins/registerServiceWorker'
import '@/styles/index.scss'
const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(antd)
  .mount('#app')
