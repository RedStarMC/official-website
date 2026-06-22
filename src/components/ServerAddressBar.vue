<template>
  <div class="relative z-20 flex h-[89px] w-[480px] items-start pl-[10px]">
    <div class="relative flex h-[79px] w-[470px] items-start shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]">
      <!-- Status circle -->
      <div class="relative z-10 flex h-[79px] w-[79px] items-start rounded-full bg-brand-card">
        <div class="mt-[37px] ml-[22px] h-2 w-2 rounded-full bg-brand-online/70"></div>
      </div>

      <!-- Info area -->
      <div class="z-20 mt-5 flex h-9 -ml-12 w-[420px] items-start">
        <span class="mt-2 ml-4 flex h-[25px] font-outfit text-[18px] leading-6 tracking-[1px] text-[#3d3d3d]">
          {{ label }}
        </span>
        <div class="font-outfit text-[16px] font-bold leading-9 tracking-[1px] text-brand-dark">
          <span class="ml-[10px]">{{ address }}</span>
        </div>
        <button
          class="ml-auto flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-red-600/20 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]"
          @click="copyAddress"
        >
          <img :src="copyIconSrc" alt="copy" class="h-4 w-4" />
        </button>
      </div>

      <!-- Background block -->
      <div class="absolute inset-0 -z-0 h-[79px] w-[427px] bg-brand-card"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  address?: string
  label?: string
  copyIconSrc?: string
}>(), {
  address: 'play.redstarmc.net',
  label: '服务器地址',
  copyIconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902099440/4ead/6abc/0db9/8b0f77c4f4aa0c2799291255e54f0a27.png',
})

const emit = defineEmits<{ (e: 'copied', address: string): void }>()

const copied = ref(false)

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(props.address)
    copied.value = true
    emit('copied', props.address)
    setTimeout(() => (copied.value = false), 1500)
  } catch (err) {
    console.error('复制失败', err)
  }
}
</script>

<style scoped></style>
