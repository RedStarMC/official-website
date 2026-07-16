<template>
  <div
      class="flex h-[89px] w-[480px] items-center rounded-xl bg-brand-card pl-[10px] shadow-[0_4px_10px_0_rgba(0,0,0,0.3)]"
      :style="{ zIndex: 20 }"
  >
    <!-- 状态圆（左侧） -->
    <div class="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full">
      <div class="h-5 w-5 rounded-full bg-brand-online/70"></div>
    </div>

    <!-- 中间信息区 -->
    <div class="flex flex-1 items-center gap-3 px-4">
      <span class="font-outfit text-[18px] leading-6 tracking-[1px] text-[var(--color-text-gray)]">
        {{ label }}
      </span>

      <!-- 地址文本可点击复制 -->
      <span
          class="font-outfit cursor-pointer text-[16px] font-bold leading-9 tracking-[1px] text-brand-dark transition-all hover:underline"
          @click="copyAddress"
      >
        {{ address }}
      </span>

      <!-- 复制按钮 -->
      <button
          class="ml-auto flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-lg shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] transition-colors duration-200"
          :class="copied ? 'bg-green-500/30' : 'bg-brand-red/20'"
          @click="copyAddress"
          :aria-label="copied ? '已复制' : '复制地址'"
      >
        <!-- 未复制时显示复制图标，已复制显示对勾 -->
        <img v-if="!copied" :src="copyIconSrc" alt="复制" class="h-4 w-4" />
        <span v-else class="text-xl leading-none text-green-600">✓</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
    defineProps<{
      address?: string
      label?: string
      copyIconSrc?: string
    }>(),
    {
      address: 'mc.redstarmc.top',
      label: '服务器地址',
      copyIconSrc:
          'https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/80902099440/4ead/6abc/0db9/8b0f77c4f4aa0c2799291255e54f0a27.png',
    },
)

const emit = defineEmits<{ (e: 'copied', address: string): void }>()

const copied = ref(false)

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(props.address)
    copied.value = true
    emit('copied', props.address)
    setTimeout(() => (copied.value = false), 1500)
  } catch (err) {
    console.error('复制失败', err)
  }
}
</script>

<style scoped></style>