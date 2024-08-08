"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4407],{4855:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>n,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=s(5893),a=s(1151);const r={},d="Rewards",i={id:"smooth/deep-dive-into-smooth/rewards",title:"Rewards",description:"Receiving and distributing rewards is one of the core functionalities of Smooth. In this section we will explain how rewards are handled by Smooth and how they are distributed to validators, as well as how users can claim their rewards.",source:"@site/docs/smooth/deep-dive-into-smooth/rewards.md",sourceDirName:"smooth/deep-dive-into-smooth",slug:"/smooth/deep-dive-into-smooth/rewards",permalink:"/docs/smooth/deep-dive-into-smooth/rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/smooth/deep-dive-into-smooth/rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"smoothSidebar",previous:{title:"Deep Dive into Smooth!",permalink:"/docs/smooth/deep-dive-into-smooth/overview"},next:{title:"Smooth Validator States",permalink:"/docs/smooth/deep-dive-into-smooth/states"}},n={},h=[{value:"Smooth&#39;s source of rewards",id:"smooths-source-of-rewards",level:2},{value:"How rewards are distributed",id:"how-rewards-are-distributed",level:2},{value:"How rewards are claimed",id:"how-rewards-are-claimed",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"rewards",children:"Rewards"}),"\n",(0,t.jsxs)(o.p,{children:["Receiving and distributing rewards is one of the core functionalities of ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". In this section we will explain how rewards are handled by ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," and how they are distributed to validators, as well as how users can claim their rewards."]}),"\n",(0,t.jsx)(o.h2,{id:"smooths-source-of-rewards",children:"Smooth's source of rewards"}),"\n",(0,t.jsxs)(o.p,{children:["A ",(0,t.jsx)(o.code,{children:"Reward"})," is considered to be any balance denominated in ETH that is sent to Smooth's address. When received, it is shared fairly among all the participants in the pool."]}),"\n",(0,t.jsx)(o.p,{children:"There are 2 main sources of rewards in Smooth:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Block Proposal rewards"}),": These rewards are generated by validators within the pool. Whenever a validator successfully proposes a block, it sends the block reward to Smooth's address."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Donations"}),": These are the rewards that are sent to Smooth's address by anyone who wants to support the project. ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," only accepts donations in ETH."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"how-rewards-are-distributed",children:"How rewards are distributed"}),"\n",(0,t.jsxs)(o.p,{children:["When a validator has an active subscription to the pool (",(0,t.jsx)(o.code,{children:"Active"})," or ",(0,t.jsx)(o.code,{children:"YellowCard"})," state) it is eligible for rewards, meaning that it will receive a given share of each reward that is sent to the pool. Validators in ",(0,t.jsx)(o.code,{children:"RedCard"})," are considered subscribed, but don't earn rewards until they become active again."]}),"\n",(0,t.jsxs)(o.p,{children:["Smooth's distributes rewards to the validators as ",(0,t.jsx)(o.code,{children:"Pending Rewards"}),". These are rewards that are not ",(0,t.jsx)(o.em,{children:"consolidated"})," yet, meaning that they belong to the validator but they can not be claimed yet, until a valid block proposal is sent to ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," by that validator."]}),"\n",(0,t.jsxs)(o.p,{children:["Later on, when a validator sends a valid block proposal to ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),", all its ",(0,t.jsx)(o.code,{children:"Pending Rewards"})," are transformed into ",(0,t.jsx)(o.code,{children:"Accumulated Rewards"}),". These rewards are consolidated and can be claimed by the validator."]}),"\n",(0,t.jsx)(o.p,{children:"Therefore, we consider that a validator has 2 types of rewards:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Pending Rewards"}),": Rewards that are not consolidated yet. They can not be claimed."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Accumulated Rewards"}),": Rewards that are consolidated and can be claimed by the validator."]}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Dappnode receives a ",(0,t.jsx)(o.strong,{children:"7%"})," fee of all rewards distributed by ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". This fee is automatically deducted from the rewards before they are distributed to validators. This fee serves to support the development and sustainability of ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," and Dappnode!"]})}),"\n",(0,t.jsx)(o.h2,{id:"how-rewards-are-claimed",children:"How rewards are claimed"}),"\n",(0,t.jsxs)(o.p,{children:["As a ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," user, you have a third type of reward: ",(0,t.jsx)(o.code,{children:"Claimable Rewards"}),". These are the sum of all your validator's ",(0,t.jsx)(o.code,{children:"Accumulated Rewards"})," with the same withdrawal address that you have not already claimed."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Claimable Rewards"}),": Rewards that you can claim as a ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," user. Sum of all your validator's unclaimed ",(0,t.jsx)(o.code,{children:"Accumulated Rewards"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Smooth's users can claim their rewards by visiting ",(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth's website"})," and clicking on the ",(0,t.jsx)(o.code,{children:"Claim All"})," button once logged in. This trigger a transaction that will send all claimable rewards to the user's address."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," identifies users through an ETH1 address, which serves as the withdrawal address for all your validators. If you have multiple validators associated with distinct withdrawal addresses, you will need to claim your rewards for each of them separately."]})})]})}function c(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>i,a:()=>d});var t=s(7294);const a={},r=t.createContext(a);function d(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);