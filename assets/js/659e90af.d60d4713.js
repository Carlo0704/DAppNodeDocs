(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),a=(n(0),n(154)),c={sidebar_position:3},p={unversionedId:"user-guide/ui/access/vpn",id:"user-guide/ui/access/vpn",isDocsHomePage:!1,title:"VPN's",description:"Firstly, if you don't know what VPN is, below you can read a little description you can find on the Internet.",source:"@site/docs/user-guide/ui/access/vpn.md",sourceDirName:"user-guide/ui/access",slug:"/user-guide/ui/access/vpn",permalink:"/user-guide/ui/access/vpn",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/ui/access/vpn.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Wifi Hotspot",permalink:"/user-guide/ui/access/wifi"},next:{title:"CLI",permalink:"/user-guide/ui/access/cli"}},r=[{value:"Set up VPN from admin UI",id:"set-up-vpn-from-admin-ui",children:[]},{value:"OpenVPN",id:"openvpn",children:[{value:"Linux",id:"linux",children:[]},{value:"MacOS",id:"macos",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"Wireguard",id:"wireguard",children:[{value:"Linux",id:"linux-1",children:[]},{value:"MacOS",id:"macos-1",children:[]},{value:"iOS",id:"ios-1",children:[]},{value:"Windows",id:"windows-1",children:[]},{value:"Android",id:"android-1",children:[]}]},{value:"Set up VPN from DAppNode terminal",id:"set-up-vpn-from-dappnode-terminal",children:[]}],l={toc:r};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Firstly, if you don't know what VPN is, below you can read a little description you can find on the Internet."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A virtual private network, or VPN, is an encrypted connection over the Internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorized people from eavesdropping on the traffic and allows the user to conduct work remotely.")),Object(a.b)("p",null,"The main purpose of setting up the VPN access is to let the user safely connect to his DAppNode in case he wants to access it remotely."),Object(a.b)("p",null,"DAppNode supports 2 kinds of VPN: OpenVPN and Wireguard. Below you have a little explanation about what explains each section:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Set up VPN from admin UI"),": Explain how access to the VPN section and what you can do from this view. (you need to have access to the admin UI)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OpenVPN"),": Explain how to set up OpenVPN in dappnode and how to connect your device using an OpenVPN client."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Wireguard"),": Explain how to set up wireguard in dappnode and how to connect your device using a wireguard client."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Set up VPN from DAppNode terminal"),": Read this section if you want to access via VPN directly, or your machine has not wifi interface.")),Object(a.b)("h2",{id:"set-up-vpn-from-admin-ui"},"Set up VPN from admin UI"),Object(a.b)("p",null,"Firstly, you should go to VPN page, clicking on the VPN tab on the left menu. You sill see a view where you can select 2 tabs: OpenVPN and wireguard."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/vpn_view.png"})),Object(a.b)("p",null,"In case you want to set up openVPN, follow the instruction of OpenVPN.\nOn the other hand, if you wish to use wireguard, click on the tab Wireguard, you will need to install the wireguard package how you see in the below image."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/wireguard_view_installed.png"})),Object(a.b)("p",null,"In case you want to set up wireguard, follow the instruction of Wireguard."),Object(a.b)("h2",{id:"openvpn"},"OpenVPN"),Object(a.b)("p",null,"Once you have your DAppNode running, you will get an URL in your terminal from where you can download the OVPN config file and open it in your device with your OpenVPN client."),Object(a.b)("p",null,"If you have still not installed your OpenVPN client . Just download the credentials file and follow the instructions."),Object(a.b)("p",null,"Opening this OVPN file will configure your VPN connection to your DAppNode from your device. The first device VPN connection will have super admin privileges so you can access and manage the DAppNode admin UI; this user cannot be deleted."),Object(a.b)("p",null,"Take into account that some VPN clients might send all traffic through the VPN, which is not very ideal if you have many people connected to your DAppNode, or only to send traffic which points to an ETH domain."),Object(a.b)("p",null,"DAppNode is not intended to manage all the traffic of the devices connected to it, only the ETH domains access requests."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'\u26a0\ufe0f When you download and install a VPN credentials file, only your ETH traffic will be going out through the VPN, the regular IP traffic will still be done with your regular IP. If you want to route all your Internet traffic through your DAppNode so you are behind your VPN, you should configure it in your VPN client settings by checking the Box "Send all traffic".')),Object(a.b)("p",null,"These are the recommended Open VPN clients for each OS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mac os: ",Object(a.b)("a",{parentName:"li",href:"https://tunnelblick.net/"},"Tunnelblick")),Object(a.b)("li",{parentName:"ul"},"Ios: ",Object(a.b)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981"},"Open VPN connect")),Object(a.b)("li",{parentName:"ul"},"Windows: ",Object(a.b)("a",{parentName:"li",href:"https://openvpn.net/community-downloads/"},"Open VPN (community installer)")),Object(a.b)("li",{parentName:"ul"},"Android: ",Object(a.b)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=de.blinkt.openvpn"},"Open VPN for Android")),Object(a.b)("li",{parentName:"ul"},"Linux: Already included in recent versions.")),Object(a.b)("p",null,"Depending on your OS these are the instructions for installing our recommended OpenVPN clients."),Object(a.b)("p",null,"!!! info\nPlease note that for the ovpn to be correctly downloaded from the link given you will need to have the TCP port 8092 opened and that the default port to connect via OpenVPN is 1194 UDP. UPnP should have opened them for you if your router has UPnp enabled, if not you will have to open them manually"),Object(a.b)("h3",{id:"linux"},"Linux"),Object(a.b)("h4",{id:"ubuntu--networkmanager"},"Ubuntu / NetworkManager"),Object(a.b)("p",null,"OpenVPN comes installed in Ubuntu recent versions, but to be sure, follow these steps. Run the terminal application:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu1.png"})),Object(a.b)("p",null,"Install OpenVPN and plugin for NetworkManager:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo apt-get install network-manager-openvpn-gnome openvpn\n")),Object(a.b)("p",null,"Once the installation is complete, restart Network Manager by typing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo service network-manager restart\n")),Object(a.b)("p",null,'Go to "Settings -> Network" and click to the "+" button to add a VPN connection:'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu2.png"})),Object(a.b)("p",null,'Select "Import from file..."'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu4.png"})),Object(a.b)("p",null,"Browse the filesystem to select the downloaded file:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu3.png"})),Object(a.b)("p",null,"Add the profile with the default settings:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu5.png"})),Object(a.b)("p",null,"Now you can connect selecting the profile from the network tray icon:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ubuntu6.png"})),Object(a.b)("h3",{id:"macos"},"MacOS"),Object(a.b)("p",null,"The recommended OpenVPN client is Tunnelblick and you can download it ",Object(a.b)("a",{parentName:"p",href:"https://tunnelblick.net"},"here")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/mac1.png"})),Object(a.b)("p",null,"Once you have followed the steps to install the tunnelblick client in your MAC, download the file from the URL given in the console to download the OVPN file with your credentials."),Object(a.b)("p",null,'If you have already downloaded the config file before installing Tunnelblick, you can select the "I have a config file" option and browse to its location. If not, once you have downloaded the OVPN file, just double click on it and Tunnelblick will add the config for you.'),Object(a.b)("p",null,"Select your preferred option about the users that will have access to the config."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/mac4.png"})),Object(a.b)("p",null,"The system will probably ask for your admin password to install the VPN configuration, and it is done!"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/mac5.png"})),Object(a.b)("p",null,"Just open Tunnelblick in your MAC and click on Connect DAppNode."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/mac6.png"})),Object(a.b)("p",null,"Once connected you can already access ",Object(a.b)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")," with your new OpenVPN connection!"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/mac8.png"})),Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("p",null,"The recommended OpenVPN client is OpenVPN Connect and you can download it ",Object(a.b)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8"},"here")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios1.png"})),Object(a.b)("p",null,"Once you have installed it you can just scan the QR code and hit download:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios4.png"})),Object(a.b)("p",null,'and click in "Open in OpenVPN"'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios5.png"})),Object(a.b)("p",null,"Tap the add button and name your connection"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios7.png"})),Object(a.b)("p",null,"The phone will ask you permission for OpenVPN to add a configuration profile , please do."),Object(a.b)("p",null,"And it is done, you can just connect to your new OpenVPN now"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios9.png"})),'After a few seconds, you will see in the OpenVPN interface that you are connected. You can either connect to your server through the OpenVPN app or directly from the phone\xb4s "VPN" menu in "Settings"',Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/ios10.png"})),Object(a.b)("p",null,"Once connected you can access ",Object(a.b)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")," with your new OpenVPN connection!"),Object(a.b)("h3",{id:"android"},"Android"),Object(a.b)("p",null,"Install ",Object(a.b)("strong",{parentName:"p"},"OpenVPN for Android")," from ",Object(a.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=de.blinkt.openvpn"},"Google Play")," or ",Object(a.b)("a",{parentName:"p",href:"https://f-droid.org/en/packages/de.blinkt.openvpn/"},"F-Droid"),":"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android1.jpg"})),Object(a.b)("p",null,"Download the OpenVPN profile from the URL or scanned QR code:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android2.jpg"})),Object(a.b)("p",null,"Open the downloaded file and import it to the application, then save it with your preferred name:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android3.jpg"})),Object(a.b)("p",null,"Select the saved profile to connect to it:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android4.jpg"})),Object(a.b)("p",null,"Accept the connection request:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android5.jpg"})),Object(a.b)("p",null,"You should see a connection log similar to this:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android6.jpg"})),Object(a.b)("p",null,"Once connected, you should be able to browse the DAppNode Admin page:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://my.dappnode/"},"http://my.dappnode/")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"300",src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/android7.jpg"})),Object(a.b)("h3",{id:"windows"},"Windows"),Object(a.b)("p",null,"Download the recommended client for ",Object(a.b)("a",{parentName:"p",href:"https://openvpn.net/community-downloads/"},"OpenVPN WINDOWS INSTALLER (NSIS)")," and follow the steps to install it:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows1.png"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows2.png"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows3.png"})),Object(a.b)("p",null,"Download the file from the provided link by the DAppNode administrator."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows4.png"})),Object(a.b)("p",null,"Run the OpenVPN GUI program:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows5.png"})),Object(a.b)("p",null,'Select "Import file..." from the tray bar icon (right click):'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows6.png"})),Object(a.b)("p",null,"Select the downloaded file:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows7.png"})),Object(a.b)("p",null,'Finally, select "Connect" from the tray bar icon menu:'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"https://github.com/dappnode/DAppNode/raw/master/doc/openvpn/windows8.png"})),Object(a.b)("h2",{id:"wireguard"},"Wireguard"),Object(a.b)("p",null,"Once you have installed the Wireguard package, you will be able to see this page:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/wireguard_view_2.png"})),Object(a.b)("p",null,"This step is common whatever OS/device you will use as a client. By default, one profile is created, click on the Get link button which is in the column Credentials.\nNow you can see some configuration text. Keep this window for later, you will need to paste this configuration in the client app you will use as a wireguard client."),Object(a.b)("p",null,"Remember if you want to access with more devices, you will need to add more configurations, typing a name and clicking on Add device button."),Object(a.b)("p",null,"These are the recommended Open VPN clients for each OS:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"macOS: ",Object(a.b)("a",{parentName:"li",href:"https://www.wireguard.com/install/#macos-app-store"},"WireGuard for macOS")),Object(a.b)("li",{parentName:"ul"},"iOS: ",Object(a.b)("a",{parentName:"li",href:"https://www.wireguard.com/install/#ios-app-store"},"WireGuard for iOS")),Object(a.b)("li",{parentName:"ul"},"Windows: ",Object(a.b)("a",{parentName:"li",href:"https://www.wireguard.com/install/#windows-7-8-81-10-2012-2016-2019"},"WireGuard for Windows")),Object(a.b)("li",{parentName:"ul"},"Android: ",Object(a.b)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.wireguard.android"},"WireGuard for Android")),Object(a.b)("li",{parentName:"ul"},"Linux: ",Object(a.b)("a",{parentName:"li",href:"https://www.wireguard.com/install/#ubuntu-module-tools"},"WireGuard for Linux"))),Object(a.b)("h3",{id:"linux-1"},"Linux"),Object(a.b)("p",null,"To use wireguard in ubuntu, you will need to use the terminal in the installation process. Firstly, it is needed to install the prerequisites:\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo apt install openresolv")),Object(a.b)("p",null,"Then, you can install Wireguard:\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo apt install wireguard")),Object(a.b)("p",null,"Create the configuration file and paste the configuration you have copied before (The configuration text you have obtained on the wireguard tab on dappnode UI):\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo nano /etc/wireguard/wg0.conf")),Object(a.b)("p",null,"Finally, type the following command:\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo wg-quick up wg0")),Object(a.b)("p",null,"To check you are connected you can do 2 things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"ifconfig"),' and check if there is an interface "new".'),Object(a.b)("li",{parentName:"ol"},"Try to access the dappnode UI, if you can access it's ok.")),Object(a.b)("p",null,"In case you can, type:\n",Object(a.b)("inlineCode",{parentName:"p"},"sudo wg show")),Object(a.b)("p",null,"The output of this command should be something like:\n",Object(a.b)("inlineCode",{parentName:"p"},"~$ sudo wg show interface: wg0 public key: zFhjLJdXrLl86ayX6JpyfN0/rVH+qxgF/e8HxRP9cxk= private key: (hidden) listening port: 51820"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"peer: OQZWpDPUcNPRZMjncY6BUwsli6HtqgTUn2lAGdXVi2c= endpoint: 173.249.33.176:51820 allowed ips: 172.33.0.0/16 latest handshake: 36 seconds ago transfer: 222.36 KiB received, 81.86 KiB sent")),Object(a.b)("h3",{id:"macos-1"},"MacOS"),Object(a.b)("p",null,"Content to be added soon."),Object(a.b)("h3",{id:"ios-1"},"iOS"),Object(a.b)("p",null,"Content to be added soon."),Object(a.b)("h3",{id:"windows-1"},"Windows"),Object(a.b)("p",null,"Content to be added soon."),Object(a.b)("h3",{id:"android-1"},"Android"),Object(a.b)("p",null,"In your mobile, go to the playstore, then look for ",Object(a.b)("inlineCode",{parentName:"p"},"wireguard")," and select this app and install it:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/wireguard_android_install.jpg"})),Object(a.b)("p",null,"Then, if you open the app you will see the next image:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/wireguard_android_set_up.jpg"})),Object(a.b)("p",null,"Click on the blue circle button on the right bottom:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/wireguard_android_set_up_2.jpg"})),Object(a.b)("p",null,"You can obtain the configuration scanning the QR you obtain on the vpn/wireguard view, download the file and import it or copy the contain of the configuration."),Object(a.b)("h2",{id:"set-up-vpn-from-dappnode-terminal"},"Set up VPN from DAppNode terminal"),Object(a.b)("p",null,"Automatically, after installing DAppNode you should see the next image and a link where can download the credentials."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/VirtualBox_console.png"})),Object(a.b)("p",null,"If it does not happen, you can generate the OpenVPN credentials manually with the command:\n",Object(a.b)("inlineCode",{parentName:"p"},"dappnode_connect")),Object(a.b)("p",null,"Using the link you can download the credentials or scanning the QR you can download the credentials on your mobile phone. Once you have downloaded the credentials, you can jump into the OpenVPN section where it is explained how to set up the client in the device you will use to connect via VPN to the dappnode."))}d.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,h=b["".concat(c,".").concat(u)]||b[u]||s[u]||a;return n?i.a.createElement(h,p(p({ref:t},l),{},{components:n})):i.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);