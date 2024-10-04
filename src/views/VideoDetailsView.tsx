import { defineComponent, ref, watch, onBeforeMount } from 'vue'
import { useVideoInfo } from '@/model/videoModel'
import { useRouter } from 'vue-router'
import usevideoDetailsPresenter from '@/presenter/videoDetailsPresenter'
import BackIcon from '@/components/Icons/BackIcon.vue'
import SelectIcon from '@/components/Icons/SelectIcon.vue'
import LikeIcon from '@/components/Icons/LikeIcon.vue'
import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import '@/styles/videoDetailsStyles.less'
import loadingGif from '/loading.gif'

export default defineComponent({
  name: 'VideoDetails',
  components: {
    BackIcon,
    SelectIcon,
    LikeIcon
  },
  setup() {
    const { back, like, getVtt, translate, user } = usevideoDetailsPresenter()

    const router = useRouter()
    const audioRef = ref()
    const language = ref('')
    const transformStyle = ref(0)
    const currentTime = ref(0)
    const activeIndex = ref(0)
    const lyricsArray = ref()
    const videoInfoStore = useVideoInfo()
    const loading = ref(false)

    if (videoInfoStore.currentVideo.videoUrl === '') {
      router.replace({ path: '/home' })
    }

    onBeforeMount(() => {
      getVtt(videoInfoStore.currentVideo.subtitleUrl).then((res) => {
        lyricsArray.value = res
      })
      user.initLikeList()
    })

    watch(currentTime, (newVal) => {
      const length = lyricsArray.value.length
      for (let i = length - 1; i > 0; i--) {
        if (lyricsArray.value[i].timestamp < newVal) {
          const h = lyricsArray.value[i].cont === '' ? 80 + 20 : 160 + 20
          activeIndex.value = i
          transformStyle.value = -1 * (i - 1) * h
          break
        }
      }
    })

    const echo = async () => {
      try {
      loading.value = true;
      
      const res = await translate(
        lyricsArray.value.map((i: any) => i.words), 
        language.value 
      );
      
      if (Array.isArray(res)) {
        const list = res.map((translatedText: string, index: number) => {
          const originalText = lyricsArray.value[index].words;
          const timestamp = lyricsArray.value[index].timestamp;
    
          return {
            timestamp,
            words: originalText,
            cont: translatedText
          };
        });
        lyricsArray.value = list;
      } else {
        console.error('Translation response does not have the expected structure:', res);
      }
    }catch (error) {
      console.error('Error occurred during translation:', error);
    } finally {
      loading.value = false; 
    }
  };

    return () => (
      <>
        <div class="videoDetails">
          <div class="top">
            <div onClick={back}>
              <BackIcon size={'32'} />
            </div>
            <div class="controls">
              <ElDropdown trigger="click" teleported={false}>
                {{
                  default: () => (
                    <span class="el-dropdown-link">
                      {language.value === ''
                        ? 'Select the language'
                        : user.enum_language[language.value]}{' '}
                      <SelectIcon style="margin-left: 8px" />
                    </span>
                  ),
                  dropdown: () => (
                    <ElDropdownMenu>
                      <ElDropdownItem style="font-size: 14px"
                        onClick={() => {
                          language.value = 'EN'
                          console.log('EN')
                        }}
                      >
                        English
                      </ElDropdownItem>
                      <ElDropdownItem style="font-size: 14px"
                        onClick={() => {
                          language.value = 'DE'
                          console.log('DE')
                        }}
                      >
                        German
                      </ElDropdownItem>
                      <ElDropdownItem style="font-size: 14px"
                        onClick={() => {
                          language.value = 'FR'
                          console.log('FR')
                        }}
                      >
                        French
                      </ElDropdownItem>
                      <ElDropdownItem style="font-size: 14px"
                        onClick={() => {
                          language.value = 'ZH'
                          console.log('ZH')
                        }}
                      >
                        Chinese
                      </ElDropdownItem>
                      <ElDropdownItem style="font-size: 14px"
                        onClick={() => {
                          language.value = 'SV'
                          console.log('SV')
                        }}
                      >
                        Swedish
                      </ElDropdownItem>
                    </ElDropdownMenu>
                  )
                }}
              </ElDropdown>
              <ElButton round class="translate" onClick={echo}>
                {loading.value ? (
                  <img src={loadingGif} alt="Loading..." />
                  ) : (
                  'Translate'
                  )}
              </ElButton>
            </div>
          </div>
          <div class="content">
            <div style="width: 70%">
              <div class="video-details">
                <video
                  ref={audioRef}
                  controls
                  playsinline
                  poster={videoInfoStore.currentVideo.img}
                  onTimeupdate={() => {
                    currentTime.value = audioRef.value?.currentTime * 1000
                  }}
                >
                  <source src={videoInfoStore.currentVideo.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div
                style={{ float: 'right' }}
                onClick={() => {
                  like(videoInfoStore.currentVideo.title)
                }}
              >
                <LikeIcon
                  isFill={user.likeList.includes(videoInfoStore.currentVideo.title) || false}
                />
              </div>
            </div>
            <div class="subtitles">
              <ul
                style={{
                  height: '100%',
                  transform: `translateY(${transformStyle.value}px)`
                }}
              >
                {lyricsArray.value?.map((item: any, index: number) => {
                  return (
                    <li key={`la${index}`} class={`${activeIndex.value === index ? 'active' : ''}`}>
                      <div class={item.cont !== '' ? 'h160' : 'h80'}>
                        <span style={{ display: 'block' }}>{item.words}</span>
                        {item.cont !== '' && <span style={{ display: 'block' }}>{item.cont}</span>}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
})
