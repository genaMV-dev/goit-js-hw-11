import{S as p,a as n,i as d}from"./assets/vendor-xJi9366P.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const c=document.querySelector(".loader");let o=null;const g={captions:!0,captionsData:"alt",captionDelay:250};function m(e){return`<li class="gallery-item">
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
  </li>`}function h(e){return e.map(m).join("")}function v(){o||(o=new p(".gallery a",g))}function L(){o&&o.refresh()}function b(e){const a=document.querySelector(".gallery"),s=h(e);a.innerHTML=s,o?L():v()}function y(e){e.innerHTML=""}function w(e){y(e),c.textContent="Loading",c.classList.add("loader"),e.appendChild(c)}function q(e){const a=e.querySelector(".loader");a&&a.remove()}n.defaults.baseURL="https://pixabay.com/api/";n.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};const S=async e=>(n.defaults.params.q=e,(await n.get("")).data),f=document.querySelector(".form"),u=document.querySelector(".gallery");f.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(f).get("search-text");s.trim()!==""&&(y(u),w(u),S(s).then(l=>{if(l.hits.length===0){d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}b(l.hits)}).catch(l=>{d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}).finally(()=>{q(u)}))});
//# sourceMappingURL=index.js.map
