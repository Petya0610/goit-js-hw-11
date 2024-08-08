import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="45266199-2aebbd1e784974184d81693bb",u="https://pixabay.com/api/";async function m(n,o=1,t=12){const s=`${u}?key=${f}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${t}`,e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function p(n,o){o.innerHTML=n.map(t=>`
    <div class="image-card">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <p>Likes: ${t.likes}</p>
      <p>Views: ${t.views}</p>
      <p>Comments: ${t.comments}</p>
      <p>Downloads: ${t.downloads}</p>
    </div>
  `).join("")}function y(n){n.innerHTML=""}const g=document.getElementById("search-form"),h=document.getElementById("search-input"),l=document.getElementById("loader"),c=document.getElementById("gallery");let b=new d(".gallery a");g.addEventListener("submit",n=>{n.preventDefault();const o=h.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term!"});return}y(c),l.style.display="block",m(o).then(t=>{l.style.display="none",t.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(t.hits,c),b.refresh())}).catch(t=>{l.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
