if(!self.define){let e,o={};const s=(s,i)=>(s=new URL(s+".js",i).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let c={};const r=e=>s(e,n),t={module:{uri:n},exports:c,require:r};o[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(l(...e),c)))}}define(["./workbox-94d8ddb9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vdocs"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/NetSchoolApi/css/614.03fab845.css",revision:null},{url:"/NetSchoolApi/css/801.e38130a9.css",revision:null},{url:"/NetSchoolApi/css/985.f2e8cb0c.css",revision:null},{url:"/NetSchoolApi/css/app.d282c66f.css",revision:null},{url:"/NetSchoolApi/index.html",revision:"64eba6103ee40c041e5a07ad384026e7"},{url:"/NetSchoolApi/js/364.1b61b8d2.js",revision:null},{url:"/NetSchoolApi/js/614.dc93d85f.js",revision:null},{url:"/NetSchoolApi/js/801.b4509d2d.js",revision:null},{url:"/NetSchoolApi/js/985.4bad0315.js",revision:null},{url:"/NetSchoolApi/js/app.60842fc0.js",revision:null},{url:"/NetSchoolApi/js/chunk-vendors.10f91261.js",revision:null},{url:"/NetSchoolApi/manifest.json",revision:"f79d7078c359ead577f932f6b7904128"},{url:"/NetSchoolApi/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^http.*github/,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:2,plugins:[]}),"GET")}));
