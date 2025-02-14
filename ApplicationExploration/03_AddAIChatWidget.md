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

## 🚀 开发历程

### 第一步：创建 Worker 服务

首先需要解决的是如何安全地调用 Gemini API。直接在前端调用是不行的，API 密钥会暴露。于是我选择了 Cloudflare Workers 作为中间层。

```javascript
// workers/AI_Perspective_worker.js
async function handleGeminiChat(request, env) {
  // ... Worker 代码
}
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

### 第二步：打造对话组件

这是最有趣的部分！我需要创建一个既美观又实用的对话界面。

```vue
<template>
  <div class="ai-chat-widget">
    <button class="chat-toggle">🤖</button>
    <!-- 聊天窗口 -->
  </div>
</template>
```

**遇到的问题**：
1. 组件不显示
   - 原因：VitePress 主题配置不当
   - 解决：正确配置 Layout 组件

2. 消息气泡样式
   - 挑战：用户消息靠右，AI 消息靠左
   - 解决：使用 Flex 布局 + align-items: flex-end

3. Markdown 渲染问题
   ```javascript
   const md = new MarkdownIt({
     html: true,
     highlight: function (str, lang) {
       // 代码高亮处理
     }
   })
   ```

### 第三步：上下文对话实现

这是最具挑战性的部分。如何保持对话的连贯性？

```javascript
// 发送完整对话历史
const contents = messages.map(msg => ({
  role: msg.role === 'user' ? 'user' : 'model',
  parts: [{ text: msg.content }]
}));
```

**遇到的问题**：
1. 内存占用
   - 问题：对话历史越来越长
   - 解决：计划添加历史消息截断机制

2. 响应时间
   - 问题：消息越多，响应越慢
   - 优化：考虑使用消息摘要

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