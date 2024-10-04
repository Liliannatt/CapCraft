<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.9206 58.6668C46.6482 58.6668 58.5872 46.7278 58.5872 32.0002C58.5872 17.2726 46.6482 5.3335 31.9206 5.3335C17.193 5.3335 5.25391 17.2726 5.25391 32.0002C5.25391 46.7278 17.193 58.6668 31.9206 58.6668Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3066 32.614V28.1607C23.3066 22.614 27.2266 20.3473 32.0266 23.1207L35.8933 25.3607L39.76 27.6007C44.56 30.374 44.56 34.9073 39.76 37.6807L35.8933 39.9207L32.0266 42.1607C27.2266 44.934 23.3066 42.6673 23.3066 37.1207V32.614Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-miterlimit="10"
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
