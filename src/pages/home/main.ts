import { createApp } from 'vue';
import Home from './home.vue';

import '../../assets/styles/reset.css'

document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a');
    if (!link) return;

    // 已有 target 属性的不处理
    if (link.hasAttribute('target')) return;
    // 忽略 download 下载链接
    if (link.hasAttribute('download')) return;
    const href = link.getAttribute('href');
    // 忽略无效链接
    if (!href || href.startsWith('javascript:') || href === '#') return;

    e.preventDefault();

    window.open(href, '_blank', 'noopener,noreferrer');
});

createApp(Home).mount('#app');
