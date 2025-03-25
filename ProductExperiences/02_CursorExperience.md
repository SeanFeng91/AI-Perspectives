# Cursor 秘籍

Cursor官方论坛：https://forum.cursor.com/top

## 过多尝试错误修复

http://www.xmsumi.com/detail/275

最近一直出现本机免费账号次数太多的问题。尝试了方法3，一直不行，从gmail切换成github暂时可以了，虽然都是同一个邮箱，可能Cursor认为是不同的账号。

@20250303，试了很多办法还是出现太多免费次数。
这次是通过管理员加这个https://github.com/yuaotian/go-cursor-help/tree/master 的成功：

``` 
irm https://raw.githubusercontent.com/yuaotian/go-cursor-help/refs/heads/master/scripts/run/cursor_win_id_modifier.ps1 | iex
```

## MCP

### 1. MCP是什么

> 【官方说明】MCP（模型上下文协议）是一种开放协议，它标准化了应用程序如何为大型语言模型（LLMs）提供上下文。可以将MCP视为AI应用程序的USB-C端口。正如USB-C提供了一种标准化的方式将您的设备连接到各种外设和配件一样，MCP为将AI模型连接到不同的数据源和工具提供了一种标准化的方式。

参考链接：https://mp.weixin.qq.com/s/L6noknpSp-ax2tFLKsIZkw

### 2. 怎么安装MCP
#### BrowserTools

> [BrowserTools](https://browsertools.agentdesk.ai/installation) 为 AI 代码编辑器和代理提供了监控和与您的网络浏览器交互的能力，以实现高效的调试和更顺畅的开发者体验——所有这一切都在安全可靠的方式中进行。
> 使用此 MCP 服务器工具，您可以启用 AI 代码编辑器和代理访问：

 * 控制台日志和错误
 * XHR 网络请求/响应
 * 截图功能
 * 当前选定的 DOM 元素

##### 主要安装步骤
1. [下载插件](https://github.com/AgentDeskAI/browser-tools-mcp/releases/download/v1.1.0/chrome-extension-v1-1-0.zip)

2. 谷歌浏览器安装拓展工具（选择刚才下载文件解压缩）

3. 在Cursor中添加该MCP工具
::: tip
官网在中关于cursor里面MCP设置的Command是 ：
npx @agentdeskai/browser-tools-mcp@1.1.0。但是实际需要
在前面加上cmd /c 
:::

::: details

Why cmd /c npx @agentdeskai/browser-tools-mcp Works
The /c parameter instructs cmd.exe to execute the following command and then terminate. Here’s what happens:

A new cmd.exe instance is launched
The command npx @agentdeskai/browser-tools-mcp is executed within this instance
The cmd.exe instance remains open as long as the MCP server runs
The MCP server runs as a child process of this cmd.exe instance
Why Running Without /c Fails
When you just run cmd (without /c), the following occurs:

A new cmd.exe instance is launched
This instance expects user input and interprets npx @agentdeskai/browser-tools-mcp as text that should be entered into the **new command line**, not as a command to be executed
Since Cursor likely passes the command via process start and not input simulation, this text is not entered into the new command line
The new cmd instance remains empty and appears to close immediately (or waits in the background for input)
:::

4. 运行成功后会开启一个cmd终端，表示运行正常

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740980667832_image.png)

5. 在chat对话框，使用agent模式，询问目前浏览器控制台有哪些错误，Cursor会调取MCP并且询问执行。

::: details
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740980764008_image.png)
:::


## 本地新项目to Github

```
git init
git add .
git commit -m "初始化项目"
```
在GitHub上创建新仓库【name】，不要新增readme文件

```
git remote add origin https://github.com/your-username/【name】.git
git branch -M main
git push -u origin main
```

## 提示词思路

**猫头虎提示词** 可以从中学习一下全栈开发涉及的一些入门点。好的项目会有哪些基础要求。

::: details
正文
1. 从项目框架开始，让 AI 帮你打基础！ 🏗️
问题：从零开始搭建项目时，常常因为没有头绪而卡住。

猫哥经验：利用 Cursor 生成项目框架，从文件结构到基础模块一步到位！

提示词：

“生成一个 Spring Boot 项目框架，支持 REST API 和数据库连接。”
“设计一个前后端分离的项目结构，前端用 Vue，后端用 Flask。”
“生成支持 JWT 的用户认证模块，包括数据库模型。”
“构建一个微服务架构项目，包含订单服务和支付服务的接口说明。”
“生成一个 TypeScript 项目模板，支持 ESM 模块化。”
“设计一个全栈项目，包含 Docker 化部署的配置文件。”
效果：有了清晰的框架，项目起步更轻松，开发效率倍增！🎯

2. 提示词越清晰，AI越聪明！ 🧠
问题：模糊提示词导致 AI 生成的代码不符合预期。

猫哥经验：写提示词时要具体、明确，需求越详细，结果越准确！

提示词：

“用 Python 实现一个支持多线程的爬虫程序，包含 URL 去重功能。”
“生成一个基于 Express.js 的 REST API 服务，支持分页查询。”
“重写以下代码，将时间复杂度优化为 O(n log n)。”
“生成一个单元测试覆盖率不低于 90% 的用户注册功能。”
“实现一个计算数组中位数的函数，支持输入校验。”
“用 TypeScript 实现一个简单的 WebSocket 聊天应用。”
效果：清晰的提示让 AI 更懂你的需求，开发更高效！✅

