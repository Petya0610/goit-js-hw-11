import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="45266199-2aebbd1e784974184d81693bb",u="https://pixabay.com/api/";async function f(n,o=1,t=12){const s=`${u}?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${t}`,e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function m(n){const o=document.getElementById("gallery");o.innerHTML=n.map(t=>`
    <div class="image-card">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <p>Likes: ${t.likes}</p>
      <p>Views: ${t.views}</p>
      <p>Comments: ${t.comments}</p>
      <p>Downloads: ${t.downloads}</p>
    </div>
  `).join("")}function p(){const n=document.getElementById("gallery");n.innerHTML=""}const y=document.getElementById("search-form"),g=document.getElementById("search-input"),l=document.getElementById("loader");let h=new c(".gallery a");y.addEventListener("submit",async n=>{n.preventDefault();const o=g.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!"});return}p(),l.style.display="block";try{const t=await f(o);l.style.display="none",t.hits.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(t.hits),h.refresh())}catch{l.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map
