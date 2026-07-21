<template>
  <div class="fixed right-[2.78%] top-1/2 -translate-y-1/2 z-50">
    <div class="animate-slide-indicator flex flex-col items-center gap-[1.2vh]">
      <div
        v-for="(section, index) in sections"
        :key="section.id"
        role="button"
        tabindex="0"
        class="flex-shrink-0 cursor-pointer rounded-full transition-all duration-300 ease-out"
        :class="[
          safeCurrentIndex === index
            ? 'h-[13px] w-[13px] border-2 border-brand-red bg-brand-red shadow-[0_0_10px_rgba(229,57,53,0.7)]'
            : 'h-[10px] w-[10px] border-2 border-white/60 bg-white/40 hover:border-brand-red/80 hover:bg-brand-red/30 hover:scale-125',
        ]"
        :aria-label="`跳转到${section.label}`"
        @click="handleClick(index)"
        @keydown.enter.prevent="handleClick(index)"
        @keydown.space.prevent="handleClick(index)"
      />
    </div>
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

<style scoped>
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  70% {
    transform: translateX(-6px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-indicator {
  animation: slideInFromRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>
