import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'

// 定义返回值类型
interface UseScrollSectionsReturn {
    containerRef: Ref<HTMLElement | null>
    currentSection: Ref<number>
    navActiveId: Ref<string>
    scrollToSection: (index: number) => void
}

export function useScrollSections(): UseScrollSectionsReturn {
    const containerRef = ref<HTMLElement | null>(null)
    const currentSection = ref(0)
    const sections = ['hero', 'community', 'architecture', 'staff', 'footer']
    const isScrolling = ref(false)

    const SCROLL_COOLDOWN = 300
    const WHEEL_THRESHOLD = 40
    let wheelAccumulated = 0
    let wheelResetTimer: ReturnType<typeof setTimeout> | null = null

    // 导航栏高亮 ID（footer 映射为 staff）
    const navActiveId = computed(() => {
        const id = sections[currentSection.value] ?? 'hero'
        return id === 'footer' ? 'staff' : id
    })

    // 获取某个 section 在容器内的 scrollTop
    function getSectionScrollTop(index: number): number {
        const id = sections[index]
        if (!id) return 0
        const el = document.getElementById(id)
        const container = containerRef.value
        if (!el || !container) return 0
        return el.offsetTop - container.offsetTop
    }

    // 滚动到指定 section
    function scrollToSection(index: number) {
        if (isScrolling.value) return
        if (index < 0 || index >= sections.length) return

        isScrolling.value = true
        currentSection.value = index

        const container = containerRef.value
        if (container) {
            container.scrollTo({
                top: getSectionScrollTop(index),
                behavior: 'smooth'
            })
        }

        setTimeout(() => {
            isScrolling.value = false
        }, SCROLL_COOLDOWN)
    }

    function scrollToNext() {
        if (currentSection.value >= sections.length - 1) return
        scrollToSection(currentSection.value + 1)
    }

    function scrollToPrev() {
        if (currentSection.value <= 0) return
        scrollToSection(currentSection.value - 1)
    }

    // -------- 事件处理 ----------
    function handleWheel(e: WheelEvent) {
        if (isScrolling.value) {
            wheelAccumulated = 0
            if (wheelResetTimer) clearTimeout(wheelResetTimer)
            return
        }

        wheelAccumulated += e.deltaY

        if (wheelResetTimer) clearTimeout(wheelResetTimer)
        wheelResetTimer = setTimeout(() => {
            wheelAccumulated = 0
        }, 150)

        if (Math.abs(wheelAccumulated) >= WHEEL_THRESHOLD) {
            if (wheelAccumulated > 0) {
                scrollToNext()
            } else {
                scrollToPrev()
            }
            wheelAccumulated = 0
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (isScrolling.value) return

        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
            e.preventDefault()
            scrollToNext()
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault()
            scrollToPrev()
        }
    }

    let touchStartY = 0
    function handleTouchStart(e: TouchEvent) {
        const touch = e.touches[0]
        if (touch) {
            touchStartY = touch.clientY
        }
    }

    function handleTouchEnd(e: TouchEvent) {
        if (isScrolling.value) return
        const touch = e.changedTouches[0]
        if (!touch) return
        const diff = touchStartY - touch.clientY

        if (Math.abs(diff) > 80) {
            if (diff > 0) {
                scrollToNext()
            } else {
                scrollToPrev()
            }
        }
    }

    // IntersectionObserver 更新当前 section
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = sections.indexOf(entry.target.id)
                if (index !== -1) {
                    currentSection.value = index
                }
            }
        })
    }

    let observer: IntersectionObserver | null = null

    // -------- 生命周期 ----------
    onMounted(() => {
        const container = containerRef.value
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: true })
            container.addEventListener('touchstart', handleTouchStart, { passive: true })
            container.addEventListener('touchend', handleTouchEnd, { passive: true })
        }
        window.addEventListener('keydown', handleKeydown)

        observer = new IntersectionObserver(observerCallback, {
            root: container,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        })

        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer?.observe(el)
        })
    })

    onUnmounted(() => {
        const container = containerRef.value
        if (container) {
            container.removeEventListener('wheel', handleWheel)
            container.removeEventListener('touchstart', handleTouchStart)
            container.removeEventListener('touchend', handleTouchEnd)
        }
        window.removeEventListener('keydown', handleKeydown)
        observer?.disconnect()
    })

    // 返回组件需要的内容
    return {
        containerRef,
        currentSection,
        navActiveId,
        scrollToSection,
    }
}