import { defineUserConfig, defaultTheme } from "vuepress";
import sidebar from "./sidebar";
import navbar from "./navbar";
import searchPlugin from "@vuepress/plugin-search";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  lang: "zh-CN",
  title: "木佑编程文档",
  description: "这是我的第一个 VuePress 站点",
  base: "/program-docs/",
  dest: './public',
  theme: defaultTheme({
    logo: 'logo.jpg',
    sidebar,
    navbar,
    editLink: false,
    contributors: false,
    lastUpdated: false
  }),
  head:[
    [
      "script",
      {},
      `
        !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
      `
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "编程学习圈子,程序员学习,程序员,代码,编程项目,编程导航,程序员木佑"
      }
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "帮助你学习编程的小圈子,编程学习资源,原创编程学习经验方法,程序员求职校招指南,原创编程项目"
      }
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-1X4BRVH78Z"
      }
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-1X4BRVH78Z');`
    ]
  ],
  plugins: [
    searchPlugin({
      // 配置项
    }),
    sitemapPlugin({
      hostname: "https://muyou.icu"
    }),
  ]
});
