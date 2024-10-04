import '@/styles/resetStyles.less'
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
import BackIcon from '@/components/Icons/BackIcon.vue'
import GoogleIcon from '@/components/Icons/GoogleIcon.vue'
import ResetIndex from '@/components/Reset/ResetIndex.vue'
import resetPresenter from '@/presenter/resetPresenter'

export default defineComponent({
  name: 'ResetView',
  components: {
    BackIcon,
    GoogleIcon,
    ResetIndex
  },
  setup() {
    const { back } = resetPresenter()
    return () => (
      <div class="reset">
        <div class={'controls'}>
          <div
            onClick={() => {
              back()
            }}
          >
            <BackIcon
              size={'32'}
              style={{
                margin: '70px 70px'
              }}
            />
          </div>
          <div class={'name'}>Reset Password</div>
          <div class={'form'}>
            {/* <ElButton class="google" round>
              <GoogleIcon style={{ marginRight: '8px' }} />
              Login with Google
            </ElButton> */}
            <div class={'up'}>
              <ResetIndex></ResetIndex>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
