if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f51ab5e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.078860d3.js",revision:null},{url:"assets/404.993bebe8.js",revision:null},{url:"assets/app.73c9b936.css",revision:null},{url:"assets/app.9155d08b.js",revision:null},{url:"assets/concept.01bdaf00.js",revision:null},{url:"assets/getting-started.fe8e60e2.js",revision:null},{url:"assets/home.6a1d6720.js",revision:null},{url:"assets/preparation.ef013e76.js",revision:null},{url:"assets/Tip.44645c25.css",revision:null},{url:"assets/Tip.4b5d44eb.js",revision:null},{url:"assets/virtual_pwa-register.ff92bc17.js",revision:null},{url:"concept.html",revision:"1e606257faf6e1f439edd09daf5cfe52"},{url:"getting-started.html",revision:"d9c5a8f72a3a042e733a4b820f39db7c"},{url:"index.html",revision:"34dec7a9d930a03cdfd1152838625622"},{url:"preparation.html",revision:"c17b6e2b9ebb1cc07544cdb4c9bab82c"},{url:"favicon.ico",revision:"691128c550fa68a1a53824363dbe6eb0"},{url:"manifest.webmanifest",revision:"710690bde7df2ef9e952b5ad98eb01e5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
