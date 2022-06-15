/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: sans-serif;\n    font-size: 16px;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    \n    --rows: 200;\n    --cols: 100;\n\n    --border-radius: 6px;\n    --menu-primary: white;\n    --menu-background: rgba(128, 128, 128, 0.781);\n    --background: rgb(149, 149, 149);\n    /* --alive-color is both the color of the cells & menu accent color */\n    --alive-color: rgb(214, 142, 7);\n    --shadow-color: rgb(123, 123, 123);\n}\n\nbody {\n    margin: inherit;\n}\n\n.board {\n    margin: 0px;\n    background-color: var(--background);\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template: repeat(var(--rows), 1fr) / repeat(var(--cols), 1fr);\n    gap: 1px;\n}\n\n.alive {\n    background-color: var(--alive-color);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--menu-primary);\n}\n\n.resizeMenu {\n    bottom: 30vh;\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--menu-primary);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.resizeMenu.open{\n    transform: translateX(-450px);\n}\n\n.resizeMenu div {\n    margin: 5px;\n}\n\n.rowIcon,\n.colIcon {\n    width: 50px;\n    height: 50px;\n    margin-left: 8px;\n}\n\n.openResizeMenu,\n.resizeMenuIcon,\n.locked {\n    width: 35px;\n    height: 35px;\n}\n\n.resizeMenu .locked {\n    margin-left: 16px;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.openResizeMenu:active,\n.locked:active {\n    transform: scale(1.075);\n}\n\n.playbackMenu {\n    position: absolute;\n    bottom: 1vh;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: 50%;\n    transform: translate(-50%, 0);\n\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--menu-primary);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px rgb(123, 123, 123);\n}\n\n.playbackMenu div {\n    margin: 5px;\n}\n\n.play,\n.pause {\n    width: 50px;\n    height: 50px;\n}\n\n.speed {\n    width: 35px;\n    height: 35px;\n}\n\ndiv svg{\n    fill: var(--menu-primary);\n    margin: 0;\n    width: inherit;\n    height: inherit;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.play:active,\n.pause:active {\n    transform: scale(1.075);\n}\n\n.playbackSpeed {\n    margin-right: 16px;\n}\n\n.cols {\n    margin-right: 100px;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 4px;\n    border-radius: calc(var(--border-radius) * 2);  \n    background: var(--menu-primary);\n    outline: none;\n}\n\ninput[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 100%; \n    background: var(--alive-color);\n    border: 2px solid var(--menu-primary);\n    cursor: pointer;\n}\ninput[type='range']::-webkit-slider-thumb:active {\n    transform: scale(1.075);\n    box-shadow: 0px 0px 10px var(--shadow-color);\n}\n\n.grayedOut {\n    filter: grayscale();\n    filter: opacity(.7);\n}\n\n.inactive {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,gBAAgB;;IAEhB,WAAW;IACX,WAAW;;IAEX,oBAAoB;IACpB,qBAAqB;IACrB,6CAA6C;IAC7C,gCAAgC;IAChC,qEAAqE;IACrE,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,mCAAmC;IACnC,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kEAAkE;IAClE,QAAQ;AACZ;;AAEA;IACI,oCAAoC;IACpC,mCAAmC;IACnC,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;;IAEnB,0BAA0B;IAC1B,wBAAwB;;IAExB,wCAAwC;IACxC,qCAAqC;IACrC,6CAA6C;;IAE7C,4CAA4C;AAChD;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;;IAGI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,+CAA+C;AAC/C;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;;IAEnB,0BAA0B;IAC1B,SAAS;IACT,6BAA6B;;;IAG7B,wCAAwC;IACxC,qCAAqC;IACrC,6CAA6C;;IAE7C,2CAA2C;AAC/C;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,SAAS;IACT,cAAc;IACd,eAAe;AACnB;;AAEA,+CAA+C;AAC/C;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,6CAA6C;IAC7C,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,qCAAqC;IACrC,eAAe;AACnB;AACA;IACI,uBAAuB;IACvB,4CAA4C;AAChD;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    font-family: sans-serif;\n    font-size: 16px;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    \n    --rows: 200;\n    --cols: 100;\n\n    --border-radius: 6px;\n    --menu-primary: white;\n    --menu-background: rgba(128, 128, 128, 0.781);\n    --background: rgb(149, 149, 149);\n    /* --alive-color is both the color of the cells & menu accent color */\n    --alive-color: rgb(214, 142, 7);\n    --shadow-color: rgb(123, 123, 123);\n}\n\nbody {\n    margin: inherit;\n}\n\n.board {\n    margin: 0px;\n    background-color: var(--background);\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template: repeat(var(--rows), 1fr) / repeat(var(--cols), 1fr);\n    gap: 1px;\n}\n\n.alive {\n    background-color: var(--alive-color);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--menu-primary);\n}\n\n.resizeMenu {\n    bottom: 30vh;\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--menu-primary);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.resizeMenu.open{\n    transform: translateX(-450px);\n}\n\n.resizeMenu div {\n    margin: 5px;\n}\n\n.rowIcon,\n.colIcon {\n    width: 50px;\n    height: 50px;\n    margin-left: 8px;\n}\n\n.openResizeMenu,\n.resizeMenuIcon,\n.locked {\n    width: 35px;\n    height: 35px;\n}\n\n.resizeMenu .locked {\n    margin-left: 16px;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.openResizeMenu:active,\n.locked:active {\n    transform: scale(1.075);\n}\n\n.playbackMenu {\n    position: absolute;\n    bottom: 1vh;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: 50%;\n    transform: translate(-50%, 0);\n\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--menu-primary);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px rgb(123, 123, 123);\n}\n\n.playbackMenu div {\n    margin: 5px;\n}\n\n.play,\n.pause {\n    width: 50px;\n    height: 50px;\n}\n\n.speed {\n    width: 35px;\n    height: 35px;\n}\n\ndiv svg{\n    fill: var(--menu-primary);\n    margin: 0;\n    width: inherit;\n    height: inherit;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.play:active,\n.pause:active {\n    transform: scale(1.075);\n}\n\n.playbackSpeed {\n    margin-right: 16px;\n}\n\n.cols {\n    margin-right: 100px;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 4px;\n    border-radius: calc(var(--border-radius) * 2);  \n    background: var(--menu-primary);\n    outline: none;\n}\n\ninput[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 100%; \n    background: var(--alive-color);\n    border: 2px solid var(--menu-primary);\n    cursor: pointer;\n}\ninput[type='range']::-webkit-slider-thumb:active {\n    transform: scale(1.075);\n    box-shadow: 0px 0px 10px var(--shadow-color);\n}\n\n.grayedOut {\n    filter: grayscale();\n    filter: opacity(.7);\n}\n\n.inactive {\n    display: none;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
class Board {
    constructor(rows, cols) {
        this.boolBoard = [];
        for(let row = 0; row < rows; row++){
            const tempNewArr = [];
            for(let col = 0; col < cols; col++){
                tempNewArr.push(this.determineInitLife());
            }
            this.boolBoard.push(tempNewArr);
        }
    }

    getRows() {
        return this.boolBoard.length;
    }

    getCols() {
        return this.boolBoard[0].length
    }

    getBoard(){
        return this.boolBoard;
    }

    stepForward(){
        const neigborArr = this.getNeighborArr();
        const newArr = [];
        for(let checkRow = 0; checkRow < this.boolBoard.length; checkRow++){
            let tempNewArr = [];
            for(let checkCol = 0; checkCol < this.boolBoard[checkRow].length; checkCol++){
                if(this.boolBoard[checkRow][checkCol]){ // if the cell is currently alive;
                    if(neigborArr[checkRow][checkCol] == 2 || neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // alive with two or 3 neighbors, survives
                    }else{
                        tempNewArr.push(false); // alive with too many/few neighbors, dies
                    }
                }else{ // if the cell is currently dead
                    if(neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // dead with three neighbors, comes alive
                    }else{
                        tempNewArr.push(false); // dead with !3 neighbors, stays dead
                    }
                }
            }
            newArr.push(tempNewArr);
        }        
        this.boolBoard = newArr;
    }

    getNeighborArr(){
        const ret = [];
        for(let row = 0; row < this.boolBoard.length; row++){
            const tempNewArr = [];
            for(let col = 0; col < this.boolBoard[row].length; col++){
                tempNewArr.push(this.getNeighbors(row, col));
            }
            ret.push(tempNewArr);
        }
        return ret;
    }

    getNeighbors(row, col){
        let ret = 0;
        // loop through the 9x9 surrounding the cell passed in
        for(let checkRow = row-1; checkRow < row+2; checkRow++){
            for(let checkCol = col-1; checkCol < col+2; checkCol++){
                // is in bounds
                if(checkRow < this.boolBoard.length && checkRow >= 0 &&
                    checkCol < this.boolBoard[checkRow].length && checkCol >= 0){
                        // isn't the cell itself
                        if(!(checkRow == row && checkCol == col)){
                            if(this.boolBoard[checkRow][checkCol]){
                                ret++;
                            }
                        }
                }
            }
        }
        return ret;
    }

    determineInitLife(){
        if(Math.random() < .4){
            return true;
        }else{
            return false;
        }
    }
}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./src/modules/Board.js");


class UI {
    static board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](50, Math.round(window.innerWidth / (window.innerHeight / 50)));
    static rowColLock = true;
    static playbackSpeed = (1050 - 475);
    static timer = setInterval(() => {
        this.board.stepForward();
        UI.drawBoard();
    }, this.playbackSpeed);
    static playing = true;

    static loadHomepage(){
        UI.adjustCSSRowsCols();
        UI.addWindowResizeEventListener();
        UI.drawBoard();
        UI.addPlaybackMenuListeners();
        UI.addResizeMenuListeners();
    }

    static addResizeMenuListeners(){
        // open the resize menu
        document.querySelector('.openResizeMenu .open').addEventListener('click', () => {
            document.querySelector('.openResizeMenu .open').classList.add('inactive');
            document.querySelector('.openResizeMenu .close').classList.remove('inactive');
            document.querySelector('.resizeMenu').classList.add('open');
        });
        // close the resize menu
        document.querySelector('.openResizeMenu .close').addEventListener('click', () => {
            document.querySelector('.openResizeMenu .close').classList.add('inactive');
            document.querySelector('.openResizeMenu .open').classList.remove('inactive');
            document.querySelector('.resizeMenu').classList.remove('open');
        });
        // lock rows & columns
        document.querySelector(".locked .lockOpen").addEventListener('click', () => {
            document.querySelector(".locked .lockOpen").classList.add('inactive');
            document.querySelector(".locked .lockClosed").classList.remove('inactive');
            document.querySelectorAll(".colIcon, .cols").forEach(element => element.classList.add("grayedOut"));
            this.rowColLock = true;
            UI.lockBoard();
        });
        // unlock rows & columns
        document.querySelector(".locked .lockClosed").addEventListener('click', () => {
            document.querySelector(".locked .lockClosed").classList.add('inactive');
            document.querySelector(".locked .lockOpen").classList.remove('inactive');
            document.querySelectorAll(".colIcon, .cols").forEach(element => element.classList.remove("grayedOut"));
            this.rowColLock = false;
        });
        // row sizing adjustment
        document.querySelector('input[name="rows"]').addEventListener('input', (e) => {
            const newRows = (160 - e.target.value);
            if(this.rowColLock){
                this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](newRows, 1);
                UI.lockBoard();
            }else{
                UI.updateRows(newRows);
            }
        });
        // col sizing adjustment
        document.querySelector('input[name="cols"]').addEventListener('input', (e) => {
            if(!this.rowColLock){
                UI.updateCols(160 - e.target.value);
            }
        });
    }

    static updateCols(newCols) {
        if(this.playing){
            UI.pause();
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), newCols);
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), newCols);
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static updateRows(newRows) {
        if(this.playing){
            UI.pause();
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](newRows, this.board.getCols());
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](newRows, this.board.getCols());
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static lockBoard() {
        if(this.playing){
            UI.pause();
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
            UI.adjustCSSRowsCols();
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
            UI.adjustCSSRowsCols();
            UI.drawBoard();
        }
    }

    static adjustCSSRowsCols() {
        const root = document.documentElement;
        root.style.setProperty('--rows', this.board.getRows());
        root.style.setProperty('--cols', this.board.getCols());
    }

    static addWindowResizeEventListener() {
        window.addEventListener('resize', () => {
            if(this.rowColLock){
                UI.lockBoard();
            }
        });
    }

    static addPlaybackMenuListeners(){
        document.querySelector('.play').addEventListener('click', () => {
            document.querySelector('.play').classList.add('inactive');
            document.querySelector('.pause').classList.remove('inactive');
            UI.play();
        });

        document.querySelector('.pause').addEventListener('click', () => {
            document.querySelector('.pause').classList.add('inactive');
            document.querySelector('.play').classList.remove('inactive');
            UI.pause();
        });

        document.querySelector('input[name="playbackSpeed"]').addEventListener('input', (e) => {
            this.playbackSpeed = (e.target.value);
            this.playbackSpeed = (1050 - this.playbackSpeed);
            if(this.playing){
                UI.pause();
                UI.play();
            }
        });
    }

    static play() {
        this.timer = setInterval(() => {
            this.board.stepForward();
            UI.drawBoard();
        }, this.playbackSpeed);
        this.playing = true;
    }

    static pause() {
        clearInterval(this.timer);
        this.playing = false;
    }

    static drawBoard(){
        const boardElem = document.querySelector('.board');
        const boolBoard = this.board.getBoard();

        // clear old board
        boardElem.textContent = '';

        boolBoard.forEach(row => {
            row.forEach(col => {
                const newBoardPiece = document.createElement('div');
                if(col){
                    newBoardPiece.classList.add('alive');
                }else{
                    newBoardPiece.classList.add('dead');
                }
                boardElem.appendChild(newBoardPiece);
            });
        });
    }
}

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
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



