"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["174"],{928:function(e,t,n){n.r(t),n.d(t,{default:()=>a});var d=n(651),i=n(6971),s=n(1202),l=n(2379),r=n(9529);function u(){let[e,t]=(0,l.useState)();return(0,d.jsxs)("div",{style:{width:400,margin:"0 auto",background:"#fafafa",border:"1px solid #eee",borderRadius:8,padding:16,boxShadow:"0 2px 6px rgba(0,0,0,0.05)"},children:[(0,d.jsxs)("div",{style:{marginBottom:12,fontWeight:500,fontSize:14},children:["当前选中:"," ",(0,d.jsx)("span",{style:{color:e?"#2563eb":"#999"},children:e||"无"})]}),(0,d.jsx)(r.List,{value:e,options:[{label:"选项 1",value:"1"},{label:"选项 2",value:"2"},{label:"选项 3",value:"3"}],onSelected:t})]})}function o(e){let t=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.h1,{id:"list-列表",children:[(0,d.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#list-列表",children:"#"}),"List 列表"]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:"通用列表组件，支持平面列表和分组列表，点击高亮选中"}),"\n"]}),"\n",(0,d.jsxs)(t.h2,{id:"示例效果",children:[(0,d.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#示例效果",children:"#"}),"示例效果"]}),"\n",(0,d.jsx)("div",{children:(0,d.jsx)(u,{})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-ts",meta:'title="代码 示例"',children:'import React, { useState } from "react";\nimport { List } from \'@matechat/react\';\n\nexport default function ListDemoFlat() {\n  const [selected, setSelected] = useState<string | undefined>();\n\n  const options = [\n    { label: "选项 1", value: "1" },\n    { label: "选项 2", value: "2" },\n    { label: "选项 3", value: "3" },\n  ];\n\n  return (\n    <div\n      style={{\n        width: 400,\n        margin: "0 auto",\n        background: "#fafafa",\n        border: "1px solid #eee",\n        borderRadius: 8,\n        padding: 16,\n        boxShadow: "0 2px 6px rgba(0,0,0,0.05)"\n      }}\n    >\n      <div style={{ marginBottom: 12, fontWeight: 500, fontSize: 14 }}>\n        当前选中:{" "}\n        <span style={{ color: selected ? "#2563eb" : "#999" }}>\n          {selected || "无"}\n        </span>\n      </div>\n      <List value={selected} options={options} onSelected={setSelected} />\n    </div>\n  );\n}\n\n'})}),"\n",(0,d.jsxs)(t.h2,{id:"list-演示",children:[(0,d.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#list-演示",children:"#"}),"List 演示"]}),"\n",(0,d.jsx)(s.Z,{code:`
import React from "react";
import { useState } from "react";
import { List } from "@matechat/react";

