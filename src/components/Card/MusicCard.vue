<template>
  <div>
    <div class="card" :style="`background-image: url(${url});`" @click="click">
      <PlayMusicIcon class="play" />
      <span class="tracks">{{ tracks }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import PlayMusicIcon from '@/components/Icons/PlayMusicIcon.vue'
import { useRouter } from 'vue-router'
import { useMusic } from '@/model/musicModel'

const props = defineProps<{
  url: string
  info: Record<any, any>
  tracks: string
}>()
const router = useRouter()
const music = useMusic()

const click = () => {
  router.push({
    name: 'music-details'
  })
  music.setCurrentMusic(props.info as any)
}
</script>


<style scoped lang="less">
@import 'src/styles/cardstyles.less';
</style>