document.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7OztVQ2pMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNYOztBQUV0Qiw4Q0FBOEMsbUVBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbC13ZWIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL21vZHVsZXMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAtLXJvd3M6IDIwMDtcXG4gICAgLS1jb2xzOiAxMDA7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAtLW1lbnUtcHJpbWFyeTogd2hpdGU7XFxuICAgIC0tbWVudS1iYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgxKTtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIC8qIC0tYWxpdmUtY29sb3IgaXMgYm90aCB0aGUgY29sb3Igb2YgdGhlIGNlbGxzICYgbWVudSBhY2NlbnQgY29sb3IgKi9cXG4gICAgLS1hbGl2ZS1jb2xvcjogcmdiKDIxNCwgMTQyLCA3KTtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigxMjMsIDEyMywgMTIzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogaW5oZXJpdDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCh2YXIoLS1yb3dzKSwgMWZyKSAvIHJlcGVhdCh2YXIoLS1jb2xzKSwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5hbGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsaXZlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lbnUtcHJpbWFyeSk7XFxufVxcblxcbi5yZXNpemVNZW51IHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA5NXB4KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUub3BlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NTBweCk7XFxufVxcblxcbi5yZXNpemVNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucm93SWNvbixcXG4uY29sSWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5vcGVuUmVzaXplTWVudSxcXG4ucmVzaXplTWVudUljb24sXFxuLmxvY2tlZCB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5yZXNpemVNZW51IC5sb2NrZWQge1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLyogbWFrZSBwbGF5L3BhdXNlIGJ1dHRvbiBcXFwicG9wXFxcIiB1cG9uIGNsaWNraW5nICovXFxuLm9wZW5SZXNpemVNZW51OmFjdGl2ZSxcXG4ubG9ja2VkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDF2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG5cXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDEyMywgMTIzLCAxMjMpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucGxheSxcXG4ucGF1c2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc3BlZWQge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5kaXYgc3Zne1xcbiAgICBmaWxsOiB2YXIoLS1tZW51LXByaW1hcnkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIG1ha2UgcGxheS9wYXVzZSBidXR0b24gXFxcInBvcFxcXCIgdXBvbiBjbGlja2luZyAqL1xcbi5wbGF5OmFjdGl2ZSxcXG4ucGF1c2U6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5wbGF5YmFja1NwZWVkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29scyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhbmdlJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7ICBcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbGl2ZS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lbnUtcHJpbWFyeSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uZ3JheWVkT3V0IHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC43KTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztJQUVoQixXQUFXO0lBQ1gsV0FBVzs7SUFFWCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDZDQUE2QztJQUM3QyxnQ0FBZ0M7SUFDaEMscUVBQXFFO0lBQ3JFLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUsUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7O0lBRW5CLDBCQUEwQjtJQUMxQix3QkFBd0I7O0lBRXhCLHdDQUF3QztJQUN4QyxxQ0FBcUM7SUFDckMsNkNBQTZDOztJQUU3Qyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLCtDQUErQztBQUMvQzs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7O0lBRW5CLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsNkJBQTZCOzs7SUFHN0Isd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQyw2Q0FBNkM7O0lBRTdDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSwrQ0FBK0M7QUFDL0M7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAtLXJvd3M6IDIwMDtcXG4gICAgLS1jb2xzOiAxMDA7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAtLW1lbnUtcHJpbWFyeTogd2hpdGU7XFxuICAgIC0tbWVudS1iYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgxKTtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuICAgIC8qIC0tYWxpdmUtY29sb3IgaXMgYm90aCB0aGUgY29sb3Igb2YgdGhlIGNlbGxzICYgbWVudSBhY2NlbnQgY29sb3IgKi9cXG4gICAgLS1hbGl2ZS1jb2xvcjogcmdiKDIxNCwgMTQyLCA3KTtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigxMjMsIDEyMywgMTIzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogaW5oZXJpdDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCh2YXIoLS1yb3dzKSwgMWZyKSAvIHJlcGVhdCh2YXIoLS1jb2xzKSwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5hbGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsaXZlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lbnUtcHJpbWFyeSk7XFxufVxcblxcbi5yZXNpemVNZW51IHtcXG4gICAgYm90dG9tOiAzMHZoO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA5NXB4KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUub3BlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NTBweCk7XFxufVxcblxcbi5yZXNpemVNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucm93SWNvbixcXG4uY29sSWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5vcGVuUmVzaXplTWVudSxcXG4ucmVzaXplTWVudUljb24sXFxuLmxvY2tlZCB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5yZXNpemVNZW51IC5sb2NrZWQge1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLyogbWFrZSBwbGF5L3BhdXNlIGJ1dHRvbiBcXFwicG9wXFxcIiB1cG9uIGNsaWNraW5nICovXFxuLm9wZW5SZXNpemVNZW51OmFjdGl2ZSxcXG4ubG9ja2VkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDF2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG5cXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDEyMywgMTIzLCAxMjMpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucGxheSxcXG4ucGF1c2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc3BlZWQge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5kaXYgc3Zne1xcbiAgICBmaWxsOiB2YXIoLS1tZW51LXByaW1hcnkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIG1ha2UgcGxheS9wYXVzZSBidXR0b24gXFxcInBvcFxcXCIgdXBvbiBjbGlja2luZyAqL1xcbi5wbGF5OmFjdGl2ZSxcXG4ucGF1c2U6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5wbGF5YmFja1NwZWVkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29scyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhbmdlJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7ICBcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWVudS1wcmltYXJ5KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbGl2ZS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lbnUtcHJpbWFyeSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uZ3JheWVkT3V0IHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC43KTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3dzLCBjb2xzKSB7XG4gICAgICAgIHRoaXMuYm9vbEJvYXJkID0gW107XG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93Kyspe1xuICAgICAgICAgICAgY29uc3QgdGVtcE5ld0FyciA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBjb2xzOyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRoaXMuZGV0ZXJtaW5lSW5pdExpZmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvb2xCb2FyZC5wdXNoKHRlbXBOZXdBcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Um93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9vbEJvYXJkLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRDb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib29sQm9hcmRbMF0ubGVuZ3RoXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9vbEJvYXJkO1xuICAgIH1cblxuICAgIHN0ZXBGb3J3YXJkKCl7XG4gICAgICAgIGNvbnN0IG5laWdib3JBcnIgPSB0aGlzLmdldE5laWdoYm9yQXJyKCk7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgICAgICBmb3IobGV0IGNoZWNrUm93ID0gMDsgY2hlY2tSb3cgPCB0aGlzLmJvb2xCb2FyZC5sZW5ndGg7IGNoZWNrUm93Kyspe1xuICAgICAgICAgICAgbGV0IHRlbXBOZXdBcnIgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgY2hlY2tDb2wgPSAwOyBjaGVja0NvbCA8IHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XS5sZW5ndGg7IGNoZWNrQ29sKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XVtjaGVja0NvbF0peyAvLyBpZiB0aGUgY2VsbCBpcyBjdXJyZW50bHkgYWxpdmU7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5laWdib3JBcnJbY2hlY2tSb3ddW2NoZWNrQ29sXSA9PSAyIHx8IG5laWdib3JBcnJbY2hlY2tSb3ddW2NoZWNrQ29sXSA9PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaCh0cnVlKTsgLy8gYWxpdmUgd2l0aCB0d28gb3IgMyBuZWlnaGJvcnMsIHN1cnZpdmVzXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKGZhbHNlKTsgLy8gYWxpdmUgd2l0aCB0b28gbWFueS9mZXcgbmVpZ2hib3JzLCBkaWVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXsgLy8gaWYgdGhlIGNlbGwgaXMgY3VycmVudGx5IGRlYWRcbiAgICAgICAgICAgICAgICAgICAgaWYobmVpZ2JvckFycltjaGVja1Jvd11bY2hlY2tDb2xdID09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRydWUpOyAvLyBkZWFkIHdpdGggdGhyZWUgbmVpZ2hib3JzLCBjb21lcyBhbGl2ZVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaChmYWxzZSk7IC8vIGRlYWQgd2l0aCAhMyBuZWlnaGJvcnMsIHN0YXlzIGRlYWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKHRlbXBOZXdBcnIpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgdGhpcy5ib29sQm9hcmQgPSBuZXdBcnI7XG4gICAgfVxuXG4gICAgZ2V0TmVpZ2hib3JBcnIoKXtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG4gICAgICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib29sQm9hcmQubGVuZ3RoOyByb3crKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTmV3QXJyID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYm9vbEJvYXJkW3Jvd10ubGVuZ3RoOyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRoaXMuZ2V0TmVpZ2hib3JzKHJvdywgY29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQucHVzaCh0ZW1wTmV3QXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGdldE5laWdoYm9ycyhyb3csIGNvbCl7XG4gICAgICAgIGxldCByZXQgPSAwO1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIDl4OSBzdXJyb3VuZGluZyB0aGUgY2VsbCBwYXNzZWQgaW5cbiAgICAgICAgZm9yKGxldCBjaGVja1JvdyA9IHJvdy0xOyBjaGVja1JvdyA8IHJvdysyOyBjaGVja1JvdysrKXtcbiAgICAgICAgICAgIGZvcihsZXQgY2hlY2tDb2wgPSBjb2wtMTsgY2hlY2tDb2wgPCBjb2wrMjsgY2hlY2tDb2wrKyl7XG4gICAgICAgICAgICAgICAgLy8gaXMgaW4gYm91bmRzXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tSb3cgPCB0aGlzLmJvb2xCb2FyZC5sZW5ndGggJiYgY2hlY2tSb3cgPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbCA8IHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XS5sZW5ndGggJiYgY2hlY2tDb2wgPj0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpc24ndCB0aGUgY2VsbCBpdHNlbGZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoY2hlY2tSb3cgPT0gcm93ICYmIGNoZWNrQ29sID09IGNvbCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XVtjaGVja0NvbF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5lSW5pdExpZmUoKXtcbiAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA8IC40KXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICBzdGF0aWMgYm9hcmQgPSBuZXcgQm9hcmQoNTAsIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAod2luZG93LmlubmVySGVpZ2h0IC8gNTApKSk7XG4gICAgc3RhdGljIHJvd0NvbExvY2sgPSB0cnVlO1xuICAgIHN0YXRpYyBwbGF5YmFja1NwZWVkID0gKDEwNTAgLSA0NzUpO1xuICAgIHN0YXRpYyB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5ib2FyZC5zdGVwRm9yd2FyZCgpO1xuICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICB9LCB0aGlzLnBsYXliYWNrU3BlZWQpO1xuICAgIHN0YXRpYyBwbGF5aW5nID0gdHJ1ZTtcblxuICAgIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKXtcbiAgICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgICAgVUkuYWRkV2luZG93UmVzaXplRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgVUkuYWRkUGxheWJhY2tNZW51TGlzdGVuZXJzKCk7XG4gICAgICAgIFVJLmFkZFJlc2l6ZU1lbnVMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUmVzaXplTWVudUxpc3RlbmVycygpe1xuICAgICAgICAvLyBvcGVuIHRoZSByZXNpemUgbWVudVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblJlc2l6ZU1lbnUgLm9wZW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAub3BlbicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblJlc2l6ZU1lbnUgLmNsb3NlJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemVNZW51JykuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2xvc2UgdGhlIHJlc2l6ZSBtZW51XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAuY2xvc2UnKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5SZXNpemVNZW51IC5vcGVuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemVNZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbG9jayByb3dzICYgY29sdW1uc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2tlZCAubG9ja09wZW5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2tlZCAubG9ja09wZW5cIikuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrQ2xvc2VkXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbEljb24sIC5jb2xzXCIpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJncmF5ZWRPdXRcIikpO1xuICAgICAgICAgICAgdGhpcy5yb3dDb2xMb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgIFVJLmxvY2tCb2FyZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdW5sb2NrIHJvd3MgJiBjb2x1bW5zXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrQ2xvc2VkXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NrZWQgLmxvY2tDbG9zZWRcIikuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrT3BlblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xJY29uLCAuY29sc1wiKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JheWVkT3V0XCIpKTtcbiAgICAgICAgICAgIHRoaXMucm93Q29sTG9jayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcm93IHNpemluZyBhZGp1c3RtZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb3dzXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93cyA9ICgxNjAgLSBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZih0aGlzLnJvd0NvbExvY2spe1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQobmV3Um93cywgMSk7XG4gICAgICAgICAgICAgICAgVUkubG9ja0JvYXJkKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBVSS51cGRhdGVSb3dzKG5ld1Jvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29sIHNpemluZyBhZGp1c3RtZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb2xzXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoIXRoaXMucm93Q29sTG9jayl7XG4gICAgICAgICAgICAgICAgVUkudXBkYXRlQ29scygxNjAgLSBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVDb2xzKG5ld0NvbHMpIHtcbiAgICAgICAgaWYodGhpcy5wbGF5aW5nKXtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBuZXdDb2xzKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBuZXdDb2xzKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVSb3dzKG5ld1Jvd3MpIHtcbiAgICAgICAgaWYodGhpcy5wbGF5aW5nKXtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKG5ld1Jvd3MsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKG5ld1Jvd3MsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2NrQm9hcmQoKSB7XG4gICAgICAgIGlmKHRoaXMucGxheWluZyl7XG4gICAgICAgICAgICBVSS5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmJvYXJkLmdldFJvd3MoKSwgTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvICh3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLmJvYXJkLmdldFJvd3MoKSkpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gKHdpbmRvdy5pbm5lckhlaWdodCAvIHRoaXMuYm9hcmQuZ2V0Um93cygpKSkpO1xuICAgICAgICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgICAgICAgIFVJLmRyYXdCb2FyZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFkanVzdENTU1Jvd3NDb2xzKCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXJvd3MnLCB0aGlzLmJvYXJkLmdldFJvd3MoKSk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY29scycsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkV2luZG93UmVzaXplRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMucm93Q29sTG9jayl7XG4gICAgICAgICAgICAgICAgVUkubG9ja0JvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQbGF5YmFja01lbnVMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBVSS5wbGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwbGF5YmFja1NwZWVkXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5YmFja1NwZWVkID0gKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tTcGVlZCA9ICgxMDUwIC0gdGhpcy5wbGF5YmFja1NwZWVkKTtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWluZyl7XG4gICAgICAgICAgICAgICAgVUkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBVSS5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5zdGVwRm9yd2FyZCgpO1xuICAgICAgICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICAgIH0sIHRoaXMucGxheWJhY2tTcGVlZCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhdXNlKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZHJhd0JvYXJkKCl7XG4gICAgICAgIGNvbnN0IGJvYXJkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBjb25zdCBib29sQm9hcmQgPSB0aGlzLmJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgb2xkIGJvYXJkXG4gICAgICAgIGJvYXJkRWxlbS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGJvb2xCb2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0JvYXJkUGllY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZihjb2wpe1xuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFBpZWNlLmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkUGllY2UuY2xhc3NMaXN0LmFkZCgnZGVhZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZEVsZW0uYXBwZW5kQ2hpbGQobmV3Qm9hcmRQaWVjZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=