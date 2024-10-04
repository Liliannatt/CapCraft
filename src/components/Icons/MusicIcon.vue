<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.6673 40.0002V24.0002C58.6673 10.6668 53.334 5.3335 40.0006 5.3335H24.0006C10.6673 5.3335 5.33398 10.6668 5.33398 24.0002V40.0002C5.33398 53.3335 10.6673 58.6668 24.0006 58.6668H40.0006C53.334 58.6668 58.6673 53.3335 58.6673 40.0002Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.666 6.6665V57.3332"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.5866 44.7996C32.781 44.7996 34.5599 43.0207 34.5599 40.8263C34.5599 38.6319 32.781 36.853 30.5866 36.853C28.3922 36.853 26.6133 38.6319 26.6133 40.8263C26.6133 43.0207 28.3922 44.7996 30.5866 44.7996Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.1472 38.1598V22.6131C49.1472 19.3064 47.0672 18.8532 44.9606 19.4132L37.0139 21.5732C35.5739 21.9732 34.5605 23.1197 34.5605 24.773V27.5465V29.4132V40.7997"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M45.1472 42.1331C47.3416 42.1331 49.1205 40.3542 49.1205 38.1598C49.1205 35.9654 47.3416 34.1865 45.1472 34.1865C42.9528 34.1865 41.1738 35.9654 41.1738 38.1598C41.1738 40.3542 42.9528 42.1331 45.1472 42.1331Z"
      :stroke="props.stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5605 29.4396L49.1472 25.4663"
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
