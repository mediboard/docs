"use strict";(self.webpackChunkmedi_docs=self.webpackChunkmedi_docs||[]).push([[379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Search",l={unversionedId:"treatments/treatment-search",id:"treatments/treatment-search",title:"Search",description:"Lesigraphically search treatments. Returns a list of names and IDs",source:"@site/docs/treatments/treatment-search.md",sourceDirName:"treatments",slug:"/treatments/treatment-search",permalink:"/docs/treatments/treatment-search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/treatments/treatment-search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Treatments",permalink:"/docs/category/treatments"},next:{title:"Outcomes",permalink:"/docs/treatments/treatment-outcomes"}},s={},p=[{value:"Endpoint",id:"endpoint",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search"},"Search"),(0,a.kt)("p",null,"Lesigraphically search treatments. Returns a list of names and IDs"),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/treatments/search?<query_params>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : YES"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"data type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"q"),(0,a.kt)("td",{parentName:"tr",align:null},"search query - typically the name of a treatment"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conditions"),(0,a.kt)("td",{parentName:"tr",align:null},"condition ids the treatment was studied on"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[int]")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GET https://api.mediboard.fyi/treatments/search?q=ambien"',title:'"GET',"https://api.mediboard.fyi/treatments/search?q":'ambien"'},"treatments: [\n  {\n    id: \n  }\n]\n")))}m.isMDXComponent=!0}}]);