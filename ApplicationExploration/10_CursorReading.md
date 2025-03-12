# 我用Cursor读了一本书，做了一个图文并茂的读书报告总结



<video controls loading="lazy">
  <source src="https://cloudflare-imgbed-1d8.pages.dev/file/1741790136977_12.03.2025%2022_34.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

网页地址：https://hapaiqi.top/AiWeb/JapanHistory

我把张宏杰的《简读日本史》作为附件，结合一下提示词提供给了Cursor+Claude 3.7-thinking进行创作。

``` markdown
我会给你一个文件，分析内容，并将其转化为美观漂亮的中文可视化网页作品集：

## 内容要求
- 保持原文件的核心信息，但以更易读、可视化的方式呈现
- 在页面底部添加作者信息区域，包含：
    * 作者姓名: [Sean]
    * 社交媒体链接: 至少包含微信
- 版权信息和年份

## 设计风格
- 整体风格参考Linear App的简约现代设计
- 使用清晰的视觉层次结构，突出重要内容
- 配色方案应专业、和谐，适合长时间阅读

## 技术规范
- 使用HTML5、TailwindCSS 3.0+（通过CDN引入）和必要的JavaScript
- 实现完整的深色/浅色模式切换功能，默认跟随系统设置
- 代码结构清晰，包含适当注释，便于理解和维护

## 响应式设计
- 页面必须在所有设备上（手机、平板、桌面）完美展示
- 针对不同屏幕尺寸优化布局和字体大小
- 确保移动端有良好的触控体验

## 媒体资源
- 使用文档中的Markdown图片链接（如果有的话）
- 使用文档中的视频嵌入代码（如果有的话）

## 图标与视觉元素
- 使用专业图标库如Font Awesome或Material Icons（通过CDN引入）
- 根据内容主题选择合适的插图或图表展示数据
- 避免使用emoji作为主要图标

## 交互体验
- 添加适当的微交互效果提升用户体验：
    * 按钮悬停时有轻微放大和颜色变化
    * 卡片元素悬停时有精致的阴影和边框效果
    * 页面滚动时有平滑过渡效果
    * 内容区块加载时有优雅的淡入动画

## 性能优化
- 确保页面加载速度快，避免不必要的大型资源
- 实现懒加载技术用于长页面内容

## 输出要求
- 提供完整可运行的单一HTML文件，包含所有必要的CSS和JavaScript
- 确保代码符合W3C标准，无错误警告
- 页面在不同浏览器中保持一致的外观和功能

请根据上传文件的内容类型（文档、数据、图片等），创建最适合展示该内容的可视化网页。
```

Claude 3.7有着强大的编程能力，可以制作出排版精美的前端页面。为了丰富阅读的体验，在第一版初稿完成后，过程中我让它增加了一些元素：时间轴、侧边导航栏、历史人物、思维导图等。Cursor 的Agent都成功的完成了任务。虽然说Cursor的Agent已经集合的网页搜索的能力。但是当我提出以下需求：
> 为了丰富阅读的体验，请结合总结介绍的文字内容增加最适合配上合适的图片和相关的视频

Claude 3.7给出了难以令人满意的答案。图片的链接**upload.wikipedia....**、YouTube的链接，都是一些自己杜撰的无法打开的地址。虽然到了这一步完全可以自己人工手动搜索去选择添加合适的多媒体内容，或者是将智能搜索的需求提交给城市的AI Web Search的产品，比如秘塔搜、腾讯元宝、GPT等等具备互联网搜索功能的智能引擎，然后人工把合适的内容再逐一添加到页面里面即可。但总觉得差一点意思。而且最近爆火的Manus其实说明了，大模型加上MCP「模型上下文协议」是可以很好的满足这样的需求的。

什么是MCP：

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741791918069_image.png)

[《MCP协议详解：复刻Manus全靠它，为什么说MCP是Agent进化的一大步？》](https://mp.weixin.qq.com/s/msgNGCH_ptirK42xqsGWsA)

他给大模型提供了一个标准接口去使用各种各样的工具与这个虚拟世界进行交互接触。像魔法一样，能力的天花板全靠想象力。给人的感觉就像我最近爱玩的《小丑牌》游戏，通过小丑牌的组合，实现各种各样的combo，让结果出现**无限的可能**。你可以多线程集合各种各样的MCP，让大模型如虎添翼！

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741792435665_image.png)

## 让Cursor Agent中的模型有更好的搜索Tools

近期刚好碰上[Cursor](https://github.com/oslook/cursor-ai-downloads?tab=readme-ov-file) 更新了它0.47的版本，修复了Agent只能添加一张图片的bug，同时修改了MCP的接入方式。


### [Tavily](https://docs.tavily.com/documentation/mcp)

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741793271837_image.png)

每个月1000条免费搜索。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741793349188_image.png)
官方提供的MCP配置后始终无法连接成功

https://github.com/Tomatio13/mcp-server-tavily

https://github.com/fengin/search-server