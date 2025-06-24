# 🚀 快速开始

### 📦 安装

使用你喜欢的包管理器安装 MateChat-React：

```bash
npm install --save @matechat/react
# 或者使用 pnpm
pnpm add @matechat/react
```

---

### 🧩 基本用法

在 React 项目中引入并使用 MateChat：

```tsx
import { MateChat } from '@matechat/react';

export default function App() {
  return (
    <MateChat
      botName="MateBot"
      sendMessage={async (messages) => {
        const last = messages[messages.length - 1];
        const reply = await fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({ message: last.content }),
        }).then(res => res.json());

        return [{ role: 'assistant', content: reply.answer }];
      }}
    />
  );
}
```




