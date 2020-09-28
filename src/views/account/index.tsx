import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'Login',
  setup(props, context) {
    // const { ctx } = getCurrentInstance()
    console.log(props, context, getCurrentInstance())
    return () => <div>666</div>
  }
})
