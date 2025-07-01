import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPlayground } from '@rspress/plugin-playground';

export default defineConfig({
  plugins: [
    pluginPlayground(),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
  root: path.join(__dirname, 'docs'),
  title: 'MetaChat React',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  lang: 'en',
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Rspress',
      description: 'Static Site Generator',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Rspress',
      description: '静态网站生成器',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  builderConfig: {
    resolve: {
      alias: process.env.LOCAL ? {
        '@matechat/react': path.resolve(__dirname, './src'),
      } : {},
    },
  },
  // 引入全局样式
  globalStyles: path.resolve(__dirname, './docs/style.css'),
  mediumZoom: false,
});
