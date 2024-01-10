import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SFPC 준비하기',
  description: '이 문서는 2023 SFPC 전북을 준비하기 위한 문서입니다.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '기출 문항', link: '/past-questions' },
    ],

    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' },
        // ],
      },
    ],

    outline: {
      label: '차례',
    },
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지',
    },
    lightModeSwitchTitle: '밝은 테마로 변경',
    darkModeSwitchTitle: '어두운 테마로 변경',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '맨 위로',
  },
  markdown: {
    math: true,
  },
});
