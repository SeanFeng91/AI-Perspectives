# 就差冲个Cursor会员了，集合Claude 3.7的Cursor打通了项目开发的任督二脉

## Cursor 3.7的编程能力
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741163098677_image.png)

这是Claude 3.7发布后官方的一个代码能力测试图。强态度。具体强大的感受可以参考这篇[《Cursor多项目开发实测：Claude 3.7 Sonnet 编程实力吊打 Claude 3.5 Sonnet》](https://mp.weixin.qq.com/s/ZBEll9xb419nQvIqHm7XsQ)

有很多博主纷纷去使用Claude 3.7开发各类的产品，有做太空游戏的，有做小应用产品的。不得不说看到直接生成这样的前端页面的时候还是非常震惊的
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741164036943_image.png)

不只是前端样式给力，在开启thinking之后，稍微具备一些全栈开发能力的小伙伴可以直接实现原型——>MVP的蜕变。因为光光是原型的话，还有Figma、Uizard等一众审美更加在线，专注于前端的产品。

之前也有想过一些产品开发的想法，但还是要面对前端的设计、构建，后端的设置等一系列挑战。除了博客和依附于博客的一些功能页面开发（地图+AI、对话悬浮窗口等），还没有能够形成一个独立完整的产品或者MVP。好在有之前调试的一些经验，我模糊的知道，可以通过前端代码用Github托管在Cloudflare的page，后端接口通过其workers连接，并且使用KV和R2存储数据可以实现项目的闭环路径。

### 日记项目前端开发测试
信心满满，希望能够借助Claude+Cursor成为一名独立开发者哈哈！
我通过以下Prompt，成功的体验了前端开发的快乐：
```
Test 1

你是一位全栈工程师，同时精通产品规划和UI设计。我想开发一个ai日记app，现在需要输出原型图，请通过以下方式帮我完成app所有原型图片的设计。
1. 思考用户需要ai日记pp实现哪些功能
2. 作为产品经理规划这些界面
3. 作为设计师思考这些原型界面的设计
4. 使用html生成所有的原型界面，可以使用FontAwesome等开源图标库，让原型显得更精美和接近真实我希望这些界面是需要能直接拿去进行开发的
```

<style>
.image-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 20px 0;
}

