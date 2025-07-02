"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["865"],{171:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var d=s(651),r=s(6971),t=s(1202),l=s(9529);s(2210);let i=(e,n)=>(console.log("发送消息:",e),new Promise(e=>{setTimeout(()=>{n.callbacks.onFinish(),e()},1500)}));function c(){return(0,d.jsx)("div",{style:{maxWidth:500,margin:"2rem auto"},children:(0,d.jsx)(l.Sender,{initialMessage:"Hello, MateChat!",placeholder:"输入消息，按 Enter 发送",input:i,onMessageChange:e=>{console.log("内容变化:",e)},onSend:e=>{console.log("消息发送开始，AbortController 可用于取消请求",e)}})})}function o(e){let n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"sender-发送",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sender-发送",children:"#"}),"Sender 发送"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"这是一个带发送按钮和自动高度文本框的消息输入组件。"}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"组件演示",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#组件演示",children:"#"}),"组件演示"]}),"\n",(0,d.jsx)("div",{className:"playground-wrapper",children:(0,d.jsx)(c,{})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="代码 示例"',children:'import React from "react";\nimport { Sender } from "@matechat/react"; // 假设 Sender 代码在同目录 Sender.tsx\n\n// 模拟后端接口类型\nconst fakeBackend = {\n  input: (message: string, options: { callbacks: { onFinish: () => void }; signal: AbortSignal }) => {\n    console.log("发送消息:", message);\n    return new Promise<void>((resolve) => {\n      setTimeout(() => {\n        options.callbacks.onFinish();\n        resolve();\n      }, 1500);\n    });\n  },\n};\n\nexport default function SenderDemo() {\n  return (\n    <div>\n      <Sender\n        className=\'w-full\'\n        initialMessage="Hello, MateChat!"\n        placeholder="输入消息，按 Enter 发送"\n        input={fakeBackend.input}\n        onMessageChange={(msg) => {\n          console.log("内容变化:", msg);\n        }}\n        onSend={(controller) => {\n          console.log("消息发送开始，AbortController 可用于取消请求", controller);\n        }}\n      />\n    </div>\n  );\n}\n\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"sender演示",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sender演示",children:"#"}),"Sender演示"]}),"\n",(0,d.jsx)(t.Z,{code:`
import React, { useState } from "react";
import { Sender, SenderButton } from "@matechat/react"; // \u{8C03}\u{6574}\u{4E3A}\u{5B9E}\u{9645}\u{8DEF}\u{5F84}

// \u{6A21}\u{62DF}\u{5F02}\u{6B65}\u{53D1}\u{9001}\u{51FD}\u{6570}\u{FF0C}\u{652F}\u{6301}\u{53D6}\u{6D88}
const fakeBackendInput = (message, { callbacks, signal }) => {
  console.log("\u{53D1}\u{9001}\u{6D88}\u{606F}:", message);

  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      callbacks.onFinish();
      resolve();
    }, 2000);

    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      console.log("\u{53D1}\u{9001}\u{53D6}\u{6D88}");
      reject(new Error("\u{53D1}\u{9001}\u{53D6}\u{6D88}"));
    });
  });
};

