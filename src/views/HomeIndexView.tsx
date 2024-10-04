import '@/styles/homeIndexStyles.less'
import { defineComponent, onBeforeMount } from 'vue'
import VideoIcon from '@/components/Icons/VideoIcon.vue'
import MusicIcon from '@/components/Icons/MusicIcon.vue'
import VideoCard from '@/components/Card/VideoCard.vue'
import MusicCard from '@/components/Card/MusicCard.vue'
import { ElButton } from 'element-plus'
import { useVideoInfo } from '@/model/videoModel'
import homePresenter from '@/presenter/homePresenter'
import { useMusic } from '@/model/musicModel'

export default defineComponent({
  name: 'HomeIndex',
  components: {
    VideoIcon,
    MusicIcon,
    VideoCard
  },
  setup() {
    const videoInfoStore = useVideoInfo()
    const { more } = homePresenter()
    const music = useMusic()

    onBeforeMount(() => {
      music.initMusicList()
    })

    return () => (
      <div class="home">
        <div>
          <div class="title">
            <div class="icon">
              <VideoIcon stroke="#af96bc" size="54" />
              <span class="name">Videos</span>
            </div>
            <ElButton
              class="more"
              round
              onClick={() => {
                more('video')
              }}
            >
              More
            </ElButton>
          </div>
          <div class="homeVideo">
            {videoInfoStore.videoInfo[videoInfoStore.currentType].map((item, index) => {
              return (
                <>
                  <VideoCard
                    key={`video-${index}`}
                    info={item}
                    tracks={item.title}
                    url={item.img}
                  />
                </>
              )
            })}
          </div>
        </div>
        <div style="margin-top: 50px">
          <div class="title">
            <div class="icon">
              <MusicIcon stroke="#af96bc" size="54" />
              <span class="name">Music</span>
            </div>
            <ElButton
              class="more"
              round
              onClick={() => {
                more('music')
              }}
            >
              More
            </ElButton>
          </div>
          <div class="homeMusic">
            {music.musicList?.map((item, index) => {
              return (
                <>
                  <MusicCard
                    key={`music-${index}`}
                    info={item.track}
                    tracks={item.track.name}
                    url={item.track.album.images[1].url}
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
})
