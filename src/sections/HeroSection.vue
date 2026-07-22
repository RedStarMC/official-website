<template>
  <section
    id="hero"
    class="relative flex h-screen w-full min-w-[320px] flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <!-- 服务器地址栏：从右滑入 / 向右滑出 -->
    <div
      :class="['absolute right-[3.33%] top-[15.82%] z-20', addressAnim]"
      style="width: clamp(280px, 33.33vw, 480px)"
    >
      <ServerAddressBar
        address="mc.redstarmc.top"
        label="服务器地址"
        style="width: 100%"
      />
    </div>
<!---->
    <!-- 欢迎文字区：从左向右浮入 / 向左滑出 / 从左滑入 -->
    <div
      :class="['absolute left-[4%] bottom-[10%] z-10 flex flex-col', welcomeAnim]"
      style="width: 33%"
    >
      <div class="flex items-center gap-2">
        <span class="h-[4px] w-[clamp(32px,3.33vw,56px)] rounded-full bg-brand-red"></span>
        <span class="h-3 w-3 rounded-full bg-brand-yellow"></span>
      </div>
<!---->
      <div class="flex flex-col leading-[1.1] tracking-[2px]" style="margin-top: 2.5vw">
        <span
          class="font-noto font-bold text-white"
          style="font-size: clamp(1.5rem, 3vw, 2.5rem)"
        >
          欢迎来到
        </span>
        <div class="font-bebas" style="font-size: clamp(2.5rem, 6vw, 5rem)">
          <span class="text-brand-red">RED</span>
          <span class="text-white">STAR</span>
          <span class="text-brand-yellow">MC</span>
        </div>
      </div>
<!---->
      <div class="flex items-start gap-2" style="margin-top: 1vw">
        <p
          class="font-noto leading-[1.56] text-white/89"
          style="font-size: clamp(0.875rem, 1.25vw, 1.125rem); width: 100%"
        >
          一个充满活力的 Minecraft 社区，等待你的加入。在这里，每一个方块都承载着无限可能，每一次冒险都是全新故事的开始。
        </p>
        <span class="h-2 w-2 shrink-0 rounded-full bg-brand-purple" style="margin-top: 2.64vw"></span>
      </div>
<!---->
      <div class="flex items-center gap-2" style="margin-top: 2.5vw">
        <span class="h-[2px] w-[clamp(40px,4.44vw,72px)] rounded-full bg-white/30"></span>
        <span class="h-2 w-2 rounded-full bg-brand-yellow"></span>
      </div>
    </div>
<!---->
    <!-- 滚动提示 -->
    <div
      class="absolute bottom-[3vh] left-0 z-40 w-full"
      :class="scrollAnim"
    >
      <div class="flex w-full justify-center">
        <ScrollIndicator
         :icon-src="scrollIcon"
          class="cursor-pointer"
          @click="emit('next')"
        />
      </div>
    </div>

<!---->
    <!-- 标签浮层 -->
    <div
      class="absolute right-[20%] bottom-[3%] z-[5]"
      style="width: 24%; max-width: 360px"
    >
      <img
        :src="tagsDeco"
        alt=""
        class="pointer-events-none absolute left-[5%] top-[1vw] z-0 w-[88.14%]"
        :style="{ aspectRatio: '1189 / 1169' }"
      />
<!---->
      <div
        class="relative z-10 w-[91.18%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${tagsBg})`, aspectRatio: '1230 / 1209' }"
      >
        <div
          class="absolute left-[16.26%] top-[50.46%] flex gap-[clamp(24px,3.54vw,60px)]"
        >
          <div
            v-for="(tag, i) in tags"
            :key="tag.label"
            :class="['flex items-center rounded-full border border-l border-r-0 border-white/20 bg-black/50', tagsAnim]"
            :style="{
              height: 'clamp(28px, 2.64vw, 42px)',
              width: 'clamp(72px, 6.94vw, 110px)',
              paddingLeft: 'clamp(10px, 1.18vw, 20px)',
              animationDelay: mode === 'initial' ? `${0.4 + i * 0.1}s` : '0s',
            }"
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
<!---->

        </div>
      </div>
    </div>
  
</section>


</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import ServerAddressBar from '../components/ServerAddressBar.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

const props = defineProps<{
  currentIndex: number
}>()

const emit = defineEmits<{
  next: []
  navigate: [index: number]
}>()

// initial: 首次开屏 | enter: 从其它页回到首页 | leave: 从首页离开 | idle: 其它情况
type HeroMode = 'initial' | 'enter' | 'leave' | 'idle'

// 在 setup 中直接设置初始 mode，避免 onMounted 与 watch 的竞态
const mode = ref<HeroMode>(props.currentIndex === 0 ? 'initial' : 'idle')

watch(
  () => props.currentIndex,
  (now, prev) => {
    // 首次触发（prev === undefined）时跳过，防止覆盖 initial 动画
    if (prev === undefined) return

    if (now === 0) {
      mode.value = prev === 0 ? 'initial' : 'enter'
    } else if (prev === 0) {
      mode.value = 'leave'
    } else {
      mode.value = 'idle'
    }
  }
)

const addressAnim = computed(() => {
  if (mode.value === 'leave') return 'animate-slide-out-right'
  if (mode.value === 'enter') return 'animate-slide-in-right'
  if (mode.value === 'idle') return 'opacity-0'
  return 'animate-slide-right'
})

const welcomeAnim = computed(() => {
  if (mode.value === 'leave') return 'animate-slide-out-left'
  if (mode.value === 'enter') return 'animate-slide-in-left'
  if (mode.value === 'idle') return 'opacity-0'
  return 'animate-float-left'
})

const tagsAnim = computed(() => {
  if (mode.value === 'leave') return 'animate-tag-fade-out'
  if (mode.value === 'idle') return 'opacity-0'
  return 'animate-tag-pop'
})

const scrollAnim = computed(() => {
  if (mode.value === 'leave') return 'animate-fade-out'
  if (mode.value === 'enter') return 'animate-fade-in-bounce'
  if (mode.value === 'idle') return 'opacity-0'
  return 'animate-bounce-loop'
})



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

<style scoped>
/* ===== 原有动画 ===== */
@keyframes floatFromLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes tagPop {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  70% {
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceLoop {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-12px);
  }
}


/* ===== 新增：滑出 / 滑入动画 ===== */
@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes tagFadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}


/* ===== 动画类 ===== */
.animate-float-left {
  animation: floatFromLeft 0.8s ease-out both;
}

.animate-tag-pop {
  animation: tagPop 0.5s ease-out both;
}


.animate-tag-pop-enter {
  animation: tagPop 0.5s ease-out both;
}


.animate-slide-right {
  animation: slideFromRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.animate-bounce-loop {
  animation: bounceLoop 1.5s ease-in-out infinite;
}

/* 滑出 */
.animate-slide-out-right {
  animation: slideOutRight 0.5s ease-in forwards;
}

.animate-slide-out-left {
  animation: slideOutLeft 0.5s ease-in forwards;
}

.animate-tag-fade-out {
  animation: tagFadeOut 0.4s ease-in forwards;
}

/* 滑入 */
.animate-slide-in-right {
  animation: slideInRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}


.animate-fade-out {
  animation: fadeOut 0.4s ease-in forwards;
}

.animate-fade-in-bounce {
  animation: fadeIn 0.5s ease-out forwards, bounceLoop 1.5s ease-in-out 0.5s infinite;
}

</style>
