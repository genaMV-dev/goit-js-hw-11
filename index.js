import{S as d,a as l,i as u}from"./assets/vendor-xJi9366P.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(e){return`<li class="gallery-item">
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
  </li>`}function f(e){return e.map(p).join("")}function y(){new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}l.defaults.baseURL="https://pixabay.com/api/";l.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};const m=async e=>(l.defaults.params.q=e,(await l.get("")).data);function g(e){e.innerHTML=""}function h(e){g(e);const a=document.createElement("span");a.textContent="Loading",a.classList.add("loader"),e.appendChild(a)}function v(e){const a=e.querySelector(".loader");a&&a.remove()}const c=document.querySelector(".form"),i=document.querySelector(".gallery");c.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(c).get("search-text");h(i),m(o).then(s=>{if(s.hits.length===0){u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}const t=f(s.hits);i.innerHTML=t,y()}).catch(s=>{console.log("Error")}).finally(()=>{v(i)})});
//# sourceMappingURL=index.js.map
