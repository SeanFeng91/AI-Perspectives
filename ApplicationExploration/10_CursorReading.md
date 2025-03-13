# 我用Cursor读了一本书，做了一个图文并茂的读书报告总结

之前在阅读《钢铁、病毒、枪炮》的时候，面对里面各式各样的地名、人名、时间、历史时间，在全球范围，人类历史时间轴上演化。许多历史人物、国家名称、地理特征多多少少都有些陌生。在阅读的时候，我需要不断的去搜索，去了解，去记忆。于是就有一个想法，就想着如果能够把书中的内容做成一个可视化的网页，那该多好。

最近看到了数字卡兹推文讲到可以借助提示词，让大模型生成可视化的网页，做一个物理规律的动画演示页面等等。让我看到了这个想法的可行性。我也急切的想用提示词来生成一个可视化的网页。近期刚好有出行日本的计划，于是就想着把张宏杰的《简读日本史》做成一个可视化的网页，一方面可以加深对书本内容的理解，另一方面可以作为出行日本的攻略。也希望通过具体的实践来摸索中间的难点，最终去实现可视化的《钢铁、病毒、枪炮》。

探索的成果还是非常令人满意的：

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


### 接入[Tavily](https://docs.tavily.com/documentation/mcp)

> Empowering your AI applications with real-time, accurate search results tailored for LLMs and RAG.

Tavily在众多的Agent平台中都可以看见接入的身影，他能够为大模型提供实时的信息用于分析和增强检索。并且非常友善的提供了每月1000条的免费搜索额度。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741793271837_image.png)

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741793349188_image.png)

官方提供的MCP配置后始终无法连接成功。我找到了另外一个开源可以链接tavily的项目：
https://github.com/Tomatio13/mcp-server-tavily

#### 配置过程
参考了官方的Readme。实际的配置过程如下：
1. 克隆到本地
```
git clone https://github.com/Tomatio13/mcp-server-tavily.git
```

2. 在Cursor的MCP中添加。其中0.47版本的Cursor直接使用了一个mcp.json文件，把tavily的部分加入即可。
``` json
"mcpServers": {
  "tavily-search": {
    "command": "uv",
    "args": [
      "--directory",
      "C:\\your_path\\mcp-server-tavily",
      "run",
      "tavily-search"
    ],
    "env": {
      "TAVILY_API_KEY": "YOUR_TAVILY_API_KEY",
      "PYTHONIOENCODING": "utf-8"
    }
  }
}
```
然后发现光这样配置似乎不行。还要执行下本地端运行部分：
```
TARGET_DIR=/path/to/mcp-server-tavily
cd 到刚刚克隆的mcp-server-tavily文件夹
set TAVILY_API_KEY="your-api-key"
set PYTHONIOENCODING=utf-8
uv --directory C:\\your_path\\mcp-server-tavily run tavily-search

等待安装完成后就重新刷新一下mcp里面对于的组件，就绿灯可以使用了。
```
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741845913873_image.png)

### 接入秘塔、bocha、Brave Search
项目地址：https://github.com/fengin/search-server ，作者凌封。

::: tip

  使用Python开发，支持异步处理和高并发请求，目前支持三种搜索引擎选择：

  Brave Search ：国外一家专业提供搜索接口服务产品

  秘塔（Metaso）搜索：秘塔AI搜索的逆向实现接口，非官方接口

  博查（bocha）搜索：国内Search API市场占有率最高的搜索API产品

:::

可以完全按照官方Readme进行部署。唯一没有成功的就是用它推荐的虚拟银行卡注册Brave Search（每月2000条免费额度，但需要挂接银行卡）。

### 使用体验

先简单来看一下Cursor Agent调用两个搜索引擎检索的结果：

**秘塔搜**
秘塔搜本身基于Deepseek的检索是比较强大的，给出的回答已经经过了很好的优化。作为资料检索是一个非常不错的工具。而且官网还有单独的图片、视频、学术等检索。作者提供的全网版本可以兼顾，但是在单独信息类别上还需要二次的筛选。给出的参考资料来源也十分广泛。针对视频的搜索主要还是基于bilibili。

返回搜索结果展示：