export default function ListPlayground() {
  const [selected, setSelected] = useState<string | undefined>();
  // \u{5206}\u{7EC4} options\u{FF0C}\u{5B57}\u{6BB5}\u{540D}\u{4E0D}\u{4F7F}\u{7528}\u{9ED8}\u{8BA4}\u{7684} label/items\u{FF0C}\u{800C}\u{662F} name/options
  const groupedOptions = [
    {
        name: "\u{1F349} \u{6C34}\u{679C}\u{4E50}\u{56ED}",
        options: [
        { title: "\u{1F34E} \u{82F9}\u{679C}", id: "apple" },
        { title: "\u{1F34C} \u{9999}\u{8549}", id: "banana" },
        { title: "\u{1F347} \u{8461}\u{8404}", id: "grape" },
        { title: "\u{1F351} \u{6843}\u{5B50}", id: "peach" },
        ],
    },
    {
        name: "\u{1F955} \u{852C}\u{83DC}\u{4E16}\u{754C}",
        options: [
        { title: "\u{1F966} \u{897F}\u{5170}\u{82B1}", id: "broccoli" },
        { title: "\u{1F955} \u{80E1}\u{841D}\u{535C}", id: "carrot" },
        { title: "\u{1F33D} \u{7389}\u{7C73}", id: "corn" },
        ],
    },
    {
        name: "\u{1F35E} \u{4E3B}\u{98DF}\u{7CBE}\u{9009}",
        options: [
        { title: "\u{1F35A} \u{7C73}\u{996D}", id: "rice" },
        { title: "\u{1F35C} \u{9762}\u{6761}", id: "noodle" },
        { title: "\u{1F35E} \u{9762}\u{5305}", id: "bread" },
        ],
    },
    {
        name: "\u{1F36D} \u{751C}\u{54C1}\u{5929}\u{5730}",
        options: [
        { title: "\u{1F366} \u{51B0}\u{6DC7}\u{6DCB}", id: "icecream" },
        { title: "\u{1F370} \u{86CB}\u{7CD5}", id: "cake" },
        { title: "\u{1F369} \u{751C}\u{751C}\u{5708}", id: "donut" },
        ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        background: "#fafafa",
        padding: 16,
        borderRadius: 8,
        border: "1px solid #eee",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        maxWidth: 340,
        margin: "0 auto"
      }}
    >
      <div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          \u{1F33F} \u{5B8C}\u{6574}\u{53C2}\u{6570}\u{6F14}\u{793A}
        </div>
        <List
          value={selected}
          //value={"banana"}                       // \u{5F53}\u{524D}\u{9009}\u{4E2D} banana
          options={groupedOptions}
          optionLabel="title"                    // option \u{663E}\u{793A}\u{5B57}\u{6BB5}\u{FF1A}title
          optionValue="id"                       // option value \u{5B57}\u{6BB5}\u{FF1A}id
          optionGroupChildren="options"          // \u{5206}\u{7EC4}\u{5B50}\u{9879}\u{5B57}\u{6BB5}\u{FF1A}options
          optionGroupLabel="name"                // \u{5206}\u{7EC4}\u{6807}\u{9898}\u{5B57}\u{6BB5}\u{FF1A}name
          optionGroupTemplate={(group) => (      // \u{81EA}\u{5B9A}\u{4E49}\u{5206}\u{7EC4}\u{6807}\u{9898}\u{6E32}\u{67D3}
            <span style={{ color: "green" }}>{group.name} \u{1F340}</span>
          )}
          className="custom-list"                // \u{81EA}\u{5B9A}\u{4E49} className\u{FF08}\u{53EF}\u{7528} Tailwind\u{FF09}
          onSelected={setSelected}  // \u{70B9}\u{51FB}\u{65F6}\u{89E6}\u{53D1}
        />
      </div>
    </div>
  );
}

`,language:"tsx",title:"List 参数演示",style:{height:700}}),"\n",(0,d.jsxs)(t.h2,{id:"参数演示",children:[(0,d.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#参数演示",children:"#"}),"参数演示"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Prop"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"value"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string | undefined"})}),(0,d.jsx)(t.td,{children:"–"}),(0,d.jsx)(t.td,{children:"当前选中的值"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"options"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"SelectOptionsType"})}),(0,d.jsx)(t.td,{children:"–"}),(0,d.jsx)(t.td,{children:"数据源，支持平面或分组"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"optionGroupChildren"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"items"'})}),(0,d.jsx)(t.td,{children:"分组内选项字段名"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"optionGroupLabel"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"label"'})}),(0,d.jsx)(t.td,{children:"分组标题字段名"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"optionGroupTemplate"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"(group: OptionGroup) => React.ReactNode"})}),(0,d.jsx)(t.td,{children:"–"}),(0,d.jsx)(t.td,{children:"自定义分组标题渲染"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"optionLabel"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"label"'})}),(0,d.jsx)(t.td,{children:"option 显示文本字段"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"optionValue"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"value"'})}),(0,d.jsx)(t.td,{children:"option value 字段"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"onSelected"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"(value: string) => void"})}),(0,d.jsx)(t.td,{children:"–"}),(0,d.jsx)(t.td,{children:"点击选项触发"})]})]})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}let a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fdisplay%2Fgeneral%2Flist.mdx"]={toc:[{id:"示例效果",text:"示例效果",depth:2},{id:"list-演示",text:"List 演示",depth:2},{id:"参数演示",text:"参数演示",depth:2}],title:"List 列表",headingTitle:"List 列表",frontmatter:{}}}}]);