# 快速开始

## 安装

使用你喜欢的包管理器安装 MateChat-React：

```bash
npm install --save @matechat/react
# 或者使用 pnpm
pnpm add @matechat/react
```

---

## 基本用法

在 React 项目中引入并使用 MateChat：

```tsx
import { Prompts, Prompt, PromptTitle, PromptDescription } from "@matechat/react";

export default function PromptDemo() {
  return (
    <Prompts
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",      // 每个之间间距
        width: "100%", 
      }}
    >
      <Prompt size="lg">
        <PromptTitle>🌟 大号提示</PromptTitle>
        <PromptDescription>适合在页面顶部醒目显示的重要信息。</PromptDescription>
      </Prompt>

      <Prompt size="md">
        <PromptTitle>📌 中号提示</PromptTitle>
        <PromptDescription>常用于普通提示或分块标题下方的补充说明。</PromptDescription>
      </Prompt>

      <Prompt size="sm">
        <PromptTitle>💡 小号提示</PromptTitle>
        <PromptDescription>适合在局部或列表里显示简短提示。</PromptDescription>
      </Prompt>

      <Prompt size="xs">
        <PromptTitle>✨ 超小提示</PromptTitle>
        <PromptDescription>可用于非常轻量的标签或注释。</PromptDescription>
      </Prompt>
    </Prompts>
  );
}

```




