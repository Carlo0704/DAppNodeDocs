"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),h=a,m=s["".concat(l,".").concat(h)]||s[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var o=n(3117),a=(n(7294),n(3905));const r={title:"VPN",sidebar_position:2},i="Accessing your Dappnode via VPN",p={unversionedId:"user/guides/access/vpn",id:"user/guides/access/vpn",title:"VPN",description:"---",source:"@site/docs/user/guides/access/vpn.md",sourceDirName:"user/guides/access",slug:"/user/guides/access/vpn",permalink:"/user/guides/access/vpn",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user/guides/access/vpn.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"VPN",sidebar_position:2},sidebar:"UserGuide",previous:{title:"Wi-Fi",permalink:"/user/guides/access/wifi"},next:{title:"Local Network",permalink:"/user/guides/access/local"}},l={},d=[{value:"Introduction to VPNs",id:"introduction-to-vpns",level:2},{value:"Selecting a VPN client in the admin UI",id:"selecting-a-vpn-client-in-the-admin-ui",level:2},{value:"WireGuard (preferred)",id:"wireguard-preferred",level:2},{value:"Gathering your VPN credentials",id:"gathering-your-vpn-credentials",level:3},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"iOS",id:"ios",level:3},{value:"Windows",id:"windows",level:3},{value:"Android",id:"android",level:3},{value:"OpenVPN",id:"openvpn",level:2},{value:"Linux",id:"linux-1",level:3},{value:"Ubuntu / NetworkManager",id:"ubuntu--networkmanager",level:4},{value:"MacOS",id:"macos-1",level:3},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Windows",id:"windows-1",level:3},{value:"Setting up a VPN client from the Dappnode terminal",id:"setting-up-a-vpn-client-from-the-dappnode-terminal",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-your-dappnode-via-vpn"},"Accessing your Dappnode via VPN"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"introduction-to-vpns"},"Introduction to VPNs"),(0,a.kt)("p",null,"If you don't know what a VPN (Virtual Private Network) is, here is a little description:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A virtual private network, or VPN, is an encrypted connection over the Internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorized people from eavesdropping on the traffic and allows the user to conduct work remotely.")),(0,a.kt)("p",null,"The main purpose of the VPN is to provide a secure connection to your Dappnode when you need remote access to its hosted services (eg. Blockchain clients or IPFS) or your Dappnode itself (eg. updating packages). "),(0,a.kt)("p",null,"Dappnode supports 2 different kinds of VPN protocols and software: ",(0,a.kt)("strong",{parentName:"p"},"WireGuard")," (preferred) and ",(0,a.kt)("strong",{parentName:"p"},"OpenVPN"),".  "),(0,a.kt)("p",null,"This document is structured as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#selecting-a-vpn-client-in-the-admin-ui"},(0,a.kt)("strong",{parentName:"a"},"Selecting a VPN client in the admin UI")),": Explains how to access and select a VPN client in the Dappnode UI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#wireguard-preferred"},(0,a.kt)("strong",{parentName:"a"},"WireGuard")," (preferred)"),": Explains how to set up WireGuard on your Dappnode, configure a profile and how to connect your devices using WireGuard clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#openvpn"},(0,a.kt)("strong",{parentName:"a"},"OpenVPN")),": Explains how to set up OpenVPN on your Dappnode and how to connect your devices using OpenVPN clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-a-vpn-client-from-the-dappnode-terminal"},(0,a.kt)("strong",{parentName:"a"},"Setting up a VPN client from the Dappnode terminal")),": Read this section if you want to access via VPN directly, or your machine has not wifi interface.")),(0,a.kt)("h2",{id:"selecting-a-vpn-client-in-the-admin-ui"},"Selecting a VPN client in the admin UI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please connect to your DAppNodes WiFi or local network access before you attempt these steps. \u26a0\ufe0f")),(0,a.kt)("p",null,"So select a VPN client, choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"VPN")," menu item in the left sidebar or click ",(0,a.kt)("a",{parentName:"p",href:"hhttp://my.dappnode/#/vpn/WireGuard"},"this link"),". You will see a page where you can select either WireGuard or OpenVPN."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/vpn_view_new.png"})),(0,a.kt)("p",null,"If you want to set up WireGuard, follow the ",(0,a.kt)("a",{parentName:"p",href:"#WireGuard-preferred"},"WireGuard instructions"),".",(0,a.kt)("br",{parentName:"p"}),"\n","On the other hand, if you wish to use OpenVPN, click on the OpenVPN tab and install the OpenVPN package. Continue with the ",(0,a.kt)("a",{parentName:"p",href:"#openvpn"},"OpenVPN instructions"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/openvpn_install_package.png"})),(0,a.kt)("h2",{id:"wireguard-preferred"},"WireGuard (preferred)"),(0,a.kt)("p",null,"On the WireGuard tab, you'll be able to see the default profiles. By default we create a single profile, called ",(0,a.kt)("inlineCode",{parentName:"p"},"dappnode_admin"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/WireGuard_view_2_new.png"})),(0,a.kt)("h3",{id:"gathering-your-vpn-credentials"},"Gathering your VPN credentials"),(0,a.kt)("p",null,"The steps on how to get your VPN credentials are the same across all clients and platforms. If you wish, you can create a new as follows:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/WireGuard_new_device.png"})),(0,a.kt)("p",null,"After the successful creation of that profile, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Get link"),". This will prompt you with the configuration text for your WireGuard client. Keep this window open for later, you will need to paste this configuration text into your respective WireGuard client or you can download the configuration as a text file."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you want to access your Dappnode with multiple devices, make sure to create a configuration profile for each and every device that hosts a WireGuard client \u26a0\ufe0f")),(0,a.kt)("p",null,"These are the recommended WireGuard clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS: ",(0,a.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/#macos-app-store"},"WireGuard for macOS")),(0,a.kt)("li",{parentName:"ul"},"iOS: ",(0,a.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/#ios-app-store"},"WireGuard for iOS")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/#windows-7-8-81-10-2012-2016-2019"},"WireGuard for Windows")),(0,a.kt)("li",{parentName:"ul"},"Android: ",(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.wireguard.android"},"WireGuard for Android")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/#ubuntu-module-tools"},"WireGuard for Linux"))),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f These steps require a terminal \u26a0\ufe0f")),(0,a.kt)("p",null,"To install WireGuard on Linux, please take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"WireGuard for Linux")," page linked above and look for the corresponding Distribution you're using."),(0,a.kt)("p",null,"After installing WireGuard, you'll need to create the config file and copy the content of the Dappnode UI there (the configuration you obtained in the steps above):",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/WireGuard/wg0.conf")," or",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/WireGuard/wg0.conf")),(0,a.kt)("p",null,"Finally, type the following command (this starts the WireGuard client and connects the VPN interface):",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo wg-quick up wg0")),(0,a.kt)("p",null,"\ud83c\udf89 Now you're ready to connect to your Dappnode! \ud83c\udf89   "),(0,a.kt)("p",null,"Disconnect from your DAppNodes WiFi hotspot if connected and connect to your usual WiFi network or wired connection.  "),(0,a.kt)("p",null,"To check if you are connected you can try a few things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"ifconfig")," and check if there is a new interface you're not familiar with"),(0,a.kt)("li",{parentName:"ol"},"Ping the Dappnode interface with ",(0,a.kt)("inlineCode",{parentName:"li"},"ping my.dappnode")),(0,a.kt)("li",{parentName:"ol"},"Try to access the ",(0,a.kt)("a",{parentName:"li",href:"http://my.dappnode/"},"Dappnode UI"))),(0,a.kt)("p",null,"If you want to see some statistics, type:\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo wg show")),(0,a.kt)("p",null,"The output of this command should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo wg show\ninterface: wg0 public key: zFhjLJdXrLl86ayX6JpyfN0/rVH+qxgF/e8HxRP9cxk=\n  private key: (hidden)\n  listening port: 51820\npeer: OQZWpDPUcNPRZMjncY6BUwsli6HtqgTUn2lAGdXVi2c=\n  endpoint: 173.249.33.176:51820\n  allowed ips: 172.33.0.0/16, 10.20.0.0/24\n  latest handshake: 36 seconds ago\n  transfer: 222.36 KiB received, 81.86 KiB sent\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it seems that you can't connect to your Dappnode, check the ",(0,a.kt)("a",{parentName:"p",href:"../../../user/faq/troubleshooting#why-cant-i-connect-via-vpn-to-my-dappnode"},"troubleshooting steps here"))),(0,a.kt)("h3",{id:"macos"},"macOS"),(0,a.kt)("p",null,"To install the official WireGuard macOS client, head to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.WireGuard.com/install/#macos-app-store"},"Mac App Store")," link and install the client."),(0,a.kt)("p",null,"After installing the client, open your Finder, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Go")," in the menu bar and choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_macos_finder.png",width:"300",height:"300"})),(0,a.kt)("p",null,"In the list of Applications, search for ",(0,a.kt)("inlineCode",{parentName:"p"},"WireGuard"),". Double-click the Application. A new icon will appear in the top menu bar, containing the WireGuard logo. "),(0,a.kt)("p",null,"Click on that icon and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Tunnels"),". Proceed by adding a new empty tunnel as pictured:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_macos_new_tunnel.png",width:"500",height:"350"})),(0,a.kt)("p",null,"Give your WireGuard profile a name (preferably the one you also set in the Dappnode VPN UI). Copy and paste the configuration text into the big textbox as in the example below:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_macos_config.png",width:"500",height:"350"})),(0,a.kt)("p",null,"\ud83c\udf89 Now you're ready to connect to your Dappnode! \ud83c\udf89   "),(0,a.kt)("p",null,"Disconnect from your DAppNodes WiFi hotspot if connected and connect to your usual WiFi network or wired connection.  "),(0,a.kt)("p",null,"Click on the WireGuard icon in the menu bar once more and select the profile you just created, in this example ",(0,a.kt)("inlineCode",{parentName:"p"},"Dappnode"),":"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_macos_connect.png",width:"300",height:"300"})),(0,a.kt)("p",null,"To check if you have successfully connected to your Dappnode, try opening the ",(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode"},"Dappnode Dashboard"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it seems that you can't connect to your Dappnode, check the ",(0,a.kt)("a",{parentName:"p",href:"../../../user/faq/troubleshooting#why-cant-i-connect-via-vpn-to-my-dappnode"},"troubleshooting steps here"))),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("p",null,"Open the iOS AppStore, search for ",(0,a.kt)("inlineCode",{parentName:"p"},"WireGuard")," and install the following App."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_ios_appstore.jpeg",width:"300",height:"300"})),(0,a.kt)("p",null,"Open up the app and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Add a tunnel"),", followed by your preferred option:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_ios_new_tunnel.jpeg",width:"300",height:"300"})),(0,a.kt)("p",null,"You can then either scan the QR code that is created when you take a look at your VPN profile in the Dappnode VPN UI, import the configuration file that you can download or input all the data yourself."),(0,a.kt)("p",null,"\ud83c\udf89 Now you're ready to connect to your Dappnode! \ud83c\udf89   "),(0,a.kt)("p",null,"Disconnect from your DAppNodes WiFi hotspot if connected and connect to your usual WiFi network.  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it seems that you can't connect to your Dappnode, check the ",(0,a.kt)("a",{parentName:"p",href:"../../../user/faq/troubleshooting#why-cant-i-connect-via-vpn-to-my-dappnode"},"troubleshooting steps here"))),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"To install WireGuard on Windows, you can download the installer, linked ",(0,a.kt)("a",{parentName:"p",href:"https://download.wireguard.com/windows-client/wireguard-installer.exe"},"here"),". "),(0,a.kt)("p",null,"After installing WireGuard, press the Windows key and search for ",(0,a.kt)("inlineCode",{parentName:"p"},"WireGuard"),". A new windows should pop up:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_windows_settings.png"})),(0,a.kt)("p",null,"You can then either press ",(0,a.kt)("inlineCode",{parentName:"p"},"Import tunnel(s) from file")," or click on the little arrow, next to ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Tunnel")," and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add empty tunnel...")," to add your WireGuard config which you have opened or downloaded above. Don't forget to also give your tunnel a name:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_windows_tunnel.png"})),(0,a.kt)("p",null,"Now you're ready to connect to your Dappnode! Click on the, in the screenshot highlighted in green, ",(0,a.kt)("inlineCode",{parentName:"p"},"Activate")," button:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/wireguard_windows_connect.png"})),(0,a.kt)("p",null,"\ud83c\udf89 Now you're ready to connect to your Dappnode! \ud83c\udf89   "),(0,a.kt)("p",null,"Disconnect from your DAppNodes WiFi hotspot if connected and connect to your normal WiFi network or wired connection.  "),(0,a.kt)("p",null,"To check if you have successfully connected to your Dappnode, try opening the ",(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode"},"Dappnode Dashboard"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it seems that you can't connect to your Dappnode, check the ",(0,a.kt)("a",{parentName:"p",href:"../../../user/faq/troubleshooting#why-cant-i-connect-via-vpn-to-my-dappnode"},"troubleshooting steps here"))),(0,a.kt)("h3",{id:"android"},"Android"),(0,a.kt)("p",null,"On your Android phone, go to the PlayStore, then look for ",(0,a.kt)("inlineCode",{parentName:"p"},"WireGuard")," and select this app and install it:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/WireGuard_android_install.jpg"})),(0,a.kt)("p",null,"Then, if you open the app you will see the following view:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/WireGuard_android_set_up.jpg"})),(0,a.kt)("p",null,"Click on the blue circle button on the bottom right:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/WireGuard_android_set_up_2.jpg"})),(0,a.kt)("p",null,"You can then either scan the QR code that is created when you take a look at your VPN profile in the Dappnode VPN UI, import the configuration file that you can download or input all the data yourself."),(0,a.kt)("p",null,"\ud83c\udf89 Now you're ready to connect to your Dappnode! \ud83c\udf89   "),(0,a.kt)("p",null,"Disconnect from your DAppNodes WiFi hotspot if connected and connect to your normal WiFi network.  "),(0,a.kt)("p",null,"To check if you have successfully connected to your Dappnode, try opening the ",(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode"},"Dappnode Dashboard"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it seems that you can't connect to your Dappnode, check the ",(0,a.kt)("a",{parentName:"p",href:"../../../user/faq/troubleshooting#why-cant-i-connect-via-vpn-to-my-dappnode"},"troubleshooting steps here"))),(0,a.kt)("h2",{id:"openvpn"},"OpenVPN"),(0,a.kt)("p",null,"On the OpenVPN tab you'll be able to see the default profile, once you have installed the OpenVPN package from the DAppStore.\nThe default device profile has super admin privileges so you can access and manage the Dappnode admin UI; this user cannot be deleted."),(0,a.kt)("p",null,"Take into account that some VPN clients might send all your local traffic through the VPN, which is not very ideal if you have many devices connected to your Dappnode, saturating the bandwidth of your Dappnode. Your Dappnode is not intended to manage all the traffic of the devices connected to it, only the traffic that goes to your Dappnode packages."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u26a0\ufe0f When you download and install a VPN credentials file, only your Dappnode package traffic will be routed through the VPN, your regular traffic will still be done with your local interface. If you want to route all your traffic through your Dappnode, you should configure it in your VPN client settings by checking the box "Send all traffic" (or something similar).')),(0,a.kt)("p",null,"These are the recommended OpenVPN clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS: ",(0,a.kt)("a",{parentName:"li",href:"https://tunnelblick.net/"},"Tunnelblick")),(0,a.kt)("li",{parentName:"ul"},"iOS: ",(0,a.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981"},"Open VPN connect")),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("a",{parentName:"li",href:"https://openvpn.net/community-downloads/"},"Open VPN (community installer)")),(0,a.kt)("li",{parentName:"ul"},"Android: ",(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=de.blinkt.openvpn"},"Open VPN for Android")),(0,a.kt)("li",{parentName:"ul"},"Linux: Already included in recent versions.")),(0,a.kt)("p",null,"Depending on your OS these are the instructions for installing our recommended OpenVPN clients."),(0,a.kt)("h3",{id:"linux-1"},"Linux"),(0,a.kt)("h4",{id:"ubuntu--networkmanager"},"Ubuntu / NetworkManager"),(0,a.kt)("p",null,"OpenVPN comes installed in Ubuntu recent versions, but to be sure, follow these steps. Run the terminal application:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu1.png"})),(0,a.kt)("p",null,"Install OpenVPN and plugin for NetworkManager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install network-manager-openvpn-gnome openvpn\n")),(0,a.kt)("p",null,"Once the installation is complete, restart Network Manager by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service network-manager restart\n")),(0,a.kt)("p",null,'Go to "Settings -> Network" and click to the "+" button to add a VPN connection:'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu2.png"})),(0,a.kt)("p",null,'Select "Import from file..."'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu4.png"})),(0,a.kt)("p",null,"Browse the filesystem to select the downloaded file:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu3.png"})),(0,a.kt)("p",null,"Add the profile with the default settings:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu5.png"})),(0,a.kt)("p",null,"Now you can connect selecting the profile from the network tray icon:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ubuntu6.png"})),(0,a.kt)("h3",{id:"macos-1"},"MacOS"),(0,a.kt)("p",null,"The recommended OpenVPN client is Tunnelblick and you can download it ",(0,a.kt)("a",{parentName:"p",href:"https://tunnelblick.net"},"here")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/mac1.png"})),(0,a.kt)("p",null,"Once you have followed the steps to install the tunnelblick client in your MAC, download the file from the URL given in the console to download the OVPN file with your credentials."),(0,a.kt)("p",null,'If you have already downloaded the config file before installing Tunnelblick, you can select the "I have a config file" option and browse to its location. If not, once you have downloaded the OVPN file, just double click on it and Tunnelblick will add the config for you.'),(0,a.kt)("p",null,"Select your preferred option about the users that will have access to the config."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/mac4.png"})),(0,a.kt)("p",null,"The system will probably ask for your admin password to install the VPN configuration, and it is done!"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/mac5.png"})),(0,a.kt)("p",null,"Just open Tunnelblick in your MAC and click on Connect Dappnode."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/mac6.png"})),(0,a.kt)("p",null,"Once connected you can already access ",(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")," with your new OpenVPN connection!"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/mac8.png"})),(0,a.kt)("h3",{id:"ios-1"},"iOS"),(0,a.kt)("p",null,"The recommended OpenVPN client is OpenVPN Connect and you can download it ",(0,a.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},"here")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios1.png"})),(0,a.kt)("p",null,"Once you have installed it you can just scan the QR code and hit download:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios4.png"})),(0,a.kt)("p",null,'and click in "Open in OpenVPN"'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios5.png"})),(0,a.kt)("p",null,"Tap the add button and name your connection"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios7.png"})),(0,a.kt)("p",null,"The phone will ask you permission for OpenVPN to add a configuration profile , please do."),(0,a.kt)("p",null,"And it is done, you can just connect to your new OpenVPN now"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios9.png"})),'After a few seconds, you will see in the OpenVPN interface that you are connected. You can either connect to your server through the OpenVPN app or directly from the phone\xb4s "VPN" menu in "Settings"',(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/ios10.png"})),(0,a.kt)("p",null,"Once connected you can access ",(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")," with your new OpenVPN connection!"),(0,a.kt)("h3",{id:"android-1"},"Android"),(0,a.kt)("p",null,"Install ",(0,a.kt)("strong",{parentName:"p"},"OpenVPN for Android")," from ",(0,a.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=de.blinkt.openvpn"},"Google Play")," or ",(0,a.kt)("a",{parentName:"p",href:"https://f-droid.org/en/packages/de.blinkt.openvpn/"},"F-Droid"),":"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android1.jpg"})),(0,a.kt)("p",null,"Download the OpenVPN profile from the URL or scanned QR code:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android2.jpg"})),(0,a.kt)("p",null,"Open the downloaded file and import it to the application, then save it with your preferred name:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android3.jpg"})),(0,a.kt)("p",null,"Select the saved profile to connect to it:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android4.jpg"})),(0,a.kt)("p",null,"Accept the connection request:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android5.jpg"})),(0,a.kt)("p",null,"You should see a connection log similar to this:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android6.jpg"})),(0,a.kt)("p",null,"Once connected, you should be able to browse the Dappnode Admin page:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"300",src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/android7.jpg"})),(0,a.kt)("h3",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"Download the recommended client for ",(0,a.kt)("a",{parentName:"p",href:"https://openvpn.net/community-downloads/"},"OpenVPN WINDOWS INSTALLER (NSIS)")," and follow the steps to install it:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows1.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows2.png"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows3.png"})),(0,a.kt)("p",null,"Download the file from the provided link by the Dappnode administrator."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows4.png"})),(0,a.kt)("p",null,"Run the OpenVPN GUI program:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows5.png"})),(0,a.kt)("p",null,'Select "Import file..." from the tray bar icon (right click):'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows6.png"})),(0,a.kt)("p",null,"Select the downloaded file:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows7.png"})),(0,a.kt)("p",null,'Finally, select "Connect" from the tray bar icon menu:'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://github.com/dappnode/Dappnode/raw/master/doc/openvpn/windows8.png"})),(0,a.kt)("h2",{id:"setting-up-a-vpn-client-from-the-dappnode-terminal"},"Setting up a VPN client from the Dappnode terminal"),(0,a.kt)("p",null,"After installing your Dappnode, upon reaching the terminal prompt, you can enter the following command to generate a WireGuard config to connect to your Dappnode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dappnode_wireguard\n")),(0,a.kt)("p",null,"This will provide you the WireGuard configuration to get you started."),(0,a.kt)("p",null,"If you prefer to get a QR code you can scan on your phone, use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dappnode_wireguard --qr\n")),(0,a.kt)("p",null,"Using the above-mentioned configuration, you can take a look at the ",(0,a.kt)("a",{parentName:"p",href:"#wireguard-preferred"},"WireGuard configuration tutorial")," above."))}u.isMDXComponent=!0}}]);