<template>
  <section
      id="staff"
      class="relative flex h-screen w-full min-w-[320px] flex-col overflow-hidden"
  >
    <!-- 背景图：模糊 + 圆角 -->
    <img
        :src="bgImage"
        alt=""
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        :style="{
        borderRadius: 'clamp(20px, 4.1vw, 59px)',
        filter: 'blur(10px)',
      }"
    />

    <!-- 头部容器 -->
    <div
        class="absolute z-10"
        style="left: 2.92%; top: 5%; width: 97.08%; height: clamp(300px, 44.73vh, 458px);"
    >
      <!-- 标题行 -->
      <div class="flex items-center" style="height: clamp(48px, 6.25vh, 64px); margin-left: 0.43%;">
        <div
            class="flex items-center justify-center rounded-xl border border-white/20 bg-brand-purple/20"
            style="width: clamp(32px, 3.33vw, 48px); height: clamp(32px, 3.33vw, 48px);"
        >
          <img
              :src="headerIcon"
              alt="staff"
              style="width: clamp(16px, 1.67vw, 24px); height: clamp(16px, 1.67vw, 24px);"
          />
        </div>
        <div class="flex flex-col" style="margin-left: clamp(12px, 1.11vw, 16px);">
          <span
              class="font-space font-bold text-brand-gold whitespace-nowrap"
              style="font-size: clamp(1.5rem, 2.5vw, 2.25rem); line-height: clamp(2rem, 3.47vh, 2.5rem); letter-spacing: -0.03em;"
          >
            管理组成员
          </span>
          <span
              class="font-jetbrains text-brand-purple/60 whitespace-nowrap"
              style="font-size: clamp(0.75rem, 0.97vw, 0.875rem); line-height: clamp(1rem, 1.39vh, 1.25rem); letter-spacing: 0.07em; margin-top: clamp(2px, 0.14vw, 4px);"
          >
            STAFF MEMBERS
          </span>
        </div>
      </div>

      <!-- 分隔线 -->
      <div
          class="bg-brand-purple/30"
          style="margin-left: 3.33%; margin-top: clamp(8px, 0.69vh, 10px); height: 2px; width: clamp(64px, 8.89vw, 128px);"
      ></div>

      <!-- 4 张肖像图 -->
      <img
          v-for="(p, i) in portraits"
          :key="i"
          :src="p.src"
          alt="staff"
          class="absolute rounded object-cover"
          :style="{
          left: p.left,
          top: p.top,
          width: p.width,
          aspectRatio: p.ratio,
          zIndex: p.z,
        }"
      />

      <!-- 成员信息标签 -->
      <div
          class="absolute z-5 flex"
          style="left: 14%; top: 83%; width: 70.89%; gap: clamp(8px, 1.06vw, 15px);"
      >
        <div
            v-for="(member, i) in members"
            :key="i"
            class="flex flex-col"
            style="flex: 1;"
        >
          <span
              class="font-inter font-bold text-brand-pink whitespace-nowrap"
              style="font-size: clamp(0.875rem, 1.25vw, 1.125rem); line-height: 1.4; letter-spacing: 0.28em;"
          >
            {{ member.name }}
          </span>
          <span
              class="font-jetbrains text-brand-pink whitespace-nowrap"
              style="font-size: clamp(0.625rem, 0.83vw, 0.75rem); line-height: 1.33; letter-spacing: 0.08em;"
          >
            {{ member.username }}
          </span>
          <span
              class="flex items-center justify-center rounded-full font-inter font-semibold text-brand-pink whitespace-nowrap"
              :style="{
              background: 'linear-gradient(101.06deg, rgba(244,114,182,0.2) 0%, rgba(168,85,247,0.2) 100%)',
              border: '1px solid rgba(244, 114, 182, 0.3)',
              fontSize: 'clamp(0.625rem, 0.83vw, 0.75rem)',
              lineHeight: '1.33',
              letterSpacing: '0.36em',
              marginTop: 'clamp(4px, 0.28vw, 4px)',
              height: 'clamp(20px, 1.81vh, 26px)',
            }"
          >
            {{ member.role }}
          </span>
        </div>
      </div>
    </div>

    <!-- 底部地图卡 -->
    <div
        class="absolute z-10 flex flex-col"
        style="left: 8.54%; top: 55%; width: 84.38%;"
    >
      <div
          class="flex flex-col bg-white/31"
          :style="{
          borderRadius: 'clamp(16px, 1.67vw, 24px)',
          borderRight: '1px solid #f2e8d5',
          borderBottom: '1px solid #f2e8d5',
          borderLeft: '1px solid #f2e8d5',
        }"
      >
        <!-- 地图内容行 -->
        <div
            class="flex items-center"
            style="padding: clamp(20px, 4.53vh, 58px) clamp(16px, 1.88vw, 27px) clamp(16px, 2.34vh, 24px); gap: 2.77%;"
        >
          <!-- 左侧地图截图 -->
          <div
              class="overflow-hidden rounded-lg"
              style="width: 29.54%; aspect-ratio: 288 / 161; border: 4px solid #f8d0c4;"
          >
            <img :src="mapImage" alt="map" class="h-full w-full object-cover" />
          </div>

          <!-- 中央：Pin 标记 + 大地图卡 -->
          <div class="relative" style="width: 35.38%;">
            <!-- Pin 标记（地图卡上方） -->
            <div
                class="absolute"
                style="left: 50%; top: clamp(-18px, -1.76vh, -12px); transform: translateX(-50%); z-index: 2;"
            >
              <div
                  style="width: 0; height: 0; border-left: 14px solid transparent; border-right: 14px solid transparent; border-top: 20px solid #f472b6; filter: drop-shadow(0 4px 12px rgba(244,114,182,0.6));"
              ></div>
              <div
                  style="width: 4px; height: 16px; background: #f472b6; margin: 0 auto; border-radius: 9999px; filter: drop-shadow(0 4px 12px rgba(244,114,182,0.5));"
              ></div>
            </div>
            <!-- 大地图卡 + 渐变遮罩 -->
            <div
                class="overflow-hidden rounded-2xl bg-cover bg-center"
                :style="{
                aspectRatio: '345 / 193',
                border: '1px solid #e5e5e5',
                boxShadow: '0 0 30px rgba(244,114,182,0.5), 0 0 60px rgba(244,114,182,0.2), inset 0 0 0 2px rgba(244,114,182,0.6)',
                backgroundImage: `url(${mapImage})`,
              }"
            >
              <div
                  style="width: 100%; height: 100%; background: linear-gradient(0deg, rgba(0,0,0,0.69) 0%, transparent 50%, transparent 100%);"
              ></div>
            </div>
          </div>

          <!-- 右侧地图截图 -->
          <div
              class="overflow-hidden rounded-lg"
              style="width: 29.54%; aspect-ratio: 288 / 161; border: 4px solid #f8d0c4;"
          >
            <img :src="mapDetailImage" alt="map" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- 回到首页指示 -->
    <div class="absolute z-10" style="left: 48.33%; bottom: 5vh;">
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
const mapImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948905064/1324/b826/e440/b7af1d60fb140fb4b421b73da9a98f8e.jpg'
const mapDetailImage = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948903447/0019/160f/53e9/dc0ad8d307d4da0ce195ce9cb684ac56.jpg'
const scrollTopIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948902681/b7d8/4439/36a1/1b4e3c49ee1940a531feed7547a3f7ee.png'

