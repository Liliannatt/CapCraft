<template>
  <svg
    width="154"
    height="154"
    viewBox="0 0 154 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_26_4717)">
      <g opacity="0.4" filter="url(#filter1_b_26_4717)">
        <circle cx="77" cy="76" r="30" fill="white" fill-opacity="0.18" />
      </g>
      <path
        d="M81.5221 64.1108C83.3557 64.2478 85.0793 65.0385 86.3794 66.3389C87.0928 67.0519 87.6588 67.8985 88.0449 68.8303C88.4311 69.7621 88.6298 70.7608 88.6298 71.7695C88.6298 72.7781 88.4311 73.7769 88.0449 74.7087C87.6588 75.6405 87.0928 76.4871 86.3794 77.2001L77.2569 86.3226C77.1431 86.4373 77.0076 86.5284 76.8584 86.5906C76.7092 86.6527 76.5492 86.6848 76.3875 86.6848C76.2259 86.6848 76.0658 86.6527 75.9166 86.5906C75.7674 86.5284 75.632 86.4373 75.5181 86.3226L66.3957 77.2001C65.0179 75.8319 64.2097 73.9926 64.1338 72.0524C64.0579 70.1122 64.72 68.2153 65.9867 66.7437C67.2534 65.2721 69.0306 64.3351 70.9605 64.1214C72.8904 63.9077 74.8295 64.4331 76.3875 65.5919C77.8664 64.4993 79.6884 63.9737 81.5221 64.1108Z"
        :fill="isFill ? '#EB5757' : '#afafaf'"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_26_4717"
        x="0"
        y="0"
        width="154"
        height="154"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="23.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_4717" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_4717" result="shape" />
      </filter>
      <filter
        id="filter1_b_26_4717"
        x="39"
        y="38"
        width="76"
        height="76"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_4717" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_26_4717"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  isFill: boolean
}>()
</script>
