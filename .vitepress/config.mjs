import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Perspectives",
  description: "从多元的角度观察这个充满",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '观察', link: '/ObservationAndThought/index.md' },
      { text: '探索', link: '/ApplicationExploration/index.md' },
      { text: '体验', link: '/ProductExperiences/index.md' },
      { text: '知识', link: '/KnowledgeSharing/index.md' },
      { text: '关于', link: '/About/index.md' }
    ],
    outline: {
      level: [1, 6], // 显示 h2 到 h4 的标题
      label: '本页目录'
    },
    sidebar: {
      '/ObservationAndThought/':[
        {
          text: 'AI 趋势观察与思考',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/ApplicationExploration/':[
        {
          text: 'AI 应用场景探索',
          items: [
            { text: '用AI生成一档自己的播客节目', link: '/ApplicationExploration/01_AIBoke.md' },
          ]
        }
      ],
      '/ProductExperiences/':[
        {
          text: 'AI 产品评测与体验',
          items: [
            { text: 'Ragflow一个非常容易上手的RAG产品', link: '/ProductExperiences/01_RagflowBlog.md' },
          ]
        }
      ],
      '/KnowledgeSharing/':[
        {
          text: 'AI 知识普及与分享',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/About/':[
        {
          text: '关于本站',
          items: [
            { text: 'Markdown使用案例', link: '/About/markdown-examples' },
            { text: 'Runtime API 使用案例', link: '/About/api-examples' },
            { text: '日志', link: '/About/log.md' }
          ]
        }
      ]
    },
        
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
