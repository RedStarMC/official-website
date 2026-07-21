<template>
  <section
      id="architecture"
      class="relative flex h-screen w-full min-w-[320px] flex-col overflow-hidden"
      :style="{ background: 'linear-gradient(180deg, #1a1a2e 0%, #003972 77.86%, #003972 100%)' }"
  >
    <!-- 背景大图 -->
    <img
        :src="bgImage"
        alt=""
        class="pointer-events-none absolute object-cover"
        :style="{
        left: '-41.46%',
        top: '-61.62%',
        width: '115.49%',
        height: '157.81%',
      }"
    />

    <!-- 头部 -->
    <div class="absolute z-10" style="left: 3.33%; top: 2.83%; width: 97.08%;">
      <div class="flex items-center" style="height: clamp(48px, 4.44vh, 64px);">
        <!-- 图标容器 -->
        <div
            class="flex items-center justify-center rounded-xl border border-white/20 bg-brand-purple/20"
            style="width: clamp(32px, 3.33vw, 48px); height: clamp(32px, 3.33vw, 48px);"
        >
          <img :src="headerIcon" alt="arch" style="width: clamp(16px, 1.67vw, 24px); height: clamp(16px, 1.67vw, 24px);" />
        </div>
        <!-- 标题 + 副标题 -->
        <div class="flex flex-col" style="margin-left: clamp(12px, 1.11vw, 16px);">
          <span
              class="font-space font-bold text-brand-gold whitespace-nowrap"
              style="font-size: clamp(1.5rem, 2.5vw, 2.25rem); line-height: clamp(2rem, 3.47vh, 2.5rem); letter-spacing: -0.03em;"
          >
            服务器架构
          </span>
          <span
              class="font-jetbrains text-brand-purple/60 whitespace-nowrap"
              style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); line-height: clamp(1rem, 1.39vh, 1.25rem); letter-spacing: 0.07em; margin-top: clamp(2px, 0.14vw, 4px);"
          >
            SERVER ARCHITECTURE / TOPOLOGY
          </span>
        </div>
      </div>
    </div>

    <!-- 图例 -->
    <div class="absolute z-10 flex flex-col" style="left: 75%; top: 12%; width: 20%;">
      <!-- 不可访问 -->
      <div class="flex items-center gap-2" style="height: clamp(28px, 2.95vh, 43px);">
        <span class="rounded-full bg-[#e63946] shrink-0" style="width: clamp(7px, 0.49vw, 10px); height: clamp(8px, 0.83vw, 12px);"></span>
        <div class="flex flex-col">
          <span
              class="font-inter text-brand-gold/80 whitespace-nowrap"
              style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); line-height: 1.25; letter-spacing: 0.36em;"
          >
            不可访问
          </span>
          <span
              class="font-inter text-brand-gold/40 whitespace-nowrap"
              style="font-size: clamp(0.625rem, 0.76vw, 0.6875rem); line-height: 1.27; letter-spacing: 0.45em; margin-top: clamp(2px, 0.14vw, 4px);"
          >
            需联系管理组，平常不开
          </span>
        </div>
      </div>
      <!-- 已归档 -->
      <div class="flex items-center gap-2" style="height: clamp(28px, 2.95vh, 43px);">
        <span class="rounded-full bg-[#6b7280] shrink-0" style="width: clamp(7px, 0.49vw, 10px); height: clamp(8px, 0.83vw, 12px);"></span>
        <div class="flex flex-col">
          <span
              class="font-inter text-brand-gold/80 whitespace-nowrap"
              style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); line-height: 1.25; letter-spacing: 0.36em;"
          >
            已归档
          </span>
          <span
              class="font-inter text-brand-gold/40 whitespace-nowrap"
              style="font-size: clamp(0.625rem, 0.76vw, 0.6875rem); line-height: 1.27; letter-spacing: 0.45em; margin-top: clamp(2px, 0.14vw, 4px);"
          >
            仅此服老玩家可以进入
          </span>
        </div>
      </div>
      <!-- 在线 -->
      <div class="flex items-center gap-2" style="height: clamp(28px, 2.88vh, 42px);">
        <span class="rounded-full bg-brand-green shrink-0" style="width: clamp(7px, 0.49vw, 10px); height: clamp(8px, 0.76vw, 11px);"></span>
        <div class="flex flex-col">
          <span
              class="font-inter text-brand-gold/80 whitespace-nowrap"
              style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); line-height: 1.25; letter-spacing: 0.36em;"
          >
            在线
          </span>
          <span
              class="font-inter text-brand-gold/40 whitespace-nowrap"
              style="font-size: clamp(0.625rem, 0.76vw, 0.6875rem); line-height: 1.27; letter-spacing: 0.45em; margin-top: clamp(2px, 0.14vw, 4px);"
          >
            服务器正常运行，可直接进入
          </span>
        </div>
      </div>
    </div>

    <!-- 6 张子服卡片 -->
    <!-- 登录服 -->
    <div class="absolute z-0" style="left: 40%; top: 8%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="登录服" id="login" role="用于账号管理和反压测的服务器" :port="1234" show-port status="offline" :status-icon-src="loginIcon" style="width: 100%" />
    </div>
    <!-- 主城服 -->
    <div class="absolute z-1" style="left: 40%; top: 35%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="主城服" id="hub" role="跳转各子服的中转站" :port="25565" show-port status="online" :status-icon-src="hubIcon" style="width: 100%" />
    </div>
    <!-- 生存服 -->
    <div class="absolute z-4" style="left: 5%; top: 60%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="生存服" id="survival" role="原版生存 1.20.x" :port="25566" show-port status="online" :status-icon-src="survivalIcon" style="width: 100%" />
    </div>
    <!-- 创造服 -->
    <div class="absolute z-7" style="left: 30%; top: 60%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="创造服" id="creative" role="无限创造 建筑孵化" :port="25567" show-port status="online" :status-icon-src="creativeIcon" style="width: 100%" />
    </div>
    <!-- 小游戏服 -->
    <div class="absolute z-8" style="left: 53.89%; top: 60%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="小游戏服" id="minigame" role="内含数十款自制小游戏" :port="25568" show-port status="online" :status-icon-src="minigameIcon" style="width: 100%" />
    </div>
    <!-- 归档服 -->
    <div class="absolute z-9" style="left: 76.74%; top: 60%; width: clamp(180px, 20vw, 288px);">
      <ServerCard name="归档服" id="archived" role="老玩家可以进入" :port="25569" show-port status="archived" :status-icon-src="archivedIcon" style="width: 100%" />
    </div>

    <!-- 连接线装饰图 -->
    <img
        :src="connector1" alt=""
        class="pointer-events-none absolute z-5"
        :style="{ left: '46.53%', top: '27.25%', width: '5.07%', aspectRatio: '73 / 60' }"
    />
    <img
        :src="connector2" alt=""
        class="pointer-events-none absolute z-17"
        :style="{ left: '17.5%', top: '26.76%', width: '37.22%', aspectRatio: '536 / 116' }"
    />
    <img
        :src="connector3" alt=""
        class="pointer-events-none absolute z-3"
        :style="{ left: '42.64%', top: '34.28%', width: '12.08%', aspectRatio: '174 / 169' }"
    />
    <img
        :src="connector4" alt=""
        class="pointer-events-none absolute z-18"
        :style="{ left: '54.44%', top: '39.55%', width: '12.57%', aspectRatio: '181 / 153' }"
    />
    <img
        :src="connector5" alt=""
        class="pointer-events-none absolute z-2"
        :style="{ left: '54.51%', top: '33.89%', width: '35.76%', aspectRatio: '515 / 100' }"
    />


    <!-- 滚动提示 -->
    <div class="absolute z-10 cursor-pointer" style="left: 50%; bottom: 5vh; transform: translateX(-50%);" @click="emit('next')">
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServerCard from '../components/ServerCard.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'


