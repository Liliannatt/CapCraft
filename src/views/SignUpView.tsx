import '@/styles/signupStyles.less'
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import BackIcon from '@/components/Icons/BackIcon.vue'
import GoogleIcon from '@/components/Icons/GoogleIcon.vue'
import SignUpIndex from '@/components/SignUp/SignUpIndex.vue'
import signUpPresenter from '@/presenter/signUpPresenter'
import loginPresenter from '@/presenter/loginPresenter'

export default defineComponent({
  name: 'signUp',
  components: {
    BackIcon,
    GoogleIcon,
    SignUpIndex
  },
  setup() {
    const { toLogin, back } = signUpPresenter()
    const { googleAuth } = loginPresenter()
    return () => (
      <div class="signUp">
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
              Sign up with Google
            </ElButton>
            <div class={'or'}></div>
            <div class={'up'}>
              <SignUpIndex></SignUpIndex>
            </div>
            <div
              class={'tip'}
              onClick={() => {
                toLogin()
              }}
            >
              Already a Member? <span>LOG IN</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
