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
const SCROLL_COOLDOWN = 800 // ms

function scrollToSection(index: number) {
  if (isScrolling.value) return
  if (index < 0 || index >= sections.length) return
  
  isScrolling.value = true
  currentSection.value = index
  
  const el = document.getElementById(sections[index])
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
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

// Wheel 事件处理
function handleWheel(e: WheelEvent) {
  e.preventDefault()
  if (isScrolling.value) return
  
  if (e.deltaY > 0) {
    scrollToNext()
  } else {
    scrollToPrev()
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
  
  if (Math.abs(diff) > 50) {
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
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  window.addEventListener('keydown', handleKeydown)

  // IntersectionObserver 配置
  observer = new IntersectionObserver(observerCallback, {
    root: container,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0,
  })

  // 观察所有 section
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
  scroll-snap-stop: always;
}
</style>
