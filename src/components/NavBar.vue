<template>
  <nav
    class="fixed top-0 left-0 z-50 w-full"
    style="
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.95) 0%,
        rgba(255, 255, 255, 0.7) 45%,
        rgba(255, 255, 255, 0) 100%
      );
    "
  >
    <div
      class="flex h-[90px] w-full items-center justify-between"
      style="padding-left: 5vw; padding-right: 5vw;"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red shadow-sm"
        >
          <img
            src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902098673/4055/0d4c/e047/80908cf29da28a539c89ccc224d02549.png"
            alt="logo"
            class="h-7 w-7"
          />
        </div>
        <div
          class="flex items-center font-bebas text-[26px] tracking-[1px] text-brand-dark"
          style="line-height: 1;"
        >
          <span class="text-brand-red">RED</span>
          <span class="text-brand-yellow">STAR</span>
          <span class="text-brand-dark">MC</span>
        </div>
      </a>

      <div class="flex items-center gap-8 lg:gap-10">
        <!-- 导航链接 -->
        <ul class="hidden md:flex items-center gap-8 lg:gap-9">
          <li v-for="(item, index) in navItems" :key="item.id">
            <a
              href="#"
              class="animate-nav-item group relative flex flex-col items-center font-outfit text-[15px] leading-5 transition-colors duration-300"
              :class="
                activeId === item.id
                  ? 'font-bold text-brand-red'
                  : 'font-semibold text-brand-dark/80 hover:text-brand-red'
              "
              :style="{ animationDelay: `${0.2 + index * 0.08}s` }"
              @click.prevent="handleNavClick(index)"
            >
              <span>{{ item.label }}</span>
              <span
                class="mt-[4px] h-[3px] w-5 rounded-full bg-brand-red transition-all duration-300"
                :class="
                  activeId === item.id
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                "
              ></span>
            </a>
          </li>
        </ul>
<!---->
        <!-- 分隔线 -->
        <div class="hidden md:block h-5 w-px bg-brand-dark/15">
</div>



        <!-- 图标按钮 -->
        <div class="flex items-center gap-3">
          <button
            v-for="(icon, i) in iconButtons"
            :key="i"
            class="animate-icon-pop flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition duration-300 hover:bg-black/10 hover:scale-105 active:scale-95"
            :style="{ animationDelay: `${0.5 + i * 0.08}s` }"
          >
            <img :src="icon.src" :alt="icon.alt" class="h-5 w-5" />
          </button>
        </div>
      </div>
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

const emit = defineEmits<{
  navigate: [index: number]
}>()

function handleNavClick(index: number) {
  emit('navigate', index)
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

<style scoped>
@keyframes navItemFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconPop {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-nav-item {
  animation: navItemFadeIn 0.5s ease-out both;
}

.animate-icon-pop {
  animation: iconPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
</style>
