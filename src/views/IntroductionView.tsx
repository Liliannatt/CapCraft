import '@/styles/introductionStyles.less'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import FeedbackIndex from '@/components/Feedback/FeedbackIndex.vue'

export default defineComponent({
  name: 'logIn',
  components: {
    FeedbackIndex
  },
  setup() {
    const router = useRouter()
    return () => (
      <div class="introduction">
        <div class={'menu'}>
          <span
            onClick={() => {
              router.push({ name: 'home' })
            }}
          >
            Home
          </span>
          <span
            onClick={() => {
              router.push({ name: 'signup' })
            }}
          >
            Sign Up
          </span>
          <span
            onClick={() => {
              router.push({ name: 'login' })
            }}
          >
            Sign In
          </span>
          <span
            onClick={() => {
              const element = document.body 
              element.classList.add('animated-scroll') 
              window.scrollTo({
                // top: element.scrollHeight,
                top: 3300,
                behavior: 'smooth' // 使用 'smooth' 进行更流畅的动画
              })
              setTimeout(() => {
                element.classList.remove('animated-scroll') // 延迟后删除动画类
              }, 300) // 根据需要调整延迟
            }}
          >
            About Us
          </span>
        </div>
        <div class={'content'}>
          <div class={'first-screen'}>
            <div class={'h1-title'}>“Unlock the world's language.”</div>
            <div class={'instructions'}>
              Welcome to CapCraft, where we revolutionize language learning through immersive
              subtitles on audios and videos.
              <p></p>
              Embark on a linguistic journey like never before, as we break down language barriers
              and make learning fun and engaging.
              <p></p>
              Experience the ultimate fusion of Video, Music, and Translation in a Mind-Blowing
              Platform!
            </div>
          </div>
          <div class={'language-mastery'}>
            <div class={'title'}>Language Mastery</div>
            <div class={'options'}>
              <div class={'card card-video'}>Video</div>
              <div class={'card card-music'}>Music</div>
              <div class={'card card-translate'}>Translate</div>
            </div>
            <div class={'video'}>
              <div class={'watch'}></div>
              <div
                class={'watch-video-icon'}
                onClick={() => {
                  router.push({ name: 'signup' })
                }}
              ></div>
            </div>
            <div class={'music'}>
              <div class={'listen'}></div>
              <div
                class={'watch-music-icon'}
                onClick={() => {
                  router.push({ name: 'signup' })
                }}
              ></div>
              <div class={'icon'}></div>
            </div>
            <div class={'about'}>
              <div class={'cont-bg'}></div>
              <div class={'cont'}></div>
              <div
                class={'watch-about-icon'}
                onClick={() => {
                  router.push({ name: 'signup' })
                }}
              ></div>
            </div>
            <div class={'feedback'}>
              <FeedbackIndex></FeedbackIndex>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
