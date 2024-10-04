import request from './index'
const MUSIC_BASE_URL = 'https://api.spotify.com'
const GET_TOKEN_SERVICE = 'https://accounts.spotify.com'

export const getToken = async () => {
  const tokenData = await request<{
    access_token: string
    expires_in: number
    token_type: string
  }>({
    method: 'POST',
    url: `${GET_TOKEN_SERVICE}/api/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic MTc0NzE1YTI0MjFkNGFlZGE4MWMwNzI3YzA3NWIwMDM6MzNhYjk3ZmMwYmEwNDcxZTlhYjNjNTc0Y2Y2ODFlMDk='
    },
    data: 'grant_type=client_credentials'
  })
  return tokenData.data?.access_token ? tokenData.data?.access_token : ''
}

export const getMusicList = async () => {
  const token = await getToken()
  if (!token) {
    console.error('get token error')
    return null
  }
  return request({
    method: 'GET',
    url: `${MUSIC_BASE_URL}/v1/playlists/37i9dQZEVXbNG2KDcFcKOF`,
    headers: {
      Authorization: `Bearer ${token}`
    }
    // params: {
    //   market: 'ES'
    // }
  })
}

export const searchMusic = async (q: string) => {
  const token = await getToken()
  if (!token) {
    console.error('get token error')
    return null
  }
  return request({
    method: 'GET',
    url: `${MUSIC_BASE_URL}/v1/search`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q,
      type: 'track'
      // offset: '0',
      // limit: '10',
      // numberOfTopResults: '5'
    }
  })
}

export const getLyrics = (id: string) => {
  return request({
    method: 'GET',
    url: `https://spotify23.p.rapidapi.com/track_lyrics/`,
    params: {
      id
    },
    headers: {
      'X-RapidAPI-Key': '1f187a22d6mshd2a0ec78bc4e3f2p17d1fdjsnc0011208afbb',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  })
}

export const searchMusicList = async (list: string[]) => {
  const token = await getToken()
  if (!token) {
    console.error('get token error')
    return null
  }
  const ids = list.join(',')
  return request({
    method: 'GET',
    url: `${MUSIC_BASE_URL}/v1/tracks`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      ids
    }
  })
}
