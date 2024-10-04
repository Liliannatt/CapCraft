<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.653 55.4933C32.7463 55.8133 31.253 55.8133 30.3463 55.4933C22.613 52.8533 5.33301 41.8399 5.33301 23.1733C5.33301 14.9333 11.973 8.2666 20.1597 8.2666C25.013 8.2666 29.3063 10.6133 31.9997 14.2399C34.693 10.6133 39.013 8.2666 43.8397 8.2666C52.0263 8.2666 58.6663 14.9333 58.6663 23.1733C58.6663 41.8399 41.3863 52.8533 33.653 55.4933Z"
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
  size: string
}>()
</script>
