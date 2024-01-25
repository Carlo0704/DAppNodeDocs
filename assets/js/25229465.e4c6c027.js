"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4952],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(4137));const r={},o="Metrics Collected by Ethical Metrics",s={unversionedId:"user/ethical-metrics/metrics",id:"user/ethical-metrics/metrics",title:"Metrics Collected by Ethical Metrics",description:"Dappnode has absolutely no hidden telemetry and is completely private by design. We were reluctant of setting up a Monitoring Service because we did NOT want to collect any data from our users. Because of the request of our users to offer alerts, we came up with a private solution so we can offer alerts without compromising your privacy.",source:"@site/docs/user/ethical-metrics/metrics.md",sourceDirName:"user/ethical-metrics",slug:"/user/ethical-metrics/metrics",permalink:"/docs/user/ethical-metrics/metrics",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/ethical-metrics/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Notifications",permalink:"/docs/user/ethical-metrics/notifications"},next:{title:"Videos and Tutorials",permalink:"/docs/user/videos-and-tutorials/overview"}},l={},c=[{value:"Dappnode host metrics",id:"dappnode-host-metrics",level:2},{value:"Dappmanager metrics",id:"dappmanager-metrics",level:2},{value:"Staking Metrics",id:"staking-metrics",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metrics-collected-by-ethical-metrics"},"Metrics Collected by Ethical Metrics"),(0,a.kt)("p",null,"Dappnode has absolutely no hidden telemetry and is completely private by design. We were reluctant of setting up a Monitoring Service because we did NOT want to collect any data from our users. Because of the request of our users to offer alerts, we came up with a private solution so we can offer alerts without compromising your privacy."),(0,a.kt)("p",null,"Even if we cannot associate the metrics that your Dappnode sends with you, ",(0,a.kt)("strong",{parentName:"p"},"we are fully committed to maintaining total transparency about the metrics we collect from your dappnode when using Ethical Metrics"),". We want you to have a clear understanding of the information that is being monitored. The metrics we collect fall into several categories. Here's an overview of the metrics we gather."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These metrics also help us better allocate resources by knowing what our users are running on their dappnodes. This way, we can better understand what packages are most popular and what packages need improvement.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Ethical Metrics is one of our newest packages and it is still under improvement. This section will be updated as we add or remove metrics.")),(0,a.kt)("h2",{id:"dappnode-host-metrics"},"Dappnode host metrics"),(0,a.kt)("p",null,"These are all the metrics related directly to the host machine running your dappnode. All of these metrics are collected by the Dappnode Exporter package."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_cpu_seconds_total"),": Total CPU usage in seconds by the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container_memory_usage_bytes"),": Memory usage in bytes by containers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container_memory_cache"),": Memory cache usage by containers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_memory_MemTotal_bytes"),": Total memory available in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_memory_MemFree_bytes"),": Free memory in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_memory_Buffers_bytes"),": Memory used for buffers in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_memory_Cached_bytes"),": Cached memory in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_disk_io_time_seconds_total"),": Total disk I/O time in seconds on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_disk_reads_completed_total"),": Total completed disk reads on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_disk_writes_completed_total"),": Total completed disk writes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container_fs_usage_bytes"),": Filesystem usage by containers in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_filesystem_size_bytes"),": Total size of the filesystem in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_filesystem_free_bytes"),": Free space in the filesystem in bytes on the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container_last_seen"),": Timestamp of the last seen container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cadvisor_version_info"),": Information about the cAdvisor version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container_cpu_usage_seconds_total"),": Total CPU usage in seconds by containers.")),(0,a.kt)("h2",{id:"dappmanager-metrics"},"Dappmanager metrics"),(0,a.kt)("p",null,"The following are all the metrics related to your dappnode configuration. These are all stored in your dappmanager."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmmanager_staker_config"),": Your current staking package. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_ipfs_client_target_local"),": Wether IPFS client is in local or remote mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_eth_fallback_enabled"),": Wether the ethereum fallback client is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_eth_client_target_local"),": Wether ethereum client is in local or remote mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_auto_updates_user_packages"),": Wether auto updates for user packages is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_auto_updates_system_packages"),": Wether auto updates for system packages is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dappmanager_host_info"),": Details including Docker and Docker Compose versions, kernel version, operating system version, and architecture type.")),(0,a.kt)("h2",{id:"staking-metrics"},"Staking Metrics"),(0,a.kt)("p",null,"The following metrics are all related directly to the staking packages, including web3signer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth2_slashingprotection_prevented_signings"),": Number of prevented slashing signings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signing_signers_loaded_count"),": Count of loaded validators signing in web3signer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signing_bls_signing_duration"),": Duration of BLS signing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signing_bls_signing_duration_count"),": Count of BLS signing durations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signing_bls_signing_duration_sum"),": Sum of BLS signing durations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signing_bls_missing_identifier_count"),": Count of missing BLS identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_rpc_cons_peers"),": Number of connected peers to your staking execution clients."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_rpc_exec_peers"),": Number of connected peers to your staking consensus clients."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_rpc_cons_syncing"),": Wether your staking execution clients are syncing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_rpc_exec_syncing"),": Wether your staking consensus clients are syncing.")),(0,a.kt)("p",null,"To sum it up, the metrics we collect give us a peek into how your dappnode is doing, like how it uses resources, memory, disk, and even info related to staking. Rest assured, your privacy is of utmost importance to us, and all data transmission occurs through the TOR network to protect your privacy."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For any questions or concerns about the metrics collected by Ethical Metrics, feel free to reach out to our support team.")))}d.isMDXComponent=!0}}]);