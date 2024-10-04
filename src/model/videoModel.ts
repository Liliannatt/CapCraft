import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVideoInfo = defineStore('videoInfo', () => {
  const videoInfo = ref({
    primary: [
      {
        title: 'Beginner 1: Pronoun + Be + Not',
        img: '/1/1.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714082664/Beginner/Part%202.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714167042/Beginner/ep%202'
      },
      {
        title: 'How to use linking words in English',
        img: '/1/2.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715941295/Primary/Part%202.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715941270/Primary/Part%202'
      },
      {
        title: 'Beginner 1: Pronoun + Be',
        img: '/1/3.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714082666/Beginner/Part%203.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714167091/Beginner/ep%203'
      },
      {
        title: 'Beginner 1: a/an + Noun',
        img: '/1/4.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714082667/Beginner/Part%204.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714167159/Beginner/ep%204'
      },
      {
        title: 'Beginner 1: Subjective  Pronouns',
        img: '/1/5.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714082667/Beginner/part%205.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714167200/Beginner/ep%205'
      },
      {
        title: 'Beginner 1: Check up #1',
        img: '/1/6.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714082673/Beginner/Part%206.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714167229/Beginner/ep%206'
      }
    ],
    medium: [
      {
        title: 'Improve Your English Pronunciation',
        img: '/2/1.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714083239/Advance/ep%201.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714083181/Advance/Ep%201'
      },
      {
        title: '4 tips for listening exams',
        img: '/2/2.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715947791/Primary/Part%202.2.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715947779/Primary/Part%202.2'
      },
      {
        title: 'Difference Between By and Until',
        img: '/2/3.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714083637/Advance/ep%203.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714083486/Advance/ep%203'
      },
      {
        title: 'Voiced and Unvoiced Term',
        img: '/2/4.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714083776/Advance/ep%204.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714083703/Advance/ep%204'
      },
      {
        title: 'Adjective Word Order',
        img: '/2/5.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714083848/Advance/ep%205.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714083800/Advance/ep%205'
      },
      {
        title: 'New Year’s Resolutions',
        img: '/2/6.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1714083962/Advance/ep%206.mp4',
        subtitleUrl: 'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1714083856/Advance/ep%206'
      }
    ],
    senior: [
      {
        title: '8 tips from you about studying and exams',
        img: '/3/1.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715951342/Medium/Part%201.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715951211/Medium/Part%201'
      },
      {
        title: '4 tips about staying motivated',
        img: '/3/2.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715952111/Medium/Part%202.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715951914/Medium/Part%202'
      },
      {
        title: '5 tips for making learning fun',
        img: '/3/3.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715952384/Medium/Part%203.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715952298/Medium/Part%203'
      },
      {
        title: '3 tips about learning styles',
        img: '/3/4.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715952634/Medium/Part%204.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715952549/Medium/Part%204'
      },
      {
        title: '5 tips to help you with speaking exams',
        img: '/3/5.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715953007/Medium/Part%205.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715952837/Medium/Part%205'
      },
      {
        title: '6 more tips for studying alone',
        img: '/3/6.png',
        videoUrl:
          'https://res.cloudinary.com/dsyzdt5fl/video/upload/v1715953174/Medium/Part%206.mp4',
        subtitleUrl:
          'https://res.cloudinary.com/dsyzdt5fl/raw/upload/v1715953126/Medium/Part%206'
      }
    ]
  })

  const currentVideo = ref({
    img: '',
    title: '',
    videoUrl: '',
    subtitleUrl: ''
  })

  const currentType = ref<'primary' | 'medium' | 'senior'>('primary')

  function setCurrentVideo(info: {
    videoUrl: string
    subtitleUrl: string
    title: string
    img: string
  }) {
    currentVideo.value = info
  }

  function setCurrentType(type: 'primary' | 'medium' | 'senior') {
    currentType.value = type
  }

  return { videoInfo, currentVideo, setCurrentVideo, currentType, setCurrentType }
})