.image-wrapper {
  flex: 0 0 100%;
  scroll-snap-align: start;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>

<div class="image-container">
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993579929_image.png" alt="原型图1">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993580776_image.png" alt="原型图2">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993583094_image.png" alt="原型图3">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993598742_image.png" alt="原型图4">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993604568_image.png" alt="原型图5">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993610016_image.png" alt="原型图6">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740993611838_image.png" alt="原型图7">
  </div>
</div>

作为一个日记软件，是不是有模有样的！但考虑日记app涉及到的编辑、存储、在线修改、图文混排、杂七杂八的小功能项太多。很难在短时间变成一个可用的产品，而且也不是说有什么读到的需求和想法。所以我打算从别的小项目开始实践。

### High Load
::: warning
We're experiencing high demand for Claude 3.7 Sonnet right now. Please upgrade to Pro or try again in a few minutes.
:::

这几天字节跳动发布了国内最强编程IDE-TRAE，同样接入了目前地表编程最强的Claude-3.7和3.7-thinking。本来Cursor的用户已经非常多了，Trae这一波宣传，直接导致Claude的服务器High Load。昨天下午到晚上，Cursor一直在提示Claude 3.7 High load。要么换个时间再试，要么冲个Pro会员吧哈哈哈。鬼知道冲完之后是不是还是high load。大部分的时间目前3.5的版本还是可以使用，但这两天体验下来，3.7的版本还是可以避免非常多错误，并且通过thinking提升代码的质量，提升通过率。

因为已经习惯了Cursor的界面和用法，现在也还可以通过白嫖账号的方式免费使用Claude模型，所以还没有下载Trae体验。要是还是一直High Load，可能要转投国产IDE了。

![ea924a1d69c95dc44b0450452ec81b6.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741160838918_ea924a1d69c95dc44b0450452ec81b6.png)

## 第一个项目：AI智能食谱推荐项目

我想第一个实践的小产品是做个每日菜谱推荐的页面。美食是一个伴随一生的需求，平时看《东京大饭店》、戈登拉姆齐教你烹饪，欣赏小红书各大美食博主的作品都有一种向往和期待，向往着自己能品尝到类似的美食，期待自己能制作出好吃的菜与亲人分享。国外大家都喜欢查阅一些美食书籍，国内比较火的就是用下厨房搜索食材烹饪方法。下厨房里面有个不错的功能，可以根据人数的不同，调整食材的配比数量，自动计算。在做面包时候特别好用。

想试着做这个产品主要有两个原因，第一是因为有时候的确缺乏一些想法，不知道烧什么。第二是觉得整个项目难度不是很高，主要功能是通过聪明的大模型根据提示，比如口味、食材生成一个食谱，最好有对应食谱的照片，然后展示在页面上。用户还可以上传记录自己根据食谱制作的菜品以及新的。如果是个爱烹饪的人，未来还可加入【家庭菜单】功能，这样就可以分享给来做客的朋友点菜了。基于以上的想法，我开始这次AI食谱推荐项目之旅。

### 项目提示词
```
【Prompt】
你作为一个全栈工程师，我想开发一个每日食谱项目，可以每天给我推荐3个菜，有精美的照片，并且告诉我每个菜的食谱和烹饪步骤，并且允许我选择要制作的菜，拍摄完成的作品。有一个时间轴或者日历让我可以回顾之前的历史。
2、作为产品经理规划这些界面
3、作为设计师思考这些原型界面的设计
4. 使用html生成所有的原型界面，可以使用FontAwesome等开源图标库，让原型显得更精美和接近真实我希望这些界面是需要能直接拿去进行开发的
```

### 项目前端页面
一直都说Claude的审美还是比较在线的，同样一段提示词，其他几个“比较强大”的模型（GPT-4o，Deepseek，Gemini-2.0-pro）生成的Html页面还是差距比较大。节选了几个Claude生成的样式图：

<div class="image-container">
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1741162780004_image.png" alt="原型图4">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1741162859068_image.png" alt="原型图5">
  </div>
  <div class="image-wrapper">
    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1741162876394_image.png" alt="原型图6">
  </div>
</div>

### 项目开发成果
限时版体验地址：https://daily-recipe.pages.dev/

打开的时候会自动生成两道菜谱。你可以在需求栏输入你的偏好，可以是菜系，也可以是菜名，也可以是食材。剩下的就交给AI吧！
通过语言模型生成具体菜谱、食材数量、烹饪过程，通过图像模型生成菜肴的照片。制作了精美的详情页面展示整个菜谱。

![b5842b49288fb8e55bd1159ec1a9311.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741162577978_b5842b49288fb8e55bd1159ec1a9311.png)

![15d1588a519fd3c57f7ba5350458e5f.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741162579960_15d1588a519fd3c57f7ba5350458e5f.png)

目前我们暂且称其为 V-0.1.0版本。

#### 技术栈
- 前端：HTML5 + CSS3 + JavaScript
  - TailwindCSS - 样式框架
  - Marked.js - Markdown渲染
  - PrismJS - 代码高亮
- 后端：Cloudflare Workers + Hono
- 存储：Cloudflare KV + R2
- AI服务：
  - Groq API - 菜谱生成
  - Silicon Flow API - 图片生成 Kwai-Kolors/Kolors (免费的图像生成模型，可以通过中文菜谱名称生成还差不多的图片)

#### 项目文件结构
```
/
├── src/
│   └── worker.js          # Worker主文件
├── public/
│   ├── index.html         # 首页
│   ├── recipe-detail.html # 食谱详情页
│   ├── gallery.html       # 作品展示页
│   ├── profile.html       # 个人中心页
│   ├── history.html       # 历史记录页
│   ├── js/
│   │   ├── api.js        # API交互层
│   │   └── main.js       # 主要逻辑
│   └── css/              # 样式文件
├── package.json
└── wrangler.toml         # Cloudflare配置
```

#### 项目部署需求

1. 配置Cloudflare
- 创建Worker
- 创建KV命名空间
- 创建R2存储桶
- 设置环境变量

2. 部署项目
```bash
npm run deploy
```

#### 项目涉及的环境变量

项目需要以下环境变量：

- `GROQ_API_KEY`: Groq API密钥，用于生成菜谱推荐
- `SILICONFLOW_API_KEY`: Silicon Flow API密钥，用于生成菜品图片
- `JWT_SECRET`: JWT签名密钥，用于用户认证
- `CF_ACCOUNT_ID`: Cloudflare账户ID
- `CF_API_TOKEN`: Cloudflare API Token
- `KV_NAMESPACE_ID`: KV命名空间ID，用于存储推荐历史
- `R2_BUCKET_NAME`: R2存储桶名称，用于存储用户上传的图片

## 有待完善提升内容
- [ ] 现在几乎没有考虑用户登录功能。需要尝试微信登录、Gmail登录怎么做。未来各类产品都会需要。
- [ ] 菜谱现在生成图片还比较生硬，希望能找到更好的api。
- [ ] 作为体验项目，能否加入AI烹饪视频。
- [ ] 能否利用每天100次免费的谷歌搜索，寻找图片之类。增加烹饪视频。
- [ ] 在图片和生成过程以及首页给出一些文字性介绍、提示。比如图片由AI生成。
- [ ] 要考虑使用次数限制问题。
- [ ] 要考虑增加订阅模式。

## 需求文档

项目的开发通过Cursor+Claude已经可以非常好的完成。但是对于相对复杂的功能产品，不能完全依赖于AI的生成，对应功能需求的思考还是要从实际场景、用户需求出发。这个也是产品的灵魂。

