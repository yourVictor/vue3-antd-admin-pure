import { Layout, Slider, Menu, Card, Form, Input, Button } from 'ant-design-vue'
// import { createFromIconfontCN } from '@ant-design/icons-vue'
import { default as createFromIconfontCN } from '@ant-design/icons-vue/lib/components/IconFont'

const Icon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_825456_9kcinwnh2t.js'
})

const antd = {
  // eslint-disable-next-line
  install: function(Vue: any) {
    Vue.use(Layout)
    Vue.use(Slider)
    Vue.use(Menu)
    Vue.use(Card)
    Vue.use(Form)
    Vue.use(Input)
    Vue.use(Button)
    Vue.component('Icon', Icon)
  }
}

export default antd
