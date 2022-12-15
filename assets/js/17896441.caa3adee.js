"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7918],{7634:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(7294),l=a(6010),r=a(3117),s=a(5999),c=a(9960);function o(e){const{permalink:t,title:a,subLabel:r,isNext:s}=e;return n.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(o,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(o,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var d=a(2263),m=a(5551),u=a(373),b=a(5281),p=a(4477);const E={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=E[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(c.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,d.Z)(),{pluginId:s}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,u.J)(s),{latestDocSuggestion:o,latestVersionSuggestion:i}=(0,m.Jo)(s),p=o??(E=i).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:i.label,to:p.path,onClick:()=>c(i.name)})))}function f(e){let{className:t}=e;const a=(0,p.E)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function _(e){let{className:t}=e;const a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,b.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:b.k.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const k="iconEdit_dcUD";function T(e){let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:b.k.common.editThisPage},n.createElement(T,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const w="tag_hD8n",C="tagRegular_D6E_",y="tagWithCount_i0QQ";function A(e){let{permalink:t,label:a,count:r}=e;return n.createElement(c.Z,{href:t,className:(0,l.Z)(w,r?y:C)},a,r&&n.createElement("span",null,r))}const x="tags_XVD_",B="tag_JSN8";function I(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:B},n.createElement(A,{label:t,permalink:a}))}))))}const M="lastUpdated_foO9";function D(e){return n.createElement("div",{className:(0,l.Z)(b.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(I,e)))}function H(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(b.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",M)},(a||r)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function V(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:c,lastUpdatedBy:o,tags:i}=a,d=i.length>0,m=!!(r||s||o);return d||m?n.createElement("footer",{className:(0,l.Z)(b.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(D,{tags:i}),m&&n.createElement(H,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:c})):null}var P=a(1575),S=a(6043);const F="tocCollapsible_bZGK",R="tocCollapsibleContent_NNA8",z="tocCollapsibleExpanded_IqtF";var O=a(721);const q="tocCollapsibleButton_l22C",X="tocCollapsibleButtonExpanded_KeTX";function J(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,r.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",q,!t&&X,a.className)}),n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function G(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:o}=(0,S.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(F,!c&&z,a)},n.createElement(J,{collapsed:c,onClick:o}),n.createElement(S.z,{lazy:!0,className:R,collapsed:c},n.createElement(O.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var K=a(9649);const Q="docItemContainer_vinB",W="docItemCol_DM6M",$="tocMobile_TmEX";var j=a(1944),Y=a(7524),ee=a(2802),te=a(8596);const ae={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"};var ne=a(4996);function le(e){return n.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function re(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(c.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function se(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return n.createElement("li",(0,r.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(s+1)}))}function ce(){const e=(0,ne.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(c.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",ae.breadcrumbsItemLink),href:e},n.createElement(le,{className:ae.breadcrumbHomeIcon})))}function oe(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(b.k.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ce,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(se,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(re,{href:t.href,isLast:l},t.label))})))):null}var ie=a(5290);function de(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:r}=t,{keywords:s}=l,{description:c,title:o}=a,i=r.image??l.image;return n.createElement(j.d,{title:o,description:c,keywords:s,image:i})}function me(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:s,hide_table_of_contents:c,toc_min_heading_level:o,toc_max_heading_level:d}=r,{title:m}=a,u=!s&&void 0===t.contentTitle,p=(0,Y.i)(),E=!c&&t.toc&&t.toc.length>0,h=E&&("desktop"===p||"ssr"===p);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!c&&W)},n.createElement(f,null),n.createElement("div",{className:Q},n.createElement("article",null,n.createElement(oe,null),n.createElement(_,null),E&&n.createElement(G,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:(0,l.Z)(b.k.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(b.k.docs.docMarkdown,"markdown")},u&&n.createElement("header",null,n.createElement(K.Z,{as:"h1"},m)),n.createElement(ie.Z,null,n.createElement(t,null))),n.createElement(V,e)),n.createElement(i,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(P.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:b.k.docs.docTocDesktop})))}function ue(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(j.FG,{className:t},n.createElement(de,e),n.createElement(me,e))}},4477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);