::: details

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741846854419_image.png)
关于“绳文时代陶器高清图片”的问题，根据我搜索到的资料，可以总结如下：
1. **绳文时陶器的特点**  
   绳文时代的陶器以其独特的纹饰和装饰风格著称。纹饰包括指甲、指尖、捻线、贝壳、木制或制的刮铲等工具绘制的图案，以及粘土上压印的纹路[[1]][[8]][[23]]。陶器的形状多样，从早期的尖底陶器到中期的深钵形陶器，再到晚期的复杂形陶器，反映了绳文文化的演变[[14]][[27]]。火焰形陶器是绳文时代中期的代表作品，其表面装饰有遒劲有力的纹饰，展现了绳文人丰富的创造力[[2]][[8]]。2. **高清图片的获取途径**  
   - **展览与博物馆**：绳文时代的陶器在多个博物馆和展览中展出，例如东京国立博物馆的“绳文之美”展览，展示了从草创期到晚期日本不同地域的绳文陶器[[8]][[23]]。此外，仙台市富泽考古遗址博物馆等地也展示了绳文陶器的高清图片和3D模型[[4]]。![石器时代 | 绳纹陶器-搜狐](https://oss.metaso.cn/metaso/thumbnail/21884094eb3ee17893edf5024a3900b0.jpg)
   - **古报告与研究文献**：一些考古报告和研究文献中附有绳文陶器的高清图片。例如，《昭和52年度当圃場整備荒尾町南部地区発掘調査》中详细描述了绳文陶器的纹和特征，并附有相关图片[[11]]。   - **网络资源**：一些新闻报道和学术文章中也提供了绳文陶器的高清图片。例如，《澎湃新闻》的文章中展示了火焰形陶器和其他典型绳文陶器的高清图片[[1]][[2]]。
3. **具体图片示例**  
   - **火焰形陶器**：这种陶器以其表面的强劲纹饰和立体装饰闻名，是绳文时代中期的代表作品[[2]][[8]]。   - **单嘴深钵形陶器**：这种陶器属于绳文时代前期，具有独特的单嘴设计[[1]][[23]]。   - **龟冈式陶器**：晚期东北地区的代表作品，造型复杂且装饰精美[[12]]。4. **获取高清图片的建议**  
   - 可以访问东京国立博物馆、仙台市富泽考古遗址博物馆等机构的官方网站，查看相关展览的高清图片。   - 查阅《昭和52年度当圃場整備荒尾町南部地区発掘調査》等考古报告，获取详细的纹饰和形态描述[[11]]。
   - 关注《澎湃新闻》等新闻媒体发布的相关文章，获取高清图片[[1]][[2]]。

如果您需要绳文时代陶器的高清图片，可以通过上述途径获取。这些图片不仅展示了陶器的外观，还反映了绳文文化的艺术魅力和历史价值。


参考文献:

[1] 绳文之美 一万年美的萌动与六件日本史前国宝
    链接: https://collection.sina.cn/huizong/2018-07-03/detail-ihevauxi3897442.d.html
    来源: 手机新浪
    日期: 2018年7月3日

[2] 绳文之美：一万年间美萌动与六件日本史前国宝
    链接: https://www.thepaper.cn/newsDetail_forward_2192112?commTag=true
    来源: 澎湃新闻-专注时政与思想-ThePaper.cn
    日期: 2018年07月03日

[3] 長野県埋蔵文化財センター発掘調査報告書133
    链接: None
    来源: None
    日期: None

[4] 地底の森ミュージアム・縄文の森広場年報
    链接: None
    来源: None
    日期: None

[5] 古代陶器研究——第7号：远贺川系壶
    链接: None
    来源: None
    日期: None

[6] 縄文時代の飯綱町
    链接: None
    来源: None
    日期: None

[7] 湖西市文化财调查报告第6集
    链接: None
    来源: None
    日期: None

[8] 文--一万年间美的萌动”的大展7月3日在日本东京国立博物馆开幕
    链接: http://news.cang.com/info/550055_1.html
    来源: 华夏收藏网
    日期: 2018年07月03日

[9] ウチナー探検博物館学習ノート－高校生版－
    链接: None
    来源: None
    日期: None

[10] 法隆寺献纳宝物特别调查报告
    链接: None
    来源: None
    日期: None

[11] 昭和55年度當圃場整備事業荒砥南部地区记係3理藏文化财掘调查報告書
    链接: None
    来源: None
    日期: None

[12] 绳文土（传青森县寺下遗迹出土）
    链接: https://www.narahaku.go.jp/chinese/collection/1363-0.html
    来源: None
    日期: 2021年7月

[13] 暖风熏得游人醉，“直把奈良作长安”考古学者眼的日本奈良
    链接: http://m.mzzyk.com/eportal/ui?pageId=595416&articleKey=770016&columnId=595066
    来源: None
    日期: 2024年10月21日

...

:::

**Tavily**
可以看到Tavily本身也接入了AI，给出的搜索结果被限定在了3个以内，而且检索的类型比较的单一，更多是网页，即使是搜索图片，它返回的结果是带有图片的网站地址，而不是直接是图片链接。所以这方面秘塔搜做的更加好。

Tavily的搜索结果展示：

::: details

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741848359604_image.png)

AI Answer:
日本绳文时代陶器以绳纹装饰著称，常见图案包括人和动物。Tokyo National Museum展示了这些陶器，其特征是复杂的纹饰和尖底形状。

Search Results:

1. 关于绳文时代
URL: https://jomon-japan.jp/zh-cn/learn/jomon-culture
Summary: Summary not found


2. 日本美术的黎明期绳文·弥生·古坟时代- 展览
URL: https://www.tnm.jp/modules/r_exhibition/index.php?controller=item&id=6195&lang=zh_cn
Summary: Summary not found


3. Figures and Animals as Decoration on Jomon Pottery
URL: https://www.tnm.jp/modules/r_free_page/index.php?id=1617&lang=en
Summary: Summary not found

:::

回到为Cursor引入Agent的初心，希望它在查找参考资料的时候可以给出不要杜撰的图片、视频。目前其实只完成了第一步，能够进行内容的搜索和阅读，更多的是文字部分的功能。如何在众多参考资料中挑选出合适的图片，不被标题党迷惑找到合适的视频，其实还需要给Agent添加更多合适的工具，比如网页的浏览，视频的理解等等。现阶段还是只能做到在它检索的众多参考资料中，人为的判断添加合适的资料来完善页面内容。


![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741849994454_image.png)

当然这只是书籍可视化的第一步。但这也彻底打开了我们的想象力，从让AI总结思维导图又重新带入到了全新的高度。就如之前说的，我们现在要做的是打开想象力，为大模型找到那些可以触发Combo的“小丑牌”,指引它去完成更多不可思议的事情。
