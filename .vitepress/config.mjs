import { defineConfig } from 'vitepress'
import readingTime from 'vuepress-plugin-reading-time'
import { withMermaid } from "vitepress-plugin-mermaid";


// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "AI Perspectives",
    description: "从多元的角度观察这个充满",
    
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      search: {
        provider: 'local'
      },
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
              
              { text: '我们能做什么', link: '/ObservationAndThought/whatWeCan.md' },
            ]
          }
        ],
        '/ApplicationExploration/':[
          {
            text: 'AI 应用场景探索',
            items: [
              // { text: '用AI生成一档自己的播客节目', link: '/ApplicationExploration/01_AIBoke.md' },
              
              { text: '1. 在VitePress中集成AI聊天助手', link: '/ApplicationExploration/03_AddAIChatWidget.md' },
              { text: '2. AI搜索进化史：从OpenAI到微信DeepSeek', link: '/ApplicationExploration/04_AISearchTools.md' },
              { text: '3. 还没收到微信的AI搜索入口么，先试试用Siri与AI对话', link: '/ApplicationExploration/05_AIconnectSiri.md' },
              { text: '4. 我是如何通过AI辅助我研究《实验室设计》课题的', link: '/ApplicationExploration/02_HowAIAsisResearch.md' },
              { text: '8. 集合Claude 3.7的Cursor打通了项目开发的任督二脉', link: '/ApplicationExploration/08_Cursor+Claude.md' },
            ]
          }
        ],
        '/ProductExperiences/':[
          {
            text: 'AI 产品评测与体验',
            items: [
              { text: '1. Ragflow一个非常容易上手的RAG产品', link: '/ProductExperiences/01_RagflowBlog.md' },
              { text: '2. Cursor 使用秘籍', link: '/ProductExperiences/02_CursorExperience.md' },
            ]
          }
        ],
        '/KnowledgeSharing/':[
          {
            text: 'AI 知识普及与分享',
            items: [
              { text: '文章收集', link: '/KnowledgeSharing/articleList.md' },
              { text: '资讯收集', link: '/KnowledgeSharing/infoWeb.md' },
              { text: '产品收集', link: '/KnowledgeSharing/productList.md' },
              { text: '工具收集', link: '/KnowledgeSharing/toolsList.md' },
              { text: '观点收集', link: '/KnowledgeSharing/opinionList.md' },
              { text: '公开课程', link: '/KnowledgeSharing/openLessons.md' },
            ]
          }
        ],
        '/About/':[
          {
            text: '关于本站',
            items: [
              {text: '博客未来计划', link:'/About/todoList.md'},
              { text: 'Docs:Markdown使用案例', link: '/About/markdown-examples' },
              // { text: 'Runtime API 使用案例', link: '/About/api-examples' },
              { text: '日志', link: '/About/log.md' }
            ]
          }
        ]
      },
          
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },

    vite: {
      ssr: {
        noExternal: ['@vueuse/core']
      }
    },

    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('vue3-')
        }
      }
    },

    markdown: {
      config: (md) => {
        md.use(readingTime, {
          // 中文文本计数设置
          wordsPerMinute: 300,
          // 确保计数包含中文字符
          wordPattern: /[\w\u4e00-\u9fa5]+/g,
          // 是否输出调试信息
          debug: true
        })
        md.mermaid = {
          theme: 'default',
          darkMode: true,
          sequence: {
            showSequenceNumbers: true,
          },
        }
      }
    }
  })
)
