<template>
  <nav
    class="fixed top-0 left-0 z-50 flex h-[119px] w-full items-center justify-between px-[54px]"
    style="background: linear-gradient(180deg, var(--color-brand-bg) 0%, rgba(232,230,245,0.33) 52.14%, rgba(255,255,255,0) 100%)"
  >
    <!-- Logo -->
    <div class="flex items-center gap-[9px]">
      <div class="flex h-[82px] w-[82px] items-center justify-center rounded-2xl bg-brand-red">
        <img
          src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902098673/4055/0d4c/e047/80908cf29da28a539c89ccc224d02549.png"
          alt="logo"
          class="h-12 w-12"
        />
      </div>
      <div class="flex items-center font-bebas text-[36px] leading-[40px] tracking-[2px] text-brand-dark">
        <span class="text-brand-red">RED</span>
        <span class="text-brand-yellow">STAR</span>
        <span class="text-brand-dark">MC</span>
      </div>
    </div>

    <!-- 导航链接（居中） -->
    <div class="flex flex-1 justify-center gap-[51px]">
      <a
        v-for="(item, index) in navItems"
        :key="item.id"
        href="#"
        class="flex flex-col items-center font-outfit text-sm leading-5 transition-colors duration-300"
        :class="activeId === item.id ? 'font-bold text-brand-red' : 'font-semibold text-white hover:text-brand-red/80'"
        @click.prevent="handleNavClick(index)"
      >
        <span>{{ item.label }}</span>
        <span
          class="mt-[3px] h-[2px] w-[29px] bg-brand-red transition-all duration-300"
          :class="activeId === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
        ></span>
      </a>
    </div>

    <!-- 图标按钮 -->
    <div class="flex items-center gap-3">
      <button
        v-for="(icon, i) in iconButtons"
        :key="i"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 transition hover:bg-white/50"
      >
        <img :src="icon.src" :alt="icon.alt" class="h-5 w-5" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavItem {
  label: string
  id: string
}

const navItems = ref<NavItem[]>([
  { label: '首页', id: 'hero' },
  { label: '详情', id: 'community' },
  { label: '架构', id: 'architecture' },
  { label: '管理组', id: 'staff' },
])

const iconButtons = [
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102140/69bf/7b4a/ccd1/f46f5de0c1689352b0d10c20a6ec8936.png',
    alt: 'music',
  },
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102959/1a85/6c4f/bd71/f4ac03281327948be4363e45690afba5.png',
    alt: 'menu',
  },
]

const activeId = ref('hero')

function handleNavClick(index: number) {
  const sectionIds = ['hero', 'community', 'architecture', 'staff', 'footer']
  const el = document.getElementById(sectionIds[index])
  const container = document.querySelector('.snap-container')
  if (el && container) {
    ;(container as HTMLElement).scrollTo({
      top: el.offsetTop - (container as HTMLElement).offsetTop,
      behavior: 'smooth'
    })
  }
}

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeId.value = entry.target.id === 'footer' ? 'staff' : entry.target.id
    }
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0,
  })

  navItems.value.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer?.observe(el)
  })

  const footerEl = document.getElementById('footer')
  if (footerEl) observer?.observe(footerEl)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped></style>
