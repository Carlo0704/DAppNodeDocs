"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3389],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(o),m=a,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||n;return o?r.createElement(u,s(s({ref:t},p),{},{components:o})):r.createElement(u,s({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1837:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(7462),a=(o(7294),o(4137));const n={},s="Smooth's architecture",i={unversionedId:"smooth/deep-dive-into-smooth/oracle-sm",id:"smooth/deep-dive-into-smooth/oracle-sm",title:"Smooth's architecture",description:"Smooth is composed of two main components: the Oracle and the Smart Contract. These two components work together to track validators and distribute rewards fairly. Both are open source and indispensable to the functioning of Smooth. While the Smart Contract serves to track all the events related to the pool onchain (subscriptions, unsubscriptions, block proposals, etc.), the Oracle is responsible of computing the rewards of each validator.",source:"@site/docs/smooth/deep-dive-into-smooth/oracle-sm.md",sourceDirName:"smooth/deep-dive-into-smooth",slug:"/smooth/deep-dive-into-smooth/oracle-sm",permalink:"/docs/smooth/deep-dive-into-smooth/oracle-sm",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/smooth/deep-dive-into-smooth/oracle-sm.md",tags:[],version:"current",frontMatter:{},sidebar:"smoothSidebar",previous:{title:"Smooth Validator States",permalink:"/docs/smooth/deep-dive-into-smooth/states"},next:{title:"Subscribing to Smooth",permalink:"/docs/smooth/subscribe-to-smooth/overview"}},l={},c=[{value:"The Smart Contract",id:"the-smart-contract",level:2},{value:"The Oracle",id:"the-oracle",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smooths-architecture"},"Smooth's architecture"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," is composed of two main components: the ",(0,a.kt)("strong",{parentName:"p"},"Oracle")," and the ",(0,a.kt)("strong",{parentName:"p"},"Smart Contract"),". These two components work together to track validators and distribute rewards fairly. Both are open source and indispensable to the functioning of ",(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth"),". While the Smart Contract serves to track all the events related to the pool onchain (subscriptions, unsubscriptions, block proposals, etc.), the Oracle is responsible of computing the rewards of each validator."),(0,a.kt)("h2",{id:"the-smart-contract"},"The Smart Contract"),(0,a.kt)("p",null,'Smooth\'s Smart Contract is deployed on the Ethereum mainnet and is responsible for "receiving" all the events related to the pool onchain. This includes subscriptions, unsubscriptions, block proposals, and more. Since it is the Smart Contract the one who holds all the ETH collected by the pool, it is from the Smart Contract where all ',(0,a.kt)("a",{parentName:"p",href:"https://smooth.dappnode.io/"},"Smooth")," users will claim their rewards."),(0,a.kt)("p",null,"Computing and storing all rewards calculations onchain would be almost impossible and very expensive, so merkle trees are used to summarize the state of all validators. This allows the Smart Contract to store a single hash onchain that represents the state of all validators subscribed to the pool. This hash is called the ",(0,a.kt)("strong",{parentName:"p"},"Merkle Root")," and ",(0,a.kt)("strong",{parentName:"p"},"is computed by the Oracle"),"."),(0,a.kt)("h2",{id:"the-oracle"},"The Oracle"),(0,a.kt)("p",null,"As mentioned before, ",(0,a.kt)("strong",{parentName:"p"},"the Oracle is responsible for computing the rewards of each validator"),". It does so by computing a merkle tree that summarizes the state of all validators subscribed to the pool. This merkle tree, computed offchain, is summarized into a ",(0,a.kt)("strong",{parentName:"p"},"Merkle Root"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Oracle works only with finalized data. This means that Oracle will effectively work with data from a few epochs ago. This is done to ensure that the data Oracle processes is non-reversible and no reorgs are possible.")),(0,a.kt)("p",null,"Once every 28800 slots (4 days), the Oracle sends a transaction to the Smart Contract with the updated Merkle Root. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is not untill the Oracle sends the transaction to the Smart Contract with the updated Merkle Root that the rewards are available to be claimed by the validators. This means that if a validator correctly proposes a block, it will not be able to claim its rewards until the Oracle sends the transaction to the Smart Contract with the updated Merkle Root.")))}d.isMDXComponent=!0}}]);