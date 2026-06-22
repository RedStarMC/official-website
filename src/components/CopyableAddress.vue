<template>
  <div class="flex items-center gap-2.5">
    <img :src="iconSrc" :alt="label" class="h-5 w-5 shrink-0" />
    <span class="font-noto text-xs font-normal leading-4 tracking-[5px] text-white/50">
      {{ label }}
    </span>
    <button
      class="flex h-9 w-[72px] shrink-0 items-center justify-center rounded-lg bg-brand-red font-outfit text-sm font-bold leading-5 tracking-[5px] text-white transition hover:bg-brand-red/90"
      @click="copyAddress"
    >
      {{ copied ? '已复制' : '复制' }}
    </button>
    <span class="font-outfit text-base font-bold leading-6 tracking-[1px] text-white">
      {{ address }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  iconSrc: string
  label: string
  address: string
}>(), {})

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