defineProps<{
  currentIndex: number
}>()

const emit = defineEmits<{
  next: []
  prev: []
  navigate: [index: number]
}>()

const bgImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949253850/75a0/8bd9/1d4a/87af4a345b5db191e820f6dfaaabdd13.png'
const headerIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902109267/9dc7/03a5/f124/95f6a783a53e9ace06c7a22ed9395bed.png'
const loginIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902109149/2c0f/f36a/2edf/20c282c0448f4a1db93aed4369f2cd67.png'
const hubIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902111096/282e/b5c2/31f2/edd7c9b546b828f37f3d3b28a0243d7b.png'
const survivalIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902111096/282e/b5c2/31f2/edd7c9b546b828f37f3d3b28a0243d7b.png'
const creativeIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902111096/282e/b5c2/31f2/edd7c9b546b828f37f3d3b28a0243d7b.png'
const minigameIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902111096/282e/b5c2/31f2/edd7c9b546b828f37f3d3b28a0243d7b.png'
const archivedIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902111096/282e/b5c2/31f2/edd7c9b546b828f37f3d3b28a0243d7b.png'
const scrollIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103878/960d/f0c6/06b7/58cd0a7c4894408ebe3fcad8f8f33fd9.png'

const connector1 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949255828/ecdd/cee5/051c/3cb74a93b73ef1bc8657444096457769.png'
const connector2 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949251680/306d/7528/73f6/784a0d049a39eea4ae5461d76c59b2ec.png'
const connector3 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949252402/b588/15e0/242a/6fbb1151ec9e3398406f5b567dce466e.png'
const connector4 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949253244/2bc6/ba2c/5f01/e929de9164d57ad2bd3883ef59693860.png'
const connector5 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80949253232/104f/0001/f979/675902dc2e401e6378740df28c20db18.png'
</script>

<style scoped></style>