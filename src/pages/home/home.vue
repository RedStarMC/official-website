<template>
  <div class="w-full bg-white">
    <HeroSection />
    <CommunitySection />
    <ArchitectureSection />
    <StaffSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../../sections/HeroSection.vue'
import CommunitySection from '../../sections/CommunitySection.vue'
import ArchitectureSection from '../../sections/ArchitectureSection.vue'
import StaffSection from '../../sections/StaffSection.vue'
import FooterSection from '../../sections/FooterSection.vue'
</script>

<style>
/* 全局重置 — 必须放在 <style> 标签内 */
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

<style scoped></style>