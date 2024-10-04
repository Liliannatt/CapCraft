import '@/styles/loginStyles.less'
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import BackIcon from '@/components/Icons/BackIcon.vue'
import GoogleIcon from '@/components/Icons/GoogleIcon.vue'
import LoginIndex from '@/components/Login/LoginIndex.vue'
import loginPresenter from '@/presenter/loginPresenter'

export default defineComponent({
  name: 'logIn',
  components: {
    BackIcon,
    GoogleIcon,
    LoginIndex
  },
  setup() {
    const { toReset, back, googleAuth, signIn } = loginPresenter()
    return () => (
      <div class="logIn">
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
          <div class={'name'}>Get Started Now</div>
          <div class={'form'}>
            <ElButton
              class="google"
              round
              onClick={() => {
                googleAuth()
              }}
            >
              <GoogleIcon style={{ marginRight: '8px' }} />
              Login with Google
            </ElButton>
            <div class={'or'}></div>
            <div class={'up'}>
              <LoginIndex signIn={signIn}></LoginIndex>
            </div>
            <div
              class={'tip'}
              onClick={() => {
                toReset()
              }}
            >
              Forgot Password? <span>Reset</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
