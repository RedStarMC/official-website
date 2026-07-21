<template>
  <footer
      id="footer"
      class="relative w-full bg-brand-footer"
      :style="{ height: 'clamp(200px, 30.21vw, 435px)' }"
  >
    <!-- 纯色填充层（预留未来内容） -->
    <div class="absolute inset-0"></div>
    
    <!-- 回到首页 -->
    <div class="absolute z-10 cursor-pointer" style="left: 50%; bottom: 20px; transform: translateX(-50%);" @click="emit('prev')">
      <ScrollIndicator
          :icon-src="scrollTopIcon"
          top-text="SCROLL"
          bottom-text="回到首页"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import ScrollIndicator from '../components/ScrollIndicator.vue'

const scrollTopIcon = 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80948902681/b7d8/4439/36a1/1b4e3c49ee1940a531feed7547a3f7ee.png'

const emit = defineEmits<{
  prev: []
}>()
</script>

<style scoped></style>