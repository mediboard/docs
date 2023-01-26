"use strict";(self.webpackChunkmedi_docs=self.webpackChunkmedi_docs||[]).push([[319],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(r),c=a,y=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return r?n.createElement(y,i(i({ref:e},p),{},{components:r})):n.createElement(y,i({ref:e},p))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:a,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},864:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1},i="Search",s={unversionedId:"studies/study-search",id:"studies/study-search",title:"Search",description:"Semantically search studies by title and description. Returns a list of studies and their IDs",source:"@site/docs/studies/study-search.md",sourceDirName:"studies",slug:"/studies/study-search",permalink:"/studies/study-search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/studies/study-search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Studies",permalink:"/category/studies"},next:{title:"Full Study",permalink:"/studies/full-study"}},o={},d=[{value:"Endpoint",id:"endpoint",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search"},"Search"),(0,a.kt)("p",null,"Semantically search studies by title and description. Returns a list of studies and their IDs"),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/studies/search?<query_params>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : YES"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"data type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"q"),(0,a.kt)("td",{parentName:"tr",align:null},"search query"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conditions"),(0,a.kt)("td",{parentName:"tr",align:null},"condition ids where the effects came from"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[int]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"treatments"),(0,a.kt)("td",{parentName:"tr",align:null},"treatment ids that the studies investigated"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[int]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gender"),(0,a.kt)("td",{parentName:"tr",align:null},"filter studies by gender"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"phase"),(0,a.kt)("td",{parentName:"tr",align:null},"study phase"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"results"),(0,a.kt)("td",{parentName:"tr",align:null},"does the study have results"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason"),(0,a.kt)("td",{parentName:"tr",align:null},"reason trial was canceled if any"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"add_ons"),(0,a.kt)("td",{parentName:"tr",align:null},"additional treatments added on to primary treatment"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GET https://api.mediboard.fyi/treatments/search?q=ambien"',title:'"GET',"https://api.mediboard.fyi/treatments/search?q":'ambien"'},"treatments: [\n  {\n    id: \n  }\n]\n")))}u.isMDXComponent=!0}}]);