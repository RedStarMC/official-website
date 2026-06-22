<template>
  <div class="flex flex-col items-start">
    <div class="flex items-center gap-2">
      <span
        v-if="badgeColor"
        class="flex h-[20.5px] w-[38px] items-center justify-center rounded-full text-[11px] font-medium leading-3 text-white"
        :style="{ backgroundColor: badgeColor }"
      >
        {{ badge }}
      </span>
      <span v-else class="font-noto text-xs leading-4 text-white/40">{{ badge }}</span>
      <span class="font-noto text-xs font-normal leading-4 text-white/40">{{ date }}</span>
      <a
        v-if="link"
        href="#"
        class="ml-auto flex items-center gap-1 font-noto text-xs text-white/60 hover:text-white"
        @click.prevent="$emit('read-more', id)"
      >
        <span>阅读更多</span>
        <span class="flex h-4 w-4 items-center justify-center">
          <img :src="arrowIcon" alt="arrow" class="h-4 w-4" />
        </span>
      </a>
    </div>
    <span class="mt-[10px] font-outfit text-xs font-medium leading-4 text-white">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  id: string | number
  badge: string
  badgeColor?: string
  date: string
  title: string
  link?: string
  arrowIcon?: string
}>(), {
  arrowIcon: 'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902110034/3cfe/7c14/ac83/a92c56fd515178d0105ea4081f7961eb.png',
})

defineEmits<{ (e: 'read-more', id: string | number): void }>()
</script>

<style scoped></style>