# 给 VitePress 博客添加 AI 对话助手：从构思到实现

你是否曾经想过在浏览博客时能随时和 AI 助手对话？在这篇文章中，我将分享如何在 VitePress 博客中添加一个智能对话助手的完整过程。这个小助手不仅能够实时回答问题，还支持 Markdown 渲染、代码高亮，最重要的是 - 它能记住对话的上下文！

## 💡 灵感来源

在浏览其他技术博客时，我注意到很多网站都有在线客服或反馈功能。既然我的博客主题是关于 AI 的，为什么不直接集成一个 AI 助手呢？这样读者在阅读文章时遇到问题，就可以直接询问 AI 助手了。

## 🎯 需求分析

在开始编码之前，我列出了几个核心需求：

1. **便捷性**：悬浮在右下角，随时可用
2. **智能性**：使用先进的 AI 模型（Gemini）
3. **美观性**：支持 Markdown、代码高亮
4. **连贯性**：保持对话上下文
5. **安全性**：保护 API 密钥

## 🛠️ 技术选型

经过调研，我选择了以下技术栈：

- **前端**：Vue 3 + VitePress（已有框架）
- **后端**：Cloudflare Workers（轻量级、免费）
- **AI 模型**：Google Gemini（强大且经济）
- **工具库**：markdown-it（Markdown 渲染）、highlight.js（代码高亮）


## 🚀 开发过程

### 1. 项目结构设计

首先规划了需要创建的文件:

```
.
├── .vitepress/
│   ├── components/
│   │   └── AIChatWidget.vue    # 对话组件
│   ├── theme/
│   │   ├── index.js           # 主题配置
│   │   ├── Layout.vue         # 布局组件
│   │   └── custom.css         # 自定义样式
├── workers/
│   └── AI_Perspective_worker.js # Worker 服务
├── .env.local                  # 环境变量
├── wrangler.toml              # Worker 配置
└── package.json               # 项目依赖
```

### 2. 核心组件开发

#### 2.1 对话组件 (AIChatWidget.vue)

主要功能代码:

```vue
<template>
  <div class="ai-chat-widget">
    <!-- 悬浮按钮 -->
    <button class="chat-toggle">
      <div class="icon">🤖</div>
    </button>
    
    <!-- 对话窗口 -->
    <div class="chat-window">
      <!-- 消息列表 -->
      <div class="chat-messages">
        <div v-for="message in messages"
             :class="['message', message.role]">
          <!-- Markdown 渲染 -->
          <div class="message-content markdown-body" 
               v-if="message.role === 'assistant'"
               v-html="renderMarkdown(message.content)">
          </div>
        </div>
      </div>
      
      <!-- 输入框 -->
      <div class="chat-input">
        <textarea v-model="userInput" 
                  @keydown.enter.prevent="sendMessage"
                  @input="adjustTextareaHeight">
        </textarea>
      </div>
    </div>
  </div>
</template>
```

**遇到的问题**：
1. 最初使用 Bearer Token 方式认证失败
   ```javascript
   // ❌ 错误方式
   headers: {
     'Authorization': `Bearer ${env.GEMINI_API_KEY}`
   }
   ```
   
   ```javascript
   // ✅ 正确方式
   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${env.GEMINI_API_KEY}`;
   ```

2. 开发环境配置困扰
   ```bash
   # 解决方案：使用 .dev.vars 文件
   echo "GEMINI_API_KEY=your-key" > .dev.vars
   ```
实现的关键功能:
- 悬浮按钮切换对话窗口
- 消息列表展示
- Markdown 渲染
- 代码高亮
- 输入框自适应高度
- 新消息自动滚动

#### 2.2 Worker 服务 (AI_Perspective_worker.js)

核心处理逻辑:

```javascript
async function handleGeminiChat(request, env) {
  // 1. 验证 API Key
  if (!env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY 未设置');
  }

  // 2. 处理请求数据
  const { messages } = await request.json();
  
  // 3. 构建对话历史
  const contents = messages.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  // 4. 调用 Gemini API
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 10000
      }
    })
  });
}
```

实现的功能:
- API 密钥验证
- 请求参数处理
- 对话历史管理
- 错误处理
- CORS 支持

### 3. 主题集成

在 VitePress 主题中集成对话组件:

```javascript
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import AIChatWidget from '../components/AIChatWidget.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('AIChatWidget', AIChatWidget)
  }
}
```

### 4. 样式优化

重点处理了以下样式:

```css
/* 响应式设计 */
@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
  }
}

/* 暗色主题 */
.dark {
  --vp-c-brand: #4abf8a;
  --vp-c-bg-soft: #1a1a1a;
}

/* 消息气泡 */
.message-content {
  padding: 12px 16px;
  border-radius: 15px;
  background: var(--vp-c-bg-soft);
}
```

## 🎨 细节打磨

### 响应式设计

```css
@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
  }
}
```

### 暗色主题适配

```css
.message-content {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
```

### 用户体验优化

1. 输入框自适应高度
2. 新消息自动滚动
3. 加载状态提示

## 🔒 安全性考虑

1. 环境变量管理
   ```bash
   # 生产环境
   wrangler secret put GEMINI_API_KEY
   
   # 开发环境
   .env.local
   .dev.vars
   ```

2. 文件保护
   ```gitignore
   .env*
   .dev.vars
   ```

## 🎯 未来计划

1. **功能增强**
   - 消息历史保存
   - 图片识别支持
   - 语音交互

2. **性能优化**
   - 消息长度限制
   - 缓存机制
   - 打字机效果

3. **体验提升**
   - 更多动画效果
   - 快捷指令支持
   - 主题定制

## 📝 总结

这个项目让我深入体验了现代 Web 开发的方方面面：

- 前端组件设计
- 后端服务架构
- API 安全性考虑
- 用户体验优化

最让我惊喜的是，这个 AI 助手不仅实现了预期功能，还在实际使用中展现出了很好的实用性。当然，这只是一个开始，未来还有很多优化空间。

如果你也想为自己的博客添加类似功能，希望这篇文章能给你一些启发。完整的代码已经开源，欢迎参考和改进！

> 提示：记得保护好你的 API 密钥，不要像我一开始那样直接写在代码里！😅

## 🔗 相关资源

- [Gemini API 文档](https://ai.google.dev/docs)
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [VitePress 文档](https://vitepress.dev/)
- [完整代码仓库](#) 


好的,我来帮您重写这篇文章,重点介绍整个开发过程。

# 给 VitePress 博客添加 AI 对话助手的开发历程

## 🎯 任务背景

最初收到的任务是:在 VitePress 博客中添加一个智能对话助手,要求:
1. 在博客右下角放置一个悬浮的对话按钮
2. 点击后展开对话窗口
3. 接入 Gemini API 实现智能对话
4. 支持 Markdown 渲染和代码高亮
5. 保持对话上下文连贯性
6. 适配移动端和暗色主题



