(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _mobileMenu = _interopRequireDefault(require("./components/mobile-menu"));

var planet = _interopRequireWildcard(require("./components/renderData"));

var _getData = _interopRequireDefault(require("./utility/getData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _getData["default"])(planet.renderPlanet);
planet.changePlanet();
(0, _mobileMenu["default"])();
planet.infoMenu();

},{"./components/mobile-menu":2,"./components/renderData":3,"./utility/getData":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var burgerMenu = function burgerMenu() {
  var burger = document.querySelector('.main-nav__burger');
  var mainNav = document.querySelector('.main-nav__menu');
  var burgerLine = document.querySelectorAll('.main-nav__burger-line');
  var mainEle = document.querySelector('.main-element');
  burger.addEventListener('click', function () {
    mainNav.classList.toggle('is-active');
    mainEle.classList.toggle('is-active');
    burgerLine.forEach(function (element) {
      element.classList.toggle('is-active');
    });
  });
};

var _default = burgerMenu;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePlanet = changePlanet;
exports.infoMenu = infoMenu;
exports.populatePlanetData = populatePlanetData;
exports.renderPlanet = renderPlanet;
exports.renderPlanetInfo = renderPlanetInfo;

var _getData = _interopRequireDefault(require("../utility/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function renderPlanet(data) {
  var obj;
  document.body.classList.length <= 0 ? obj = data[0] : obj = data;
  renderPlanetInfo(obj);
  populatePlanetData(obj);
}

function renderPlanetInfo(planet) {
  var rotationTime = document.querySelector('.js-rotation-time');
  var revolutionTime = document.querySelector('.js-revolution-time');
  var radius = document.querySelector('.js-radius');
  var averageTemp = document.querySelector('.js-average-temp');
  rotationTime.innerHTML = planet.rotation;
  revolutionTime.innerHTML = planet.revolution;
  radius.innerHTML = planet.radius;
  averageTemp.innerHTML = planet.temperature;
}

function populatePlanetData(planet, isChange, content) {
  document.body.classList.add(planet.name);
  var planetImgEle = document.querySelector('.js-planet-img');
  var planetImgGeoEle = document.querySelector('.js-planet-img-geo');
  var planetName = document.querySelector('.js-content-name');
  var planetOverview = document.querySelector('.ja-content-overview');
  var planetSource = document.querySelector('.js-content-source');
  var btnOverview = document.querySelector("[data-btn='overview']");

  if (!planetImgGeoEle.classList.contains('is-hidden')) {
    planetImgGeoEle.classList.add('is-hidden');
  }

  if (isChange) {
    if (content === 'structure') {
      planetImgEle.src = planet.images.internal;
      planetOverview.innerHTML = planet.structure.content;
      planetSource.href = planet.structure.source;
    } else if (content === 'geology') {
      planetImgGeoEle.src = planet.images.geology;
      planetImgGeoEle.classList.remove('is-hidden');
      planetOverview.innerHTML = planet.geology.content;
      planetSource.href = planet.geology.source;
    } else {
      planetImgEle.src = planet.images.planet;
      planetOverview.innerHTML = planet.overview.content;
      planetSource.href = planet.geology.source;
    }
  } else {
    planetImgEle.classList = [];
    planetImgEle.classList.add('planet__img', 'js-planet-img');
    planetImgEle.classList.add('planet__img--' + planet.name.toLowerCase());
    btnOverview.classList.add('is-active');
    planetImgEle.src = planet.images.planet;
    planetOverview.innerHTML = planet.overview.content;
    planetSource.href = planet.geology.source;
  }

  planetName.innerHTML = planet.name;
}

function changePlanet() {
  var menuLink = document.querySelectorAll('.main-nav__menu-link');
  var mainNav = document.querySelector('.main-nav__menu');
  var mainEle = document.querySelector('.main-element');
  var burgerLine = document.querySelectorAll('.main-nav__burger-line');
  menuLink.forEach(function (ele) {
    return ele.addEventListener('click', function (e) {
      e.preventDefault();
      var dataName = ele.dataset.name;

      if (!document.body.classList.contains(dataName)) {
        var _document$body$classL;

        (_document$body$classL = document.body.classList).remove.apply(_document$body$classL, _toConsumableArray(document.body.classList));

        document.body.classList.add(dataName);
        (0, _getData["default"])(function findPlanet(dataP) {
          var currentPlanet = dataP.find(function (element) {
            return element.name === dataName;
          });
          renderPlanet(currentPlanet);
        });
      }

      mainNav.classList.remove('is-active');
      mainEle.classList.remove('is-active');
      burgerLine.forEach(function (element) {
        element.classList.remove('is-active');
      });
      btnEle();
    });
  });
}

function infoMenu() {
  var btnInfo = document.querySelectorAll('.btn');
  btnInfo.forEach(function (ele) {
    return ele.addEventListener('click', function (e) {
      var dataBtn = ele.dataset.btn;
      var imageEle = document.querySelector('.js-planet-img');
      (0, _getData["default"])(function findPlanet(dataP) {
        var currentPlanet = dataP.find(function (element) {
          return element.name === document.body.className;
        });
        populatePlanetData(currentPlanet, true, dataBtn);
        btnInfo.forEach(function (elem) {
          elem.classList.remove('is-active');
        });
        ele.classList.add('is-active');
        if (ele.dataset.btn === 'geology') imageEle.src = currentPlanet.images.planet;
      });
    });
  });
}

function btnEle() {
  var btnClass = document.querySelectorAll('.btn');
  btnClass.forEach(function (eleme) {
    eleme.classList.remove('is-active');
  });
}

},{"../utility/getData":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getData = function getData(func) {
  fetch('./data.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    return func(data);
  });
};

var _default = getData;
exports["default"] = _default;

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgX21vYmlsZU1lbnUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbW9iaWxlLW1lbnVcIikpO1xuXG52YXIgcGxhbmV0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29tcG9uZW50cy9yZW5kZXJEYXRhXCIpKTtcblxudmFyIF9nZXREYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsaXR5L2dldERhdGFcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4oMCwgX2dldERhdGFbXCJkZWZhdWx0XCJdKShwbGFuZXQucmVuZGVyUGxhbmV0KTtcbnBsYW5ldC5jaGFuZ2VQbGFuZXQoKTtcbigwLCBfbW9iaWxlTWVudVtcImRlZmF1bHRcIl0pKCk7XG5wbGFuZXQuaW5mb01lbnUoKTtcblxufSx7XCIuL2NvbXBvbmVudHMvbW9iaWxlLW1lbnVcIjoyLFwiLi9jb21wb25lbnRzL3JlbmRlckRhdGFcIjozLFwiLi91dGlsaXR5L2dldERhdGFcIjo0fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgYnVyZ2VyTWVudSA9IGZ1bmN0aW9uIGJ1cmdlck1lbnUoKSB7XG4gIHZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2J1cmdlcicpO1xuICB2YXIgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudScpO1xuICB2YXIgYnVyZ2VyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdl9fYnVyZ2VyLWxpbmUnKTtcbiAgdmFyIG1haW5FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1lbGVtZW50Jyk7XG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIG1haW5FbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgYnVyZ2VyTGluZS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGJ1cmdlck1lbnU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGFuZ2VQbGFuZXQgPSBjaGFuZ2VQbGFuZXQ7XG5leHBvcnRzLmluZm9NZW51ID0gaW5mb01lbnU7XG5leHBvcnRzLnBvcHVsYXRlUGxhbmV0RGF0YSA9IHBvcHVsYXRlUGxhbmV0RGF0YTtcbmV4cG9ydHMucmVuZGVyUGxhbmV0ID0gcmVuZGVyUGxhbmV0O1xuZXhwb3J0cy5yZW5kZXJQbGFuZXRJbmZvID0gcmVuZGVyUGxhbmV0SW5mbztcblxudmFyIF9nZXREYXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbGl0eS9nZXREYXRhXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gcmVuZGVyUGxhbmV0KGRhdGEpIHtcbiAgdmFyIG9iajtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QubGVuZ3RoIDw9IDAgPyBvYmogPSBkYXRhWzBdIDogb2JqID0gZGF0YTtcbiAgcmVuZGVyUGxhbmV0SW5mbyhvYmopO1xuICBwb3B1bGF0ZVBsYW5ldERhdGEob2JqKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGxhbmV0SW5mbyhwbGFuZXQpIHtcbiAgdmFyIHJvdGF0aW9uVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yb3RhdGlvbi10aW1lJyk7XG4gIHZhciByZXZvbHV0aW9uVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXZvbHV0aW9uLXRpbWUnKTtcbiAgdmFyIHJhZGl1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yYWRpdXMnKTtcbiAgdmFyIGF2ZXJhZ2VUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWF2ZXJhZ2UtdGVtcCcpO1xuICByb3RhdGlvblRpbWUuaW5uZXJIVE1MID0gcGxhbmV0LnJvdGF0aW9uO1xuICByZXZvbHV0aW9uVGltZS5pbm5lckhUTUwgPSBwbGFuZXQucmV2b2x1dGlvbjtcbiAgcmFkaXVzLmlubmVySFRNTCA9IHBsYW5ldC5yYWRpdXM7XG4gIGF2ZXJhZ2VUZW1wLmlubmVySFRNTCA9IHBsYW5ldC50ZW1wZXJhdHVyZTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQbGFuZXREYXRhKHBsYW5ldCwgaXNDaGFuZ2UsIGNvbnRlbnQpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHBsYW5ldC5uYW1lKTtcbiAgdmFyIHBsYW5ldEltZ0VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wbGFuZXQtaW1nJyk7XG4gIHZhciBwbGFuZXRJbWdHZW9FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGxhbmV0LWltZy1nZW8nKTtcbiAgdmFyIHBsYW5ldE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY29udGVudC1uYW1lJyk7XG4gIHZhciBwbGFuZXRPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qYS1jb250ZW50LW92ZXJ2aWV3Jyk7XG4gIHZhciBwbGFuZXRTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY29udGVudC1zb3VyY2UnKTtcbiAgdmFyIGJ0bk92ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWJ0bj0nb3ZlcnZpZXcnXVwiKTtcblxuICBpZiAoIXBsYW5ldEltZ0dlb0VsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKSB7XG4gICAgcGxhbmV0SW1nR2VvRWxlLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICB9XG5cbiAgaWYgKGlzQ2hhbmdlKSB7XG4gICAgaWYgKGNvbnRlbnQgPT09ICdzdHJ1Y3R1cmUnKSB7XG4gICAgICBwbGFuZXRJbWdFbGUuc3JjID0gcGxhbmV0LmltYWdlcy5pbnRlcm5hbDtcbiAgICAgIHBsYW5ldE92ZXJ2aWV3LmlubmVySFRNTCA9IHBsYW5ldC5zdHJ1Y3R1cmUuY29udGVudDtcbiAgICAgIHBsYW5ldFNvdXJjZS5ocmVmID0gcGxhbmV0LnN0cnVjdHVyZS5zb3VyY2U7XG4gICAgfSBlbHNlIGlmIChjb250ZW50ID09PSAnZ2VvbG9neScpIHtcbiAgICAgIHBsYW5ldEltZ0dlb0VsZS5zcmMgPSBwbGFuZXQuaW1hZ2VzLmdlb2xvZ3k7XG4gICAgICBwbGFuZXRJbWdHZW9FbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgICBwbGFuZXRPdmVydmlldy5pbm5lckhUTUwgPSBwbGFuZXQuZ2VvbG9neS5jb250ZW50O1xuICAgICAgcGxhbmV0U291cmNlLmhyZWYgPSBwbGFuZXQuZ2VvbG9neS5zb3VyY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYW5ldEltZ0VsZS5zcmMgPSBwbGFuZXQuaW1hZ2VzLnBsYW5ldDtcbiAgICAgIHBsYW5ldE92ZXJ2aWV3LmlubmVySFRNTCA9IHBsYW5ldC5vdmVydmlldy5jb250ZW50O1xuICAgICAgcGxhbmV0U291cmNlLmhyZWYgPSBwbGFuZXQuZ2VvbG9neS5zb3VyY2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBsYW5ldEltZ0VsZS5jbGFzc0xpc3QgPSBbXTtcbiAgICBwbGFuZXRJbWdFbGUuY2xhc3NMaXN0LmFkZCgncGxhbmV0X19pbWcnLCAnanMtcGxhbmV0LWltZycpO1xuICAgIHBsYW5ldEltZ0VsZS5jbGFzc0xpc3QuYWRkKCdwbGFuZXRfX2ltZy0tJyArIHBsYW5ldC5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIGJ0bk92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIHBsYW5ldEltZ0VsZS5zcmMgPSBwbGFuZXQuaW1hZ2VzLnBsYW5ldDtcbiAgICBwbGFuZXRPdmVydmlldy5pbm5lckhUTUwgPSBwbGFuZXQub3ZlcnZpZXcuY29udGVudDtcbiAgICBwbGFuZXRTb3VyY2UuaHJlZiA9IHBsYW5ldC5nZW9sb2d5LnNvdXJjZTtcbiAgfVxuXG4gIHBsYW5ldE5hbWUuaW5uZXJIVE1MID0gcGxhbmV0Lm5hbWU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBsYW5ldCgpIHtcbiAgdmFyIG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2X19tZW51LWxpbmsnKTtcbiAgdmFyIG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUnKTtcbiAgdmFyIG1haW5FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1lbGVtZW50Jyk7XG4gIHZhciBidXJnZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2X19idXJnZXItbGluZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICByZXR1cm4gZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkYXRhTmFtZSA9IGVsZS5kYXRhc2V0Lm5hbWU7XG5cbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoZGF0YU5hbWUpKSB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkYm9keSRjbGFzc0w7XG5cbiAgICAgICAgKF9kb2N1bWVudCRib2R5JGNsYXNzTCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KS5yZW1vdmUuYXBwbHkoX2RvY3VtZW50JGJvZHkkY2xhc3NMLCBfdG9Db25zdW1hYmxlQXJyYXkoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoZGF0YU5hbWUpO1xuICAgICAgICAoMCwgX2dldERhdGFbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiBmaW5kUGxhbmV0KGRhdGFQKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRQbGFuZXQgPSBkYXRhUC5maW5kKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5uYW1lID09PSBkYXRhTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZW5kZXJQbGFuZXQoY3VycmVudFBsYW5ldCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgbWFpbkVsZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIGJ1cmdlckxpbmUuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBidG5FbGUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluZm9NZW51KCkge1xuICB2YXIgYnRuSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcbiAgYnRuSW5mby5mb3JFYWNoKGZ1bmN0aW9uIChlbGUpIHtcbiAgICByZXR1cm4gZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBkYXRhQnRuID0gZWxlLmRhdGFzZXQuYnRuO1xuICAgICAgdmFyIGltYWdlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBsYW5ldC1pbWcnKTtcbiAgICAgICgwLCBfZ2V0RGF0YVtcImRlZmF1bHRcIl0pKGZ1bmN0aW9uIGZpbmRQbGFuZXQoZGF0YVApIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQbGFuZXQgPSBkYXRhUC5maW5kKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZSA9PT0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBwb3B1bGF0ZVBsYW5ldERhdGEoY3VycmVudFBsYW5ldCwgdHJ1ZSwgZGF0YUJ0bik7XG4gICAgICAgIGJ0bkluZm8uZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmIChlbGUuZGF0YXNldC5idG4gPT09ICdnZW9sb2d5JykgaW1hZ2VFbGUuc3JjID0gY3VycmVudFBsYW5ldC5pbWFnZXMucGxhbmV0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBidG5FbGUoKSB7XG4gIHZhciBidG5DbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcbiAgYnRuQ2xhc3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWUpIHtcbiAgICBlbGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG59XG5cbn0se1wiLi4vdXRpbGl0eS9nZXREYXRhXCI6NH1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIGdldERhdGEgPSBmdW5jdGlvbiBnZXREYXRhKGZ1bmMpIHtcbiAgZmV0Y2goJy4vZGF0YS5qc29uJykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmMoZGF0YSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gZ2V0RGF0YTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dfSx7fSxbMV0pO1xuIl0sImZpbGUiOiJhcHAuanMifQ==
