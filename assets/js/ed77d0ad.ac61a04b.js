"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3218],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=n,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8016:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(4137));const a={},i="Rocketpool",l={unversionedId:"user/staking/ethereum/lsd-pools/rocketpool",id:"user/staking/ethereum/lsd-pools/rocketpool",title:"Rocketpool",description:"---",source:"@site/docs/user/staking/ethereum/lsd-pools/rocketpool.md",sourceDirName:"user/staking/ethereum/lsd-pools",slug:"/user/staking/ethereum/lsd-pools/rocketpool",permalink:"/docs/user/staking/ethereum/lsd-pools/rocketpool",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/ethereum/lsd-pools/rocketpool.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Holesky Testnet",permalink:"/docs/user/staking/ethereum/solo/holesky"},next:{title:"StakeWise",permalink:"/docs/user/staking/ethereum/lsd-pools/stakewise"}},s={},p=[{value:"<strong>Rocketpool Overview</strong>",id:"rocketpool-overview",level:3},{value:"<strong>Package Key Features</strong>",id:"package-key-features",level:3},{value:"<strong>First Steps to Start a Minipool with Rocketpool and Dappnode</strong>",id:"first-steps-to-start-a-minipool-with-rocketpool-and-dappnode",level:3}],c={toc:p},u="wrapper";function k(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rocketpool"},"Rocketpool"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"rocketpool-overview"},(0,n.kt)("strong",{parentName:"h3"},"Rocketpool Overview")),(0,n.kt)("p",null,'Rocketpool is a decentralized Ethereum staking solution that allows users to earn rewards by staking their Ether (ETH). It\'s designed to be inclusive, allowing those without the full 32 ETH required for an Ethereum validator to be able to participate. Rocketpool achieves this through its innovative "minipool" concept, which facilitates pooled staking among multiple participants.'),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"package-key-features"},(0,n.kt)("strong",{parentName:"h3"},"Package Key Features")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Decentralized Staking:")," The Rocketpool package ensures that staking remains decentralized by using your Dappnode's local Ethereum node, safeguarding the core principles of the Ethereum network. Rocketpool also operates on smart contracts, ensuring that operations are transparent, auditable, and free from centralized control."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Minipools:")," Users can start a minipool with as little as 16 or 8 ETH, allowing for broader participation in Ethereum's block creation."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Integrated with DappNode:")," Easy setup, monitoring, and management of Rocketpool directly from your Dappnode interface.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"first-steps-to-start-a-minipool-with-rocketpool-and-dappnode"},(0,n.kt)("strong",{parentName:"h3"},"First Steps to Start a Minipool with Rocketpool and Dappnode")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Package Installation:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In your Dappnode's UI, navigate to the DAppStore."),(0,n.kt)("li",{parentName:"ul"},"Find the ",(0,n.kt)("a",{parentName:"li",href:"http://my.dappnode/installer/dnp/rocketpool.dnp.dappnode.eth"},"Rocketpool package"),"."),(0,n.kt)("li",{parentName:"ul"},"Click 'Install'. Once installed, the Rocketpool package should appear in your installed packages list."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Setting up the Environment:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ensure you're running a full, synced Ethereum node (Execution client + Consensus client)."),(0,n.kt)("li",{parentName:"ul"},"If you are not running a full Ethereum node yet, go to the ",(0,n.kt)("a",{parentName:"li",href:"http://my.dappnode/stakers/ethereum"},"Stakers Menu"),", select your clients and apply the configuration to start syncronization."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Starting a Minipool:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Navigate to the Rocketpool package dashboard."),(0,n.kt)("li",{parentName:"ul"},"Choose the amount of ETH you wish to stake. Remember, you can start a minipool with as little as 16 or 8 ETH."),(0,n.kt)("li",{parentName:"ul"},"Follow the on-screen instructions to initialize your minipool."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Funding your Minipool:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Send the amount of ETH you\u2019ve chosen to the provided address. Make sure you keep track of this address, as it will be the address of your minipool."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Monitoring and Management:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Once your minipool is active, you can monitor its performance, rewards, and other details with Dappnode's ",(0,n.kt)("a",{parentName:"li",href:"/docs/user/packages/dms"},"DMS"),".")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It's essential to remember that while Rocketpool simplifies the staking process, it's crucial to understand the risks involved. Always make sure to do thorough research and ensure the security of your investments."))}k.isMDXComponent=!0}}]);