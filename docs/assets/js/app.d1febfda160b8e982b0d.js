!function(e){function t(t){for(var a,c,o=t[0],d=t[1],s=t[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var d=n[o];0!==r[d]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={0:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=d;i.push([47,1]),n()}([,,,,function(e,t,n){var a=n(1),r=n(18);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t){e.exports='<div class="update-button"> <button id="update-geolocation-button" class="update-button__button"> <span class="update-button__button-text">Обновить геолокацию</span> <img class="update-button__button-icon" src="./assets/img/update-arrows.svg" alt="update icon"/> </button> </div> '},function(e,t){e.exports='<div id="weather-main-container" class="weather-main"> <div class="weather-main__city"><h2 id="weather-main-city"></h2></div> <div id="weather-main-icon" class="weather-main__icon"> </div> <div id="weather-main-degree" class="weather-main__degree"></div> </div> '},function(e,t){e.exports='<div class="add-city"> <div class="add-city__header"> <h3>Избранное</h3> </div> <div id="add-city-input-container" class="add-city__input"> <form> <input name="city" placeholder="Добавить новый город" type="text"> </form> </div> </div> '},function(e,t){e.exports='<div class="favorite-cities"> <div id="favorite-cities-add" class="favorite-cities__add"></div> <div id="favorite-cities-cities" class="favorite-cities__cities"></div> </div> '},function(e,t){e.exports='<div id="header-menu-container" class="header-menu"> <div class="header-menu__top" id="header-menu-top"> <div class="header-menu__top-title"><h1>Погода здесь</h1></div> </div> <div id="header-menu-weather" class="header-menu-weather"> <div class="header-menu-weather__main" id="header-menu-weather-main"></div> <div class="header-menu-weather__detailed" id="header-menu-weather-detailed"></div> </div> </div> '},function(e,t){e.exports='<main class="app"> <div class="app-container"> <header class="app-header" id="app-header"></header> <div class="app-body" id="app-body"></div> </div> </main> '},,,function(e,t){e.exports='<div id="city-card" class="city-card"> <div id="city-card-header" class="city-card__header"></div> <div id="city-card-data" class="city-card__data"></div> </div> '},function(e,t){e.exports='<div id="city-card-header" class="city-card-header"> <div class="city-card-header__first-part"> <div id="city-card-header-city" class="city-card-header__header"></div> <div id="city-card-header-degree" class="city-card-header__degree"></div> <div id="city-card-header-icon" class="city-card-header__icon"></div> </div> <div class="city-card-header__second-part"> <div id="city-card-header-close" class="city-card-header__close"></div> </div> </div> '},function(e,t){e.exports='<div> <button class="round-button"></button> </div> '},function(e,t){e.exports='<div id="card-loading" class="card-loading"> <div><p>Подождите, данные загружаются</p></div> <div id="card-loading-icon-container" class="card-loading__icon"></div> </div> '},,function(e,t,n){},function(e,t,n){var a=n(1),r=n(20);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(22);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(24);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},,,,,,,function(e,t,n){var a=n(1),r=n(32);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(34);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(36);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(38);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(40);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(42);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(44);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){var a=n(1),r=n(46);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(11),i=n.n(r),c=(n(4),n(19),n(5)),o=n.n(c),d=(n(21),n(0)),s=n.n(d),l="Update",u="Clouds",p="Drizzle",v="Snow",h="Thunderstorm",f="Rain",g="Clear",m="Tornado",y="Mist",w="Smoke",_="Haze",x="Dust",b="Fog",E="Sand",I="Ash",B="Squall",M="./assets/img/017-foog.svg",C=(a={},s()(a,l,"./assets/img/update-arrows.svg"),s()(a,u,"./assets/img/001-cloud.svg"),s()(a,p,"./assets/img/003-rainy.svg"),s()(a,h,"./assets/img/036-storm-4.svg"),s()(a,v,"./assets/img/012-snowy-1.svg"),s()(a,f,"./assets/img/004-rainy-1.svg"),s()(a,g,"./assets/img/039-sun.svg"),s()(a,m,"./assets/img/046-tornado.svg"),s()(a,y,M),s()(a,w,M),s()(a,_,M),s()(a,x,M),s()(a,b,M),s()(a,E,M),s()(a,I,M),s()(a,B,M),a);function T(e,t){var n=C[t];if(!n)return null;var a=document.createElement("div");a.id="weather-icon-container-".concat(e),a.classList.add("weather-icon__container");var r=document.createElement("img");return r.id="weather-icon-".concat(e),r.classList.add("weather-icon__icon"),r.src=n,a.appendChild(r),a}var O=n(6),S=n.n(O);n(23);function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=document.createElement("ul");return 0!==t.length&&e?(n.id="".concat("weather-detailed","-").concat(e),n.classList.add("weather-detailed"),t.forEach((function(e){var t=e.title,a=e.value,r=document.createElement("li"),i=document.createElement("span"),c=document.createElement("span");r.classList.add("weather-detailed__item"),i.classList.add("weather-detailed__title"),i.innerText=t,c.innerText=a,r.appendChild(i),r.appendChild(c),n.appendChild(r)})),n):null}var P=n(3),j=n.n(P),k=n(2),D=n.n(k),F="http://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&appid=".concat("b332962152d1ba0bb3f785794f1dc02d"),H=navigator.geolocation;function J(){return new Promise((function(e,t){H.getCurrentPosition((function(t){var n=t.coords,a=n.latitude,r=n.longitude;e({latitude:a,longitude:r})}),(function(e){console.error(e),t(e)}),{enableHighAccuracy:!0})}))}function N(e,t){return fetch("".concat(F,"&lat=").concat(e,"&lon=").concat(t)).then((function(e){return e.json()})).catch((function(e){console.log(e),alert("Ошибка во время выполнения запроса ".concat(e))}))}function q(){return z.apply(this,arguments)}function z(){return(z=j()(D.a.mark((function e(){var t,n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:a=e.sent,t=a.latitude,n=a.longitude,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Cant get geolocation");case 11:return e.next=13,N(t,n);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function A(e){return R.apply(this,arguments)}function R(){return(R=j()(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(F,"&q=").concat(t)).then((function(e){return e.json()})).catch((function(e){console.log(e),alert("Ошибка во время выполнения запроса ".concat(e))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(12),G=n.n(U);function K(e){var t=e.coord,n=e.name,a=e.main,r=a.temp,i=a.humidity,c=a.pressure,o=e.clouds.all,d=e.wind,s=e.weather,l="[".concat(t.lat.toFixed(2),", ").concat(t.lon.toFixed(2),"]"),u="".concat(o,"%"),p="".concat(d.speed," m/s, ").concat(d.deg),v="".concat(c," hpa"),h="".concat(i,"%"),f=G()(s,1)[0].main;return{weatherDetails:[{title:"Ветер",value:p},{title:"Облачность",value:u},{title:"Давление",value:v},{title:"Влажность",value:h},{title:"Координаты",value:l}],city:n,degree:Math.floor(r),weatherType:f}}n(31);var Q=n(13),V=n.n(Q),W=(n(33),n(14)),X=n.n(W),Y=n(15),Z=n.n(Y);n(35);function $(e){var t=(new DOMParser).parseFromString(Z.a,"text/html"),n=null==t?void 0:t.getElementsByTagName("button")[0];return n.innerText=e,n}var ee=window.localStorage;function te(){return JSON.parse(ee.getItem("app-cities-data"))||ee.setItem("app-cities-data",JSON.stringify([])),JSON.parse(ee.getItem("app-cities-data"))}function ne(e){ee.setItem("app-cities-data",JSON.stringify(e))}function ae(e){e&&(ne(te().filter((function(t){return t!==e}))),window.dispatchEvent(new Event("storageChanged")))}var re="".concat("city-card-header","-city"),ie="".concat("city-card-header","-degree"),ce="".concat("city-card-header","-icon"),oe="".concat("city-card-header","-close");n(37);var de=n(16),se=n.n(de);function le(e,t){var n=t.isLoading,a=t.weatherDetails,r=t.weatherType,i=t.city,c=t.degree;if(!e)return null;var o=(new DOMParser).parseFromString(V.a,"text/html"),d=o.getElementById("city-card"),s=o.getElementById("city-card-data");if(d.id+="-".concat(e),s.id+="-".concat(e),n){var u=function(e){var t=(new DOMParser).parseFromString(se.a,"text/html"),n=null==t?void 0:t.getElementById("card-loading"),a=null==t?void 0:t.getElementById("card-loading-icon-container");n.id="".concat("card-loading","-").concat(e),a.id="".concat("card-loading-icon-container","-").concat(e);var r=T("card-loading-".concat(e),l);return a.appendChild(r),n}(e);s.appendChild(u)}else{var p=L(e,a);s.appendChild(p)}var v=o.getElementById("city-card-header"),h=function(e,t){var n=t.weatherType,a=t.city,r=t.degree,i=(new DOMParser).parseFromString(X.a,"text/html"),c=i.getElementById("city-card-header"),o=i.getElementById(re),d=i.getElementById(ie),s=i.getElementById(ce),l=i.getElementById(oe),u=T(e,n);u&&s.appendChild(u);var p=$("✕"),v="".concat(e).replace("city-card-","");return v&&(p.onclick=function(){return ae(v)}),l.appendChild(p),a&&(o.innerText=a),r&&(d.innerText="".concat(r,"°C")),c.id="".concat("city-card-header","-").concat(e),o.id="".concat(re,"-").concat(e),d.id="".concat(ie,"-").concat(e),s.id="".concat(ce,"-").concat(e),l.id="".concat(oe,"-").concat(e),c}(e,{weatherType:r,city:i,degree:c});return v.appendChild(h),d}n(39),n(41);var ue=n(7),pe=n.n(ue);var ve=n(8),he=n.n(ve);function fe(){document.getElementById("favorite-cities-add").innerHTML=pe.a,function(){var e=document.getElementById("add-city-input-container").querySelector("form");e.onsubmit=we;var t=$("+");t.type="submit",e.appendChild(t)}()}function ge(){Ie({weatherType:l,city:"Подождите, данные загружаются"})}function me(e){return ye.apply(this,arguments)}function ye(){return(ye=j()(D.a.mark((function e(t){var n,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ge(),e.next=4,q();case 4:(n=e.sent)&&(a=K(n),setTimeout((function(){return Ie(a)}),500)),e.next=17;break;case 8:if(e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert("Пожалуйста, разрешите доступ к геолокации"),!t){e.next=17;break}return e.next=15,A(t);case 15:(n=e.sent)&&(r=K(n),setTimeout((function(){return Ie(r)}),500));case 17:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function we(e){var t;e.preventDefault();var n=new FormData(e.target).get("city");if(n)try{!function(e){if(e){var t=te();if(t.includes(e))throw Error("Город уже добавлен в избранное");t.push(e),ne(t),window.dispatchEvent(new Event("storageChanged"))}}(n)}catch(e){alert("Город уже добавлен в избранное")}null==e||null===(t=e.target)||void 0===t||t.reset()}function _e(){return(_e=j()(D.a.mark((function e(t,n){var a,r,i,c,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById("favorite-cities-cities"),r=le(t,{isLoading:!0,city:t}),a.appendChild(r),e.prev=3,e.next=6,A(t);case 6:return i=e.sent,c=K(i),o=le(t,c),a.removeChild(r),n?a.insertBefore(o,a.children[n]):a.appendChild(o),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),ae(t),alert("Произошла ошибка при добавлении города."),a.removeChild(r);case 20:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function xe(){var e=te(),t=document.getElementById("favorite-cities-cities"),n=t.childNodes;console.log(n),n.forEach((function(n){if(n.id){var a="".concat(n.id).replace("city-card-","");e.includes(a)||t.removeChild(n)}}));var a=[];e.forEach((function(e,t){document.getElementById("city-card-".concat(e))||a.push(function(e,t){return _e.apply(this,arguments)}(e,t))})),Promise.all(a).catch((function(e){return alert("Не удалось загрузить все города ".concat(e))}))}var be=n(9),Ee=n.n(be);function Ie(e){var t=e.weatherDetails,n=i()(e,["weatherDetails"]),a=document.getElementById("update-geolocation-button");a||(document.getElementById("header-menu-top").insertAdjacentHTML("beforeend",o.a),(a=document.getElementById("update-geolocation-button")).onclick=me),document.getElementById("header-menu-weather-main").innerHTML=S.a,function(e){var t=e.weatherType,n=e.degree,a=e.city,r=void 0===a?"":a,i=document.getElementById("weather-main-container"),c=document.getElementById("weather-main-icon"),o=document.getElementById("weather-main-degree"),d=document.getElementById("weather-main-city");t===l&&i.classList.add("updating");var s=T("header-menu",t);s&&c.appendChild(s),o.innerText=n&&"".concat(n,"°")||"",d.innerText=r}(n);var r=L("header-menu",t);r&&document.getElementById("header-menu-weather-detailed").replaceChildren(r)}n(43);var Be=n(10),Me=n.n(Be);window.onload=function(){document.getElementById("root").innerHTML=Me.a,document.getElementById("app-header").innerHTML=Ee.a,document.getElementById("app-body").innerHTML=he.a,me("Санкт-Петербург"),fe(),xe()},window.addEventListener("storageChanged",(function(){xe()}));n(45)}]);