import { defineComponent } from 'vue'
import PlayIcon from '@/components/Icons/PlayIcon.vue'
import { useRouter } from 'vue-router'
import { useVideoInfo } from '@/model/videoModel'

export default defineComponent({
  props: {
    url: String,
    info: Object,
    tracks: String
  },
  components: {
    PlayIcon
  },
  setup(props) {
    const router = useRouter()
    const videoInfoStore = useVideoInfo()

    const clickVideo = () => {
      router.push({
        name: 'video-details'
      })
      videoInfoStore.setCurrentVideo(props.info as any)
    }
    return {
      clickVideo
    }
  }
})
