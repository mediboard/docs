"use strict";(self.webpackChunkmedi_docs=self.webpackChunkmedi_docs||[]).push([[383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1},i="Search",s={unversionedId:"measures/measure-search",id:"measures/measure-search",title:"Search",description:"Semantically search measures by title and description. Returns a list of mesures and their data",source:"@site/docs/measures/measure-search.md",sourceDirName:"measures",slug:"/measures/measure-search",permalink:"/docs/measures/measure-search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/measures/measure-search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Measures",permalink:"/docs/category/measures"},next:{title:"Pagination",permalink:"/docs/pagination"}},o={},p=[{value:"Endpoint",id:"endpoint",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"search"},"Search"),(0,n.kt)("p",null,"Semantically search measures by title and description. Returns a list of mesures and their data"),(0,n.kt)("h2",{id:"endpoint"},"Endpoint"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL")," : ",(0,n.kt)("inlineCode",{parentName:"p"},"/measures/search?<query_params>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method")," : ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Auth required")," : YES"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"value"),(0,n.kt)("th",{parentName:"tr",align:null},"data type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"q"),(0,n.kt)("td",{parentName:"tr",align:null},"search query"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conditions"),(0,n.kt)("td",{parentName:"tr",align:null},"condition ids where the effects came from"),(0,n.kt)("td",{parentName:"tr",align:null},"array","[int]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"treatments"),(0,n.kt)("td",{parentName:"tr",align:null},"treatment ids that the studies investigated"),(0,n.kt)("td",{parentName:"tr",align:null},"array","[int]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gender"),(0,n.kt)("td",{parentName:"tr",align:null},"filter studies by gender"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"phase"),(0,n.kt)("td",{parentName:"tr",align:null},"study phase"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"results"),(0,n.kt)("td",{parentName:"tr",align:null},"does the study have results"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason"),(0,n.kt)("td",{parentName:"tr",align:null},"reason trial was canceled if any"),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"add_ons"),(0,n.kt)("td",{parentName:"tr",align:null},"additional treatments added on to primary treatment"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GET https://api.mediboard.fyi/treatments/search?q=ambien"',title:'"GET',"https://api.mediboard.fyi/treatments/search?q":'ambien"'},"treatments: [\n  {\n    id: \n  }\n]\n")))}m.isMDXComponent=!0}}]);