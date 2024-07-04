"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5510],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));const o={},i="How to Set Up an Instance",p={unversionedId:"user/dappnode-cloud/providers/aws/set-up-instance",id:"user/dappnode-cloud/providers/aws/set-up-instance",title:"How to Set Up an Instance",description:"To launch a Dappnode AMI instance, follow these steps:",source:"@site/docs/user/dappnode-cloud/providers/aws/set-up-instance.md",sourceDirName:"user/dappnode-cloud/providers/aws",slug:"/user/dappnode-cloud/providers/aws/set-up-instance",permalink:"/docs/user/dappnode-cloud/providers/aws/set-up-instance",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/dappnode-cloud/providers/aws/set-up-instance.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"AWS",permalink:"/docs/user/dappnode-cloud/providers/aws/overview"},next:{title:"FAQs & Troubleshooting",permalink:"/docs/user/dappnode-cloud/providers/aws/faqs"}},l={},s=[{value:"1. <strong>Navigate to AWS Marketplace</strong> \ud83e\udded",id:"1-navigate-to-aws-marketplace-",level:3},{value:"2. <strong>AWS Account</strong> \ud83d\udc64",id:"2-aws-account-",level:3},{value:"3. <strong>Subscribe to Dappnode AMI</strong> \ud83d\udcc0",id:"3-subscribe-to-dappnode-ami-",level:3},{value:"4. <strong>Set Up Telegram for Wireguard Credentials (Optional)</strong> \ud83d\udcac",id:"4-set-up-telegram-for-wireguard-credentials-optional-",level:3},{value:"5. <strong>Launch Instance</strong> \ud83d\ude80",id:"5-launch-instance-",level:3},{value:"6. <strong>Get wireguard credentials</strong> \ud83d\udd10",id:"6-get-wireguard-credentials-",level:3},{value:"7. <strong>Connect via Wireguard</strong> \ud83d\udd0c",id:"7-connect-via-wireguard-",level:3},{value:"8. <strong>Navigate to Dappnode&#39;s UI</strong> \ud83c\udfc1",id:"8-navigate-to-dappnodes-ui-",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-set-up-an-instance"},"How to Set Up an Instance"),(0,r.kt)("p",null,"To launch a Dappnode AMI instance, follow these steps:"),(0,r.kt)("h3",{id:"1-navigate-to-aws-marketplace-"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"Navigate to AWS Marketplace")," \ud83e\udded"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/"},"AWS Marketplace"),".")),(0,r.kt)("h3",{id:"2-aws-account-"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"AWS Account")," \ud83d\udc64"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you already have an AWS account, log in. If not, create an account. For more information on signing up, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-AWSsignup.html"},"AWS Sign-Up Documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In case you end up on another website after signing up, navigate again to the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/"},"AWS Marketplace"),"."))),(0,r.kt)("h3",{id:"3-subscribe-to-dappnode-ami-"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"Subscribe to Dappnode AMI")," \ud83d\udcc0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Search "Dappnode" in the top search bar and choose the "Dappnode Cloud - Telegram Credentials - By Dappnode" option.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'On our Dappnode AMI page, you can check some information about our image. When you are ready, click "Continue to Subscribe".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Accept the terms and click "Continue to Configuration".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Check the region and click "Continue to Launch" to proceed with the instance launch.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In the "Choose Action" dropdown, select "Launch through EC2" and click "Launch".'))),(0,r.kt)("h3",{id:"4-set-up-telegram-for-wireguard-credentials-optional-"},"4. ",(0,r.kt)("strong",{parentName:"h3"},"Set Up Telegram for Wireguard Credentials (Optional)")," \ud83d\udcac"),(0,r.kt)("p",null,"This step is only necessary if you are planning to get your Wireguard credentials via Telegram."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new bot using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/newbot")," command via BotFather's chat. It will ask you for a name and username, then generate an authentication token for your new bot. Save this token, as you will need to provide it when launching the AWS instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will also need to provide your Telegram user ID. You can get it by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"/start")," to a bot such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@RawDataBot"),"."))),(0,r.kt)("h3",{id:"5-launch-instance-"},"5. ",(0,r.kt)("strong",{parentName:"h3"},"Launch Instance")," \ud83d\ude80"),(0,r.kt)("p",null,'Once in the EC2 "Launch an instance" UI you will have to choose the configuration of your instance. Next steps will explain you what configurations do you need to modify section by section.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name:")," Give a name to your instance. This name is for you to identify it in the EC2 UI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application and OS Images (Amazon Machine Image)"),": No changes needed, it comes pre-configurted according to the Dappnode Image.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instance type:")," Choose an instance type. All selectable options are suitable for running Dappnode. For more context based on your requirements, check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/dappnode-cloud/providers/aws/faqs"},"FAQs section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Pair:")," If you already have a key pair linked to your AWS account, you can use it. Alternatively, you can import keys to the EC2 or create a new one. These keys are essential for SSH access to the instance. Losing these keys could result in losing access to your instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Network Settings:")),(0,r.kt)("p",{parentName:"li"},"In this section, you will create a security group to allow necessary ports exposure. Follow these steps to ensure your Dappnode instance can perform optimally and access all required services:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Edit" under Network Settings and ensure the "Create security group" option is chosen.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To add a new rule to the group, click the "Add security group rule" button below. Include the following rules:'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SSH:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: SSH")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTP:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: HTTP")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTPS:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: HTTPS")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wireguard:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Custom UDP"),(0,r.kt)("li",{parentName:"ul"},"Port Range: 51820"),(0,r.kt)("li",{parentName:"ul"},"Source: 0.0.0.0/0")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General TCP:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Custom TCP"),(0,r.kt)("li",{parentName:"ul"},"Port Range: 1024-65535"),(0,r.kt)("li",{parentName:"ul"},"Source: 0.0.0.0/0")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General UDP:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Custom UDP"),(0,r.kt)("li",{parentName:"ul"},"Port Range: 1024-65535"),(0,r.kt)("li",{parentName:"ul"},"Source: 0.0.0.0/0")))),(0,r.kt)("p",{parentName:"li"},"For more information about why this Inbound rules are needed and details about each one, visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/dappnode-cloud/providers/aws/faqs"},"FAQs Section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Storage:")," Define the amount and type of storage for the instance. The storage requirements depend largely on your intended use."),(0,r.kt)("p",{parentName:"li"},"For more suggestions and context, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/dappnode-cloud/providers/aws/faqs"},"FAQs section"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"AWS also offers the possibility of extending storage once launched if needed."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Advanced details (optional):")," No modifications are needed here unless you plan to get your ",(0,r.kt)("strong",{parentName:"p"},"Wireguard credentials via Telegram"),'. If so, provide your userID and botToken in the text area at the end of "Advanced details", separated by a comma in the following format: (',(0,r.kt)("inlineCode",{parentName:"p"},"userID,botToken"),").\nExample => ",(0,r.kt)("inlineCode",{parentName:"p"},"123456789,1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ123456"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Summary:")," Finally, review your configuration on the 'Summary' section located on the right and click the \"Launch instance\" button. Once clicked, your instance will be launched."))),(0,r.kt)("h3",{id:"6-get-wireguard-credentials-"},"6. ",(0,r.kt)("strong",{parentName:"h3"},"Get wireguard credentials")," \ud83d\udd10"),(0,r.kt)("p",null,"To obtain the Wireguard credentials for your instance, you have two different approaches:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Via Telegram Bot")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure you have completed the optional Telegram setup steps mentioned earlier in the guide.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After launching the instance, go to your new bot's chat using the link provided by BotFather.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send any message to your bot. If the configuration is correct, you should receive a message saying ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2705 Successfully saved channel ID"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/get_wireguard_credentials")," in the bot chat. The bot should return your Wireguard credentials. Copy them, as the next step will explain how to use these credentials.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Via SSH")),(0,r.kt)("p",{parentName:"li"},"This approach is for more expiremented users, since you will have to use the terminal."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'After launching the instance, click the "Connect" button in the AWS console.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Go to the "SSH client" tab where it will provide you with a command like this:\n',(0,r.kt)("inlineCode",{parentName:"p"},'ssh -i "yourKeyPair-aws.pem" root@yourInstanceDNS'),"\nOpen your terminal and modify the command to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," user and add ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," for permissions:"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ssh -i "yourKeyPair-aws.pem" ubuntu@yourInstanceDNS\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ensure this command is run in the directory where your key pair file is located.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Once connected to your instance, run the following command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dappnode_wireguard\n")),(0,r.kt)("p",{parentName:"li"},"This command will output your Wireguard credentials. Copy them from your terminal using ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+C")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2318+Shift+C"),". The next step will explain how to use these credentials."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The installation of Dappnode on your instance may take a few minutes. If you try to obtain the credentials before the installation is complete, you may not receive them. If this happens, wait a few minutes and try again."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Via SSH"),": If you encounter this issue, exit your SSH session with the ",(0,r.kt)("inlineCode",{parentName:"li"},"exit")," command and reconnect as explained above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Via Telegram Bot"),": Simply retry the ",(0,r.kt)("inlineCode",{parentName:"li"},"/get_wireguard_credentials")," command after a short wait.\n:::"))))),(0,r.kt)("h3",{id:"7-connect-via-wireguard-"},"7. ",(0,r.kt)("strong",{parentName:"h3"},"Connect via Wireguard")," \ud83d\udd0c"),(0,r.kt)("p",null,"The setup process for connecting via Wireguard will depend on the operating system you are using. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/access-your-dappnode/vpn/wireguard#2-installing-wireguard-client"},"Wireguard documentation section")," specific to your OS for detailed instructions."),(0,r.kt)("p",null,"Once you have installed Wireguard and configured it with the credentials you obtained, you will be able to connect to your Dappnode instance securely."),(0,r.kt)("h3",{id:"8-navigate-to-dappnodes-ui-"},"8. ",(0,r.kt)("strong",{parentName:"h3"},"Navigate to Dappnode's UI")," \ud83c\udfc1"),(0,r.kt)("p",null,"Once your Wireguard tunnel is active, simply open your web browser and go to ",(0,r.kt)("a",{parentName:"p",href:"http://my.dappnode"},"http://my.dappnode")," to begin your journey with Dappnode Cloud!"))}d.isMDXComponent=!0}}]);