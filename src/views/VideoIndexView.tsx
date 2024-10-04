import { defineComponent } from 'vue'
import { useVideoInfo } from '@/model/videoModel'
import VideoCard from '@/components/Card/VideoCard.vue'
import useVideoIndeoPresenter from '@/presenter/VideoIndeoPresenter'
import '@/styles/videoIndexStyles.less'

export default defineComponent({
  name: 'VideoIndex',
  components: {
    VideoCard
  },
  setup() {
    const videoInfoStore = useVideoInfo()
    const { selectedTab } = useVideoIndeoPresenter()
    return () => (
      <>
        <div class={'videoIndex'}>
          <div class="type">
            <div
              class={videoInfoStore.currentType === 'primary' ? 'selected' : ''}
              onClick={() => selectedTab('primary')}
            >
              Primary
            </div>
            <div
              class={videoInfoStore.currentType === 'medium' ? 'selected' : ''}
              onClick={() => selectedTab('medium')}
            >
              Medium
            </div>
            <div
              class={videoInfoStore.currentType === 'senior' ? 'selected' : ''}
              onClick={() => selectedTab('senior')}
            >
              Senior
            </div>
          </div>
          <div class="list">
            {videoInfoStore.videoInfo[videoInfoStore.currentType].map((item, index) => {
              return (
                <div class="videoIndex" key={`video-${index}`}>
                  <VideoCard info={item} tracks={item.title} url={item.img} />
                </div>
              )
            })}
            <div></div>
          </div>
        </div>
      </>
    )
  }
})
