import { useRouter } from 'vue-router'
import { useUser } from '@/model/userModel'

export default () => {
  const router = useRouter()
  const user = useUser()

  const more = (name: string) => {
    router.push({ name })
  }
  return {
    more,
    user
  }
}
