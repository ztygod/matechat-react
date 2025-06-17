<div align="center">
  <a href="https://github.com/matechat/matechat-react#gh-light-mode-only" target="_blank">
    <img alt="MateChat Logo" width="220" src="https://raw.githubusercontent.com/matechat/.github/main/assets/logo_light.svg" />
  </a>
  <a href="https://github.com/matechat/matechat-react#gh-dark-mode-only" target="_blank">
    <img alt="MateChat Logo" width="220" src="https://raw.githubusercontent.com/matechat/.github/main/assets/logo_dark.svg" />
  </a>
</div>

<div align="center">
  <h1>MateChat React</h1>
</div>

<div align="center">

AI 场景 UI 组件库 · React 版本 · 基于 DevUI 设计体系

<p align="center">
  <a href="https://matechat.dev">官网</a> •
  <a href="https://matechat.dev/example">示例</a> •
  <a href="https://matechat.dev/guide/getting-started">教程</a> •
  <a href="https://matechat.dev/api">API 文档</a>
</p>

![CI](https://github.com/matechat/matechat-react/actions/workflows/ci.yml/badge.svg)
[![npm Version](https://img.shields.io/npm/v/@matechat/react.svg)](https://www.npmjs.com/package/@matechat/react)
[![npm Downloads](https://img.shields.io/npm/dm/@matechat/react.svg)](https://www.npmjs.com/package/@matechat/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

---

# 📦 Introduction

**MateChat React** 是一套 AI 场景解决方案的前端 UI 组件库，致力于构建智能助手、Prompt 工具、对话系统等智能产品。它是 [MateChat Vue](https://github.com/matechat/matechat-vue) 的 React 平行实现版本。

MateChat 基于 [Huawei DevUI Design](https://devui.design/)，提供一致的视觉风格与灵活的交互能力。

## ✨ 特性

- 💡 AI 对话与提示词场景设计
- 🎨 基于 DevUI 的现代设计体系
- ⚛️ 原生支持 React + TypeScript
- 🌙 暗黑/明亮模式自动适配
- 🔌 高度自定义，支持多种场景扩展

---

# 🚀 Quick Start

```bash
# npm
npm install @matechat/react

# or pnpm
pnpm add @matechat/react
```

```tsx
import React from 'react';
import { ChatPanel, PromptEditor } from '@matechat/react';

function App() {
  return (
    <div>
      <ChatPanel
        messages={[
          { role: 'user', content: '你好，AI！' },
          { role: 'assistant', content: '您好，有什么我可以帮您的？' }
        ]}
      />
      <PromptEditor onSubmit={value => console.log('Prompt:', value)} />
    </div>
  );
}
```

---

# 🧩 组件列表

| 组件名             | 描述                                     |
| ------------------ | ---------------------------------------- |
| `ChatPanel`        | AI 对话窗口，支持多轮问答、消息历史      |
| `PromptEditor`     | 提示词输入器，支持多行与预处理能力       |
| `FunctionSelector` | 智能函数选择器，适用于插件调用场景       |
| `AgentBadge`       | 多智能体身份标记                         |
| `MessageCard`      | 卡片式消息组件，适合摘要、搜索类产品展示 |

更多组件请访问 [组件 API 文档](https://matechat.dev/api)

---

# 🔧 本地开发

```bash
git clone https://github.com/matechat/matechat-react.git
cd matechat-react
pnpm install
pnpm dev
```

启动组件开发：

```bash
pnpm storybook
```

打包构建：

```bash
pnpm build
```

---

# 📖 文档站点

访问我们的官方文档站点以获取更多示例与指南：

👉 [https://matechat.dev](https://matechat.dev)

---

# 🌍 生态系统

| 项目名                 | 描述                           |
| ---------------------- | ------------------------------ |
| matechat-vue           | MateChat 的 Vue 版本           |
| @matechat/react        | 本项目，MateChat 的 React 实现 |
| matechat-core (计划中) | 核心语义处理与插件平台         |

---

# 📈 使用趋势

[![Star History Chart](https://api.star-history.com/svg?repos=matechat/matechat-react\&type=Date)](https://star-history.com/#matechat/matechat-react&Date)

---

# 🤝 贡献指南

MateChat 是一个社区驱动的开源项目，我们欢迎任何贡献形式：

* 提交 Issue 报告问题或建议
* Fork 本仓库并提 PR
* 帮助撰写文档和翻译

请阅读我们的 [贡献指南](./CONTRIBUTING.md) 与 [行为规范](./CODE_OF_CONDUCT.md)。

贡献者列表：

<a href="https://github.com/matechat/matechat-react/graphs/contributors"><img src="https://contrib.rocks/image?repo=matechat/matechat-react" /></a>

---

# 📄 License
[MIT License](./LICENSE) © 2025 MateChat Team


