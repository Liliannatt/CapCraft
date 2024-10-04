import '@/styles/musicStyles.less'
import { defineComponent, onBeforeMount, ref } from 'vue'
import VideoIcon from '@/components/Icons/VideoIcon.vue'
import MusicIcon from '@/components/Icons/MusicIcon.vue'
import VideoCard from '@/components/Card/VideoCard.vue'
import MusicCard from '@/components/Card/MusicCard.vue'
import { ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { useMusic } from '@/model/musicModel'
import loadingGif from '/loading.gif'

export default defineComponent({
  name: 'MusicIndex',
  components: {
    VideoIcon,
    MusicIcon,
    VideoCard
  },
  setup() {
    const music = useMusic()
    const isLoading = ref(false)

    onBeforeMount(() => {
      music.initMusicList()
    })

    const searchMusic = async () => {
      try {
        isLoading.value = true 
        await music.handleSearchMusic();
      } catch (error) {
        console.error('Error occurred during search:', error)
      } finally {
        isLoading.value = false
      }
    }


    return () => (
      <div class="music-index">
        <ElInput
          v-model={music.searchMusic}
          class={'search-input'}
          placeholder="search music"
          prefix-icon={Search}
          clearable
          onChange={() => {
            if (music.searchMusic === '') {
              music.reSearchResult()
              return
            }
            searchMusic()
          }}
        />

        {isLoading.value && (
          <div>
            <img src={loadingGif} alt="Loading..." />
          </div>
        )}

        {music.searchResult.length <= 0 && music.is && (
          <div
            class={'no-music'}
            onClick={() => {
              music.toHome()
            }}
          ></div>
        )}
        <div class="music-list">
          {music.searchResult.length > 0
            ? music.searchResult?.map((item, index) => {
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
              })
            : music.musicList?.map((item, index) => {
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
    )
  }
})
