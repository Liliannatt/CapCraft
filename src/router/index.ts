import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useUser } from '@/model/userModel'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to) => {
  // console.log(to, from)
  // 白名单
  const whiteList = ['/', '/login', '/signup', '/reset', '/404', '/500']
  if (whiteList.includes(to.path)) {
    return true
  }
  // 未登录
  const isSignedIn = localStorage.getItem('isSignedIn')
  if (!isSignedIn) {
    return '/'
  }
  const user = useUser()
  user.setUserInfo(JSON.parse(localStorage.getItem('result') as string))
  return true
})

export default router
