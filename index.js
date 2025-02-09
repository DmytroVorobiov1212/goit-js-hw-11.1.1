import{a as f,i as c,S as m}from"./assets/vendor-SnYWMg9o.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function h(s){return s.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:r,comments:a,downloads:y})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${t}" alt="${l}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${r}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${a}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${y}</p>
        </div>
      </div>
    </li>`).join("")}const g="45785559-b0577f06fb94f4ced9a4d3280",b="https://pixabay.com/api/";function v(s){try{return s.includes(" ")&&s.replace(/\s+/g,"+"),f.get(`${b}`,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}catch(t){c.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(t.message)}}const u=document.querySelector(".js-form"),d=document.querySelector(".js-gallery"),o=document.querySelector(".loader");let n="",p;o.style.display="none";u.addEventListener("submit",L);function L(s){if(s.preventDefault(),d.innerHTML="",o.style.display="block",n=s.target.elements.query.value.trim(),n==="")return c.info({title:"Hello",message:"Please enter search text!"}),o.style.display="none",u.reset();v(n).then(t=>{if(d.insertAdjacentHTML("beforeend",h(t.data.hits)),!t.data.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),o.style.display="none";return}o.style.display="none",p=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),p.refresh()}).catch(t=>{o.style.display="none",console.log(`${t}`)}),u.reset()}
//# sourceMappingURL=index.js.map
