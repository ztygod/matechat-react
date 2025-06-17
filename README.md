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
import React from 'react';
import { ChatPanel, PromptEditor } from '@matechat/react';

function App() {
  return (
    <div>
      <ChatPanel
        messages={[
          { role: 'user', content: 'Hello, AI!' },
          { role: 'assistant', content: 'Hi there! How can I help you today?' }
        ]}
      />
      <PromptEditor onSubmit={value => console.log('Prompt:', value)} />
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

[![Star History Chart](https://api.star-history.com/svg?repos=matechat/matechat-react\&type=Date)](https://star-history.com/#matechat/matechat-react&Date)

---

# 🤝 Contribution

We welcome all kinds of contributions:

* File issues for bugs or features
* Create pull requests
* Help with documentation or translations

Please read our [Contribution Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before you start.

Contributors:

<a href="https://github.com/matechat/matechat-react/graphs/contributors"><img src="https://contrib.rocks/image?repo=matechat/matechat-react" /></a>

---

# 📄 License

[MIT License](./LICENSE) © 2025 MateChat Team

