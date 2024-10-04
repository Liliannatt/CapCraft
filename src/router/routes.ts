import { type RouteRecordRaw } from 'vue-router'
import LayoutIndex from '@/components/Layout/LayoutIndex.vue'
import HomeView from '@/views/HomeIndexView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import VideoIndex from '@/views/VideoIndexView'
import VideoDetails from '@/views/VideoDetailsView'
import ResetView from '@/views/ResetView'
import IntroductionView from '@/views/IntroductionView'
import FavoriteView from '@/views/FavoriteView'
import MusicDetails from '@/views/MusicDetailsView'
import MusicView from '@/views/MusicView'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'introduction',
    component: IntroductionView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/inedx',
    component: LayoutIndex,
    children: [{ path: 'inedx', name: 'home-index', component: HomeView }]
  },
  {
    path: '/video',
    name: 'video',
    redirect: '/video/inedx',
    component: LayoutIndex,
    children: [
      { path: 'inedx', name: 'video-index', component: VideoIndex },
      { path: 'details', name: 'video-details', component: VideoDetails }
    ]
  },
  {
    path: '/music',
    name: 'music',
    redirect: '/music/inedx',
    component: LayoutIndex,
    children: [
      { path: 'inedx', name: 'music-index', component: MusicView },
      { path: 'details', name: 'music-details', component: MusicDetails }
    ]
  },
  {
    path: '/favorite',
    name: 'favorite',
    redirect: '/favorite/inedx',
    component: LayoutIndex,
    children: [{ path: 'inedx', name: 'favorite-index', component: FavoriteView }]
  },
  {
    path: '/profile',
    name: 'profile',
    component: HomeView
  }
]

export default routes
