import { defineComponent, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import usevideoDetailsPresenter from '@/presenter/musicDetailsPresenter'
import BackIcon from '@/components/Icons/BackIcon.vue'
import SelectIcon from '@/components/Icons/SelectIcon.vue'
import LikeIcon from '@/components/Icons/LikeIcon.vue'
import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { useMusic } from '@/model/musicModel'
import '@/styles/musicDetailsStyles.less'
import loadingGif from '/loading.gif'

export default defineComponent({
  name: 'MusicDetails',
  components: {
    BackIcon,
    SelectIcon,
    LikeIcon
  },
  setup() {
    const { back, like, getVtt, translate, user } = usevideoDetailsPresenter()

    const router = useRouter()
    const language = ref('')
    const activeIndex = ref(0)
    const lyricsArray = ref()
    const music = useMusic()
    const loading = ref(false)
    
    const preUrl = ref('')

    if (Object.keys(music.currentMusic).length <= 0) {
      router.replace({ path: '/home' })
    }

    console.log(music.currentMusic)
    onBeforeMount(() => {
      getVtt(music.currentMusic?.id).then((res) => {
        lyricsArray.value = res
      })
      preUrl.value = music.currentMusic.preview_url
      user.initLikeList()
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
        console.error('Translation response does not have the expected structure:', res)
      }
    }catch (error) {
      console.error('Error occurred during translation:', error)
    } finally {
      loading.value = false
    }
  };

    return () => (
      <>
        <div class="musicDetails">
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
            <div class={'cb'}>
              <div class={'audio'}>
                <div class = "cover"
                  style={{
                    backgroundImage: `url(${music.currentMusic?.album?.images[1].url})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover', // Changed from '100% 100%' to 'cover'
                    height: '400px',
                    width: '400px',
                    borderRadius: '30px'

                  }}
                ></div>
                <audio
                  controls
                  style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    width: '400px'
                  }}
                  src={preUrl.value}
                ></audio>
              </div>
              <div class="subtitles">
                <ul
                  style={{
                    height: '100%',
                    overflow: 'auto'
                  }}
                >
                  {lyricsArray.value?.map((item: any, index: number) => {
                    return (
                      <li
                        key={`la${index}`}
                        class={`${activeIndex.value === index ? 'active' : ''}`}
                      >
                        <div>
                          <span style={{ display: 'block' }}>{item.words}</span>
                          {item.cont !== '' && (
                            <span style={{ display: 'block' }}>{item.cont}</span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div
              class={'like-icon'}
              onClick={() => {
                like(music.currentMusic?.id)
              }}
            >
              <span class={'name'}>{music.currentMusic?.name}</span>
              <LikeIcon isFill={user.likeList.includes(music.currentMusic?.id) || false} />
            </div>
          </div>
        </div>
      </>
    )
  }
})
