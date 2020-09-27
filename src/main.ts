import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import antd from './plugins/antd'
import router from './router'
import store from './store'
const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(antd)
  .mount('#app')
