if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,n,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"493dd140ee3591b35d618821d9c71cbd"},{url:"66ec5960720118dad7f1.png",revision:null},{url:"6a88d6cc138007e5770e.png",revision:null},{url:"8afec4b4a994dbd0e696.png",revision:null},{url:"a355ffb66114ec48c21d.jpg",revision:null},{url:"a3a5077a88c45b54f074.jpg",revision:null},{url:"e9bc89a406b4baa590f7.png",revision:null},{url:"main.css",revision:"bdbb8bc7b599e6f961ac54cc82cce77e"},{url:"main.js",revision:"20b51dde4708a2840b3741d70394a82f"}],{})}));
