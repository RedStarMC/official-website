<template>
  <div class="w-full bg-white">
    <NavBar @navigate="scrollToSection" />
    <main ref="containerRef" class="snap-container">
      <HeroSection @next="scrollToSection(1)" />
      <CommunitySection @next="scrollToSection(2)" @prev="scrollToSection(0)" />
      <ArchitectureSection @next="scrollToSection(3)" @prev="scrollToSection(1)" />
      <StaffSection @prev="scrollToSection(2)" @top="scrollToSection(0)" />
      <FooterSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '../../components/NavBar.vue'
import HeroSection from '../../sections/HeroSection.vue'
import CommunitySection from '../../sections/CommunitySection.vue'
import ArchitectureSection from '../../sections/ArchitectureSection.vue'
import StaffSection from '../../sections/StaffSection.vue'
import FooterSection from '../../sections/FooterSection.vue'

const containerRef = ref<HTMLElement | null>(null)
const currentSection = ref(0)
const sections = ['hero', 'community', 'architecture', 'staff', 'footer']
const isScrolling = ref(false)
const SCROLL_COOLDOWN = 300 // ms，缩短冷却时间

// 计算某 section 在 container 内的 scrollTop
function getSectionScrollTop(index: number): number {
  const el = document.getElementById(sections[index])
  const container = containerRef.value
  if (!el || !container) return 0
  return el.offsetTop - (container as HTMLElement).offsetTop
}

function scrollToSection(index: number) {
  if (isScrolling.value) return
  if (index < 0 || index >= sections.length) return
  
  isScrolling.value = true
  currentSection.value = index
  
  const container = containerRef.value
  if (container) {
    ;(container as HTMLElement).scrollTo({
      top: getSectionScrollTop(index),
      behavior: 'smooth'
    })
  }
  
  setTimeout(() => {
    isScrolling.value = false
  }, SCROLL_COOLDOWN)
}

function scrollToNext() {
  if (currentSection.value >= sections.length - 1) return
  scrollToSection(currentSection.value + 1)
}

function scrollToPrev() {
  if (currentSection.value <= 0) return
  scrollToSection(currentSection.value - 1)
}

// Wheel 事件：只有滚动幅度足够大时才翻页，保留小幅度滚动的原生行为
const WHEEL_THRESHOLD = 40 // 滚动幅度阈值
let wheelAccumulated = 0

function handleWheel(e: WheelEvent) {
  // 不阻止默认行为，让浏览器保持滚动惯性
  if (isScrolling.value) return
  
  wheelAccumulated += e.deltaY
  
  if (Math.abs(wheelAccumulated) >= WHEEL_THRESHOLD) {
    if (wheelAccumulated > 0) {
      scrollToNext()
    } else {
      scrollToPrev()
    }
    wheelAccumulated = 0
  }
}

// 键盘事件处理
function handleKeydown(e: KeyboardEvent) {
  if (isScrolling.value) return
  
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    scrollToNext()
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    scrollToPrev()
  }
}

// Touch 事件处理（移动端）
let touchStartY = 0
function handleTouchStart(e: TouchEvent) {
  touchStartY = e.touches[0].clientY
}
function handleTouchEnd(e: TouchEvent) {
  if (isScrolling.value) return
  const touchEndY = e.changedTouches[0].clientY
  const diff = touchStartY - touchEndY
  
  if (Math.abs(diff) > 80) { // 增加触摸阈值，减少误触
    if (diff > 0) {
      scrollToNext()
    } else {
      scrollToPrev()
    }
  }
}

// IntersectionObserver 监听所有 section 位置
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = sections.indexOf(entry.target.id)
      if (index !== -1) {
        currentSection.value = index
      }
    }
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  const container = containerRef.value
  if (container) {
    container.addEventListener('wheel', handleWheel, { passive: true }) // passive: true，不阻止默认行为
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  window.addEventListener('keydown', handleKeydown)

  observer = new IntersectionObserver(observerCallback, {
    root: container,
    rootMargin: '-30% 0px -30% 0px', // 稍微放宽触发区域
    threshold: 0,
  })

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  const container = containerRef.value
  if (container) {
    container.removeEventListener('wheel', handleWheel)
    container.removeEventListener('touchstart', handleTouchStart)
    container.removeEventListener('touchend', handleTouchEnd)
  }
  window.removeEventListener('keydown', handleKeydown)
  observer?.disconnect()
})
</script>

<style>
.snap-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-container > section,
.snap-container > footer {
  scroll-snap-align: start;
  /* 移除 scroll-snap-stop: always，允许浏览器在快速滚动时跳过中间屏 */
}
</style>
