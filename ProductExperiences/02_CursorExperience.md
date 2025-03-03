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