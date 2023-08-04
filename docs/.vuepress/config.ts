import { defineUserConfig, defaultTheme } from "vuepress";
import sidebar from "./sidebar";
import navbar from "./navbar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "木佑编程文档",
  description: "这是我的第一个 VuePress 站点",
  base: "/program-docs/",
  theme: defaultTheme({
    logo: 'logo.jpg',
    sidebar,
    navbar,
  }),
});
