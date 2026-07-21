<template>
  <section
    id="hero"
    class="relative flex h-screen w-full min-w-[320px] flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- 服务器地址栏 -->
    <div
      class="absolute right-[3.33%] top-[15.82%] z-20"
      style="width: clamp(280px, 33.33vw, 480px)"
    >
      <ServerAddressBar
        address="play.redstarmc.net"
        label="服务器地址"
        style="width: 100%"
      />
    </div>

<!---->
    <!-- 欢迎文字区：左下，位置优化 -->
    <div class="absolute left-[4%] bottom-[14%] z-10 flex flex-col" style="width: 33%;">
  <!-- 顶部装饰：红线 + 黄点 -->
  <div class="flex items-center gap-2">
    <span class="h-[4px] w-[clamp(32px,3.33vw,56px)] rounded-full bg-brand-red"></span>
    <span class="h-3 w-3 rounded-full bg-brand-yellow"></span>
  </div>

  <!-- 主标题：欢迎来到 + REDSTARMC -->
  <div class="flex flex-col leading-[1.1] tracking-[2px]" style="margin-top: 2.5vw;">
    <span
      class="font-noto font-bold text-white"
      style="font-size: clamp(1.5rem, 3vw, 2.5rem)"
    >
      欢迎来到
    </span>
    <div
      class="font-bebas"
      style="font-size: clamp(2.5rem, 6vw, 5rem)"
    >
      <span class="text-brand-red">RED</span>
      <span class="text-white">STAR</span>
      <span class="text-brand-yellow">MC</span>
    </div>
  </div>

  <!-- 描述段落 + 紫色装饰点 -->
  <div class="flex items-start gap-2" style="margin-top: 1vw;">
    <p
      class="font-noto leading-[1.56] text-white/89"
      style="font-size: clamp(0.875rem, 1.25vw, 1.125rem); width: 100%;"
    >
      一个充满活力的 Minecraft 社区，等待你的加入。在这里，每一个方块都承载着无限可能，每一次冒险都是全新故事的开始。
    </p>
    <span class="h-2 w-2 shrink-0 rounded-full bg-brand-purple" style="margin-top: 2.64vw;"></span>
  </div>

  <!-- 底部装饰：白线 + 黄点 -->
  <div class="flex items-center gap-2" style="margin-top: 2.5vw;">
    <span class="h-[2px] w-[clamp(40px,4.44vw,72px)] rounded-full bg-white/30"></span>
    <span class="h-2 w-2 rounded-full bg-brand-yellow"></span>
  </div>
</div>
<!---->
    <!-- 滚动提示：确保居中，不被遮挡 -->
    <div
      class="absolute bottom-[5vh] left-1/2 z-40 -translate-x-1/2 cursor-pointer"
      @click="emit('next')"
    >
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>
<!---->
    <!-- 标签浮层：右下，稍微收小 -->
    <div class="absolute right-[20%] bottom-[5%] z-[5]" style="width: 24%; max-width: 360px;">
      <!-- 背景图容器 -->
      <div
        class="relative w-[91.18%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${tagsBg})`, aspectRatio: '1230 / 1209' }"
      >
        <!-- 标签行 -->
        <div
          class="absolute left-[16.26%] top-[50.46%] flex gap-[clamp(24px,3.54vw,60px)]"
        >
          <div
            v-for="tag in tags"
            :key="tag.label"
            class="flex items-center rounded-full border border-l border-r-0 border-white/20 bg-black/50"
            style="
              height: clamp(28px, 2.64vw, 42px);
              width: clamp(72px, 6.94vw, 110px);
              padding-left: clamp(10px, 1.18vw, 20px);
            "
          >
            <img :src="tag.iconSrc" :alt="tag.label" class="h-4 w-4" />
            <span
              class="font-outfit leading-5 text-white"
              :style="{
                marginLeft: 'clamp(10px, 1.18vw, 20px)',
                fontSize: 'clamp(0.75rem, 0.97vw, 0.875rem)',
                fontWeight: tag.fontWeight,
                letterSpacing: tag.letterSpacing + 'em',
              }"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>
      <!-- 装饰图 -->
      <img
        :src="tagsDeco"
        alt=""
        class="absolute w-[88.14%]"
        :style="{ left: '5%', top: '1vw', aspectRatio: '1189 / 1169', pointerEvents: 'none' }"
      />
    </div>
  
</section>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import ServerAddressBar from '../components/ServerAddressBar.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

defineProps<{
  currentIndex: number
}>()

const emit = defineEmits<{
  next: []
  navigate: [index: number]
}>()

const heroBg =
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902100193/905e/079a/3143/9b5f2d60778e05a5b5a6b8c674770695.png'
const scrollIcon =
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103878/960d/f0c6/06b7/58cd0a7c4894408ebe3fcad8f8f33fd9.png'
const tagsBg =
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102451/7a43/7562/2897/bb2b5a5bee84823bd78640435bd4ca53.png'
const tagsDeco =
  'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902101220/b04c/fa50/26fc/d329906b4d6b7386faf6cb767eb913c6.png'

const tags = ref([
  {
    label: '公益',
    iconSrc:
      'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102498/4ca8/d601/1c4f/a880aeb1cf7f924ac66e3c702bb6ca91.png',
    fontWeight: 700,
    letterSpacing: 0.36,
  },
  {
    label: '跨版本',
    iconSrc:
      'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902102545/b4c1/5b42/a43b/45bc5ad54ddc1ffa5e904a8672a57364.png',
    fontWeight: 600,
    letterSpacing: 0.07,
  },
  {
    label: '防熊',
    iconSrc:
      'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103415/48ab/a54b/7f77/7d2532aa93803b0bba213bcfe337af51.png',
    fontWeight: 700,
    letterSpacing: 0.36,
  },
  {
    label: '养老',
    iconSrc:
      'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902101466/ae31/145c/441b/ea38210c08a19e46f039b2bfc7dbde9d.png',
    fontWeight: 700,
    letterSpacing: 0.36,
  },
])
</script>

<style scoped></style>
