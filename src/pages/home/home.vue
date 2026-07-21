<template>
  <div class="w-full bg-white">
    <NavBar />
    <HeroSection />
    <CommunitySection />
    <ArchitectureSection />
    <StaffSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '../../components/NavBar.vue'
import HeroSection from '../../sections/HeroSection.vue'
import CommunitySection from '../../sections/CommunitySection.vue'
import ArchitectureSection from '../../sections/ArchitectureSection.vue'
import StaffSection from '../../sections/StaffSection.vue'
import FooterSection from '../../sections/FooterSection.vue'
</script>

<style scoped></style>