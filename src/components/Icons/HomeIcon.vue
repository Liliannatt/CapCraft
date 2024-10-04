<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path
      d="M26.8537 7.52003L8.37372 22.32C6.29372 23.9733 4.96038 27.4668 5.41371 30.0801L8.96039 51.3067C9.60039 55.0933 13.227 58.16 17.067 58.16H46.9337C50.7471 58.16 54.4004 55.0667 55.0404 51.3067L58.5871 30.0801C59.0137 27.4668 57.6804 23.9733 55.6271 22.32L37.147 7.54673C34.2937 5.25339 29.6804 5.25337 26.8537 7.52003Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9997 41.3333C35.6816 41.3333 38.6663 38.3486 38.6663 34.6667C38.6663 30.9848 35.6816 28 31.9997 28C28.3178 28 25.333 30.9848 25.333 34.6667C25.333 38.3486 28.3178 41.3333 31.9997 41.3333Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  stroke: string
}>()
</script>
