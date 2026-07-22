<template>
  <div class="w-full bg-white">
    <NavBar :active-id="navActiveId" @navigate="scrollToSection" />

    <PageIndicator
        :current-index="currentSection"
        @navigate="scrollToSection"
    />

    <main ref="containerRef" class="snap-container">
      <HeroSection
          :current-index="currentSection"
          @next="scrollToSection(1)"
          @navigate="scrollToSection"
      />
      <CommunitySection
          :current-index="currentSection"
          @next="scrollToSection(2)"
          @prev="scrollToSection(0)"
          @navigate="scrollToSection"
      />
      <ArchitectureSection
          :current-index="currentSection"
          @next="scrollToSection(3)"
          @prev="scrollToSection(1)"
          @navigate="scrollToSection"
      />
      <StaffSection
          :current-index="currentSection"
          @prev="scrollToSection(2)"
          @top="scrollToSection(0)"
          @navigate="scrollToSection"
      />
      <FooterSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar.vue'
import PageIndicator from '../../components/PageIndicator.vue'
import HeroSection from '../../sections/HeroSection.vue'
import CommunitySection from '../../sections/CommunitySection.vue'
import ArchitectureSection from '../../sections/ArchitectureSection.vue'
import StaffSection from '../../sections/StaffSection.vue'
import FooterSection from '../../sections/FooterSection.vue'

// 导入组合式函数
import { useScrollSections } from './useScrollSections.ts'

// 解构出响应式状态和方法
const { containerRef, currentSection, navActiveId, scrollToSection } = useScrollSections()

void containerRef
</script>

<style>
.snap-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-container > section,
.snap-container > footer {
  scroll-snap-align: start;
}
</style>