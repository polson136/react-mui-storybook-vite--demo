function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-CCfjXMjt.js","./jsx-runtime-CKrituN3.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./index-CHmO-8wD.js","./index-BtM5VmRH.js","./index-Bw8VTzHM.js","./index-k_s-dmML.js","./index-DrFu-skq.js","./Configure-u5JQlXcP.js","./index-DSz_1G2r.js","./entry-preview-DAq4ziin.js","./react-18-D8cruF67.js","./entry-preview-docs-CSanYrEk.js","./preview-B_0crF9I.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const O="modulepreload",p=function(i,_){return new URL(i,_).href},E={},o=function(_,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in E)return;E[r]=!0;const c=r.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!l)for(let u=t.length-1;u>=0;u--){const a=t[u];if(a.href===r&&(!c||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":O,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((u,a)=>{n.addEventListener("load",u),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>_()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,m=f({page:"preview"});R.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/Button/Button.stories.tsx":async()=>o(()=>import("./Button.stories-CCfjXMjt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/Configure.mdx":async()=>o(()=>import("./Configure-u5JQlXcP.js"),__vite__mapDeps([9,1,2,3,10,4,5,6,7,8]),import.meta.url)};async function T(i){return P[i]()}const{composeConfigs:L,PreviewWeb:v,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,w=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-DAq4ziin.js"),__vite__mapDeps([11,2,3,12,5]),import.meta.url),o(()=>import("./entry-preview-docs-CSanYrEk.js"),__vite__mapDeps([13,7,3,8,2]),import.meta.url),o(()=>import("./preview-B_0crF9I.js"),__vite__mapDeps([14,6]),import.meta.url),o(()=>import("./preview-DGKb2XKM.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([15,8]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([16,8]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BjivwLRH.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CwoVmLhK.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CIwosuWp.js"),__vite__mapDeps([]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(T,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
