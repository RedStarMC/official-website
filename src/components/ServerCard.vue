<template>
  <div
    class="relative flex w-[288px] flex-col items-start rounded-2xl p-4"
    :style="cardStyle"
  >
    <!-- Top-right status icon -->
    <img
      v-if="statusIconSrc"
      :src="statusIconSrc"
      :alt="name"
      class="pointer-events-none absolute -top-5 right-4 h-[132px] w-[132px] object-cover"
    />

    <span class="font-inter text-[18px] font-bold leading-7 tracking-[5px] text-brand-gold">
      {{ name }}
    </span>
    <span class="mt-1 font-jetbrains text-xs leading-4 tracking-[5px] text-brand-green/70">
      {{ id }}
    </span>
    <span class="mt-1 font-inter text-xs font-medium leading-4 tracking-[2px] text-brand-gold/50">
      {{ role }}
    </span>

    <div
      v-if="showPort"
      class="mt-[18px] ml-auto flex h-[18px] items-center gap-2 border-t border-white/5 pt-0.5"
    >
      <span class="font-jetbrains text-xs tracking-[5px] text-brand-purple/50">PORT</span>
      <span class="font-jetbrains text-sm tracking-[2px] text-brand-gold/80">{{ port }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Status = 'online' | 'archived' | 'offline'

const props = withDefaults(defineProps<{
  name: string
  id: string
  role?: string
  status?: Status
  statusIconSrc?: string
  port?: string | number
  showPort?: boolean
}>(), {
  role: 'login',
  status: 'online',
  showPort: false,
})

const statusColors: Record<Status, { border: string; shadow: string; bg: string }> = {
  online: {
    border: '#a8d5ba',
    shadow: '0 0 40px rgba(168,213,186,0.15), 0 0 80px rgba(168,213,186,0.07)',
    bg: 'rgba(168,213,186,0.03)',
  },
  archived: {
    border: '#7e57c2',
    shadow: '0 0 40px rgba(126,87,194,0.15), 0 0 80px rgba(126,87,194,0.07)',
    bg: 'rgba(126,87,194,0.03)',
  },
  offline: {
    border: '#6b6b6b',
    shadow: '0 0 40px rgba(155,155,155,0.10), 0 0 80px rgba(155,155,155,0.05)',
    bg: 'rgba(0,0,0,0.15)',
  },
}

const cardStyle = computed(() => {
  const s = statusColors[props.status]
  return {
    border: `3px solid ${s.border}`,
    boxShadow: s.shadow,
    backgroundColor: s.bg,
  }
})
</script>

<style scoped></style>