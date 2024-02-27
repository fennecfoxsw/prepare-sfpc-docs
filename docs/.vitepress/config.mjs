import { defineConfig } from 'vitepress';
import { SearchPlugin } from 'vitepress-plugin-search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SFPC 준비하기',
  description: 'SFPC를 준비하기 위한 문서',
  sitemap: {
    hostname: 'https://sfpc.fennecfoxsw.dev',
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: nav(),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FennecFoxSW/prepare-sfpc-docs',
      },
    ],
    footer: {
      message: 'SFPC를 준비하는 학생을 위해 ❤️와 ☕로 만듦.',
      copyright: `이 문서의 모든 내용은 <a href="https://github.com/FennecFoxSW/prepare-sfpc-docs">FennecFoxSW/prepare-sfpc-docs</a>의 기여자에 의해 작성되었으며, 크리에이티브 커먼즈 라이선스 및 CC0에 따라 사용하실 수 있습니다.
        <br />자세한 내용은 <a href="/about/license.html">저작권 라이선스</a>를 확인하세요.`,
    },

    sidebar: {
      '/past-questions/': {
        base: '/past-questions/',
        items: sidebarPastQuestions(),
      },
      '/about/': {
        base: '/about/',
        items: sidebarAbout(),
      },
      '/guides/': {
        base: '/guides/',
        items: sidebarGuides(),
      },
      '/environment/': {
        base: '/environment/',
        items: sidebarEnvironment(),
      },
    },
    editLink: {
      pattern:
        'https://github.com/FennecFoxSW/prepare-sfpc-docs/edit/main/docs/:path',
      text: 'GitHub에서 이 페이지 수정하기',
    },

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
    notFound: {
      title: '페이지를 찾을 수 없습니다.',
      quote:
        '하지만 방향을 바꾸지 않고 계속 바라보면 결국 원하는 곳에 도달할 수 있을겁니다.',
      linkText: '홈으로 이동하기',
    },
  },
  markdown: {
    math: true,
  },
  plugins: [
    SearchPlugin({
      buttonLabel: '검색',
      placeholder: '문서 검색하기',
    }),
  ],
});

function nav() {
  return [
    {
      text: 'SFPC 공식 사이트',
      link: 'https://www.kait.re.kr/sfpc',
    },
    {
      text: '기출 문항',
      link: '/past-questions/list',
      activeMatch: '/past-questions/',
    },
    {
      text: '가이드',
      link: '/guides/programming-study',
      activeMatch: '/guides/',
    },
    {
      text: 'SFPC 저지 환경',
      link: '/environment/judge-environment',
      activeMatch: '/environment/',
    },
    {
      text: '이 문서에 대해',
      link: '/about/about-docs',
      activeMatch: '/about/',
    },
  ];
}

function sidebarPastQuestions() {
  return [
    {
      text: '기출 문항',
      collapsed: false,
      items: [
        { text: '기출 문항 목록', link: '/list' },
        { text: '기출 문항 풀이', link: '/solutions' },
      ],
    },
  ];
}

function sidebarAbout() {
  return [
    {
      text: '이 문서에 대해',
      collapsed: false,
      items: [
        { text: '이 문서에 대해', link: '/about-docs' },
        { text: '이 문서를 만든 이유', link: '/why-this-document' },
        { text: '저작권 라이선스', link: '/license' },
      ],
    },
  ];
}

function sidebarGuides() {
  return [
    {
      text: '가이드',
      collapsed: false,
      items: [
        { text: '프로그래밍 공부하는 방법', link: '/programming-study' },
        { text: '알고리즘/PS 공부하는 방법', link: '/ps-study' },
        { text: '유용한 링크', link: '/useful-links' },
      ],
    },
  ];
}

function sidebarEnvironment() {
  return [
    {
      text: '저지 환경',
      collapsed: false,
      items: [
        { text: '저지 환경', link: '/judge-environment' },
        { text: 'DOMjudge 팀 메뉴얼', link: '/team-manual' },
      ],
    },
  ];
}
