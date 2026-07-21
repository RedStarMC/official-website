<template>
  <div class="fixed right-[2.78%] top-1/2 z-50 -translate-y-1/2">
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
import { ref, computed, onMounted, onUnmounted } from 'vue'

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
  'update:currentIndex': [index: number]
  navigate: [index: number]
}>()

// 双向绑定 currentIndex
const current = computed({
  get: () => props.currentIndex,
  set: (val) => emit('update:currentIndex', val),
})

const safeCurrentIndex = computed(() => {
  const index = Number(current.value)
  return Number.isNaN(index) ? 0 : Math.max(0, Math.min(index, sections.length - 1))
})

// 滚动锁：true 表示正在手动滚动，Observer 暂不更新
const isScrolling = ref(false)
let scrollLockTimer: ReturnType<typeof setTimeout> | null = null

let observer: IntersectionObserver | null = null

function handleClick(index: number) {
  if (index === safeCurrentIndex.value) return

  const target = document.querySelector(`#${sections[index].id}`)
  const currentEl = document.querySelector(`#${sections[safeCurrentIndex.value].id}`)
  if (!target || !currentEl) return

  const distance = Math.abs(
    target.getBoundingClientRect().top - currentEl.getBoundingClientRect().top
  )
  const duration = Math.min(Math.max(distance / 2, 600), 1500)

  isScrolling.value = true
  if (scrollLockTimer) clearTimeout(scrollLockTimer)

  current.value = index
  emit('navigate', index)

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })

  scrollLockTimer = setTimeout(() => {
    isScrolling.value = false
  }, duration)
}


onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      // 手动滚动期间忽略 Observer
      if (isScrolling.value) return

      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (!visible) return

      const index = sections.findIndex((s) => s.id === visible.target.id)
      if (index !== -1 && index !== current.value) {
        current.value = index
      }
    },
    {
      root: null,
      threshold: 0.5,
    }
  )

  sections.forEach((section) => {
    const el = document.querySelector(`#${section.id}`)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
  if (scrollLockTimer) clearTimeout(scrollLockTimer)
})
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
