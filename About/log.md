# 日志

## 2025-02-12

- 添加了右侧导航栏多级目录功能

**方法1**：通过frontmatter设置
```
---
outline: deep
---
```

**方法2**：通过vitepress配置文件设置
```
themeConfig: {
    logo: '/logo.png',
    outline: {
      level: [1, 4], // 显示 h2 到 h4 的标题
      label: '本页目录'
    },
}

```

- 解决了Cloudflare部署后页面无法加载的问题
::: tip 原因
通过 npm add -D vitepress 和 npx vitepress init 创建的vitepress项目，默认没有配置vitepress.config.mjs文件，导致部署后页面无法加载。
::: 

::: tip 解决    
使用 npm install -D vitepress重新安装

安装完成后运行 npm install

再次重新构建 npx vitepress build

同时Cloudflare的部署设置中选择vitepress对应的默认参数即可。
::: 

