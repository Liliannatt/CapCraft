import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()
  const more = (name: string) => {
    router.push({ name })
  }
  return {
    more
  }
}
