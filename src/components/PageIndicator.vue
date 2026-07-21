<template>
  <div class="fixed right-[2.78%] top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-[1.2vh]">
    <div
      v-for="(section, index) in sections"
      :key="section.id"
      role="button"
      tabindex="0"
      class="rounded-full transition-all duration-300 ease-out cursor-pointer shadow-[0_0_6px_rgba(0,0,0,0.5)]"
      :class="[
        safeCurrentIndex === index
          ? 'h-[13px] w-[13px] border-2 border-white bg-brand-red shadow-[0_0_10px_rgba(229,57,53,0.7)]'
          : 'h-[10px] w-[10px] border-2 border-white/90 bg-white/80 hover:border-brand-red hover:bg-brand-red/60 hover:scale-125',
      ]"
      :aria-label="`跳转到${section.label}`"
      @click="handleClick(index)"
      @keydown.enter="handleClick(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'hero', label: '首页' },
  { id: 'community', label: '详情' },
  { id: 'architecture', label: '架构' },
  { id: 'staff', label: '管理组' },
]

const props = defineProps<{
  currentIndex: number
}>()

const emit = defineEmits<{
  navigate: [index: number]
}>()

const safeCurrentIndex = computed(() => {
  const index = Number(props.currentIndex)
  return Number.isNaN(index) ? 0 : index
})

function handleClick(index: number) {
  emit('navigate', index)
}
</script>

<style scoped></style>