export default function SenderPlayground() {
  const [isSending, setIsSending] = useState(false);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [lastMessage, setLastMessage] = useState("");

  // \u{53D1}\u{9001}\u{6309}\u{94AE}\u{70B9}\u{51FB}\u{4E8B}\u{4EF6}
  const handleSendClick = () => {
    if (isSending && abortController) {
      // \u{6B63}\u{5728}\u{53D1}\u{9001}\u{FF0C}\u{70B9}\u{51FB}\u{505C}\u{6B62} => \u{53D6}\u{6D88}\u{53D1}\u{9001}
      abortController.abort();
      setIsSending(false);
      setAbortController(null);
      return;
    }
    // \u{975E}\u{53D1}\u{9001}\u{72B6}\u{6001}\u{FF0C}\u{4EC0}\u{4E48}\u{90FD}\u{4E0D}\u{505A}\u{FF0C}\u{8FD9}\u{91CC}\u{4E0D}\u{76F4}\u{63A5}\u{89E6}\u{53D1}\u{53D1}\u{9001}\u{FF0C}\u{7531} Sender \u{7EC4}\u{4EF6}\u{5904}\u{7406}
  };

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2 className="mb-4 text-lg font-bold">Sender \u{7EC4}\u{4EF6} Playground \u{6F14}\u{793A}</h2>

      <Sender
        initialMessage="\u{8FD9}\u{662F}\u{9ED8}\u{8BA4}\u{6D88}\u{606F}"
        placeholder="\u{8BF7}\u{8F93}\u{5165}\u{4F60}\u{7684}\u{6D88}\u{606F}\u{FF0C}\u{6309} Enter \u{53D1}\u{9001}"
        input={fakeBackendInput}
        onMessageChange={(msg) => {
          console.log("\u{5185}\u{5BB9}\u{53D8}\u{66F4}:", msg);
        }}
        onSend={(controller) => {
          setIsSending(true);
          setAbortController(controller);
          setLastMessage("\u{6B63}\u{5728}\u{53D1}\u{9001}...");
          console.log("\u{53D1}\u{9001}\u{5F00}\u{59CB}\u{FF0C}AbortController \u{5DF2}\u{4FDD}\u{5B58}");
          // \u{6CE8}\u{610F}\u{FF1A}\u{8FD9}\u{91CC}\u{4E0D}\u{80FD}\u{76F4}\u{63A5}\u{7528}controller.signal\u{76D1}\u{542C}\u{7ED3}\u{675F}\u{4E8B}\u{4EF6}\u{FF0C}\u{8981}\u{4F9D}\u{8D56} input \u{7684}\u{56DE}\u{8C03}
        }}
      />

      {/* <div className="mb-4">
        <strong>\u{72B6}\u{6001}:</strong> {isSending ? "\u{53D1}\u{9001}\u{4E2D}..." : "\u{7A7A}\u{95F2}"}
      </div>
      <div className="mb-4">
        <strong>\u{6700}\u{8FD1}\u{53D1}\u{9001}\u{6D88}\u{606F}:</strong> {lastMessage || "\u{65E0}"}
      </div> */}
      
      <div className="mb-4" style={{display: "flex",margin: "2rem auto"}}>
        <strong style={{marginRight: "10px"}}> Sender \u{6309}\u{94AE} </strong>

        <SenderButton
          isSending={isSending}
          onClick={handleSendClick}
          aria-label={isSending ? "\u{505C}\u{6B62}\u{53D1}\u{9001}" : "\u{53D1}\u{9001}"}
        />
      </div>
    </div>
  );
}
`,language:"tsx",title:"List 参数演示",style:{height:700}}),"\n",(0,d.jsxs)(n.h2,{id:"参数说明",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数说明",children:"#"}),"参数说明"]}),"\n",(0,d.jsxs)(n.h3,{id:"senderbutton-组件参数说明",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#senderbutton-组件参数说明",children:"#"}),"SenderButton 组件参数说明"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"参数名"}),(0,d.jsx)(n.th,{children:"类型"}),(0,d.jsx)(n.th,{children:"默认值"}),(0,d.jsx)(n.th,{children:"描述"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"icon"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"React.ReactNode"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsxs)(n.td,{children:["按钮内显示的图标。默认：",(0,d.jsx)(n.code,{children:"isSending"})," 为 ",(0,d.jsx)(n.code,{children:"false"})," 显示发送图标，",(0,d.jsx)(n.code,{children:"true"})," 显示停止图标。可覆盖。"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"isSending"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsxs)(n.td,{children:["是否处于发送中状态。",(0,d.jsx)(n.code,{children:"true"})," 显示停止图标，",(0,d.jsx)(n.code,{children:"false"})," 显示发送图标。"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"其他"}),(0,d.jsxs)(n.td,{children:["继承自 ",(0,d.jsx)(n.code,{children:"button"})," 元素所有属性"]}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["其他原生 button 属性，如 ",(0,d.jsx)(n.code,{children:"onClick"}),", ",(0,d.jsx)(n.code,{children:"className"})," 等"]})]})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"sender-组件参数说明",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sender-组件参数说明",children:"#"}),"Sender 组件参数说明"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"参数名"}),(0,d.jsx)(n.th,{children:"类型"}),(0,d.jsx)(n.th,{children:"默认值"}),(0,d.jsx)(n.th,{children:"描述"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"initialMessage"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'""'})}),(0,d.jsx)(n.td,{children:"输入框的初始内容"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"placeholder"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'"Type your message here..."'})}),(0,d.jsx)(n.td,{children:"输入框的占位提示文字"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"input"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(message: string, options: { callbacks: { onFinish: () => void }; signal: AbortSignal }) => void | Promise<void>"})}),(0,d.jsx)(n.td,{children:"必填"}),(0,d.jsxs)(n.td,{children:["输入处理函数，执行消息发送逻辑。参数包括消息文本和包含 ",(0,d.jsx)(n.code,{children:"onFinish"})," 回调及 ",(0,d.jsx)(n.code,{children:"AbortSignal"}),"。"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onMessageChange"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(message: string) => void"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:"消息内容变化回调，每次输入框内容变动都会调用"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onSend"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(controller: AbortController) => void"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsxs)(n.td,{children:["点击发送按钮时触发，传入 ",(0,d.jsx)(n.code,{children:"AbortController"}),"，可用于取消发送"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"其他"}),(0,d.jsxs)(n.td,{children:["继承自 ",(0,d.jsx)(n.code,{children:"div"})," 元素所有属性"]}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["其他原生 div 属性，如 ",(0,d.jsx)(n.code,{children:"className"}),", ",(0,d.jsx)(n.code,{children:"style"})," 等"]})]})]})]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}let a=u;u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["zh%2Fdisplay%2Finput%2Fsender.mdx"]={toc:[{id:"组件演示",text:"组件演示",depth:2},{id:"sender演示",text:"Sender演示",depth:2},{id:"参数说明",text:"参数说明",depth:2},{id:"senderbutton-组件参数说明",text:"SenderButton 组件参数说明",depth:3},{id:"sender-组件参数说明",text:"Sender 组件参数说明",depth:3}],title:"Sender 发送",headingTitle:"Sender 发送",frontmatter:{}}}}]);