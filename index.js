import{S as p,a as o,i as f}from"./assets/vendor-xJi9366P.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const i=document.querySelector(".loader");function y(e){return`<li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-link">
        <div class="gallery-img-wrapper">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </div>
        <div class="gallery-info">
          <div class="gallery-stat">
            <span class="gallery-stat-label">Likes</span>
            <p class="gallery-stat-value">${e.likes}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Views</span>
            <p class="gallery-stat-value">${e.views}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Comments</span>
            <p class="gallery-stat-value">${e.comments}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Downloads</span>
            <p class="gallery-stat-value">${e.downloads}</p>
          </div>
        </div>
    </a>
  </li>`}function g(e){return e.map(y).join("")}function m(){new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function h(e){const r=document.querySelector(".gallery"),s=g(e);r.innerHTML=s}function u(e){e.innerHTML=""}function v(e){u(e),i.textContent="Loading",i.classList.add("loader"),e.appendChild(i)}function L(e){const r=e.querySelector(".loader");r&&r.remove()}o.defaults.baseURL="https://pixabay.com/api/";o.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};const b=async e=>(o.defaults.params.q=e,(await o.get("")).data),d=document.querySelector(".form"),c=document.querySelector(".gallery");d.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(d).get("search-text");u(c),v(c),b(s).then(l=>{if(l.hits.length===0||s.trim()===""){f.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}h(l.hits),m()}).catch(l=>{console.log("Error")}).finally(()=>{L(c)})});
//# sourceMappingURL=index.js.map
