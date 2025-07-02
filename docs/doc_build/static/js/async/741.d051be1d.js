"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["741"],{2553:function(t,r,e){e.r(r),e.d(r,{default:()=>u});var i=e(651),n=e(6971),o=e(1202),s=e(9529);function p(){return(0,i.jsxs)(s.Prompts,{style:{display:"flex",flexDirection:"column",gap:"20px",width:"100%"},children:[(0,i.jsxs)(s.Prompt,{size:"lg",children:[(0,i.jsx)(s.PromptTitle,{children:"\uD83C\uDF1F 大号提示"}),(0,i.jsx)(s.PromptDescription,{children:"适合在页面顶部醒目显示的重要信息。"})]}),(0,i.jsxs)(s.Prompt,{size:"md",children:[(0,i.jsx)(s.PromptTitle,{children:"\uD83D\uDCCC 中号提示"}),(0,i.jsx)(s.PromptDescription,{children:"常用于普通提示或分块标题下方的补充说明。"})]}),(0,i.jsxs)(s.Prompt,{size:"sm",children:[(0,i.jsx)(s.PromptTitle,{children:"\uD83D\uDCA1 小号提示"}),(0,i.jsx)(s.PromptDescription,{children:"适合在局部或列表里显示简短提示。"})]}),(0,i.jsxs)(s.Prompt,{size:"xs",children:[(0,i.jsx)(s.PromptTitle,{children:"✨ 超小提示"}),(0,i.jsx)(s.PromptDescription,{children:"可用于非常轻量的标签或注释。"})]})]})}function d(t){let r=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"prompt-提示",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#prompt-提示",children:"#"}),"Prompt 提示"]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"用于展示一组预定义的问题或建议"}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"示例效果",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例效果",children:"#"}),"示例效果"]}),"\n",(0,i.jsx)("div",{className:"playground-wrapper",children:(0,i.jsx)(p,{})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",meta:'title="代码 示例"',children:'import { Prompts, Prompt, PromptTitle, PromptDescription } from "@matechat/react";\n\nexport default function PromptDemo() {\n  return (\n    <Prompts\n      style={{\n        display: "flex",\n        flexDirection: "column",\n        gap: "20px",      // 每个之间间距\n        width: "100%", \n      }}\n    >\n      <Prompt size="lg">\n        <PromptTitle>\uD83C\uDF1F 大号提示</PromptTitle>\n        <PromptDescription>适合在页面顶部醒目显示的重要信息。</PromptDescription>\n      </Prompt>\n\n      <Prompt size="md">\n        <PromptTitle>\uD83D\uDCCC 中号提示</PromptTitle>\n        <PromptDescription>常用于普通提示或分块标题下方的补充说明。</PromptDescription>\n      </Prompt>\n\n      <Prompt size="sm">\n        <PromptTitle>\uD83D\uDCA1 小号提示</PromptTitle>\n        <PromptDescription>适合在局部或列表里显示简短提示。</PromptDescription>\n      </Prompt>\n\n      <Prompt size="xs">\n        <PromptTitle>✨ 超小提示</PromptTitle>\n        <PromptDescription>可用于非常轻量的标签或注释。</PromptDescription>\n      </Prompt>\n    </Prompts>\n  );\n}\n\n'})}),"\n",(0,i.jsxs)(r.h2,{id:"prompt演示",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#prompt演示",children:"#"}),"Prompt演示"]}),"\n",(0,i.jsx)(o.Z,{code:`
import React from "react";
import { Prompts, Prompt, PromptTitle, PromptDescription } from "@matechat/react";

export default function PromptPlayground() {
  return (
    <div
      style={{
        background: "#fafafa",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #eee",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Prompts
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        <Prompt size="lg">
          <PromptTitle>\u{1F31F} \u{5927}\u{53F7}\u{63D0}\u{793A}</PromptTitle>
          <PromptDescription>\u{9002}\u{5408}\u{5728}\u{9875}\u{9762}\u{9876}\u{90E8}\u{9192}\u{76EE}\u{663E}\u{793A}\u{7684}\u{91CD}\u{8981}\u{4FE1}\u{606F}\u{3002}</PromptDescription>
        </Prompt>

        <Prompt size="md">
          <PromptTitle>\u{1F4CC} \u{4E2D}\u{53F7}\u{63D0}\u{793A}</PromptTitle>
          <PromptDescription>\u{5E38}\u{7528}\u{4E8E}\u{666E}\u{901A}\u{63D0}\u{793A}\u{6216}\u{5206}\u{5757}\u{6807}\u{9898}\u{4E0B}\u{65B9}\u{7684}\u{8865}\u{5145}\u{8BF4}\u{660E}\u{3002}</PromptDescription>
        </Prompt>

        <Prompt size="sm">
          <PromptTitle>\u{1F4A1} \u{5C0F}\u{53F7}\u{63D0}\u{793A}</PromptTitle>
          <PromptDescription>\u{9002}\u{5408}\u{5728}\u{5C40}\u{90E8}\u{6216}\u{5217}\u{8868}\u{91CC}\u{663E}\u{793A}\u{7B80}\u{77ED}\u{63D0}\u{793A}\u{3002}</PromptDescription>
        </Prompt>

        <Prompt size="xs">
          <PromptTitle>\u{2728} \u{8D85}\u{5C0F}\u{63D0}\u{793A}</PromptTitle>
          <PromptDescription>\u{53EF}\u{7528}\u{4E8E}\u{975E}\u{5E38}\u{8F7B}\u{91CF}\u{7684}\u{6807}\u{7B7E}\u{6216}\u{6CE8}\u{91CA}\u{3002}</PromptDescription>
        </Prompt>
      </Prompts>
    </div>
  );
}
`,language:"tsx",title:"List 参数演示",style:{height:700}}),"\n",(0,i.jsxs)(r.h2,{id:"参数说明",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#参数说明",children:"#"}),"参数说明"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"参数"}),(0,i.jsx)(r.th,{children:"说明"}),(0,i.jsx)(r.th,{children:"类型"}),(0,i.jsx)(r.th,{children:"默认值"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"size"})}),(0,i.jsx)(r.td,{children:"设置提示尺寸"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:'"lg" | "md" | "sm" | "xs"'})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:'"md"'})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"className"})}),(0,i.jsx)(r.td,{children:"自定义样式类"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"children"})}),(0,i.jsx)(r.td,{children:"内容，一般包含标题和描述"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ReactNode"})}),(0,i.jsx)(r.td,{children:"-"})]})]})]})]})}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,n.ah)(),t.components);return r?(0,i.jsx)(r,Object.assign({},t,{children:(0,i.jsx)(d,t)})):d(t)}let u=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fdisplay%2Finput%2Fprompt.mdx"]={toc:[{id:"示例效果",text:"示例效果",depth:2},{id:"prompt演示",text:"Prompt演示",depth:2},{id:"参数说明",text:"参数说明",depth:2}],title:"Prompt 提示",headingTitle:"Prompt 提示",frontmatter:{}}}}]);