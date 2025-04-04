# 基于AI辅助科研工作流实践
<div style="display: flex; align-items: center; margin-top: 10px; color: var(--vp-c-text-2); font-size: 0.9em; border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 20px;">
  <ReadingTime />
  <span style="margin-left: 10px; margin-right: 10px;">|</span>
  <span>日期: 2025-02-14</span>
</div>

> 机缘巧合，最近有一个朋友需要开始他博士论文的撰写，主题是“实验室设计”，希望我可以给到他一些支持和帮助。虽然现在AI工具已经很发达，但是在辅助学术领域，我也是第一次尝试，希望能从课题框架构思、实时计划策划、参考资料检索及汇总分析、辅助分析研究、检查润色等方面探索AI辅助科研的可行性，并记录下整个过程。利用AI大语言模型辅助学术研究论文写作，可以显著提高效率和研究水平。下面我们将通过实践，验证并完善一个基于AI的工作流，并详细说明各个环节可以使用的工具、使用方法和预期目标。这个工作流旨在充分发挥AI的能力，同时保持科研的严谨性和原创性，适用于不同研究领域。

## 一、基于AI大语言模型的学术论文写作工作流

结合常规论文写作的流程，我们概括成以下几个主要的环节，分别探讨AI工具在每个环节中的应用。

**整体流程框架：**

1.  **论文选题 (Topic Selection):**  利用AI进行头脑风暴，辅助识别研究热点和空白。使用不同深度思考模型关于论文框架的展开、整个论文撰写实施计划的构思及时间安排。人工对比，整合出最优方案。
2.  **文献综述 (Literature Review):**  使用AI高效检索、筛选、总结和分析文献，构建文献综述框架。
3.  **深化选题 (Deepening Topic):**  借助AI模型进行总结分析。从文献综述中提炼研究问题，明确研究目标和创新点。形成自己的论文知识库，随时提问AI。
4.  **设计研究实验 (Research Design):**  利用AI辅助设计实验方案，选择合适的研究方法，提高实验设计的科学性和可行性。
5.  **进行数据分析 (Data Analysis):**  运用AI工具辅助数据处理和分析，挖掘数据中的潜在价值，提高数据分析的效率和深度。通过Cursor等工具实现代码的编写，用于收集的数据分析。
6.  **撰写论文修色 (Paper Writing and Polishing):**  使用AI辅助论文初稿撰写，并进行语言润色、格式规范、查重等，提升论文质量。



## 二、各环节详细说明及工具推荐

