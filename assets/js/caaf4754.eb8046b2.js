"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5914],{4137:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),g=r,h=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return t?n.createElement(h,i(i({ref:a},d),{},{components:t})):n.createElement(h,i({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6420:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(4137));const o={},i="Understanding Dappnode Packages",s={unversionedId:"user/packages/understanding-dappnode-packages",id:"user/packages/understanding-dappnode-packages",title:"Understanding Dappnode Packages",description:"What are Dappnode packages and what features do they offer?",source:"@site/docs/user/packages/understanding-dappnode-packages.md",sourceDirName:"user/packages",slug:"/user/packages/understanding-dappnode-packages",permalink:"/docs/user/packages/understanding-dappnode-packages",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/packages/understanding-dappnode-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Optimism Rollup",permalink:"/docs/user/rollups/optimism"},next:{title:"Packages' Signature",permalink:"/docs/user/packages/signature"}},p={},l=[{value:"What are Dappnode packages and what features do they offer?",id:"what-are-dappnode-packages-and-what-features-do-they-offer",level:2},{value:"<strong>Introduction</strong>",id:"introduction",level:3},{value:"Info",id:"info",level:4},{value:"Config",id:"config",level:4},{value:"Network",id:"network",level:4},{value:"Logs",id:"logs",level:4},{value:"Backup",id:"backup",level:4},{value:"File Manager",id:"file-manager",level:4}],d={toc:l},c="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-dappnode-packages"},"Understanding Dappnode Packages"),(0,r.kt)("h2",{id:"what-are-dappnode-packages-and-what-features-do-they-offer"},"What are Dappnode packages and what features do they offer?"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"introduction"},(0,r.kt)("strong",{parentName:"h3"},"Introduction")),(0,r.kt)("p",null,"One of Dappnode's top features is to offer a user-friendly interface to interact with different packages that contain clients and other applications. This section will go over the basic features you'll find in any Dappnode package."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"info"},"Info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version"),": You'll find both the package's version and its upstream version here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Getting Started"),": Some of the basic information needed to run the package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URLs"),": These will offer a number of different options, starting with bundled package UI/Dashboards and related tools such as Launchpads or external documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Package Status"),": Will provide information about the package's status, for example if it's running fine or if it has crashed or in the process of restarting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pause/Restart Package"),": Useful for troubleshooting or restarting a stopped package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove Volumes"),': Also known as the "gray trash bin", this option will wipe all of the package\'s data and start syncing from scratch in the case of clients.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove Package"),': This would be the "red trash bin", and clicking it will give you the option to preserve or delete the associated database.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages1",src:t(9561).Z,width:"1741",height:"1091"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"config"},"Config"),(0,r.kt)("p",null,"The package's settings will be available under this tab in both a simple and advanced mode. The advanced mode can be accessed by clicking the lower-right corner of the screen when available."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages2",src:t(899).Z,width:"1741",height:"1091"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"network"},"Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service"),": Some packages may have multiple services running as part of the same container. This option will allow you to adjust each of their network settings separately."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Public port mapping"),": Need to change your package's port mapping? You can change this setting in this field as well as its protocol between TCP and UDP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTPs domain mapping"),": Do you want to expose your package to the internet? You'll be able to add multiple public domains to your package here. This is a great way to share your node's RPC with friends and family!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages3",src:t(2802).Z,width:"1741",height:"1091"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"logs"},"Logs"),(0,r.kt)("p",null,'This is a great section for finding out something that is not working in your package or to look for both expected and unexpected behavior. Packages with multiple services will give you the option to switch logs in the top "Service" bar, something common for consensus clients for example, which usually run one service for the ',(0,r.kt)("inlineCode",{parentName:"p"},"beacon-chain")," and another one for ",(0,r.kt)("inlineCode",{parentName:"p"},"validator"),". Whenever you request for support in the Dappnode community, keep these handy!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages4",src:t(7908).Z,width:"1741",height:"1091"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"backup"},"Backup"),(0,r.kt)("p",null,'This option will be available in packages that generate any kind of local database that includes sensitive information such as validator keystores. You\'ll have two very self-explainatory options: "Backup Now" and "Restore Backup".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages5",src:t(4418).Z,width:"1741",height:"1091"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"file-manager"},"File Manager"),(0,r.kt)("p",null,"Also handy whenever your package has a database you'll need to access or modify, but without going through a terminal. Download and upload files in an easy way with the File Manager."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dappnode_packages6",src:t(6274).Z,width:"1741",height:"1091"})))}u.isMDXComponent=!0},9561:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages1-9986b39b271ef6adbc6d4a98e907f5c7.png"},899:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages2-bfcef9f7947159b0341c2c914f93378e.png"},2802:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages3-96bce25fad6818075d28d1f51529b442.png"},7908:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages4-bb2f5a5218ea06c59a09858997773adf.png"},4418:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages5-dd905b985e061e57968acfccca3cd1f1.png"},6274:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dappnode_packages6-3da72f7cab4ec4f639799523d3274ff8.png"}}]);