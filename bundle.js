/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@jaames/iro/dist/iro.es.js":
/*!*************************************************!*\
  !*** ./node_modules/@jaames/iro/dist/iro.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */

var n,u,t,i,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l){ n[u]=l[u]; }return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i,r,o,f=arguments;if(l=s({},l),arguments.length>3){ for(u=[u],t=3;t<arguments.length;t++){ u.push(f[t]); } }if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps){ for(i in n.defaultProps){ void 0===l[i]&&(l[i]=n.defaultProps[i]); } }return o=l.key,null!=(r=l.ref)&&delete l.ref,null!=o&&delete l.key,v(n,l,o,r)}function v(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function d(n){return n.children}function y(n){if(null==n||"boolean"==typeof n){ return null; }if("string"==typeof n||"number"==typeof n){ return v(null,n,null,null); }if(null!=n.__e||null!=n.__c){var l=v(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l){ return n.__p?w(n.__p,n.__p.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&(i=n.debounceRendering,(n.debounceRendering||t)(_));}function _(){var n,l,t,i,r,o,f,e;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();){ n.__d&&(t=void 0,i=void 0,o=(r=(l=n).__v).__e,f=l.__P,e=l.u,l.u=!1,f&&(t=[],i=$(f,r,s({},r),l.__n,void 0!==f.ownerSVGElement,null,t,e,null==o?w(r):o),j(t,r),i!=o&&g(r))); }}function b(n,l,u,t,i,r,o,c,s){var h,v,p,d,y,m,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=r?r[0]:_?w(u,0):null),h=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type){ k[h]=void 0; }else { for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;} }if(d=$(n,u,p=p||f,t,i,r,o,null,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==m&&(m=d),null!=u.l){ d=u.l,u.l=null; }else if(r==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n){ n.appendChild(d); }else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2){ if(y==d){ break n; } }n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.l=d);}}return h++,u}),l.__e=m,null!=r&&"function"!=typeof l.type){ for(h=r.length;h--;){ null!=r[h]&&a(r[h]); } }for(h=_;h--;){ null!=k[h]&&D(k[h],k[h]); }if(g){ for(h=0;h<g.length;h++){ A(g[h],g[++h],g[++h]); } }}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n){ l&&u.push(l(null)); }else if(Array.isArray(n)){ for(var t=0;t<n.length;t++){ x(n[t],l,u); } }else { u.push(l?l(y(n)):n); }return u}function C(n,l,u,t,i){var r;for(r in u){ r in l||N(n,r,null,u[r],t); }for(r in l){ i&&"function"!=typeof l[r]||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],t); }}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function N(n,l,u,t,i){var r,o,f,e,c;if("key"===(l=i?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l){ if(r=n.style,"string"==typeof u){ r.cssText=u; }else{if("string"==typeof t&&(r.cssText="",t=null),t){ for(o in t){ u&&o in u||P(r,o,""); } }if(u){ for(f in u){ t&&u[f]===t[f]||P(r,f,u[f]); } }} }else{ "o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,T,e),(n.t||(n.t={}))[l]=u):n.removeEventListener(l,T,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u)); }}function T(l){return this.t[l.type](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,c,a){var h,v,p,y,w,g,k,_,C,P,N=u.type;if(void 0!==u.constructor){ return null; }(h=n.__b)&&h(u);try{n:if("function"==typeof N){if(_=u.props,C=(h=N.contextType)&&i[h.__c],P=h?C?C.props.value:h.__p:i,t.__c?k=(v=u.__c=t.__c).__p=v.__E:("prototype"in N&&N.prototype.render?u.__c=v=new N(_,P):(u.__c=v=new m(_,P),v.constructor=N,v.render=H),C&&C.sub(v),v.props=_,v.state||(v.state={}),v.context=P,v.__n=i,p=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=N.getDerivedStateFromProps&&s(v.__s==v.state?v.__s=s({},v.__s):v.__s,N.getDerivedStateFromProps(_,v.__s)),p){ null==N.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&f.push(v); }else{if(null==N.getDerivedStateFromProps&&null==e&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(_,P),!e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(_,v.__s,P)){for(v.props=_,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=null!=c?c!==t.__e?c:t.__e:null,u.__k=t.__k,h=0;h<u.__k.length;h++){ u.__k[h]&&(u.__k[h].__p=u); }break n}null!=v.componentWillUpdate&&v.componentWillUpdate(_,v.__s,P);}for(y=v.props,w=v.state,v.context=P,v.props=_,v.state=v.__s,(h=n.__r)&&h(u),v.__d=!1,v.__v=u,v.__P=l,h=v.render(v.props,v.state,v.context),u.__k=x(null!=h&&h.type==d&&null==h.key?h.props.children:h),null!=v.getChildContext&&(i=s(s({},i),v.getChildContext())),p||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(y,w)),b(l,u,t,i,r,o,f,c,a),v.base=u.__e;h=v.__h.pop();){ v.__s&&(v.state=v.__s),h.call(v); }p||null==y||null==v.componentDidUpdate||v.componentDidUpdate(y,w,g),k&&(v.__E=v.__p=null);}else { u.__e=z(t.__e,u,t,i,r,o,f,a); }(h=n.diffed)&&h(u);}catch(l){n.__e(l,u,t);}return u.__e}function j(l,u){for(var t;t=l.pop();){ try{t.componentDidMount();}catch(l){n.__e(l,t.__v);} }n.__c&&n.__c(u);}function z(n,l,u,t,i,r,o,c){var s,a,h,v,p=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=r){ for(s=0;s<r.length;s++){ if(null!=(a=r[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,r[s]=null;break} } }if(null==n){if(null===l.type){ return document.createTextNode(d); }n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),r=null;}return null===l.type?p!==d&&(null!=r&&(r[r.indexOf(n)]=null),n.data=d):l!==u&&(null!=r&&(r=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,c||(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||"")),C(n,d,p,i,c),l.__k=l.props.children,v||b(n,l,u,t,"foreignObject"!==l.type&&i,r,o,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))),n}function A(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function D(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&A(i,null,u),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount){ try{i.componentWillUnmount();}catch(l){n.__e(l,u);} }i.base=i.__P=null;}if(i=l.__k){ for(o=0;o<i.length;o++){ i[o]&&D(i[o],u,t); } }null!=r&&a(r);}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,o,c;n.__p&&n.__p(l,u),o=(i=t===r)?null:t&&t.__k||u.__k,l=h(d,null,[l]),c=[],$(u,i?u.__k=l:(t||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:e.slice.call(u.childNodes),c,!1,t||f,i),j(c,l);}n={},m.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.u=!1,l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(n&&this.__h.push(n),this.u=!0,k(this));},m.prototype.render=d,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=n.debounceRendering,n.__e=function(n,l,u){for(var t;l=l.__p;){ if((t=l.__c)&&!t.__p){ try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError){ t.setState(t.constructor.getDerivedStateFromError(n)); }else{if(null==t.componentDidCatch){ continue; }t.componentDidCatch(n);}return k(t.__E=t)}catch(l){n=l;} } }throw n},r=f,o=0;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) { descriptor.writable = true; }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) { _defineProperties(Constructor.prototype, protoProps); }
  if (staticProps) { _defineProperties(Constructor, staticProps); }
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    var arguments$1 = arguments;

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments$1[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// Some regular expressions for rgb() and hsl() Colors are borrowed from tinyColor
// https://github.com/bgrins/TinyColor
// Kelvin temperature math borrowed from Neil Barlett's implementation
// from https://github.com/neilbartlett/color-temperature
// https://www.w3.org/TR/css3-values/#integers
var CSS_INTEGER = '[-\\+]?\\d+%?'; // http://www.w3.org/TR/css3-values/#number-value

var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number. Don't capture the either/or, just the entire outcome

var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')'; // Parse function params
// Parens and commas are optional, and this also allows for whitespace between numbers

var PERMISSIVE_MATCH_3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
var PERMISSIVE_MATCH_4 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?'; // Regex patterns for functional color strings

var REGEX_FUNCTIONAL_RGB = new RegExp('rgb' + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_RGBA = new RegExp('rgba' + PERMISSIVE_MATCH_4);
var REGEX_FUNCTIONAL_HSL = new RegExp('hsl' + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_HSLA = new RegExp('hsla' + PERMISSIVE_MATCH_4); // Color string parsing regex

var HEX_START = '^(?:#?|0x?)';
var HEX_INT_SINGLE = '([0-9a-fA-F]{1})';
var HEX_INT_DOUBLE = '([0-9a-fA-F]{2})';
var REGEX_HEX_3 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
var REGEX_HEX_4 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
var REGEX_HEX_6 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$');
var REGEX_HEX_8 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$'); // Kelvin temperature bounds

var KELVIN_MIN = 2000;
var KELVIN_MAX = 40000; // Math shorthands

var log = Math.log,
    round = Math.round,
    floor = Math.floor;
/**
 * @desc Clamp a number between a min and max value
 * @param num - input value
 * @param min - min allowed value
 * @param max - max allowed value
 */

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
/**
 * @desc Parse a css unit string - either regular int or a percentage number
 * @param str - css unit string
 * @param max - max unit value, used for calculating percentages
 */


function parseUnit(str, max) {
  var isPercentage = str.indexOf('%') > -1;
  var num = parseFloat(str);
  return isPercentage ? max / 100 * num : num;
}
/**
 * @desc Parse hex str to an int
 * @param str - hex string to parse
 */


function parseHexInt(str) {
  return parseInt(str, 16);
}
/**
 * @desc Convert nunber into to 2-digit hex
 * @param int - number to convert
 */


function intToHex(_int) {
  return _int.toString(16).padStart(2, '0');
}

var IroColor =
/*#__PURE__*/
function () {
  /**
    * @constructor Color object
    * @param value - initial color value
  */
  function IroColor(value, onChange) {
    // The default Color value
    this.$ = {
      h: 0,
      s: 0,
      v: 0,
      a: 1
    };
    if (value) { this.set(value); } // The watch callback function for this Color will be stored here

    this.onChange = onChange;
    this.initialValue = _extends({}, this.$); // copy initial value
  }
  /**
    * @desc Set the Color from any valid value
    * @param value - new color value
  */


  var _proto = IroColor.prototype;

  _proto.set = function set(value) {
    if (typeof value === 'string') {
      if (/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(value)) {
        this.hexString = value;
      } else if (/^rgba?/.test(value)) {
        this.rgbString = value;
      } else if (/^hsla?/.test(value)) {
        this.hslString = value;
      }
    } else if (typeof value === 'object') {
      if (value instanceof IroColor) {
        this.hsva = value.hsva;
      } else if ('r' in value && 'g' in value && 'b' in value) {
        this.rgb = value;
      } else if ('h' in value && 's' in value && 'v' in value) {
        this.hsv = value;
      } else if ('h' in value && 's' in value && 'l' in value) {
        this.hsl = value;
      } else if ('kelvin' in value) {
        this.kelvin = value.kelvin;
      }
    } else {
      throw new Error('Invalid color value');
    }
  }
  /**
    * @desc Shortcut to set a specific channel value
    * @param format - hsv | hsl | rgb
    * @param channel - individual channel to set, for example if model = hsl, chanel = h | s | l
    * @param value - new value for the channel
  */
  ;

  _proto.setChannel = function setChannel(format, channel, value) {
    var _extends2;

    this[format] = _extends({}, this[format], (_extends2 = {}, _extends2[channel] = value, _extends2));
  }
  /**
   * @desc Reset color back to its initial value
   */
  ;

  _proto.reset = function reset() {
    this.hsva = this.initialValue;
  }
  /**
    * @desc make new Color instance with the same value as this one
  */
  ;

  _proto.clone = function clone() {
    return new IroColor(this);
  }
  /**
   * @desc remove color onChange
   */
  ;

  _proto.unbind = function unbind() {
    this.onChange = undefined;
  }
  /**
    * @desc Convert hsv object to rgb
    * @param hsv - hsv color object
  */
  ;

  IroColor.hsvToRgb = function hsvToRgb(hsv) {
    var h = hsv.h / 60;
    var s = hsv.s / 100;
    var v = hsv.v / 100;
    var i = floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return {
      r: clamp(r * 255, 0, 255),
      g: clamp(g * 255, 0, 255),
      b: clamp(b * 255, 0, 255)
    };
  }
  /**
    * @desc Convert rgb object to hsv
    * @param rgb - rgb object
  */
  ;

  IroColor.rgbToHsv = function rgbToHsv(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var hue = 0;
    var value = max;
    var saturation = max === 0 ? 0 : delta / max;

    switch (max) {
      case min:
        hue = 0; // achromatic

        break;

      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / delta + 2;
        break;

      case b:
        hue = (r - g) / delta + 4;
        break;
    }

    return {
      h: hue * 60 % 360,
      s: clamp(saturation * 100, 0, 100),
      v: clamp(value * 100, 0, 100)
    };
  }
  /**
    * @desc Convert hsv object to hsl
    * @param hsv - hsv object
  */
  ;

  IroColor.hsvToHsl = function hsvToHsl(hsv) {
    var s = hsv.s / 100;
    var v = hsv.v / 100;
    var l = (2 - s) * v;
    var divisor = l <= 1 ? l : 2 - l; // Avoid division by zero when lightness is close to zero

    var saturation = divisor < 1e-9 ? 0 : s * v / divisor;
    return {
      h: hsv.h,
      s: clamp(saturation * 100, 0, 100),
      l: clamp(l * 50, 0, 100)
    };
  }
  /**
    * @desc Convert hsl object to hsv
    * @param hsl - hsl object
  */
  ;

  IroColor.hslToHsv = function hslToHsv(hsl) {
    var l = hsl.l * 2;
    var s = hsl.s * (l <= 100 ? l : 200 - l) / 100; // Avoid division by zero when l + s is near 0

    var saturation = l + s < 1e-9 ? 0 : 2 * s / (l + s);
    return {
      h: hsl.h,
      s: clamp(saturation * 100, 0, 100),
      v: clamp((l + s) / 2, 0, 100)
    };
  }
  /**
    * @desc Convert a kelvin temperature to an approx, RGB value
    * @param kelvin - kelvin temperature
  */
  ;

  IroColor.kelvinToRgb = function kelvinToRgb(kelvin) {
    var temp = kelvin / 100;
    var r, g, b;

    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }

    return {
      r: clamp(floor(r), 0, 255),
      g: clamp(floor(g), 0, 255),
      b: clamp(floor(b), 0, 255)
    };
  }
  /**
   * @desc Convert an RGB color to an approximate kelvin temperature
   * @param kelvin - kelvin temperature
  */
  ;

  IroColor.rgbToKelvin = function rgbToKelvin(rgb) {
    var r = rgb.r,
        b = rgb.b;
    var eps = 0.4;
    var minTemp = KELVIN_MIN;
    var maxTemp = KELVIN_MAX;
    var temp;

    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;

      var _rgb = IroColor.kelvinToRgb(temp);

      if (_rgb.b / _rgb.r >= b / r) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }

    return temp;
  };

  _createClass(IroColor, [{
    key: "hsv",
    get: function get() {
      // value is cloned to allow changes to be made to the values before passing them back
      var value = this.$;
      return {
        h: value.h,
        s: value.s,
        v: value.v
      };
    },
    set: function set(newValue) {
      var oldValue = this.$;
      newValue = _extends({}, oldValue, newValue); // If this Color is being watched for changes we need to compare the new and old values to check the difference
      // Otherwise we can just be lazy

      if (this.onChange) {
        // Compute changed values
        var changes = {
          h: false,
          v: false,
          s: false,
          a: false
        };

        for (var key in oldValue) {
          changes[key] = newValue[key] != oldValue[key];
        }

        this.$ = newValue; // If the value has changed, call hook callback

        if (changes.h || changes.s || changes.v || changes.a) { this.onChange(this, changes); }
      } else {
        this.$ = newValue;
      }
    }
  }, {
    key: "hsva",
    get: function get() {
      return _extends({}, this.$);
    },
    set: function set(value) {
      this.hsv = value;
    }
  }, {
    key: "hue",
    get: function get() {
      return this.$.h;
    },
    set: function set(value) {
      this.hsv = {
        h: value
      };
    }
  }, {
    key: "saturation",
    get: function get() {
      return this.$.s;
    },
    set: function set(value) {
      this.hsv = {
        s: value
      };
    }
  }, {
    key: "value",
    get: function get() {
      return this.$.v;
    },
    set: function set(value) {
      this.hsv = {
        v: value
      };
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.$.a;
    },
    set: function set(value) {
      this.hsv = _extends({}, this.hsv, {
        a: value
      });
    }
  }, {
    key: "kelvin",
    get: function get() {
      return IroColor.rgbToKelvin(this.rgb);
    },
    set: function set(value) {
      this.rgb = IroColor.kelvinToRgb(value);
    }
  }, {
    key: "red",
    get: function get() {
      var rgb = this.rgb;
      return rgb.r;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        r: value
      });
    }
  }, {
    key: "green",
    get: function get() {
      var rgb = this.rgb;
      return rgb.g;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        g: value
      });
    }
  }, {
    key: "blue",
    get: function get() {
      var rgb = this.rgb;
      return rgb.b;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        b: value
      });
    }
  }, {
    key: "rgb",
    get: function get() {
      var _IroColor$hsvToRgb = IroColor.hsvToRgb(this.$),
          r = _IroColor$hsvToRgb.r,
          g = _IroColor$hsvToRgb.g,
          b = _IroColor$hsvToRgb.b;

      return {
        r: round(r),
        g: round(g),
        b: round(b)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor.rgbToHsv(value), {
        a: value.a === undefined ? 1 : value.a
      });
    }
  }, {
    key: "rgba",
    get: function get() {
      return _extends({}, this.rgb, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.rgb = value;
    }
  }, {
    key: "hsl",
    get: function get() {
      var _IroColor$hsvToHsl = IroColor.hsvToHsl(this.$),
          h = _IroColor$hsvToHsl.h,
          s = _IroColor$hsvToHsl.s,
          l = _IroColor$hsvToHsl.l;

      return {
        h: round(h),
        s: round(s),
        l: round(l)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor.hslToHsv(value), {
        a: value.a === undefined ? 1 : value.a
      });
    }
  }, {
    key: "hsla",
    get: function get() {
      return _extends({}, this.hsl, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.hsl = value;
    }
  }, {
    key: "rgbString",
    get: function get() {
      var rgb = this.rgb;
      return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    },
    set: function set(value) {
      var match;
      var r,
          g,
          b,
          a = 1;

      if (match = REGEX_FUNCTIONAL_RGB.exec(value)) {
        r = parseUnit(match[1], 255);
        g = parseUnit(match[2], 255);
        b = parseUnit(match[3], 255);
      } else if (match = REGEX_FUNCTIONAL_RGBA.exec(value)) {
        r = parseUnit(match[1], 255);
        g = parseUnit(match[2], 255);
        b = parseUnit(match[3], 255);
        a = parseUnit(match[4], 1);
      }

      if (match) {
        this.rgb = {
          r: r,
          g: g,
          b: b,
          a: a
        };
      } else {
        throw new Error('Invalid rgb string');
      }
    }
  }, {
    key: "rgbaString",
    get: function get() {
      var rgba = this.rgba;
      return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
    },
    set: function set(value) {
      this.rgbString = value;
    }
  }, {
    key: "hexString",
    get: function get() {
      var rgb = this.rgb;
      return "#" + intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
    },
    set: function set(value) {
      var match;
      var r,
          g,
          b,
          a = 255;

      if (match = REGEX_HEX_3.exec(value)) {
        r = parseHexInt(match[1]) * 17;
        g = parseHexInt(match[2]) * 17;
        b = parseHexInt(match[3]) * 17;
      } else if (match = REGEX_HEX_4.exec(value)) {
        r = parseHexInt(match[1]) * 17;
        g = parseHexInt(match[2]) * 17;
        b = parseHexInt(match[3]) * 17;
        a = parseHexInt(match[4]) * 17;
      } else if (match = REGEX_HEX_6.exec(value)) {
        r = parseHexInt(match[1]);
        g = parseHexInt(match[2]);
        b = parseHexInt(match[3]);
      } else if (match = REGEX_HEX_8.exec(value)) {
        r = parseHexInt(match[1]);
        g = parseHexInt(match[2]);
        b = parseHexInt(match[3]);
        a = parseHexInt(match[4]);
      }

      if (match) {
        this.rgb = {
          r: r,
          g: g,
          b: b,
          a: a / 255
        };
      } else {
        throw new Error('Invalid hex string');
      }
    }
  }, {
    key: "hex8String",
    get: function get() {
      var rgba = this.rgba;
      return "#" + intToHex(rgba.r) + intToHex(rgba.g) + intToHex(rgba.b) + intToHex(floor(rgba.a * 255));
    },
    set: function set(value) {
      this.hexString = value;
    }
  }, {
    key: "hslString",
    get: function get() {
      var hsl = this.hsl;
      return "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
    },
    set: function set(value) {
      var match;
      var h,
          s,
          l,
          a = 1;

      if (match = REGEX_FUNCTIONAL_HSL.exec(value)) {
        h = parseUnit(match[1], 360);
        s = parseUnit(match[2], 100);
        l = parseUnit(match[3], 100);
      } else if (match = REGEX_FUNCTIONAL_HSLA.exec(value)) {
        h = parseUnit(match[1], 360);
        s = parseUnit(match[2], 100);
        l = parseUnit(match[3], 100);
        a = parseUnit(match[4], 1);
      }

      if (match) {
        this.hsl = {
          h: h,
          s: s,
          l: l,
          a: a
        };
      } else {
        throw new Error('Invalid hsl string');
      }
    }
  }, {
    key: "hslaString",
    get: function get() {
      var hsla = this.hsla;
      return "hsla(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
    },
    set: function set(value) {
      this.hslString = value;
    }
  }]);

  return IroColor;
}();

var sliderDefaultOptions = {
  sliderShape: 'bar',
  sliderType: 'value',
  minTemperature: 2200,
  maxTemperature: 11000
};
/**
 * @desc Get the bounding dimensions of the slider
 * @param props - slider props
 */

function getSliderDimensions(props) {
  var _sliderSize;

  var width = props.width,
      sliderSize = props.sliderSize,
      borderWidth = props.borderWidth,
      handleRadius = props.handleRadius,
      padding = props.padding,
      sliderShape = props.sliderShape;
  var ishorizontal = props.layoutDirection === 'horizontal'; // automatically calculate sliderSize if its not defined

  sliderSize = (_sliderSize = sliderSize) != null ? _sliderSize : padding * 2 + handleRadius * 2;

  if (sliderShape === 'circle') {
    return {
      handleStart: props.padding + props.handleRadius,
      handleRange: width - padding * 2 - handleRadius * 2,
      width: width,
      height: width,
      cx: width / 2,
      cy: width / 2,
      radius: width / 2 - borderWidth / 2
    };
  } else {
    return {
      handleStart: sliderSize / 2,
      handleRange: width - sliderSize,
      radius: sliderSize / 2,
      x: 0,
      y: 0,
      width: ishorizontal ? sliderSize : width,
      height: ishorizontal ? width : sliderSize
    };
  }
}
/**
 * @desc Get the current slider value for a given color, as a percentage
 * @param props - slider props
 * @param color
 */

function getCurrentSliderValue(props, color) {
  var hsva = color.hsva;
  var rgb = color.rgb;

  switch (props.sliderType) {
    case 'red':
      return rgb.r / 2.55;

    case 'green':
      return rgb.g / 2.55;

    case 'blue':
      return rgb.b / 2.55;

    case 'alpha':
      return hsva.a * 100;

    case 'kelvin':
      var minTemperature = props.minTemperature,
          maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      var percent = (color.kelvin - minTemperature) / temperatureRange * 100; // clmap percentage

      return Math.max(0, Math.min(percent, 100));

    case 'hue':
      return hsva.h /= 3.6;

    case 'saturation':
      return hsva.s;

    case 'value':
    default:
      return hsva.v;
  }
}
/**
 * @desc Get the current slider value from user input
 * @param props - slider props
 * @param x - global input x position
 * @param y - global input y position
 */

function getSliderValueFromInput(props, x, y) {
  var _getSliderDimensions = getSliderDimensions(props),
      handleRange = _getSliderDimensions.handleRange,
      handleStart = _getSliderDimensions.handleStart;

  var handlePos;

  if (props.layoutDirection === 'horizontal') {
    handlePos = -1 * y + handleRange + handleStart;
  } else {
    handlePos = x - handleStart;
  } // clamp handle position


  handlePos = Math.max(Math.min(handlePos, handleRange), 0);
  var percent = Math.round(100 / handleRange * handlePos);

  switch (props.sliderType) {
    case 'kelvin':
      var minTemperature = props.minTemperature,
          maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      return minTemperature + temperatureRange * (percent / 100);

    case 'alpha':
      return percent / 100;

    case 'hue':
      return percent * 3.6;

    case 'red':
    case 'blue':
    case 'green':
      return percent * 2.55;

    default:
      return percent;
  }
}
/**
 * @desc Get the current handle position for a given color
 * @param props - slider props
 * @param color
 */

function getSliderHandlePosition(props, color) {
  var _getSliderDimensions2 = getSliderDimensions(props),
      width = _getSliderDimensions2.width,
      height = _getSliderDimensions2.height,
      handleRange = _getSliderDimensions2.handleRange,
      handleStart = _getSliderDimensions2.handleStart;

  var ishorizontal = props.layoutDirection === 'horizontal';
  var sliderValue = getCurrentSliderValue(props, color);
  var midPoint = ishorizontal ? width / 2 : height / 2;
  var handlePos = handleStart + sliderValue / 100 * handleRange;

  if (ishorizontal) {
    handlePos = -1 * handlePos + handleRange + handleStart * 2;
  }

  return {
    x: ishorizontal ? midPoint : handlePos,
    y: ishorizontal ? handlePos : midPoint
  };
}
/**
 * @desc Get the gradient stops for a slider
 * @param props - slider props
 * @param color
 */

function getSliderGradient(props, color) {
  var hsv = color.hsv;
  var rgb = color.rgb;

  switch (props.sliderType) {
    case 'red':
      return [[0, "rgb(" + 0 + "," + rgb.g + "," + rgb.b + ")"], [100, "rgb(" + 255 + "," + rgb.g + "," + rgb.b + ")"]];

    case 'green':
      return [[0, "rgb(" + rgb.r + "," + 0 + "," + rgb.b + ")"], [100, "rgb(" + rgb.r + "," + 255 + "," + rgb.b + ")"]];

    case 'blue':
      return [[0, "rgb(" + rgb.r + "," + rgb.g + "," + 0 + ")"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + 255 + ")"]];

    case 'alpha':
      return [[0, "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0)"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"]];

    case 'kelvin':
      var stops = [];
      var min = props.minTemperature;
      var max = props.maxTemperature;
      var numStops = 8;
      var range = max - min;

      for (var kelvin = min, stop = 0; kelvin < max; kelvin += range / numStops, stop += 1) {
        var _IroColor$kelvinToRgb = IroColor.kelvinToRgb(kelvin),
            r = _IroColor$kelvinToRgb.r,
            g = _IroColor$kelvinToRgb.g,
            b = _IroColor$kelvinToRgb.b;

        stops.push([100 / numStops * stop, "rgb(" + r + "," + g + "," + b + ")"]);
      }

      return stops;

    case 'hue':
      return [[0, '#f00'], [16.666, '#ff0'], [33.333, '#0f0'], [50, '#0ff'], [66.666, '#00f'], [83.333, '#f0f'], [100, '#f00']];

    case 'saturation':
      var noSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 0,
        v: hsv.v
      });
      var fullSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 100,
        v: hsv.v
      });
      return [[0, "hsl(" + noSat.h + "," + noSat.s + "%," + noSat.l + "%)"], [100, "hsl(" + fullSat.h + "," + fullSat.s + "%," + fullSat.l + "%)"]];

    case 'value':
    default:
      var hsl = IroColor.hsvToHsl({
        h: hsv.h,
        s: hsv.s,
        v: 100
      });
      return [[0, '#000'], [100, "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)"]];
  }
}

var TAU = Math.PI * 2; // javascript's modulo operator doesn't produce positive numbers with negative input
// https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

var mod = function mod(a, n) {
  return (a % n + n) % n;
}; // distance between points (x, y) and (0, 0)


var dist = function dist(x, y) {
  return Math.sqrt(x * x + y * y);
};
/**
 * @param props - wheel props
 * @internal
 */


function getHandleRange(props) {
  return props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
}
/**
 * Returns true if point (x, y) lands inside the wheel
 * @param props - wheel props
 * @param x
 * @param y
 */


function isInputInsideWheel(props, x, y) {
  var _getWheelDimensions = getWheelDimensions(props),
      cx = _getWheelDimensions.cx,
      cy = _getWheelDimensions.cy;

  var r = props.width / 2;
  return dist(cx - x, cy - y) < r;
}
/**
 * @desc Get the point as the center of the wheel
 * @param props - wheel props
 */

function getWheelDimensions(props) {
  var r = props.width / 2;
  return {
    width: props.width,
    radius: r - props.borderWidth,
    cx: r,
    cy: r
  };
}
/**
 * @desc Translate an angle according to wheelAngle and wheelDirection
 * @param props - wheel props
 * @param angle - input angle
 */

function translateWheelAngle(props, angle, invert) {
  var wheelAngle = props.wheelAngle;
  var wheelDirection = props.wheelDirection; // inverted and clockwisee

  if (invert && wheelDirection === 'clockwise') { angle = wheelAngle + angle; } // clockwise (input handling)
  else if (wheelDirection === 'clockwise') { angle = 360 - wheelAngle + angle; } // inverted and anticlockwise
    else if (invert && wheelDirection === 'anticlockwise') { angle = wheelAngle + 180 - angle; } // anticlockwise (input handling)
      else if (wheelDirection === 'anticlockwise') { angle = wheelAngle - angle; }
  return mod(angle, 360);
}
/**
 * @desc Get the current handle position for a given color
 * @param props - wheel props
 * @param color
 */

function getWheelHandlePosition(props, color) {
  var hsv = color.hsv;

  var _getWheelDimensions2 = getWheelDimensions(props),
      cx = _getWheelDimensions2.cx,
      cy = _getWheelDimensions2.cy;

  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.wheelDirection === 'clockwise' ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction
  };
}
/**
 * @desc Get the current wheel value from user input
 * @param props - wheel props
 * @param x - global input x position
 * @param y - global input y position
 */

