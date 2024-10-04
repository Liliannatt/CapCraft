import { useVideoInfo } from '@/model/videoModel'

export default () => {
  const videoInfoStore = useVideoInfo()

  const selectedTab = (key: 'primary' | 'medium' | 'senior') => {
    videoInfoStore.setCurrentType(key)
  }
  return {
    selectedTab
  }
}
