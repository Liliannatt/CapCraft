import { onBeforeMount, ref, defineComponent, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import LogoIcon from '/src/components/Icons/LogoIcon.vue'
import HomeIcon from '/src/components/Icons/HomeIcon.vue'
import VideoIcon from '/src/components/Icons/VideoIcon.vue'
import MusicIcon from '/src/components/Icons/MusicIcon.vue'
import FavoriteIcon from '/src/components/Icons/FavoriteIcon.vue'
import ProfileIcon from '/src/components/Icons/ProfileIcon.vue'
import ExitIcon from '/src/components/Icons/ExitIcon.vue'
import { useUser } from '@/model/userModel'
import { updateUserInfo, getUser, updateUserImg } from '@/firebase/init'
import { ElMessage } from 'element-plus'
// import { updateUserEmail, sendEmail } from '@/firebase/init'
// import { ref as firebaseRef, onValue, child, get, set } from 'firebase/database'

export default defineComponent({
  name: 'LayoutIndex',
  components: {
    LogoIcon,
    HomeIcon,
    VideoIcon,
    MusicIcon,
    FavoriteIcon,
    RouterView,
    ProfileIcon,
    ExitIcon
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const user = useUser()

    const SELECTED_COLOR = '#3c4045'
    const UN_SELECTED_COLOR = '#b49ebf'

    const DefaultStatus = {
      home: UN_SELECTED_COLOR,
      video: UN_SELECTED_COLOR,
      music: UN_SELECTED_COLOR,
      favorite: UN_SELECTED_COLOR
    }

    const routerIcon = ref(DefaultStatus)
    const drawer = ref(false)
    const isOverlay = ref(true)
    const formLabelAlign = ref<Record<string, any>>({})
    const rules = ref({
      email: [
        { required: true, message: 'Enter your Email', trigger: 'blur' },
        { type: 'email', message: 'Invalid Email Format', trigger: ['blur', 'change'] }
      ],
      displayName: [{ required: true, message: 'Enter your Name', trigger: 'blur' }]
    })
    const formLabelAlignRef = ref()

    const pushPage = (name: string) => {
      routerIcon.value = { ...DefaultStatus, [name]: SELECTED_COLOR }
      router.push({
        name
      })
    }

    const overlayChange = (status: boolean) => {
      isOverlay.value = status
    }

    const handleProfile = async () => {
      formLabelAlign.value = {
        displayName: user.userInfo.user.displayName,
        photoURL: user.userInfo.user.photoURL,
        email: user.userInfo.user.email
      }
      isOverlay.value = true
      drawer.value = true
    }
    const handleExit = () => {
      user.exit()
      isOverlay.value = true
    }
    const exit = () => {
      drawer.value = false
      formLabelAlign.value = {}
    }
    const save = () => {
      formLabelAlignRef.value.validate((valid: boolean) => {
        if (valid) {
          console.log('success', formLabelAlign.value)
          updateUserInfo(formLabelAlign.value.displayName).then(() => {
            const info = getUser()
            if (!info) {
              return
            }
            user.saveUserInfo(formLabelAlign.value)
            user.setUserInfo({ user: info })
            localStorage.setItem('result', JSON.stringify({ user: info }))
            exit()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    const beforeUpload = async (file: File) => {
      console.log('beforeUpload', file)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        formLabelAlign.value.photoURL = reader.result
        updateUserImg(reader.result as string)
          .then(() => {
            const info = getUser()
            if (!info) {
              return
            }
            user.saveUserInfo(formLabelAlign.value)
            user.setUserInfo({ user: info })
            localStorage.setItem('result', JSON.stringify({ user: info }))
            ElMessage({
              showClose: true,
              message: 'success',
              type: 'success'
            })
          })
          .catch((error) => {
            ElMessage({
              showClose: true,
              message: 'The picture is too large',
              type: 'error'
            })
            console.error('Update User Image Error:', error)
          })
      }
      return false
    }

    watch(route, () => {
      Object.keys(routerIcon.value).forEach((item) => {
        if (route.path?.includes(item)) {
          routerIcon.value = { ...DefaultStatus, [item]: SELECTED_COLOR }
        }
      })
    })

    onBeforeMount(() => {
      Object.keys(routerIcon.value).forEach((item) => {
        if (route.path?.includes(item)) {
          routerIcon.value = { ...DefaultStatus, [item]: SELECTED_COLOR }
        }
      })
    })

    return {
      routerIcon,
      pushPage,
      SELECTED_COLOR,
      isOverlay,
      overlayChange,
      handleProfile,
      handleExit,
      user,
      drawer,
      formLabelAlign,
      exit,
      save,
      rules,
      formLabelAlignRef,
      beforeUpload
    }
  }
})
