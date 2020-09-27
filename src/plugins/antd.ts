import { Button, Checkbox } from 'ant-design-vue'

const antd = {
  // eslint-disable-next-line
  install: function(Vue: any) {
    Vue.use(Button)
    Vue.use(Checkbox)
  }
}

export default antd
