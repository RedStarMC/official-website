<template>
  <a
    :href="link"
    class="group flex h-[65px] w-[158px] shrink-0 flex-col items-start rounded-xl border border-white/15 bg-white/7 p-2 transition hover:bg-white/12"
    :style="{ backgroundColor: 'rgba(255,255,255,0.07)' }"
  >
    <div class="ml-1.5 mt-2 flex h-12 w-12 items-center justify-center rounded-full"
         :style="{ backgroundColor: iconBg || 'rgba(229,57,53,0.15)' }">
      <img :src="iconSrc" :alt="label" class="h-6 w-6" />
    </div>
    <span class="mt-1 ml-1.5 font-outfit text-sm font-medium leading-5 text-center w-full text-white">
      {{ label }}
    </span>
  </a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  link: string
  iconSrc: string
  label: string
  iconBg?: string
}>(), {})
</script>

<style scoped></style>