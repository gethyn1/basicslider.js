!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/Users/gethynjones/Sites/_jsdev/basicslider.js/dist",t(0)}([function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}var s=n(1),o=(i(s),n(2)),l=l||{};l.pageInit=function(){console.log("Initialised the app");var e=new o.Basicslider({slider:document.getElementById("content-slider"),bullets:!0});e.init()},l.pageInit()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=t.toggleGrid=function(e,t){t.classList.toggle("is-visible"),e.preventDefault()};t.initToggler=function(e,t){t.addEventListener("click",function(t){i(t,e)},!1)},t.hasClass=function(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},t.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},t.toggleClass=function(e,t){if(e.classList)e.classList.toggle(t);else{var n=e.className.split(" "),i=n.indexOf(t);i>=0?n.splice(i,1):n.push(t),e.className=n.join(" ")}},t.wrap=function(e,t){e.parentNode.insertBefore(t,e),t.appendChild(e)},t.wrapAll=function(e,t){e[0].parentNode.insertBefore(t,e[0]);for(var n=0;n<e.length;n++)t.appendChild(e[n])},t.throttle=function(e,t){t=t||42;var n=!1,i=void 0;return function(){n||(n=!0,clearTimeout(i),i=setTimeout(function(){e.call(),n=!1},t))}},t.getPosition=function(e,t){for(var n=0,i=0;e;){if("BODY"==e.tagName){var s=t?e.scrollLeft||document.documentElement.scrollLeft:0,o=t?e.scrollTop||document.documentElement.scrollTop:0;n+=e.offsetLeft-s+e.clientLeft,i+=e.offsetTop-o+e.clientTop}else t?(n+=e.offsetLeft-e.scrollLeft+e.clientLeft,i+=e.offsetTop-e.scrollTop+e.clientTop):(n+=e.offsetLeft+e.clientLeft,i+=e.offsetTop+e.clientTop);e=e.offsetParent}return{x:n,y:i}},t.browserWidth=function(){return self.innerHeight?self.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:void 0},t.browserHeight=function(){return self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:void 0},t.toArray=function(e){for(var t=[],n=e.length>>>0;n--;)t[n]=e[n];return t},t.next=function(e){for(var t=e.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return t},t.each=function(e,t){Array.prototype.forEach.call(e,t)},t.once=function(e,t,n){e.addEventListener(t,function(e){return e.target.removeEventListener(e.type,arguments.callee),n(e)})},t.serializeToJson=function(e){var t=void 0,i=[],s={};if("object"==("undefined"==typeof e?"undefined":n(e))&&"FORM"==e.nodeName)for(var o=e.elements.length,l=0;l<o;l++)if(t=e.elements[l],t.name&&!t.disabled&&"file"!=t.type&&"reset"!=t.type&&"submit"!=t.type&&"button"!=t.type)if("select-multiple"==t.type)for(var r=e.elements[l].options.length-1;r>=0;r--)t.options[r].selected&&(i[i.length]=encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[r].value));else("checkbox"!=t.type&&"radio"!=t.type||t.checked)&&(i[i.length]=encodeURIComponent(t.name)+"="+encodeURIComponent(t.value));return i.forEach(function(e,t){var n=e.split("=");s[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}),s},t.getQueryParam=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Basicslider=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(1),r=i(l),a=function(){function e(t){s(this,e),this.slider=t.slider,this.slides=this.slider.children,this.slideCount=this.slides.length,this.currentSlide=0,this.prevLink=null,this.nextLink=null,this.nextText=t.nextText||"next",this.prevText=t.prevText||"prev",this.bullets=t.bullets,this.slideNav=t.slideNav,this.classList=t.classList||"",this.navLinks=null,this.bulletLinks=null,this.slideNav&&(this.navLinks=document.getElementsByClassName(this.slideNav))}return o(e,[{key:"init",value:function(){var e=this,t=this,n=document.createElement("div"),i=document.createElement("div"),s="calc("+100*this.slideCount+"% + "+2*this.slideCount+"px)";this.slider.className+=" bs-slider",n.className="bs-wrap "+this.classList,i.className="bs-viewport",r.wrap(this.slider,i),r.wrap(i,n),Array.prototype.forEach.call(this.slides,function(e,t){e.className+=" bs-slide"});var o=[[this.prevText,"bs-prev"],[this.nextText,"bs-next"]],l=document.createElement("ul"),a=document.createDocumentFragment();o.forEach(function(e,n,i){var s=document.createElement("li"),l=document.createElement("a");l.innerHTML=o[n][0],l.setAttribute("href","#"),a.appendChild(s),s.appendChild(l),0===n?(l.addEventListener("click",t.goToPrevSlide.bind(t),!1),t.prevLink=l):(l.addEventListener("click",t.goToNextSlide.bind(t),!1),t.nextLink=l),s.className=o[n][1]}),i.parentNode.insertBefore(l,i),l.className="bs-arrow-nav",l.appendChild(a),this.slider.style.width=s,this.bullets&&!function(){var n=document.createDocumentFragment(),s=document.createElement("ul");s.className="bs-bullet-nav",Array.prototype.forEach.call(e.slides,function(e,i){var s=document.createElement("li"),o=document.createElement("a");o.setAttribute("data-slide-ref",i),o.innerHTML=i,o.setAttribute("href","#"),n.appendChild(s),0===i&&(o.className="is-active"),s.appendChild(o),o.addEventListener("click",t.goToSlideFromRef.bind(t,o),!1)}),i.parentNode.insertBefore(s,i.nextSibling),s.appendChild(n),e.bulletLinks=s.getElementsByTagName("a")}(),this.slideNav&&!function(){var t=e;Array.prototype.forEach.call(e.navLinks,function(e,n){0===n&&(e.className+=" is-active"),e.addEventListener("click",t.goToSlideFromRef.bind(t,e),!1)})}()}},{key:"goToNextSlide",value:function(e){this.goToSlide(this.currentSlide+1),e&&e.preventDefault()}},{key:"goToPrevSlide",value:function(e){this.goToSlide(this.currentSlide-1),e&&e.preventDefault()}},{key:"goToSlideFromRef",value:function(e,t){var n=e.getAttribute("data-slide-ref");this.setActiveBullet(n),this.goToSlide(n),t.preventDefault()}},{key:"setActiveBullet",value:function(e){this.bullets&&(Array.prototype.forEach.call(this.bulletLinks,function(e,t){r.removeClass(e,"is-active")}),this.bulletLinks[e].className+=" is-active"),this.navLinks&&(Array.prototype.forEach.call(this.navLinks,function(e,t){r.removeClass(e,"is-active")}),this.navLinks[e].className+=" is-active")}},{key:"goToSlide",value:function(e){e<0?e=this.slideCount-1:e>=this.slideCount&&(e=0);var t=-(100/this.slideCount)*e;this.setActiveBullet(e),Modernizr.csstransforms3d?(this.slider.style.transform="translateX("+t+"%) translateX(-1px)",this.slider.style.webkitTransform="translateX("+t+") translateX(-1px)"):(this.slider.style.transform="translateX("+t+"%)",this.slider.style.msTransform="translateX("+t+"%)"),this.currentSlide=e}},{key:"destroy",value:function(){}}]),e}();t.Basicslider=a}]);