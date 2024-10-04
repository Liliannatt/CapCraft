import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/init'
import { database } from '@/firebase/init'
import { ref as firebaseRef, get, set } from 'firebase/database'

export const useUser = defineStore('user', () => {
  const router = useRouter()
  const userInfo = ref<Record<string, any>>({})
  const likeList = ref<any[]>([])

  const isVerify = ref(false)
  const enum_language: Record<string, any> = {
    EN: 'English',
    DE: 'German',
    FR: 'French',
    ZH: 'Chinese',
    SV: 'Swedish'
  }

  const setUserInfo = (info: Record<string, any>) => {
    userInfo.value = info
  }

  const exit = () => {
    signOut(auth)
      .then(() => {
        userInfo.value = {}
        localStorage.removeItem('isSignedIn')
        localStorage.removeItem('result')
        router.push({ name: 'introduction' })
      })
      .catch((error) => {
        console.error('Sign out error:', error)
      })
  }

  const checkVerify = (value: boolean) => {
    isVerify.value = value
  }

  const initLikeList = async () => {
    const uid = userInfo.value.user.uid
    const list = await getLikeList(uid)
    likeList.value = list
  }

  const setLikeList = async (title: string) => {
    const uid = userInfo.value.user.uid
    const list = await getLikeList(uid)
    if (list?.includes(title)) {
      list.splice(list.indexOf(title), 1)
    } else {
      list.push(title)
    }
    set(firebaseRef(database, uid), list).then(async () => {
      const newList = await getLikeList(uid)
      likeList.value = newList
    })
  }

  const setMsg = async (msg: string) => {
    const uid = userInfo.value?.user?.uid
    set(firebaseRef(database, `msg/${uid || 'unkown'}`), msg).then(async () => {
      const dbRef = firebaseRef(database)
      const snapshot = await get(dbRef)
      if (snapshot.exists()) {
        console.log(snapshot.val())
      }
    })
  }

  const saveUserInfo = async (user_info: Record<string, any>) => {
    const uid = userInfo.value?.user?.uid
    if (!uid) {
      return
    }
    set(firebaseRef(database, `userInfo/${uid}`), user_info).then(async () => {
      const dbRef = firebaseRef(database)
      const snapshot = await get(dbRef)
      if (snapshot.exists()) {
        console.log(snapshot.val())
      }
    })
  }

  const getLikeList = async (uid: string) => {
    const dbRef = firebaseRef(database)
    const snapshot = await get(dbRef)
    if (snapshot.exists()) {
      return snapshot.val()?.[uid] || []
    }
    return []
  }

  return {
    userInfo,
    setUserInfo,
    exit,
    isVerify,
    checkVerify,
    likeList,
    setLikeList,
    getLikeList,
    initLikeList,
    enum_language,
    setMsg,
    saveUserInfo
  }
})
