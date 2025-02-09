import{i as c,S as f}from"./assets/vendor-Dg3uDB0e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(o){return o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${s}" alt="${n}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${i}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${d}</p>
        </div>
      </div>
    </li>`).join("")}const m="45785559-b0577f06fb94f4ced9a4d3280",h="https://pixabay.com/api/";function y(o){const s=`${h}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>r.json()).then(r=>{if(l.style.display="none",!r.hits.length)throw new Error(c.error({message:"Sorry, there are no images matching your search query. Please try again!"}));return r})}const u=document.querySelector(".js-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",g);function g(o){o.preventDefault(),a.innerHTML="",l.style.display="block";const{query:s}=o.currentTarget.elements;if(s.value.trim()==="")return c.info({title:"Hello",message:"Please enter search text!"}),l.style.display="none";y(s.value.split(" ").join("+").trim()).then(r=>{a.innerHTML=p(r.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{l.style.display="none",console.log(`${r}`)}),u.reset()}
//# sourceMappingURL=index.js.map
