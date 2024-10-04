import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
const APP = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  }
})

export default APP
