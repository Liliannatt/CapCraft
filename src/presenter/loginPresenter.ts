import { useRouter } from 'vue-router'
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/init'
import { useUser } from '@/model/userModel'
import { ElMessage } from 'element-plus'

export default () => {
  const router = useRouter()
  const user = useUser()
  const provider = new GoogleAuthProvider()

  const toReset = () => {
    router.push({ name: 'reset' })
  }
  const back = () => {
    router.back()
  }

  const googleAuth = async () => {
    const result = await signInWithPopup(auth, provider).catch((error) => {
      console.log('invalid!', error)
      ElMessage.error('Invalid Google Auth!')
    })
    if (!result) return
    console.log('success!', result)
    user.setUserInfo(result)
    localStorage.setItem('isSignedIn', 'true')
    localStorage.setItem('result', JSON.stringify(result))
    router.push({ name: 'home' })
  }

  const signIn = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log('invalid email or password!', error)
      ElMessage.error('Invalid email or password!')
    })
    if (!result) return
    console.log('success!', result)
    user.setUserInfo(result)
    localStorage.setItem('isSignedIn', 'true')
    localStorage.setItem('result', JSON.stringify(result))
    router.push({ name: 'home' })
  }

  return {
    toReset,
    back,
    googleAuth,
    signIn
  }
}
