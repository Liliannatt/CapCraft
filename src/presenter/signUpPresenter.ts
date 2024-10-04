import { useRouter } from 'vue-router'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '@/firebase/init'
// import { useUser } from '@/model/userModel'
// import { ElMessage } from 'element-plus'

export default () => {
  const router = useRouter()
  const toLogin = () => {
    router.push({ name: 'login' })
  }
  const back = () => {
    router.back()
  }

  return {
    toLogin,
    back
  }
}
