import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
  {
    text: '木佑编程文档',
    link: '/',
  },
  {
    text: '面试题',
    collapsible: true,
    children: [
     {
      text: '前端面试题',
      link: '/interview/frontend-question-100',
     }
    ]
  },
  {
    text: '知识星球',
    link: '/xingqiu/introduce',
  }
] as SidebarConfig;