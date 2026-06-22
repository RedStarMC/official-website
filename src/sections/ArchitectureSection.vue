<template>
  <section
    id="architecture"
    class="relative h-[1024px] w-[1440px] overflow-hidden"
    :style="{ background: 'linear-gradient(180deg, #1a1a2e 0%, #003972 77.86%, #003972 100%)' }"
  >
    <!-- 背景大图：1663x1616 mt--631 ml--597 -->
    <img
      :src="bgImage"
      alt=""
      class="pointer-events-none absolute left-[-597px] top-[-631px] h-[1616px] w-[1663px] object-cover"
    />

    <!-- 头部：mt-29 ml-48 1398x93 -->
    <div class="absolute left-[48px] top-[29px] z-10 w-[1398px]">
      <!-- 标题行 -->
      <div class="flex h-16 items-center">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-brand-purple/20">
          <img :src="headerIcon" alt="arch" class="h-6 w-6" />
        </div>
        <div class="ml-4 flex flex-col">
          <span class="font-space text-4xl font-bold leading-10 tracking-[-1px] text-brand-gold">服务器架构</span>
          <span class="mt-1 font-jetbrains text-sm leading-5 tracking-[1px] text-brand-purple/60">SERVER ARCHITECTURE / TOPOLOGY</span>
        </div>
      </div>
    </div>

    <!-- 图例：mt-0 ml-346(相对 header) -->
    <div class="absolute left-[394px] top-[122px] z-10 flex w-[288px] flex-col">
      <div class="flex h-[43px] items-center gap-2">
        <span class="h-3 w-2.5 rounded-full bg-[#e63946]"></span>
        <div class="flex flex-col">
          <span class="font-inter text-sm leading-5 tracking-[5px] text-brand-gold/80">不可访问</span>
          <span class="mt-1 font-inter text-[11px] leading-4 tracking-[5px] text-brand-gold/40">需联系管理组，平常不开</span>
        </div>
      </div>
      <div class="flex h-[43px] items-center gap-2">
        <span class="h-3 w-2.5 rounded-full bg-[#6b7280]"></span>
        <div class="flex flex-col">
          <span class="font-inter text-sm leading-5 tracking-[5px] text-brand-gold/80">已归档</span>
          <span class="mt-1 font-inter text-[11px] leading-4 tracking-[5px] text-brand-gold/40">仅此服老玩家可以进入</span>
        </div>
      </div>
      <div class="flex h-[42px] items-center gap-2">
        <span class="h-[11px] w-2.5 rounded-full bg-brand-green"></span>
        <div class="flex flex-col">
          <span class="font-inter text-sm leading-5 tracking-[5px] text-brand-gold/80">在线</span>
          <span class="mt-1 font-inter text-[11px] leading-4 tracking-[5px] text-brand-gold/40">服务器正常运行，可直接进入</span>
        </div>
      </div>
    </div>

    <!-- 6 张子服卡片：基于原始绝对定位 -->
    <!-- 登录服：mt--46 ml-530 (z-0) -->
    <div class="absolute left-[530px] top-[76px] z-[0]">
      <ServerCard name="登录服" id="login" role="用于账号管理和反压测的服务器" :port="1234" show-port status="offline" :status-icon-src="loginIcon" />
    </div>
    <!-- 主城服：mt--4 ml-593 (z-1) -->
    <div class="absolute left-[593px] top-[118px] z-[1]">
      <ServerCard name="主城服" id="hub" role="跳转各子服的中转站" :port="25565" show-port status="online" :status-icon-src="hubIcon" />
    </div>
    <!-- 生存服：mt--5 ml-73 (z-4) -->
    <div class="absolute left-[73px] top-[117px] z-[4]">
      <ServerCard name="生存服" id="survival" role="原版生存 1.20.x" :port="25566" show-port status="online" :status-icon-src="survivalIcon" />
    </div>
    <!-- 创造服：mt--6 ml-428 (z-7) -->
    <div class="absolute left-[428px] top-[116px] z-[7]">
      <ServerCard name="创造服" id="creative" role="无限创造 建筑孵化" :port="25567" show-port status="online" :status-icon-src="creativeIcon" />
    </div>
    <!-- 小游戏服：mt--6 ml-776 (z-8) -->
    <div class="absolute left-[776px] top-[116px] z-[8]">
      <ServerCard name="小游戏服" id="minigame" role="内含数十款自制小游戏" :port="25568" show-port status="online" :status-icon-src="minigameIcon" />
    </div>
    <!-- 归档服：mt--6 ml-1105 (z-9) -->
    <div class="absolute left-[1105px] top-[116px] z-[9]">
      <ServerCard name="归档服" id="archived" role="老玩家可以进入" :port="25569" show-port status="archived" :status-icon-src="archivedIcon" />
    </div>

    <!-- 连接线图片（保留位置，原始中是装饰图） -->
    <img :src="connector1" alt="" class="pointer-events-none absolute left-[670px] top-[279px] z-[5] h-[60px] w-[73px]" />
    <img :src="connector2" alt="" class="pointer-events-none absolute left-[252px] top-[274px] z-[17] h-[116px] w-[536px]" />
    <img :src="connector3" alt="" class="pointer-events-none absolute left-[614px] top-[351px] z-[3] h-[169px] w-[174px]" />
    <img :src="connector4" alt="" class="pointer-events-none absolute left-[784px] top-[405px] z-[18] h-[153px] w-[181px]" />
    <img :src="connector5" alt="" class="pointer-events-none absolute left-[785px] top-[347px] z-[2] h-[100px] w-[515px]" />

    <!-- 滚动提示：mt-67 ml-687 -->
    <div class="absolute bottom-[0px] left-[687px] z-10">
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServerCard from '../components/ServerCard.vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

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
