"use strict";(self.webpackChunkmedi_docs=self.webpackChunkmedi_docs||[]).push([[723],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,l(l({ref:e},m),{},{components:r})):n.createElement(f,l({ref:e},m))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9213:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},l="Diffs",o={unversionedId:"treatments/treatment-diffs",id:"treatments/treatment-diffs",title:"Diffs",description:"Get datapoints directly comparing two treatments i.e ambien vs lunesta, ambien vs placebo",source:"@site/docs/treatments/treatment-diffs.md",sourceDirName:"treatments",slug:"/treatments/treatment-diffs",permalink:"/treatments/treatment-diffs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/treatments/treatment-diffs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Effects",permalink:"/treatments/treatment-effects"},next:{title:"Trials",permalink:"/treatments/trials"}},s={},p=[{value:"Endpoint",id:"endpoint",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diffs"},"Diffs"),(0,a.kt)("p",null,"Get datapoints directly comparing two treatments i.e ambien vs lunesta, ambien vs placebo"),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/treatments/diffs?<query_params>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : YES"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"data type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"group_a"),(0,a.kt)("td",{parentName:"tr",align:null},"list of treatments in group_a"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[int]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"group_b"),(0,a.kt)("td",{parentName:"tr",align:null},"list of treatments in group_b"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[int]")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To list all diffs containing a treatment, leave group_b empty")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GET https://api.mediboard.fyi/treatments/search?q=ambien"',title:'"GET',"https://api.mediboard.fyi/treatments/search?q":'ambien"'},"treatments: [\n  {\n    id: \n  }\n]\n")))}u.isMDXComponent=!0}}]);