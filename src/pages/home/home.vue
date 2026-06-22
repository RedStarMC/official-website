<template>
  <div class="relative w-full overflow-x-auto overflow-y-hidden bg-white">
    <div class="relative mx-auto" :style="{ width: DESIGN_WIDTH + 'px' }">
      <HeroSection />
      <CommunitySection />
      <ArchitectureSection />
      <StaffSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../../sections/HeroSection.vue'
import CommunitySection from '../../sections/CommunitySection.vue'
import ArchitectureSection from '../../sections/ArchitectureSection.vue'
import StaffSection from '../../sections/StaffSection.vue'
import FooterSection from '../../sections/FooterSection.vue'

// 原始设计稿宽度（来自原始.html .music_2_0）
const DESIGN_WIDTH = 1440
</script>

<style scoped></style>
