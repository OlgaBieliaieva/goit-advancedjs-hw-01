import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l}from"./assets/vendor-78be7656.js";let t={};const r="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",l(s,500));a.addEventListener("submit",c);m();function c(e){e.preventDefault(),console.log(t),e.currentTarget.reset(),localStorage.removeItem(r),t={}}function s(e){t[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(t))}function m(){const e=localStorage.getItem(r);if(e!==null){try{t=JSON.parse(e)}catch(o){console.log(o);return}for(const[o,n]of Object.entries(t))a[o].value=n}}
//# sourceMappingURL=commonHelpers3.js.map