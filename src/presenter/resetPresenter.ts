import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const toReset = () => {
    router.push({ name: 'reset' })
  }
  const back = () => {
    router.back()
  }
  return {
    toReset,
    back
  }
}
