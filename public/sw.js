if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/7f13179a3cbe98c1999a22a03a987114c59a03ce.1ce8be64542ea705addd.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/bc6f0379ef776f032a764a2f7c2024eed1bc19eb.5363cb6978319d76192c.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.00e6704e823f30eb78b3.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/framework.f783f7e0d786735fc5cd.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/main-825dccfce8f70e3e2827.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/pages/_app-ef96d7a540bce07bcbdd.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/pages/_documents-8cef28cbb484f000df91.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/pages/_error-98b23c54bbda3bafe674.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/pages/index-eace5581a41898258232.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/polyfills-b1fab8f0d1160eda3d3f.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/dgvo95iOhYQS_GeJpPdnW/_buildManifest.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/_next/static/dgvo95iOhYQS_GeJpPdnW/_ssgManifest.js",revision:"dgvo95iOhYQS_GeJpPdnW"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"c4d8d64468bcf31e13330cd8756c4189"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));