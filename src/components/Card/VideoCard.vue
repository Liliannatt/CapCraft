<template>
  <div>
    <div class="card" :style="`background-image: url(${url});`" @click="clickVideo">
      <PlayIcon class="play" />
    </div>
    <span class="tracks">{{ tracks }}</span>
  </div>
</template>

<script lang="ts">
import presenter from '../../presenter/videocardpresenter'
export default presenter
</script>

<style scoped lang="less">
@import 'src/styles/videostyles.less';
</style>
