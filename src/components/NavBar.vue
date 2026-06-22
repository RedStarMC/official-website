<template>
  <nav class="relative z-10 flex h-[119px] w-full items-start px-[54px] pt-[37px]"
       style="background: linear-gradient(180deg, #e8e6f5 0%, rgba(232,230,245,0.33) 52.14%, rgba(255,255,255,0) 100%)">
    <!-- Logo block -->
    <div class="flex h-[82px] w-[243px] items-start">
      <div class="flex h-[82px] w-[82px] items-center justify-center rounded-2xl bg-brand-red">
        <img
          src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902098673/4055/0d4c/e047/80908cf29da28a539c89ccc224d02549.png"
          alt="logo"
          class="h-12 w-12" />
      </div>
      <div class="ml-[9px] mt-7 flex items-center font-bebas text-[36px] leading-[40px] tracking-[2px] text-brand-dark">
        <span class="text-brand-dark">RED</span>
        <span class="-ml-[59px] text-brand-red">STAR</span>
        <span class="ml-[56px] text-brand-dark">MC</span>
      </div>
    </div>

    <!-- Nav links -->
    <div class="mt-[50px] ml-[574px] flex gap-[51px]">
      <a
        v-for="item in navItems"
        :key="item.id"
        href="#"
        class="flex flex-col items-start font-outfit text-sm leading-5"
        :class="item.isActive ? 'font-bold text-brand-red' : 'font-semibold text-white'"
        @click.prevent="scrollTo(item.id)"
      >
        <span>{{ item.label }}</span>
        <span v-if="item.isActive" class="mt-[3px] h-[2px] w-[29px] bg-brand-red"></span>
      </a>
    </div>

    <!-- Icon buttons -->
    <button
      v-for="(icon, i) in iconButtons"
      :key="i"
      class="mt-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/30 last:ml-3"
    >
      <img :src="icon.src" :alt="icon.alt" class="h-5 w-5" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  label: string
  id: string
  isActive: boolean
}

const navItems = ref<NavItem[]>([
  { label: '首页', id: 'hero', isActive: true },
  { label: '详情', id: 'community', isActive: false },
  { label: '架构', id: 'architecture', isActive: false },
  { label: '管理组', id: 'staff', isActive: false },
  { label: '画廊', id: 'gallery', isActive: false },
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

function scrollTo(sectionId: string) {
  navItems.value.forEach((item) => {
    item.isActive = item.id === sectionId
  })
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped></style>