### 1\. 论文选题 (Topic Selection)

  * **目的:**  快速生成潜在的研究方向和主题，评估选题的新颖性和可行性，缩小选题范围。
  * **工具:**
    在这个选题的环节，建议使用联网类对话AI（Gemini、DeepSeek、ChatGPT等），或者是联接科研数据库的AI工具（如CNKI AI助手）等，通过输入我的研究领域、关键词或初步想法，AI工具会生成一系列相关的论文选题，激发灵感，快速获取多个潜在选题方向。这个环节更重要的是提示词。以下是一些可能的参考：
    
    ::: tip 提示词参考  
    * "请分析【领域A】与【领域B】的结合点，推荐3个具有创新价值的选题方向，说明其理论/应用价值"
    * "列出2021-2025年【专业】领域被引量前10的论文关键词，用表格展示研究热点趋势"
    * "基于【研究方向】，推荐5个结合技术应用与伦理挑战的创新选题，需包含研究意义与突破方向"
    * "生成【专业】领域内兼具理论价值和实践应用的选题，需满足：①聚焦2025政策热点 ②采用【技术】方法 ③解决【行业】痛点"
    :::

    <img src="https://cloudflare-imgbed-1d8.pages.dev/file/1740626864600_image.png" alt="image.png" style="max-width: 600px; width: 50%;">

      * **研究趋势分析工具 (Research Trend Analysis Tools):**
          * **工具示例:**  
          [**Connected Papers**](https://www.connectedpapers.com/) 是一款基于可视化图谱的学术文献分析工具，通过输入一篇典型论文即可生成该领域的关联文献网络图，帮助研究者快速把握领域脉络。其核心功能包括：

          > 1. 可视化文献网络：以气泡图谱形式展示文献关联，气泡大小反映被引量，颜色深浅表示发表时间，节点间距体现相关性强度。
          > 2. 智能文献推荐：基于Semantic Scholar数据库（覆盖数亿篇跨学科论文），自动推荐相似文献并支持查看摘要、引用关系等详细信息。
          > 3. 研究脉络分析：通过"Prior Works"查看领域奠基性文献，通过"Derivative Works"发现最新衍生研究，辅助构建文献综述框架。

          ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740636408305_image.png)

        ::: tip 提示  
          相比传统文献管理工具（如Zotero），提供动态关联分析与跨学科支持集成引文网络分析与趋势预测，特别适合新兴领域快速调研。
        :::


      * **文献数据库关键词分析 (Keyword Analysis in Literature Databases):**
          * **工具示例:**  **Web of Science**, **Scopus**, **PubMed** 等文献数据库的分析功能。
          * **使用方法:**  在文献数据库中搜索关键词，利用数据库的分析功能（如关键词共现分析、趋势分析），了解该领域的研究热点和发展趋势。
          * **目的:**  从宏观层面了解研究领域的整体情况，发现值得深入研究的方向。
          * **Web of Science**
            * 分析模块：提供关键词词频统计、共现网络及学科趋势的可视化仪表盘
            * 扩展性：支持导出数据至CiteSpace等工具进行深度分析

          * **Scopus**
            * 高级检索：通过布尔逻辑运算符（AND/OR/NOT）优化关键词组合，结合主题词表提升检索精度
            * 分析工具：生成关键词热度趋势图，支持学科领域过滤与引用网络分析

          * **PubMed**
            * 策略优化：使用截词符（*）与短语检索（""）精准定位关键词，结合MeSH主题词提高查全率
            * 结果筛选：按年份、文献类型过滤，导出数据至VOSviewer构建关键词网络


