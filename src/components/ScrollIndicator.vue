<template>
  <div class="flex flex-col items-center opacity-99">
    <span class="font-outfit text-xs font-medium tracking-[4px] text-white/80">{{ topText }}</span>
    <div class="mt-2 flex h-6 w-6 items-center justify-center">
      <img :src="iconSrc" alt="scroll icon" class="h-6 w-6" />
    </div>
    <span class="mt-1 font-outfit text-xs font-medium tracking-[2px] text-white/80">{{ bottomText }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  topText?: string
  bottomText?: string
  iconSrc: string
}>(), {
  topText: 'SCROLL',
  bottomText: '向下滚动',
})
</script>

<style scoped></style>