3. 把重复任务交给 AI，让自己更专注 🎛️
问题：生成 Mock 数据、接口文档这种重复工作耗时枯燥。

猫哥经验：让 Cursor 自动处理这些任务，节省时间，专注核心开发！

提示词：

“生成用户服务的接口文档，包括请求参数和返回值说明。”
“创建订单服务的 Mock 数据，包含 JSON 格式示例。”
“为以下代码生成 Swagger API 文档注释。”
“生成支持随机生成测试数据的工具函数，语言用 JavaScript。”
“创建 Postman 集合文件，包含以下接口定义。”
“生成数据库迁移脚本，新增用户表和订单表的关联。”
效果：重复任务交给 AI，省下时间做更重要的事！

4. 优化代码性能，让程序跑得更快！ 🔄
问题：代码性能不足、逻辑重复。

猫哥经验：用 Cursor 分析和优化代码，既提升性能，也能学到更优雅的写法！

提示词：

“优化以下代码片段，减少内存占用并提高运行速度。”
“重构代码，移除重复逻辑，提升可维护性。”
“为以下 SQL 查询添加索引优化建议。”
“改写以下 Python 脚本，支持多进程加速。”
“用面向对象的方式重写代码，增强扩展性。”
“将以下代码转换为异步模式，减少 I/O 阻塞。”
效果：程序跑得更快更稳定，用户体验提升明显！

5. 遇到新技术别慌，Cursor 帮你找资料 🔍
问题：学习新技术时，不知从何下手。

猫哥经验：用 Cursor 快速查询文档和示例代码，轻松上手！

提示词：

“生成 WebGL 的入门教程代码，渲染一个简单三角形。”
“学习 Flask 的路由功能，生成示例代码。”
“用 TensorFlow 生成第一个分类模型的完整代码。”
“实现一个支持登录功能的 Android 应用，语言用 Kotlin。”
“列举 Kubernetes 的核心概念，并生成 Deployment 示例。”
“用 Spring Security 实现一个基本的权限管理功能。”
效果：新技术快速入门，从学习到实践无压力！

6. 让 AI 帮你写测试用例，省时又省力！ 🧪
问题：测试用例多又复杂，手写太费时。

猫哥经验：让 Cursor 自动生成测试用例，覆盖率和规范性大幅提升！

提示词：

“为以下代码生成单元测试，覆盖率不低于 90%。”
“生成基于 Jest 的测试用例，测试用户登录功能。”
“分析以下代码，找出未覆盖的测试分支。”
“用 Pytest 编写测试用例，测试数据处理模块。”
“生成集成测试，模拟 API 的多种异常场景。”
“创建测试报告模板，包含通过率和错误详情。”
效果：测试流程自动化，开发更高效，质量更有保障！

7. 模块化开发，让项目更清晰！ 🚀
问题：大功能开发复杂度高，容易混乱。

猫哥经验：用 Cursor 拆分项目模块，降低复杂度，提升开发效率！

提示词：

“设计用户模块的基础结构，支持 CRUD 操作。”
“为订单模块生成服务层和控制器的分离代码。”
“用微服务架构设计支付模块，支持对账功能。”
“为以下功能模块设计单独的数据库表和关联关系。”
“生成模块化的日志系统，支持多种日志级别。”
“设计可插拔的插件模块，支持动态加载。”
效果：开发更清晰，团队协作更高效！

8. 老项目重构，AI 助你一臂之力！ 🛠️
问题：接手老项目，代码过时、逻辑混乱。

猫哥经验：用 Cursor 分析老代码，生成兼容性强的重构方案！

提示词：

“将以下代码升级到最新版本的框架语法。”
“分析老项目的技术栈，生成迁移到新框架的计划。”
“为老旧的 SQL 查询优化索引策略。”
“将 Koa 1.x 项目迁移到 Koa 2.x，并支持中间件。”
“重构以下代码，提升单元测试的覆盖率。”
“生成一个兼容性模块，支持老版本 API。”
效果：老项目焕发新生，交付速度显著提升！

9. 多模态开发，让产品更炫酷！ ✨
问题：设计与代码对接效率低，重复工作多。

猫哥经验：利用 Cursor 的多模态能力，从设计图直接生成代码！

提示词：

“根据设计图生成 HTML 和 CSS 文件，支持响应式布局。”
“用 Tailwind CSS 实现以下页面的样式设计。”
“将 Figma 设计图转换为 React 组件代码。”
“为以下页面生成暗黑模式的样式代码。”
“生成 Material-UI 风格的表单组件，支持表单验证。”
“创建一个卡片组件，用于展示设计图的内容样式。”
效果：前端开发效率倍增，用户体验大大提升！

10. 遇到性能瓶颈？让 AI 帮你优化！ 🚀
问题：项目性能不足，但问题难以定位。

猫哥经验：用 Cursor 定位性能问题，并生成优化方案！

提示词：

“分析以下代码，找出性能瓶颈所在。”
“优化 I/O 操作，提高数据处理速度。”
“为以下循环逻辑减少时间复杂度。”
“生成性能对比表，展示优化前后的耗时差异。”
“用异步方法替换阻塞代码，提升并发能力。”
“改进以下 SQL 查询的执行效率，避免全表扫描。”
效果：性能提升 40%，项目跑得又快又稳！
:::



## 参考资料
1. [Cursor AI编程助手不完全指南](https://changshaseo.net/cursor-ai-programming-assistant-guide.html)
2. [Cursor不用Rules会让你的项目失控！一文告诉你怎么使用](https://aibook.ren/archives/use-cursor-with-rules)