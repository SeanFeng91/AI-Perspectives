# 还没收到微信的AI搜索入口么，先试试用Siri与AI对话

收到微信的AI搜索入口已经有几天了，除了最开始的兴奋，测试了几次，最近使用的频率也下来了。原因除了新鲜劲过了之外，用手机键盘长篇大论的输入Prompt，然后看着小屏幕上Deepseek详尽的分析思考，少许有些打字的麻烦以及阅读的疲惫感，毕竟整天对着电脑屏幕，有其他同样便捷的Deepseek聊天工具，用键盘+大屏幕跟DS唠嗑体验更加。

但毕竟键盘+屏幕不是随时随地都有的，开车路上也不方便打字，要是有个接入了AI的语音助手，那就方便多了。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740013117823_image.png)

前不久新闻报道苹果公司计划在2025年中期之前在中国的iPhone上引入AI功能。经过测评模型能力、服务落地能力，似乎最终选择了与阿里巴巴将合作为中国iPhone用户开发AI功能，并未选择红极一时的Deepseek。阿里巴巴的股价也因此蹭蹭蹭的上窜了一波。

当国外的Siri已经有了Intelligent的时候，你的siri还是“我在网页上找到了这些信息，请在你的iphone上查看”。其实，苹果在早些年已经收购了workflow，改名为快捷指令（Shortcut），里面提供了丰富的指令，可以实现类似Dify、Coze等平台的工作流机制，通过大模型对话的api结合语音输入进行交互。大致的流程如下：

> 用户语音输入 → 转文本 → 构造API请求 → 发送到AI → 解析响应 → 语音/文本输出

## 免费大模型API获取
考虑到官方Deepseek最近暂停了API充值以及10元的免费额度，且因为用户众多，响应时长也比较久。我们选了几个平替，几种目前国内外比较好用的提供免费额度的大模型api获取方式：

### 1. 硅基流动

当前硅基流动官网注册后，会赠送 14 元的奖励，可以用于创建 API key后使用。

硅基流动 API硅基流动官网注册：https://cloud.siliconflow.cn/i/XRBFnb0r 
邀请码：XRBFnb0r。你会获得 14 元的免费额度，相当于 2000万 tokens，并且没有时间限制。

具体创建 API key步骤如下:

1️⃣：左侧 API 密钥，点击右侧的新建 API 密钥

2️⃣：输入API 密钥名称，随便填一个都行，例如 deepseek

3️⃣：点击 密钥 复制就行了（在后面快捷指令中会用到）
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740017317404_image.png)

### 2. 阿里云百炼

通过支付宝或者淘宝等账号登录阿里云百炼，地址：https://bailian.console.aliyun.com/ 。 平台本身跟百度、腾讯云、华为等类似，在平台中集合了多种模型的体验。在Deepseek火爆之后，也纷纷宣布接入Deepseek大模型。有别与硅基流动等模型集合平台，百炼还具备了数据处理、模型调优、模型监测等模型训练相关的能力。

在模型广场中可以看到，除了自家的通义千问，还有Deepseek、百川、智谱等。
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740018195203_image.png)

为了让大家有更好的体验，在注册之后，Deepseek相关满血版R1和v3模型提供了1000万的免费Token，有效期是180天。点击右上角的查看我的api，同样可以创建对应模型的API key。
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740018289633_image.png)

### 其他选项
1. GroqCloud: 国外的GroqCloud，提供了llama、蒸馏版Deepseek、qwen等的模型，需要梯子。完全免费。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740020593719_image.png)

2. 火山引擎：为每个模型提供了 50万 免费tokens。稍稍有些小气。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740021215094_image.png)

当然，如果你不想用Deepseek，也还可以尝试Kimi等同类型的产品。


## 快捷指令实现
有了免费的API之后，接下来就是如何让你的Iphone通过地址+api的方式实现与大模型的通话了。

具体的实现步骤如下：
1. 听写文本（获取用户语音输入，当然也可以是文字，但是这里主要考虑是Siri的语音输入，由Siri帮助转为文本）
2. URL（设置API地址）
3. 获取URL内容（配置Headers和Body）
4. 从JSON中获取值（提取`choices.0.message.content`）
5. 朗读文本/显示结果

如果你只是想开箱即用，目前已经有比较成熟的Shortcut，你只需要通过iphone打开以下链接，就可以自动导入，然后复制黏贴你刚刚获得的API key，就可以实现与大模型的对话了。：

https://www.icloud.com/shortcuts/c524f278cb574dd4a13619af0d58b1da ，该快捷指令实现了最基本的单次对话功能。

https://www.icloud.com/shortcuts/1c25a89d7ebf494883398d600ccfa9b9 ，该快捷指令考虑了提示词，循环对话等，有一定的进阶。

下载后你可以将deepseek的指令名称修改成你喜欢的。假设你的快捷指令名称是“小聪明”，那你只需要“Hi, Siri, 小聪明”，就可以启动这个快捷指令，然后开始语音输入你的问题。

除了开箱使用，这里简单的说明一下这个快捷指令的实现原理。之前有通过api接入过大模型的小伙伴肯定对这个很熟悉：

```
curl -X POST https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "deepseek-r1",
    "messages": [
        {
            "role": "user", 
            "content": "你想要询问模型的问题"
        }
    ]
}'
```

对应到快捷指令中就是：
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740018865482_bed808cba54f7a60fc22a5c8a986642.jpg){width=300}

根据获取api的平台不同，你只需要将URL换成你的平台，比如硅基流动的：https://api.siliconflow.cn/v1/chat/completions， 把API换成硅基流动的API，把模型的名称换成对应的模型名称即可。
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740019780182_image.png)


当然你也可以试试通过调整模型的温度等参数，来实现更加个性化的对话。

```
 "temperature": 0.7,
  "top_p": 0.7,
  "top_k": 50,
  "frequency_penalty": 0.5,
  "n": 1,
  "response_format": {
    "type": "text"
```

## 实际体验
实际对比体验了三个平台的模型，分别是：

1. 硅基流动的deepseek-ai/DeepSeek-R1
2. 阿里云百炼的Deepseek-R1
3. 【国外，需要梯子】GroqCloud的deepseek-r1-distill-llama-70b	

先说结论，在流畅性上GroqCloud的deepseek-r1-distill-llama-70b，并不是因为他不是满血版的，即使在手机梯子的情况下，Groq的云服务器使用人数应该远小于国内，反应速度在平均在2-3秒。因为是深度思考模型，在返回的结果里面会带有think的内容，语音听起来就有些冗长。

阿里云第二，硅基流动可能因为各大博主推荐的比较多，加上免费额度较大，容易出现响应时长较长或者无法响应的情况，体验较差。

还想吐槽一下，iphone的文字转语音，实在是不忍听，尤其是面对深度思考模式下Deepseek的回答，简直是一种折磨。后续可以看看调用一些TTS语音的API，实现更加优美的声音回复。

整个快捷指令还有非常多可以优化的地方，比如可以尝试加入搜索功能，让大模型去总结搜索的结果或者网页新闻。或者加入写入笔记的能力，可以“要求”担心为你整理各种资料，写入文件，这样你就可以直接查看。此外，还可以考虑加入多轮对话的能力，比如“继续”、“重新开始”等。








