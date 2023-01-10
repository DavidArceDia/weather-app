/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 5%;\n}\n\n#content {\n  display: flex;\n  gap: 10%;\n  margin: auto;\n  justify-content: space-between;\n\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#mainContent {\n  flex-grow: 1;\n}\n\n#temp {\n  font-size: 6rem;\n  color: #f06543;\n  font-weight: 500;\n}\n\ninput {\n  background-color: #f06543;\n  border: none;\n  border-radius: 0.5rem;\n  height: 2rem;\n  width: 80%;\n}\n\n#secondaryContent {\n  flex-grow: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,8BAA8B;;EAE9B,4DAA4D;AAC9D;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,4DAA4D;AAC9D;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ","sourcesContent":["body {\n  padding: 5%;\n}\n\n#content {\n  display: flex;\n  gap: 10%;\n  margin: auto;\n  justify-content: space-between;\n\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n#mainContent {\n  flex-grow: 1;\n}\n\n#temp {\n  font-size: 6rem;\n  color: #f06543;\n  font-weight: 500;\n}\n\ninput {\n  background-color: #f06543;\n  border: none;\n  border-radius: 0.5rem;\n  height: 2rem;\n  width: 80%;\n}\n\n#secondaryContent {\n  flex-grow: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

async function getCoordinates() {
  let city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "toronto";
  let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ontario";
  let country = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "canada";
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=66a674d8f9600a051999c1eecd78a9de`, {
    mode: "cors"
  });
  const coordinatesData = await response.json();
  return coordinatesData;
}
async function getWeather(coordinatesData) {
  let lattitude = coordinatesData[0].lat;
  let longitude = coordinatesData[0].lon;
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=metric&appid=66a674d8f9600a051999c1eecd78a9de`, {
    mode: "cors"
  });
  const weatherData = await weatherResponse.json();
  return weatherData;
}
const getRelevantInfo = weatherData => {
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const tempMax = weatherData.main.temp_max;
  const temp = weatherData.main.temp;
  const tempMin = weatherData.main.temp_min;
  const descriptionTitle = weatherData.weather[0].main;
  const description = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed;
  const relevantInfo = {
    feelsLike,
    humidity,
    tempMax,
    temp,
    tempMin,
    descriptionTitle,
    description,
    windSpeed
  };
  return relevantInfo;
};
const splitIntoAdress = location => {
  let result = location.split(",").map(function (value) {
    return value.trim();
  });
  return result;
};
async function buildHomepage() {
  //Main Div
  const content = document.getElementById("content");
  content.innerHTML = "";

  //Contains temp and form
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");
  const form = document.createElement("form");
  form.setAttribute("id", "locationForm");
  const label = document.createElement("label");
  label.setAttribute("for", "location");
  label.innerHTML = "City, State, Country";
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "location");
  input.setAttribute("id", "location");
  const temp = document.createElement("h");
  temp.setAttribute("id", "temp");
  form.append(label);
  form.append(input);
  mainContent.append(temp);
  mainContent.append(form);

  //Contains all other data
  const secondaryContent = document.createElement("div");
  secondaryContent.setAttribute("id", "secondaryContent");
  const secondaryContentContainer = document.createElement("ul");
  secondaryContentContainer.setAttribute("id", "secondaryContentContainer");

  //description, low+high, humidity, wind speed
  const description = document.createElement("li");
  description.setAttribute("id", "description");
  description.innerHTML = ``;
  secondaryContentContainer.append(description);
  const lowAndHigh = document.createElement("li");
  lowAndHigh.setAttribute("id", "lowAndHigh");
  lowAndHigh.innerHTML = ``;
  secondaryContentContainer.append(lowAndHigh);
  const humidity = document.createElement("li");
  humidity.setAttribute("id", "humidity");
  humidity.innerHTML = ``;
  secondaryContentContainer.append(humidity);
  const windSpeed = document.createElement("li");
  windSpeed.setAttribute("id", "windSpeed");
  windSpeed.innerHTML = ``;
  secondaryContentContainer.append(windSpeed);
  secondaryContent.append(secondaryContentContainer);
  content.append(mainContent);
  content.append(secondaryContent);
}
const addSeachFeature = () => {
  const locationForm = document.getElementById("locationForm");
  locationForm.addEventListener("submit", event => {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const addressArray = splitIntoAdress(location);
    const city = addressArray[0];
    const state = addressArray[1];
    const country = addressArray[2];
    getCoordinates(city, state, country).then(function (coordinatesData) {
      getWeather(coordinatesData).then(function (weatherData) {
        const relevantInfo = getRelevantInfo(weatherData);
        console.log(relevantInfo);
        return relevantInfo;
      }).then(function (relevantInfo) {
        displayData(relevantInfo);
      });
    });
  });
};
const displayData = relevantInfo => {
  document.getElementById("temp").innerHTML = `${relevantInfo.temp}&#186C`;
  document.getElementById("description").innerHTML = `${relevantInfo.description}`;
  document.getElementById("lowAndHigh").innerHTML = `${relevantInfo.tempMin} low, ${relevantInfo.tempMax} high`;
  document.getElementById("humidity").innerHTML = `${relevantInfo.humidity}% humidity`;
  document.getElementById("windSpeed").innerHTML = `${relevantInfo.windSpeed}km/hr wind speed`;
};
buildHomepage().then(function () {
  getCoordinates().then(function (coordinatesData) {
    getWeather(coordinatesData).then(function (weatherData) {
      const relevantInfo = getRelevantInfo(weatherData);
      console.log(relevantInfo);
      return relevantInfo;
    }).then(function (relevantInfo) {
      displayData(relevantInfo);
    });
  });
});
buildHomepage().then(addSeachFeature());

