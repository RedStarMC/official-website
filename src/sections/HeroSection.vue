<template>
  <section
    id="hero"
    class="relative h-[1024px] w-[1440px] overflow-hidden bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- 顶部导航 -->
    <NavBar />

    <!-- 服务器地址栏：右上角 -->
    <div class="absolute right-[10px] top-[43px] z-20">
      <ServerAddressBar />
    </div>

    <!-- 页面指示点：右侧 -->
    <div class="absolute right-[49px] top-[229px] z-10 flex flex-col items-center gap-[10px]">
      <span class="h-[13px] w-[13px] rounded-full border-2 border-brand-red bg-brand-red"></span>
      <span class="h-[10px] w-[10px] rounded-full border-2 border-white/60 bg-white/40"></span>
    </div>

    <!-- 欢迎文字区：mt-120 ml-54 (512x302) -->
    <div class="absolute left-[54px] top-[120px] z-10 flex w-[512px] flex-col">
      <!-- 顶部装饰：红线 + 黄点 -->
      <div class="flex items-center">
        <span class="h-1 w-12 rounded-full bg-brand-red"></span>
        <span class="ml-2 h-3 w-3 rounded-full bg-brand-yellow"></span>
      </div>

      <!-- 多色大标题：512x144 mt-18 -->
      <div class="relative mt-[18px] flex h-[144px] w-[512px] items-center">
        <!-- RED: 90x93, mt-61 z-0 -->
        <span class="font-bebas text-[72px] leading-[108px] tracking-[2px] text-brand-red">RED</span>
        <!-- 欢迎来到: 360x108 z-3 -->
        <span class="font-bebas text-[72px] leading-[108px] tracking-[2px] text-white">欢迎来到</span>
        <!-- STAR: 115x93 ml--270 mt-61 z-1 -->
        <span class="-ml-[270px] font-bebas text-[72px] leading-[108px] tracking-[2px] text-white">STAR</span>
        <!-- MC: 70x93 mt-61 z-2 -->
        <span class="font-bebas text-[72px] leading-[108px] tracking-[2px] text-brand-yellow">MC</span>
      </div>

      <!-- 描述段落 + 紫点 -->
      <div class="mt-[18px] flex w-[464px] items-start">
        <span class="font-noto text-[18px] leading-[28px] text-white/89">
          一个充满活力的 Minecraft 社区，等待你的加入。在这<br />里，每一个方块都承载着无限可能，每一次冒险都是全<br />新故事的开始。
        </span>
        <span class="ml-2 mt-[38px] h-2 w-2 shrink-0 rounded-full bg-brand-purple"></span>
      </div>

      <!-- 底部装饰：白线 + 黄点 -->
      <div class="mt-[18px] flex items-center">
        <span class="h-[2px] w-16 rounded-full bg-white/30"></span>
        <span class="ml-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
      </div>
    </div>

    <!-- 滚动提示：底部居中偏左 (ml-687) -->
    <div class="absolute bottom-0 left-[687px] z-10">
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>

    <!-- 标签浮层 -->
    <div class="absolute left-[595px] top-[172px] z-[5] flex h-[1270px] w-[1349px] flex-col">
      <div
        class="relative ml-[38px] mt-[-7px] h-[1209px] w-[1230px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${tagsBg})` }"
      >
        <div class="ml-[200px] mt-[731px] flex gap-[51px]">
          <div
            v-for="tag in tags"
            :key="tag.label"
            class="flex h-[38px] w-[100px] items-center rounded-full border border-l border-r-0 border-white/20 bg-black/50"
          >
            <img :src="tag.iconSrc" :alt="tag.label" class="ml-[17px] h-4 w-4" />
            <span class="ml-[17px] font-outfit text-sm font-bold leading-5 tracking-[5px] text-white">
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
      <img
        :src="tagsDeco"
        alt=""
        class="relative ml-[139px] mt-[-1192px] h-[1169px] w-[1189px] z-0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import ServerAddressBar from '../components/ServerAddressBar.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

const heroBg = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902100193/905e/079a/3143/9b5f2d60778e05a5b5a6b8c674770695.png'
const scrollIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103878/960d/f0c6/06b7/58cd0a7c4894408ebe3fcad8f8f33fd9.png'
const tagsBg = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102451/7a43/7562/2897/bb2b5a5bee84823bd78640435bd4ca53.png'
const tagsDeco = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902101220/b04c/fa50/26fc/d329906b4d6b7386faf6cb767eb913c6.png'

const tags = ref([
  { label: '公益', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102498/4ca8/d601/1c4f/a880aeb1cf7f924ac66e3c702bb6ca91.png' },
  { label: '跨版本', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102545/b4c1/5b42/a43b/45bc5ad54ddc1ffa5e904a8672a57364.png' },
  { label: '防熊', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103415/48ab/a54b/7f77/7d2532aa93803b0bba213bcfe337af51.png' },
  { label: '养老', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902101466/ae31/145c/441b/ea38210c08a19e46f039b2bfc7dbde9d.png' },
])
</script>

<style scoped></style>
