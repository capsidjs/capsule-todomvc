parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P7I2":[function(require,module,exports) {
!function(){"use strict";var e,t,n,r,a,o,s=function(e){e.defaults=function(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var a in r)null==e[a]&&(e[a]=r[a])}return e},e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/,n={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},r=/\\|'|\r|\n|\t|\u2028|\u2029/g;return e.template=function(a,o,s){var i;s=e.defaults({},s,e.templateSettings);var c=new RegExp([(s.escape||t).source,(s.interpolate||t).source,(s.evaluate||t).source].join("|")+"|$","g"),u=0,l="__p+='";a.replace(c,function(e,t,o,s,i){return l+=a.slice(u,i).replace(r,function(e){return"\\"+n[e]}),t&&(l+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"),o&&(l+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),s&&(l+="';\n"+s+"\n__p+='"),u=i+e.length,e}),l+="';\n",s.variable||(l="with(obj||{}){\n"+l+"}\n"),l="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+l+"return __p;\n";try{i=new Function(s.variable||"obj","_",l)}catch(p){throw p.source=l,p}if(o)return i(o,e);var f=function(t){return i.call(this,t,e)};return f.source="function("+(s.variable||"obj")+"){\n"+l+"}",f},e}({});function i(){var e=location.href.indexOf("examples/");return location.href.substr(0,e)}function c(e,t){if(!(this instanceof c))return new c(e,t);var n,r;if("object"!=typeof e)try{e=JSON.parse(e)}catch(a){return}t&&(n=t.template,r=t.framework),!n&&e.templates&&(n=e.templates.todomvc),!r&&document.querySelector("[data-framework]")&&(r=document.querySelector("[data-framework]").dataset.framework),this.template=n,e.backend?(this.frameworkJSON=e.backend,this.frameworkJSON.issueLabel=r,this.append({backend:!0})):e[r]&&(this.frameworkJSON=e[r],this.frameworkJSON.issueLabel=r,this.append()),this.fetchIssueCount()}"todomvc.com"===location.hostname&&(e=window,t=document,n="script",r="ga",e.GoogleAnalyticsObject=r,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,a=t.createElement(n),o=t.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o),ga("create","UA-31081062-1","auto"),ga("send","pageview")),c.prototype.append=function(e){var t=document.createElement("aside");if(t.innerHTML=s.template(this.template,this.frameworkJSON),t.className="learn",e&&e.backend){var n=t.querySelector(".source-links"),r=n.firstElementChild,a=n.lastElementChild,o=a.getAttribute("href");a.setAttribute("href",o.substr(o.lastIndexOf("http"))),n.innerHTML=r.outerHTML+a.outerHTML}else{var c=t.querySelectorAll(".demo-link");Array.prototype.forEach.call(c,function(e){"http"!==e.getAttribute("href").substr(0,4)&&e.setAttribute("href",i()+e.getAttribute("href"))})}document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",t.outerHTML)},c.prototype.fetchIssueCount=function(){var e=document.getElementById("issue-count-link");if(e){var t=e.href.replace("https://github.com","https://api.github.com/repos"),n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(t){var n=JSON.parse(t.target.responseText);if(n instanceof Array){var r=n.length;0!==r&&(e.innerHTML="This app has "+r+" open issues",document.getElementById("issue-count").style.display="inline")}},n.send()}},"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com")),function(e,t){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var n=new XMLHttpRequest;n.open("GET",i()+e,!0),n.send(),n.onload=function(){200===n.status&&t&&t(n.responseText)}}("learn.json",c)}();
},{}],"h3iU":[function(require,module,exports) {

},{}],"TnXv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.documentReady=t,exports.logEvent=r;const e="readystatechange";let o;function t(){return o=o||new Promise(o=>{const t=document,n=()=>{"complete"===t.readyState&&(o(),t.removeEventListener(e,n))};t.addEventListener(e,n),n()})}const n=e=>`color: ${e}; font-weight: bold;`,c="#f012be";function r({component:e,e:o,module:t,color:r}){if("boolean"==typeof __DEV__&&!__DEV__)return;const s=o.type;console.groupCollapsed(`${t}> %c${s}%c on %c${e}`,n(r||c),"",n("#1a80cc")),console.log(o),o.target&&console.log(o.target),console.groupEnd()}
},{}],"WP07":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.component=s,exports.mount=i,exports.unmount=c;var e=require("./util.js");const t={};function n(e,t){if(!e)throw new Error(t)}function o(e){n("string"==typeof e,"The name should be a string"),n(!!t[e],`The component of the given name is not registered: ${e}`)}function s(o){n("string"==typeof o&&!!o,"Component name must be a non-empty string"),n(!t[o],`The component of the given name is already registered: ${o}`);const s=`${o}-💊`,c=[({el:e})=>{e.classList.add(o),e.classList.add(s),e.addEventListener(`__ummount__:${o}`,()=>{e.classList.remove(s)},{once:!0})}],l=[],a=e=>{if(!e.classList.contains(s)){const t=u(new CustomEvent("__mount__",{bubbles:!1}),e);c.map(e=>{e(t)}),l.map(e=>{e(t)})}};a.sel=`.${o}:not(.${s})`,t[o]=a,(0,e.documentReady)().then(()=>{i(o)});const m=new Proxy(()=>{},{set:(e,t,n)=>r(o,c,l,t,n),get:(t,s)=>"outside"===s?new Proxy({},{set:(t,s,r)=>(n("function"==typeof r,`Event handler must be a function, ${typeof r} (${r}) is given`),c.push(({el:t})=>{const n=n=>{t===n.target||t.contains(n.target)||((0,e.logEvent)({module:"outside",color:"#39cccc",e:n,component:o}),r(u(n,t)))};document.addEventListener(s,n),t.addEventListener(`__unmount__:${o}`,()=>{document.removeEventListener(s,n)},{once:!0})}),!0)}):null,apply(e,t,s){const u=s[0];return n("string"==typeof u,"Delegation selector must be a string. ${typeof selector} is given."),new Proxy({},{set:(e,t,n)=>r(o,c,l,t,n,u)})}}),d=e=>{c.push(({el:t})=>{t.classList.add(e)})};return{on:m,is:d,sub:e=>d(`sub:${e}`),innerHTML:e=>{c.push(({el:t})=>{t.innerHTML=e})}}}function u(e,t){return{e:e,el:t,query:e=>t.querySelector(e),queryAll:e=>t.querySelectorAll(e),pub:(e,t)=>{document.querySelectorAll(`.sub\\:${e}`).forEach(n=>{n.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))})},emit:(e,n)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:n}))}}}function r(t,o,s,r,i,c){return n("function"==typeof i,`Event handler must be a function, ${typeof i} (${i}) is given`),"__mount__"===r?(s.push(i),!0):"__unmount__"===r?(o.push(({el:e})=>{e.addEventListener(`__unmount__:${t}`,()=>{i(u(new CustomEvent("__unmount__"),e))},{once:!0})}),!0):(o.push(({el:n})=>{const o=o=>{c&&![].some.call(n.querySelectorAll(c),e=>e===o.target||e.contains(o.target))||((0,e.logEvent)({module:"💊",color:"#e0407b",e:o,component:t}),i(u(o,n)))};n.addEventListener(`__unmount__:${t}`,()=>{n.removeEventListener(r,o)},{once:!0}),n.addEventListener(r,o)}),!0)}function i(e,n){let s;e?(o(e),s=[e]):s=Object.keys(t),s.map(e=>{[].map.call((n||document).querySelectorAll(t[e].sel),t[e])})}function c(e,o){n(!!t[e],`The component of the given name is not registered: ${e}`),o.dispatchEvent(new CustomEvent(`__unmount__:${e}`))}
},{"./util.js":"TnXv"}],"kBNW":[function(require,module,exports) {
"use strict";var t=this&&this.__spreadArray||function(t,o,e){if(e||2===arguments.length)for(var n,r=0,i=o.length;r<i;r++)!n&&r in o||(n||(n=Array.prototype.slice.call(o,0,r)),n[r]=o[r]);return t.concat(n||Array.prototype.slice.call(o))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoCollection=exports.Todo=void 0;var o=function(){function t(t,o,e){this.id=t,this.title=o,this.completed=e}return t.prototype.toggle=function(){this.completed=!this.completed},t}();exports.Todo=o;var e="capsule-todomvc",n=function(){function n(t){void 0===t&&(t=[]),this.todos=t}return n.prototype.getById=function(t){return this.todos.find(function(o){return o.id===t})},n.prototype.remove=function(t){this.todos=this.todos.filter(function(o){return o.id!==t.id})},n.prototype.add=function(t){this.todos.push(t)},Object.defineProperty(n.prototype,"length",{get:function(){return this.todos.length},enumerable:!1,configurable:!0}),n.prototype.has=function(t){return this.todos.some(function(o){return o.id===t.id})},n.prototype.completed=function(){return new n(this.todos.filter(function(t){return t.completed}))},n.prototype.uncompleted=function(){return new n(this.todos.filter(function(t){return!t.completed}))},n.prototype.completeAll=function(){this.todos.forEach(function(t){t.completed=!0})},n.prototype.uncompleteAll=function(){this.todos.forEach(function(t){t.completed=!1})},n.prototype.forEach=function(t){this.todos.forEach(t)},n.prototype.toJSON=function(){return JSON.stringify(this.todos)},n.fromJson=function(t){return new n(JSON.parse(t).map(function(t){var e=t.id,n=t.title,r=t.completed;return new o(e,n,r)}))},n.prototype.save=function(){localStorage.setItem(e,this.toJSON())},n.restore=function(){return n.fromJson(localStorage.getItem(e)||"[]")},n.prototype.maxId=function(){return Math.max.apply(Math,t([0],this.todos.map(function(t){return+t.id}),!1))},n}();exports.TodoCollection=n;
},{}],"xE2A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("@kt3k/capsule"),l=require("./todo-models"),o=0,n="all",d=(0,t.component)("todoapp").on;function c(e){var t=e.emit,l=e.query,o=location.hash;n="#/active"===o?"uncompleted":"#/completed"===o?"completed":"all",l('a[href="#/all"]').classList.toggle("selected","all"===n),l('a[href="#/active"]').classList.toggle("selected","uncompleted"===n),l('a[href="#/completed"]').classList.toggle("selected","completed"===n),t("update-todo")}d.__mount__=function(t){var n=t.query,d=t.emit;e=l.TodoCollection.restore(),o=e.maxId()+1,window.onhashchange=function(){c({emit:d,query:n})},c({emit:d,query:n}),n(".new-todo").focus(),d("update-todo")},d(".new-todo").keypress=function(t){var n,d,c=t.e,i=t.query,a=t.emit;if(13===c.which){var r=i(".new-todo"),s=null===(d=null===(n=i(".new-todo"))||void 0===n?void 0:n.value)||void 0===d?void 0:d.trim();s&&(r.value="",e.add(new l.Todo("".concat(o++),s,!1)),a("update-todo"))}},d(".toggle").click=function(t){var l,o=t.e,n=t.emit;null===(l=e.getById(o.target.parentElement.parentElement.id))||void 0===l||l.toggle(),n("update-todo")},d(".toggle-all").click=function(t){var l=t.e,o=t.emit;l.target.checked?e.completeAll():e.uncompleteAll(),o("update-todo")},d(".destroy").click=function(t){var l=t.e,o=t.emit,n=e.getById(l.target.parentElement.parentElement.id);e.remove(n),o("update-todo")},d(".clear-completed").click=function(t){var l=t.emit;e.completed().forEach(function(t){e.remove(t)}),l("update-todo")},d(".todo > .view > label").dblclick=function(t){var l=t.e.target.parentElement.parentElement,o=e.getById(l.id);l.classList.add("editing");var n=l.querySelector(".edit");n.value=o.title,n.focus()},d(".edit").keypress=d(".edit").keydown=function(t){var l=t.e,o=l.target;13===l.which?o.blur():27===l.which&&(o.value=e.getById(o.parentElement.id).title,o.blur())},d(".edit").focusout=function(t){var l=t.e,o=t.emit,n=l.target,d=n.value.trim(),c=n.parentElement;d?(e.getById(c.id).title=d,c.classList.remove("editing")):(e.remove(e.getById(c.id)),c.classList.remove("editing")),o("update-todo")},d["update-todo"]=function(t){var l=t.query;e.save();var o=e.uncompleted(),d=e.completed(),c=l(".todo-list");if(l(".todo-count strong").textContent="".concat(o.length),l(".todo-count .plural").classList.toggle("hidden",1===o.length),l(".main").classList.toggle("hidden",0===e.length),l(".footer").classList.toggle("hidden",0===e.length),l(".toggle-all").classList.toggle("hidden",0===e.length),l('label[for="toggle-all"]').classList.toggle("hidden",0===e.length),l(".toggle-all").checked=0===o.length,l(".clear-completed").classList.toggle("hidden",0===d.length),"all"===n&&e.length===c.children.length)e.forEach(function(e){var t=c.querySelector('[id="'.concat(e.id,'"]'));t.classList.toggle("completed",e.completed),t.querySelector("label").textContent=e.title,t.querySelector(".toggle").checked=e.completed});else{var i="uncompleted"===n?o:"completed"===n?d:e;c.innerHTML="",i.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n        <div class="view">\n          <input class="toggle" type="checkbox" '.concat(e.completed?"checked":"","/>\n          <label>").concat(e.title,'</label>\n          <button class="destroy"></button>\n        </div>\n        <input class="edit" type="text" />\n      '),t.id=e.id,t.classList.add("todo"),t.classList.toggle("completed",e.completed),c.appendChild(t)})}};
},{"@kt3k/capsule":"WP07","./todo-models":"kBNW"}],"B6dB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("todomvc-common/base.js"),require("todomvc-common/base.css"),require("todomvc-app-css/index.css"),require("./todoapp");
},{"todomvc-common/base.js":"P7I2","todomvc-common/base.css":"h3iU","todomvc-app-css/index.css":"h3iU","./todoapp":"xE2A"}]},{},["B6dB"], null)
//# sourceMappingURL=src.e50e25ec.js.map