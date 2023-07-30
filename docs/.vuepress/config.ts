import { defineUserConfig, defaultTheme } from "vuepress";
import sidebar from "./sidebar";
import navbar from "./navbar";
import searchPlugin from "@vuepress/plugin-search";

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
  }),
  head:[['link', { rel: 'icon', href: '/logo.jpg' }]],
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ]
});