const portraits = [
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900575/1bff/07ce/caea/d29961c62960038d448862ad5c076782.png',
    left: '76%',
    top: '10%',
    width: 'clamp(120px, 13.61vw, 196px)',
    ratio: '196 / 317',
    z: 4,
  },
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png',
    left: '17%',
    top: '10%',
    width: 'clamp(140px, 15.35vw, 221px)',
    ratio: '221 / 315',
    z: 1,
  },
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png',
    left: '37%',
    top: '10%',
    width: 'clamp(130px, 14.79vw, 213px)',
    ratio: '213 / 309',
    z: 3,
  },
  {
    src: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948900567/d8a9/6056/6b35/62301ce030903a8b5618be81dcfe2a3e.png',
    left: '55%',
    top: '10%',
    width: 'clamp(130px, 14.79vw, 213px)',
    ratio: '213 / 311',
    z: 2,
  },
]

const members = [
  { name: '稳健/文件', username: 'wenjian_doc', role: '26年暑假腐竹' },
  { name: '苹果', username: 'pingguomc', role: '运行维护' },
  { name: '稳健/文件', username: 'wenjian_doc', role: '26年暑假腐竹' },
  { name: '稳健/文件', username: 'wenjian_doc', role: '26年暑假腐竹' },
]
</script>

<style scoped></style>