<template>
  <section
      id="community"
      class="relative flex h-screen w-full min-w-[320px] flex-col overflow-hidden"
      :style="{ background: 'linear-gradient(180deg, #692823 0%, #2d1b3d 45.71%, #1a1a2e 100%)' }"
  >
    <!-- 背景大图 -->
    <img
        :src="bgImage"
        alt=""
        class="pointer-events-none absolute object-cover"
        :style="{
        left: '-43.33%',
        top: '-11.23%',
        width: '126.04%',
        height: '174.8%',
      }"
    />

    <!-- 社区简介卡片 -->
    <div
        class="absolute z-10 flex flex-col rounded-lg border border-white/10 bg-white/5"
        style="left: 27.78%; top: 5%; width: 65.28%;"
    >
      <!-- 表头 -->
      <div class="flex items-center gap-2.5" style="margin-left: clamp(16px, 1.67vw, 24px); margin-top: clamp(16px, 1.67vw, 24px);">
        <span class="w-1 rounded-full bg-brand-red" style="height: clamp(20px, 1.94vh, 28px);"></span>
        <span
            class="font-outfit font-bold leading-[1.5] text-white whitespace-nowrap"
            style="font-size: clamp(1.5rem, 2.5vw, 2.25rem); letter-spacing: 0.14em;"
        >
          社区简介
        </span>
      </div>

      <!-- 描述文字 -->
      <p
          class="font-noto font-medium leading-[1.625] text-white/69"
          style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); letter-spacing: clamp(2px, 0.35vw, 5px); margin: clamp(12px, 0.83vw, 16px) auto 0; width: 94.68%;"
      >
        RedStarMC 是一个致力于提供纯净、稳定、友好的 Minecraft 生存服务器。我们坚持公益运营，拒绝任何付费赢元素，让每一位玩家都能在同一起跑线上享受游戏的乐趣。服务器采用先进的跨版本技术，支持 Java 版 1.8 至 1.21.11 的玩家同时在线游玩。我们拥有完善的防熊系统和活跃的管理团队，确保社区秩序井然，让你的每一次建造都能安心留存。
      </p>

      <!-- 底部按钮行 -->
      <div class="relative flex items-center" style="margin: clamp(7px, 0.49vw, 7px) clamp(16px, 1.67vw, 24px) clamp(16px, 1.67vw, 24px) 0; height: clamp(38px, 3.68vh, 53px);">
        <span class="absolute left-0 top-0 h-px bg-white/10" :style="{ right: 'clamp(150px, 18.61vw, 268px)' }"></span>
        <a
            href="https://wiki.redstarmc.top"
            class="ml-auto flex items-center justify-center gap-2 rounded-full bg-brand-red font-outfit font-bold text-white whitespace-nowrap"
            style="height: clamp(30px, 2.63vh, 38px); padding: 0 clamp(16px, 1.39vw, 24px); font-size: clamp(0.75rem, 1.11vw, 1rem); letter-spacing: 0.06em;"
        >
          <span>跳转至 Wiki 查看更多</span>
          <img :src="arrowIcon" alt="arrow" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <!-- 双列区 -->
    <div class="absolute z-10 flex items-stretch" style="left: 27.78%; top: 42%; width: 65.28%; gap: 2.13%;">
      <!-- 左：IP 信息卡 -->
      <div class="flex flex-col overflow-hidden rounded-lg border border-white/15 bg-white/7" style="width: 40%;">
        <div class="flex flex-1 flex-col" style="padding: clamp(12px, 0.83vw, 16px); gap: clamp(8px, 0.56vw, 12px);">
          <!-- Java 版 -->
          <div class="flex flex-wrap items-center gap-2">
            <img :src="javaIcon" alt="java" class="shrink-0" style="width: clamp(16px, 1.39vw, 20px); height: clamp(16px, 1.39vw, 20px);" />
            <span class="font-noto text-white/50 whitespace-nowrap" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); letter-spacing: 0.36em;">Java版 IP</span>
            <button
                class="rounded-lg bg-brand-red font-outfit font-bold text-white whitespace-nowrap"
                style="font-size: clamp(0.625rem, 0.97vw, 0.875rem); letter-spacing: 0.36em; padding: clamp(4px, 0.28vw, 6px) clamp(8px, 0.56vw, 11px);"
                @click="copyToClipboard('mc.redstarmc.top')"
            >
              复制
            </button>
            <span class="font-outfit font-bold text-white" style="font-size: clamp(0.75rem, 1.11vw, 1rem); letter-spacing: 0.06em;">
              mc.redstarmc.top
            </span>
          </div>

          <!-- 备用 IP -->
          <div class="flex flex-wrap items-center gap-2">
            <img :src="backupIcon" alt="backup" class="shrink-0" style="width: clamp(16px, 1.39vw, 20px); height: clamp(16px, 1.39vw, 20px);" />
            <span class="font-noto text-white/50 whitespace-nowrap" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); letter-spacing: 0.36em;">备用 IP</span>
            <button
                class="rounded-lg bg-brand-red font-outfit font-bold text-white whitespace-nowrap"
                style="font-size: clamp(0.625rem, 0.97vw, 0.875rem); letter-spacing: 0.36em; padding: clamp(4px, 0.28vw, 6px) clamp(8px, 0.56vw, 11px);"
                @click="copyToClipboard('mcbei.redstarmc.top')"
            >
              复制
            </button>
            <span class="font-outfit font-bold text-white" style="font-size: clamp(0.75rem, 1.11vw, 1rem); letter-spacing: 0.06em;">
              mcbei.redstarmc.top
            </span>
          </div>

          <!-- 基岩版 -->
          <div class="flex flex-wrap items-center gap-2">
            <img :src="bedrockIcon" alt="bedrock" class="shrink-0" style="width: clamp(16px, 1.39vw, 20px); height: clamp(16px, 1.39vw, 20px);" />
            <span class="font-noto text-white/50 whitespace-nowrap" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); letter-spacing: 0.36em;">基岩版 IP : 端口</span>
            <button
                class="rounded-lg bg-brand-red font-outfit font-bold text-white whitespace-nowrap"
                style="font-size: clamp(0.625rem, 0.97vw, 0.875rem); letter-spacing: 0.36em; padding: clamp(4px, 0.28vw, 6px) clamp(8px, 0.56vw, 11px);"
                @click="copyToClipboard('mcbr.redstarmc.top:19132')"
            >
              复制
            </button>
            <span class="font-outfit font-bold text-white" style="font-size: clamp(0.75rem, 1.11vw, 1rem); letter-spacing: 0.06em;">
              mcbr.redstarmc.top:19132
            </span>
          </div>
        </div>

        <!-- 底部版本信息 -->
        <div class="flex items-center justify-between border-t border-white/15 bg-white/7" style="padding: clamp(4px, 0.28vw, 8px) clamp(12px, 0.83vw, 16px);">
          <span class="font-outfit text-white/80" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); letter-spacing: 0.06em;">
            Java 1.8 - 1.21.11
          </span>
          <span class="font-outfit text-white/80" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); letter-spacing: 0.36em;">
            基岩版最新版本
          </span>
        </div>
      </div>

      <!-- 右：新闻卡 -->
      <div class="flex flex-col overflow-hidden rounded-xl border border-white/7 bg-white/2" style="width: 57.87%;">
        <!-- 表头 -->
        <div class="flex items-center" style="margin: clamp(12px, 0.83vw, 16px) 0 0 clamp(12px, 0.83vw, 16px);">
          <span class="w-1 rounded-full bg-brand-red" style="height: clamp(12px, 0.83vw, 16px);"></span>
          <span class="font-outfit font-bold text-white" style="font-size: clamp(0.875rem, 1.11vw, 1rem); margin-left: clamp(6px, 0.42vw, 8px);">最新动态</span>
          <span class="font-noto text-white/30" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); margin-left: clamp(4px, 0.28vw, 6px);">NEWS</span>
        </div>

        <!-- Tabs -->
        <div class="flex" style="margin: clamp(8px, 0.56vw, 12px) 0 0 clamp(12px, 0.83vw, 16px); gap: clamp(4px, 0.28vw, 8px);">
          <span
              v-for="(tab, i) in newsTabs"
              :key="tab"
              class="flex items-center justify-center rounded-full font-outfit font-medium whitespace-nowrap"
              :class="i === 0 ? 'border border-brand-red bg-brand-red text-white' : 'border border-white/20 text-white/60'"
              style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); height: clamp(22px, 1.52vh, 28px); padding: 0 clamp(8px, 0.56vw, 12px);"
          >
            {{ tab }}
          </span>
        </div>

        <!-- News items -->
        <div
            v-for="(news, i) in newsItems"
            :key="i"
            class="flex flex-col"
            :class="i < newsItems.length - 1 ? 'border-b border-white/10' : ''"
            style="padding: clamp(6px, 0.42vw, 8px) clamp(12px, 0.83vw, 16px);"
        >
          <div class="flex items-center gap-2">
            <span
                class="flex items-center justify-center rounded-full font-inter font-medium text-white whitespace-nowrap"
                :style="{
                fontSize: 'clamp(0.625rem, 0.76vw, 0.6875rem)',
                height: 'clamp(16px, 1.39vh, 20px)',
                padding: '0 clamp(6px, 0.42vw, 8px)',
                backgroundColor: news.badgeColor,
              }"
            >
              {{ news.badge }}
            </span>
            <span class="font-noto text-white/40" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem);">{{ news.date }}</span>
            <a href="#" class="ml-auto flex items-center gap-1 font-noto text-white/60 hover:text-white" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem);">
              <span>阅读更多</span>
              <img :src="readMoreIcon" alt="arrow" class="h-3 w-3" />
            </a>
          </div>
          <span class="font-outfit font-medium text-white" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); margin-top: clamp(3px, 0.21vw, 4px);">
            {{ news.title }}
          </span>
        </div>

        <!-- 更多新闻 -->
        <div class="mt-auto flex items-center border-t border-white/7" style="padding: clamp(6px, 0.42vw, 8px) clamp(12px, 0.83vw, 16px);">
          <a href="#" class="ml-auto flex items-center gap-1 font-outfit font-medium text-brand-red" style="font-size: clamp(0.625rem, 0.83vw, 0.75rem);">
            <span>更多新闻</span>
            <img :src="moreNewsIcon" alt="arrow" class="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>

    <!-- 快速链接 -->
    <div
        class="absolute z-10 flex flex-col rounded-lg border border-white/7 bg-white/2"
        style="left: 27.78%; top: 78%; width: 65.28%;"
    >
      <div class="flex items-center gap-2.5" style="padding: clamp(12px, 0.83vw, 16px);">
        <span class="w-1 rounded-full bg-brand-yellow" style="height: clamp(16px, 1.11vh, 20px);"></span>
        <span
            class="font-outfit font-bold text-white whitespace-nowrap"
            style="font-size: clamp(0.875rem, 1.25vw, 1.125rem); letter-spacing: 0.28em;"
        >
          快速链接
        </span>
      </div>
      <div class="flex" style="gap: 2.25%; padding: 0 clamp(12px, 0.83vw, 16px) clamp(12px, 0.83vw, 16px);">
        <a
            v-for="link in quickLinks"
            :key="link.label"
            href="#"
            class="flex flex-col items-center rounded-xl border border-white/15 bg-white/7 transition hover:bg-white/12"
            style="width: 17.75%; padding: clamp(6px, 0.42vw, 8px);"
        >
          <div class="flex items-center justify-center rounded-full bg-brand-red/15" style="width: clamp(32px, 2.5vw, 48px); height: clamp(32px, 2.5vw, 48px);">
            <img :src="link.iconSrc" :alt="link.label" class="h-6 w-6" />
          </div>
          <span
              class="font-outfit font-medium text-center text-white whitespace-nowrap"
              style="font-size: clamp(0.625rem, 0.83vw, 0.875rem); letter-spacing: 0.05em; margin-top: clamp(4px, 0.28vw, 4px);"
          >
            {{ link.label }}
          </span>
        </a>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div class="absolute z-10" style="right: 73%; bottom: 5vh;">
      <ScrollIndicator :icon-src="scrollIcon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScrollIndicator from '../components/ScrollIndicator.vue'

const bgImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948901549/bc41/a27c/548a/a270c6f8c9c9ec6e453493d2b0ec0282.png'
const arrowIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902105400/fca1/b1d0/17ea/7a2a9fe4a29dd219b81ff4f35a051014.png'
const javaIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902108014/1c2e/4138/10f5/7f16b8ec11eba55f03f5affbdc837e35.png'
const backupIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902108070/238a/162b/67ba/e8f62dd99db8b43f15eb4bdcc87fe7a8.png'
const bedrockIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902109886/65a9/aec7/ee21/b70fbdc84ee163a0158309ca6cfcde7f.png'
const readMoreIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902110034/3cfe/7c14/ac83/a92c56fd515178d0105ea4081f7961eb.png'
const scrollIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103878/960d/f0c6/06b7/58cd0a7c4894408ebe3fcad8f8f33fd9.png'
const moreNewsIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902108358/1fd3/d22f/2d95/7b396873b52d1acd975a5fa6db450046.png'

const newsTabs = ['全部', '新闻', '公告', '活动']

const newsItems = ref([
  { badge: '新闻', badgeColor: '#3b82f6', date: '26.6.15', title: '官网完工！' },
  { badge: '新闻', badgeColor: '#3b82f6', date: '26.5.17', title: '服务器配置升级' },
  { badge: '公告', badgeColor: '#ef4444', date: '26.3.14', title: '主城修缮，开生日趴！' },
])

const quickLinks = [
  { label: '加入QQ群', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902103749/0f60/43ef/ea99/b3213bc694412ed3aaaf552b3d83bb93.png' },
  { label: 'B站账号', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902106147/08ef/8283/9df1/3701abda014b522596149a9b42b0c292.png' },
  { label: 'MC百科宣传页', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902106195/6956/d432/fedf/c95b6cc1d471b6aa8983489d93fb0c04.png' },
  { label: 'GitHub组织页', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80911273527/0239/84e2/f645/1eb61d4a16ec100f82e5617000a5d2b4.png' },
  { label: '加入管理组', iconSrc: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902105700/ef9c/57bc/635b/c80e959cc093887798d0b33cc891c092.png' },
]

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('复制失败', err)
  }
}
</script>

<style scoped></style>