import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getMusicList,
  searchMusic as searchMusicApi,
  searchMusicList as searchMusicListApi
} from '@/api'
import { useRouter } from 'vue-router'

export const useMusic = defineStore('music', () => {
  const router = useRouter()

  const musicList = ref<any[]>([])
  const currentMusic = ref<any>({})
  const searchMusic = ref<string>('')
  const searchResult = ref<any[]>([])
  const is = ref(false)

  const initMusicList = async () => {
    const list = await getMusicList()
    musicList.value = list?.data?.tracks?.items ? list?.data?.tracks.items : []
  }

  const setCurrentMusic = (music: any) => {
    currentMusic.value = music
  }

  const handleSearchMusic = async () => {
    const result = await searchMusicApi(searchMusic.value)
    is.value = true
    searchResult.value = result?.data?.tracks?.items ? result?.data?.tracks.items : []
  }

  const reSearchResult = () => {
    is.value = false
    searchResult.value = []
  }

  const toHome = () => {
    router.push({ name: 'home' })
  }

  const handleSearchMusicList = async (list: string[]) => {
    return searchMusicListApi(list)
  }

  return {
    musicList,
    initMusicList,
    currentMusic,
    setCurrentMusic,
    searchMusic,
    searchResult,
    handleSearchMusic,
    reSearchResult,
    toHome,
    is,
    handleSearchMusicList
  }
})
