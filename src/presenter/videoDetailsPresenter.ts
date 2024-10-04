import { useRouter } from 'vue-router'
import { translateText } from '@/api'
import { useUser } from '@/model/userModel'

export default () => {
  const router = useRouter()
  const user = useUser()

  const back = () => {
    router.back()
  }
  const like = (title: string) => {
    user.setLikeList(title)
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
  const parseVTT = (vttText: string) => {
    try {
      const lines = vttText?.split('\n\r')
      const reg = /(\n|\r)/g
      const regex = /-->\s*(\d+:\d{2}:\d{2}.\d{3})\s*/g
      const filteredVTT = lines
        .filter((item) => item.includes('-->'))
        .map((i) => {
          const item: any[] = i
            .replaceAll(reg, '')
            .replaceAll(regex, '')
            .replace(' ', '----')
            ?.split('----')
          item[0] = convertToMilliseconds(item[0])
          return {
            timestamp: item[0],
            words: item[1],
            cont: ''
          }
        })
      return filteredVTT
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const getVtt = async (subtitleUrl: string) => {
    const res = await fetch(subtitleUrl)
    const text = await res.text()
    const json = parseVTT(text)
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
