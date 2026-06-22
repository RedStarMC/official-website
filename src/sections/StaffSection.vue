<template>
  <section
    id="staff"
    class="relative h-[1024px] w-[1440px] overflow-hidden"
  >
    <!-- 背景图：1440x1024 rounded-59 blur-10 -->
    <img
      :src="bgImage"
      alt=""
      class="pointer-events-none absolute inset-0 h-[1024px] w-[1440px] rounded-[59px] object-cover blur-[10px]"
    />

    <!-- 头部容器：1398x458 -->
    <div class="absolute left-0 top-0 z-10 h-[458px] w-[1398px]">
      <!-- 标题行：mt-0 ml-0 1398x93 -->
      <div class="flex h-[64px] items-center" :style="{ marginLeft: '6px' }">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-brand-purple/20">
          <img :src="headerIcon" alt="staff" class="h-6 w-6" />
        </div>
        <div class="ml-4 flex flex-col">
          <span class="font-space text-4xl font-bold leading-10 tracking-[-1px] text-brand-gold">管理组成员</span>
          <span class="mt-1 font-jetbrains text-sm leading-5 tracking-[1px] text-brand-purple/60">STAFF MEMBERS</span>
        </div>
      </div>

      <!-- 分隔线：mt--35 ml-48 1398x93 内部含 128x2 线 -->
      <div class="ml-[48px] mt-[-35px] h-[93px] w-[1398px]">
        <div class="mt-[91px] h-[2px] w-32 bg-brand-purple/30"></div>
      </div>

      <!-- 4 张肖像图，绝对定位基于此头部容器 -->
      <!-- portrait1: 196x317 ml--1235 mt-93 → 相对头部容器 left=0 -->
      <img :src="portrait1" alt="staff" class="absolute left-0 top-[93px] z-[4] h-[317px] w-[196px] rounded object-cover" />
      <!-- portrait2: 221x315 ml--761 mt-93 → 相对头部容器 left=163+... -->
      <img :src="portrait2" alt="staff" class="absolute left-[249px] top-[93px] z-[1] h-[315px] w-[221px] rounded object-cover" />
      <!-- portrait3: 213x309 ml-61 mt-85 → left=510+61=571 -->
      <img :src="portrait3" alt="staff" class="absolute left-[519px] top-[85px] z-[3] h-[309px] w-[213px] rounded object-cover" />
      <!-- portrait4: 213x311 ml-83 mt-95 → left=571+213+83=867 -->
      <img :src="portrait4" alt="staff" class="absolute left-[772px] top-[95px] z-[2] h-[311px] w-[213px] rounded object-cover" />

      <!-- 成员信息标签：991x78 mt-380 ml--184 z-5 -->
      <div class="absolute left-0 top-[380px] z-[5] flex h-[78px] w-[991px]" :style="{ marginLeft: '240px' }">
        <!-- 成员1: 137x75 ml-0 mt-0 -->
        <div class="flex w-[137px] flex-col">
          <span class="font-inter text-lg font-bold leading-7 tracking-[5px] text-brand-pink">稳健/文件</span>
          <span class="font-jetbrains text-xs leading-4 tracking-[1px] text-brand-pink">wenjian_doc</span>
          <span
            class="mt-1 flex h-[26px] w-[133px] items-center justify-center rounded-full border border-pink-300/30 font-inter text-xs font-semibold leading-4 tracking-[5px] text-brand-pink"
            :style="{ background: 'linear-gradient(101.06deg, rgba(244,114,182,0.2) 0%, rgba(168,85,247,0.2) 100%)' }"
          >26年暑假腐竹</span>
        </div>
        <!-- 成员2: 137x75 ml-152 mt-1 -->
        <div class="ml-[152px] mt-[1px] flex w-[137px] flex-col">
          <span class="font-inter text-lg font-bold leading-7 tracking-[5px] text-brand-pink">苹果</span>
          <span class="font-jetbrains text-xs leading-4 tracking-[1px] text-brand-pink">pingguomc</span>
          <span
            class="mt-1 flex h-[26px] w-[133px] items-center justify-center rounded-full border border-pink-300/30 font-inter text-xs font-semibold leading-4 tracking-[5px] text-brand-pink"
            :style="{ background: 'linear-gradient(101.06deg, rgba(244,114,182,0.2) 0%, rgba(168,85,247,0.2) 100%)' }"
          >运行维护</span>
        </div>
        <!-- 成员3: 137x75 ml-155 mt-0 -->
        <div class="ml-[155px] flex w-[137px] flex-col">
          <span class="font-inter text-lg font-bold leading-7 tracking-[5px] text-brand-pink">稳健/文件</span>
          <span class="font-jetbrains text-xs leading-4 tracking-[1px] text-brand-pink">wenjian_doc</span>
          <span
            class="mt-1 flex h-[26px] w-[133px] items-center justify-center rounded-full border border-pink-300/30 font-inter text-xs font-semibold leading-4 tracking-[5px] text-brand-pink"
            :style="{ background: 'linear-gradient(101.06deg, rgba(244,114,182,0.2) 0%, rgba(168,85,247,0.2) 100%)' }"
          >26年暑假腐竹</span>
        </div>
        <!-- 成员4: 137x75 ml-136 mt--1 -->
        <div class="ml-[136px] mt-[-1px] flex w-[137px] flex-col">
          <span class="font-inter text-lg font-bold leading-7 tracking-[5px] text-brand-pink">稳健/文件</span>
          <span class="font-jetbrains text-xs leading-4 tracking-[1px] text-brand-pink">wenjian_doc</span>
          <span
            class="mt-1 flex h-[26px] w-[133px] items-center justify-center rounded-full border border-pink-300/30 font-inter text-xs font-semibold leading-4 tracking-[5px] text-brand-pink"
            :style="{ background: 'linear-gradient(101.06deg, rgba(244,114,182,0.2) 0%, rgba(168,85,247,0.2) 100%)' }"
          >26年暑假腐竹</span>
        </div>
      </div>
    </div>

    <!-- 底部地图卡：mt-49 ml-123 1215x282 -->
    <div class="absolute left-[123px] top-[507px] z-10 flex h-[282px] w-[1215px] flex-col">
      <div class="flex h-[254px] w-[1215px] flex-col rounded-[24px] border-b border-l border-r border-t-0 border-brand-gold bg-white/31">
        <!-- 地图行 -->
        <div class="ml-[27px] mt-[58px] h-[161px] w-[344px] overflow-hidden rounded-lg border-4 border-[#f8d0c4]">
          <img :src="mapImage" alt="map" class="h-[162px] w-[288px] object-cover" />
        </div>
      </div>
    </div>

    <!-- 回到首页指示：ml-696 mt-0 -->
    <div class="absolute bottom-[0px] left-[696px] z-10">
      <ScrollIndicator
        :icon-src="scrollTopIcon"
        top-text="SCROLL"
        bottom-text="回到首页"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollIndicator from '../components/ScrollIndicator.vue'

const bgImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948905064/1324/b826/e440/b7af1d60fb140fb4b421b73da9a98f8e.jpg'
const headerIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948904249/ace0/d7da/bafb/b4d3db2f20d80b43fcb2787d255ff382.png'
const portrait1 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900575/1bff/07ce/caea/d29961c62960038d448862ad5c076782.png'
const portrait2 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png'
const portrait3 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png'
const portrait4 = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png'
const mapImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948905064/1324/b826/e440/b7af1d60fb140fb4b421b73da9a98f8e.jpg'
const scrollTopIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948902681/b7d8/4439/36a1/1b4e3c49ee1940a531feed7547a3f7ee.png'
</script>

<style scoped></style>
