import '@/styles/favoriteStyles.less'
import { defineComponent, onBeforeMount, watch, ref } from 'vue'
import VideoIcon from '@/components/Icons/VideoIcon.vue'
import MusicIcon from '@/components/Icons/MusicIcon.vue'
import VideoCard from '@/components/Card/VideoCard.vue'
import { useVideoInfo } from '@/model/videoModel'
import favoritePresenter from '@/presenter/favoritePresenter'
import { useMusic } from '@/model/musicModel'
import MusicCard from '@/components/Card/MusicCard.vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'FavoriteView',
  components: {
    VideoIcon,
    MusicIcon,
    VideoCard
  },
  setup() {
    type Video_Type = { title: string; img: string; videoUrl: string; subtitleUrl: string }
    const videoInfoStore = useVideoInfo()
    const { user, more } = favoritePresenter()
    const videoList = ref<Video_Type[]>([])
    const musicLikeList = ref<any[]>([])
    const music = useMusic()

    onBeforeMount(() => {
      user.initLikeList()
    })

    watch(
      () => user.likeList,
      (newVal) => {
        type videoInfo = keyof typeof videoInfoStore.videoInfo
        const list: Video_Type[] = []
        const musicList: string[] = []
        Object.keys(videoInfoStore.videoInfo).forEach((type) => {
          videoInfoStore.videoInfo[type as videoInfo].forEach((videoInfo) => {
            if (newVal.includes(videoInfo.title)) {
              list.push(videoInfo)
            }
          })
        })
        videoList.value = list
        user.likeList.forEach((item) => {
          if (!item.includes(' ')) {
            musicList.push(item)
          }
        })
        music.handleSearchMusicList(musicList).then((res) => {
          musicLikeList.value = res?.data.tracks
        })
      }
    )

    return () => (
      <div class="favorite">
        <div>
          <div class="title">
            <div class="icon">
              <VideoIcon stroke="#af96bc" size="54" />
              <span class="name">Videos</span>
            </div>
          </div>
          <div class="favoriteVideo">
            {videoList.value.length === 0 && (
              <div class={'like-null'}>
                No Result <span onClick={() => more('video')}> <ElButton type="primary">Watch</ElButton></span>
              </div>
            )}
            {videoList.value.map((item, index) => {
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
        <div style="margin-top: 24px">
          <div class="title">
            <div class="icon">
              <MusicIcon stroke="#af96bc" size="54" />
              <span class="name">Music</span>
            </div>
          </div>
          <div class="favoriteMusic">
            {musicLikeList.value.length === 0 && (
              <div class={'like-null'}>
                No Result <span onClick={() => more('music')}> <ElButton type="primary">Listen</ElButton></span>
              </div>
            )}
            {musicLikeList.value?.map((item, index) => {
              return (
                <>
                  <MusicCard
                    key={`music-${index}`}
                    info={item}
                    tracks={item.name}
                    url={item.album.images[1].url}
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
