import { Layout, Slider, Menu, Button, Checkbox } from 'ant-design-vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_825456_9kcinwnh2t.js'
})

const antd = {
  // eslint-disable-next-line
  install: function(Vue: any) {
    Vue.use(Layout)
    Vue.use(Slider)
    Vue.use(Menu)
    Vue.use(Button)
    Vue.use(Checkbox)
    Vue.component('Icon', Icon)
  }
}

export default antd