function getWheelValueFromInput(props, x, y) {
  var _getWheelDimensions3 = getWheelDimensions(props),
      cx = _getWheelDimensions3.cx,
      cy = _getWheelDimensions3.cy;

  var handleRange = getHandleRange(props);
  x = cx - x;
  y = cy - y; // Calculate the hue by converting the angle to radians

  var hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU)); // Find the point's distance from the center of the wheel
  // This is used to show the saturation level

  var handleDist = Math.min(dist(x, y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round(100 / handleRange * handleDist)
  };
}
/**
 * @desc Get the bounding dimensions of the box
 * @param props - box props
 */

function getBoxDimensions(props) {
  var width = props.width,
      boxHeight = props.boxHeight,
      padding = props.padding,
      handleRadius = props.handleRadius;
  return {
    width: width,
    height: boxHeight != null ? boxHeight : width,
    radius: padding + handleRadius
  };
}
/**
 * @desc Get the current box value from user input
 * @param props - box props
 * @param x - global input x position
 * @param y - global input y position
 */

function getBoxValueFromInput(props, x, y) {
  var _getBoxDimensions = getBoxDimensions(props),
      width = _getBoxDimensions.width,
      height = _getBoxDimensions.height,
      radius = _getBoxDimensions.radius;

  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  var percentX = (x - handleStart) / handleRangeX * 100;
  var percentY = (y - handleStart) / handleRangeY * 100;
  return {
    s: Math.max(0, Math.min(percentX, 100)),
    v: Math.max(0, Math.min(100 - percentY, 100))
  };
}
/**
 * @desc Get the current box handle position for a given color
 * @param props - box props
 * @param color
 */

function getBoxHandlePosition(props, color) {
  var _getBoxDimensions2 = getBoxDimensions(props),
      width = _getBoxDimensions2.width,
      height = _getBoxDimensions2.height,
      radius = _getBoxDimensions2.radius;

  var hsv = color.hsv;
  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  return {
    x: handleStart + hsv.s / 100 * handleRangeX,
    y: handleStart + (handleRangeY - hsv.v / 100 * handleRangeY)
  };
}
/**
 * @desc Get the gradient stops for a box
 * @param props - box props
 * @param color
 */

function getBoxGradients(props, color) {
  var hue = color.hue;
  return [// saturation gradient
  [[0, '#fff'], [100, "hsl(" + hue + ",100%,50%)"]], // lightness gradient
  [[0, 'rgba(0,0,0,0)'], [100, '#000']]];
}

// Keep track of html <base> elements for resolveSvgUrl
// getElementsByTagName returns a live HTMLCollection, which stays in sync with the DOM tree
// So it only needs to be called once
var BASE_ELEMENTS;
/**
 * @desc Resolve an SVG reference URL
 * This is required to work around how Safari and iOS webviews handle gradient URLS under certain conditions
 * If a page is using a client-side routing library which makes use of the HTML <base> tag,
 * Safari won't be able to render SVG gradients properly (as they are referenced by URLs)
 * More info on the problem:
 * https://stackoverflow.com/questions/19742805/angular-and-svg-filters/19753427#19753427
 * https://github.com/jaames/iro.js/issues/18
 * https://github.com/jaames/iro.js/issues/45
 * https://github.com/jaames/iro.js/pull/89
 * @props url - SVG reference URL
 */

function resolveSvgUrl(url) {
  if (!BASE_ELEMENTS) { BASE_ELEMENTS = document.getElementsByTagName('base'); } // Sniff useragent string to check if the user is running Safari

  var ua = window.navigator.userAgent;
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  var isIos = /iPhone|iPod|iPad/i.test(ua);
  var location = window.location;
  return (isSafari || isIos) && BASE_ELEMENTS.length > 0 ? location.protocol + "//" + location.host + location.pathname + location.search + url : url;
}
/**
 * @desc Given a specifc (x, y) position, test if there's a handle there and return its index, else return null.
 *       This is used for components like the box and wheel which support multiple handles when multicolor is active
 * @props x - point x position
 * @props y - point y position
 * @props handlePositions - array of {x, y} coords for each handle
 */

function getHandleAtPoint(props, x, y, handlePositions) {
  for (var i = 0; i < handlePositions.length; i++) {
    var dX = handlePositions[i].x - x;
    var dY = handlePositions[i].y - y;
    var dist = Math.sqrt(dX * dX + dY * dY);

    if (dist < props.handleRadius) {
      return i;
    }
  }

  return null;
}

function cssBorderStyles(props) {
  return {
    boxSizing: 'border-box',
    border: props.borderWidth + "px solid " + props.borderColor
  };
}
function cssGradient(type, direction, stops) {
  return type + "-gradient(" + direction + ", " + stops.map(function (_ref) {
    var o = _ref[0],
        col = _ref[1];
    return col + " " + o + "%";
  }).join(',') + ")";
}
function cssValue(value) {
  if (typeof value === 'string') { return value; }
  return value + "px";
}

var iroColorPickerOptionDefaults = {
  width: 300,
  height: 300,
  color: '#fff',
  colors: [],
  padding: 6,
  layoutDirection: 'vertical',
  borderColor: '#fff',
  borderWidth: 0,
  handleRadius: 8,
  activeHandleRadius: null,
  handleSvg: null,
  handleProps: {
    x: 0,
    y: 0
  },
  wheelLightness: true,
  wheelAngle: 0,
  wheelDirection: 'anticlockwise',
  sliderSize: null,
  sliderMargin: 12,
  boxHeight: null
};

var SECONDARY_EVENTS = ["mousemove" /* MouseMove */, "touchmove" /* TouchMove */, "mouseup" /* MouseUp */, "touchend" /* TouchEnd */];
// Base component class for iro UI components
// This extends the Preact component class to allow them to react to mouse/touch input events by themselves
var IroComponentWrapper = /*@__PURE__*/(function (Component) {
    function IroComponentWrapper(props) {
        Component.call(this, props);
        // Generate unique ID for the component
        // This can be used to generate unique IDs for gradients, etc
        this.uid = (Math.random() + 1).toString(36).substring(5);
    }

    if ( Component ) IroComponentWrapper.__proto__ = Component;
    IroComponentWrapper.prototype = Object.create( Component && Component.prototype );
    IroComponentWrapper.prototype.constructor = IroComponentWrapper;
    IroComponentWrapper.prototype.render = function render (props) {
        var eventHandler = this.handleEvent.bind(this);
        var rootProps = {
            onMouseDown: eventHandler,
            // https://github.com/jaames/iro.js/issues/126
            // https://github.com/preactjs/preact/issues/2113#issuecomment-553408767
            ontouchstart: eventHandler,
        };
        var isHorizontal = props.layoutDirection === 'horizontal';
        var margin = props.margin === null ? props.sliderMargin : props.margin;
        var rootStyles = {
            overflow: 'visible',
            display: isHorizontal ? 'inline-block' : 'block'
        };
        // first component shouldn't have any margin
        if (props.index > 0) {
            rootStyles[isHorizontal ? 'marginLeft' : 'marginTop'] = margin;
        }
        return (h(d, null, props.children(this.uid, rootProps, rootStyles)));
    };
    // More info on handleEvent:
    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
    // TL;DR this lets us have a single point of entry for multiple events, and we can avoid callback/binding hell
    IroComponentWrapper.prototype.handleEvent = function handleEvent (e) {
        var this$1 = this;

        var inputHandler = this.props.onInput;
        // Get the screen position of the component
        var bounds = this.base.getBoundingClientRect();
        // Prefect default browser action
        e.preventDefault();
        // Detect if the event is a touch event by checking if it has the `touches` property
        // If it is a touch event, use the first touch input
        var point = e.touches ? e.changedTouches[0] : e;
        var x = point.clientX - bounds.left;
        var y = point.clientY - bounds.top;
        switch (e.type) {
            case "mousedown" /* MouseDown */:
            case "touchstart" /* TouchStart */:
                var result = inputHandler(x, y, 0 /* Start */);
                if (result !== false) {
                    SECONDARY_EVENTS.forEach(function (event) {
                        document.addEventListener(event, this$1, { passive: false });
                    });
                }
                break;
            case "mousemove" /* MouseMove */:
            case "touchmove" /* TouchMove */:
                inputHandler(x, y, 1 /* Move */);
                break;
            case "mouseup" /* MouseUp */:
            case "touchend" /* TouchEnd */:
                inputHandler(x, y, 2 /* End */);
                SECONDARY_EVENTS.forEach(function (event) {
                    document.removeEventListener(event, this$1, { passive: false });
                });
                break;
        }
    };

    return IroComponentWrapper;
}(m));

function IroHandle(props) {
    var radius = props.r;
    var url = props.url;
    var cx = radius;
    var cy = radius;
    return (h("svg", { className: ("IroHandle IroHandle--" + (props.index) + " " + (props.isActive ? 'IroHandle--isActive' : '')), style: {
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0);',
            transform: ("translate(" + (cssValue(props.x)) + ", " + (cssValue(props.y)) + ")"),
            willChange: 'transform',
            top: cssValue(-radius),
            left: cssValue(-radius),
            width: cssValue(radius * 2),
            height: cssValue(radius * 2),
            position: 'absolute',
            overflow: 'visible'
        } },
        url && (h("use", Object.assign({ xlinkHref: resolveSvgUrl(url) }, props.props))),
        !url && (h("circle", { cx: cx, cy: cy, r: radius, fill: "none", "stroke-width": 2, stroke: "#000" })),
        !url && (h("circle", { cx: cx, cy: cy, r: radius - 2, fill: props.fill, "stroke-width": 2, stroke: "#fff" }))));
}
IroHandle.defaultProps = {
    fill: 'none',
    x: 0,
    y: 0,
    r: 8,
    url: null,
    props: { x: 0, y: 0 }
};

function IroSlider(props) {
    var activeIndex = props.activeIndex;
    var activeColor = (activeIndex !== undefined && activeIndex < props.colors.length) ? props.colors[activeIndex] : props.color;
    var ref = getSliderDimensions(props);
    var width = ref.width;
    var height = ref.height;
    var radius = ref.radius;
    var handlePos = getSliderHandlePosition(props, activeColor);
    var gradient = getSliderGradient(props, activeColor);
    function handleInput(x, y, type) {
        var value = getSliderValueFromInput(props, x, y);
        props.parent.inputActive = true;
        activeColor[props.sliderType] = value;
        props.onInput(type, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroSlider", style: Object.assign({}, {position: 'relative',
            width: cssValue(width),
            height: cssValue(height),
            borderRadius: cssValue(radius),
            // checkered bg to represent alpha
            background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
            backgroundSize: '8px 8px'},
            rootStyles) }),
        h("div", { className: "IroSliderGradient", style: Object.assign({}, {position: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: cssValue(radius),
                background: cssGradient('linear', props.layoutDirection === 'horizontal' ? 'to top' : 'to right', gradient)},
                cssBorderStyles(props)) }),
        h(IroHandle, { isActive: true, index: activeColor.index, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePos.x, y: handlePos.y }))); }));
}
IroSlider.defaultProps = Object.assign({}, sliderDefaultOptions);

function IroBox(props) {
    var ref = getBoxDimensions(props);
    var width = ref.width;
    var height = ref.height;
    var radius = ref.radius;
    var colors = props.colors;
    var colorPicker = props.parent;
    var activeIndex = props.activeIndex;
    var activeColor = (activeIndex !== undefined && activeIndex < props.colors.length) ? props.colors[activeIndex] : props.color;
    var gradients = getBoxGradients(props, activeColor);
    var handlePositions = colors.map(function (color) { return getBoxHandlePosition(props, color); });
    function handleInput(x, y, inputType) {
        if (inputType === 0 /* Start */) {
            // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
            var activeHandle = getHandleAtPoint(props, x, y, handlePositions);
            // If the input hit a handle, set it as the active handle, but don't update the color
            if (activeHandle !== null) {
                colorPicker.setActiveColor(activeHandle);
            }
            // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getBoxValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
            }
        }
        // move is fired when the user has started dragging
        else if (inputType === 1 /* Move */) {
            colorPicker.inputActive = true;
            activeColor.hsv = getBoxValueFromInput(props, x, y);
        }
        // let the color picker fire input:start, input:move or input:end events
        props.onInput(inputType, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroBox", style: Object.assign({}, {width: cssValue(width),
            height: cssValue(height),
            position: 'relative'},
            rootStyles) }),
        h("div", { className: "IroBox", style: Object.assign({}, {width: '100%',
                height: '100%',
                borderRadius: cssValue(radius)},
                cssBorderStyles(props),
                {background: cssGradient('linear', 'to bottom', gradients[1])
                    + ',' +
                    cssGradient('linear', 'to right', gradients[0])}) }),
        colors.filter(function (color) { return color !== activeColor; }).map(function (color) { return (h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y })); }),
        h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y }))); }));
}

var HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
var HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';
function IroWheel(props) {
    var ref = getWheelDimensions(props);
    var width = ref.width;
    var colors = props.colors;
    var borderWidth = props.borderWidth;
    var colorPicker = props.parent;
    var activeColor = props.color;
    var hsv = activeColor.hsv;
    var handlePositions = colors.map(function (color) { return getWheelHandlePosition(props, color); });
    var circleStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxSizing: 'border-box'
    };
    function handleInput(x, y, inputType) {
        if (inputType === 0 /* Start */) {
            // input hitbox is a square, 
            // so we want to ignore any initial clicks outside the circular shape of the wheel
            if (!isInputInsideWheel(props, x, y)) {
                // returning false will cease all event handling for this interaction
                return false;
            }
            // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
            var activeHandle = getHandleAtPoint(props, x, y, handlePositions);
            // If the input hit a handle, set it as the active handle, but don't update the color
            if (activeHandle !== null) {
                colorPicker.setActiveColor(activeHandle);
            }
            // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getWheelValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
            }
        }
        // move is fired when the user has started dragging
        else if (inputType === 1 /* Move */) {
            colorPicker.inputActive = true;
            activeColor.hsv = getWheelValueFromInput(props, x, y);
        }
        // let the color picker fire input:start, input:move or input:end events
        props.onInput(inputType, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroWheel", style: Object.assign({}, {width: cssValue(width),
            height: cssValue(width),
            position: 'relative'},
            rootStyles) }),
        h("div", { className: "IroWheelHue", style: Object.assign({}, circleStyles,
                {transform: ("rotateZ(" + (props.wheelAngle + 90) + "deg)"),
                background: props.wheelDirection === 'clockwise' ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE}) }),
        h("div", { className: "IroWheelSaturation", style: Object.assign({}, circleStyles,
                {background: 'radial-gradient(circle closest-side, #fff, transparent)'}) }),
        props.wheelLightness && (h("div", { className: "IroWheelLightness", style: Object.assign({}, circleStyles,
                {background: '#000',
                opacity: 1 - hsv.v / 100}) })),
        h("div", { className: "IroWheelBorder", style: Object.assign({}, circleStyles,
                cssBorderStyles(props)) }),
        colors.filter(function (color) { return color !== activeColor; }).map(function (color) { return (h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y })); }),
        h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y }))); }));
}

function createWidget(WidgetComponent) {
    var widgetFactory = function (parent, props) {
        var widget; // will become an instance of the widget component class
        var widgetRoot = document.createElement('div');
        // Render widget into a temp DOM node
        I(h(WidgetComponent, Object.assign({}, {ref: function (ref) { return widget = ref; }},
            props)), widgetRoot);
        function mountWidget() {
            var container = parent instanceof Element ? parent : document.querySelector(parent);
            container.appendChild(widget.base);
            widget.onMount(container);
        }
        // Mount it into the DOM when the page document is ready
        if (document.readyState !== 'loading') {
            mountWidget();
        }
        else {
            document.addEventListener('DOMContentLoaded', mountWidget);
        }
        return widget;
    };
    // Allow the widget factory to inherit component prototype + static class methods
    // This makes it easier for plugin authors to extend the base widget component
    widgetFactory.prototype = WidgetComponent.prototype;
    Object.assign(widgetFactory, WidgetComponent);
    // Add reference to base component too
    widgetFactory.__component = WidgetComponent;
    return widgetFactory;
}

var IroColorPicker = /*@__PURE__*/(function (Component) {
    function IroColorPicker(props) {
        var this$1 = this;

        Component.call(this, props);
        this.colors = [];
        this.inputActive = false;
        this.events = {};
        this.activeEvents = {};
        this.deferredEvents = {};
        this.id = props.id;
        var colors = props.colors.length > 0 ? props.colors : [props.color];
        colors.forEach(function (colorValue) { return this$1.addColor(colorValue); });
        this.setActiveColor(0);
        // Pass all the props into the component's state,
        // Except we want to add the color object and make sure that refs aren't passed down to children
        this.state = Object.assign({}, props,
            {color: this.color,
            colors: this.colors,
            layout: props.layout});
    }

    if ( Component ) IroColorPicker.__proto__ = Component;
    IroColorPicker.prototype = Object.create( Component && Component.prototype );
    IroColorPicker.prototype.constructor = IroColorPicker;
    // Plubic multicolor API
    /**
    * @desc Add a color to the color picker
    * @param color new color to add
    * @param index optional color index
    */
    IroColorPicker.prototype.addColor = function addColor (color, index) {
        if ( index === void 0 ) index = this.colors.length;

        // Create a new iro.Color
        // Also bind it to onColorChange, so whenever the color changes it updates the color picker
        var newColor = new IroColor(color, this.onColorChange.bind(this));
        // Insert color @ the given index
        this.colors.splice(index, 0, newColor);
        // Reindex colors
        this.colors.forEach(function (color, index) { return color.index = index; });
        // Update picker state if necessary
        if (this.state) {
            this.setState({ colors: this.colors });
        }
        // Fire color init event
        this.deferredEmit('color:init', newColor);
    };
    /**
     * @desc Remove a color from the color picker
     * @param index color index
     */
    IroColorPicker.prototype.removeColor = function removeColor (index) {
        var color = this.colors.splice(index, 1)[0];
        // Destroy the color object -- this unbinds it from the color picker
        color.unbind();
        // Reindex colors
        this.colors.forEach(function (color, index) { return color.index = index; });
        // Update picker state if necessary
        if (this.state) {
            this.setState({ colors: this.colors });
        }
        // If the active color was removed, default active color to 0
        if (color.index === this.color.index) {
            this.setActiveColor(0);
        }
        // Fire color remove event
        this.emit('color:remove', color);
    };
    /**
     * @desc Set the currently active color
     * @param index color index
     */
    IroColorPicker.prototype.setActiveColor = function setActiveColor (index) {
        this.color = this.colors[index];
        if (this.state) {
            this.setState({ color: this.color });
        }
        // Fire color switch event
        this.emit('color:setActive', this.color);
    };
    /**
     * @desc Replace all of the current colorPicker colors
     * @param newColorValues list of new colors to add
     */
    IroColorPicker.prototype.setColors = function setColors (newColorValues, activeColorIndex) {
        var this$1 = this;
        if ( activeColorIndex === void 0 ) activeColorIndex = 0;

        // Unbind color events
        this.colors.forEach(function (color) { return color.unbind(); });
        // Destroy old colors
        this.colors = [];
        // Add new colors
        newColorValues.forEach(function (colorValue) { return this$1.addColor(colorValue); });
        // Reset active color
        this.setActiveColor(activeColorIndex);
        this.emit('color:setAll', this.colors);
    };
    // Public ColorPicker events API
    /**
     * @desc Set a callback function for an event
     * @param eventList event(s) to listen to
     * @param callback - Function called when the event is fired
     */
    IroColorPicker.prototype.on = function on (eventList, callback) {
        var this$1 = this;

        var events = this.events;
        // eventList can be an eventType string or an array of eventType strings
        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
            // Add event callback
            (events[eventType] || (events[eventType] = [])).push(callback);
            // Call deferred events
            // These are events that can be stored until a listener for them is added
            if (this$1.deferredEvents[eventType]) {
                // Deffered events store an array of arguments from when the event was called
                this$1.deferredEvents[eventType].forEach(function (args) {
                    callback.apply(null, args);
                });
                // Clear deferred events
                this$1.deferredEvents[eventType] = [];
            }
        });
    };
    /**
     * @desc Remove a callback function for an event added with on()
     * @param eventList - event(s) to listen to
     * @param callback - original callback function to remove
     */
    IroColorPicker.prototype.off = function off (eventList, callback) {
        var this$1 = this;

        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
            var callbackList = this$1.events[eventType];
            // this.emitHook('event:off', eventType, callback);
            if (callbackList)
                { callbackList.splice(callbackList.indexOf(callback), 1); }
        });
    };
    /**
     * @desc Emit an event
     * @param eventType event to emit
     */
    IroColorPicker.prototype.emit = function emit (eventType) {
        var this$1 = this;
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        var activeEvents = this.activeEvents;
        var isEventActive = activeEvents.hasOwnProperty(eventType) ? activeEvents[eventType] : false;
        // Prevent event callbacks from firing if the event is already active
        // This stops infinite loops if something in an event callback causes the same event to be fired again
        // (e.g. setting the color inside a color:change callback)
        if (!isEventActive) {
            activeEvents[eventType] = true;
            var callbackList = this.events[eventType] || [];
            callbackList.forEach(function (fn) { return fn.apply(this$1, args); });
            activeEvents[eventType] = false;
        }
    };
    /**
     * @desc Emit an event now, or save it for when the relevent event listener is added
     * @param eventType - The name of the event to emit
     */
    IroColorPicker.prototype.deferredEmit = function deferredEmit (eventType) {
        var ref;

        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
        var deferredEvents = this.deferredEvents;
        (ref = this).emit.apply(ref, [ eventType ].concat( args ));
        (deferredEvents[eventType] || (deferredEvents[eventType] = [])).push(args);
    };
    // Public utility methods
    IroColorPicker.prototype.setOptions = function setOptions (newOptions) {
        this.setState(newOptions);
    };
    /**
     * @desc Resize the color picker
     * @param width - new width
     */
    IroColorPicker.prototype.resize = function resize (width) {
        this.setOptions({ width: width });
    };
    /**
     * @desc Reset the color picker to the initial color provided in the color picker options
     */
    IroColorPicker.prototype.reset = function reset () {
        this.colors.forEach(function (color) { return color.reset(); });
        this.setState({ colors: this.colors });
    };
    /**
     * @desc Called by the createWidget wrapper when the element is mounted into the page
     * @param container - the container element for this ColorPicker instance
     */
    IroColorPicker.prototype.onMount = function onMount (container) {
        this.el = container;
        this.deferredEmit('mount', this);
    };
    // Internal methods
    /**
     * @desc React to a color update
     * @param color - current color
     * @param changes - shows which h,s,v,a color channels changed
     */
    IroColorPicker.prototype.onColorChange = function onColorChange (color, changes) {
        this.setState({ color: this.color });
        if (this.inputActive) {
            this.inputActive = false;
            this.emit('input:change', color, changes);
        }
        this.emit('color:change', color, changes);
    };
    /**
     * @desc Handle input from a UI control element
     * @param type - event type
     */
    IroColorPicker.prototype.emitInputEvent = function emitInputEvent (type, originId) {
        if (type === 0 /* Start */) {
            this.emit('input:start', this.color, originId);
        }
        else if (type === 1 /* Move */) {
            this.emit('input:move', this.color, originId);
        }
        else if (type === 2 /* End */) {
            this.emit('input:end', this.color, originId);
        }
    };
    IroColorPicker.prototype.render = function render (props, state) {
        var this$1 = this;

        var layout = state.layout;
        // use layout shorthands
        if (!Array.isArray(layout)) {
            switch (layout) {
                // TODO: implement some?
                default:
                    layout = [
                        { component: IroWheel },
                        { component: IroSlider } ];
            }
            // add transparency slider to the layout
            if (state.transparency) {
                layout.push({
                    component: IroSlider,
                    options: {
                        sliderType: 'alpha'
                    }
                });
            }
        }
        return (h("div", { class: "IroColorPicker", id: state.id, style: {
                display: state.display
            } }, layout.map(function (ref, componentIndex) {
                var UiComponent = ref.component;
                var options = ref.options;

                return (h(UiComponent, Object.assign({}, state, options, { ref: undefined, onInput: this$1.emitInputEvent.bind(this$1), parent: this$1, index: componentIndex })));
        })));
    };

    return IroColorPicker;
}(m));
IroColorPicker.defaultProps = Object.assign({}, iroColorPickerOptionDefaults,
    {colors: [],
    display: 'block',
    id: null,
    layout: 'default',
    margin: null});
var IroColorPickerWidget = createWidget(IroColorPicker);

