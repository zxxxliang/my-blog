import { defineConfig } from "vitepress";
import { genYuqueSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "前端小白是米粉",
  description: "哈哈哈哈哈哈哈",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    outline: [2, 6],
    nav: [
      { text: "首页", link: "/" },
      // { text: "配置文档", link: "/docs", activeMatch: "/docs/" },
      // { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar: {
      "/docs/": await genYuqueSideBar("/docs"),
      // "/docs-shorturl/": await genYuqueSideBarWithShortUrl('/docs-shorturl')
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [
      {
        icon: { svg: YuQueSVG },
        link: "https://www.yuque.com/zxl.zhaoxiaoliang/my-blog",
      },
      { icon: "github", link: "https://github.com/zxxxliang/my-blog" },
    ],
    footer: {
      message:
        'Powered by <a href="https://www.yuque.com/zxl.zhaoxiaoliang/my-blog" target="_blank">语雀</a>  & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/zxxxliang/my-blog" target="_blank">Elog</a>',
      copyright: "Copyright © 2023-present",
    },
  },
});
