import { useRouter } from 'vue-router'
import { getLyrics } from '@/api'
import { translateText } from '@/api'
import { useUser } from '@/model/userModel'

export default () => {
  const router = useRouter()
  const user = useUser()

  const back = () => {
    router.back()
  }
  const like = (id: string) => {
    user.setLikeList(id)
  }
  const convertToMilliseconds = (timeString: string) => {
    const [hours, minutes, secondsObj] = timeString.split(':')
    const [seconds, milliseconds] = secondsObj.split('.')

    const hoursMs = parseInt(hours) * 3600000
    const minutesMs = parseInt(minutes) * 60000
    const secondsMs = parseInt(seconds) * 1000
    const millisecondsMs = parseInt(milliseconds)

    const totalMilliseconds = hoursMs + minutesMs + secondsMs + millisecondsMs
    return totalMilliseconds
  }
  const parseVTT = (vttText: any[]) => {
    try {
      return vttText?.map((item) => {
        return {
          timestamp: item.startTimeMs,
          words: item.words,
          cont: ''
        }
      })
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const getVtt = async (id: string) => {
    const res = await getLyrics(id)
    if (!res.data?.lyrics?.lines) return []
    const json = parseVTT(res.data?.lyrics.lines)
    return json
  }
  const translate = async (text: string[], language: string) => {
    const res = await translateText(text, language)
    return res
  }
  return {
    back,
    like,
    parseVTT,
    convertToMilliseconds,
    getVtt,
    translate,
    user
  }
}
