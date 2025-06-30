<!-- <div align="center"> -->
  <!-- 亮色模式 logo -->
  <!-- <a href="https://github.com/DevCloudFE#gh-light-mode-only">
    <img src="https://raw.githubusercontent.com/DevCloudFE/.github/main/profile/logo-light.svg" alt="DevCloudFE Logo Light" width="200" />
  </a> -->

  <!-- 暗色模式 logo -->
  <!-- <a href="https://github.com/DevCloudFE#gh-dark-mode-only">
    <img src="https://raw.githubusercontent.com/DevCloudFE/.github/main/profile/logo-dark.svg" alt="DevCloudFE Logo Dark" width="200" />
  </a>
</div> -->

<div align="center">
  <h1>MateChat React</h1>
</div>

<div align="center">

An AI-oriented UI component library for prompt engineering and intelligent interactions, built with React and based on DevUI Design.

<p align="center">
  <a href="https://matechat.dev">Website</a> •
  <a href="https://matechat.dev/example">Examples</a> •
  <a href="https://matechat.dev/guide/getting-started">Guide</a> •
  <a href="https://matechat.dev/api">API</a>
</p>

![CI](https://github.com/matechat/matechat-react/actions/workflows/ci.yml/badge.svg)
[![npm Version](https://img.shields.io/npm/v/@matechat/react.svg)](https://www.npmjs.com/package/@matechat/react)
[![npm Downloads](https://img.shields.io/npm/dm/@matechat/react.svg)](https://www.npmjs.com/package/@matechat/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

<div align="center">

[English](./README.md) | [简体中文](./README.zh-CN.md)

</div>

---

# 📦 Introduction

**MateChat React** is a React component library designed for AI-driven interfaces, such as chat assistants, prompt tools, agent frameworks, and more. It is the React version of [MateChat Vue](https://github.com/matechat/matechat-vue), offering consistent features and styles.

MateChat is based on [Huawei DevUI Design](https://devui.design/), offering a modern visual language, consistent user experience, and excellent scalability.

## ✨ Features

- 🧠 Built for AI interaction and prompt use-cases
- 🎨 Based on DevUI design system
- ⚛️ Fully typed React + TypeScript components
- 🌗 Built-in light/dark theme switching
- 🔌 Highly customizable & flexible

---

# 🚀 Quick Start

```bash
# npm
npm install @matechat/react

# or pnpm
pnpm add @matechat/react
```

```tsx
import { Bubble } from '@matechat/react';
import avatar from './avatar.png';

export default function BubbleDemo() {
  return (
    <div className="bubble-chat">
      <div className="bubble-row left">
        <img src={avatar} alt="Bot" className="avatar" />
        <Bubble text="您好，请问有什么可以帮您？" />
      </div>
      <div className="bubble-row right">
        <Bubble text="我想了解一下产品功能！" />
        <img src={avatar} alt="User" className="avatar" />
      </div>
      <div className="bubble-row left">
        <img src={avatar} alt="Bot" className="avatar" />
        <Bubble text="好的，请稍等..." isPending />
      </div>
    </div>
  );
}
```

---

# 🧩 Components

| Component          | Description                                   |
| ------------------ | --------------------------------------------- |
| `ChatPanel`        | Chat window with multi-turn message support   |
| `PromptEditor`     | Input field for prompt design                 |
| `FunctionSelector` | Selectable function list, useful for agents   |
| `AgentBadge`       | Visual identity badge for AI agents           |
| `MessageCard`      | Styled message display, perfect for summaries |

Explore more in our [API docs](https://matechat.dev/api)

---

# 🛠 Development

```bash
git clone https://github.com/matechat/matechat-react.git
cd matechat-react
pnpm install
pnpm dev
```

Start component development:

```bash
pnpm storybook
```

Build the library:

```bash
pnpm build
```

---

# 📖 Documentation

To explore full tutorials and examples, visit:

👉 [https://matechat.dev](https://matechat.dev)

---

# 🌱 Ecosystem

| Project             | Description                      |
| ------------------- | -------------------------------- |
| matechat-vue        | Vue version of MateChat          |
| @matechat/react     | React implementation (this repo) |
| matechat-core (WIP) | Core prompt & agent logic        |

---

# 📈 Star History

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=DevCloudFE/matechat-react&type=Date)](https://www.star-history.com/#DevCloudFE/matechat-react&Date)

---

# 🤝 Contribution

We welcome all kinds of contributions:

* File issues for bugs or features
* Create pull requests
* Help with documentation or translations

Please read our [Contribution Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before you start.

**Contributors:**

<a href="https://github.com/DevCloudFE/matechat-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DevCloudFE/matechat-react" />
</a>

---

# 📄 License

[MIT License](./LICENSE) © 2025 MateChat Team