### 2\. 文献相关 (Literature Review)
  * **目的:** 高效检索、筛选、总结和分析相关文献，构建全面的文献综述框架，为研究奠定理论基础。使用自然语言提问，AI工具可以帮助你更精准地检索文献，并提供文献摘要、关键信息提取等功能。
    
    #### 2.1 AI 文献知识分析 (AI Literature Knowledge Analysis Tools)

    ##### Elicit
    * [**Elicit**](https://elicit.com/) 是一款专注于文献综述自动化的AI研究助手，主要功能包括：
      > 1. 智能文献搜索：通过自然语言提问（如"How does IoT data affect machine learning models?"）检索超1.25亿篇论文，返回相关文献列表并生成摘要。
      > 2. 数据提取与总结：自动从PDF中提取研究方法、结论等关键信息，整理为表格或综述段落。
      > 3. 主题发现：跨论文识别共同主题（如"药物效果"），生成可视化引用网络。
      
      使用方法：注册账户后输入研究问题→筛选结果（按年份、期刊质量等）→上传PDF提取数据→导出CSV/BibTeX格式。

      ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740635564993_image.png)
      
    ##### Scite
    * [**Scite**](https://scite.ai/) 聚焦引文可靠性分析，核心功能为：
      > 1. 引文分类：自动将引用标记为"支持""反对"或"提及"，并展示上下文。
      > 2. 可视化网络：图形化呈现文献引用关系，支持交互式探索。
      > 3. 文稿检查：上传PDF自动识别引用文献的可靠性，标注撤稿或争议内容。
      
      使用方法：搜索文献查看被引详情→创建Dashboard追踪特定作者/期刊→设置提醒获取新引用动态→通过浏览器插件实时查看引文评价。

      ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740635697081_image.png)

    ::: tip 提示    
      Elicit侧重文献获取与综述自动化，适合快速构建研究框架；Scite强调引文质量验证，帮助避免引用争议性结论。
    :::
    
    ##### Scholarcy
      * [**Scholarcy**](https://www.scholarcy.com/) 是一款AI驱动的文献阅读辅助工具，主要功能包括：
        > 1. 智能摘要生成，通过解析PDF/网页等文件自动提取关键概念、研究方法及结论，生成结构化摘要；
        > 2. 图表与数据导出，支持一键下载文献中的表格（Excel格式）和高清图片；
        > 3. 文献管理，可批量导入PDF/Word等格式文件，并导出为EndNote/Zotero兼容格式；
        > 4. 报告生成，支持将分析结果导出为Word、Markdown或PPT格式的文献综述框架；
        > 5. 引文追踪，自动汇总参考文献并提供跳转链接。
        > 其优势在于降低阅读门槛，支持开放获取文献分析，并提供每日免费使用额度。

        ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740636199121_image.png)

    ##### Litmaps
      * [**Litmaps**](https://litmaps.co/) 一款基于文献引用关系构建可视化网络的科研工具，能够帮助用户快速定位领域核心文献并理清研究脉络。以下是其主要功能与特点：
        > 1. **种子文献驱动**：输入DOI、关键词或作者即可生成以"种子论文"为中心的引用网络，通过连接线展示文献间的引用关系（灰色圆圈大小表示被引量，默认布局中高被引文献位于顶部，新文献位于右侧）。
        > 2. **动态可视化探索**：支持拖动节点重组网络布局，可创建不同颜色的文献分组辅助分析。通过"Discover"功能扩展网络边界，揭示种子文献所在研究领域的全局关联。提供时间轴视图追踪研究趋势，识别开创性论文与新兴热点。

        ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740636305344_image.png)

    ##### Connected Papers
      * [**Connected Papers**](https://www.connectedpapers.com/) 是一款基于可视化图谱的学术文献分析工具，通过输入一篇典型论文即可生成该领域的关联文献网络图，帮助研究者快速把握领域脉络。其核心功能包括：

          > 1. 可视化文献网络：以气泡图谱形式展示文献关联，气泡大小反映被引量，颜色深浅表示发表时间，节点间距体现相关性强度。
          > 2. 智能文献推荐：基于Semantic Scholar数据库（覆盖数亿篇跨学科论文），自动推荐相似文献并支持查看摘要、引用关系等详细信息。
          > 3. 研究脉络分析：通过"Prior Works"查看领域奠基性文献，通过"Derivative Works"发现最新衍生研究，辅助构建文献综述框架。

          ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740636408305_image.png)

        ::: tip 提示  
          相比传统文献管理工具（如Zotero），提供动态关联分析与跨学科支持集成引文网络分析与趋势预测，特别适合新兴领域快速调研。
        :::

    ##### Research Rabbit
      * [**Research Rabbit**](https://www.researchrabbit.ai/) 一款AI驱动的科研工具，核心功能包括：
        > 1. 智能文献推荐，通过分析用户输入的文献、关键词或导入文档（如BibTeX/RIS格式），推荐相关论文及早期/后期研究；
        > 2. 可视化知识图谱，以网络图和时间轴展示文献引用关系、作者合作网络及研究趋势；
        > 3. 协作与文献管理，支持创建文献集合、添加注释、团队共享，并与Zotero等引用管理工具无缝集成；
        > 4. 个性化追踪，通过非垃圾邮件提醒推送最新研究成果。其交互式界面特别适合快速构建领域知识框架和撰写文献综述。

        ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740626295307_image.png)

    * #### 2.2 文献管理工具 (Citation Management Tools)
      使用文献管理工具整理和管理文献，结合其AI功能，可以更高效地组织文献综述，并自动生成参考文献列表。系统化管理文献，方便后续引用和论文写作，提高文献综述的组织性和规范性。

      * [**Zotero**](https://www.zotero.org/) 是一款免费开源的文献管理工具，支持文献收集、整理、引用和协作。核心功能包括：
        > 1. 通过浏览器插件一键抓取网页文献（如Google Scholar、知网），自动提取标题、作者等元数据；
        > 2. 分类管理文献，支持文件夹嵌套、多色标签及智能搜索（如"机器学习 tag:重要"）；
        > 3. 与Word/WPS深度集成，可自动生成APA/MLA/国标等9000+格式的参考文献；
        > 4. 跨平台同步（含手机端）及团队协作共享文献库。

        **使用步骤**：①官网下载客户端并安装浏览器插件；②注册账号开启云端同步；③创建分类文件夹并导入文献（支持BibTeX/PDF/网页抓取）；④在写作时通过插件插入引用并生成参考文献表。进阶用户可通过插件市场扩展翻译、影响因子查询等功能。

        ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740627255427_image.png)

      * [**ima**](https://ima.qq.com/) ima是一款由腾讯开发的AI智能工作台，具备信息获取与问答、多模态内容解读、个性化知识管理及写作辅助等功能。
        > 用户可通过输入关键词或上传文件，在ima首页进行AI问答，或利用侧边栏对阅读内容进行实时解读与答疑。ima支持多种文件格式上传与整理，并提供智能写作、图片生成等AI辅助功能。其优势在于智能化程度高，能基于全网信源或个人知识库进行精准搜索与推荐，同时支持跨平台使用与团队协作共享知识库，为用户提供高效、便捷且个性化的知识管理服务。

        ![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740628418935_image.png)

      * 详细的一些功能介绍可以参考卡兹的这篇推文[安利一个我目前觉得最好用的AI知识库 - 腾讯ima](https://mp.weixin.qq.com/s/_H1HFSSvuAnm-4oocuRbCQ)

      #### 2.3 基于知识库的文献相关提示词举例

      ::: tip 提示  
      **指令 1: 研究进展总结**
      ```
      请总结[研究领域/关键词]在过去五年内的核心研究进展，重点关注[具体方面，例如：理论框架、方法论、应用领域]，并列举至少5篇具有代表性的高被引文献，以表格形式呈现，表格包含：文献标题、作者、发表年份、核心观点、研究方法。
      
      - 限制条件: 
        - 时间范围（过去五年）
        - 文献数量（至少5篇）
        - 输出格式（表格）
        - 表格内容（具体要素）
      - 目的: 快速了解研究领域最新动态，识别关键文献，为文献综述打下基础。
      ```

      **指令 2: 观点对比分析**
      ```
      针对[研究问题]，请对比分析[作者A]和[作者B]的主要观点差异，并指出各自论证的优势与局限性，字数控制在300字以内。
      
      - 限制条件:
        - 对比对象（特定作者）
        - 分析重点（观点差异、优劣势）
        - 字数限制
      - 目的: 深入理解不同学术观点，培养批判性思维，为构建自身论点提供参考。
      ```

      **指令 3: 研究趋势分析**
      ```
      基于以下[3-5篇文献列表]，请归纳总结当前研究在[研究方向]领域的主要共识和争议焦点，并预测未来可能的研究趋势，以条目式列表呈现。
      
      - 限制条件:
        - 文献来源（指定文献列表）
        - 输出格式（条目式列表）
        - 内容要求（共识、争议、趋势）
      - 目的: 从宏观层面把握研究领域的整体态势，识别研究空白和潜在创新点。
      ```

      **指令 4: 学术概念解析**
      ```
      请解释[学术概念/术语]在[学科领域]中的定义，并提供至少两个来自权威学术著作或期刊的例证，同时简述该概念的重要性和应用场景。
      
      - 限制条件:
        - 概念来源（权威学术著作/期刊）
        - 例证数量（至少两个）
        - 内容要求（定义、例证、重要性、应用）
      - 目的: 准确理解和运用专业术语，确保论文的学术严谨性。
      ```
      :::


### 3\. 深化选题 (Deepening Topic)

  * **目的:**  在文献综述的基础上，明确具体的研究问题、研究目标、研究范围和研究假设，使选题更加聚焦和深入。

#### 提示词案例
与AI大语言模型进行对话，详细描述你的研究领域、初步选题和文献综述情况，请AI模型帮助你分析研究现状、识别研究空白、提出更深入的研究问题和假设。

::: details 提示词案例
**指令 1: 研究问题深化**
```
基于[研究主题]和[初步文献综述结果]，请帮我分析该领域的研究空白，并提出3-5个潜在的具体研究问题。对每个研究问题，请评估其创新性、可行性和学术价值，并按优先级排序。

- 限制条件:
  - 研究问题数量（3-5个）
  - 评估维度（创新性、可行性、学术价值）
  - 输出要求（优先级排序）
- 目的: 明确具体研究方向，确保研究问题的价值和可行性。
```

**指令 2: 研究范围界定**
```
针对[研究问题]，请帮我界定合适的研究范围，包括时间跨度、地理范围、研究对象特征等关键边界条件。同时，请说明这些边界设置的合理性和可能的局限性。

- 限制条件:
  - 边界维度（时间、地理、对象特征等）
  - 内容要求（合理性说明、局限性分析）
  - 输出格式（结构化呈现）
- 目的: 合理控制研究范围，确保研究的聚焦性和可操作性。
```

**指令 3: 研究假设生成**
```
基于[研究问题]和[相关理论基础]，请生成2-3个可验证的研究假设。对每个假设，请提供理论依据，并简述可能的验证方法。

- 限制条件:
  - 假设数量（2-3个）
  - 内容要求（理论依据、验证方法）
  - 表述要求（清晰、可验证）
- 目的: 形成有理论支撑的研究假设，指导后续研究设计。
```

**指令 4: 研究目标分解**
```
请将[总体研究目标]分解为若干个具体的研究子目标，并构建目标之间的逻辑关系图。同时，请为每个子目标设定可衡量的成功标准。

- 限制条件:
  - 目标层级（总目标-子目标）
  - 输出格式（逻辑关系图）
  - 内容要求（可衡量的标准）
- 目的: 将研究目标具体化、系统化，便于研究进度管理。
```

**指令 5: 研究方法推荐**
```
针对[研究问题]，请推荐两种适合的研究方法（例如：定量研究、定性研究、混合研究），并分别阐述其适用性、优势和局限性，字数控制在500字以内。

- 限制条件:
  - 方法数量（两种）
  - 内容要求（适用性、优劣势）
  - 字数限制（500字以内）
- 目的: 选择合适的研究方法，为研究设计提供方法论支撑。
```

**指令 6: 研究框架设计**
```
假设我的研究主题是[研究主题]，研究对象是[研究对象]，请设计一个可行的研究框架，包括研究目的、研究问题、研究方法、数据收集方法、数据分析方法，并以清晰的逻辑结构呈现。

- 限制条件:
  - 研究主题、研究对象
  - 输出格式（逻辑结构）
  - 内容要素（研究框架各部分）
- 目的: 构建清晰的研究框架，确保研究设计的系统性和完整性。
```
:::


#### 思维导图生成

想对所有论文想有个整体概念的认知，那还可以让ima生成个脑图。但目前看来，生成脑图功能不是每次都能用的，不过我们也可以换个思路，脑图其实本质上就是Markdown格式嘛，我们直接生成Markdown就可以。**MindManager**, **XMind**, **FreeMind** 等思维导图软件，部分工具集成AI辅助功能，如智能主题扩展、内容生成等。可视化地梳理研究思路，明确研究的逻辑框架和核心要素。


### 4\. 设计研究实验 (Research Design)

  * **目的:**  设计科学、严谨、可行的研究方法和实验方案，确保研究结果的有效性和可靠性。
  * **工具:**
      * **AI 研究方法推荐工具 (AI Research Method Recommendation Tools):**
          * **工具示例:**  目前此类工具相对较少，但可以关注一些科研服务平台或工具，例如 **Elsevier Researcher Academy** ([https://researcheracademy.elsevier.com/](https://www.google.com/url?sa=E&source=gmail&q=https://researcheracademy.elsevier.com/)) 可能提供相关资源或指导。
          * **使用方法:**  输入你的研究问题、研究领域和预期研究目标，AI工具可以根据已有的研究方法知识库，推荐合适的研究方法和实验设计方案。
          * **目的:**  帮助你了解不同研究方法的适用场景，选择最适合你研究问题的研究方法。
      * **实验设计辅助工具 (Experiment Design Assistant Tools):**
          * **工具示例:**  一些统计软件或实验设计软件可能集成AI功能，例如 **GraphPad Prism**, **SPSS**, **R** 等，部分工具可能有AI辅助的实验设计模块。
          * **使用方法:**  利用这些软件的实验设计模块，输入实验参数和变量，AI工具可以辅助生成实验方案、优化实验流程、评估实验可行性等。
          * **目的:**  提高实验设计的效率和科学性，减少实验误差，确保实验结果的可靠性。
      * **模拟实验工具 (Simulation Tools):**
          * **工具示例:**  根据不同研究领域，有各种专业的模拟实验软件，例如 **COMSOL Multiphysics**, **MATLAB Simulink** 等。
          * **使用方法:**  利用模拟实验工具，在计算机上模拟实验过程，验证实验设计的可行性，优化实验参数，预测实验结果。
          * **目的:**  在实际实验前进行预演，降低实验风险，提高实验效率。

### 5\. 进行数据分析 (Data Analysis)

  * **目的:**  高效处理和分析实验数据，挖掘数据中的潜在价值，验证研究假设，得出科学结论。
  * **工具:**
      * **AI 数据分析工具 (AI Data Analysis Tools):**
          * **工具示例:**  **Tableau**, **Power BI**, **Google Analytics** 等数据可视化和分析工具，部分工具已集成AI功能，如智能数据洞察、自动数据建模等。
          * **使用方法:**  导入实验数据，利用AI工具进行数据清洗、数据可视化、统计分析、机器学习建模等，发现数据中的规律和趋势。
          * **目的:**  提高数据分析的效率和深度，发现传统方法难以发现的数据洞见。
      * **统计分析软件 (Statistical Software) 结合 AI 功能:**
          * **工具示例:**  **SPSS**, **R**, **Python (with libraries like Pandas, NumPy, Scikit-learn)** 等，这些软件可以通过集成AI库或插件，实现更智能化的数据分析功能。
          * **使用方法:**  利用统计软件进行传统的数据分析方法，同时探索和应用AI相关的统计分析和机器学习方法，例如聚类分析、回归分析、预测模型等。
          * **目的:**  结合传统统计方法和AI技术，更全面、深入地分析数据，提高数据分析的精度和可靠性。
      * **自然语言处理 (NLP) 工具 (Natural Language Processing Tools) 用于文本数据分析:**
          * **工具示例:**  **NLTK**, **SpaCy**, **Transformers** 等 Python NLP 库，以及云端的 NLP 服务，如 **Google Cloud Natural Language API**, **Azure Text Analytics API**。
          * **使用方法:**  如果你的研究数据包含文本信息（例如文献、访谈记录、调查问卷等），可以使用 NLP 工具进行文本挖掘、情感分析、主题建模等，从文本数据中提取有价值的信息。
          * **目的:**  处理和分析非结构化文本数据，拓展数据分析的范围和维度。

### 6\. 撰写论文修色 (Paper Writing and Polishing)

  * **目的:**  高效撰写论文初稿，并进行语言润色、格式规范、查重等，确保论文质量达到学术发表标准。
  * **工具:**
      * **AI 论文写作助手 (AI Academic Writing Assistants):**
          * **工具示例:**  **Jasper** ([https://www.jasper.ai/](https://www.google.com/url?sa=E&source=gmail&q=https://www.jasper.ai/)), **Rytr** ([https://rytr.me/](https://www.google.com/url?sa=E&source=gmail&q=https://rytr.me/)), **Writesonic** ([https://writesonic.com/](https://www.google.com/url?sa=E&source=gmail&q=https://writesonic.com/)) 等通用 AI 写作工具，以及一些专门针对学术写作的工具，例如 **Jenni AI** ([https://jenni.ai/](https://www.google.com/url?sa=E&source=gmail&q=https://jenni.ai/))。
          * **使用方法:**  输入论文主题、研究方向、主要论点等信息，AI工具可以辅助生成论文的各个部分，例如引言、文献综述、方法、结果、讨论和结论等。
          * **目的:**  加速论文初稿的撰写过程，提供写作框架和内容参考，减轻写作负担。
      * **AI 语法和风格检查工具 (AI Grammar and Style Checkers):**
          * **工具示例:**  **Grammarly** ([https://www.grammarly.com/](https://www.google.com/url?sa=E&source=gmail&q=https://www.grammarly.com/)), **ProWritingAid** ([https://prowritingaid.com/](https://www.google.com/url?sa=E&source=gmail&q=https://prowritingaid.com/)), **LanguageTool** ([https://languagetool.org/](https://www.google.com/url?sa=E&source=gmail&q=https://languagetool.org/))。
          * **使用方法:**  将论文文本输入工具，AI工具可以检查语法错误、拼写错误、标点符号错误，并提供风格改进建议，例如提高语言流畅性、增强表达清晰度、优化句子结构等。
          * **目的:**  提高论文语言质量，减少语言错误，使论文更专业、更易读。
      * **AI 论文降重工具 (AI Plagiarism Checkers and Paraphrasing Tools):**
          * **工具示例:**  **Turnitin**, **iThenticate** (查重工具)， **QuillBot** ([https://quillbot.com/](https://www.google.com/url?sa=E&source=gmail&q=https://quillbot.com/)), **Copy.ai** ([https://www.copy.ai/](https://www.google.com/url?sa=E&source=gmail&q=https://www.copy.ai/)) (改写工具)。
          * **使用方法:**  使用查重工具检测论文的原创性，使用改写工具对重复率高的部分进行修改和润色，避免学术不端行为。
          * **目的:**  确保论文的原创性，符合学术规范，顺利通过期刊或会议的查重检测。
      * **AI 格式规范工具 (AI Formatting Tools):**
          * **工具示例:**  **Paperpile** ([https://paperpile.com/](https://www.google.com/url?sa=E&source=gmail&q=https://paperpile.com/))，**Typeset** ([https://typeset.io/](https://www.google.com/url?sa=E&source=gmail&q=https://typeset.io/))。
          * **使用方法:**  使用格式规范工具，可以自动调整论文的格式，例如参考文献格式、标题格式、段落格式等，使其符合目标期刊或会议的要求。
          * **目的:**  节省论文格式调整的时间，确保论文格式规范，提高投稿成功率。


#### 论文润色实践
##### 一篇普通的中文核心期刊
1. 发现文章参考文献不足，需要补充相关参考资料
::: details
通过metaso检索论文主题，使用学术模式搜集相关论文，并制作参考文献和行程。
:::

2. 文章结构过于简单，没有核心研究内容，需要重新梳理框架。

3. 该文章是以策略、方法描述为主，需要补充一些框架梳理、流程方法图。


**重要提示:**

  * **AI 辅助而非替代:**  AI工具在学术研究论文写作中是辅助角色，不能完全替代研究人员的思考和判断。务必保持批判性思维，对AI生成的内容进行仔细审核和修改。
  * **数据安全和隐私:**  在使用AI工具时，注意数据安全和隐私保护，避免上传敏感数据到不安全的平台。
  * **学术伦理:**  合理使用AI工具，避免过度依赖AI生成内容，确保论文的原创性和学术诚信。特别是在论文写作和降重环节，要以提升论文质量为目的，而非仅仅为了降低重复率而使用AI工具。
  * **工具选择和评估:**  AI工具种类繁多，选择适合自己研究领域和需求的工具，并进行试用和评估，选择效果最佳的工具。




## 【案例】基于Cursor+Claude 3.7完善课题调查问卷

学生在课题初期希望通过一个调查问卷，对相关的一些理化生类实验室的使用人员进行一次问卷调研。整个问卷设计30多个问题。希望能尽可能多的采集到可量化的数据用于论文的分析。以下是问卷的一个节选：

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1741592930227_image.png)

拿到问卷后，我结合自己对整个课题的理解，梳理了一些调整方向，并希望AI可以非常系统的帮我梳理一份高质量的修改意见。

```
Prompt：
需要给学生一个比较完整的针对他草拟问卷的反馈意见。我初步整理了一些内容。希望你用比较系统、连贯、完整、专业、科学的语言结合问卷帮我修改描述一下。
提升反馈意见的可读性。因为他的发放对象是理化生相关专业的学生老师，我注意到他的一些建筑相关的问题描述有几个问题，比如是否良好、是否适宜，很难在1-7之间量化回答，
我还建议针对一些名词做一些解释，针对问题调研的背景适当阐述，针对不同意、不合适的问题给一个填空，了解具体的内容。希望你可以作为一个专业的调研专家，帮我起草一份反馈意见。
尽可能用连贯的文字，针对整个报告系统的指导评价。
```

**过程中又结合AI反馈的结果，补充了一些提示词：**
```
希望可以结合每个问题具体描述，并且对缺少希望补充的一些问题给与具体的建议。具体数据分析可以先不用特别考虑
```

```
评价的语言有一些过于直接，适当的婉转一些表达，用可以，是不是合适等，这样受众更容易接受。然后希望能否用比较连贯的语言，而不是一点一点的列表方式表达。
```

```
基于你整合的修改意见，帮我形成一份拟建议修改之后的问卷。
```

经过了几轮的完善和补充，AI生成的评价报告非常详尽的指出了问卷现有的一些问题，包括编号、顺序、描述、完整性等，并且给出了详细完整的修改意见。

### 修改的意见

::: details
  <iframe 
    src="../public/attachments/pdfs/关于调研问卷的建议-20250310.pdf" 
    width="100%" 
    height="500px" 
    style="border: none;">
  </iframe>
:::

### 修改后的问卷（节选）

::: details
  <iframe 
    src="../public/attachments/pdfs/修改后的问卷.pdf" 
    width="100%" 
    height="500px" 
    style="border: none;">
  </iframe>
:::

可以看到，Claude 3.7-thinking通过几次的迭代，给出了非常详尽的反馈意见，并且给出了修改后的问卷。修改后的问卷问题有了清晰的描述，填写人员更易理解。从问卷的格式完整性上也更加规范。并且补充完善了一些漏考虑的问题，增加了开放性问题和关于不满意情况的填空征集。这样可以使得学生在收集问卷的时候得到更加完整的全面的反馈。

### 小插曲
在让Claude 3.7查看问卷的时候发现用cursor版本的时候，无法阅读docx、pdf等问卷。所以除了暴力的将问卷内容直接复制粘贴到chat中，更好的一个方案是直接写一个解析工具，将文件解析成txt。所以Cursor直接调用能力在文件所在目录编写了一个解析的python。在它分析的过程中，如果需要读取这两类文件，就在提示词说明“调用程序解析”，这样Agent就会调用响应的代码，实现了曲线救国。





## 科研AI工具
### 锐智Ai
[锐智AI](https://www.ruizhi.com/)是一款集论文智能选题、大纲生成、内容填充、文献引用、查重修改于一体的全方位论文写作平台。
提供免费的大纲生成功能，支持本科、专科、研究生多种类型论文初稿生成。
并且支持无限改稿，支持"投喂AI"，并同时可以生成答辩PPT，任务书、开题报告，调查问卷，图表等。

### rflow.ai
[rflow.ai](https://rflow.ai/):

研究引擎与可视化知识图谱: rflow.ai 被定位为 AI 驱动的研究引擎，结合了白板和思维导图的功能，帮助研究人员更轻松、直观地探索和组织复杂的研究项目。

学术搜索: 它利用大型语言模型 (LLM) 和工程能力，提供快速、准确、相关和全面的学术搜索功能。除了快速搜索，它还能高效地整理和呈现搜索结果，提升研究效率。

深度探索与文档标注交互: 作为一个学术研究工具，rflow.ai 具备深度探索研究主题以及文档标注交互等功能，可能帮助研究者更深入地分析和理解文献资料。

### Semantic Scholar
[Semantic Scholar](https://www.semanticscholar.org/):
AI 驱动的学术搜索引擎，可快速定位高影响力论文，并生成文献关联图谱。

![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740561649142_image.png)
![image.png](https://cloudflare-imgbed-1d8.pages.dev/file/1740561691980_image.png)