var iro;
(function (iro) {
    iro.version = "5.5.2"; // replaced by @rollup/plugin-replace; see rollup.config.js
    iro.Color = IroColor;
    iro.ColorPicker = IroColorPickerWidget;
    var ui;
    (function (ui) {
        ui.h = h;
        ui.ComponentBase = IroComponentWrapper;
        ui.Handle = IroHandle;
        ui.Slider = IroSlider;
        ui.Wheel = IroWheel;
        ui.Box = IroBox;
    })(ui = iro.ui || (iro.ui = {}));
})(iro || (iro = {}));
var iro$1 = iro;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iro$1);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: sans-serif;\n    font-size: 16px;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    \n    --rows: 200;\n    --cols: 100;\n\n    --primary-color: rgb(214, 142, 7);\n    --secondary-color: rgb(255, 255, 255);\n    --background-color: rgb(149, 149, 149);\n\n    --border-radius: 5px;\n\n    --menu-background: rgba(176, 176, 176, 0.857);\n    --shadow-color: rgb(123, 123, 123);\n}\n\nbody {\n    margin: inherit;\n}\n\n.board {\n    margin: 0px;\n    background-color: var(--background-color);\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template: repeat(var(--rows), 1fr) / repeat(var(--cols), 1fr);\n    gap: 1px;\n}\n\n.alive {\n    background-color: var(--primary-color);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--secondary-color);\n}\n\n.colorPickerUI {\n    position: absolute;\n    bottom: calc(40vh + 60px);\n    right: 1vw;\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: 170px 170px calc(var(--border-radius) * 2) calc(var(--border-radius) * 2);\n    padding: 15px;\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.colorPickerUI .cancel,\n.colorPickerUI .submit {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    bottom: 48px;\n}\n\n.colorPickerUI .cancel {\n    left: 10px;\n}\n\n.colorPickerUI .submit {\n    right: 10px;\n}\n\n.colorPickerUI .cancel:active,\n.colorPickerUI .submit:active {\n    transform: scale(1.075);\n}\n\n.stylesMenu {\n    position: absolute;\n    bottom: calc(40vh + 60px);\n    right: 370px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n    padding: 5px;\n    gap: 5px;\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.styleMenu {\n    bottom: calc(40vh - 20px);\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.selected svg {\n    filter: drop-shadow(0px 0px 10px var(--shadow-color));\n\n}\n\n.styleMenu.open{\n    transform: translateX(-450px);\n}\n\n.styleMenu div {\n    margin: 5px;\n}\n\n.openStyleMenu,\n.styleMenuIcon,\n.saveStyle {\n    width: 35px;\n    height: 35px;\n}\n\n.primaryColor,\n.secondaryColor,\n.backgroundColor,\n.borderRadiusIcon {\n    width: 50px;\n    height: 50px;\n}\n\n.openStyleMenu:active,\n.primaryColor:active,\n.secondaryColor:active,\n.backgroundColor:active,\n.saveStyle:active {\n    transform: scale(1.075);\n}\n\n.styleMenu .saveStyle {\n    margin-right: 100px;\n}\n\n.styleMenu .styleMenuIcon,\n.styleMenu .backgroundColor,\n.styleMenu .borderRadius {\n    margin-right: 14px;\n}\n\n.primaryColor svg {\n    fill: var(--primary-color);\n}\n\n.secondaryColor svg {\n    fill: var(--secondary-color);\n}\n\n.backgroundColor svg {\n    fill: var(--background-color);\n}\n\n.resizeMenu {\n    bottom: calc(40vh - 100px);\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.resizeMenu.open{\n    transform: translateX(-450px);\n}\n\n.resizeMenu div {\n    margin: 5px;\n}\n\n.rowIcon,\n.colIcon {\n    width: 50px;\n    height: 50px;\n    margin-left: 8px;\n}\n\n.openResizeMenu,\n.resizeMenuIcon,\n.locked {\n    width: 35px;\n    height: 35px;\n}\n\n.resizeMenu .locked {\n    margin-left: 16px;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.openResizeMenu:active,\n.locked:active {\n    transform: scale(1.075);\n}\n\n.playbackMenu {\n    position: absolute;\n    bottom: 1vh;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: 50%;\n    transform: translate(-50%, 0);\n\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px rgb(123, 123, 123);\n}\n\n.playbackMenu div {\n    margin: 5px;\n}\n\n.play,\n.pause {\n    width: 50px;\n    height: 50px;\n}\n\n.playbackMenu .speed {\n    margin-left: 8px;\n}\n\n.speed,\n.refresh {\n    width: 35px;\n    height: 35px;\n}\n\ndiv svg{\n    fill: var(--secondary-color);\n    margin: 0;\n    width: inherit;\n    height: inherit;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.play:active,\n.pause:active,\n.refresh:active {\n    transform: scale(1.075);\n}\n\n.refresh {\n    position: relative;\n    right: 4px;\n}\n\n.playbackSpeed {\n    margin-right: 16px;\n}\n\n.cols {\n    margin-right: 100px;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 4px;\n    border-radius: calc(var(--border-radius) * 2);  \n    background: var(--secondary-color);\n    outline: none;\n}\n\ninput[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 100%; \n    background: var(--primary-color);\n    border: 2px solid var(--secondary-color);\n    cursor: pointer;\n}\ninput[type='range']::-webkit-slider-thumb:active {\n    transform: scale(1.075);\n    box-shadow: 0px 0px 10px var(--shadow-color);\n}\n\n.grayedOut {\n    filter: grayscale();\n    filter: opacity(.7);\n}\n\n.inactive {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: sans-serif;\n    font-size: 16px;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    \n    --rows: 200;\n    --cols: 100;\n\n    --primary-color: rgb(214, 142, 7);\n    --secondary-color: rgb(255, 255, 255);\n    --background-color: rgb(149, 149, 149);\n\n    --border-radius: 5px;\n\n    --menu-background: rgba(176, 176, 176, 0.857);\n    --shadow-color: rgb(123, 123, 123);\n}\n\nbody {\n    margin: inherit;\n}\n\n.board {\n    margin: 0px;\n    background-color: var(--background-color);\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template: repeat(var(--rows), 1fr) / repeat(var(--cols), 1fr);\n    gap: 1px;\n}\n\n.alive {\n    background-color: var(--primary-color);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--secondary-color);\n}\n\n.colorPickerUI {\n    position: absolute;\n    bottom: calc(40vh + 60px);\n    right: 1vw;\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: 170px 170px calc(var(--border-radius) * 2) calc(var(--border-radius) * 2);\n    padding: 15px;\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.colorPickerUI .cancel,\n.colorPickerUI .submit {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    bottom: 48px;\n}\n\n.colorPickerUI .cancel {\n    left: 10px;\n}\n\n.colorPickerUI .submit {\n    right: 10px;\n}\n\n.colorPickerUI .cancel:active,\n.colorPickerUI .submit:active {\n    transform: scale(1.075);\n}\n\n.stylesMenu {\n    position: absolute;\n    bottom: calc(40vh + 60px);\n    right: 370px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n    padding: 5px;\n    gap: 5px;\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.styleMenu {\n    bottom: calc(40vh - 20px);\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.selected svg {\n    filter: drop-shadow(0px 0px 10px var(--shadow-color));\n\n}\n\n.styleMenu.open{\n    transform: translateX(-450px);\n}\n\n.styleMenu div {\n    margin: 5px;\n}\n\n.openStyleMenu,\n.styleMenuIcon,\n.saveStyle {\n    width: 35px;\n    height: 35px;\n}\n\n.primaryColor,\n.secondaryColor,\n.backgroundColor,\n.borderRadiusIcon {\n    width: 50px;\n    height: 50px;\n}\n\n.openStyleMenu:active,\n.primaryColor:active,\n.secondaryColor:active,\n.backgroundColor:active,\n.saveStyle:active {\n    transform: scale(1.075);\n}\n\n.styleMenu .saveStyle {\n    margin-right: 100px;\n}\n\n.styleMenu .styleMenuIcon,\n.styleMenu .backgroundColor,\n.styleMenu .borderRadius {\n    margin-right: 14px;\n}\n\n.primaryColor svg {\n    fill: var(--primary-color);\n}\n\n.secondaryColor svg {\n    fill: var(--secondary-color);\n}\n\n.backgroundColor svg {\n    fill: var(--background-color);\n}\n\n.resizeMenu {\n    bottom: calc(40vh - 100px);\n    position: absolute;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: calc(100vw - 95px);\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px var(--shadow-color);\n}\n\n.resizeMenu.open{\n    transform: translateX(-450px);\n}\n\n.resizeMenu div {\n    margin: 5px;\n}\n\n.rowIcon,\n.colIcon {\n    width: 50px;\n    height: 50px;\n    margin-left: 8px;\n}\n\n.openResizeMenu,\n.resizeMenuIcon,\n.locked {\n    width: 35px;\n    height: 35px;\n}\n\n.resizeMenu .locked {\n    margin-left: 16px;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.openResizeMenu:active,\n.locked:active {\n    transform: scale(1.075);\n}\n\n.playbackMenu {\n    position: absolute;\n    bottom: 1vh;\n\n    display: grid;\n    grid-auto-flow: column;\n    justify-items: center;\n    align-items: center;\n\n    /* next two lines center */\n    left: 50%;\n    transform: translate(-50%, 0);\n\n\n    background-color: var(--menu-background);\n    border: 3px solid var(--secondary-color);\n    border-radius: calc(var(--border-radius) * 2);\n\n    box-shadow: 0px 0px 15px rgb(123, 123, 123);\n}\n\n.playbackMenu div {\n    margin: 5px;\n}\n\n.play,\n.pause {\n    width: 50px;\n    height: 50px;\n}\n\n.playbackMenu .speed {\n    margin-left: 8px;\n}\n\n.speed,\n.refresh {\n    width: 35px;\n    height: 35px;\n}\n\ndiv svg{\n    fill: var(--secondary-color);\n    margin: 0;\n    width: inherit;\n    height: inherit;\n}\n\n/* make play/pause button \"pop\" upon clicking */\n.play:active,\n.pause:active,\n.refresh:active {\n    transform: scale(1.075);\n}\n\n.refresh {\n    position: relative;\n    right: 4px;\n}\n\n.playbackSpeed {\n    margin-right: 16px;\n}\n\n.cols {\n    margin-right: 100px;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 4px;\n    border-radius: calc(var(--border-radius) * 2);  \n    background: var(--secondary-color);\n    outline: none;\n}\n\ninput[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 100%; \n    background: var(--primary-color);\n    border: 2px solid var(--secondary-color);\n    cursor: pointer;\n}\ninput[type='range']::-webkit-slider-thumb:active {\n    transform: scale(1.075);\n    box-shadow: 0px 0px 10px var(--shadow-color);\n}\n\n.grayedOut {\n    filter: grayscale();\n    filter: opacity(.7);\n}\n\n.inactive {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/Style.js":
/*!******************************!*\
  !*** ./src/modules/Style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Style)
/* harmony export */ });
class Style {
    constructor(primary, secondary, background, radius){
        this.primary = primary;
        this.secondary = secondary;
        this.background = background;
        this.radius = radius;
    }

    getPrimary() {
        return this.primary;
    }

    getSecondary() {
        return this.secondary;
    }

    getBackground() {
        return this.background;
    }

    getRadius() {
        return this.radius;
    }
}

/***/ }),

/***/ "./src/modules/StyleSet.js":
/*!*********************************!*\
  !*** ./src/modules/StyleSet.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyleSet)
/* harmony export */ });
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.js */ "./src/modules/Style.js");


class StyleSet {
    constructor(){
        this.styles = [];
    }

    addStyle(style){
        this.styles[this.styles.length] = style;
    }

    getStyles(){
        return this.styles;
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
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");
/* harmony import */ var _StyleSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleSet.js */ "./src/modules/StyleSet.js");
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style.js */ "./src/modules/Style.js");

// imported color picker




class UI {
    static board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](50, Math.round(window.innerWidth / (window.innerHeight / 50)));
    static rowColLock = true;
    static playbackSpeed = (1050 - 475);
    static timer = setInterval(() => {
        this.board.stepForward();
        UI.drawBoard();
    }, this.playbackSpeed);
    static playing = true;
    static colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_1__["default"].ColorPicker('#picker');
    static currentColorBeingPicked = 'none';
    static styles = new _StyleSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    static loadHomepage(){
        UI.addDefaultStyles();
        UI.loadSavedStyles();

        UI.adjustCSSRowsCols();
        UI.addWindowResizeEventListener();
        UI.drawBoard();
        UI.addPlaybackMenuListeners();
        UI.addResizeMenuListeners();
        UI.addStyleMenuListeners();
    }

    static addDefaultStyles(){
        this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]("rgb(214, 142, 7)", "rgb(255, 255, 255)", "rgb(149, 149, 149)", "5px"));
        this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]("rgb(214, 142, 70)", "rgb(0, 0, 0)", "rgb(19, 149, 149)", "2px"));
        this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]("rgb(21, 142, 7)", "rgb(100, 100, 100)", "rgb(149, 19, 149)", "10px"));        
    }

    static loadSavedStyles(){
        const stylesMenu = document.querySelector('.stylesMenu');
        stylesMenu.textContent = '';
        this.styles.getStyles().forEach(style => {
            const background = document.createElement('div');
            background.setAttribute('style', `
                height: 50px;
                width: 50px;
                background-color: ${style.getBackground()};
                display: flex;
                align-items: center;
                justify-content: center;
            `);
            const cell = document.createElement('div');
            cell.setAttribute('style', `
                height: 35px;
                width: 35px;
                border: 1px solid ${style.getSecondary()};
                border-radius: ${style.getRadius()};
                background-color: ${style.getPrimary()};
            `);
            background.appendChild(cell);
            stylesMenu.appendChild(background);
        });
        UI.addStylesMenuListeners();
    }

    static addStylesMenuListeners() {
        const root = document.documentElement;
        const styleDivs = document.querySelectorAll('.stylesMenu > div');
        styleDivs.forEach(styleDiv => {
            styleDiv.addEventListener('click', () => {
                root.style.setProperty('--background-color', styleDiv.style.backgroundColor);
                root.style.setProperty('--primary-color', styleDiv.children[0].style.backgroundColor);
                root.style.setProperty('--secondary-color', styleDiv.children[0].style.borderColor);
                root.style.setProperty('--border-radius', styleDiv.children[0].style.borderRadius);
            });
        });
    }

    static addStyleMenuListeners() {
        // open the style menu
        document.querySelector('.openStyleMenu .open').addEventListener('click', () => {
            document.querySelector('.openStyleMenu .open').classList.add('inactive');
            document.querySelector('.openStyleMenu .close').classList.remove('inactive');
            document.querySelector('.styleMenu').classList.add('open');
            document.querySelector('.stylesMenu').classList.remove('inactive');
        });
        // close the style menu
        document.querySelector('.openStyleMenu .close').addEventListener('click', () => {
            document.querySelector('.openStyleMenu .close').classList.add('inactive');
            document.querySelector('.openStyleMenu .open').classList.remove('inactive');
            document.querySelector('.styleMenu').classList.remove('open');
            if(this.currentColorBeingPicked != 'none'){
                document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
                this.currentColorBeingPicked = 'none';
                document.querySelector(".colorPickerUI").classList.add('inactive');
            }
            document.querySelector('.stylesMenu').classList.add('inactive');
        });
        // border radius adjustment
        document.querySelector('input[name="borderRadius"]').addEventListener('input', (e) => {
            const root = document.documentElement;
            root.style.setProperty('--border-radius', e.target.value + "px");
        });
        // click on a color to change
        document.querySelectorAll(".primaryColor, .secondaryColor, .backgroundColor").forEach(element => element.addEventListener('click', (e) => {
            if(this.currentColorBeingPicked == 'none'){
                const selection = e.target.parentNode.parentNode.classList[0];
                this.currentColorBeingPicked = selection;
                document.querySelector(`.${this.currentColorBeingPicked}`).classList.add('selected');
                document.querySelector(".colorPickerUI").classList.remove('inactive');
                UI.setColorPickerColor();
            }
        }));
        // color picker cancel button
        document.querySelector(".colorPickerUI .cancel").addEventListener('click', () => {
            document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
            this.currentColorBeingPicked = 'none';
            document.querySelector(".colorPickerUI").classList.add('inactive');
        });
        // color picker submit button
        document.querySelector(".colorPickerUI .submit").addEventListener('click', () => {
            document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
            document.querySelector(".colorPickerUI").classList.add('inactive');
            UI.pickColor();
            this.currentColorBeingPicked = 'none';
        });
        // new saved style button
        document.querySelector('.saveStyle').addEventListener('click', () => {
            const root = document.documentElement;
            const newStyle = new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                getComputedStyle(root).getPropertyValue('--primary-color'),
                getComputedStyle(root).getPropertyValue('--secondary-color'),
                getComputedStyle(root).getPropertyValue('--background-color'),
                getComputedStyle(root).getPropertyValue('--border-radius')
            );
            this.styles.addStyle(newStyle);
            UI.loadSavedStyles();
        });
    }

    static setColorPickerColor() {
        const root = document.documentElement;
        let newColor;

        if(this.currentColorBeingPicked == 'primaryColor'){
            newColor = getComputedStyle(root).getPropertyValue('--primary-color');
        }else if(this.currentColorBeingPicked == 'secondaryColor'){
            newColor = getComputedStyle(root).getPropertyValue('--secondary-color');
        }else{ // background color
            newColor = getComputedStyle(root).getPropertyValue('--background-color');
        }

        this.colorPicker.color.rgbString = newColor;
    }

    static pickColor() {
        const root = document.documentElement;
        const newColor = this.colorPicker.color.rgbString;

        if(this.currentColorBeingPicked == 'primaryColor'){
            root.style.setProperty('--primary-color', newColor);
        }else if(this.currentColorBeingPicked == 'secondaryColor'){
            root.style.setProperty('--secondary-color', newColor);
        }else{ // background color
            root.style.setProperty('--background-color', newColor);
        }
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

        document.querySelector('.refresh').addEventListener('click', () => {
            UI.refreshBoard();
        });
    }

    static refreshBoard() {
        if(this.playing){
            UI.pause();
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), this.board.getCols());
            UI.drawBoard();
            UI.play();
        }else{
            this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.board.getRows(), this.board.getCols());
            UI.drawBoard();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixnRUFBZ0U7QUFDaEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7QUFFOUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsY0FBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QyxrREFBa0QsOEJBQThCO0FBQ2hGLDZDQUE2QyxvQ0FBb0M7QUFDakYsNkRBQTZELG9DQUFvQztBQUNqRyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseURBQXlEOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7O0FBRUE7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7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V0FBVyxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcs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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ1g7O0FBRXRCLDhDQUE4QyxtRUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9AamFhbWVzL2lyby9kaXN0L2lyby5lcy5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9tb2R1bGVzL0JvYXJkLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvbW9kdWxlcy9TdHlsZS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL21vZHVsZXMvU3R5bGVTZXQuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBpcm8uanMgdjUuNS4yXG4gKiAyMDE2LTIwMjEgSmFtZXMgRGFuaWVsXG4gKiBMaWNlbnNlZCB1bmRlciBNUEwgMi4wXG4gKiBnaXRodWIuY29tL2phYW1lcy9pcm8uanNcbiAqL1xuXG52YXIgbix1LHQsaSxyLG8sZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8Xi0tL2k7ZnVuY3Rpb24gcyhuLGwpe2Zvcih2YXIgdSBpbiBsKXsgblt1XT1sW3VdOyB9cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKTt9ZnVuY3Rpb24gaChuLGwsdSl7dmFyIHQsaSxyLG8sZj1hcmd1bWVudHM7aWYobD1zKHt9LGwpLGFyZ3VtZW50cy5sZW5ndGg+Myl7IGZvcih1PVt1XSx0PTM7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7IHUucHVzaChmW3RdKTsgfSB9aWYobnVsbCE9dSYmKGwuY2hpbGRyZW49dSksbnVsbCE9biYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpeyBmb3IoaSBpbiBuLmRlZmF1bHRQcm9wcyl7IHZvaWQgMD09PWxbaV0mJihsW2ldPW4uZGVmYXVsdFByb3BzW2ldKTsgfSB9cmV0dXJuIG89bC5rZXksbnVsbCE9KHI9bC5yZWYpJiZkZWxldGUgbC5yZWYsbnVsbCE9byYmZGVsZXRlIGwua2V5LHYobixsLG8scil9ZnVuY3Rpb24gdihsLHUsdCxpKXt2YXIgcj17dHlwZTpsLHByb3BzOnUsa2V5OnQscmVmOmksX19rOm51bGwsX19wOm51bGwsX19iOjAsX19lOm51bGwsbDpudWxsLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMH07cmV0dXJuIG4udm5vZGUmJm4udm5vZGUocikscn1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHkobil7aWYobnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKXsgcmV0dXJuIG51bGw7IH1pZihcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4peyByZXR1cm4gdihudWxsLG4sbnVsbCxudWxsKTsgfWlmKG51bGwhPW4uX19lfHxudWxsIT1uLl9fYyl7dmFyIGw9dihuLnR5cGUsbi5wcm9wcyxuLmtleSxudWxsKTtyZXR1cm4gbC5fX2U9bi5fX2UsbH1yZXR1cm4gbn1mdW5jdGlvbiBtKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sO31mdW5jdGlvbiB3KG4sbCl7aWYobnVsbD09bCl7IHJldHVybiBuLl9fcD93KG4uX19wLG4uX19wLl9fay5pbmRleE9mKG4pKzEpOm51bGw7IH1mb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKXsgaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7IHJldHVybiB1Ll9fZTsgfSB9cmV0dXJuIFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT93KG4pOm51bGx9ZnVuY3Rpb24gZyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX19wKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKyl7IGlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9IH1yZXR1cm4gZyhuKX19ZnVuY3Rpb24gayhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiYxPT09dS5wdXNoKGwpfHxpIT09bi5kZWJvdW5jZVJlbmRlcmluZykmJihpPW4uZGVib3VuY2VSZW5kZXJpbmcsKG4uZGVib3VuY2VSZW5kZXJpbmd8fHQpKF8pKTt9ZnVuY3Rpb24gXygpe3ZhciBuLGwsdCxpLHIsbyxmLGU7Zm9yKHUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBsLl9fdi5fX2Itbi5fX3YuX19ifSk7bj11LnBvcCgpOyl7IG4uX19kJiYodD12b2lkIDAsaT12b2lkIDAsbz0ocj0obD1uKS5fX3YpLl9fZSxmPWwuX19QLGU9bC51LGwudT0hMSxmJiYodD1bXSxpPSQoZixyLHMoe30sciksbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCx0LGUsbnVsbD09bz93KHIpOm8pLGoodCxyKSxpIT1vJiZnKHIpKSk7IH19ZnVuY3Rpb24gYihuLGwsdSx0LGkscixvLGMscyl7dmFyIGgsdixwLGQseSxtLGcsaz11JiZ1Ll9fa3x8ZSxfPWsubGVuZ3RoO2lmKGM9PWYmJihjPW51bGwhPXI/clswXTpfP3codSwwKTpudWxsKSxoPTAsbC5fX2s9eChsLl9fayxmdW5jdGlvbih1KXtpZihudWxsIT11KXtpZih1Ll9fcD1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWtbaF0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7IGtbaF09dm9pZCAwOyB9ZWxzZSB7IGZvcih2PTA7djxfO3YrKyl7aWYoKHA9a1t2XSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtrW3ZdPXZvaWQgMDticmVha31wPW51bGw7fSB9aWYoZD0kKG4sdSxwPXB8fGYsdCxpLHIsbyxudWxsLGMscyksKHY9dS5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSkucHVzaCh2LHUuX19jfHxkLHUpLG51bGwhPWQpe2lmKG51bGw9PW0mJihtPWQpLG51bGwhPXUubCl7IGQ9dS5sLHUubD1udWxsOyB9ZWxzZSBpZihyPT1wfHxkIT1jfHxudWxsPT1kLnBhcmVudE5vZGUpe246aWYobnVsbD09Y3x8Yy5wYXJlbnROb2RlIT09bil7IG4uYXBwZW5kQ2hpbGQoZCk7IH1lbHNle2Zvcih5PWMsdj0wOyh5PXkubmV4dFNpYmxpbmcpJiZ2PF87dis9Mil7IGlmKHk9PWQpeyBicmVhayBuOyB9IH1uLmluc2VydEJlZm9yZShkLGMpO31cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpO31jPWQubmV4dFNpYmxpbmcsXCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlJiYobC5sPWQpO319cmV0dXJuIGgrKyx1fSksbC5fX2U9bSxudWxsIT1yJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsLnR5cGUpeyBmb3IoaD1yLmxlbmd0aDtoLS07KXsgbnVsbCE9cltoXSYmYShyW2hdKTsgfSB9Zm9yKGg9XztoLS07KXsgbnVsbCE9a1toXSYmRChrW2hdLGtbaF0pOyB9aWYoZyl7IGZvcihoPTA7aDxnLmxlbmd0aDtoKyspeyBBKGdbaF0sZ1srK2hdLGdbKytoXSk7IH0gfX1mdW5jdGlvbiB4KG4sbCx1KXtpZihudWxsPT11JiYodT1bXSksbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKXsgbCYmdS5wdXNoKGwobnVsbCkpOyB9ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKXsgZm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0KyspeyB4KG5bdF0sbCx1KTsgfSB9ZWxzZSB7IHUucHVzaChsP2woeShuKSk6bik7IH1yZXR1cm4gdX1mdW5jdGlvbiBDKG4sbCx1LHQsaSl7dmFyIHI7Zm9yKHIgaW4gdSl7IHIgaW4gbHx8TihuLHIsbnVsbCx1W3JdLHQpOyB9Zm9yKHIgaW4gbCl7IGkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwidmFsdWVcIj09PXJ8fFwiY2hlY2tlZFwiPT09cnx8dVtyXT09PWxbcl18fE4obixyLGxbcl0sdVtyXSx0KTsgfX1mdW5jdGlvbiBQKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09XCJudW1iZXJcIj09dHlwZW9mIHUmJiExPT09Yy50ZXN0KGwpP3UrXCJweFwiOm51bGw9PXU/XCJcIjp1O31mdW5jdGlvbiBOKG4sbCx1LHQsaSl7dmFyIHIsbyxmLGUsYztpZihcImtleVwiPT09KGw9aT9cImNsYXNzTmFtZVwiPT09bD9cImNsYXNzXCI6bDpcImNsYXNzXCI9PT1sP1wiY2xhc3NOYW1lXCI6bCl8fFwiY2hpbGRyZW5cIj09PWwpO2Vsc2UgaWYoXCJzdHlsZVwiPT09bCl7IGlmKHI9bi5zdHlsZSxcInN0cmluZ1wiPT10eXBlb2YgdSl7IHIuY3NzVGV4dD11OyB9ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHIuY3NzVGV4dD1cIlwiLHQ9bnVsbCksdCl7IGZvcihvIGluIHQpeyB1JiZvIGluIHV8fFAocixvLFwiXCIpOyB9IH1pZih1KXsgZm9yKGYgaW4gdSl7IHQmJnVbZl09PT10W2ZdfHxQKHIsZix1W2ZdKTsgfSB9fSB9ZWxzZXsgXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/KGU9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxjPWwudG9Mb3dlckNhc2UoKSxsPShjIGluIG4/YzpsKS5zbGljZSgyKSx1Pyh0fHxuLmFkZEV2ZW50TGlzdGVuZXIobCxULGUpLChuLnR8fChuLnQ9e30pKVtsXT11KTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxULGUpKTpcImxpc3RcIiE9PWwmJlwidGFnTmFtZVwiIT09bCYmXCJmb3JtXCIhPT1sJiYhaSYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL154bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSk7IH19ZnVuY3Rpb24gVChsKXtyZXR1cm4gdGhpcy50W2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uICQobCx1LHQsaSxyLG8sZixlLGMsYSl7dmFyIGgsdixwLHksdyxnLGssXyxDLFAsTj11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3Rvcil7IHJldHVybiBudWxsOyB9KGg9bi5fX2IpJiZoKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIE4pe2lmKF89dS5wcm9wcyxDPShoPU4uY29udGV4dFR5cGUpJiZpW2guX19jXSxQPWg/Qz9DLnByb3BzLnZhbHVlOmguX19wOmksdC5fX2M/az0odj11Ll9fYz10Ll9fYykuX19wPXYuX19FOihcInByb3RvdHlwZVwiaW4gTiYmTi5wcm90b3R5cGUucmVuZGVyP3UuX19jPXY9bmV3IE4oXyxQKToodS5fX2M9dj1uZXcgbShfLFApLHYuY29uc3RydWN0b3I9Tix2LnJlbmRlcj1IKSxDJiZDLnN1Yih2KSx2LnByb3BzPV8sdi5zdGF0ZXx8KHYuc3RhdGU9e30pLHYuY29udGV4dD1QLHYuX19uPWkscD12Ll9fZD0hMCx2Ll9faD1bXSksbnVsbD09di5fX3MmJih2Ll9fcz12LnN0YXRlKSxudWxsIT1OLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmcyh2Ll9fcz09di5zdGF0ZT92Ll9fcz1zKHt9LHYuX19zKTp2Ll9fcyxOLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfLHYuX19zKSkscCl7IG51bGw9PU4uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZmLnB1c2godik7IH1lbHNle2lmKG51bGw9PU4uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsPT1lJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfLFApLCFlJiZudWxsIT12LnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT12LnNob3VsZENvbXBvbmVudFVwZGF0ZShfLHYuX19zLFApKXtmb3Iodi5wcm9wcz1fLHYuc3RhdGU9di5fX3Msdi5fX2Q9ITEsdi5fX3Y9dSx1Ll9fZT1udWxsIT1jP2MhPT10Ll9fZT9jOnQuX19lOm51bGwsdS5fX2s9dC5fX2ssaD0wO2g8dS5fX2subGVuZ3RoO2grKyl7IHUuX19rW2hdJiYodS5fX2tbaF0uX19wPXUpOyB9YnJlYWsgbn1udWxsIT12LmNvbXBvbmVudFdpbGxVcGRhdGUmJnYuY29tcG9uZW50V2lsbFVwZGF0ZShfLHYuX19zLFApO31mb3IoeT12LnByb3BzLHc9di5zdGF0ZSx2LmNvbnRleHQ9UCx2LnByb3BzPV8sdi5zdGF0ZT12Ll9fcywoaD1uLl9fcikmJmgodSksdi5fX2Q9ITEsdi5fX3Y9dSx2Ll9fUD1sLGg9di5yZW5kZXIodi5wcm9wcyx2LnN0YXRlLHYuY29udGV4dCksdS5fX2s9eChudWxsIT1oJiZoLnR5cGU9PWQmJm51bGw9PWgua2V5P2gucHJvcHMuY2hpbGRyZW46aCksbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJihpPXMocyh7fSxpKSx2LmdldENoaWxkQ29udGV4dCgpKSkscHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGc9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHcpKSxiKGwsdSx0LGkscixvLGYsYyxhKSx2LmJhc2U9dS5fX2U7aD12Ll9faC5wb3AoKTspeyB2Ll9fcyYmKHYuc3RhdGU9di5fX3MpLGguY2FsbCh2KTsgfXB8fG51bGw9PXl8fG51bGw9PXYuY29tcG9uZW50RGlkVXBkYXRlfHx2LmNvbXBvbmVudERpZFVwZGF0ZSh5LHcsZyksayYmKHYuX19FPXYuX19wPW51bGwpO31lbHNlIHsgdS5fX2U9eih0Ll9fZSx1LHQsaSxyLG8sZixhKTsgfShoPW4uZGlmZmVkKSYmaCh1KTt9Y2F0Y2gobCl7bi5fX2UobCx1LHQpO31yZXR1cm4gdS5fX2V9ZnVuY3Rpb24gaihsLHUpe2Zvcih2YXIgdDt0PWwucG9wKCk7KXsgdHJ5e3QuY29tcG9uZW50RGlkTW91bnQoKTt9Y2F0Y2gobCl7bi5fX2UobCx0Ll9fdik7fSB9bi5fX2MmJm4uX19jKHUpO31mdW5jdGlvbiB6KG4sbCx1LHQsaSxyLG8sYyl7dmFyIHMsYSxoLHYscD11LnByb3BzLGQ9bC5wcm9wcztpZihpPVwic3ZnXCI9PT1sLnR5cGV8fGksbnVsbD09biYmbnVsbCE9cil7IGZvcihzPTA7czxyLmxlbmd0aDtzKyspeyBpZihudWxsIT0oYT1yW3NdKSYmKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpKXtuPWEscltzXT1udWxsO2JyZWFrfSB9IH1pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXsgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpOyB9bj1pP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbC50eXBlKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSkscj1udWxsO31yZXR1cm4gbnVsbD09PWwudHlwZT9wIT09ZCYmKG51bGwhPXImJihyW3IuaW5kZXhPZihuKV09bnVsbCksbi5kYXRhPWQpOmwhPT11JiYobnVsbCE9ciYmKHI9ZS5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLGg9KHA9dS5wcm9wc3x8ZikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGN8fCh2fHxoKSYmKHYmJmgmJnYuX19odG1sPT1oLl9faHRtbHx8KG4uaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSksQyhuLGQscCxpLGMpLGwuX19rPWwucHJvcHMuY2hpbGRyZW4sdnx8YihuLGwsdSx0LFwiZm9yZWlnbk9iamVjdFwiIT09bC50eXBlJiZpLHIsbyxmLGMpLGN8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT1kLnZhbHVlJiZkLnZhbHVlIT09bi52YWx1ZSYmKG4udmFsdWU9bnVsbD09ZC52YWx1ZT9cIlwiOmQudmFsdWUpLFwiY2hlY2tlZFwiaW4gZCYmdm9pZCAwIT09ZC5jaGVja2VkJiZkLmNoZWNrZWQhPT1uLmNoZWNrZWQmJihuLmNoZWNrZWQ9ZC5jaGVja2VkKSkpLG59ZnVuY3Rpb24gQShsLHUsdCl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGw/bCh1KTpsLmN1cnJlbnQ9dTt9Y2F0Y2gobCl7bi5fX2UobCx0KTt9fWZ1bmN0aW9uIEQobCx1LHQpe3ZhciBpLHIsbztpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwoaT1sLnJlZikmJkEoaSxudWxsLHUpLHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZXx8KHQ9bnVsbCE9KHI9bC5fX2UpKSxsLl9fZT1sLmw9bnVsbCxudWxsIT0oaT1sLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpeyB0cnl7aS5jb21wb25lbnRXaWxsVW5tb3VudCgpO31jYXRjaChsKXtuLl9fZShsLHUpO30gfWkuYmFzZT1pLl9fUD1udWxsO31pZihpPWwuX19rKXsgZm9yKG89MDtvPGkubGVuZ3RoO28rKyl7IGlbb10mJkQoaVtvXSx1LHQpOyB9IH1udWxsIT1yJiZhKHIpO31mdW5jdGlvbiBIKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEkobCx1LHQpe3ZhciBpLG8sYztuLl9fcCYmbi5fX3AobCx1KSxvPShpPXQ9PT1yKT9udWxsOnQmJnQuX19rfHx1Ll9fayxsPWgoZCxudWxsLFtsXSksYz1bXSwkKHUsaT91Ll9faz1sOih0fHx1KS5fX2s9bCxvfHxmLGYsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsdCYmIWk/W3RdOm8/bnVsbDplLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSxjLCExLHR8fGYsaSksaihjLGwpO31uPXt9LG0ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU9dGhpcy5fX3MhPT10aGlzLnN0YXRlJiZ0aGlzLl9fc3x8KHRoaXMuX19zPXMoe30sdGhpcy5zdGF0ZSkpOyhcImZ1bmN0aW9uXCIhPXR5cGVvZiBufHwobj1uKHUsdGhpcy5wcm9wcykpKSYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYodGhpcy51PSExLGwmJnRoaXMuX19oLnB1c2gobCksayh0aGlzKSk7fSxtLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKG4mJnRoaXMuX19oLnB1c2gobiksdGhpcy51PSEwLGsodGhpcykpO30sbS5wcm90b3R5cGUucmVuZGVyPWQsdT1bXSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGk9bi5kZWJvdW5jZVJlbmRlcmluZyxuLl9fZT1mdW5jdGlvbihuLGwsdSl7Zm9yKHZhciB0O2w9bC5fX3A7KXsgaWYoKHQ9bC5fX2MpJiYhdC5fX3ApeyB0cnl7aWYodC5jb25zdHJ1Y3RvciYmbnVsbCE9dC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IpeyB0LnNldFN0YXRlKHQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKTsgfWVsc2V7aWYobnVsbD09dC5jb21wb25lbnREaWRDYXRjaCl7IGNvbnRpbnVlOyB9dC5jb21wb25lbnREaWRDYXRjaChuKTt9cmV0dXJuIGsodC5fX0U9dCl9Y2F0Y2gobCl7bj1sO30gfSB9dGhyb3cgbn0scj1mLG89MDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgeyBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSB7IF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IH1cbiAgaWYgKHN0YXRpY1Byb3BzKSB7IF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IH1cbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50cyQxW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8vIFNvbWUgcmVndWxhciBleHByZXNzaW9ucyBmb3IgcmdiKCkgYW5kIGhzbCgpIENvbG9ycyBhcmUgYm9ycm93ZWQgZnJvbSB0aW55Q29sb3Jcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvVGlueUNvbG9yXG4vLyBLZWx2aW4gdGVtcGVyYXR1cmUgbWF0aCBib3Jyb3dlZCBmcm9tIE5laWwgQmFybGV0dCdzIGltcGxlbWVudGF0aW9uXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jaW50ZWdlcnNcbnZhciBDU1NfSU5URUdFUiA9ICdbLVxcXFwrXT9cXFxcZCslPyc7IC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNudW1iZXItdmFsdWVcblxudmFyIENTU19OVU1CRVIgPSAnWy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslPyc7IC8vIEFsbG93IHBvc2l0aXZlL25lZ2F0aXZlIGludGVnZXIvbnVtYmVyLiBEb24ndCBjYXB0dXJlIHRoZSBlaXRoZXIvb3IsIGp1c3QgdGhlIGVudGlyZSBvdXRjb21lXG5cbnZhciBDU1NfVU5JVCA9ICcoPzonICsgQ1NTX05VTUJFUiArICcpfCg/OicgKyBDU1NfSU5URUdFUiArICcpJzsgLy8gUGFyc2UgZnVuY3Rpb24gcGFyYW1zXG4vLyBQYXJlbnMgYW5kIGNvbW1hcyBhcmUgb3B0aW9uYWwsIGFuZCB0aGlzIGFsc28gYWxsb3dzIGZvciB3aGl0ZXNwYWNlIGJldHdlZW4gbnVtYmVyc1xuXG52YXIgUEVSTUlTU0lWRV9NQVRDSF8zID0gJ1tcXFxcc3xcXFxcKF0rKCcgKyBDU1NfVU5JVCArICcpWyx8XFxcXHNdKygnICsgQ1NTX1VOSVQgKyAnKVssfFxcXFxzXSsoJyArIENTU19VTklUICsgJylcXFxccypcXFxcKT8nO1xudmFyIFBFUk1JU1NJVkVfTUFUQ0hfNCA9ICdbXFxcXHN8XFxcXChdKygnICsgQ1NTX1VOSVQgKyAnKVssfFxcXFxzXSsoJyArIENTU19VTklUICsgJylbLHxcXFxcc10rKCcgKyBDU1NfVU5JVCArICcpWyx8XFxcXHNdKygnICsgQ1NTX1VOSVQgKyAnKVxcXFxzKlxcXFwpPyc7IC8vIFJlZ2V4IHBhdHRlcm5zIGZvciBmdW5jdGlvbmFsIGNvbG9yIHN0cmluZ3NcblxudmFyIFJFR0VYX0ZVTkNUSU9OQUxfUkdCID0gbmV3IFJlZ0V4cCgncmdiJyArIFBFUk1JU1NJVkVfTUFUQ0hfMyk7XG52YXIgUkVHRVhfRlVOQ1RJT05BTF9SR0JBID0gbmV3IFJlZ0V4cCgncmdiYScgKyBQRVJNSVNTSVZFX01BVENIXzQpO1xudmFyIFJFR0VYX0ZVTkNUSU9OQUxfSFNMID0gbmV3IFJlZ0V4cCgnaHNsJyArIFBFUk1JU1NJVkVfTUFUQ0hfMyk7XG52YXIgUkVHRVhfRlVOQ1RJT05BTF9IU0xBID0gbmV3IFJlZ0V4cCgnaHNsYScgKyBQRVJNSVNTSVZFX01BVENIXzQpOyAvLyBDb2xvciBzdHJpbmcgcGFyc2luZyByZWdleFxuXG52YXIgSEVYX1NUQVJUID0gJ14oPzojP3wweD8pJztcbnZhciBIRVhfSU5UX1NJTkdMRSA9ICcoWzAtOWEtZkEtRl17MX0pJztcbnZhciBIRVhfSU5UX0RPVUJMRSA9ICcoWzAtOWEtZkEtRl17Mn0pJztcbnZhciBSRUdFWF9IRVhfMyA9IG5ldyBSZWdFeHAoSEVYX1NUQVJUICsgSEVYX0lOVF9TSU5HTEUgKyBIRVhfSU5UX1NJTkdMRSArIEhFWF9JTlRfU0lOR0xFICsgJyQnKTtcbnZhciBSRUdFWF9IRVhfNCA9IG5ldyBSZWdFeHAoSEVYX1NUQVJUICsgSEVYX0lOVF9TSU5HTEUgKyBIRVhfSU5UX1NJTkdMRSArIEhFWF9JTlRfU0lOR0xFICsgSEVYX0lOVF9TSU5HTEUgKyAnJCcpO1xudmFyIFJFR0VYX0hFWF82ID0gbmV3IFJlZ0V4cChIRVhfU1RBUlQgKyBIRVhfSU5UX0RPVUJMRSArIEhFWF9JTlRfRE9VQkxFICsgSEVYX0lOVF9ET1VCTEUgKyAnJCcpO1xudmFyIFJFR0VYX0hFWF84ID0gbmV3IFJlZ0V4cChIRVhfU1RBUlQgKyBIRVhfSU5UX0RPVUJMRSArIEhFWF9JTlRfRE9VQkxFICsgSEVYX0lOVF9ET1VCTEUgKyBIRVhfSU5UX0RPVUJMRSArICckJyk7IC8vIEtlbHZpbiB0ZW1wZXJhdHVyZSBib3VuZHNcblxudmFyIEtFTFZJTl9NSU4gPSAyMDAwO1xudmFyIEtFTFZJTl9NQVggPSA0MDAwMDsgLy8gTWF0aCBzaG9ydGhhbmRzXG5cbnZhciBsb2cgPSBNYXRoLmxvZyxcbiAgICByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yO1xuLyoqXHJcbiAqIEBkZXNjIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gYSBtaW4gYW5kIG1heCB2YWx1ZVxyXG4gKiBAcGFyYW0gbnVtIC0gaW5wdXQgdmFsdWVcclxuICogQHBhcmFtIG1pbiAtIG1pbiBhbGxvd2VkIHZhbHVlXHJcbiAqIEBwYXJhbSBtYXggLSBtYXggYWxsb3dlZCB2YWx1ZVxyXG4gKi9cblxuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuLyoqXHJcbiAqIEBkZXNjIFBhcnNlIGEgY3NzIHVuaXQgc3RyaW5nIC0gZWl0aGVyIHJlZ3VsYXIgaW50IG9yIGEgcGVyY2VudGFnZSBudW1iZXJcclxuICogQHBhcmFtIHN0ciAtIGNzcyB1bml0IHN0cmluZ1xyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IHVuaXQgdmFsdWUsIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHBlcmNlbnRhZ2VzXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlVW5pdChzdHIsIG1heCkge1xuICB2YXIgaXNQZXJjZW50YWdlID0gc3RyLmluZGV4T2YoJyUnKSA+IC0xO1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdChzdHIpO1xuICByZXR1cm4gaXNQZXJjZW50YWdlID8gbWF4IC8gMTAwICogbnVtIDogbnVtO1xufVxuLyoqXHJcbiAqIEBkZXNjIFBhcnNlIGhleCBzdHIgdG8gYW4gaW50XHJcbiAqIEBwYXJhbSBzdHIgLSBoZXggc3RyaW5nIHRvIHBhcnNlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlSGV4SW50KHN0cikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxNik7XG59XG4vKipcclxuICogQGRlc2MgQ29udmVydCBudW5iZXIgaW50byB0byAyLWRpZ2l0IGhleFxyXG4gKiBAcGFyYW0gaW50IC0gbnVtYmVyIHRvIGNvbnZlcnRcclxuICovXG5cblxuZnVuY3Rpb24gaW50VG9IZXgoX2ludCkge1xuICByZXR1cm4gX2ludC50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbn1cblxudmFyIElyb0NvbG9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICAqIEBjb25zdHJ1Y3RvciBDb2xvciBvYmplY3RcclxuICAgICogQHBhcmFtIHZhbHVlIC0gaW5pdGlhbCBjb2xvciB2YWx1ZVxyXG4gICovXG4gIGZ1bmN0aW9uIElyb0NvbG9yKHZhbHVlLCBvbkNoYW5nZSkge1xuICAgIC8vIFRoZSBkZWZhdWx0IENvbG9yIHZhbHVlXG4gICAgdGhpcy4kID0ge1xuICAgICAgaDogMCxcbiAgICAgIHM6IDAsXG4gICAgICB2OiAwLFxuICAgICAgYTogMVxuICAgIH07XG4gICAgaWYgKHZhbHVlKSB7IHRoaXMuc2V0KHZhbHVlKTsgfSAvLyBUaGUgd2F0Y2ggY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoaXMgQ29sb3Igd2lsbCBiZSBzdG9yZWQgaGVyZVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gX2V4dGVuZHMoe30sIHRoaXMuJCk7IC8vIGNvcHkgaW5pdGlhbCB2YWx1ZVxuICB9XG4gIC8qKlxyXG4gICAgKiBAZGVzYyBTZXQgdGhlIENvbG9yIGZyb20gYW55IHZhbGlkIHZhbHVlXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSAtIG5ldyBjb2xvciB2YWx1ZVxyXG4gICovXG5cblxuICB2YXIgX3Byb3RvID0gSXJvQ29sb3IucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKC9eKD86Iz98MHg/KVswLTlhLWZBLUZdezMsOH0kLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICB0aGlzLmhleFN0cmluZyA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICgvXnJnYmE/Ly50ZXN0KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnJnYlN0cmluZyA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICgvXmhzbGE/Ly50ZXN0KHZhbHVlKSkge1xuICAgICAgICB0aGlzLmhzbFN0cmluZyA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSXJvQ29sb3IpIHtcbiAgICAgICAgdGhpcy5oc3ZhID0gdmFsdWUuaHN2YTtcbiAgICAgIH0gZWxzZSBpZiAoJ3InIGluIHZhbHVlICYmICdnJyBpbiB2YWx1ZSAmJiAnYicgaW4gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZ2IgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoJ2gnIGluIHZhbHVlICYmICdzJyBpbiB2YWx1ZSAmJiAndicgaW4gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5oc3YgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoJ2gnIGluIHZhbHVlICYmICdzJyBpbiB2YWx1ZSAmJiAnbCcgaW4gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5oc2wgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoJ2tlbHZpbicgaW4gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5rZWx2aW4gPSB2YWx1ZS5rZWx2aW47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2xvciB2YWx1ZScpO1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgU2hvcnRjdXQgdG8gc2V0IGEgc3BlY2lmaWMgY2hhbm5lbCB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gZm9ybWF0IC0gaHN2IHwgaHNsIHwgcmdiXHJcbiAgICAqIEBwYXJhbSBjaGFubmVsIC0gaW5kaXZpZHVhbCBjaGFubmVsIHRvIHNldCwgZm9yIGV4YW1wbGUgaWYgbW9kZWwgPSBoc2wsIGNoYW5lbCA9IGggfCBzIHwgbFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWUgZm9yIHRoZSBjaGFubmVsXHJcbiAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChmb3JtYXQsIGNoYW5uZWwsIHZhbHVlKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHRoaXNbZm9ybWF0XSA9IF9leHRlbmRzKHt9LCB0aGlzW2Zvcm1hdF0sIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2NoYW5uZWxdID0gdmFsdWUsIF9leHRlbmRzMikpO1xuICB9XG4gIC8qKlxyXG4gICAqIEBkZXNjIFJlc2V0IGNvbG9yIGJhY2sgdG8gaXRzIGluaXRpYWwgdmFsdWVcclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuaHN2YSA9IHRoaXMuaW5pdGlhbFZhbHVlO1xuICB9XG4gIC8qKlxyXG4gICAgKiBAZGVzYyBtYWtlIG5ldyBDb2xvciBpbnN0YW5jZSB3aXRoIHRoZSBzYW1lIHZhbHVlIGFzIHRoaXMgb25lXHJcbiAgKi9cbiAgO1xuXG4gIF9wcm90by5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgSXJvQ29sb3IodGhpcyk7XG4gIH1cbiAgLyoqXHJcbiAgICogQGRlc2MgcmVtb3ZlIGNvbG9yIG9uQ2hhbmdlXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXHJcbiAgICAqIEBkZXNjIENvbnZlcnQgaHN2IG9iamVjdCB0byByZ2JcclxuICAgICogQHBhcmFtIGhzdiAtIGhzdiBjb2xvciBvYmplY3RcclxuICAqL1xuICA7XG5cbiAgSXJvQ29sb3IuaHN2VG9SZ2IgPSBmdW5jdGlvbiBoc3ZUb1JnYihoc3YpIHtcbiAgICB2YXIgaCA9IGhzdi5oIC8gNjA7XG4gICAgdmFyIHMgPSBoc3YucyAvIDEwMDtcbiAgICB2YXIgdiA9IGhzdi52IC8gMTAwO1xuICAgIHZhciBpID0gZmxvb3IoaCk7XG4gICAgdmFyIGYgPSBoIC0gaTtcbiAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xuICAgIHZhciBtb2QgPSBpICUgNjtcbiAgICB2YXIgciA9IFt2LCBxLCBwLCBwLCB0LCB2XVttb2RdO1xuICAgIHZhciBnID0gW3QsIHYsIHYsIHEsIHAsIHBdW21vZF07XG4gICAgdmFyIGIgPSBbcCwgcCwgdCwgdiwgdiwgcV1bbW9kXTtcbiAgICByZXR1cm4ge1xuICAgICAgcjogY2xhbXAociAqIDI1NSwgMCwgMjU1KSxcbiAgICAgIGc6IGNsYW1wKGcgKiAyNTUsIDAsIDI1NSksXG4gICAgICBiOiBjbGFtcChiICogMjU1LCAwLCAyNTUpXG4gICAgfTtcbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgQ29udmVydCByZ2Igb2JqZWN0IHRvIGhzdlxyXG4gICAgKiBAcGFyYW0gcmdiIC0gcmdiIG9iamVjdFxyXG4gICovXG4gIDtcblxuICBJcm9Db2xvci5yZ2JUb0hzdiA9IGZ1bmN0aW9uIHJnYlRvSHN2KHJnYikge1xuICAgIHZhciByID0gcmdiLnIgLyAyNTU7XG4gICAgdmFyIGcgPSByZ2IuZyAvIDI1NTtcbiAgICB2YXIgYiA9IHJnYi5iIC8gMjU1O1xuICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgIHZhciBodWUgPSAwO1xuICAgIHZhciB2YWx1ZSA9IG1heDtcbiAgICB2YXIgc2F0dXJhdGlvbiA9IG1heCA9PT0gMCA/IDAgOiBkZWx0YSAvIG1heDtcblxuICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICBjYXNlIG1pbjpcbiAgICAgICAgaHVlID0gMDsgLy8gYWNocm9tYXRpY1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIHI6XG4gICAgICAgIGh1ZSA9IChnIC0gYikgLyBkZWx0YSArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZzpcbiAgICAgICAgaHVlID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgYjpcbiAgICAgICAgaHVlID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IGh1ZSAqIDYwICUgMzYwLFxuICAgICAgczogY2xhbXAoc2F0dXJhdGlvbiAqIDEwMCwgMCwgMTAwKSxcbiAgICAgIHY6IGNsYW1wKHZhbHVlICogMTAwLCAwLCAxMDApXG4gICAgfTtcbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgQ29udmVydCBoc3Ygb2JqZWN0IHRvIGhzbFxyXG4gICAgKiBAcGFyYW0gaHN2IC0gaHN2IG9iamVjdFxyXG4gICovXG4gIDtcblxuICBJcm9Db2xvci5oc3ZUb0hzbCA9IGZ1bmN0aW9uIGhzdlRvSHNsKGhzdikge1xuICAgIHZhciBzID0gaHN2LnMgLyAxMDA7XG4gICAgdmFyIHYgPSBoc3YudiAvIDEwMDtcbiAgICB2YXIgbCA9ICgyIC0gcykgKiB2O1xuICAgIHZhciBkaXZpc29yID0gbCA8PSAxID8gbCA6IDIgLSBsOyAvLyBBdm9pZCBkaXZpc2lvbiBieSB6ZXJvIHdoZW4gbGlnaHRuZXNzIGlzIGNsb3NlIHRvIHplcm9cblxuICAgIHZhciBzYXR1cmF0aW9uID0gZGl2aXNvciA8IDFlLTkgPyAwIDogcyAqIHYgLyBkaXZpc29yO1xuICAgIHJldHVybiB7XG4gICAgICBoOiBoc3YuaCxcbiAgICAgIHM6IGNsYW1wKHNhdHVyYXRpb24gKiAxMDAsIDAsIDEwMCksXG4gICAgICBsOiBjbGFtcChsICogNTAsIDAsIDEwMClcbiAgICB9O1xuICB9XG4gIC8qKlxyXG4gICAgKiBAZGVzYyBDb252ZXJ0IGhzbCBvYmplY3QgdG8gaHN2XHJcbiAgICAqIEBwYXJhbSBoc2wgLSBoc2wgb2JqZWN0XHJcbiAgKi9cbiAgO1xuXG4gIElyb0NvbG9yLmhzbFRvSHN2ID0gZnVuY3Rpb24gaHNsVG9Ic3YoaHNsKSB7XG4gICAgdmFyIGwgPSBoc2wubCAqIDI7XG4gICAgdmFyIHMgPSBoc2wucyAqIChsIDw9IDEwMCA/IGwgOiAyMDAgLSBsKSAvIDEwMDsgLy8gQXZvaWQgZGl2aXNpb24gYnkgemVybyB3aGVuIGwgKyBzIGlzIG5lYXIgMFxuXG4gICAgdmFyIHNhdHVyYXRpb24gPSBsICsgcyA8IDFlLTkgPyAwIDogMiAqIHMgLyAobCArIHMpO1xuICAgIHJldHVybiB7XG4gICAgICBoOiBoc2wuaCxcbiAgICAgIHM6IGNsYW1wKHNhdHVyYXRpb24gKiAxMDAsIDAsIDEwMCksXG4gICAgICB2OiBjbGFtcCgobCArIHMpIC8gMiwgMCwgMTAwKVxuICAgIH07XG4gIH1cbiAgLyoqXHJcbiAgICAqIEBkZXNjIENvbnZlcnQgYSBrZWx2aW4gdGVtcGVyYXR1cmUgdG8gYW4gYXBwcm94LCBSR0IgdmFsdWVcclxuICAgICogQHBhcmFtIGtlbHZpbiAtIGtlbHZpbiB0ZW1wZXJhdHVyZVxyXG4gICovXG4gIDtcblxuICBJcm9Db2xvci5rZWx2aW5Ub1JnYiA9IGZ1bmN0aW9uIGtlbHZpblRvUmdiKGtlbHZpbikge1xuICAgIHZhciB0ZW1wID0ga2VsdmluIC8gMTAwO1xuICAgIHZhciByLCBnLCBiO1xuXG4gICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgciA9IDI1NTtcbiAgICAgIGcgPSAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcCAtIDIpICsgMTA0LjQ5MjE2MTk5MzkzODg4ICogbG9nKGcpO1xuICAgICAgYiA9IHRlbXAgPCAyMCA/IDAgOiAtMjU0Ljc2OTM1MTg0MTIwOTAyICsgMC44Mjc0MDk2MDY0MDA3Mzk1ICogKGIgPSB0ZW1wIC0gMTApICsgMTE1LjY3OTk0NDAxMDY2MTQ3ICogbG9nKGIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAgLSA1NSkgLSA0MC4yNTM2NjMwOTMzMjEyNyAqIGxvZyhyKTtcbiAgICAgIGcgPSAzMjUuNDQ5NDEyNTcxMTk3NCArIDAuMDc5NDM0NTY1MzY2NjIzNDIgKiAoZyA9IHRlbXAgLSA1MCkgLSAyOC4wODUyOTYzNTA3OTU3ICogbG9nKGcpO1xuICAgICAgYiA9IDI1NTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcjogY2xhbXAoZmxvb3IociksIDAsIDI1NSksXG4gICAgICBnOiBjbGFtcChmbG9vcihnKSwgMCwgMjU1KSxcbiAgICAgIGI6IGNsYW1wKGZsb29yKGIpLCAwLCAyNTUpXG4gICAgfTtcbiAgfVxuICAvKipcclxuICAgKiBAZGVzYyBDb252ZXJ0IGFuIFJHQiBjb2xvciB0byBhbiBhcHByb3hpbWF0ZSBrZWx2aW4gdGVtcGVyYXR1cmVcclxuICAgKiBAcGFyYW0ga2VsdmluIC0ga2VsdmluIHRlbXBlcmF0dXJlXHJcbiAgKi9cbiAgO1xuXG4gIElyb0NvbG9yLnJnYlRvS2VsdmluID0gZnVuY3Rpb24gcmdiVG9LZWx2aW4ocmdiKSB7XG4gICAgdmFyIHIgPSByZ2IucixcbiAgICAgICAgYiA9IHJnYi5iO1xuICAgIHZhciBlcHMgPSAwLjQ7XG4gICAgdmFyIG1pblRlbXAgPSBLRUxWSU5fTUlOO1xuICAgIHZhciBtYXhUZW1wID0gS0VMVklOX01BWDtcbiAgICB2YXIgdGVtcDtcblxuICAgIHdoaWxlIChtYXhUZW1wIC0gbWluVGVtcCA+IGVwcykge1xuICAgICAgdGVtcCA9IChtYXhUZW1wICsgbWluVGVtcCkgKiAwLjU7XG5cbiAgICAgIHZhciBfcmdiID0gSXJvQ29sb3Iua2VsdmluVG9SZ2IodGVtcCk7XG5cbiAgICAgIGlmIChfcmdiLmIgLyBfcmdiLnIgPj0gYiAvIHIpIHtcbiAgICAgICAgbWF4VGVtcCA9IHRlbXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW5UZW1wID0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcDtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoSXJvQ29sb3IsIFt7XG4gICAga2V5OiBcImhzdlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gdmFsdWUgaXMgY2xvbmVkIHRvIGFsbG93IGNoYW5nZXMgdG8gYmUgbWFkZSB0byB0aGUgdmFsdWVzIGJlZm9yZSBwYXNzaW5nIHRoZW0gYmFja1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy4kO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaDogdmFsdWUuaCxcbiAgICAgICAgczogdmFsdWUucyxcbiAgICAgICAgdjogdmFsdWUudlxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLiQ7XG4gICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBvbGRWYWx1ZSwgbmV3VmFsdWUpOyAvLyBJZiB0aGlzIENvbG9yIGlzIGJlaW5nIHdhdGNoZWQgZm9yIGNoYW5nZXMgd2UgbmVlZCB0byBjb21wYXJlIHRoZSBuZXcgYW5kIG9sZCB2YWx1ZXMgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VcbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4ganVzdCBiZSBsYXp5XG5cbiAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIC8vIENvbXB1dGUgY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaDogZmFsc2UsXG4gICAgICAgICAgdjogZmFsc2UsXG4gICAgICAgICAgczogZmFsc2UsXG4gICAgICAgICAgYTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2xkVmFsdWUpIHtcbiAgICAgICAgICBjaGFuZ2VzW2tleV0gPSBuZXdWYWx1ZVtrZXldICE9IG9sZFZhbHVlW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiQgPSBuZXdWYWx1ZTsgLy8gSWYgdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLCBjYWxsIGhvb2sgY2FsbGJhY2tcblxuICAgICAgICBpZiAoY2hhbmdlcy5oIHx8IGNoYW5nZXMucyB8fCBjaGFuZ2VzLnYgfHwgY2hhbmdlcy5hKSB7IHRoaXMub25DaGFuZ2UodGhpcywgY2hhbmdlcyk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJCA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoc3ZhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuJCk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLmg7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSB7XG4gICAgICAgIGg6IHZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzYXR1cmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLnM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSB7XG4gICAgICAgIHM6IHZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC52O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHN2ID0ge1xuICAgICAgICB2OiB2YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWxwaGFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiQuYTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmhzdiA9IF9leHRlbmRzKHt9LCB0aGlzLmhzdiwge1xuICAgICAgICBhOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImtlbHZpblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIElyb0NvbG9yLnJnYlRvS2VsdmluKHRoaXMucmdiKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJnYiA9IElyb0NvbG9yLmtlbHZpblRvUmdiKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmdiID0gdGhpcy5yZ2I7XG4gICAgICByZXR1cm4gcmdiLnI7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZ2IgPSBfZXh0ZW5kcyh7fSwgdGhpcy5yZ2IsIHtcbiAgICAgICAgcjogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJncmVlblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJnYiA9IHRoaXMucmdiO1xuICAgICAgcmV0dXJuIHJnYi5nO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmdiID0gX2V4dGVuZHMoe30sIHRoaXMucmdiLCB7XG4gICAgICAgIGc6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJnYiA9IHRoaXMucmdiO1xuICAgICAgcmV0dXJuIHJnYi5iO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmdiID0gX2V4dGVuZHMoe30sIHRoaXMucmdiLCB7XG4gICAgICAgIGI6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmdiXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX0lyb0NvbG9yJGhzdlRvUmdiID0gSXJvQ29sb3IuaHN2VG9SZ2IodGhpcy4kKSxcbiAgICAgICAgICByID0gX0lyb0NvbG9yJGhzdlRvUmdiLnIsXG4gICAgICAgICAgZyA9IF9Jcm9Db2xvciRoc3ZUb1JnYi5nLFxuICAgICAgICAgIGIgPSBfSXJvQ29sb3IkaHN2VG9SZ2IuYjtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogcm91bmQociksXG4gICAgICAgIGc6IHJvdW5kKGcpLFxuICAgICAgICBiOiByb3VuZChiKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmhzdiA9IF9leHRlbmRzKHt9LCBJcm9Db2xvci5yZ2JUb0hzdih2YWx1ZSksIHtcbiAgICAgICAgYTogdmFsdWUuYSA9PT0gdW5kZWZpbmVkID8gMSA6IHZhbHVlLmFcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZ2JhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucmdiLCB7XG4gICAgICAgIGE6IHRoaXMuYWxwaGFcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmdiID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhzbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF9Jcm9Db2xvciRoc3ZUb0hzbCA9IElyb0NvbG9yLmhzdlRvSHNsKHRoaXMuJCksXG4gICAgICAgICAgaCA9IF9Jcm9Db2xvciRoc3ZUb0hzbC5oLFxuICAgICAgICAgIHMgPSBfSXJvQ29sb3IkaHN2VG9Ic2wucyxcbiAgICAgICAgICBsID0gX0lyb0NvbG9yJGhzdlRvSHNsLmw7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGg6IHJvdW5kKGgpLFxuICAgICAgICBzOiByb3VuZChzKSxcbiAgICAgICAgbDogcm91bmQobClcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSBfZXh0ZW5kcyh7fSwgSXJvQ29sb3IuaHNsVG9Ic3YodmFsdWUpLCB7XG4gICAgICAgIGE6IHZhbHVlLmEgPT09IHVuZGVmaW5lZCA/IDEgOiB2YWx1ZS5hXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaHNsYVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLmhzbCwge1xuICAgICAgICBhOiB0aGlzLmFscGhhXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmhzbCA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZ2JTdHJpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnJnYjtcbiAgICAgIHJldHVybiBcInJnYihcIiArIHJnYi5yICsgXCIsIFwiICsgcmdiLmcgKyBcIiwgXCIgKyByZ2IuYiArIFwiKVwiO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHZhciByLFxuICAgICAgICAgIGcsXG4gICAgICAgICAgYixcbiAgICAgICAgICBhID0gMTtcblxuICAgICAgaWYgKG1hdGNoID0gUkVHRVhfRlVOQ1RJT05BTF9SR0IuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlVW5pdChtYXRjaFsxXSwgMjU1KTtcbiAgICAgICAgZyA9IHBhcnNlVW5pdChtYXRjaFsyXSwgMjU1KTtcbiAgICAgICAgYiA9IHBhcnNlVW5pdChtYXRjaFszXSwgMjU1KTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBSRUdFWF9GVU5DVElPTkFMX1JHQkEuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlVW5pdChtYXRjaFsxXSwgMjU1KTtcbiAgICAgICAgZyA9IHBhcnNlVW5pdChtYXRjaFsyXSwgMjU1KTtcbiAgICAgICAgYiA9IHBhcnNlVW5pdChtYXRjaFszXSwgMjU1KTtcbiAgICAgICAgYSA9IHBhcnNlVW5pdChtYXRjaFs0XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLnJnYiA9IHtcbiAgICAgICAgICByOiByLFxuICAgICAgICAgIGc6IGcsXG4gICAgICAgICAgYjogYixcbiAgICAgICAgICBhOiBhXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmdiIHN0cmluZycpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZ2JhU3RyaW5nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmdiYSA9IHRoaXMucmdiYTtcbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhLnIgKyBcIiwgXCIgKyByZ2JhLmcgKyBcIiwgXCIgKyByZ2JhLmIgKyBcIiwgXCIgKyByZ2JhLmEgKyBcIilcIjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJnYlN0cmluZyA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoZXhTdHJpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnJnYjtcbiAgICAgIHJldHVybiBcIiNcIiArIGludFRvSGV4KHJnYi5yKSArIGludFRvSGV4KHJnYi5nKSArIGludFRvSGV4KHJnYi5iKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICB2YXIgcixcbiAgICAgICAgICBnLFxuICAgICAgICAgIGIsXG4gICAgICAgICAgYSA9IDI1NTtcblxuICAgICAgaWYgKG1hdGNoID0gUkVHRVhfSEVYXzMuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlSGV4SW50KG1hdGNoWzFdKSAqIDE3O1xuICAgICAgICBnID0gcGFyc2VIZXhJbnQobWF0Y2hbMl0pICogMTc7XG4gICAgICAgIGIgPSBwYXJzZUhleEludChtYXRjaFszXSkgKiAxNztcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBSRUdFWF9IRVhfNC5leGVjKHZhbHVlKSkge1xuICAgICAgICByID0gcGFyc2VIZXhJbnQobWF0Y2hbMV0pICogMTc7XG4gICAgICAgIGcgPSBwYXJzZUhleEludChtYXRjaFsyXSkgKiAxNztcbiAgICAgICAgYiA9IHBhcnNlSGV4SW50KG1hdGNoWzNdKSAqIDE3O1xuICAgICAgICBhID0gcGFyc2VIZXhJbnQobWF0Y2hbNF0pICogMTc7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID0gUkVHRVhfSEVYXzYuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlSGV4SW50KG1hdGNoWzFdKTtcbiAgICAgICAgZyA9IHBhcnNlSGV4SW50KG1hdGNoWzJdKTtcbiAgICAgICAgYiA9IHBhcnNlSGV4SW50KG1hdGNoWzNdKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBSRUdFWF9IRVhfOC5leGVjKHZhbHVlKSkge1xuICAgICAgICByID0gcGFyc2VIZXhJbnQobWF0Y2hbMV0pO1xuICAgICAgICBnID0gcGFyc2VIZXhJbnQobWF0Y2hbMl0pO1xuICAgICAgICBiID0gcGFyc2VIZXhJbnQobWF0Y2hbM10pO1xuICAgICAgICBhID0gcGFyc2VIZXhJbnQobWF0Y2hbNF0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5yZ2IgPSB7XG4gICAgICAgICAgcjogcixcbiAgICAgICAgICBnOiBnLFxuICAgICAgICAgIGI6IGIsXG4gICAgICAgICAgYTogYSAvIDI1NVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGV4OFN0cmluZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJnYmEgPSB0aGlzLnJnYmE7XG4gICAgICByZXR1cm4gXCIjXCIgKyBpbnRUb0hleChyZ2JhLnIpICsgaW50VG9IZXgocmdiYS5nKSArIGludFRvSGV4KHJnYmEuYikgKyBpbnRUb0hleChmbG9vcihyZ2JhLmEgKiAyNTUpKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmhleFN0cmluZyA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoc2xTdHJpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBoc2wgPSB0aGlzLmhzbDtcbiAgICAgIHJldHVybiBcImhzbChcIiArIGhzbC5oICsgXCIsIFwiICsgaHNsLnMgKyBcIiUsIFwiICsgaHNsLmwgKyBcIiUpXCI7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIG1hdGNoO1xuICAgICAgdmFyIGgsXG4gICAgICAgICAgcyxcbiAgICAgICAgICBsLFxuICAgICAgICAgIGEgPSAxO1xuXG4gICAgICBpZiAobWF0Y2ggPSBSRUdFWF9GVU5DVElPTkFMX0hTTC5leGVjKHZhbHVlKSkge1xuICAgICAgICBoID0gcGFyc2VVbml0KG1hdGNoWzFdLCAzNjApO1xuICAgICAgICBzID0gcGFyc2VVbml0KG1hdGNoWzJdLCAxMDApO1xuICAgICAgICBsID0gcGFyc2VVbml0KG1hdGNoWzNdLCAxMDApO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaCA9IFJFR0VYX0ZVTkNUSU9OQUxfSFNMQS5leGVjKHZhbHVlKSkge1xuICAgICAgICBoID0gcGFyc2VVbml0KG1hdGNoWzFdLCAzNjApO1xuICAgICAgICBzID0gcGFyc2VVbml0KG1hdGNoWzJdLCAxMDApO1xuICAgICAgICBsID0gcGFyc2VVbml0KG1hdGNoWzNdLCAxMDApO1xuICAgICAgICBhID0gcGFyc2VVbml0KG1hdGNoWzRdLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMuaHNsID0ge1xuICAgICAgICAgIGg6IGgsXG4gICAgICAgICAgczogcyxcbiAgICAgICAgICBsOiBsLFxuICAgICAgICAgIGE6IGFcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoc2wgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhzbGFTdHJpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBoc2xhID0gdGhpcy5oc2xhO1xuICAgICAgcmV0dXJuIFwiaHNsYShcIiArIGhzbGEuaCArIFwiLCBcIiArIGhzbGEucyArIFwiJSwgXCIgKyBoc2xhLmwgKyBcIiUsIFwiICsgaHNsYS5hICsgXCIpXCI7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc2xTdHJpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSXJvQ29sb3I7XG59KCk7XG5cbnZhciBzbGlkZXJEZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2xpZGVyU2hhcGU6ICdiYXInLFxuICBzbGlkZXJUeXBlOiAndmFsdWUnLFxuICBtaW5UZW1wZXJhdHVyZTogMjIwMCxcbiAgbWF4VGVtcGVyYXR1cmU6IDExMDAwXG59O1xuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgYm91bmRpbmcgZGltZW5zaW9ucyBvZiB0aGUgc2xpZGVyXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHNsaWRlciBwcm9wc1xyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U2xpZGVyRGltZW5zaW9ucyhwcm9wcykge1xuICB2YXIgX3NsaWRlclNpemU7XG5cbiAgdmFyIHdpZHRoID0gcHJvcHMud2lkdGgsXG4gICAgICBzbGlkZXJTaXplID0gcHJvcHMuc2xpZGVyU2l6ZSxcbiAgICAgIGJvcmRlcldpZHRoID0gcHJvcHMuYm9yZGVyV2lkdGgsXG4gICAgICBoYW5kbGVSYWRpdXMgPSBwcm9wcy5oYW5kbGVSYWRpdXMsXG4gICAgICBwYWRkaW5nID0gcHJvcHMucGFkZGluZyxcbiAgICAgIHNsaWRlclNoYXBlID0gcHJvcHMuc2xpZGVyU2hhcGU7XG4gIHZhciBpc2hvcml6b250YWwgPSBwcm9wcy5sYXlvdXREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJzsgLy8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgc2xpZGVyU2l6ZSBpZiBpdHMgbm90IGRlZmluZWRcblxuICBzbGlkZXJTaXplID0gKF9zbGlkZXJTaXplID0gc2xpZGVyU2l6ZSkgIT0gbnVsbCA/IF9zbGlkZXJTaXplIDogcGFkZGluZyAqIDIgKyBoYW5kbGVSYWRpdXMgKiAyO1xuXG4gIGlmIChzbGlkZXJTaGFwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFuZGxlU3RhcnQ6IHByb3BzLnBhZGRpbmcgKyBwcm9wcy5oYW5kbGVSYWRpdXMsXG4gICAgICBoYW5kbGVSYW5nZTogd2lkdGggLSBwYWRkaW5nICogMiAtIGhhbmRsZVJhZGl1cyAqIDIsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpZHRoLFxuICAgICAgY3g6IHdpZHRoIC8gMixcbiAgICAgIGN5OiB3aWR0aCAvIDIsXG4gICAgICByYWRpdXM6IHdpZHRoIC8gMiAtIGJvcmRlcldpZHRoIC8gMlxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhbmRsZVN0YXJ0OiBzbGlkZXJTaXplIC8gMixcbiAgICAgIGhhbmRsZVJhbmdlOiB3aWR0aCAtIHNsaWRlclNpemUsXG4gICAgICByYWRpdXM6IHNsaWRlclNpemUgLyAyLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogaXNob3Jpem9udGFsID8gc2xpZGVyU2l6ZSA6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBpc2hvcml6b250YWwgPyB3aWR0aCA6IHNsaWRlclNpemVcbiAgICB9O1xuICB9XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZSBmb3IgYSBnaXZlbiBjb2xvciwgYXMgYSBwZXJjZW50YWdlXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHNsaWRlciBwcm9wc1xyXG4gKiBAcGFyYW0gY29sb3JcclxuICovXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZXJWYWx1ZShwcm9wcywgY29sb3IpIHtcbiAgdmFyIGhzdmEgPSBjb2xvci5oc3ZhO1xuICB2YXIgcmdiID0gY29sb3IucmdiO1xuXG4gIHN3aXRjaCAocHJvcHMuc2xpZGVyVHlwZSkge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICByZXR1cm4gcmdiLnIgLyAyLjU1O1xuXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgcmV0dXJuIHJnYi5nIC8gMi41NTtcblxuICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgcmV0dXJuIHJnYi5iIC8gMi41NTtcblxuICAgIGNhc2UgJ2FscGhhJzpcbiAgICAgIHJldHVybiBoc3ZhLmEgKiAxMDA7XG5cbiAgICBjYXNlICdrZWx2aW4nOlxuICAgICAgdmFyIG1pblRlbXBlcmF0dXJlID0gcHJvcHMubWluVGVtcGVyYXR1cmUsXG4gICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSBwcm9wcy5tYXhUZW1wZXJhdHVyZTtcbiAgICAgIHZhciB0ZW1wZXJhdHVyZVJhbmdlID0gbWF4VGVtcGVyYXR1cmUgLSBtaW5UZW1wZXJhdHVyZTtcbiAgICAgIHZhciBwZXJjZW50ID0gKGNvbG9yLmtlbHZpbiAtIG1pblRlbXBlcmF0dXJlKSAvIHRlbXBlcmF0dXJlUmFuZ2UgKiAxMDA7IC8vIGNsbWFwIHBlcmNlbnRhZ2VcblxuICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHBlcmNlbnQsIDEwMCkpO1xuXG4gICAgY2FzZSAnaHVlJzpcbiAgICAgIHJldHVybiBoc3ZhLmggLz0gMy42O1xuXG4gICAgY2FzZSAnc2F0dXJhdGlvbic6XG4gICAgICByZXR1cm4gaHN2YS5zO1xuXG4gICAgY2FzZSAndmFsdWUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaHN2YS52O1xuICB9XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZSBmcm9tIHVzZXIgaW5wdXRcclxuICogQHBhcmFtIHByb3BzIC0gc2xpZGVyIHByb3BzXHJcbiAqIEBwYXJhbSB4IC0gZ2xvYmFsIGlucHV0IHggcG9zaXRpb25cclxuICogQHBhcmFtIHkgLSBnbG9iYWwgaW5wdXQgeSBwb3NpdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U2xpZGVyVmFsdWVGcm9tSW5wdXQocHJvcHMsIHgsIHkpIHtcbiAgdmFyIF9nZXRTbGlkZXJEaW1lbnNpb25zID0gZ2V0U2xpZGVyRGltZW5zaW9ucyhwcm9wcyksXG4gICAgICBoYW5kbGVSYW5nZSA9IF9nZXRTbGlkZXJEaW1lbnNpb25zLmhhbmRsZVJhbmdlLFxuICAgICAgaGFuZGxlU3RhcnQgPSBfZ2V0U2xpZGVyRGltZW5zaW9ucy5oYW5kbGVTdGFydDtcblxuICB2YXIgaGFuZGxlUG9zO1xuXG4gIGlmIChwcm9wcy5sYXlvdXREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGhhbmRsZVBvcyA9IC0xICogeSArIGhhbmRsZVJhbmdlICsgaGFuZGxlU3RhcnQ7XG4gIH0gZWxzZSB7XG4gICAgaGFuZGxlUG9zID0geCAtIGhhbmRsZVN0YXJ0O1xuICB9IC8vIGNsYW1wIGhhbmRsZSBwb3NpdGlvblxuXG5cbiAgaGFuZGxlUG9zID0gTWF0aC5tYXgoTWF0aC5taW4oaGFuZGxlUG9zLCBoYW5kbGVSYW5nZSksIDApO1xuICB2YXIgcGVyY2VudCA9IE1hdGgucm91bmQoMTAwIC8gaGFuZGxlUmFuZ2UgKiBoYW5kbGVQb3MpO1xuXG4gIHN3aXRjaCAocHJvcHMuc2xpZGVyVHlwZSkge1xuICAgIGNhc2UgJ2tlbHZpbic6XG4gICAgICB2YXIgbWluVGVtcGVyYXR1cmUgPSBwcm9wcy5taW5UZW1wZXJhdHVyZSxcbiAgICAgICAgICBtYXhUZW1wZXJhdHVyZSA9IHByb3BzLm1heFRlbXBlcmF0dXJlO1xuICAgICAgdmFyIHRlbXBlcmF0dXJlUmFuZ2UgPSBtYXhUZW1wZXJhdHVyZSAtIG1pblRlbXBlcmF0dXJlO1xuICAgICAgcmV0dXJuIG1pblRlbXBlcmF0dXJlICsgdGVtcGVyYXR1cmVSYW5nZSAqIChwZXJjZW50IC8gMTAwKTtcblxuICAgIGNhc2UgJ2FscGhhJzpcbiAgICAgIHJldHVybiBwZXJjZW50IC8gMTAwO1xuXG4gICAgY2FzZSAnaHVlJzpcbiAgICAgIHJldHVybiBwZXJjZW50ICogMy42O1xuXG4gICAgY2FzZSAncmVkJzpcbiAgICBjYXNlICdibHVlJzpcbiAgICBjYXNlICdncmVlbic6XG4gICAgICByZXR1cm4gcGVyY2VudCAqIDIuNTU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBlcmNlbnQ7XG4gIH1cbn1cbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGN1cnJlbnQgaGFuZGxlIHBvc2l0aW9uIGZvciBhIGdpdmVuIGNvbG9yXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHNsaWRlciBwcm9wc1xyXG4gKiBAcGFyYW0gY29sb3JcclxuICovXG5cbmZ1bmN0aW9uIGdldFNsaWRlckhhbmRsZVBvc2l0aW9uKHByb3BzLCBjb2xvcikge1xuICB2YXIgX2dldFNsaWRlckRpbWVuc2lvbnMyID0gZ2V0U2xpZGVyRGltZW5zaW9ucyhwcm9wcyksXG4gICAgICB3aWR0aCA9IF9nZXRTbGlkZXJEaW1lbnNpb25zMi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9nZXRTbGlkZXJEaW1lbnNpb25zMi5oZWlnaHQsXG4gICAgICBoYW5kbGVSYW5nZSA9IF9nZXRTbGlkZXJEaW1lbnNpb25zMi5oYW5kbGVSYW5nZSxcbiAgICAgIGhhbmRsZVN0YXJ0ID0gX2dldFNsaWRlckRpbWVuc2lvbnMyLmhhbmRsZVN0YXJ0O1xuXG4gIHZhciBpc2hvcml6b250YWwgPSBwcm9wcy5sYXlvdXREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgdmFyIHNsaWRlclZhbHVlID0gZ2V0Q3VycmVudFNsaWRlclZhbHVlKHByb3BzLCBjb2xvcik7XG4gIHZhciBtaWRQb2ludCA9IGlzaG9yaXpvbnRhbCA/IHdpZHRoIC8gMiA6IGhlaWdodCAvIDI7XG4gIHZhciBoYW5kbGVQb3MgPSBoYW5kbGVTdGFydCArIHNsaWRlclZhbHVlIC8gMTAwICogaGFuZGxlUmFuZ2U7XG5cbiAgaWYgKGlzaG9yaXpvbnRhbCkge1xuICAgIGhhbmRsZVBvcyA9IC0xICogaGFuZGxlUG9zICsgaGFuZGxlUmFuZ2UgKyBoYW5kbGVTdGFydCAqIDI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGlzaG9yaXpvbnRhbCA/IG1pZFBvaW50IDogaGFuZGxlUG9zLFxuICAgIHk6IGlzaG9yaXpvbnRhbCA/IGhhbmRsZVBvcyA6IG1pZFBvaW50XG4gIH07XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBncmFkaWVudCBzdG9wcyBmb3IgYSBzbGlkZXJcclxuICogQHBhcmFtIHByb3BzIC0gc2xpZGVyIHByb3BzXHJcbiAqIEBwYXJhbSBjb2xvclxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U2xpZGVyR3JhZGllbnQocHJvcHMsIGNvbG9yKSB7XG4gIHZhciBoc3YgPSBjb2xvci5oc3Y7XG4gIHZhciByZ2IgPSBjb2xvci5yZ2I7XG5cbiAgc3dpdGNoIChwcm9wcy5zbGlkZXJUeXBlKSB7XG4gICAgY2FzZSAncmVkJzpcbiAgICAgIHJldHVybiBbWzAsIFwicmdiKFwiICsgMCArIFwiLFwiICsgcmdiLmcgKyBcIixcIiArIHJnYi5iICsgXCIpXCJdLCBbMTAwLCBcInJnYihcIiArIDI1NSArIFwiLFwiICsgcmdiLmcgKyBcIixcIiArIHJnYi5iICsgXCIpXCJdXTtcblxuICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgIHJldHVybiBbWzAsIFwicmdiKFwiICsgcmdiLnIgKyBcIixcIiArIDAgKyBcIixcIiArIHJnYi5iICsgXCIpXCJdLCBbMTAwLCBcInJnYihcIiArIHJnYi5yICsgXCIsXCIgKyAyNTUgKyBcIixcIiArIHJnYi5iICsgXCIpXCJdXTtcblxuICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgcmV0dXJuIFtbMCwgXCJyZ2IoXCIgKyByZ2IuciArIFwiLFwiICsgcmdiLmcgKyBcIixcIiArIDAgKyBcIilcIl0sIFsxMDAsIFwicmdiKFwiICsgcmdiLnIgKyBcIixcIiArIHJnYi5nICsgXCIsXCIgKyAyNTUgKyBcIilcIl1dO1xuXG4gICAgY2FzZSAnYWxwaGEnOlxuICAgICAgcmV0dXJuIFtbMCwgXCJyZ2JhKFwiICsgcmdiLnIgKyBcIixcIiArIHJnYi5nICsgXCIsXCIgKyByZ2IuYiArIFwiLDApXCJdLCBbMTAwLCBcInJnYihcIiArIHJnYi5yICsgXCIsXCIgKyByZ2IuZyArIFwiLFwiICsgcmdiLmIgKyBcIilcIl1dO1xuXG4gICAgY2FzZSAna2VsdmluJzpcbiAgICAgIHZhciBzdG9wcyA9IFtdO1xuICAgICAgdmFyIG1pbiA9IHByb3BzLm1pblRlbXBlcmF0dXJlO1xuICAgICAgdmFyIG1heCA9IHByb3BzLm1heFRlbXBlcmF0dXJlO1xuICAgICAgdmFyIG51bVN0b3BzID0gODtcbiAgICAgIHZhciByYW5nZSA9IG1heCAtIG1pbjtcblxuICAgICAgZm9yICh2YXIga2VsdmluID0gbWluLCBzdG9wID0gMDsga2VsdmluIDwgbWF4OyBrZWx2aW4gKz0gcmFuZ2UgLyBudW1TdG9wcywgc3RvcCArPSAxKSB7XG4gICAgICAgIHZhciBfSXJvQ29sb3Ika2VsdmluVG9SZ2IgPSBJcm9Db2xvci5rZWx2aW5Ub1JnYihrZWx2aW4pLFxuICAgICAgICAgICAgciA9IF9Jcm9Db2xvciRrZWx2aW5Ub1JnYi5yLFxuICAgICAgICAgICAgZyA9IF9Jcm9Db2xvciRrZWx2aW5Ub1JnYi5nLFxuICAgICAgICAgICAgYiA9IF9Jcm9Db2xvciRrZWx2aW5Ub1JnYi5iO1xuXG4gICAgICAgIHN0b3BzLnB1c2goWzEwMCAvIG51bVN0b3BzICogc3RvcCwgXCJyZ2IoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIpXCJdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3BzO1xuXG4gICAgY2FzZSAnaHVlJzpcbiAgICAgIHJldHVybiBbWzAsICcjZjAwJ10sIFsxNi42NjYsICcjZmYwJ10sIFszMy4zMzMsICcjMGYwJ10sIFs1MCwgJyMwZmYnXSwgWzY2LjY2NiwgJyMwMGYnXSwgWzgzLjMzMywgJyNmMGYnXSwgWzEwMCwgJyNmMDAnXV07XG5cbiAgICBjYXNlICdzYXR1cmF0aW9uJzpcbiAgICAgIHZhciBub1NhdCA9IElyb0NvbG9yLmhzdlRvSHNsKHtcbiAgICAgICAgaDogaHN2LmgsXG4gICAgICAgIHM6IDAsXG4gICAgICAgIHY6IGhzdi52XG4gICAgICB9KTtcbiAgICAgIHZhciBmdWxsU2F0ID0gSXJvQ29sb3IuaHN2VG9Ic2woe1xuICAgICAgICBoOiBoc3YuaCxcbiAgICAgICAgczogMTAwLFxuICAgICAgICB2OiBoc3YudlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW1swLCBcImhzbChcIiArIG5vU2F0LmggKyBcIixcIiArIG5vU2F0LnMgKyBcIiUsXCIgKyBub1NhdC5sICsgXCIlKVwiXSwgWzEwMCwgXCJoc2woXCIgKyBmdWxsU2F0LmggKyBcIixcIiArIGZ1bGxTYXQucyArIFwiJSxcIiArIGZ1bGxTYXQubCArIFwiJSlcIl1dO1xuXG4gICAgY2FzZSAndmFsdWUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgaHNsID0gSXJvQ29sb3IuaHN2VG9Ic2woe1xuICAgICAgICBoOiBoc3YuaCxcbiAgICAgICAgczogaHN2LnMsXG4gICAgICAgIHY6IDEwMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW1swLCAnIzAwMCddLCBbMTAwLCBcImhzbChcIiArIGhzbC5oICsgXCIsXCIgKyBoc2wucyArIFwiJSxcIiArIGhzbC5sICsgXCIlKVwiXV07XG4gIH1cbn1cblxudmFyIFRBVSA9IE1hdGguUEkgKiAyOyAvLyBqYXZhc2NyaXB0J3MgbW9kdWxvIG9wZXJhdG9yIGRvZXNuJ3QgcHJvZHVjZSBwb3NpdGl2ZSBudW1iZXJzIHdpdGggbmVnYXRpdmUgaW5wdXRcbi8vIGh0dHBzOi8vZGV2LnRvL21hdXJvYnJpbmdvbGYvYS1uZWF0LXRyaWNrLXRvLWNvbXB1dGUtbW9kdWxvLW9mLW5lZ2F0aXZlLW51bWJlcnMtMTExZVxuXG52YXIgbW9kID0gZnVuY3Rpb24gbW9kKGEsIG4pIHtcbiAgcmV0dXJuIChhICUgbiArIG4pICUgbjtcbn07IC8vIGRpc3RhbmNlIGJldHdlZW4gcG9pbnRzICh4LCB5KSBhbmQgKDAsIDApXG5cblxudmFyIGRpc3QgPSBmdW5jdGlvbiBkaXN0KHgsIHkpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbn07XG4vKipcclxuICogQHBhcmFtIHByb3BzIC0gd2hlZWwgcHJvcHNcclxuICogQGludGVybmFsXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEhhbmRsZVJhbmdlKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy53aWR0aCAvIDIgLSBwcm9wcy5wYWRkaW5nIC0gcHJvcHMuaGFuZGxlUmFkaXVzIC0gcHJvcHMuYm9yZGVyV2lkdGg7XG59XG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHBvaW50ICh4LCB5KSBsYW5kcyBpbnNpZGUgdGhlIHdoZWVsXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHdoZWVsIHByb3BzXHJcbiAqIEBwYXJhbSB4XHJcbiAqIEBwYXJhbSB5XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzSW5wdXRJbnNpZGVXaGVlbChwcm9wcywgeCwgeSkge1xuICB2YXIgX2dldFdoZWVsRGltZW5zaW9ucyA9IGdldFdoZWVsRGltZW5zaW9ucyhwcm9wcyksXG4gICAgICBjeCA9IF9nZXRXaGVlbERpbWVuc2lvbnMuY3gsXG4gICAgICBjeSA9IF9nZXRXaGVlbERpbWVuc2lvbnMuY3k7XG5cbiAgdmFyIHIgPSBwcm9wcy53aWR0aCAvIDI7XG4gIHJldHVybiBkaXN0KGN4IC0geCwgY3kgLSB5KSA8IHI7XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBwb2ludCBhcyB0aGUgY2VudGVyIG9mIHRoZSB3aGVlbFxyXG4gKiBAcGFyYW0gcHJvcHMgLSB3aGVlbCBwcm9wc1xyXG4gKi9cblxuZnVuY3Rpb24gZ2V0V2hlZWxEaW1lbnNpb25zKHByb3BzKSB7XG4gIHZhciByID0gcHJvcHMud2lkdGggLyAyO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICByYWRpdXM6IHIgLSBwcm9wcy5ib3JkZXJXaWR0aCxcbiAgICBjeDogcixcbiAgICBjeTogclxuICB9O1xufVxuLyoqXHJcbiAqIEBkZXNjIFRyYW5zbGF0ZSBhbiBhbmdsZSBhY2NvcmRpbmcgdG8gd2hlZWxBbmdsZSBhbmQgd2hlZWxEaXJlY3Rpb25cclxuICogQHBhcmFtIHByb3BzIC0gd2hlZWwgcHJvcHNcclxuICogQHBhcmFtIGFuZ2xlIC0gaW5wdXQgYW5nbGVcclxuICovXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVdoZWVsQW5nbGUocHJvcHMsIGFuZ2xlLCBpbnZlcnQpIHtcbiAgdmFyIHdoZWVsQW5nbGUgPSBwcm9wcy53aGVlbEFuZ2xlO1xuICB2YXIgd2hlZWxEaXJlY3Rpb24gPSBwcm9wcy53aGVlbERpcmVjdGlvbjsgLy8gaW52ZXJ0ZWQgYW5kIGNsb2Nrd2lzZWVcblxuICBpZiAoaW52ZXJ0ICYmIHdoZWVsRGlyZWN0aW9uID09PSAnY2xvY2t3aXNlJykgeyBhbmdsZSA9IHdoZWVsQW5nbGUgKyBhbmdsZTsgfSAvLyBjbG9ja3dpc2UgKGlucHV0IGhhbmRsaW5nKVxuICBlbHNlIGlmICh3aGVlbERpcmVjdGlvbiA9PT0gJ2Nsb2Nrd2lzZScpIHsgYW5nbGUgPSAzNjAgLSB3aGVlbEFuZ2xlICsgYW5nbGU7IH0gLy8gaW52ZXJ0ZWQgYW5kIGFudGljbG9ja3dpc2VcbiAgICBlbHNlIGlmIChpbnZlcnQgJiYgd2hlZWxEaXJlY3Rpb24gPT09ICdhbnRpY2xvY2t3aXNlJykgeyBhbmdsZSA9IHdoZWVsQW5nbGUgKyAxODAgLSBhbmdsZTsgfSAvLyBhbnRpY2xvY2t3aXNlIChpbnB1dCBoYW5kbGluZylcbiAgICAgIGVsc2UgaWYgKHdoZWVsRGlyZWN0aW9uID09PSAnYW50aWNsb2Nrd2lzZScpIHsgYW5nbGUgPSB3aGVlbEFuZ2xlIC0gYW5nbGU7IH1cbiAgcmV0dXJuIG1vZChhbmdsZSwgMzYwKTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGN1cnJlbnQgaGFuZGxlIHBvc2l0aW9uIGZvciBhIGdpdmVuIGNvbG9yXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHdoZWVsIHByb3BzXHJcbiAqIEBwYXJhbSBjb2xvclxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0V2hlZWxIYW5kbGVQb3NpdGlvbihwcm9wcywgY29sb3IpIHtcbiAgdmFyIGhzdiA9IGNvbG9yLmhzdjtcblxuICB2YXIgX2dldFdoZWVsRGltZW5zaW9uczIgPSBnZXRXaGVlbERpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgY3ggPSBfZ2V0V2hlZWxEaW1lbnNpb25zMi5jeCxcbiAgICAgIGN5ID0gX2dldFdoZWVsRGltZW5zaW9uczIuY3k7XG5cbiAgdmFyIGhhbmRsZVJhbmdlID0gZ2V0SGFuZGxlUmFuZ2UocHJvcHMpO1xuICB2YXIgaGFuZGxlQW5nbGUgPSAoMTgwICsgdHJhbnNsYXRlV2hlZWxBbmdsZShwcm9wcywgaHN2LmgsIHRydWUpKSAqIChUQVUgLyAzNjApO1xuICB2YXIgaGFuZGxlRGlzdCA9IGhzdi5zIC8gMTAwICogaGFuZGxlUmFuZ2U7XG4gIHZhciBkaXJlY3Rpb24gPSBwcm9wcy53aGVlbERpcmVjdGlvbiA9PT0gJ2Nsb2Nrd2lzZScgPyAtMSA6IDE7XG4gIHJldHVybiB7XG4gICAgeDogY3ggKyBoYW5kbGVEaXN0ICogTWF0aC5jb3MoaGFuZGxlQW5nbGUpICogZGlyZWN0aW9uLFxuICAgIHk6IGN5ICsgaGFuZGxlRGlzdCAqIE1hdGguc2luKGhhbmRsZUFuZ2xlKSAqIGRpcmVjdGlvblxuICB9O1xufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgY3VycmVudCB3aGVlbCB2YWx1ZSBmcm9tIHVzZXIgaW5wdXRcclxuICogQHBhcmFtIHByb3BzIC0gd2hlZWwgcHJvcHNcclxuICogQHBhcmFtIHggLSBnbG9iYWwgaW5wdXQgeCBwb3NpdGlvblxyXG4gKiBAcGFyYW0geSAtIGdsb2JhbCBpbnB1dCB5IHBvc2l0aW9uXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRXaGVlbFZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KSB7XG4gIHZhciBfZ2V0V2hlZWxEaW1lbnNpb25zMyA9IGdldFdoZWVsRGltZW5zaW9ucyhwcm9wcyksXG4gICAgICBjeCA9IF9nZXRXaGVlbERpbWVuc2lvbnMzLmN4LFxuICAgICAgY3kgPSBfZ2V0V2hlZWxEaW1lbnNpb25zMy5jeTtcblxuICB2YXIgaGFuZGxlUmFuZ2UgPSBnZXRIYW5kbGVSYW5nZShwcm9wcyk7XG4gIHggPSBjeCAtIHg7XG4gIHkgPSBjeSAtIHk7IC8vIENhbGN1bGF0ZSB0aGUgaHVlIGJ5IGNvbnZlcnRpbmcgdGhlIGFuZ2xlIHRvIHJhZGlhbnNcblxuICB2YXIgaHVlID0gdHJhbnNsYXRlV2hlZWxBbmdsZShwcm9wcywgTWF0aC5hdGFuMigteSwgLXgpICogKDM2MCAvIFRBVSkpOyAvLyBGaW5kIHRoZSBwb2ludCdzIGRpc3RhbmNlIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgd2hlZWxcbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHNob3cgdGhlIHNhdHVyYXRpb24gbGV2ZWxcblxuICB2YXIgaGFuZGxlRGlzdCA9IE1hdGgubWluKGRpc3QoeCwgeSksIGhhbmRsZVJhbmdlKTtcbiAgcmV0dXJuIHtcbiAgICBoOiBNYXRoLnJvdW5kKGh1ZSksXG4gICAgczogTWF0aC5yb3VuZCgxMDAgLyBoYW5kbGVSYW5nZSAqIGhhbmRsZURpc3QpXG4gIH07XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBib3VuZGluZyBkaW1lbnNpb25zIG9mIHRoZSBib3hcclxuICogQHBhcmFtIHByb3BzIC0gYm94IHByb3BzXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3hEaW1lbnNpb25zKHByb3BzKSB7XG4gIHZhciB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgYm94SGVpZ2h0ID0gcHJvcHMuYm94SGVpZ2h0LFxuICAgICAgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcsXG4gICAgICBoYW5kbGVSYWRpdXMgPSBwcm9wcy5oYW5kbGVSYWRpdXM7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogYm94SGVpZ2h0ICE9IG51bGwgPyBib3hIZWlnaHQgOiB3aWR0aCxcbiAgICByYWRpdXM6IHBhZGRpbmcgKyBoYW5kbGVSYWRpdXNcbiAgfTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGN1cnJlbnQgYm94IHZhbHVlIGZyb20gdXNlciBpbnB1dFxyXG4gKiBAcGFyYW0gcHJvcHMgLSBib3ggcHJvcHNcclxuICogQHBhcmFtIHggLSBnbG9iYWwgaW5wdXQgeCBwb3NpdGlvblxyXG4gKiBAcGFyYW0geSAtIGdsb2JhbCBpbnB1dCB5IHBvc2l0aW9uXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3hWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSkge1xuICB2YXIgX2dldEJveERpbWVuc2lvbnMgPSBnZXRCb3hEaW1lbnNpb25zKHByb3BzKSxcbiAgICAgIHdpZHRoID0gX2dldEJveERpbWVuc2lvbnMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfZ2V0Qm94RGltZW5zaW9ucy5oZWlnaHQsXG4gICAgICByYWRpdXMgPSBfZ2V0Qm94RGltZW5zaW9ucy5yYWRpdXM7XG5cbiAgdmFyIGhhbmRsZVN0YXJ0ID0gcmFkaXVzO1xuICB2YXIgaGFuZGxlUmFuZ2VYID0gd2lkdGggLSByYWRpdXMgKiAyO1xuICB2YXIgaGFuZGxlUmFuZ2VZID0gaGVpZ2h0IC0gcmFkaXVzICogMjtcbiAgdmFyIHBlcmNlbnRYID0gKHggLSBoYW5kbGVTdGFydCkgLyBoYW5kbGVSYW5nZVggKiAxMDA7XG4gIHZhciBwZXJjZW50WSA9ICh5IC0gaGFuZGxlU3RhcnQpIC8gaGFuZGxlUmFuZ2VZICogMTAwO1xuICByZXR1cm4ge1xuICAgIHM6IE1hdGgubWF4KDAsIE1hdGgubWluKHBlcmNlbnRYLCAxMDApKSxcbiAgICB2OiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAgLSBwZXJjZW50WSwgMTAwKSlcbiAgfTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGN1cnJlbnQgYm94IGhhbmRsZSBwb3NpdGlvbiBmb3IgYSBnaXZlbiBjb2xvclxyXG4gKiBAcGFyYW0gcHJvcHMgLSBib3ggcHJvcHNcclxuICogQHBhcmFtIGNvbG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3hIYW5kbGVQb3NpdGlvbihwcm9wcywgY29sb3IpIHtcbiAgdmFyIF9nZXRCb3hEaW1lbnNpb25zMiA9IGdldEJveERpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgd2lkdGggPSBfZ2V0Qm94RGltZW5zaW9uczIud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfZ2V0Qm94RGltZW5zaW9uczIuaGVpZ2h0LFxuICAgICAgcmFkaXVzID0gX2dldEJveERpbWVuc2lvbnMyLnJhZGl1cztcblxuICB2YXIgaHN2ID0gY29sb3IuaHN2O1xuICB2YXIgaGFuZGxlU3RhcnQgPSByYWRpdXM7XG4gIHZhciBoYW5kbGVSYW5nZVggPSB3aWR0aCAtIHJhZGl1cyAqIDI7XG4gIHZhciBoYW5kbGVSYW5nZVkgPSBoZWlnaHQgLSByYWRpdXMgKiAyO1xuICByZXR1cm4ge1xuICAgIHg6IGhhbmRsZVN0YXJ0ICsgaHN2LnMgLyAxMDAgKiBoYW5kbGVSYW5nZVgsXG4gICAgeTogaGFuZGxlU3RhcnQgKyAoaGFuZGxlUmFuZ2VZIC0gaHN2LnYgLyAxMDAgKiBoYW5kbGVSYW5nZVkpXG4gIH07XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBncmFkaWVudCBzdG9wcyBmb3IgYSBib3hcclxuICogQHBhcmFtIHByb3BzIC0gYm94IHByb3BzXHJcbiAqIEBwYXJhbSBjb2xvclxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm94R3JhZGllbnRzKHByb3BzLCBjb2xvcikge1xuICB2YXIgaHVlID0gY29sb3IuaHVlO1xuICByZXR1cm4gWy8vIHNhdHVyYXRpb24gZ3JhZGllbnRcbiAgW1swLCAnI2ZmZiddLCBbMTAwLCBcImhzbChcIiArIGh1ZSArIFwiLDEwMCUsNTAlKVwiXV0sIC8vIGxpZ2h0bmVzcyBncmFkaWVudFxuICBbWzAsICdyZ2JhKDAsMCwwLDApJ10sIFsxMDAsICcjMDAwJ11dXTtcbn1cblxuLy8gS2VlcCB0cmFjayBvZiBodG1sIDxiYXNlPiBlbGVtZW50cyBmb3IgcmVzb2x2ZVN2Z1VybFxuLy8gZ2V0RWxlbWVudHNCeVRhZ05hbWUgcmV0dXJucyBhIGxpdmUgSFRNTENvbGxlY3Rpb24sIHdoaWNoIHN0YXlzIGluIHN5bmMgd2l0aCB0aGUgRE9NIHRyZWVcbi8vIFNvIGl0IG9ubHkgbmVlZHMgdG8gYmUgY2FsbGVkIG9uY2VcbnZhciBCQVNFX0VMRU1FTlRTO1xuLyoqXHJcbiAqIEBkZXNjIFJlc29sdmUgYW4gU1ZHIHJlZmVyZW5jZSBVUkxcclxuICogVGhpcyBpcyByZXF1aXJlZCB0byB3b3JrIGFyb3VuZCBob3cgU2FmYXJpIGFuZCBpT1Mgd2Vidmlld3MgaGFuZGxlIGdyYWRpZW50IFVSTFMgdW5kZXIgY2VydGFpbiBjb25kaXRpb25zXHJcbiAqIElmIGEgcGFnZSBpcyB1c2luZyBhIGNsaWVudC1zaWRlIHJvdXRpbmcgbGlicmFyeSB3aGljaCBtYWtlcyB1c2Ugb2YgdGhlIEhUTUwgPGJhc2U+IHRhZyxcclxuICogU2FmYXJpIHdvbid0IGJlIGFibGUgdG8gcmVuZGVyIFNWRyBncmFkaWVudHMgcHJvcGVybHkgKGFzIHRoZXkgYXJlIHJlZmVyZW5jZWQgYnkgVVJMcylcclxuICogTW9yZSBpbmZvIG9uIHRoZSBwcm9ibGVtOlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc0MjgwNS9hbmd1bGFyLWFuZC1zdmctZmlsdGVycy8xOTc1MzQyNyMxOTc1MzQyN1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFhbWVzL2lyby5qcy9pc3N1ZXMvMThcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2phYW1lcy9pcm8uanMvaXNzdWVzLzQ1XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWFtZXMvaXJvLmpzL3B1bGwvODlcclxuICogQHByb3BzIHVybCAtIFNWRyByZWZlcmVuY2UgVVJMXHJcbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU3ZnVXJsKHVybCkge1xuICBpZiAoIUJBU0VfRUxFTUVOVFMpIHsgQkFTRV9FTEVNRU5UUyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJyk7IH0gLy8gU25pZmYgdXNlcmFnZW50IHN0cmluZyB0byBjaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIFNhZmFyaVxuXG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KHVhKTtcbiAgdmFyIGlzSW9zID0gL2lQaG9uZXxpUG9kfGlQYWQvaS50ZXN0KHVhKTtcbiAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICByZXR1cm4gKGlzU2FmYXJpIHx8IGlzSW9zKSAmJiBCQVNFX0VMRU1FTlRTLmxlbmd0aCA+IDAgPyBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIHVybCA6IHVybDtcbn1cbi8qKlxyXG4gKiBAZGVzYyBHaXZlbiBhIHNwZWNpZmMgKHgsIHkpIHBvc2l0aW9uLCB0ZXN0IGlmIHRoZXJlJ3MgYSBoYW5kbGUgdGhlcmUgYW5kIHJldHVybiBpdHMgaW5kZXgsIGVsc2UgcmV0dXJuIG51bGwuXHJcbiAqICAgICAgIFRoaXMgaXMgdXNlZCBmb3IgY29tcG9uZW50cyBsaWtlIHRoZSBib3ggYW5kIHdoZWVsIHdoaWNoIHN1cHBvcnQgbXVsdGlwbGUgaGFuZGxlcyB3aGVuIG11bHRpY29sb3IgaXMgYWN0aXZlXHJcbiAqIEBwcm9wcyB4IC0gcG9pbnQgeCBwb3NpdGlvblxyXG4gKiBAcHJvcHMgeSAtIHBvaW50IHkgcG9zaXRpb25cclxuICogQHByb3BzIGhhbmRsZVBvc2l0aW9ucyAtIGFycmF5IG9mIHt4LCB5fSBjb29yZHMgZm9yIGVhY2ggaGFuZGxlXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRIYW5kbGVBdFBvaW50KHByb3BzLCB4LCB5LCBoYW5kbGVQb3NpdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZFggPSBoYW5kbGVQb3NpdGlvbnNbaV0ueCAtIHg7XG4gICAgdmFyIGRZID0gaGFuZGxlUG9zaXRpb25zW2ldLnkgLSB5O1xuICAgIHZhciBkaXN0ID0gTWF0aC5zcXJ0KGRYICogZFggKyBkWSAqIGRZKTtcblxuICAgIGlmIChkaXN0IDwgcHJvcHMuaGFuZGxlUmFkaXVzKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gY3NzQm9yZGVyU3R5bGVzKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgYm9yZGVyOiBwcm9wcy5ib3JkZXJXaWR0aCArIFwicHggc29saWQgXCIgKyBwcm9wcy5ib3JkZXJDb2xvclxuICB9O1xufVxuZnVuY3Rpb24gY3NzR3JhZGllbnQodHlwZSwgZGlyZWN0aW9uLCBzdG9wcykge1xuICByZXR1cm4gdHlwZSArIFwiLWdyYWRpZW50KFwiICsgZGlyZWN0aW9uICsgXCIsIFwiICsgc3RvcHMubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG8gPSBfcmVmWzBdLFxuICAgICAgICBjb2wgPSBfcmVmWzFdO1xuICAgIHJldHVybiBjb2wgKyBcIiBcIiArIG8gKyBcIiVcIjtcbiAgfSkuam9pbignLCcpICsgXCIpXCI7XG59XG5mdW5jdGlvbiBjc3NWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgeyByZXR1cm4gdmFsdWU7IH1cbiAgcmV0dXJuIHZhbHVlICsgXCJweFwiO1xufVxuXG52YXIgaXJvQ29sb3JQaWNrZXJPcHRpb25EZWZhdWx0cyA9IHtcbiAgd2lkdGg6IDMwMCxcbiAgaGVpZ2h0OiAzMDAsXG4gIGNvbG9yOiAnI2ZmZicsXG4gIGNvbG9yczogW10sXG4gIHBhZGRpbmc6IDYsXG4gIGxheW91dERpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgYm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyV2lkdGg6IDAsXG4gIGhhbmRsZVJhZGl1czogOCxcbiAgYWN0aXZlSGFuZGxlUmFkaXVzOiBudWxsLFxuICBoYW5kbGVTdmc6IG51bGwsXG4gIGhhbmRsZVByb3BzOiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIHdoZWVsTGlnaHRuZXNzOiB0cnVlLFxuICB3aGVlbEFuZ2xlOiAwLFxuICB3aGVlbERpcmVjdGlvbjogJ2FudGljbG9ja3dpc2UnLFxuICBzbGlkZXJTaXplOiBudWxsLFxuICBzbGlkZXJNYXJnaW46IDEyLFxuICBib3hIZWlnaHQ6IG51bGxcbn07XG5cbnZhciBTRUNPTkRBUllfRVZFTlRTID0gW1wibW91c2Vtb3ZlXCIgLyogTW91c2VNb3ZlICovLCBcInRvdWNobW92ZVwiIC8qIFRvdWNoTW92ZSAqLywgXCJtb3VzZXVwXCIgLyogTW91c2VVcCAqLywgXCJ0b3VjaGVuZFwiIC8qIFRvdWNoRW5kICovXTtcclxuLy8gQmFzZSBjb21wb25lbnQgY2xhc3MgZm9yIGlybyBVSSBjb21wb25lbnRzXHJcbi8vIFRoaXMgZXh0ZW5kcyB0aGUgUHJlYWN0IGNvbXBvbmVudCBjbGFzcyB0byBhbGxvdyB0aGVtIHRvIHJlYWN0IHRvIG1vdXNlL3RvdWNoIGlucHV0IGV2ZW50cyBieSB0aGVtc2VsdmVzXHJcbnZhciBJcm9Db21wb25lbnRXcmFwcGVyID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gSXJvQ29tcG9uZW50V3JhcHBlcihwcm9wcykge1xyXG4gICAgICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKTtcclxuICAgICAgICAvLyBHZW5lcmF0ZSB1bmlxdWUgSUQgZm9yIHRoZSBjb21wb25lbnRcclxuICAgICAgICAvLyBUaGlzIGNhbiBiZSB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIGdyYWRpZW50cywgZXRjXHJcbiAgICAgICAgdGhpcy51aWQgPSAoTWF0aC5yYW5kb20oKSArIDEpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNSk7XHJcbiAgICB9XG5cbiAgICBpZiAoIENvbXBvbmVudCApIElyb0NvbXBvbmVudFdyYXBwZXIuX19wcm90b19fID0gQ29tcG9uZW50O1xuICAgIElyb0NvbXBvbmVudFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29tcG9uZW50ICYmIENvbXBvbmVudC5wcm90b3R5cGUgKTtcbiAgICBJcm9Db21wb25lbnRXcmFwcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IElyb0NvbXBvbmVudFdyYXBwZXI7XHJcbiAgICBJcm9Db21wb25lbnRXcmFwcGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHByb3BzKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlciA9IHRoaXMuaGFuZGxlRXZlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB2YXIgcm9vdFByb3BzID0ge1xyXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogZXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vamFhbWVzL2lyby5qcy9pc3N1ZXMvMTI2XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzIxMTMjaXNzdWVjb21tZW50LTU1MzQwODc2N1xyXG4gICAgICAgICAgICBvbnRvdWNoc3RhcnQ6IGV2ZW50SGFuZGxlcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBpc0hvcml6b250YWwgPSBwcm9wcy5sYXlvdXREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcclxuICAgICAgICB2YXIgbWFyZ2luID0gcHJvcHMubWFyZ2luID09PSBudWxsID8gcHJvcHMuc2xpZGVyTWFyZ2luIDogcHJvcHMubWFyZ2luO1xyXG4gICAgICAgIHZhciByb290U3R5bGVzID0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpc0hvcml6b250YWwgPyAnaW5saW5lLWJsb2NrJyA6ICdibG9jaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGZpcnN0IGNvbXBvbmVudCBzaG91bGRuJ3QgaGF2ZSBhbnkgbWFyZ2luXHJcbiAgICAgICAgaWYgKHByb3BzLmluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICByb290U3R5bGVzW2lzSG9yaXpvbnRhbCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5Ub3AnXSA9IG1hcmdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChoKGQsIG51bGwsIHByb3BzLmNoaWxkcmVuKHRoaXMudWlkLCByb290UHJvcHMsIHJvb3RTdHlsZXMpKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gTW9yZSBpbmZvIG9uIGhhbmRsZUV2ZW50OlxyXG4gICAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0BXZWJSZWZsZWN0aW9uL2RvbS1oYW5kbGVldmVudC1hLWNyb3NzLXBsYXRmb3JtLXN0YW5kYXJkLXNpbmNlLXllYXItMjAwMC01YmYxNzI4N2ZkMzhcclxuICAgIC8vIFRMO0RSIHRoaXMgbGV0cyB1cyBoYXZlIGEgc2luZ2xlIHBvaW50IG9mIGVudHJ5IGZvciBtdWx0aXBsZSBldmVudHMsIGFuZCB3ZSBjYW4gYXZvaWQgY2FsbGJhY2svYmluZGluZyBoZWxsXHJcbiAgICBJcm9Db21wb25lbnRXcmFwcGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIGhhbmRsZUV2ZW50IChlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgICAgICAgdmFyIGlucHV0SGFuZGxlciA9IHRoaXMucHJvcHMub25JbnB1dDtcclxuICAgICAgICAvLyBHZXQgdGhlIHNjcmVlbiBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuYmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAvLyBQcmVmZWN0IGRlZmF1bHQgYnJvd3NlciBhY3Rpb25cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gRGV0ZWN0IGlmIHRoZSBldmVudCBpcyBhIHRvdWNoIGV2ZW50IGJ5IGNoZWNraW5nIGlmIGl0IGhhcyB0aGUgYHRvdWNoZXNgIHByb3BlcnR5XHJcbiAgICAgICAgLy8gSWYgaXQgaXMgYSB0b3VjaCBldmVudCwgdXNlIHRoZSBmaXJzdCB0b3VjaCBpbnB1dFxyXG4gICAgICAgIHZhciBwb2ludCA9IGUudG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xyXG4gICAgICAgIHZhciB4ID0gcG9pbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgICAgIHZhciB5ID0gcG9pbnQuY2xpZW50WSAtIGJvdW5kcy50b3A7XHJcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1vdXNlZG93blwiIC8qIE1vdXNlRG93biAqLzpcclxuICAgICAgICAgICAgY2FzZSBcInRvdWNoc3RhcnRcIiAvKiBUb3VjaFN0YXJ0ICovOlxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0SGFuZGxlcih4LCB5LCAwIC8qIFN0YXJ0ICovKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU0VDT05EQVJZX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzJDEsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1vdXNlbW92ZVwiIC8qIE1vdXNlTW92ZSAqLzpcclxuICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiIC8qIFRvdWNoTW92ZSAqLzpcclxuICAgICAgICAgICAgICAgIGlucHV0SGFuZGxlcih4LCB5LCAxIC8qIE1vdmUgKi8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3VzZXVwXCIgLyogTW91c2VVcCAqLzpcclxuICAgICAgICAgICAgY2FzZSBcInRvdWNoZW5kXCIgLyogVG91Y2hFbmQgKi86XHJcbiAgICAgICAgICAgICAgICBpbnB1dEhhbmRsZXIoeCwgeSwgMiAvKiBFbmQgKi8pO1xyXG4gICAgICAgICAgICAgICAgU0VDT05EQVJZX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMkMSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcblxuICAgIHJldHVybiBJcm9Db21wb25lbnRXcmFwcGVyO1xufShtKSk7XG5cbmZ1bmN0aW9uIElyb0hhbmRsZShwcm9wcykge1xyXG4gICAgdmFyIHJhZGl1cyA9IHByb3BzLnI7XHJcbiAgICB2YXIgdXJsID0gcHJvcHMudXJsO1xyXG4gICAgdmFyIGN4ID0gcmFkaXVzO1xyXG4gICAgdmFyIGN5ID0gcmFkaXVzO1xyXG4gICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgY2xhc3NOYW1lOiAoXCJJcm9IYW5kbGUgSXJvSGFuZGxlLS1cIiArIChwcm9wcy5pbmRleCkgKyBcIiBcIiArIChwcm9wcy5pc0FjdGl2ZSA/ICdJcm9IYW5kbGUtLWlzQWN0aXZlJyA6ICcnKSksIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAwKTsnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IChcInRyYW5zbGF0ZShcIiArIChjc3NWYWx1ZShwcm9wcy54KSkgKyBcIiwgXCIgKyAoY3NzVmFsdWUocHJvcHMueSkpICsgXCIpXCIpLFxyXG4gICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgdG9wOiBjc3NWYWx1ZSgtcmFkaXVzKSxcclxuICAgICAgICAgICAgbGVmdDogY3NzVmFsdWUoLXJhZGl1cyksXHJcbiAgICAgICAgICAgIHdpZHRoOiBjc3NWYWx1ZShyYWRpdXMgKiAyKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBjc3NWYWx1ZShyYWRpdXMgKiAyKSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAndmlzaWJsZSdcclxuICAgICAgICB9IH0sXHJcbiAgICAgICAgdXJsICYmIChoKFwidXNlXCIsIE9iamVjdC5hc3NpZ24oeyB4bGlua0hyZWY6IHJlc29sdmVTdmdVcmwodXJsKSB9LCBwcm9wcy5wcm9wcykpKSxcclxuICAgICAgICAhdXJsICYmIChoKFwiY2lyY2xlXCIsIHsgY3g6IGN4LCBjeTogY3ksIHI6IHJhZGl1cywgZmlsbDogXCJub25lXCIsIFwic3Ryb2tlLXdpZHRoXCI6IDIsIHN0cm9rZTogXCIjMDAwXCIgfSkpLFxyXG4gICAgICAgICF1cmwgJiYgKGgoXCJjaXJjbGVcIiwgeyBjeDogY3gsIGN5OiBjeSwgcjogcmFkaXVzIC0gMiwgZmlsbDogcHJvcHMuZmlsbCwgXCJzdHJva2Utd2lkdGhcIjogMiwgc3Ryb2tlOiBcIiNmZmZcIiB9KSkpKTtcclxufVxyXG5Jcm9IYW5kbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZmlsbDogJ25vbmUnLFxyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgICByOiA4LFxyXG4gICAgdXJsOiBudWxsLFxyXG4gICAgcHJvcHM6IHsgeDogMCwgeTogMCB9XHJcbn07XG5cbmZ1bmN0aW9uIElyb1NsaWRlcihwcm9wcykge1xyXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gcHJvcHMuYWN0aXZlSW5kZXg7XHJcbiAgICB2YXIgYWN0aXZlQ29sb3IgPSAoYWN0aXZlSW5kZXggIT09IHVuZGVmaW5lZCAmJiBhY3RpdmVJbmRleCA8IHByb3BzLmNvbG9ycy5sZW5ndGgpID8gcHJvcHMuY29sb3JzW2FjdGl2ZUluZGV4XSA6IHByb3BzLmNvbG9yO1xyXG4gICAgdmFyIHJlZiA9IGdldFNsaWRlckRpbWVuc2lvbnMocHJvcHMpO1xuICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcbiAgICB2YXIgcmFkaXVzID0gcmVmLnJhZGl1cztcclxuICAgIHZhciBoYW5kbGVQb3MgPSBnZXRTbGlkZXJIYW5kbGVQb3NpdGlvbihwcm9wcywgYWN0aXZlQ29sb3IpO1xyXG4gICAgdmFyIGdyYWRpZW50ID0gZ2V0U2xpZGVyR3JhZGllbnQocHJvcHMsIGFjdGl2ZUNvbG9yKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0KHgsIHksIHR5cGUpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBnZXRTbGlkZXJWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSk7XHJcbiAgICAgICAgcHJvcHMucGFyZW50LmlucHV0QWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBhY3RpdmVDb2xvcltwcm9wcy5zbGlkZXJUeXBlXSA9IHZhbHVlO1xyXG4gICAgICAgIHByb3BzLm9uSW5wdXQodHlwZSwgcHJvcHMuaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChoKElyb0NvbXBvbmVudFdyYXBwZXIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IG9uSW5wdXQ6IGhhbmRsZUlucHV0IH0pLCBmdW5jdGlvbiAodWlkLCByb290UHJvcHMsIHJvb3RTdHlsZXMpIHsgcmV0dXJuIChoKFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe30sIHJvb3RQcm9wcywgeyBjbGFzc05hbWU6IFwiSXJvU2xpZGVyXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCB7cG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiBjc3NWYWx1ZSh3aWR0aCksXHJcbiAgICAgICAgICAgIGhlaWdodDogY3NzVmFsdWUoaGVpZ2h0KSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBjc3NWYWx1ZShyYWRpdXMpLFxyXG4gICAgICAgICAgICAvLyBjaGVja2VyZWQgYmcgdG8gcmVwcmVzZW50IGFscGhhXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiY29uaWMtZ3JhZGllbnQoI2NjYyAyNSUsICNmZmYgMCA1MCUsICNjY2MgMCA3NSUsICNmZmYgMClcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICc4cHggOHB4J30sXHJcbiAgICAgICAgICAgIHJvb3RTdHlsZXMpIH0pLFxyXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiSXJvU2xpZGVyR3JhZGllbnRcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIHtwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBjc3NWYWx1ZShyYWRpdXMpLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY3NzR3JhZGllbnQoJ2xpbmVhcicsIHByb3BzLmxheW91dERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3RvIHRvcCcgOiAndG8gcmlnaHQnLCBncmFkaWVudCl9LFxyXG4gICAgICAgICAgICAgICAgY3NzQm9yZGVyU3R5bGVzKHByb3BzKSkgfSksXHJcbiAgICAgICAgaChJcm9IYW5kbGUsIHsgaXNBY3RpdmU6IHRydWUsIGluZGV4OiBhY3RpdmVDb2xvci5pbmRleCwgcjogcHJvcHMuaGFuZGxlUmFkaXVzLCB1cmw6IHByb3BzLmhhbmRsZVN2ZywgcHJvcHM6IHByb3BzLmhhbmRsZVByb3BzLCB4OiBoYW5kbGVQb3MueCwgeTogaGFuZGxlUG9zLnkgfSkpKTsgfSkpO1xyXG59XHJcbklyb1NsaWRlci5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBzbGlkZXJEZWZhdWx0T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIElyb0JveChwcm9wcykge1xyXG4gICAgdmFyIHJlZiA9IGdldEJveERpbWVuc2lvbnMocHJvcHMpO1xuICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcbiAgICB2YXIgcmFkaXVzID0gcmVmLnJhZGl1cztcclxuICAgIHZhciBjb2xvcnMgPSBwcm9wcy5jb2xvcnM7XHJcbiAgICB2YXIgY29sb3JQaWNrZXIgPSBwcm9wcy5wYXJlbnQ7XHJcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBwcm9wcy5hY3RpdmVJbmRleDtcclxuICAgIHZhciBhY3RpdmVDb2xvciA9IChhY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZUluZGV4IDwgcHJvcHMuY29sb3JzLmxlbmd0aCkgPyBwcm9wcy5jb2xvcnNbYWN0aXZlSW5kZXhdIDogcHJvcHMuY29sb3I7XHJcbiAgICB2YXIgZ3JhZGllbnRzID0gZ2V0Qm94R3JhZGllbnRzKHByb3BzLCBhY3RpdmVDb2xvcik7XHJcbiAgICB2YXIgaGFuZGxlUG9zaXRpb25zID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHsgcmV0dXJuIGdldEJveEhhbmRsZVBvc2l0aW9uKHByb3BzLCBjb2xvcik7IH0pO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoeCwgeSwgaW5wdXRUeXBlKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VHlwZSA9PT0gMCAvKiBTdGFydCAqLykge1xyXG4gICAgICAgICAgICAvLyBnZXRIYW5kbGVBdFBvaW50KCkgcmV0dXJucyB0aGUgaW5kZXggZm9yIHRoZSBoYW5kbGUgaWYgdGhlIHBvaW50ICdoaXRzJyBpdCwgb3IgbnVsbCBvdGhlcndpc2VcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUhhbmRsZSA9IGdldEhhbmRsZUF0UG9pbnQocHJvcHMsIHgsIHksIGhhbmRsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBoaXQgYSBoYW5kbGUsIHNldCBpdCBhcyB0aGUgYWN0aXZlIGhhbmRsZSwgYnV0IGRvbid0IHVwZGF0ZSB0aGUgY29sb3JcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUhhbmRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3JQaWNrZXIuc2V0QWN0aXZlQ29sb3IoYWN0aXZlSGFuZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGlkbid0IGhpdCBhIGhhbmRsZSwgc2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGhhbmRsZSB0byB0aGF0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3JQaWNrZXIuaW5wdXRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3IuaHN2ID0gZ2V0Qm94VmFsdWVGcm9tSW5wdXQocHJvcHMsIHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25JbnB1dChpbnB1dFR5cGUsIHByb3BzLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtb3ZlIGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgaGFzIHN0YXJ0ZWQgZHJhZ2dpbmdcclxuICAgICAgICBlbHNlIGlmIChpbnB1dFR5cGUgPT09IDEgLyogTW92ZSAqLykge1xyXG4gICAgICAgICAgICBjb2xvclBpY2tlci5pbnB1dEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGFjdGl2ZUNvbG9yLmhzdiA9IGdldEJveFZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHRoZSBjb2xvciBwaWNrZXIgZmlyZSBpbnB1dDpzdGFydCwgaW5wdXQ6bW92ZSBvciBpbnB1dDplbmQgZXZlbnRzXHJcbiAgICAgICAgcHJvcHMub25JbnB1dChpbnB1dFR5cGUsIHByb3BzLmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoaChJcm9Db21wb25lbnRXcmFwcGVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBvbklucHV0OiBoYW5kbGVJbnB1dCB9KSwgZnVuY3Rpb24gKHVpZCwgcm9vdFByb3BzLCByb290U3R5bGVzKSB7IHJldHVybiAoaChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCByb290UHJvcHMsIHsgY2xhc3NOYW1lOiBcIklyb0JveFwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwge3dpZHRoOiBjc3NWYWx1ZSh3aWR0aCksXHJcbiAgICAgICAgICAgIGhlaWdodDogY3NzVmFsdWUoaGVpZ2h0KSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSd9LFxyXG4gICAgICAgICAgICByb290U3R5bGVzKSB9KSxcclxuICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIklyb0JveFwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwge3dpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogY3NzVmFsdWUocmFkaXVzKX0sXHJcbiAgICAgICAgICAgICAgICBjc3NCb3JkZXJTdHlsZXMocHJvcHMpLFxyXG4gICAgICAgICAgICAgICAge2JhY2tncm91bmQ6IGNzc0dyYWRpZW50KCdsaW5lYXInLCAndG8gYm90dG9tJywgZ3JhZGllbnRzWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICsgJywnICtcclxuICAgICAgICAgICAgICAgICAgICBjc3NHcmFkaWVudCgnbGluZWFyJywgJ3RvIHJpZ2h0JywgZ3JhZGllbnRzWzBdKX0pIH0pLFxyXG4gICAgICAgIGNvbG9ycy5maWx0ZXIoZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiBjb2xvciAhPT0gYWN0aXZlQ29sb3I7IH0pLm1hcChmdW5jdGlvbiAoY29sb3IpIHsgcmV0dXJuIChoKElyb0hhbmRsZSwgeyBpc0FjdGl2ZTogZmFsc2UsIGluZGV4OiBjb2xvci5pbmRleCwgZmlsbDogY29sb3IuaHNsU3RyaW5nLCByOiBwcm9wcy5oYW5kbGVSYWRpdXMsIHVybDogcHJvcHMuaGFuZGxlU3ZnLCBwcm9wczogcHJvcHMuaGFuZGxlUHJvcHMsIHg6IGhhbmRsZVBvc2l0aW9uc1tjb2xvci5pbmRleF0ueCwgeTogaGFuZGxlUG9zaXRpb25zW2NvbG9yLmluZGV4XS55IH0pKTsgfSksXHJcbiAgICAgICAgaChJcm9IYW5kbGUsIHsgaXNBY3RpdmU6IHRydWUsIGluZGV4OiBhY3RpdmVDb2xvci5pbmRleCwgZmlsbDogYWN0aXZlQ29sb3IuaHNsU3RyaW5nLCByOiBwcm9wcy5hY3RpdmVIYW5kbGVSYWRpdXMgfHwgcHJvcHMuaGFuZGxlUmFkaXVzLCB1cmw6IHByb3BzLmhhbmRsZVN2ZywgcHJvcHM6IHByb3BzLmhhbmRsZVByb3BzLCB4OiBoYW5kbGVQb3NpdGlvbnNbYWN0aXZlQ29sb3IuaW5kZXhdLngsIHk6IGhhbmRsZVBvc2l0aW9uc1thY3RpdmVDb2xvci5pbmRleF0ueSB9KSkpOyB9KSk7XHJcbn1cblxudmFyIEhVRV9HUkFESUVOVF9DTE9DS1dJU0UgPSAnY29uaWMtZ3JhZGllbnQocmVkLCB5ZWxsb3csIGxpbWUsIGFxdWEsIGJsdWUsIG1hZ2VudGEsIHJlZCknO1xyXG52YXIgSFVFX0dSQURJRU5UX0FOVElDTE9DS1dJU0UgPSAnY29uaWMtZ3JhZGllbnQocmVkLCBtYWdlbnRhLCBibHVlLCBhcXVhLCBsaW1lLCB5ZWxsb3csIHJlZCknO1xyXG5mdW5jdGlvbiBJcm9XaGVlbChwcm9wcykge1xyXG4gICAgdmFyIHJlZiA9IGdldFdoZWVsRGltZW5zaW9ucyhwcm9wcyk7XG4gICAgdmFyIHdpZHRoID0gcmVmLndpZHRoO1xuICAgIHZhciBjb2xvcnMgPSBwcm9wcy5jb2xvcnM7XG4gICAgdmFyIGJvcmRlcldpZHRoID0gcHJvcHMuYm9yZGVyV2lkdGg7XHJcbiAgICB2YXIgY29sb3JQaWNrZXIgPSBwcm9wcy5wYXJlbnQ7XHJcbiAgICB2YXIgYWN0aXZlQ29sb3IgPSBwcm9wcy5jb2xvcjtcclxuICAgIHZhciBoc3YgPSBhY3RpdmVDb2xvci5oc3Y7XHJcbiAgICB2YXIgaGFuZGxlUG9zaXRpb25zID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHsgcmV0dXJuIGdldFdoZWVsSGFuZGxlUG9zaXRpb24ocHJvcHMsIGNvbG9yKTsgfSk7XHJcbiAgICB2YXIgY2lyY2xlU3R5bGVzID0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0KHgsIHksIGlucHV0VHlwZSkge1xyXG4gICAgICAgIGlmIChpbnB1dFR5cGUgPT09IDAgLyogU3RhcnQgKi8pIHtcclxuICAgICAgICAgICAgLy8gaW5wdXQgaGl0Ym94IGlzIGEgc3F1YXJlLCBcclxuICAgICAgICAgICAgLy8gc28gd2Ugd2FudCB0byBpZ25vcmUgYW55IGluaXRpYWwgY2xpY2tzIG91dHNpZGUgdGhlIGNpcmN1bGFyIHNoYXBlIG9mIHRoZSB3aGVlbFxyXG4gICAgICAgICAgICBpZiAoIWlzSW5wdXRJbnNpZGVXaGVlbChwcm9wcywgeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybmluZyBmYWxzZSB3aWxsIGNlYXNlIGFsbCBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBpbnRlcmFjdGlvblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGdldEhhbmRsZUF0UG9pbnQoKSByZXR1cm5zIHRoZSBpbmRleCBmb3IgdGhlIGhhbmRsZSBpZiB0aGUgcG9pbnQgJ2hpdHMnIGl0LCBvciBudWxsIG90aGVyd2lzZVxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSGFuZGxlID0gZ2V0SGFuZGxlQXRQb2ludChwcm9wcywgeCwgeSwgaGFuZGxlUG9zaXRpb25zKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGhpdCBhIGhhbmRsZSwgc2V0IGl0IGFzIHRoZSBhY3RpdmUgaGFuZGxlLCBidXQgZG9uJ3QgdXBkYXRlIHRoZSBjb2xvclxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlSGFuZGxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvclBpY2tlci5zZXRBY3RpdmVDb2xvcihhY3RpdmVIYW5kbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBkaWRuJ3QgaGl0IGEgaGFuZGxlLCBzZXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgaGFuZGxlIHRvIHRoYXQgcG9zaXRpb25cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvclBpY2tlci5pbnB1dEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvci5oc3YgPSBnZXRXaGVlbFZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KTtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQoaW5wdXRUeXBlLCBwcm9wcy5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbW92ZSBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIGhhcyBzdGFydGVkIGRyYWdnaW5nXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSAxIC8qIE1vdmUgKi8pIHtcclxuICAgICAgICAgICAgY29sb3JQaWNrZXIuaW5wdXRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBhY3RpdmVDb2xvci5oc3YgPSBnZXRXaGVlbFZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHRoZSBjb2xvciBwaWNrZXIgZmlyZSBpbnB1dDpzdGFydCwgaW5wdXQ6bW92ZSBvciBpbnB1dDplbmQgZXZlbnRzXHJcbiAgICAgICAgcHJvcHMub25JbnB1dChpbnB1dFR5cGUsIHByb3BzLmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoaChJcm9Db21wb25lbnRXcmFwcGVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBvbklucHV0OiBoYW5kbGVJbnB1dCB9KSwgZnVuY3Rpb24gKHVpZCwgcm9vdFByb3BzLCByb290U3R5bGVzKSB7IHJldHVybiAoaChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCByb290UHJvcHMsIHsgY2xhc3NOYW1lOiBcIklyb1doZWVsXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCB7d2lkdGg6IGNzc1ZhbHVlKHdpZHRoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBjc3NWYWx1ZSh3aWR0aCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnfSxcclxuICAgICAgICAgICAgcm9vdFN0eWxlcykgfSksXHJcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJJcm9XaGVlbEh1ZVwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgY2lyY2xlU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAge3RyYW5zZm9ybTogKFwicm90YXRlWihcIiArIChwcm9wcy53aGVlbEFuZ2xlICsgOTApICsgXCJkZWcpXCIpLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcHJvcHMud2hlZWxEaXJlY3Rpb24gPT09ICdjbG9ja3dpc2UnID8gSFVFX0dSQURJRU5UX0NMT0NLV0lTRSA6IEhVRV9HUkFESUVOVF9BTlRJQ0xPQ0tXSVNFfSkgfSksXHJcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJJcm9XaGVlbFNhdHVyYXRpb25cIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGNpcmNsZVN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUsICNmZmYsIHRyYW5zcGFyZW50KSd9KSB9KSxcclxuICAgICAgICBwcm9wcy53aGVlbExpZ2h0bmVzcyAmJiAoaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJJcm9XaGVlbExpZ2h0bmVzc1wiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgY2lyY2xlU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAge2JhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgLSBoc3YudiAvIDEwMH0pIH0pKSxcclxuICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIklyb1doZWVsQm9yZGVyXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBjaXJjbGVTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBjc3NCb3JkZXJTdHlsZXMocHJvcHMpKSB9KSxcclxuICAgICAgICBjb2xvcnMuZmlsdGVyKGZ1bmN0aW9uIChjb2xvcikgeyByZXR1cm4gY29sb3IgIT09IGFjdGl2ZUNvbG9yOyB9KS5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiAoaChJcm9IYW5kbGUsIHsgaXNBY3RpdmU6IGZhbHNlLCBpbmRleDogY29sb3IuaW5kZXgsIGZpbGw6IGNvbG9yLmhzbFN0cmluZywgcjogcHJvcHMuaGFuZGxlUmFkaXVzLCB1cmw6IHByb3BzLmhhbmRsZVN2ZywgcHJvcHM6IHByb3BzLmhhbmRsZVByb3BzLCB4OiBoYW5kbGVQb3NpdGlvbnNbY29sb3IuaW5kZXhdLngsIHk6IGhhbmRsZVBvc2l0aW9uc1tjb2xvci5pbmRleF0ueSB9KSk7IH0pLFxyXG4gICAgICAgIGgoSXJvSGFuZGxlLCB7IGlzQWN0aXZlOiB0cnVlLCBpbmRleDogYWN0aXZlQ29sb3IuaW5kZXgsIGZpbGw6IGFjdGl2ZUNvbG9yLmhzbFN0cmluZywgcjogcHJvcHMuYWN0aXZlSGFuZGxlUmFkaXVzIHx8IHByb3BzLmhhbmRsZVJhZGl1cywgdXJsOiBwcm9wcy5oYW5kbGVTdmcsIHByb3BzOiBwcm9wcy5oYW5kbGVQcm9wcywgeDogaGFuZGxlUG9zaXRpb25zW2FjdGl2ZUNvbG9yLmluZGV4XS54LCB5OiBoYW5kbGVQb3NpdGlvbnNbYWN0aXZlQ29sb3IuaW5kZXhdLnkgfSkpKTsgfSkpO1xyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdpZGdldChXaWRnZXRDb21wb25lbnQpIHtcclxuICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gZnVuY3Rpb24gKHBhcmVudCwgcHJvcHMpIHtcclxuICAgICAgICB2YXIgd2lkZ2V0OyAvLyB3aWxsIGJlY29tZSBhbiBpbnN0YW5jZSBvZiB0aGUgd2lkZ2V0IGNvbXBvbmVudCBjbGFzc1xyXG4gICAgICAgIHZhciB3aWRnZXRSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgLy8gUmVuZGVyIHdpZGdldCBpbnRvIGEgdGVtcCBET00gbm9kZVxyXG4gICAgICAgIEkoaChXaWRnZXRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHtyZWY6IGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuIHdpZGdldCA9IHJlZjsgfX0sXHJcbiAgICAgICAgICAgIHByb3BzKSksIHdpZGdldFJvb3QpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdW50V2lkZ2V0KCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gcGFyZW50IGluc3RhbmNlb2YgRWxlbWVudCA/IHBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpZGdldC5iYXNlKTtcclxuICAgICAgICAgICAgd2lkZ2V0Lm9uTW91bnQoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTW91bnQgaXQgaW50byB0aGUgRE9NIHdoZW4gdGhlIHBhZ2UgZG9jdW1lbnQgaXMgcmVhZHlcclxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgICAgICAgIG1vdW50V2lkZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbW91bnRXaWRnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lkZ2V0O1xyXG4gICAgfTtcclxuICAgIC8vIEFsbG93IHRoZSB3aWRnZXQgZmFjdG9yeSB0byBpbmhlcml0IGNvbXBvbmVudCBwcm90b3R5cGUgKyBzdGF0aWMgY2xhc3MgbWV0aG9kc1xyXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBsdWdpbiBhdXRob3JzIHRvIGV4dGVuZCB0aGUgYmFzZSB3aWRnZXQgY29tcG9uZW50XHJcbiAgICB3aWRnZXRGYWN0b3J5LnByb3RvdHlwZSA9IFdpZGdldENvbXBvbmVudC5wcm90b3R5cGU7XHJcbiAgICBPYmplY3QuYXNzaWduKHdpZGdldEZhY3RvcnksIFdpZGdldENvbXBvbmVudCk7XHJcbiAgICAvLyBBZGQgcmVmZXJlbmNlIHRvIGJhc2UgY29tcG9uZW50IHRvb1xyXG4gICAgd2lkZ2V0RmFjdG9yeS5fX2NvbXBvbmVudCA9IFdpZGdldENvbXBvbmVudDtcclxuICAgIHJldHVybiB3aWRnZXRGYWN0b3J5O1xyXG59XG5cbnZhciBJcm9Db2xvclBpY2tlciA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIElyb0NvbG9yUGlja2VyKHByb3BzKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgICAgICAgQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnB1dEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5hY3RpdmVFdmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmRlZmVycmVkRXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xyXG4gICAgICAgIHZhciBjb2xvcnMgPSBwcm9wcy5jb2xvcnMubGVuZ3RoID4gMCA/IHByb3BzLmNvbG9ycyA6IFtwcm9wcy5jb2xvcl07XHJcbiAgICAgICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yVmFsdWUpIHsgcmV0dXJuIHRoaXMkMS5hZGRDb2xvcihjb2xvclZhbHVlKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDb2xvcigwKTtcclxuICAgICAgICAvLyBQYXNzIGFsbCB0aGUgcHJvcHMgaW50byB0aGUgY29tcG9uZW50J3Mgc3RhdGUsXHJcbiAgICAgICAgLy8gRXhjZXB0IHdlIHdhbnQgdG8gYWRkIHRoZSBjb2xvciBvYmplY3QgYW5kIG1ha2Ugc3VyZSB0aGF0IHJlZnMgYXJlbid0IHBhc3NlZCBkb3duIHRvIGNoaWxkcmVuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLFxyXG4gICAgICAgICAgICB7Y29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIGNvbG9yczogdGhpcy5jb2xvcnMsXHJcbiAgICAgICAgICAgIGxheW91dDogcHJvcHMubGF5b3V0fSk7XHJcbiAgICB9XG5cbiAgICBpZiAoIENvbXBvbmVudCApIElyb0NvbG9yUGlja2VyLl9fcHJvdG9fXyA9IENvbXBvbmVudDtcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSApO1xuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IElyb0NvbG9yUGlja2VyO1xyXG4gICAgLy8gUGx1YmljIG11bHRpY29sb3IgQVBJXHJcbiAgICAvKipcclxuICAgICogQGRlc2MgQWRkIGEgY29sb3IgdG8gdGhlIGNvbG9yIHBpY2tlclxyXG4gICAgKiBAcGFyYW0gY29sb3IgbmV3IGNvbG9yIHRvIGFkZFxyXG4gICAgKiBAcGFyYW0gaW5kZXggb3B0aW9uYWwgY29sb3IgaW5kZXhcclxuICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuYWRkQ29sb3IgPSBmdW5jdGlvbiBhZGRDb2xvciAoY29sb3IsIGluZGV4KSB7XG4gICAgICAgIGlmICggaW5kZXggPT09IHZvaWQgMCApIGluZGV4ID0gdGhpcy5jb2xvcnMubGVuZ3RoO1xuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGlyby5Db2xvclxyXG4gICAgICAgIC8vIEFsc28gYmluZCBpdCB0byBvbkNvbG9yQ2hhbmdlLCBzbyB3aGVuZXZlciB0aGUgY29sb3IgY2hhbmdlcyBpdCB1cGRhdGVzIHRoZSBjb2xvciBwaWNrZXJcclxuICAgICAgICB2YXIgbmV3Q29sb3IgPSBuZXcgSXJvQ29sb3IoY29sb3IsIHRoaXMub25Db2xvckNoYW5nZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBJbnNlcnQgY29sb3IgQCB0aGUgZ2l2ZW4gaW5kZXhcclxuICAgICAgICB0aGlzLmNvbG9ycy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NvbG9yKTtcclxuICAgICAgICAvLyBSZWluZGV4IGNvbG9yc1xyXG4gICAgICAgIHRoaXMuY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yLCBpbmRleCkgeyByZXR1cm4gY29sb3IuaW5kZXggPSBpbmRleDsgfSk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBpY2tlciBzdGF0ZSBpZiBuZWNlc3NhcnlcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JzOiB0aGlzLmNvbG9ycyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmlyZSBjb2xvciBpbml0IGV2ZW50XHJcbiAgICAgICAgdGhpcy5kZWZlcnJlZEVtaXQoJ2NvbG9yOmluaXQnLCBuZXdDb2xvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSZW1vdmUgYSBjb2xvciBmcm9tIHRoZSBjb2xvciBwaWNrZXJcclxuICAgICAqIEBwYXJhbSBpbmRleCBjb2xvciBpbmRleFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUucmVtb3ZlQ29sb3IgPSBmdW5jdGlvbiByZW1vdmVDb2xvciAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmNvbG9ycy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgICAgIC8vIERlc3Ryb3kgdGhlIGNvbG9yIG9iamVjdCAtLSB0aGlzIHVuYmluZHMgaXQgZnJvbSB0aGUgY29sb3IgcGlja2VyXHJcbiAgICAgICAgY29sb3IudW5iaW5kKCk7XHJcbiAgICAgICAgLy8gUmVpbmRleCBjb2xvcnNcclxuICAgICAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvciwgaW5kZXgpIHsgcmV0dXJuIGNvbG9yLmluZGV4ID0gaW5kZXg7IH0pO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwaWNrZXIgc3RhdGUgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogdGhpcy5jb2xvcnMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSBhY3RpdmUgY29sb3Igd2FzIHJlbW92ZWQsIGRlZmF1bHQgYWN0aXZlIGNvbG9yIHRvIDBcclxuICAgICAgICBpZiAoY29sb3IuaW5kZXggPT09IHRoaXMuY29sb3IuaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVDb2xvcigwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmlyZSBjb2xvciByZW1vdmUgZXZlbnRcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbG9yOnJlbW92ZScsIGNvbG9yKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFNldCB0aGUgY3VycmVudGx5IGFjdGl2ZSBjb2xvclxyXG4gICAgICogQHBhcmFtIGluZGV4IGNvbG9yIGluZGV4XHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5zZXRBY3RpdmVDb2xvciA9IGZ1bmN0aW9uIHNldEFjdGl2ZUNvbG9yIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yc1tpbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiB0aGlzLmNvbG9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGaXJlIGNvbG9yIHN3aXRjaCBldmVudFxyXG4gICAgICAgIHRoaXMuZW1pdCgnY29sb3I6c2V0QWN0aXZlJywgdGhpcy5jb2xvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSZXBsYWNlIGFsbCBvZiB0aGUgY3VycmVudCBjb2xvclBpY2tlciBjb2xvcnNcclxuICAgICAqIEBwYXJhbSBuZXdDb2xvclZhbHVlcyBsaXN0IG9mIG5ldyBjb2xvcnMgdG8gYWRkXHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5zZXRDb2xvcnMgPSBmdW5jdGlvbiBzZXRDb2xvcnMgKG5ld0NvbG9yVmFsdWVzLCBhY3RpdmVDb2xvckluZGV4KSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICBpZiAoIGFjdGl2ZUNvbG9ySW5kZXggPT09IHZvaWQgMCApIGFjdGl2ZUNvbG9ySW5kZXggPSAwO1xuXHJcbiAgICAgICAgLy8gVW5iaW5kIGNvbG9yIGV2ZW50c1xyXG4gICAgICAgIHRoaXMuY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiBjb2xvci51bmJpbmQoKTsgfSk7XHJcbiAgICAgICAgLy8gRGVzdHJveSBvbGQgY29sb3JzXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcclxuICAgICAgICAvLyBBZGQgbmV3IGNvbG9yc1xyXG4gICAgICAgIG5ld0NvbG9yVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yVmFsdWUpIHsgcmV0dXJuIHRoaXMkMS5hZGRDb2xvcihjb2xvclZhbHVlKTsgfSk7XHJcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZlIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVDb2xvcihhY3RpdmVDb2xvckluZGV4KTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbG9yOnNldEFsbCcsIHRoaXMuY29sb3JzKTtcclxuICAgIH07XHJcbiAgICAvLyBQdWJsaWMgQ29sb3JQaWNrZXIgZXZlbnRzIEFQSVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBTZXQgYSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudExpc3QgZXZlbnQocykgdG8gbGlzdGVuIHRvXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgaXMgZmlyZWRcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24gKGV2ZW50TGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cclxuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHM7XHJcbiAgICAgICAgLy8gZXZlbnRMaXN0IGNhbiBiZSBhbiBldmVudFR5cGUgc3RyaW5nIG9yIGFuIGFycmF5IG9mIGV2ZW50VHlwZSBzdHJpbmdzXHJcbiAgICAgICAgKCFBcnJheS5pc0FycmF5KGV2ZW50TGlzdCkgPyBbZXZlbnRMaXN0XSA6IGV2ZW50TGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBldmVudCBjYWxsYmFja1xyXG4gICAgICAgICAgICAoZXZlbnRzW2V2ZW50VHlwZV0gfHwgKGV2ZW50c1tldmVudFR5cGVdID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCBkZWZlcnJlZCBldmVudHNcclxuICAgICAgICAgICAgLy8gVGhlc2UgYXJlIGV2ZW50cyB0aGF0IGNhbiBiZSBzdG9yZWQgdW50aWwgYSBsaXN0ZW5lciBmb3IgdGhlbSBpcyBhZGRlZFxyXG4gICAgICAgICAgICBpZiAodGhpcyQxLmRlZmVycmVkRXZlbnRzW2V2ZW50VHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIERlZmZlcmVkIGV2ZW50cyBzdG9yZSBhbiBhcnJheSBvZiBhcmd1bWVudHMgZnJvbSB3aGVuIHRoZSBldmVudCB3YXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzJDEuZGVmZXJyZWRFdmVudHNbZXZlbnRUeXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIENsZWFyIGRlZmVycmVkIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgdGhpcyQxLmRlZmVycmVkRXZlbnRzW2V2ZW50VHlwZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgUmVtb3ZlIGEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFuIGV2ZW50IGFkZGVkIHdpdGggb24oKVxyXG4gICAgICogQHBhcmFtIGV2ZW50TGlzdCAtIGV2ZW50KHMpIHRvIGxpc3RlbiB0b1xyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVtb3ZlXHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiBvZmYgKGV2ZW50TGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cclxuICAgICAgICAoIUFycmF5LmlzQXJyYXkoZXZlbnRMaXN0KSA/IFtldmVudExpc3RdIDogZXZlbnRMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrTGlzdCA9IHRoaXMkMS5ldmVudHNbZXZlbnRUeXBlXTtcclxuICAgICAgICAgICAgLy8gdGhpcy5lbWl0SG9vaygnZXZlbnQ6b2ZmJywgZXZlbnRUeXBlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja0xpc3QpXHJcbiAgICAgICAgICAgICAgICB7IGNhbGxiYWNrTGlzdC5zcGxpY2UoY2FsbGJhY2tMaXN0LmluZGV4T2YoY2FsbGJhY2spLCAxKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgRW1pdCBhbiBldmVudFxyXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBldmVudCB0byBlbWl0XHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCAoZXZlbnRUeXBlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXHJcbiAgICAgICAgdmFyIGFjdGl2ZUV2ZW50cyA9IHRoaXMuYWN0aXZlRXZlbnRzO1xyXG4gICAgICAgIHZhciBpc0V2ZW50QWN0aXZlID0gYWN0aXZlRXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkgPyBhY3RpdmVFdmVudHNbZXZlbnRUeXBlXSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIFByZXZlbnQgZXZlbnQgY2FsbGJhY2tzIGZyb20gZmlyaW5nIGlmIHRoZSBldmVudCBpcyBhbHJlYWR5IGFjdGl2ZVxyXG4gICAgICAgIC8vIFRoaXMgc3RvcHMgaW5maW5pdGUgbG9vcHMgaWYgc29tZXRoaW5nIGluIGFuIGV2ZW50IGNhbGxiYWNrIGNhdXNlcyB0aGUgc2FtZSBldmVudCB0byBiZSBmaXJlZCBhZ2FpblxyXG4gICAgICAgIC8vIChlLmcuIHNldHRpbmcgdGhlIGNvbG9yIGluc2lkZSBhIGNvbG9yOmNoYW5nZSBjYWxsYmFjaylcclxuICAgICAgICBpZiAoIWlzRXZlbnRBY3RpdmUpIHtcclxuICAgICAgICAgICAgYWN0aXZlRXZlbnRzW2V2ZW50VHlwZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tMaXN0ID0gdGhpcy5ldmVudHNbZXZlbnRUeXBlXSB8fCBbXTtcclxuICAgICAgICAgICAgY2FsbGJhY2tMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbi5hcHBseSh0aGlzJDEsIGFyZ3MpOyB9KTtcclxuICAgICAgICAgICAgYWN0aXZlRXZlbnRzW2V2ZW50VHlwZV0gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBFbWl0IGFuIGV2ZW50IG5vdywgb3Igc2F2ZSBpdCBmb3Igd2hlbiB0aGUgcmVsZXZlbnQgZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWRcclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gZW1pdFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuZGVmZXJyZWRFbWl0ID0gZnVuY3Rpb24gZGVmZXJyZWRFbWl0IChldmVudFR5cGUpIHtcbiAgICAgICAgdmFyIHJlZjtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xyXG4gICAgICAgIHZhciBkZWZlcnJlZEV2ZW50cyA9IHRoaXMuZGVmZXJyZWRFdmVudHM7XHJcbiAgICAgICAgKHJlZiA9IHRoaXMpLmVtaXQuYXBwbHkocmVmLCBbIGV2ZW50VHlwZSBdLmNvbmNhdCggYXJncyApKTtcclxuICAgICAgICAoZGVmZXJyZWRFdmVudHNbZXZlbnRUeXBlXSB8fCAoZGVmZXJyZWRFdmVudHNbZXZlbnRUeXBlXSA9IFtdKSkucHVzaChhcmdzKTtcclxuICAgIH07XHJcbiAgICAvLyBQdWJsaWMgdXRpbGl0eSBtZXRob2RzXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMgKG5ld09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld09wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgUmVzaXplIHRoZSBjb2xvciBwaWNrZXJcclxuICAgICAqIEBwYXJhbSB3aWR0aCAtIG5ldyB3aWR0aFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gcmVzaXplICh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyh7IHdpZHRoOiB3aWR0aCB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFJlc2V0IHRoZSBjb2xvciBwaWNrZXIgdG8gdGhlIGluaXRpYWwgY29sb3IgcHJvdmlkZWQgaW4gdGhlIGNvbG9yIHBpY2tlciBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikgeyByZXR1cm4gY29sb3IucmVzZXQoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogdGhpcy5jb2xvcnMgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBDYWxsZWQgYnkgdGhlIGNyZWF0ZVdpZGdldCB3cmFwcGVyIHdoZW4gdGhlIGVsZW1lbnQgaXMgbW91bnRlZCBpbnRvIHRoZSBwYWdlXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIC0gdGhlIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGlzIENvbG9yUGlja2VyIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5vbk1vdW50ID0gZnVuY3Rpb24gb25Nb3VudCAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmRlZmVycmVkRW1pdCgnbW91bnQnLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICAvLyBJbnRlcm5hbCBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFJlYWN0IHRvIGEgY29sb3IgdXBkYXRlXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgLSBjdXJyZW50IGNvbG9yXHJcbiAgICAgKiBAcGFyYW0gY2hhbmdlcyAtIHNob3dzIHdoaWNoIGgscyx2LGEgY29sb3IgY2hhbm5lbHMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUub25Db2xvckNoYW5nZSA9IGZ1bmN0aW9uIG9uQ29sb3JDaGFuZ2UgKGNvbG9yLCBjaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiB0aGlzLmNvbG9yIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnB1dDpjaGFuZ2UnLCBjb2xvciwgY2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdCgnY29sb3I6Y2hhbmdlJywgY29sb3IsIGNoYW5nZXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgSGFuZGxlIGlucHV0IGZyb20gYSBVSSBjb250cm9sIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB0eXBlIC0gZXZlbnQgdHlwZVxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuZW1pdElucHV0RXZlbnQgPSBmdW5jdGlvbiBlbWl0SW5wdXRFdmVudCAodHlwZSwgb3JpZ2luSWQpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gMCAvKiBTdGFydCAqLykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2lucHV0OnN0YXJ0JywgdGhpcy5jb2xvciwgb3JpZ2luSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAxIC8qIE1vdmUgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnB1dDptb3ZlJywgdGhpcy5jb2xvciwgb3JpZ2luSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAyIC8qIEVuZCAqLykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2lucHV0OmVuZCcsIHRoaXMuY29sb3IsIG9yaWdpbklkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgICAgICAgdmFyIGxheW91dCA9IHN0YXRlLmxheW91dDtcclxuICAgICAgICAvLyB1c2UgbGF5b3V0IHNob3J0aGFuZHNcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobGF5b3V0KSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IHNvbWU/XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IElyb1doZWVsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29tcG9uZW50OiBJcm9TbGlkZXIgfSBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFkZCB0cmFuc3BhcmVuY3kgc2xpZGVyIHRvIHRoZSBsYXlvdXRcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnRyYW5zcGFyZW5jeSkge1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogSXJvU2xpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyVHlwZTogJ2FscGhhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcIklyb0NvbG9yUGlja2VyXCIsIGlkOiBzdGF0ZS5pZCwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlLmRpc3BsYXlcclxuICAgICAgICAgICAgfSB9LCBsYXlvdXQubWFwKGZ1bmN0aW9uIChyZWYsIGNvbXBvbmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIFVpQ29tcG9uZW50ID0gcmVmLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHJlZi5vcHRpb25zO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChoKFVpQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgb3B0aW9ucywgeyByZWY6IHVuZGVmaW5lZCwgb25JbnB1dDogdGhpcyQxLmVtaXRJbnB1dEV2ZW50LmJpbmQodGhpcyQxKSwgcGFyZW50OiB0aGlzJDEsIGluZGV4OiBjb21wb25lbnRJbmRleCB9KSkpO1xuICAgICAgICB9KSkpO1xyXG4gICAgfTtcblxuICAgIHJldHVybiBJcm9Db2xvclBpY2tlcjtcbn0obSkpO1xyXG5Jcm9Db2xvclBpY2tlci5kZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBpcm9Db2xvclBpY2tlck9wdGlvbkRlZmF1bHRzLFxyXG4gICAge2NvbG9yczogW10sXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBsYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgIG1hcmdpbjogbnVsbH0pO1xyXG52YXIgSXJvQ29sb3JQaWNrZXJXaWRnZXQgPSBjcmVhdGVXaWRnZXQoSXJvQ29sb3JQaWNrZXIpO1xuXG52YXIgaXJvO1xyXG4oZnVuY3Rpb24gKGlybykge1xyXG4gICAgaXJvLnZlcnNpb24gPSBcIjUuNS4yXCI7IC8vIHJlcGxhY2VkIGJ5IEByb2xsdXAvcGx1Z2luLXJlcGxhY2U7IHNlZSByb2xsdXAuY29uZmlnLmpzXHJcbiAgICBpcm8uQ29sb3IgPSBJcm9Db2xvcjtcclxuICAgIGlyby5Db2xvclBpY2tlciA9IElyb0NvbG9yUGlja2VyV2lkZ2V0O1xyXG4gICAgdmFyIHVpO1xyXG4gICAgKGZ1bmN0aW9uICh1aSkge1xyXG4gICAgICAgIHVpLmggPSBoO1xyXG4gICAgICAgIHVpLkNvbXBvbmVudEJhc2UgPSBJcm9Db21wb25lbnRXcmFwcGVyO1xyXG4gICAgICAgIHVpLkhhbmRsZSA9IElyb0hhbmRsZTtcclxuICAgICAgICB1aS5TbGlkZXIgPSBJcm9TbGlkZXI7XHJcbiAgICAgICAgdWkuV2hlZWwgPSBJcm9XaGVlbDtcclxuICAgICAgICB1aS5Cb3ggPSBJcm9Cb3g7XHJcbiAgICB9KSh1aSA9IGlyby51aSB8fCAoaXJvLnVpID0ge30pKTtcclxufSkoaXJvIHx8IChpcm8gPSB7fSkpO1xyXG52YXIgaXJvJDEgPSBpcm87XG5cbmV4cG9ydCBkZWZhdWx0IGlybyQxO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAtLXJvd3M6IDIwMDtcXG4gICAgLS1jb2xzOiAxMDA7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogcmdiKDIxNCwgMTQyLCA3KTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAtLW1lbnUtYmFja2dyb3VuZDogcmdiYSgxNzYsIDE3NiwgMTc2LCAwLjg1Nyk7XFxuICAgIC0tc2hhZG93LWNvbG9yOiByZ2IoMTIzLCAxMjMsIDEyMyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IGluaGVyaXQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQodmFyKC0tcm93cyksIDFmcikgLyByZXBlYXQodmFyKC0tY29scyksIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uYWxpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoNDB2aCArIDYwcHgpO1xcbiAgICByaWdodDogMXZ3O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNzBweCAxNzBweCBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkgLmNhbmNlbCxcXG4uY29sb3JQaWNrZXJVSSAuc3VibWl0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3R0b206IDQ4cHg7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5jYW5jZWwge1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSAuc3VibWl0IHtcXG4gICAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5jYW5jZWw6YWN0aXZlLFxcbi5jb2xvclBpY2tlclVJIC5zdWJtaXQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5zdHlsZXNNZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoNDB2aCArIDYwcHgpO1xcbiAgICByaWdodDogMzcwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5zdHlsZU1lbnUge1xcbiAgICBib3R0b206IGNhbGMoNDB2aCAtIDIwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA5NXB4KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnNlbGVjdGVkIHN2ZyB7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcikpO1xcblxcbn1cXG5cXG4uc3R5bGVNZW51Lm9wZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUwcHgpO1xcbn1cXG5cXG4uc3R5bGVNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ub3BlblN0eWxlTWVudSxcXG4uc3R5bGVNZW51SWNvbixcXG4uc2F2ZVN0eWxlIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnByaW1hcnlDb2xvcixcXG4uc2Vjb25kYXJ5Q29sb3IsXFxuLmJhY2tncm91bmRDb2xvcixcXG4uYm9yZGVyUmFkaXVzSWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5vcGVuU3R5bGVNZW51OmFjdGl2ZSxcXG4ucHJpbWFyeUNvbG9yOmFjdGl2ZSxcXG4uc2Vjb25kYXJ5Q29sb3I6YWN0aXZlLFxcbi5iYWNrZ3JvdW5kQ29sb3I6YWN0aXZlLFxcbi5zYXZlU3R5bGU6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5zdHlsZU1lbnUgLnNhdmVTdHlsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbi5zdHlsZU1lbnUgLnN0eWxlTWVudUljb24sXFxuLnN0eWxlTWVudSAuYmFja2dyb3VuZENvbG9yLFxcbi5zdHlsZU1lbnUgLmJvcmRlclJhZGl1cyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcXG59XFxuXFxuLnByaW1hcnlDb2xvciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlY29uZGFyeUNvbG9yIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5iYWNrZ3JvdW5kQ29sb3Igc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5yZXNpemVNZW51IHtcXG4gICAgYm90dG9tOiBjYWxjKDQwdmggLSAxMDBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDk1cHgpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4ucmVzaXplTWVudS5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQ1MHB4KTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5yb3dJY29uLFxcbi5jb2xJY29uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLm9wZW5SZXNpemVNZW51LFxcbi5yZXNpemVNZW51SWNvbixcXG4ubG9ja2VkIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnJlc2l6ZU1lbnUgLmxvY2tlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4vKiBtYWtlIHBsYXkvcGF1c2UgYnV0dG9uIFxcXCJwb3BcXFwiIHVwb24gY2xpY2tpbmcgKi9cXG4ub3BlblJlc2l6ZU1lbnU6YWN0aXZlLFxcbi5sb2NrZWQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5wbGF5YmFja01lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMXZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG5leHQgdHdvIGxpbmVzIGNlbnRlciAqL1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTIzLCAxMjMsIDEyMyk7XFxufVxcblxcbi5wbGF5YmFja01lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5wbGF5LFxcbi5wYXVzZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wbGF5YmFja01lbnUgLnNwZWVkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLnNwZWVkLFxcbi5yZWZyZXNoIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuZGl2IHN2Z3tcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBtYWtlIHBsYXkvcGF1c2UgYnV0dG9uIFxcXCJwb3BcXFwiIHVwb24gY2xpY2tpbmcgKi9cXG4ucGxheTphY3RpdmUsXFxuLnBhdXNlOmFjdGl2ZSxcXG4ucmVmcmVzaDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA0cHg7XFxufVxcblxcbi5wbGF5YmFja1NwZWVkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29scyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhbmdlJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7ICBcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5ncmF5ZWRPdXQge1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjcpO1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0lBRWhCLFdBQVc7SUFDWCxXQUFXOztJQUVYLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsc0NBQXNDOztJQUV0QyxvQkFBb0I7O0lBRXBCLDZDQUE2QztJQUM3QyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUsUUFBUTtBQUNaOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVB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QUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgXFxuICAgIC0tcm93czogMjAwO1xcbiAgICAtLWNvbHM6IDEwMDtcXG5cXG4gICAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMjE0LCAxNDIsIDcpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDE0OSwgMTQ5KTtcXG5cXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC0tbWVudS1iYWNrZ3JvdW5kOiByZ2JhKDE3NiwgMTc2LCAxNzYsIDAuODU3KTtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigxMjMsIDEyMywgMTIzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogaW5oZXJpdDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCh2YXIoLS1yb3dzKSwgMWZyKSAvIHJlcGVhdCh2YXIoLS1jb2xzKSwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5hbGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogY2FsYyg0MHZoICsgNjBweCk7XFxuICAgIHJpZ2h0OiAxdnc7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE3MHB4IDE3MHB4IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSAuY2FuY2VsLFxcbi5jb2xvclBpY2tlclVJIC5zdWJtaXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvdHRvbTogNDhweDtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkgLmNhbmNlbCB7XFxuICAgIGxlZnQ6IDEwcHg7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5zdWJtaXQge1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkgLmNhbmNlbDphY3RpdmUsXFxuLmNvbG9yUGlja2VyVUkgLnN1Ym1pdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuLnN0eWxlc01lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogY2FsYyg0MHZoICsgNjBweCk7XFxuICAgIHJpZ2h0OiAzNzBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnN0eWxlTWVudSB7XFxuICAgIGJvdHRvbTogY2FsYyg0MHZoIC0gMjBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDk1cHgpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uc2VsZWN0ZWQgc3ZnIHtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKSk7XFxuXFxufVxcblxcbi5zdHlsZU1lbnUub3BlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NTBweCk7XFxufVxcblxcbi5zdHlsZU1lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5vcGVuU3R5bGVNZW51LFxcbi5zdHlsZU1lbnVJY29uLFxcbi5zYXZlU3R5bGUge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ucHJpbWFyeUNvbG9yLFxcbi5zZWNvbmRhcnlDb2xvcixcXG4uYmFja2dyb3VuZENvbG9yLFxcbi5ib3JkZXJSYWRpdXNJY29uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm9wZW5TdHlsZU1lbnU6YWN0aXZlLFxcbi5wcmltYXJ5Q29sb3I6YWN0aXZlLFxcbi5zZWNvbmRhcnlDb2xvcjphY3RpdmUsXFxuLmJhY2tncm91bmRDb2xvcjphY3RpdmUsXFxuLnNhdmVTdHlsZTphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuLnN0eWxlTWVudSAuc2F2ZVN0eWxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnN0eWxlTWVudSAuc3R5bGVNZW51SWNvbixcXG4uc3R5bGVNZW51IC5iYWNrZ3JvdW5kQ29sb3IsXFxuLnN0eWxlTWVudSAuYm9yZGVyUmFkaXVzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xcbn1cXG5cXG4ucHJpbWFyeUNvbG9yIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5Q29sb3Igc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJhY2tncm91bmRDb2xvciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUge1xcbiAgICBib3R0b206IGNhbGMoNDB2aCAtIDEwMHB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG5leHQgdHdvIGxpbmVzIGNlbnRlciAqL1xcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gOTVweCk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5yZXNpemVNZW51Lm9wZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUwcHgpO1xcbn1cXG5cXG4ucmVzaXplTWVudSBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnJvd0ljb24sXFxuLmNvbEljb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG4ub3BlblJlc2l6ZU1lbnUsXFxuLnJlc2l6ZU1lbnVJY29uLFxcbi5sb2NrZWQge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ucmVzaXplTWVudSAubG9ja2VkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxufVxcblxcbi8qIG1ha2UgcGxheS9wYXVzZSBidXR0b24gXFxcInBvcFxcXCIgdXBvbiBjbGlja2luZyAqL1xcbi5vcGVuUmVzaXplTWVudTphY3RpdmUsXFxuLmxvY2tlZDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuLnBsYXliYWNrTWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxdmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigxMjMsIDEyMywgMTIzKTtcXG59XFxuXFxuLnBsYXliYWNrTWVudSBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnBsYXksXFxuLnBhdXNlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBsYXliYWNrTWVudSAuc3BlZWQge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG4uc3BlZWQsXFxuLnJlZnJlc2gge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5kaXYgc3Zne1xcbiAgICBmaWxsOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIG1ha2UgcGxheS9wYXVzZSBidXR0b24gXFxcInBvcFxcXCIgdXBvbiBjbGlja2luZyAqL1xcbi5wbGF5OmFjdGl2ZSxcXG4ucGF1c2U6YWN0aXZlLFxcbi5yZWZyZXNoOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDRweDtcXG59XFxuXFxuLnBsYXliYWNrU3BlZWQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5jb2xzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFuZ2UnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTsgIFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmlucHV0W3R5cGU9J3JhbmdlJ106Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmdyYXllZE91dCB7XFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKCk7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNyk7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3Iocm93cywgY29scykge1xuICAgICAgICB0aGlzLmJvb2xCb2FyZCA9IFtdO1xuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKXtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBOZXdBcnIgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgY29sczsgY29sKyspe1xuICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaCh0aGlzLmRldGVybWluZUluaXRMaWZlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib29sQm9hcmQucHVzaCh0ZW1wTmV3QXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvb2xCb2FyZC5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9vbEJvYXJkWzBdLmxlbmd0aFxuICAgIH1cblxuICAgIGdldEJvYXJkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmJvb2xCb2FyZDtcbiAgICB9XG5cbiAgICBzdGVwRm9yd2FyZCgpe1xuICAgICAgICBjb25zdCBuZWlnYm9yQXJyID0gdGhpcy5nZXROZWlnaGJvckFycigpO1xuICAgICAgICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgICAgICAgZm9yKGxldCBjaGVja1JvdyA9IDA7IGNoZWNrUm93IDwgdGhpcy5ib29sQm9hcmQubGVuZ3RoOyBjaGVja1JvdysrKXtcbiAgICAgICAgICAgIGxldCB0ZW1wTmV3QXJyID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGNoZWNrQ29sID0gMDsgY2hlY2tDb2wgPCB0aGlzLmJvb2xCb2FyZFtjaGVja1Jvd10ubGVuZ3RoOyBjaGVja0NvbCsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvb2xCb2FyZFtjaGVja1Jvd11bY2hlY2tDb2xdKXsgLy8gaWYgdGhlIGNlbGwgaXMgY3VycmVudGx5IGFsaXZlO1xuICAgICAgICAgICAgICAgICAgICBpZihuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMiB8fCBuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2godHJ1ZSk7IC8vIGFsaXZlIHdpdGggdHdvIG9yIDMgbmVpZ2hib3JzLCBzdXJ2aXZlc1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaChmYWxzZSk7IC8vIGFsaXZlIHdpdGggdG9vIG1hbnkvZmV3IG5laWdoYm9ycywgZGllc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7IC8vIGlmIHRoZSBjZWxsIGlzIGN1cnJlbnRseSBkZWFkXG4gICAgICAgICAgICAgICAgICAgIGlmKG5laWdib3JBcnJbY2hlY2tSb3ddW2NoZWNrQ29sXSA9PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaCh0cnVlKTsgLy8gZGVhZCB3aXRoIHRocmVlIG5laWdoYm9ycywgY29tZXMgYWxpdmVcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2goZmFsc2UpOyAvLyBkZWFkIHdpdGggITMgbmVpZ2hib3JzLCBzdGF5cyBkZWFkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnIucHVzaCh0ZW1wTmV3QXJyKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIHRoaXMuYm9vbEJvYXJkID0gbmV3QXJyO1xuICAgIH1cblxuICAgIGdldE5laWdoYm9yQXJyKCl7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuICAgICAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYm9vbEJvYXJkLmxlbmd0aDsgcm93Kyspe1xuICAgICAgICAgICAgY29uc3QgdGVtcE5ld0FyciA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvb2xCb2FyZFtyb3ddLmxlbmd0aDsgY29sKyspe1xuICAgICAgICAgICAgICAgIHRlbXBOZXdBcnIucHVzaCh0aGlzLmdldE5laWdoYm9ycyhyb3csIGNvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0LnB1c2godGVtcE5ld0Fycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBnZXROZWlnaGJvcnMocm93LCBjb2wpe1xuICAgICAgICBsZXQgcmV0ID0gMDtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSA5eDkgc3Vycm91bmRpbmcgdGhlIGNlbGwgcGFzc2VkIGluXG4gICAgICAgIGZvcihsZXQgY2hlY2tSb3cgPSByb3ctMTsgY2hlY2tSb3cgPCByb3crMjsgY2hlY2tSb3crKyl7XG4gICAgICAgICAgICBmb3IobGV0IGNoZWNrQ29sID0gY29sLTE7IGNoZWNrQ29sIDwgY29sKzI7IGNoZWNrQ29sKyspe1xuICAgICAgICAgICAgICAgIC8vIGlzIGluIGJvdW5kc1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrUm93IDwgdGhpcy5ib29sQm9hcmQubGVuZ3RoICYmIGNoZWNrUm93ID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb2wgPCB0aGlzLmJvb2xCb2FyZFtjaGVja1Jvd10ubGVuZ3RoICYmIGNoZWNrQ29sID49IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNuJ3QgdGhlIGNlbGwgaXRzZWxmXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighKGNoZWNrUm93ID09IHJvdyAmJiBjaGVja0NvbCA9PSBjb2wpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvb2xCb2FyZFtjaGVja1Jvd11bY2hlY2tDb2xdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGRldGVybWluZUluaXRMaWZlKCl7XG4gICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCAuNCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaW1hcnksIHNlY29uZGFyeSwgYmFja2dyb3VuZCwgcmFkaXVzKXtcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gcHJpbWFyeTtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkgPSBzZWNvbmRhcnk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGdldFByaW1hcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW1hcnk7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRhcnk7XG4gICAgfVxuXG4gICAgZ2V0QmFja2dyb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBnZXRSYWRpdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgICB9XG59IiwiaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZVNldCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRTdHlsZShzdHlsZSl7XG4gICAgICAgIHRoaXMuc3R5bGVzW3RoaXMuc3R5bGVzLmxlbmd0aF0gPSBzdHlsZTtcbiAgICB9XG5cbiAgICBnZXRTdHlsZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVzO1xuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qcyc7XG4vLyBpbXBvcnRlZCBjb2xvciBwaWNrZXJcbmltcG9ydCBpcm8gZnJvbSAnQGphYW1lcy9pcm8nO1xuaW1wb3J0IFN0eWxlU2V0IGZyb20gJy4vU3R5bGVTZXQuanMnO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgc3RhdGljIGJvYXJkID0gbmV3IEJvYXJkKDUwLCBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gKHdpbmRvdy5pbm5lckhlaWdodCAvIDUwKSkpO1xuICAgIHN0YXRpYyByb3dDb2xMb2NrID0gdHJ1ZTtcbiAgICBzdGF0aWMgcGxheWJhY2tTcGVlZCA9ICgxMDUwIC0gNDc1KTtcbiAgICBzdGF0aWMgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm9hcmQuc3RlcEZvcndhcmQoKTtcbiAgICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgfSwgdGhpcy5wbGF5YmFja1NwZWVkKTtcbiAgICBzdGF0aWMgcGxheWluZyA9IHRydWU7XG4gICAgc3RhdGljIGNvbG9yUGlja2VyID0gbmV3IGlyby5Db2xvclBpY2tlcignI3BpY2tlcicpO1xuICAgIHN0YXRpYyBjdXJyZW50Q29sb3JCZWluZ1BpY2tlZCA9ICdub25lJztcbiAgICBzdGF0aWMgc3R5bGVzID0gbmV3IFN0eWxlU2V0KCk7XG5cbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCl7XG4gICAgICAgIFVJLmFkZERlZmF1bHRTdHlsZXMoKTtcbiAgICAgICAgVUkubG9hZFNhdmVkU3R5bGVzKCk7XG5cbiAgICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgICAgVUkuYWRkV2luZG93UmVzaXplRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgVUkuYWRkUGxheWJhY2tNZW51TGlzdGVuZXJzKCk7XG4gICAgICAgIFVJLmFkZFJlc2l6ZU1lbnVMaXN0ZW5lcnMoKTtcbiAgICAgICAgVUkuYWRkU3R5bGVNZW51TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZERlZmF1bHRTdHlsZXMoKXtcbiAgICAgICAgdGhpcy5zdHlsZXMuYWRkU3R5bGUobmV3IFN0eWxlKFwicmdiKDIxNCwgMTQyLCA3KVwiLCBcInJnYigyNTUsIDI1NSwgMjU1KVwiLCBcInJnYigxNDksIDE0OSwgMTQ5KVwiLCBcIjVweFwiKSk7XG4gICAgICAgIHRoaXMuc3R5bGVzLmFkZFN0eWxlKG5ldyBTdHlsZShcInJnYigyMTQsIDE0MiwgNzApXCIsIFwicmdiKDAsIDAsIDApXCIsIFwicmdiKDE5LCAxNDksIDE0OSlcIiwgXCIycHhcIikpO1xuICAgICAgICB0aGlzLnN0eWxlcy5hZGRTdHlsZShuZXcgU3R5bGUoXCJyZ2IoMjEsIDE0MiwgNylcIiwgXCJyZ2IoMTAwLCAxMDAsIDEwMClcIiwgXCJyZ2IoMTQ5LCAxOSwgMTQ5KVwiLCBcIjEwcHhcIikpOyAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRTYXZlZFN0eWxlcygpe1xuICAgICAgICBjb25zdCBzdHlsZXNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0eWxlc01lbnUnKTtcbiAgICAgICAgc3R5bGVzTWVudS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLnN0eWxlcy5nZXRTdHlsZXMoKS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZS5nZXRCYWNrZ3JvdW5kKCl9O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGApO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3N0eWxlLmdldFNlY29uZGFyeSgpfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3N0eWxlLmdldFJhZGl1cygpfTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N0eWxlLmdldFByaW1hcnkoKX07XG4gICAgICAgICAgICBgKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICBzdHlsZXNNZW51LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgVUkuYWRkU3R5bGVzTWVudUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRTdHlsZXNNZW51TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzdHlsZURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3R5bGVzTWVudSA+IGRpdicpO1xuICAgICAgICBzdHlsZURpdnMuZm9yRWFjaChzdHlsZURpdiA9PiB7XG4gICAgICAgICAgICBzdHlsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCBzdHlsZURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1jb2xvcicsIHN0eWxlRGl2LmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnktY29sb3InLCBzdHlsZURpdi5jaGlsZHJlblswXS5zdHlsZS5ib3JkZXJDb2xvcik7XG4gICAgICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib3JkZXItcmFkaXVzJywgc3R5bGVEaXYuY2hpbGRyZW5bMF0uc3R5bGUuYm9yZGVyUmFkaXVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkU3R5bGVNZW51TGlzdGVuZXJzKCkge1xuICAgICAgICAvLyBvcGVuIHRoZSBzdHlsZSBtZW51XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5vcGVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblN0eWxlTWVudSAub3BlbicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblN0eWxlTWVudSAuY2xvc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0eWxlTWVudScpLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZXNNZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNsb3NlIHRoZSBzdHlsZSBtZW51XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5TdHlsZU1lbnUgLmNsb3NlJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5vcGVuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZU1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkICE9ICdub25lJyl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2xvclBpY2tlclVJXCIpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3R5bGVzTWVudScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBib3JkZXIgcmFkaXVzIGFkanVzdG1lbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvcmRlclJhZGl1c1wiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvcmRlci1yYWRpdXMnLCBlLnRhcmdldC52YWx1ZSArIFwicHhcIik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjbGljayBvbiBhIGNvbG9yIHRvIGNoYW5nZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW1hcnlDb2xvciwgLnNlY29uZGFyeUNvbG9yLCAuYmFja2dyb3VuZENvbG9yXCIpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPT0gJ25vbmUnKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JQaWNrZXJVSVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIFVJLnNldENvbG9yUGlja2VyQ29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBjb2xvciBwaWNrZXIgY2FuY2VsIGJ1dHRvblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yUGlja2VyVUkgLmNhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWR9YCkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yUGlja2VyVUlcIikuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbG9yIHBpY2tlciBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JQaWNrZXJVSSAuc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2xvclBpY2tlclVJXCIpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBVSS5waWNrQ29sb3IoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBuZXcgc2F2ZWQgc3R5bGUgYnV0dG9uXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlU3R5bGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBuZXdTdHlsZSA9IG5ldyBTdHlsZShcbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tcHJpbWFyeS1jb2xvcicpLFxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zZWNvbmRhcnktY29sb3InKSxcbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tYmFja2dyb3VuZC1jb2xvcicpLFxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1ib3JkZXItcmFkaXVzJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlcy5hZGRTdHlsZShuZXdTdHlsZSk7XG4gICAgICAgICAgICBVSS5sb2FkU2F2ZWRTdHlsZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvbG9yUGlja2VyQ29sb3IoKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBuZXdDb2xvcjtcblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID09ICdwcmltYXJ5Q29sb3InKXtcbiAgICAgICAgICAgIG5ld0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnktY29sb3InKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZCA9PSAnc2Vjb25kYXJ5Q29sb3InKXtcbiAgICAgICAgICAgIG5ld0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXNlY29uZGFyeS1jb2xvcicpO1xuICAgICAgICB9ZWxzZXsgLy8gYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAgICAgbmV3Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xvclBpY2tlci5jb2xvci5yZ2JTdHJpbmcgPSBuZXdDb2xvcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGlja0NvbG9yKCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBuZXdDb2xvciA9IHRoaXMuY29sb3JQaWNrZXIuY29sb3IucmdiU3RyaW5nO1xuXG4gICAgICAgIGlmKHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPT0gJ3ByaW1hcnlDb2xvcicpe1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yJywgbmV3Q29sb3IpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID09ICdzZWNvbmRhcnlDb2xvcicpe1xuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnktY29sb3InLCBuZXdDb2xvcik7XG4gICAgICAgIH1lbHNleyAvLyBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCBuZXdDb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUmVzaXplTWVudUxpc3RlbmVycygpe1xuICAgICAgICAvLyBvcGVuIHRoZSByZXNpemUgbWVudVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblJlc2l6ZU1lbnUgLm9wZW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAub3BlbicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblJlc2l6ZU1lbnUgLmNsb3NlJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemVNZW51JykuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2xvc2UgdGhlIHJlc2l6ZSBtZW51XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAuY2xvc2UnKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5SZXNpemVNZW51IC5vcGVuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNpemVNZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbG9jayByb3dzICYgY29sdW1uc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2tlZCAubG9ja09wZW5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2tlZCAubG9ja09wZW5cIikuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrQ2xvc2VkXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbEljb24sIC5jb2xzXCIpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJncmF5ZWRPdXRcIikpO1xuICAgICAgICAgICAgdGhpcy5yb3dDb2xMb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgIFVJLmxvY2tCb2FyZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdW5sb2NrIHJvd3MgJiBjb2x1bW5zXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrQ2xvc2VkXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NrZWQgLmxvY2tDbG9zZWRcIikuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9ja2VkIC5sb2NrT3BlblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xJY29uLCAuY29sc1wiKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JheWVkT3V0XCIpKTtcbiAgICAgICAgICAgIHRoaXMucm93Q29sTG9jayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcm93IHNpemluZyBhZGp1c3RtZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJyb3dzXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93cyA9ICgxNjAgLSBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZih0aGlzLnJvd0NvbExvY2spe1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQobmV3Um93cywgMSk7XG4gICAgICAgICAgICAgICAgVUkubG9ja0JvYXJkKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBVSS51cGRhdGVSb3dzKG5ld1Jvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29sIHNpemluZyBhZGp1c3RtZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb2xzXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoIXRoaXMucm93Q29sTG9jayl7XG4gICAgICAgICAgICAgICAgVUkudXBkYXRlQ29scygxNjAgLSBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVDb2xzKG5ld0NvbHMpIHtcbiAgICAgICAgaWYodGhpcy5wbGF5aW5nKXtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBuZXdDb2xzKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBuZXdDb2xzKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVSb3dzKG5ld1Jvd3MpIHtcbiAgICAgICAgaWYodGhpcy5wbGF5aW5nKXtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKG5ld1Jvd3MsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKG5ld1Jvd3MsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2NrQm9hcmQoKSB7XG4gICAgICAgIGlmKHRoaXMucGxheWluZyl7XG4gICAgICAgICAgICBVSS5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmJvYXJkLmdldFJvd3MoKSwgTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvICh3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLmJvYXJkLmdldFJvd3MoKSkpKTtcbiAgICAgICAgICAgIFVJLmFkanVzdENTU1Jvd3NDb2xzKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gKHdpbmRvdy5pbm5lckhlaWdodCAvIHRoaXMuYm9hcmQuZ2V0Um93cygpKSkpO1xuICAgICAgICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgICAgICAgIFVJLmRyYXdCb2FyZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFkanVzdENTU1Jvd3NDb2xzKCkge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXJvd3MnLCB0aGlzLmJvYXJkLmdldFJvd3MoKSk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY29scycsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkV2luZG93UmVzaXplRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMucm93Q29sTG9jayl7XG4gICAgICAgICAgICAgICAgVUkubG9ja0JvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQbGF5YmFja01lbnVMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICBVSS5wbGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwbGF5YmFja1NwZWVkXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5YmFja1NwZWVkID0gKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tTcGVlZCA9ICgxMDUwIC0gdGhpcy5wbGF5YmFja1NwZWVkKTtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWluZyl7XG4gICAgICAgICAgICAgICAgVUkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBVSS5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBVSS5yZWZyZXNoQm9hcmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hCb2FyZCgpIHtcbiAgICAgICAgaWYodGhpcy5wbGF5aW5nKXtcbiAgICAgICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCB0aGlzLmJvYXJkLmdldENvbHMoKSk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgICAgIFVJLnBsYXkoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCB0aGlzLmJvYXJkLmdldENvbHMoKSk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5KCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5zdGVwRm9yd2FyZCgpO1xuICAgICAgICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICAgIH0sIHRoaXMucGxheWJhY2tTcGVlZCk7XG4gICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhdXNlKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZHJhd0JvYXJkKCl7XG4gICAgICAgIGNvbnN0IGJvYXJkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBjb25zdCBib29sQm9hcmQgPSB0aGlzLmJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgb2xkIGJvYXJkXG4gICAgICAgIGJvYXJkRWxlbS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGJvb2xCb2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0JvYXJkUGllY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZihjb2wpe1xuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFBpZWNlLmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkUGllY2UuY2xhc3NMaXN0LmFkZCgnZGVhZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZEVsZW0uYXBwZW5kQ2hpbGQobmV3Qm9hcmRQaWVjZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=