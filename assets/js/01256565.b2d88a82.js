"use strict";(self.webpackChunkmedi_docs=self.webpackChunkmedi_docs||[]).push([[858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Full Study",s={unversionedId:"studies/full-study",id:"studies/full-study",title:"Full Study",description:"Gather all data from a study",source:"@site/docs/studies/full-study.md",sourceDirName:"studies",slug:"/studies/full-study",permalink:"/studies/full-study",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/studies/full-study.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/studies/study-search"},next:{title:"Measures",permalink:"/category/measures"}},l={},u=[{value:"Endpoint",id:"endpoint",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"full-study"},"Full Study"),(0,i.kt)("p",null,"Gather all data from a study"),(0,i.kt)("h2",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/studies/<study_id>")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Auth required")," : YES"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GET https://api.mediboard.fyi/api/studies/1234"',title:'"GET','https://api.mediboard.fyi/api/studies/1234"':!0},'{\n    "studies": [\n        {\n            "completion_date": "2010-06-01",\n            "conditions": [\n                {\n                    "condition_group": null,\n                    "id": 1044,\n                    "name": "Japanese Encephalitis"\n                }\n            ],\n            "description": "The objective is to assess immunogenicity of a commercial IC51 batch at 3 different time points post filling (12, 18, 24 months) in terms of Geometric Mean Titers (GMT) for anti-JEV neutralizing antibodies at Day 56 after the first vaccination.",\n            "external_ids": [\n                "NCT00776230"\n            ],\n            "gender": "gender.ALL",\n            "id": 1239,\n            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",\n            "max_age": -1,\n            "min_age": 18,\n            "min_age_units": "max_age_units.NA",\n            "official_title": "Immunogenicity of a Commercial Batch of the Japanese Encephalitis Vaccine IC51 up to Twenty-four Months Post Filling. An Open-label, Multicenter, Phase 3 Study",\n            "phase": "Phase 3",\n            "purpose": "Prevention",\n            "responsible_party": "NA",\n            "results_summary": null,\n            "short_title": "Immunogenicity of a Commercial Batch of JEV IC51 up to 24 Months Post Filling",\n            "sponsor": "Valneva Austria GmbH",\n            "status": "Completed",\n            "stopped_reason": "NA",\n            "treatments": [\n                {\n                    "description": null,\n                    "from_study": null,\n                    "id": 15,\n                    "name": "vaccines",\n                    "no_studies": null,\n                    "treatment_group": null\n                }\n            ],\n            "type": "Interventional",\n            "upload_date": "Tue, 01 Mar 2016 00:00:00 GMT"\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);