// let sentences = "hello,   my, name, is";
// let result = sentences.split(",").map(function (value) {
//   return value.trim();
// });

// console.log(result);

// getWeather("Toronto", "Ontario", "Canada")
//   .then(function (weatherData) {
//     getRelevantInfo(weatherData);
//   })
//   .catch(function (e) {
//     reject(Error("Data could not be found"));
//   });

// const fibs = (num) => {
//   let ar = [];
//   for (let i = 0; i < num; i++) {
//     if (ar.length === 0) {
//       ar.push(1);
//     }
//     if (ar.length === 1) {
//       ar.push(2);
//     } else {
//       ar.push(ar[i - 1] + ar[i]);
//     }
//   }

//   return ar;
// };

// console.log(fibs(4));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLGFBQWEsaUJBQWlCLG1DQUFtQyxxRUFBcUUsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLGlCQUFpQiwwQkFBMEIsaUJBQWlCLGVBQWUsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLHFFQUFxRSxHQUFHLFFBQVEscUJBQXFCLGVBQWUsR0FBRyxTQUFTLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsK0JBQStCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLGFBQWEsaUJBQWlCLG1DQUFtQyxxRUFBcUUsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLGlCQUFpQiwwQkFBMEIsaUJBQWlCLGVBQWUsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLHFFQUFxRSxHQUFHLFFBQVEscUJBQXFCLGVBQWUsR0FBRyxxQkFBcUI7QUFDOXVEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUVyQixlQUFlQSxjQUFjLEdBSTNCO0VBQUEsSUFIQUMsSUFBSSx1RUFBRyxTQUFTO0VBQUEsSUFDaEJDLEtBQUssdUVBQUcsU0FBUztFQUFBLElBQ2pCQyxPQUFPLHVFQUFHLFFBQVE7RUFFbEIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsa0RBQWlESixJQUFLLElBQUdDLEtBQU0sSUFBR0MsT0FBUSxpREFBZ0QsRUFDM0g7SUFDRUcsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUNGO0VBQ0QsTUFBTUMsZUFBZSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0VBRTdDLE9BQU9ELGVBQWU7QUFDeEI7QUFFQSxlQUFlRSxVQUFVLENBQUNGLGVBQWUsRUFBRTtFQUN6QyxJQUFJRyxTQUFTLEdBQUdILGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksR0FBRztFQUN0QyxJQUFJQyxTQUFTLEdBQUdMLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sR0FBRztFQUV0QyxNQUFNQyxlQUFlLEdBQUcsTUFBTVQsS0FBSyxDQUNoQyx1REFBc0RLLFNBQVUsUUFBT0UsU0FBVSxzREFBcUQsRUFDdkk7SUFDRU4sSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUNGO0VBRUQsTUFBTVMsV0FBVyxHQUFHLE1BQU1ELGVBQWUsQ0FBQ04sSUFBSSxFQUFFO0VBRWhELE9BQU9PLFdBQVc7QUFDcEI7QUFFQSxNQUFNQyxlQUFlLEdBQUlELFdBQVcsSUFBSztFQUN2QyxNQUFNRSxTQUFTLEdBQUdGLFdBQVcsQ0FBQ0csSUFBSSxDQUFDQyxVQUFVO0VBQzdDLE1BQU1DLFFBQVEsR0FBR0wsV0FBVyxDQUFDRyxJQUFJLENBQUNFLFFBQVE7RUFDMUMsTUFBTUMsT0FBTyxHQUFHTixXQUFXLENBQUNHLElBQUksQ0FBQ0ksUUFBUTtFQUN6QyxNQUFNQyxJQUFJLEdBQUdSLFdBQVcsQ0FBQ0csSUFBSSxDQUFDSyxJQUFJO0VBQ2xDLE1BQU1DLE9BQU8sR0FBR1QsV0FBVyxDQUFDRyxJQUFJLENBQUNPLFFBQVE7RUFFekMsTUFBTUMsZ0JBQWdCLEdBQUdYLFdBQVcsQ0FBQ1ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDVCxJQUFJO0VBQ3BELE1BQU1VLFdBQVcsR0FBR2IsV0FBVyxDQUFDWSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVc7RUFFdEQsTUFBTUMsU0FBUyxHQUFHZCxXQUFXLENBQUNlLElBQUksQ0FBQ0MsS0FBSztFQUV4QyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJmLFNBQVM7SUFDVEcsUUFBUTtJQUNSQyxPQUFPO0lBQ1BFLElBQUk7SUFDSkMsT0FBTztJQUNQRSxnQkFBZ0I7SUFDaEJFLFdBQVc7SUFDWEM7RUFDRixDQUFDO0VBRUQsT0FBT0csWUFBWTtBQUNyQixDQUFDO0FBRUQsTUFBTUMsZUFBZSxHQUFJQyxRQUFRLElBQUs7RUFDcEMsSUFBSUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLEtBQUssRUFBRTtJQUNwRCxPQUFPQSxLQUFLLENBQUNDLElBQUksRUFBRTtFQUNyQixDQUFDLENBQUM7RUFFRixPQUFPSixNQUFNO0FBQ2YsQ0FBQztBQUVELGVBQWVLLGFBQWEsR0FBRztFQUM3QjtFQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0VBQ2xERixPQUFPLENBQUNHLFNBQVMsR0FBRyxFQUFFOztFQUV0QjtFQUNBLE1BQU1DLFdBQVcsR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pERCxXQUFXLENBQUNFLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDO0VBRTdDLE1BQU1DLElBQUksR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDRSxJQUFJLENBQUNELFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDO0VBRXZDLE1BQU1FLEtBQUssR0FBR1AsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzdDRyxLQUFLLENBQUNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO0VBQ3JDRSxLQUFLLENBQUNMLFNBQVMsR0FBRyxzQkFBc0I7RUFFeEMsTUFBTU0sS0FBSyxHQUFHUixRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDN0NJLEtBQUssQ0FBQ0gsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7RUFDbENHLEtBQUssQ0FBQ0gsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7RUFDdENHLEtBQUssQ0FBQ0gsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7RUFFcEMsTUFBTXhCLElBQUksR0FBR21CLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN4Q3ZCLElBQUksQ0FBQ3dCLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBRS9CQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0VBQ2xCRCxJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDO0VBRWxCTCxXQUFXLENBQUNNLE1BQU0sQ0FBQzVCLElBQUksQ0FBQztFQUN4QnNCLFdBQVcsQ0FBQ00sTUFBTSxDQUFDSCxJQUFJLENBQUM7O0VBRXhCO0VBQ0EsTUFBTUksZ0JBQWdCLEdBQUdWLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RE0sZ0JBQWdCLENBQUNMLFlBQVksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUM7RUFFdkQsTUFBTU0seUJBQXlCLEdBQUdYLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5RE8seUJBQXlCLENBQUNOLFlBQVksQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLENBQUM7O0VBRXpFO0VBQ0EsTUFBTW5CLFdBQVcsR0FBR2MsUUFBUSxDQUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2hEbEIsV0FBVyxDQUFDbUIsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7RUFDN0NuQixXQUFXLENBQUNnQixTQUFTLEdBQUksRUFBQztFQUMxQlMseUJBQXlCLENBQUNGLE1BQU0sQ0FBQ3ZCLFdBQVcsQ0FBQztFQUU3QyxNQUFNMEIsVUFBVSxHQUFHWixRQUFRLENBQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDL0NRLFVBQVUsQ0FBQ1AsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUM7RUFDM0NPLFVBQVUsQ0FBQ1YsU0FBUyxHQUFJLEVBQUM7RUFDekJTLHlCQUF5QixDQUFDRixNQUFNLENBQUNHLFVBQVUsQ0FBQztFQUU1QyxNQUFNbEMsUUFBUSxHQUFHc0IsUUFBUSxDQUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzdDMUIsUUFBUSxDQUFDMkIsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7RUFDdkMzQixRQUFRLENBQUN3QixTQUFTLEdBQUksRUFBQztFQUN2QlMseUJBQXlCLENBQUNGLE1BQU0sQ0FBQy9CLFFBQVEsQ0FBQztFQUUxQyxNQUFNUyxTQUFTLEdBQUdhLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5Q2pCLFNBQVMsQ0FBQ2tCLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDO0VBQ3pDbEIsU0FBUyxDQUFDZSxTQUFTLEdBQUksRUFBQztFQUN4QlMseUJBQXlCLENBQUNGLE1BQU0sQ0FBQ3RCLFNBQVMsQ0FBQztFQUUzQ3VCLGdCQUFnQixDQUFDRCxNQUFNLENBQUNFLHlCQUF5QixDQUFDO0VBRWxEWixPQUFPLENBQUNVLE1BQU0sQ0FBQ04sV0FBVyxDQUFDO0VBQzNCSixPQUFPLENBQUNVLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUM7QUFDbEM7QUFFQSxNQUFNRyxlQUFlLEdBQUcsTUFBTTtFQUM1QixNQUFNQyxZQUFZLEdBQUdkLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUU1RGEsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLEtBQUssSUFBSztJQUNqREEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFFdEIsTUFBTXpCLFFBQVEsR0FBR1EsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUNMLEtBQUs7SUFFMUQsTUFBTXNCLFlBQVksR0FBRzNCLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDO0lBRTlDLE1BQU1qQyxJQUFJLEdBQUcyRCxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0xRCxLQUFLLEdBQUcwRCxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE1BQU16RCxPQUFPLEdBQUd5RCxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRS9CNUQsY0FBYyxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDLENBQUMwRCxJQUFJLENBQUMsVUFBVXRELGVBQWUsRUFBRTtNQUNuRUUsVUFBVSxDQUFDRixlQUFlLENBQUMsQ0FDeEJzRCxJQUFJLENBQUMsVUFBVTlDLFdBQVcsRUFBRTtRQUMzQixNQUFNaUIsWUFBWSxHQUFHaEIsZUFBZSxDQUFDRCxXQUFXLENBQUM7UUFDakQrQyxPQUFPLENBQUNDLEdBQUcsQ0FBQy9CLFlBQVksQ0FBQztRQUN6QixPQUFPQSxZQUFZO01BQ3JCLENBQUMsQ0FBQyxDQUNENkIsSUFBSSxDQUFDLFVBQVU3QixZQUFZLEVBQUU7UUFDNUJnQyxXQUFXLENBQUNoQyxZQUFZLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU1nQyxXQUFXLEdBQUloQyxZQUFZLElBQUs7RUFDcENVLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLEdBQUksR0FBRVosWUFBWSxDQUFDVCxJQUFLLFFBQU87RUFFeEVtQixRQUFRLENBQUNDLGNBQWMsQ0FDckIsYUFBYSxDQUNkLENBQUNDLFNBQVMsR0FBSSxHQUFFWixZQUFZLENBQUNKLFdBQVksRUFBQztFQUUzQ2MsUUFBUSxDQUFDQyxjQUFjLENBQ3JCLFlBQVksQ0FDYixDQUFDQyxTQUFTLEdBQUksR0FBRVosWUFBWSxDQUFDUixPQUFRLFNBQVFRLFlBQVksQ0FBQ1gsT0FBUSxPQUFNO0VBRXpFcUIsUUFBUSxDQUFDQyxjQUFjLENBQ3JCLFVBQVUsQ0FDWCxDQUFDQyxTQUFTLEdBQUksR0FBRVosWUFBWSxDQUFDWixRQUFTLFlBQVc7RUFFbERzQixRQUFRLENBQUNDLGNBQWMsQ0FDckIsV0FBVyxDQUNaLENBQUNDLFNBQVMsR0FBSSxHQUFFWixZQUFZLENBQUNILFNBQVUsa0JBQWlCO0FBQzNELENBQUM7QUFFRFcsYUFBYSxFQUFFLENBQUNxQixJQUFJLENBQUMsWUFBWTtFQUMvQjdELGNBQWMsRUFBRSxDQUFDNkQsSUFBSSxDQUFDLFVBQVV0RCxlQUFlLEVBQUU7SUFDL0NFLFVBQVUsQ0FBQ0YsZUFBZSxDQUFDLENBQ3hCc0QsSUFBSSxDQUFDLFVBQVU5QyxXQUFXLEVBQUU7TUFDM0IsTUFBTWlCLFlBQVksR0FBR2hCLGVBQWUsQ0FBQ0QsV0FBVyxDQUFDO01BQ2pEK0MsT0FBTyxDQUFDQyxHQUFHLENBQUMvQixZQUFZLENBQUM7TUFDekIsT0FBT0EsWUFBWTtJQUNyQixDQUFDLENBQUMsQ0FDRDZCLElBQUksQ0FBQyxVQUFVN0IsWUFBWSxFQUFFO01BQzVCZ0MsV0FBVyxDQUFDaEMsWUFBWSxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGUSxhQUFhLEVBQUUsQ0FBQ3FCLElBQUksQ0FBQ04sZUFBZSxFQUFFLENBQUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHBhZGRpbmc6IDUlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiN0ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGNvbG9yOiAjZjA2NTQzO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNjU0MztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbiNzZWNvbmRhcnlDb250ZW50IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFlBQVk7RUFDWiw4QkFBOEI7O0VBRTlCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBwYWRkaW5nOiA1JTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jbWFpbkNvbnRlbnQge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jdGVtcCB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBjb2xvcjogI2YwNjU0MztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDY1NDM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4jc2Vjb25kYXJ5Q29udGVudCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhcbiAgY2l0eSA9IFwidG9yb250b1wiLFxuICBzdGF0ZSA9IFwib250YXJpb1wiLFxuICBjb3VudHJ5ID0gXCJjYW5hZGFcIlxuKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSwke3N0YXRlfSwke2NvdW50cnl9JmxpbWl0PTEmYXBwaWQ9NjZhNjc0ZDhmOTYwMGEwNTE5OTljMWVlY2Q3OGE5ZGVgLFxuICAgIHtcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgY29vcmRpbmF0ZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBjb29yZGluYXRlc0RhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY29vcmRpbmF0ZXNEYXRhKSB7XG4gIGxldCBsYXR0aXR1ZGUgPSBjb29yZGluYXRlc0RhdGFbMF0ubGF0O1xuICBsZXQgbG9uZ2l0dWRlID0gY29vcmRpbmF0ZXNEYXRhWzBdLmxvbjtcblxuICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0dGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZhcHBpZD02NmE2NzRkOGY5NjAwYTA1MTk5OWMxZWVjZDc4YTlkZWAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmNvbnN0IGdldFJlbGV2YW50SW5mbyA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBmZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gIGNvbnN0IGh1bWlkaXR5ID0gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgY29uc3QgdGVtcE1heCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXg7XG4gIGNvbnN0IHRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IHRlbXBNaW4gPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xuXG4gIGNvbnN0IHJlbGV2YW50SW5mbyA9IHtcbiAgICBmZWVsc0xpa2UsXG4gICAgaHVtaWRpdHksXG4gICAgdGVtcE1heCxcbiAgICB0ZW1wLFxuICAgIHRlbXBNaW4sXG4gICAgZGVzY3JpcHRpb25UaXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB3aW5kU3BlZWQsXG4gIH07XG5cbiAgcmV0dXJuIHJlbGV2YW50SW5mbztcbn07XG5cbmNvbnN0IHNwbGl0SW50b0FkcmVzcyA9IChsb2NhdGlvbikgPT4ge1xuICBsZXQgcmVzdWx0ID0gbG9jYXRpb24uc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gYnVpbGRIb21lcGFnZSgpIHtcbiAgLy9NYWluIERpdlxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy9Db250YWlucyB0ZW1wIGFuZCBmb3JtXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluQ29udGVudFwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NhdGlvbkZvcm1cIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvY2F0aW9uXCIpO1xuICBsYWJlbC5pbm5lckhUTUwgPSBcIkNpdHksIFN0YXRlLCBDb3VudHJ5XCI7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9jYXRpb25cIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jYXRpb25cIik7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIpO1xuICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcblxuICBmb3JtLmFwcGVuZChsYWJlbCk7XG4gIGZvcm0uYXBwZW5kKGlucHV0KTtcblxuICBtYWluQ29udGVudC5hcHBlbmQodGVtcCk7XG4gIG1haW5Db250ZW50LmFwcGVuZChmb3JtKTtcblxuICAvL0NvbnRhaW5zIGFsbCBvdGhlciBkYXRhXG4gIGNvbnN0IHNlY29uZGFyeUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmRhcnlDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Vjb25kYXJ5Q29udGVudFwiKTtcblxuICBjb25zdCBzZWNvbmRhcnlDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBzZWNvbmRhcnlDb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Vjb25kYXJ5Q29udGVudENvbnRhaW5lclwiKTtcblxuICAvL2Rlc2NyaXB0aW9uLCBsb3craGlnaCwgaHVtaWRpdHksIHdpbmQgc3BlZWRcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBgO1xuICBzZWNvbmRhcnlDb250ZW50Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgbG93QW5kSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbG93QW5kSGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd0FuZEhpZ2hcIik7XG4gIGxvd0FuZEhpZ2guaW5uZXJIVE1MID0gYGA7XG4gIHNlY29uZGFyeUNvbnRlbnRDb250YWluZXIuYXBwZW5kKGxvd0FuZEhpZ2gpO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWlkaXR5XCIpO1xuICBodW1pZGl0eS5pbm5lckhUTUwgPSBgYDtcbiAgc2Vjb25kYXJ5Q29udGVudENvbnRhaW5lci5hcHBlbmQoaHVtaWRpdHkpO1xuXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgd2luZFNwZWVkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2luZFNwZWVkXCIpO1xuICB3aW5kU3BlZWQuaW5uZXJIVE1MID0gYGA7XG4gIHNlY29uZGFyeUNvbnRlbnRDb250YWluZXIuYXBwZW5kKHdpbmRTcGVlZCk7XG5cbiAgc2Vjb25kYXJ5Q29udGVudC5hcHBlbmQoc2Vjb25kYXJ5Q29udGVudENvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmQobWFpbkNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZChzZWNvbmRhcnlDb250ZW50KTtcbn1cblxuY29uc3QgYWRkU2VhY2hGZWF0dXJlID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uRm9ybVwiKTtcblxuICBsb2NhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpLnZhbHVlO1xuXG4gICAgY29uc3QgYWRkcmVzc0FycmF5ID0gc3BsaXRJbnRvQWRyZXNzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGNpdHkgPSBhZGRyZXNzQXJyYXlbMF07XG4gICAgY29uc3Qgc3RhdGUgPSBhZGRyZXNzQXJyYXlbMV07XG4gICAgY29uc3QgY291bnRyeSA9IGFkZHJlc3NBcnJheVsyXTtcblxuICAgIGdldENvb3JkaW5hdGVzKGNpdHksIHN0YXRlLCBjb3VudHJ5KS50aGVuKGZ1bmN0aW9uIChjb29yZGluYXRlc0RhdGEpIHtcbiAgICAgIGdldFdlYXRoZXIoY29vcmRpbmF0ZXNEYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbiAgICAgICAgICBjb25zdCByZWxldmFudEluZm8gPSBnZXRSZWxldmFudEluZm8od2VhdGhlckRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGV2YW50SW5mbyk7XG4gICAgICAgICAgcmV0dXJuIHJlbGV2YW50SW5mbztcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlbGV2YW50SW5mbykge1xuICAgICAgICAgIGRpc3BsYXlEYXRhKHJlbGV2YW50SW5mbyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlEYXRhID0gKHJlbGV2YW50SW5mbykgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIikuaW5uZXJIVE1MID0gYCR7cmVsZXZhbnRJbmZvLnRlbXB9JiMxODZDYDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImRlc2NyaXB0aW9uXCJcbiAgKS5pbm5lckhUTUwgPSBgJHtyZWxldmFudEluZm8uZGVzY3JpcHRpb259YDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImxvd0FuZEhpZ2hcIlxuICApLmlubmVySFRNTCA9IGAke3JlbGV2YW50SW5mby50ZW1wTWlufSBsb3csICR7cmVsZXZhbnRJbmZvLnRlbXBNYXh9IGhpZ2hgO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiaHVtaWRpdHlcIlxuICApLmlubmVySFRNTCA9IGAke3JlbGV2YW50SW5mby5odW1pZGl0eX0lIGh1bWlkaXR5YDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIndpbmRTcGVlZFwiXG4gICkuaW5uZXJIVE1MID0gYCR7cmVsZXZhbnRJbmZvLndpbmRTcGVlZH1rbS9ociB3aW5kIHNwZWVkYDtcbn07XG5cbmJ1aWxkSG9tZXBhZ2UoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgZ2V0Q29vcmRpbmF0ZXMoKS50aGVuKGZ1bmN0aW9uIChjb29yZGluYXRlc0RhdGEpIHtcbiAgICBnZXRXZWF0aGVyKGNvb3JkaW5hdGVzRGF0YSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuICAgICAgICBjb25zdCByZWxldmFudEluZm8gPSBnZXRSZWxldmFudEluZm8od2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZWxldmFudEluZm8pO1xuICAgICAgICByZXR1cm4gcmVsZXZhbnRJbmZvO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWxldmFudEluZm8pIHtcbiAgICAgICAgZGlzcGxheURhdGEocmVsZXZhbnRJbmZvKTtcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuXG5idWlsZEhvbWVwYWdlKCkudGhlbihhZGRTZWFjaEZlYXR1cmUoKSk7XG5cbi8vIGxldCBzZW50ZW5jZXMgPSBcImhlbGxvLCAgIG15LCBuYW1lLCBpc1wiO1xuLy8gbGV0IHJlc3VsdCA9IHNlbnRlbmNlcy5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICByZXR1cm4gdmFsdWUudHJpbSgpO1xuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbi8vIGdldFdlYXRoZXIoXCJUb3JvbnRvXCIsIFwiT250YXJpb1wiLCBcIkNhbmFkYVwiKVxuLy8gICAudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbi8vICAgICBnZXRSZWxldmFudEluZm8od2VhdGhlckRhdGEpO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbi8vICAgICByZWplY3QoRXJyb3IoXCJEYXRhIGNvdWxkIG5vdCBiZSBmb3VuZFwiKSk7XG4vLyAgIH0pO1xuXG4vLyBjb25zdCBmaWJzID0gKG51bSkgPT4ge1xuLy8gICBsZXQgYXIgPSBbXTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuLy8gICAgIGlmIChhci5sZW5ndGggPT09IDApIHtcbi8vICAgICAgIGFyLnB1c2goMSk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChhci5sZW5ndGggPT09IDEpIHtcbi8vICAgICAgIGFyLnB1c2goMik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGFyLnB1c2goYXJbaSAtIDFdICsgYXJbaV0pO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJldHVybiBhcjtcbi8vIH07XG5cbi8vIGNvbnNvbGUubG9nKGZpYnMoNCkpO1xuIl0sIm5hbWVzIjpbImdldENvb3JkaW5hdGVzIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiY29vcmRpbmF0ZXNEYXRhIiwianNvbiIsImdldFdlYXRoZXIiLCJsYXR0aXR1ZGUiLCJsYXQiLCJsb25naXR1ZGUiLCJsb24iLCJ3ZWF0aGVyUmVzcG9uc2UiLCJ3ZWF0aGVyRGF0YSIsImdldFJlbGV2YW50SW5mbyIsImZlZWxzTGlrZSIsIm1haW4iLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJ0ZW1wTWF4IiwidGVtcF9tYXgiLCJ0ZW1wIiwidGVtcE1pbiIsInRlbXBfbWluIiwiZGVzY3JpcHRpb25UaXRsZSIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsInJlbGV2YW50SW5mbyIsInNwbGl0SW50b0FkcmVzcyIsImxvY2F0aW9uIiwicmVzdWx0Iiwic3BsaXQiLCJtYXAiLCJ2YWx1ZSIsInRyaW0iLCJidWlsZEhvbWVwYWdlIiwiY29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJtYWluQ29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsImFwcGVuZCIsInNlY29uZGFyeUNvbnRlbnQiLCJzZWNvbmRhcnlDb250ZW50Q29udGFpbmVyIiwibG93QW5kSGlnaCIsImFkZFNlYWNoRmVhdHVyZSIsImxvY2F0aW9uRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkcmVzc0FycmF5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=