<template>
  <section
    id="community"
    class="relative h-[1024px] w-[1440px] overflow-hidden"
    :style="{ background: 'linear-gradient(180deg, #692823 0%, #2d1b3d 45.71%, #1a1a2e 100%)' }"
  >
    <!-- 背景大图：1815x1790 mt--115 ml--624 -->
    <img
      :src="bgImage"
      alt=""
      class="pointer-events-none absolute left-[-624px] top-[-115px] h-[1790px] w-[1815px] object-cover"
    />

    <!-- 社区简介卡片：mt-291 ml-874 940x240 -->
    <div
      class="absolute left-[874px] top-[291px] z-10 flex h-[240px] w-[940px] flex-col rounded-lg border border-white/10 bg-white/5"
    >
      <!-- 表头：红点 + 社区简介标题 -->
      <div class="ml-6 mt-6 flex h-7 items-center gap-2.5">
        <span class="h-7 w-1 rounded-full bg-brand-red"></span>
        <span class="font-outfit text-[36px] font-bold leading-[54px] tracking-[5px] text-white">
          社区简介
        </span>
      </div>

      <!-- 描述文字 -->
      <p class="mx-auto mt-4 w-[890px] font-noto text-sm font-medium leading-[22.75px] tracking-[5px] text-white/69">
        RedStarMC 是一个致力于提供纯净、稳定、友好的 Minecraft 生存服务器。我们坚持公益运营，拒绝任何付费赢元素，让每一位玩家都能在同一起跑线上享受游戏的乐趣。服务器采用先进的跨版本技术，支持 Java 版 1.8 至 1.21.11 的玩家同时在线游玩。我们拥有完善的防熊系统和活跃的管理团队，确保社区秩序井然，让你的每一次建造都能安心留存。
      </p>

      <!-- 底部按钮行：mt-7 ml-24 890x53 -->
      <div class="relative ml-6 mt-[7px] flex h-[53px] w-[890px] items-center">
        <!-- 横线 -->
        <span class="absolute left-0 right-[268px] top-0 h-px bg-white/10"></span>
        <!-- 跳转至 Wiki 按钮：239x38 ml-651 mt-15 -->
        <a
          href="#"
          class="ml-[651px] mt-[15px] flex h-[38px] w-[239px] items-center justify-center gap-2 rounded-full bg-brand-red font-outfit text-base font-bold leading-6 tracking-[1px] text-white"
        >
          <span>跳转至 Wiki 查看更多</span>
          <img :src="arrowIcon" alt="arrow" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <!-- 双列区：mt-20 ml-874 940x228 -->
    <div class="absolute left-[874px] top-[551px] z-10 flex h-[228px] w-[940px]">
      <!-- 左：IP 列表 376x196 -->
      <div class="flex h-[196px] w-[376px] flex-col rounded-lg border border-white/15 bg-white/7">
        <!-- Java版 IP -->
        <div class="flex h-[43px] items-center gap-2.5 px-4 pt-4">
          <img :src="javaIcon" alt="java" class="h-5 w-5 shrink-0" />
          <span class="font-noto text-xs leading-4 tracking-[5px] text-white/50">Java版 IP</span>
          <button class="flex h-9 w-[72px] items-center justify-center rounded-lg bg-brand-red font-outfit text-sm font-bold leading-5 tracking-[5px] text-white">复制</button>
          <span class="font-outfit text-base font-bold leading-6 tracking-[1px] text-white">play.redstarmc.net</span>
        </div>
        <!-- 备用 IP -->
        <div class="flex h-[43px] items-center gap-2.5 px-4 pt-4">
          <img :src="backupIcon" alt="backup" class="h-5 w-5 shrink-0" />
          <span class="font-noto text-xs leading-4 tracking-[5px] text-white/50">备用 IP</span>
          <button class="flex h-9 w-[72px] items-center justify-center rounded-lg bg-brand-red font-outfit text-sm font-bold leading-5 tracking-[5px] text-white">复制</button>
          <span class="font-outfit text-base font-bold leading-6 tracking-[1px] text-white">backup.redstarmc.net</span>
        </div>
        <!-- 基岩版 IP -->
        <div class="flex h-[43px] items-center gap-2.5 px-4 pt-4">
          <img :src="bedrockIcon" alt="bedrock" class="h-5 w-5 shrink-0" />
          <span class="font-noto text-xs leading-4 tracking-[5px] text-white/50">基岩版 IP : 端口</span>
          <button class="flex h-9 w-[72px] items-center justify-center rounded-lg bg-brand-red font-outfit text-sm font-bold leading-5 tracking-[5px] text-white">复制</button>
          <span class="font-outfit text-base font-bold leading-6 tracking-[1px] text-white">be.redstarmc.net : 19132</span>
        </div>
      </div>

      <!-- 右：新闻卡 544x228 ml-20 -->
      <div class="ml-5 flex h-[228px] w-[544px] flex-col overflow-hidden rounded-xl border border-white/7 bg-white/2">
        <!-- 表头：mt-16 ml-16 -->
        <div class="ml-4 mt-4 flex h-6 items-center">
          <span class="h-4 w-1 rounded-full bg-brand-red"></span>
          <span class="font-outfit text-base font-bold leading-6 text-white">最新动态</span>
          <span class="ml-1 font-noto text-xs leading-4 text-white/30">NEWS</span>
        </div>

        <!-- Tabs: mt-12 ml-16 -->
        <div class="ml-4 mt-3 flex h-7 w-[510px] gap-0">
          <span class="flex h-7 w-[72px] items-center justify-center rounded-full border border-brand-red bg-brand-red font-outfit text-xs font-medium leading-[18px] text-white">全部</span>
          <span class="flex h-7 w-[72px] items-center justify-center rounded-full border border-white/20 font-outfit text-xs font-medium leading-[18px] text-white/60">新闻</span>
          <span class="flex h-7 w-[72px] items-center justify-center rounded-full border border-white/20 font-outfit text-xs font-medium leading-[18px] text-white/60">公告</span>
          <span class="flex h-7 w-[72px] items-center justify-center rounded-full border border-white/20 font-outfit text-xs font-medium leading-[18px] text-white/60">活动</span>
        </div>

        <!-- News 1 -->
        <div class="ml-4 mt-3 flex h-[57.5px] flex-col border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="flex h-[20px] w-[38px] items-center justify-center rounded-full bg-[#3b82f6] font-inter text-[11px] font-medium leading-3 text-white">新闻</span>
            <span class="font-noto text-xs leading-4 text-white/40">26.6.15</span>
            <a href="#" class="ml-auto flex items-center gap-1 font-noto text-xs text-white/60 hover:text-white">
              <span>阅读更多</span>
              <img :src="readMoreIcon" alt="arrow" class="h-4 w-4" />
            </a>
          </div>
          <span class="mt-[10px] font-outfit text-xs font-medium leading-4 text-white">官网完工！</span>
        </div>

        <!-- News 2 -->
        <div class="ml-4 flex h-[57.5px] flex-col border-b border-white/10">
          <div class="flex items-center gap-2">
            <span class="flex h-[20px] w-[38px] items-center justify-center rounded-full bg-[#3b82f6] font-inter text-[11px] font-medium leading-3 text-white">新闻</span>
            <span class="font-noto text-xs leading-4 text-white/40">26.5.17</span>
            <a href="#" class="ml-auto flex items-center gap-1 font-noto text-xs text-white/60 hover:text-white">
              <span>阅读更多</span>
              <img :src="readMoreIcon" alt="arrow" class="h-4 w-4" />
            </a>
          </div>
          <span class="mt-[10px] font-outfit text-xs font-medium leading-4 text-white">服务器配置升级</span>
        </div>
      </div>
    </div>

    <!-- 快速链接：mt-20 ml-874 940x165 -->
    <div class="absolute left-[874px] top-[779px] z-10 flex h-[165px] w-[940px] rounded-lg border border-white/7 bg-white/2">
      <!-- 左侧标签 -->
      <div class="flex items-center">
        <span class="ml-6 h-5 w-1 rounded-full bg-brand-yellow"></span>
        <span class="font-outfit text-lg font-bold leading-7 tracking-[5px] text-white">快速链接</span>
      </div>

      <!-- 链接行：890x65 -->
      <div class="absolute left-[34px] top-[73px] flex h-[65px] w-[890px] gap-0">
        <a
          v-for="link in quickLinks"
          :key="link.label"
          href="#"
          class="flex h-[65px] w-[158px] shrink-0 flex-col items-start rounded-xl border border-white/15 bg-white/7 p-2 transition hover:bg-white/12"
        >
          <div class="ml-1.5 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/15">
            <img :src="link.iconSrc" :alt="link.label" class="h-6 w-6" />
          </div>
          <span class="mt-1 ml-1.5 w-full text-center font-outfit text-sm font-medium leading-5 text-white">
            {{ link.label }}
          </span>
        </a>
      </div>
    </div>

    <!-- 滚动提示：mt-76 ml-1311 -->
    <div class="absolute bottom-[0px] left-[1311px] z-10">
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollIndicator from '../components/ScrollIndicator.vue'

const bgImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948901549/bc41/a27c/548a/a270c6f8c9c9ec6e453493d2b0ec0282.png'
const arrowIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902105400/fca1/b1d0/17ea/7a2a9fe4a29dd219b81ff4f35a051014.png'
const javaIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902108014/1c2e/4138/10f5/7f16b8ec11eba55f03f5affbdc837e35.png'
const backupIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902108070/238a/162b/67ba/e8f62dd99db8b43f15eb4bdcc87fe7a8.png'
const bedrockIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902109886/65a9/aec7/ee21/b70fbdc84ee163a0158309ca6cfcde7f.png'
const readMoreIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902110034/3cfe/7c14/ac83/a92c56fd515178d0105ea4081f7961eb.png'
const scrollIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103878/960d/f0c6/06b7/58cd0a7c4894408ebe3fcad8f8f33fd9.png'

const quickLinks = [
  { label: '加入QQ群', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103749/0f60/43ef/ea99/b3213bc694412ed3aaaf552b3d83bb93.png' },
  { label: 'B站账号', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902106147/08ef/8283/9df1/3701abda014b522596149a9b42b0c292.png' },
  { label: 'MC百科宣传页', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902106195/6956/d432/fedf/c95b6cc1d471b6aa8983489d93fb0c04.png' },
  { label: 'GitHub组织页', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80911273527/0239/84e2/f645/1eb61d4a16ec100f82e5617000a5d2b4.png' },
  { label: '加入管理组', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902105700/ef9c/57bc/635b/c80e959cc093887798d0b33cc891c092.png' },
]
</script>

<style scoped></style>
