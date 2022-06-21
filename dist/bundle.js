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
    for (let row = 0; row < rows; row++) {
      const tempNewArr = [];
      for (let col = 0; col < cols; col++) {
        tempNewArr.push(this.determineInitLife());
      }
      this.boolBoard.push(tempNewArr);
    }
  }

  getRows() {
    return this.boolBoard.length;
  }

  getCols() {
    return this.boolBoard[0].length;
  }

  getBoard() {
    return this.boolBoard;
  }

  stepForward() {
    const neigborArr = this.getNeighborArr();
    const newArr = [];
    for (let checkRow = 0; checkRow < this.boolBoard.length; checkRow++) {
      const tempNewArr = [];
      for (let checkCol = 0; checkCol < this.boolBoard[checkRow].length; checkCol++) {
        if (this.boolBoard[checkRow][checkCol]) { // if the cell is currently alive;
          if (neigborArr[checkRow][checkCol] == 2 || neigborArr[checkRow][checkCol] == 3) {
            tempNewArr.push(true); // alive with two or 3 neighbors, survives
          } else {
            tempNewArr.push(false); // alive with too many/few neighbors, dies
          }
        } else { // if the cell is currently dead
          if (neigborArr[checkRow][checkCol] == 3) {
            tempNewArr.push(true); // dead with three neighbors, comes alive
          } else {
            tempNewArr.push(false); // dead with !3 neighbors, stays dead
          }
        }
      }
      newArr.push(tempNewArr);
    }
    this.boolBoard = newArr;
  }

  getNeighborArr() {
    const ret = [];
    for (let row = 0; row < this.boolBoard.length; row++) {
      const tempNewArr = [];
      for (let col = 0; col < this.boolBoard[row].length; col++) {
        tempNewArr.push(this.getNeighbors(row, col));
      }
      ret.push(tempNewArr);
    }
    return ret;
  }

  getNeighbors(row, col) {
    let ret = 0;
    // loop through the 9x9 surrounding the cell passed in
    for (let checkRow = row - 1; checkRow < row + 2; checkRow++) {
      for (let checkCol = col - 1; checkCol < col + 2; checkCol++) {
        // is in bounds
        if (checkRow < this.boolBoard.length && checkRow >= 0
                    && checkCol < this.boolBoard[checkRow].length && checkCol >= 0) {
          // isn't the cell itself
          if (!(checkRow == row && checkCol == col)) {
            if (this.boolBoard[checkRow][checkCol]) {
              ret++;
            }
          }
        }
      }
    }
    return ret;
  }

  determineInitLife() {
    if (Math.random() < 0.4) {
      return true;
    }
    return false;
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
  constructor(primary, secondary, background, radius) {
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
  constructor() {
    this.styles = [];
  }

  addStyle(style) {
    this.styles[this.styles.length] = style;
  }

  getStyles() {
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
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.js */ "./src/modules/Board.js");
/* harmony import */ var _StyleSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleSet.js */ "./src/modules/StyleSet.js");
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style.js */ "./src/modules/Style.js");


// imported color picker



class UI {
  static board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](50, Math.round(window.innerWidth / (window.innerHeight / 50)));

  static rowColLock = true;

  static playbackSpeed = (1050 - 475);

  static timer = setInterval(() => {
    this.board.stepForward();
    UI.drawBoard();
  }, this.playbackSpeed);

  static playing = true;

  static colorPicker = new _jaames_iro__WEBPACK_IMPORTED_MODULE_0__["default"].ColorPicker('#picker');

  static currentColorBeingPicked = 'none';

  static styles = new _StyleSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

  static loadHomepage() {
    UI.addDefaultStyles();
    UI.loadSavedStyles();

    UI.adjustCSSRowsCols();
    UI.addWindowResizeEventListener();
    UI.drawBoard();
    UI.addPlaybackMenuListeners();
    UI.addResizeMenuListeners();
    UI.addStyleMenuListeners();
  }

  static addDefaultStyles() {
    this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]('rgb(214, 142, 7)', 'rgb(255, 255, 255)', 'rgb(149, 149, 149)', '5px'));
    this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]('rgb(214, 142, 70)', 'rgb(0, 0, 0)', 'rgb(19, 149, 149)', '2px'));
    this.styles.addStyle(new _Style_js__WEBPACK_IMPORTED_MODULE_3__["default"]('rgb(21, 142, 7)', 'rgb(100, 100, 100)', 'rgb(149, 19, 149)', '10px'));
  }

  static loadSavedStyles() {
    const stylesMenu = document.querySelector('.stylesMenu');
    stylesMenu.textContent = '';
    this.styles.getStyles().forEach((style) => {
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
    styleDivs.forEach((styleDiv) => {
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
      if (this.currentColorBeingPicked != 'none') {
        document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
        this.currentColorBeingPicked = 'none';
        document.querySelector('.colorPickerUI').classList.add('inactive');
      }
      document.querySelector('.stylesMenu').classList.add('inactive');
    });
    // border radius adjustment
    document.querySelector('input[name="borderRadius"]').addEventListener('input', (e) => {
      const root = document.documentElement;
      root.style.setProperty('--border-radius', `${e.target.value}px`);
    });
    // click on a color to change
    document.querySelectorAll('.primaryColor, .secondaryColor, .backgroundColor').forEach((element) => element.addEventListener('click', (e) => {
      if (this.currentColorBeingPicked == 'none') {
        const selection = e.target.parentNode.parentNode.classList[0];
        this.currentColorBeingPicked = selection;
        document.querySelector(`.${this.currentColorBeingPicked}`).classList.add('selected');
        document.querySelector('.colorPickerUI').classList.remove('inactive');
        UI.setColorPickerColor();
      }
    }));
    // color picker cancel button
    document.querySelector('.colorPickerUI .cancel').addEventListener('click', () => {
      document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
      this.currentColorBeingPicked = 'none';
      document.querySelector('.colorPickerUI').classList.add('inactive');
    });
    // color picker submit button
    document.querySelector('.colorPickerUI .submit').addEventListener('click', () => {
      document.querySelector(`.${this.currentColorBeingPicked}`).classList.remove('selected');
      document.querySelector('.colorPickerUI').classList.add('inactive');
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
        getComputedStyle(root).getPropertyValue('--border-radius'),
      );
      this.styles.addStyle(newStyle);
      UI.loadSavedStyles();
    });
  }

  static setColorPickerColor() {
    const root = document.documentElement;
    let newColor;

    if (this.currentColorBeingPicked == 'primaryColor') {
      newColor = getComputedStyle(root).getPropertyValue('--primary-color');
    } else if (this.currentColorBeingPicked == 'secondaryColor') {
      newColor = getComputedStyle(root).getPropertyValue('--secondary-color');
    } else { // background color
      newColor = getComputedStyle(root).getPropertyValue('--background-color');
    }

    this.colorPicker.color.rgbString = newColor;
  }

  static pickColor() {
    const root = document.documentElement;
    const newColor = this.colorPicker.color.rgbString;

    if (this.currentColorBeingPicked == 'primaryColor') {
      root.style.setProperty('--primary-color', newColor);
    } else if (this.currentColorBeingPicked == 'secondaryColor') {
      root.style.setProperty('--secondary-color', newColor);
    } else { // background color
      root.style.setProperty('--background-color', newColor);
    }
  }

  static addResizeMenuListeners() {
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
    document.querySelector('.locked .lockOpen').addEventListener('click', () => {
      document.querySelector('.locked .lockOpen').classList.add('inactive');
      document.querySelector('.locked .lockClosed').classList.remove('inactive');
      document.querySelectorAll('.colIcon, .cols').forEach((element) => element.classList.add('grayedOut'));
      this.rowColLock = true;
      UI.lockBoard();
    });
    // unlock rows & columns
    document.querySelector('.locked .lockClosed').addEventListener('click', () => {
      document.querySelector('.locked .lockClosed').classList.add('inactive');
      document.querySelector('.locked .lockOpen').classList.remove('inactive');
      document.querySelectorAll('.colIcon, .cols').forEach((element) => element.classList.remove('grayedOut'));
      this.rowColLock = false;
    });
    // row sizing adjustment
    document.querySelector('input[name="rows"]').addEventListener('input', (e) => {
      const newRows = (160 - e.target.value);
      if (this.rowColLock) {
        this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](newRows, 1);
        UI.lockBoard();
      } else {
        UI.updateRows(newRows);
      }
    });
    // col sizing adjustment
    document.querySelector('input[name="cols"]').addEventListener('input', (e) => {
      if (!this.rowColLock) {
        UI.updateCols(160 - e.target.value);
      }
    });
  }

  static updateCols(newCols) {
    if (this.playing) {
      UI.pause();
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), newCols);
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), newCols);
      UI.adjustCSSRowsCols();
      UI.drawBoard();
    }
  }

  static updateRows(newRows) {
    if (this.playing) {
      UI.pause();
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](newRows, this.board.getCols());
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](newRows, this.board.getCols());
      UI.adjustCSSRowsCols();
      UI.drawBoard();
    }
  }

  static lockBoard() {
    if (this.playing) {
      UI.pause();
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), Math.round(window.innerWidth / (window.innerHeight / this.board.getRows())));
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
      if (this.rowColLock) {
        UI.lockBoard();
      }
    });
  }

  static addPlaybackMenuListeners() {
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
      if (this.playing) {
        UI.pause();
        UI.play();
      }
    });

    document.querySelector('.refresh').addEventListener('click', () => {
      UI.refreshBoard();
    });
  }

  static refreshBoard() {
    if (this.playing) {
      UI.pause();
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), this.board.getCols());
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.board.getRows(), this.board.getCols());
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

  static drawBoard() {
    const boardElem = document.querySelector('.board');
    const boolBoard = this.board.getBoard();

    // clear old board
    boardElem.textContent = '';

    boolBoard.forEach((row) => {
      row.forEach((col) => {
        const newBoardPiece = document.createElement('div');
        if (col) {
          newBoardPiece.classList.add('alive');
        } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQixnRUFBZ0U7QUFDaEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7QUFFOUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsY0FBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QyxrREFBa0QsOEJBQThCO0FBQ2hGLDZDQUE2QyxvQ0FBb0M7QUFDakYsNkRBQTZELG9DQUFvQztBQUNqRyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseURBQXlEOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7O0FBRUE7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7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V0FBVyxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcs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dUJBQXVCLGlEQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLGlEQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLGlEQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFLO0FBQzVCO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLGlEQUFLO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDM1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ1g7O0FBRXRCLDhDQUE4QyxtRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvQGphYW1lcy9pcm8vZGlzdC9pcm8uZXMuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvbW9kdWxlcy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL21vZHVsZXMvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi8uL3NyYy9tb2R1bGVzL1N0eWxlU2V0LmpzIiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbC13ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaXJvLmpzIHY1LjUuMlxuICogMjAxNi0yMDIxIEphbWVzIERhbmllbFxuICogTGljZW5zZWQgdW5kZXIgTVBMIDIuMFxuICogZ2l0aHViLmNvbS9qYWFtZXMvaXJvLmpzXG4gKi9cblxudmFyIG4sdSx0LGkscixvLGY9e30sZT1bXSxjPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfF4tLS9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCl7IG5bdV09bFt1XTsgfXJldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobik7fWZ1bmN0aW9uIGgobixsLHUpe3ZhciB0LGkscixvLGY9YXJndW1lbnRzO2lmKGw9cyh7fSxsKSxhcmd1bWVudHMubGVuZ3RoPjMpeyBmb3IodT1bdV0sdD0zO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspeyB1LnB1c2goZlt0XSk7IH0gfWlmKG51bGwhPXUmJihsLmNoaWxkcmVuPXUpLG51bGwhPW4mJm51bGwhPW4uZGVmYXVsdFByb3BzKXsgZm9yKGkgaW4gbi5kZWZhdWx0UHJvcHMpeyB2b2lkIDA9PT1sW2ldJiYobFtpXT1uLmRlZmF1bHRQcm9wc1tpXSk7IH0gfXJldHVybiBvPWwua2V5LG51bGwhPShyPWwucmVmKSYmZGVsZXRlIGwucmVmLG51bGwhPW8mJmRlbGV0ZSBsLmtleSx2KG4sbCxvLHIpfWZ1bmN0aW9uIHYobCx1LHQsaSl7dmFyIHI9e3R5cGU6bCxwcm9wczp1LGtleTp0LHJlZjppLF9fazpudWxsLF9fcDpudWxsLF9fYjowLF9fZTpudWxsLGw6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDB9O3JldHVybiBuLnZub2RlJiZuLnZub2RlKHIpLHJ9ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB5KG4pe2lmKG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbil7IHJldHVybiBudWxsOyB9aWYoXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuKXsgcmV0dXJuIHYobnVsbCxuLG51bGwsbnVsbCk7IH1pZihudWxsIT1uLl9fZXx8bnVsbCE9bi5fX2Mpe3ZhciBsPXYobi50eXBlLG4ucHJvcHMsbi5rZXksbnVsbCk7cmV0dXJuIGwuX19lPW4uX19lLGx9cmV0dXJuIG59ZnVuY3Rpb24gbShuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bDt9ZnVuY3Rpb24gdyhuLGwpe2lmKG51bGw9PWwpeyByZXR1cm4gbi5fX3A/dyhuLl9fcCxuLl9fcC5fX2suaW5kZXhPZihuKSsxKTpudWxsOyB9Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKyl7IGlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpeyByZXR1cm4gdS5fX2U7IH0gfXJldHVybiBcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/dyhuKTpudWxsfWZ1bmN0aW9uIGcobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fcCkmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspeyBpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfSB9cmV0dXJuIGcobil9fWZ1bmN0aW9uIGsobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmMT09PXUucHVzaChsKXx8aSE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoaT1uLmRlYm91bmNlUmVuZGVyaW5nLChuLmRlYm91bmNlUmVuZGVyaW5nfHx0KShfKSk7fWZ1bmN0aW9uIF8oKXt2YXIgbixsLHQsaSxyLG8sZixlO2Zvcih1LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbC5fX3YuX19iLW4uX192Ll9fYn0pO249dS5wb3AoKTspeyBuLl9fZCYmKHQ9dm9pZCAwLGk9dm9pZCAwLG89KHI9KGw9bikuX192KS5fX2UsZj1sLl9fUCxlPWwudSxsLnU9ITEsZiYmKHQ9W10saT0kKGYscixzKHt9LHIpLGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsdCxlLG51bGw9PW8/dyhyKTpvKSxqKHQsciksaSE9byYmZyhyKSkpOyB9fWZ1bmN0aW9uIGIobixsLHUsdCxpLHIsbyxjLHMpe3ZhciBoLHYscCxkLHksbSxnLGs9dSYmdS5fX2t8fGUsXz1rLmxlbmd0aDtpZihjPT1mJiYoYz1udWxsIT1yP3JbMF06Xz93KHUsMCk6bnVsbCksaD0wLGwuX19rPXgobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fX3A9bCx1Ll9fYj1sLl9fYisxLG51bGw9PT0ocD1rW2hdKXx8cCYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpeyBrW2hdPXZvaWQgMDsgfWVsc2UgeyBmb3Iodj0wO3Y8Xzt2Kyspe2lmKChwPWtbdl0pJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7a1t2XT12b2lkIDA7YnJlYWt9cD1udWxsO30gfWlmKGQ9JChuLHUscD1wfHxmLHQsaSxyLG8sbnVsbCxjLHMpLCh2PXUucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkpLnB1c2godix1Ll9fY3x8ZCx1KSxudWxsIT1kKXtpZihudWxsPT1tJiYobT1kKSxudWxsIT11LmwpeyBkPXUubCx1Lmw9bnVsbDsgfWVsc2UgaWYocj09cHx8ZCE9Y3x8bnVsbD09ZC5wYXJlbnROb2RlKXtuOmlmKG51bGw9PWN8fGMucGFyZW50Tm9kZSE9PW4peyBuLmFwcGVuZENoaWxkKGQpOyB9ZWxzZXtmb3IoeT1jLHY9MDsoeT15Lm5leHRTaWJsaW5nKSYmdjxfO3YrPTIpeyBpZih5PT1kKXsgYnJlYWsgbjsgfSB9bi5pbnNlcnRCZWZvcmUoZCxjKTt9XCJvcHRpb25cIj09bC50eXBlJiYobi52YWx1ZT1cIlwiKTt9Yz1kLm5leHRTaWJsaW5nLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZSYmKGwubD1kKTt9fXJldHVybiBoKyssdX0pLGwuX19lPW0sbnVsbCE9ciYmXCJmdW5jdGlvblwiIT10eXBlb2YgbC50eXBlKXsgZm9yKGg9ci5sZW5ndGg7aC0tOyl7IG51bGwhPXJbaF0mJmEocltoXSk7IH0gfWZvcihoPV87aC0tOyl7IG51bGwhPWtbaF0mJkQoa1toXSxrW2hdKTsgfWlmKGcpeyBmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKXsgQShnW2hdLGdbKytoXSxnWysraF0pOyB9IH19ZnVuY3Rpb24geChuLGwsdSl7aWYobnVsbD09dSYmKHU9W10pLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbil7IGwmJnUucHVzaChsKG51bGwpKTsgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShuKSl7IGZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXsgeChuW3RdLGwsdSk7IH0gfWVsc2UgeyB1LnB1c2gobD9sKHkobikpOm4pOyB9cmV0dXJuIHV9ZnVuY3Rpb24gQyhuLGwsdSx0LGkpe3ZhciByO2ZvcihyIGluIHUpeyByIGluIGx8fE4obixyLG51bGwsdVtyXSx0KTsgfWZvcihyIGluIGwpeyBpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxOKG4scixsW3JdLHVbcl0sdCk7IH19ZnVuY3Rpb24gUChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPVwibnVtYmVyXCI9PXR5cGVvZiB1JiYhMT09PWMudGVzdChsKT91K1wicHhcIjpudWxsPT11P1wiXCI6dTt9ZnVuY3Rpb24gTihuLGwsdSx0LGkpe3ZhciByLG8sZixlLGM7aWYoXCJrZXlcIj09PShsPWk/XCJjbGFzc05hbWVcIj09PWw/XCJjbGFzc1wiOmw6XCJjbGFzc1wiPT09bD9cImNsYXNzTmFtZVwiOmwpfHxcImNoaWxkcmVuXCI9PT1sKTtlbHNlIGlmKFwic3R5bGVcIj09PWwpeyBpZihyPW4uc3R5bGUsXCJzdHJpbmdcIj09dHlwZW9mIHUpeyByLmNzc1RleHQ9dTsgfWVsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihyLmNzc1RleHQ9XCJcIix0PW51bGwpLHQpeyBmb3IobyBpbiB0KXsgdSYmbyBpbiB1fHxQKHIsbyxcIlwiKTsgfSB9aWYodSl7IGZvcihmIGluIHUpeyB0JiZ1W2ZdPT09dFtmXXx8UChyLGYsdVtmXSk7IH0gfX0gfWVsc2V7IFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdPyhlPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksYz1sLnRvTG93ZXJDYXNlKCksbD0oYyBpbiBuP2M6bCkuc2xpY2UoMiksdT8odHx8bi5hZGRFdmVudExpc3RlbmVyKGwsVCxlKSwobi50fHwobi50PXt9KSlbbF09dSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsVCxlKSk6XCJsaXN0XCIhPT1sJiZcInRhZ05hbWVcIiE9PWwmJlwiZm9ybVwiIT09bCYmIWkmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpOyB9fWZ1bmN0aW9uIFQobCl7cmV0dXJuIHRoaXMudFtsLnR5cGVdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiAkKGwsdSx0LGkscixvLGYsZSxjLGEpe3ZhciBoLHYscCx5LHcsZyxrLF8sQyxQLE49dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpeyByZXR1cm4gbnVsbDsgfShoPW4uX19iKSYmaCh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBOKXtpZihfPXUucHJvcHMsQz0oaD1OLmNvbnRleHRUeXBlKSYmaVtoLl9fY10sUD1oP0M/Qy5wcm9wcy52YWx1ZTpoLl9fcDppLHQuX19jP2s9KHY9dS5fX2M9dC5fX2MpLl9fcD12Ll9fRTooXCJwcm90b3R5cGVcImluIE4mJk4ucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBOKF8sUCk6KHUuX19jPXY9bmV3IG0oXyxQKSx2LmNvbnN0cnVjdG9yPU4sdi5yZW5kZXI9SCksQyYmQy5zdWIodiksdi5wcm9wcz1fLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9UCx2Ll9fbj1pLHA9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9Ti5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJnModi5fX3M9PXYuc3RhdGU/di5fX3M9cyh7fSx2Ll9fcyk6di5fX3MsTi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoXyx2Ll9fcykpLHApeyBudWxsPT1OLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9di5jb21wb25lbnRXaWxsTW91bnQmJnYuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9di5jb21wb25lbnREaWRNb3VudCYmZi5wdXNoKHYpOyB9ZWxzZXtpZihudWxsPT1OLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbD09ZSYmbnVsbCE9di5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZ2LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoXyxQKSwhZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoXyx2Ll9fcyxQKSl7Zm9yKHYucHJvcHM9Xyx2LnN0YXRlPXYuX19zLHYuX19kPSExLHYuX192PXUsdS5fX2U9bnVsbCE9Yz9jIT09dC5fX2U/Yzp0Ll9fZTpudWxsLHUuX19rPXQuX19rLGg9MDtoPHUuX19rLmxlbmd0aDtoKyspeyB1Ll9fa1toXSYmKHUuX19rW2hdLl9fcD11KTsgfWJyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoXyx2Ll9fcyxQKTt9Zm9yKHk9di5wcm9wcyx3PXYuc3RhdGUsdi5jb250ZXh0PVAsdi5wcm9wcz1fLHYuc3RhdGU9di5fX3MsKGg9bi5fX3IpJiZoKHUpLHYuX19kPSExLHYuX192PXUsdi5fX1A9bCxoPXYucmVuZGVyKHYucHJvcHMsdi5zdGF0ZSx2LmNvbnRleHQpLHUuX19rPXgobnVsbCE9aCYmaC50eXBlPT1kJiZudWxsPT1oLmtleT9oLnByb3BzLmNoaWxkcmVuOmgpLG51bGwhPXYuZ2V0Q2hpbGRDb250ZXh0JiYoaT1zKHMoe30saSksdi5nZXRDaGlsZENvbnRleHQoKSkpLHB8fG51bGw9PXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChnPXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSx3KSksYihsLHUsdCxpLHIsbyxmLGMsYSksdi5iYXNlPXUuX19lO2g9di5fX2gucG9wKCk7KXsgdi5fX3MmJih2LnN0YXRlPXYuX19zKSxoLmNhbGwodik7IH1wfHxudWxsPT15fHxudWxsPT12LmNvbXBvbmVudERpZFVwZGF0ZXx8di5jb21wb25lbnREaWRVcGRhdGUoeSx3LGcpLGsmJih2Ll9fRT12Ll9fcD1udWxsKTt9ZWxzZSB7IHUuX19lPXoodC5fX2UsdSx0LGkscixvLGYsYSk7IH0oaD1uLmRpZmZlZCkmJmgodSk7fWNhdGNoKGwpe24uX19lKGwsdSx0KTt9cmV0dXJuIHUuX19lfWZ1bmN0aW9uIGoobCx1KXtmb3IodmFyIHQ7dD1sLnBvcCgpOyl7IHRyeXt0LmNvbXBvbmVudERpZE1vdW50KCk7fWNhdGNoKGwpe24uX19lKGwsdC5fX3YpO30gfW4uX19jJiZuLl9fYyh1KTt9ZnVuY3Rpb24geihuLGwsdSx0LGkscixvLGMpe3ZhciBzLGEsaCx2LHA9dS5wcm9wcyxkPWwucHJvcHM7aWYoaT1cInN2Z1wiPT09bC50eXBlfHxpLG51bGw9PW4mJm51bGwhPXIpeyBmb3Iocz0wO3M8ci5sZW5ndGg7cysrKXsgaWYobnVsbCE9KGE9cltzXSkmJihudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKSl7bj1hLHJbc109bnVsbDticmVha30gfSB9aWYobnVsbD09bil7aWYobnVsbD09PWwudHlwZSl7IHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTsgfW49aT9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGwudHlwZSk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUpLHI9bnVsbDt9cmV0dXJuIG51bGw9PT1sLnR5cGU/cCE9PWQmJihudWxsIT1yJiYocltyLmluZGV4T2YobildPW51bGwpLG4uZGF0YT1kKTpsIT09dSYmKG51bGwhPXImJihyPWUuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSxoPShwPXUucHJvcHN8fGYpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCxjfHwodnx8aCkmJih2JiZoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fChuLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpLEMobixkLHAsaSxjKSxsLl9faz1sLnByb3BzLmNoaWxkcmVuLHZ8fGIobixsLHUsdCxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmaSxyLG8sZixjKSxjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09ZC52YWx1ZSYmZC52YWx1ZSE9PW4udmFsdWUmJihuLnZhbHVlPW51bGw9PWQudmFsdWU/XCJcIjpkLnZhbHVlKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PWQuY2hlY2tlZCYmZC5jaGVja2VkIT09bi5jaGVja2VkJiYobi5jaGVja2VkPWQuY2hlY2tlZCkpKSxufWZ1bmN0aW9uIEEobCx1LHQpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXU7fWNhdGNoKGwpe24uX19lKGwsdCk7fX1mdW5jdGlvbiBEKGwsdSx0KXt2YXIgaSxyLG87aWYobi51bm1vdW50JiZuLnVubW91bnQobCksKGk9bC5yZWYpJiZBKGksbnVsbCx1KSx0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fCh0PW51bGwhPShyPWwuX19lKSksbC5fX2U9bC5sPW51bGwsbnVsbCE9KGk9bC5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXsgdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKTt9Y2F0Y2gobCl7bi5fX2UobCx1KTt9IH1pLmJhc2U9aS5fX1A9bnVsbDt9aWYoaT1sLl9fayl7IGZvcihvPTA7bzxpLmxlbmd0aDtvKyspeyBpW29dJiZEKGlbb10sdSx0KTsgfSB9bnVsbCE9ciYmYShyKTt9ZnVuY3Rpb24gSChuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBJKGwsdSx0KXt2YXIgaSxvLGM7bi5fX3AmJm4uX19wKGwsdSksbz0oaT10PT09cik/bnVsbDp0JiZ0Ll9fa3x8dS5fX2ssbD1oKGQsbnVsbCxbbF0pLGM9W10sJCh1LGk/dS5fX2s9bDoodHx8dSkuX19rPWwsb3x8ZixmLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LHQmJiFpP1t0XTpvP251bGw6ZS5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksYywhMSx0fHxmLGkpLGooYyxsKTt9bj17fSxtLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1PXRoaXMuX19zIT09dGhpcy5zdGF0ZSYmdGhpcy5fX3N8fCh0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpKTsoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8KG49bih1LHRoaXMucHJvcHMpKSkmJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKHRoaXMudT0hMSxsJiZ0aGlzLl9faC5wdXNoKGwpLGsodGhpcykpO30sbS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJihuJiZ0aGlzLl9faC5wdXNoKG4pLHRoaXMudT0hMCxrKHRoaXMpKTt9LG0ucHJvdG90eXBlLnJlbmRlcj1kLHU9W10sdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxpPW4uZGVib3VuY2VSZW5kZXJpbmcsbi5fX2U9ZnVuY3Rpb24obixsLHUpe2Zvcih2YXIgdDtsPWwuX19wOyl7IGlmKCh0PWwuX19jKSYmIXQuX19wKXsgdHJ5e2lmKHQuY29uc3RydWN0b3ImJm51bGwhPXQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKXsgdC5zZXRTdGF0ZSh0LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSk7IH1lbHNle2lmKG51bGw9PXQuY29tcG9uZW50RGlkQ2F0Y2gpeyBjb250aW51ZTsgfXQuY29tcG9uZW50RGlkQ2F0Y2gobik7fXJldHVybiBrKHQuX19FPXQpfWNhdGNoKGwpe249bDt9IH0gfXRocm93IG59LHI9ZixvPTA7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIHsgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgeyBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyB9XG4gIGlmIChzdGF0aWNQcm9wcykgeyBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyB9XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHMkMVtpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vLyBTb21lIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIHJnYigpIGFuZCBoc2woKSBDb2xvcnMgYXJlIGJvcnJvd2VkIGZyb20gdGlueUNvbG9yXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL1RpbnlDb2xvclxuLy8gS2VsdmluIHRlbXBlcmF0dXJlIG1hdGggYm9ycm93ZWQgZnJvbSBOZWlsIEJhcmxldHQncyBpbXBsZW1lbnRhdGlvblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzXG52YXIgQ1NTX0lOVEVHRVIgPSAnWy1cXFxcK10/XFxcXGQrJT8nOyAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jbnVtYmVyLXZhbHVlXG5cbnZhciBDU1NfTlVNQkVSID0gJ1stXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT8nOyAvLyBBbGxvdyBwb3NpdGl2ZS9uZWdhdGl2ZSBpbnRlZ2VyL251bWJlci4gRG9uJ3QgY2FwdHVyZSB0aGUgZWl0aGVyL29yLCBqdXN0IHRoZSBlbnRpcmUgb3V0Y29tZVxuXG52YXIgQ1NTX1VOSVQgPSAnKD86JyArIENTU19OVU1CRVIgKyAnKXwoPzonICsgQ1NTX0lOVEVHRVIgKyAnKSc7IC8vIFBhcnNlIGZ1bmN0aW9uIHBhcmFtc1xuLy8gUGFyZW5zIGFuZCBjb21tYXMgYXJlIG9wdGlvbmFsLCBhbmQgdGhpcyBhbHNvIGFsbG93cyBmb3Igd2hpdGVzcGFjZSBiZXR3ZWVuIG51bWJlcnNcblxudmFyIFBFUk1JU1NJVkVfTUFUQ0hfMyA9ICdbXFxcXHN8XFxcXChdKygnICsgQ1NTX1VOSVQgKyAnKVssfFxcXFxzXSsoJyArIENTU19VTklUICsgJylbLHxcXFxcc10rKCcgKyBDU1NfVU5JVCArICcpXFxcXHMqXFxcXCk/JztcbnZhciBQRVJNSVNTSVZFX01BVENIXzQgPSAnW1xcXFxzfFxcXFwoXSsoJyArIENTU19VTklUICsgJylbLHxcXFxcc10rKCcgKyBDU1NfVU5JVCArICcpWyx8XFxcXHNdKygnICsgQ1NTX1VOSVQgKyAnKVssfFxcXFxzXSsoJyArIENTU19VTklUICsgJylcXFxccypcXFxcKT8nOyAvLyBSZWdleCBwYXR0ZXJucyBmb3IgZnVuY3Rpb25hbCBjb2xvciBzdHJpbmdzXG5cbnZhciBSRUdFWF9GVU5DVElPTkFMX1JHQiA9IG5ldyBSZWdFeHAoJ3JnYicgKyBQRVJNSVNTSVZFX01BVENIXzMpO1xudmFyIFJFR0VYX0ZVTkNUSU9OQUxfUkdCQSA9IG5ldyBSZWdFeHAoJ3JnYmEnICsgUEVSTUlTU0lWRV9NQVRDSF80KTtcbnZhciBSRUdFWF9GVU5DVElPTkFMX0hTTCA9IG5ldyBSZWdFeHAoJ2hzbCcgKyBQRVJNSVNTSVZFX01BVENIXzMpO1xudmFyIFJFR0VYX0ZVTkNUSU9OQUxfSFNMQSA9IG5ldyBSZWdFeHAoJ2hzbGEnICsgUEVSTUlTU0lWRV9NQVRDSF80KTsgLy8gQ29sb3Igc3RyaW5nIHBhcnNpbmcgcmVnZXhcblxudmFyIEhFWF9TVEFSVCA9ICdeKD86Iz98MHg/KSc7XG52YXIgSEVYX0lOVF9TSU5HTEUgPSAnKFswLTlhLWZBLUZdezF9KSc7XG52YXIgSEVYX0lOVF9ET1VCTEUgPSAnKFswLTlhLWZBLUZdezJ9KSc7XG52YXIgUkVHRVhfSEVYXzMgPSBuZXcgUmVnRXhwKEhFWF9TVEFSVCArIEhFWF9JTlRfU0lOR0xFICsgSEVYX0lOVF9TSU5HTEUgKyBIRVhfSU5UX1NJTkdMRSArICckJyk7XG52YXIgUkVHRVhfSEVYXzQgPSBuZXcgUmVnRXhwKEhFWF9TVEFSVCArIEhFWF9JTlRfU0lOR0xFICsgSEVYX0lOVF9TSU5HTEUgKyBIRVhfSU5UX1NJTkdMRSArIEhFWF9JTlRfU0lOR0xFICsgJyQnKTtcbnZhciBSRUdFWF9IRVhfNiA9IG5ldyBSZWdFeHAoSEVYX1NUQVJUICsgSEVYX0lOVF9ET1VCTEUgKyBIRVhfSU5UX0RPVUJMRSArIEhFWF9JTlRfRE9VQkxFICsgJyQnKTtcbnZhciBSRUdFWF9IRVhfOCA9IG5ldyBSZWdFeHAoSEVYX1NUQVJUICsgSEVYX0lOVF9ET1VCTEUgKyBIRVhfSU5UX0RPVUJMRSArIEhFWF9JTlRfRE9VQkxFICsgSEVYX0lOVF9ET1VCTEUgKyAnJCcpOyAvLyBLZWx2aW4gdGVtcGVyYXR1cmUgYm91bmRzXG5cbnZhciBLRUxWSU5fTUlOID0gMjAwMDtcbnZhciBLRUxWSU5fTUFYID0gNDAwMDA7IC8vIE1hdGggc2hvcnRoYW5kc1xuXG52YXIgbG9nID0gTWF0aC5sb2csXG4gICAgcm91bmQgPSBNYXRoLnJvdW5kLFxuICAgIGZsb29yID0gTWF0aC5mbG9vcjtcbi8qKlxyXG4gKiBAZGVzYyBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIGEgbWluIGFuZCBtYXggdmFsdWVcclxuICogQHBhcmFtIG51bSAtIGlucHV0IHZhbHVlXHJcbiAqIEBwYXJhbSBtaW4gLSBtaW4gYWxsb3dlZCB2YWx1ZVxyXG4gKiBAcGFyYW0gbWF4IC0gbWF4IGFsbG93ZWQgdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBQYXJzZSBhIGNzcyB1bml0IHN0cmluZyAtIGVpdGhlciByZWd1bGFyIGludCBvciBhIHBlcmNlbnRhZ2UgbnVtYmVyXHJcbiAqIEBwYXJhbSBzdHIgLSBjc3MgdW5pdCBzdHJpbmdcclxuICogQHBhcmFtIG1heCAtIG1heCB1bml0IHZhbHVlLCB1c2VkIGZvciBjYWxjdWxhdGluZyBwZXJjZW50YWdlc1xyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZVVuaXQoc3RyLCBtYXgpIHtcbiAgdmFyIGlzUGVyY2VudGFnZSA9IHN0ci5pbmRleE9mKCclJykgPiAtMTtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIGlzUGVyY2VudGFnZSA/IG1heCAvIDEwMCAqIG51bSA6IG51bTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBQYXJzZSBoZXggc3RyIHRvIGFuIGludFxyXG4gKiBAcGFyYW0gc3RyIC0gaGV4IHN0cmluZyB0byBwYXJzZVxyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZUhleEludChzdHIpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTYpO1xufVxuLyoqXHJcbiAqIEBkZXNjIENvbnZlcnQgbnVuYmVyIGludG8gdG8gMi1kaWdpdCBoZXhcclxuICogQHBhcmFtIGludCAtIG51bWJlciB0byBjb252ZXJ0XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGludFRvSGV4KF9pbnQpIHtcbiAgcmV0dXJuIF9pbnQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5cbnZhciBJcm9Db2xvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAgKiBAY29uc3RydWN0b3IgQ29sb3Igb2JqZWN0XHJcbiAgICAqIEBwYXJhbSB2YWx1ZSAtIGluaXRpYWwgY29sb3IgdmFsdWVcclxuICAqL1xuICBmdW5jdGlvbiBJcm9Db2xvcih2YWx1ZSwgb25DaGFuZ2UpIHtcbiAgICAvLyBUaGUgZGVmYXVsdCBDb2xvciB2YWx1ZVxuICAgIHRoaXMuJCA9IHtcbiAgICAgIGg6IDAsXG4gICAgICBzOiAwLFxuICAgICAgdjogMCxcbiAgICAgIGE6IDFcbiAgICB9O1xuICAgIGlmICh2YWx1ZSkgeyB0aGlzLnNldCh2YWx1ZSk7IH0gLy8gVGhlIHdhdGNoIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGlzIENvbG9yIHdpbGwgYmUgc3RvcmVkIGhlcmVcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IF9leHRlbmRzKHt9LCB0aGlzLiQpOyAvLyBjb3B5IGluaXRpYWwgdmFsdWVcbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgU2V0IHRoZSBDb2xvciBmcm9tIGFueSB2YWxpZCB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgLSBuZXcgY29sb3IgdmFsdWVcclxuICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IElyb0NvbG9yLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICgvXig/OiM/fDB4PylbMC05YS1mQS1GXXszLDh9JC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5oZXhTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoL15yZ2JhPy8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5yZ2JTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoL15oc2xhPy8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5oc2xTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElyb0NvbG9yKSB7XG4gICAgICAgIHRoaXMuaHN2YSA9IHZhbHVlLmhzdmE7XG4gICAgICB9IGVsc2UgaWYgKCdyJyBpbiB2YWx1ZSAmJiAnZycgaW4gdmFsdWUgJiYgJ2InIGluIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmdiID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCdoJyBpbiB2YWx1ZSAmJiAncycgaW4gdmFsdWUgJiYgJ3YnIGluIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaHN2ID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCdoJyBpbiB2YWx1ZSAmJiAncycgaW4gdmFsdWUgJiYgJ2wnIGluIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaHNsID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCdrZWx2aW4nIGluIHZhbHVlKSB7XG4gICAgICAgIHRoaXMua2VsdmluID0gdmFsdWUua2VsdmluO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29sb3IgdmFsdWUnKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICAqIEBkZXNjIFNob3J0Y3V0IHRvIHNldCBhIHNwZWNpZmljIGNoYW5uZWwgdmFsdWVcclxuICAgICogQHBhcmFtIGZvcm1hdCAtIGhzdiB8IGhzbCB8IHJnYlxyXG4gICAgKiBAcGFyYW0gY2hhbm5lbCAtIGluZGl2aWR1YWwgY2hhbm5lbCB0byBzZXQsIGZvciBleGFtcGxlIGlmIG1vZGVsID0gaHNsLCBjaGFuZWwgPSBoIHwgcyB8IGxcclxuICAgICogQHBhcmFtIHZhbHVlIC0gbmV3IHZhbHVlIGZvciB0aGUgY2hhbm5lbFxyXG4gICovXG4gIDtcblxuICBfcHJvdG8uc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoZm9ybWF0LCBjaGFubmVsLCB2YWx1ZSkge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB0aGlzW2Zvcm1hdF0gPSBfZXh0ZW5kcyh7fSwgdGhpc1tmb3JtYXRdLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjaGFubmVsXSA9IHZhbHVlLCBfZXh0ZW5kczIpKTtcbiAgfVxuICAvKipcclxuICAgKiBAZGVzYyBSZXNldCBjb2xvciBiYWNrIHRvIGl0cyBpbml0aWFsIHZhbHVlXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmhzdmEgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgbWFrZSBuZXcgQ29sb3IgaW5zdGFuY2Ugd2l0aCB0aGUgc2FtZSB2YWx1ZSBhcyB0aGlzIG9uZVxyXG4gICovXG4gIDtcblxuICBfcHJvdG8uY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IElyb0NvbG9yKHRoaXMpO1xuICB9XG4gIC8qKlxyXG4gICAqIEBkZXNjIHJlbW92ZSBjb2xvciBvbkNoYW5nZVxyXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxyXG4gICAgKiBAZGVzYyBDb252ZXJ0IGhzdiBvYmplY3QgdG8gcmdiXHJcbiAgICAqIEBwYXJhbSBoc3YgLSBoc3YgY29sb3Igb2JqZWN0XHJcbiAgKi9cbiAgO1xuXG4gIElyb0NvbG9yLmhzdlRvUmdiID0gZnVuY3Rpb24gaHN2VG9SZ2IoaHN2KSB7XG4gICAgdmFyIGggPSBoc3YuaCAvIDYwO1xuICAgIHZhciBzID0gaHN2LnMgLyAxMDA7XG4gICAgdmFyIHYgPSBoc3YudiAvIDEwMDtcbiAgICB2YXIgaSA9IGZsb29yKGgpO1xuICAgIHZhciBmID0gaCAtIGk7XG4gICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKTtcbiAgICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcbiAgICB2YXIgbW9kID0gaSAlIDY7XG4gICAgdmFyIHIgPSBbdiwgcSwgcCwgcCwgdCwgdl1bbW9kXTtcbiAgICB2YXIgZyA9IFt0LCB2LCB2LCBxLCBwLCBwXVttb2RdO1xuICAgIHZhciBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IGNsYW1wKHIgKiAyNTUsIDAsIDI1NSksXG4gICAgICBnOiBjbGFtcChnICogMjU1LCAwLCAyNTUpLFxuICAgICAgYjogY2xhbXAoYiAqIDI1NSwgMCwgMjU1KVxuICAgIH07XG4gIH1cbiAgLyoqXHJcbiAgICAqIEBkZXNjIENvbnZlcnQgcmdiIG9iamVjdCB0byBoc3ZcclxuICAgICogQHBhcmFtIHJnYiAtIHJnYiBvYmplY3RcclxuICAqL1xuICA7XG5cbiAgSXJvQ29sb3IucmdiVG9Ic3YgPSBmdW5jdGlvbiByZ2JUb0hzdihyZ2IpIHtcbiAgICB2YXIgciA9IHJnYi5yIC8gMjU1O1xuICAgIHZhciBnID0gcmdiLmcgLyAyNTU7XG4gICAgdmFyIGIgPSByZ2IuYiAvIDI1NTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICB2YXIgaHVlID0gMDtcbiAgICB2YXIgdmFsdWUgPSBtYXg7XG4gICAgdmFyIHNhdHVyYXRpb24gPSBtYXggPT09IDAgPyAwIDogZGVsdGEgLyBtYXg7XG5cbiAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgY2FzZSBtaW46XG4gICAgICAgIGh1ZSA9IDA7IC8vIGFjaHJvbWF0aWNcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSByOlxuICAgICAgICBodWUgPSAoZyAtIGIpIC8gZGVsdGEgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGc6XG4gICAgICAgIGh1ZSA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGI6XG4gICAgICAgIGh1ZSA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoOiBodWUgKiA2MCAlIDM2MCxcbiAgICAgIHM6IGNsYW1wKHNhdHVyYXRpb24gKiAxMDAsIDAsIDEwMCksXG4gICAgICB2OiBjbGFtcCh2YWx1ZSAqIDEwMCwgMCwgMTAwKVxuICAgIH07XG4gIH1cbiAgLyoqXHJcbiAgICAqIEBkZXNjIENvbnZlcnQgaHN2IG9iamVjdCB0byBoc2xcclxuICAgICogQHBhcmFtIGhzdiAtIGhzdiBvYmplY3RcclxuICAqL1xuICA7XG5cbiAgSXJvQ29sb3IuaHN2VG9Ic2wgPSBmdW5jdGlvbiBoc3ZUb0hzbChoc3YpIHtcbiAgICB2YXIgcyA9IGhzdi5zIC8gMTAwO1xuICAgIHZhciB2ID0gaHN2LnYgLyAxMDA7XG4gICAgdmFyIGwgPSAoMiAtIHMpICogdjtcbiAgICB2YXIgZGl2aXNvciA9IGwgPD0gMSA/IGwgOiAyIC0gbDsgLy8gQXZvaWQgZGl2aXNpb24gYnkgemVybyB3aGVuIGxpZ2h0bmVzcyBpcyBjbG9zZSB0byB6ZXJvXG5cbiAgICB2YXIgc2F0dXJhdGlvbiA9IGRpdmlzb3IgPCAxZS05ID8gMCA6IHMgKiB2IC8gZGl2aXNvcjtcbiAgICByZXR1cm4ge1xuICAgICAgaDogaHN2LmgsXG4gICAgICBzOiBjbGFtcChzYXR1cmF0aW9uICogMTAwLCAwLCAxMDApLFxuICAgICAgbDogY2xhbXAobCAqIDUwLCAwLCAxMDApXG4gICAgfTtcbiAgfVxuICAvKipcclxuICAgICogQGRlc2MgQ29udmVydCBoc2wgb2JqZWN0IHRvIGhzdlxyXG4gICAgKiBAcGFyYW0gaHNsIC0gaHNsIG9iamVjdFxyXG4gICovXG4gIDtcblxuICBJcm9Db2xvci5oc2xUb0hzdiA9IGZ1bmN0aW9uIGhzbFRvSHN2KGhzbCkge1xuICAgIHZhciBsID0gaHNsLmwgKiAyO1xuICAgIHZhciBzID0gaHNsLnMgKiAobCA8PSAxMDAgPyBsIDogMjAwIC0gbCkgLyAxMDA7IC8vIEF2b2lkIGRpdmlzaW9uIGJ5IHplcm8gd2hlbiBsICsgcyBpcyBuZWFyIDBcblxuICAgIHZhciBzYXR1cmF0aW9uID0gbCArIHMgPCAxZS05ID8gMCA6IDIgKiBzIC8gKGwgKyBzKTtcbiAgICByZXR1cm4ge1xuICAgICAgaDogaHNsLmgsXG4gICAgICBzOiBjbGFtcChzYXR1cmF0aW9uICogMTAwLCAwLCAxMDApLFxuICAgICAgdjogY2xhbXAoKGwgKyBzKSAvIDIsIDAsIDEwMClcbiAgICB9O1xuICB9XG4gIC8qKlxyXG4gICAgKiBAZGVzYyBDb252ZXJ0IGEga2VsdmluIHRlbXBlcmF0dXJlIHRvIGFuIGFwcHJveCwgUkdCIHZhbHVlXHJcbiAgICAqIEBwYXJhbSBrZWx2aW4gLSBrZWx2aW4gdGVtcGVyYXR1cmVcclxuICAqL1xuICA7XG5cbiAgSXJvQ29sb3Iua2VsdmluVG9SZ2IgPSBmdW5jdGlvbiBrZWx2aW5Ub1JnYihrZWx2aW4pIHtcbiAgICB2YXIgdGVtcCA9IGtlbHZpbiAvIDEwMDtcbiAgICB2YXIgciwgZywgYjtcblxuICAgIGlmICh0ZW1wIDwgNjYpIHtcbiAgICAgIHIgPSAyNTU7XG4gICAgICBnID0gLTE1NS4yNTQ4NTU2MjcwOTE3OSAtIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAoZyA9IHRlbXAgLSAyKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyhnKTtcbiAgICAgIGIgPSB0ZW1wIDwgMjAgPyAwIDogLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcCAtIDEwKSArIDExNS42Nzk5NDQwMTA2NjE0NyAqIGxvZyhiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IDM1MS45NzY5MDU2NjgwNTY5MyArIDAuMTE0MjA2NDUzNzg0MTY1ICogKHIgPSB0ZW1wIC0gNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2cocik7XG4gICAgICBnID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wIC0gNTApIC0gMjguMDg1Mjk2MzUwNzk1NyAqIGxvZyhnKTtcbiAgICAgIGIgPSAyNTU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IGNsYW1wKGZsb29yKHIpLCAwLCAyNTUpLFxuICAgICAgZzogY2xhbXAoZmxvb3IoZyksIDAsIDI1NSksXG4gICAgICBiOiBjbGFtcChmbG9vcihiKSwgMCwgMjU1KVxuICAgIH07XG4gIH1cbiAgLyoqXHJcbiAgICogQGRlc2MgQ29udmVydCBhbiBSR0IgY29sb3IgdG8gYW4gYXBwcm94aW1hdGUga2VsdmluIHRlbXBlcmF0dXJlXHJcbiAgICogQHBhcmFtIGtlbHZpbiAtIGtlbHZpbiB0ZW1wZXJhdHVyZVxyXG4gICovXG4gIDtcblxuICBJcm9Db2xvci5yZ2JUb0tlbHZpbiA9IGZ1bmN0aW9uIHJnYlRvS2VsdmluKHJnYikge1xuICAgIHZhciByID0gcmdiLnIsXG4gICAgICAgIGIgPSByZ2IuYjtcbiAgICB2YXIgZXBzID0gMC40O1xuICAgIHZhciBtaW5UZW1wID0gS0VMVklOX01JTjtcbiAgICB2YXIgbWF4VGVtcCA9IEtFTFZJTl9NQVg7XG4gICAgdmFyIHRlbXA7XG5cbiAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuXG4gICAgICB2YXIgX3JnYiA9IElyb0NvbG9yLmtlbHZpblRvUmdiKHRlbXApO1xuXG4gICAgICBpZiAoX3JnYi5iIC8gX3JnYi5yID49IGIgLyByKSB7XG4gICAgICAgIG1heFRlbXAgPSB0ZW1wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXA7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKElyb0NvbG9yLCBbe1xuICAgIGtleTogXCJoc3ZcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIHZhbHVlIGlzIGNsb25lZCB0byBhbGxvdyBjaGFuZ2VzIHRvIGJlIG1hZGUgdG8gdGhlIHZhbHVlcyBiZWZvcmUgcGFzc2luZyB0aGVtIGJhY2tcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGg6IHZhbHVlLmgsXG4gICAgICAgIHM6IHZhbHVlLnMsXG4gICAgICAgIHY6IHZhbHVlLnZcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy4kO1xuICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTsgLy8gSWYgdGhpcyBDb2xvciBpcyBiZWluZyB3YXRjaGVkIGZvciBjaGFuZ2VzIHdlIG5lZWQgdG8gY29tcGFyZSB0aGUgbmV3IGFuZCBvbGQgdmFsdWVzIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2FuIGp1c3QgYmUgbGF6eVxuXG4gICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAvLyBDb21wdXRlIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgIHZhciBjaGFuZ2VzID0ge1xuICAgICAgICAgIGg6IGZhbHNlLFxuICAgICAgICAgIHY6IGZhbHNlLFxuICAgICAgICAgIHM6IGZhbHNlLFxuICAgICAgICAgIGE6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9sZFZhbHVlKSB7XG4gICAgICAgICAgY2hhbmdlc1trZXldID0gbmV3VmFsdWVba2V5XSAhPSBvbGRWYWx1ZVtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kID0gbmV3VmFsdWU7IC8vIElmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZCwgY2FsbCBob29rIGNhbGxiYWNrXG5cbiAgICAgICAgaWYgKGNoYW5nZXMuaCB8fCBjaGFuZ2VzLnMgfHwgY2hhbmdlcy52IHx8IGNoYW5nZXMuYSkgeyB0aGlzLm9uQ2hhbmdlKHRoaXMsIGNoYW5nZXMpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQgPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaHN2YVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLiQpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHN2ID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImh1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5oO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHN2ID0ge1xuICAgICAgICBoOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2F0dXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJC5zO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHN2ID0ge1xuICAgICAgICBzOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiQudjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmhzdiA9IHtcbiAgICAgICAgdjogdmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFscGhhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kLmE7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSBfZXh0ZW5kcyh7fSwgdGhpcy5oc3YsIHtcbiAgICAgICAgYTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJrZWx2aW5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBJcm9Db2xvci5yZ2JUb0tlbHZpbih0aGlzLnJnYik7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZ2IgPSBJcm9Db2xvci5rZWx2aW5Ub1JnYih2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJnYiA9IHRoaXMucmdiO1xuICAgICAgcmV0dXJuIHJnYi5yO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmdiID0gX2V4dGVuZHMoe30sIHRoaXMucmdiLCB7XG4gICAgICAgIHI6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JlZW5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnJnYjtcbiAgICAgIHJldHVybiByZ2IuZztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJnYiA9IF9leHRlbmRzKHt9LCB0aGlzLnJnYiwge1xuICAgICAgICBnOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZ2IgPSB0aGlzLnJnYjtcbiAgICAgIHJldHVybiByZ2IuYjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJnYiA9IF9leHRlbmRzKHt9LCB0aGlzLnJnYiwge1xuICAgICAgICBiOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJnYlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF9Jcm9Db2xvciRoc3ZUb1JnYiA9IElyb0NvbG9yLmhzdlRvUmdiKHRoaXMuJCksXG4gICAgICAgICAgciA9IF9Jcm9Db2xvciRoc3ZUb1JnYi5yLFxuICAgICAgICAgIGcgPSBfSXJvQ29sb3IkaHN2VG9SZ2IuZyxcbiAgICAgICAgICBiID0gX0lyb0NvbG9yJGhzdlRvUmdiLmI7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IHJvdW5kKHIpLFxuICAgICAgICBnOiByb3VuZChnKSxcbiAgICAgICAgYjogcm91bmQoYilcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc3YgPSBfZXh0ZW5kcyh7fSwgSXJvQ29sb3IucmdiVG9Ic3YodmFsdWUpLCB7XG4gICAgICAgIGE6IHZhbHVlLmEgPT09IHVuZGVmaW5lZCA/IDEgOiB2YWx1ZS5hXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmdiYVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnJnYiwge1xuICAgICAgICBhOiB0aGlzLmFscGhhXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJnYiA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoc2xcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfSXJvQ29sb3IkaHN2VG9Ic2wgPSBJcm9Db2xvci5oc3ZUb0hzbCh0aGlzLiQpLFxuICAgICAgICAgIGggPSBfSXJvQ29sb3IkaHN2VG9Ic2wuaCxcbiAgICAgICAgICBzID0gX0lyb0NvbG9yJGhzdlRvSHNsLnMsXG4gICAgICAgICAgbCA9IF9Jcm9Db2xvciRoc3ZUb0hzbC5sO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiByb3VuZChoKSxcbiAgICAgICAgczogcm91bmQocyksXG4gICAgICAgIGw6IHJvdW5kKGwpXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHN2ID0gX2V4dGVuZHMoe30sIElyb0NvbG9yLmhzbFRvSHN2KHZhbHVlKSwge1xuICAgICAgICBhOiB2YWx1ZS5hID09PSB1bmRlZmluZWQgPyAxIDogdmFsdWUuYVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhzbGFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5oc2wsIHtcbiAgICAgICAgYTogdGhpcy5hbHBoYVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oc2wgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmdiU3RyaW5nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmdiID0gdGhpcy5yZ2I7XG4gICAgICByZXR1cm4gXCJyZ2IoXCIgKyByZ2IuciArIFwiLCBcIiArIHJnYi5nICsgXCIsIFwiICsgcmdiLmIgKyBcIilcIjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICB2YXIgcixcbiAgICAgICAgICBnLFxuICAgICAgICAgIGIsXG4gICAgICAgICAgYSA9IDE7XG5cbiAgICAgIGlmIChtYXRjaCA9IFJFR0VYX0ZVTkNUSU9OQUxfUkdCLmV4ZWModmFsdWUpKSB7XG4gICAgICAgIHIgPSBwYXJzZVVuaXQobWF0Y2hbMV0sIDI1NSk7XG4gICAgICAgIGcgPSBwYXJzZVVuaXQobWF0Y2hbMl0sIDI1NSk7XG4gICAgICAgIGIgPSBwYXJzZVVuaXQobWF0Y2hbM10sIDI1NSk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID0gUkVHRVhfRlVOQ1RJT05BTF9SR0JBLmV4ZWModmFsdWUpKSB7XG4gICAgICAgIHIgPSBwYXJzZVVuaXQobWF0Y2hbMV0sIDI1NSk7XG4gICAgICAgIGcgPSBwYXJzZVVuaXQobWF0Y2hbMl0sIDI1NSk7XG4gICAgICAgIGIgPSBwYXJzZVVuaXQobWF0Y2hbM10sIDI1NSk7XG4gICAgICAgIGEgPSBwYXJzZVVuaXQobWF0Y2hbNF0sIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5yZ2IgPSB7XG4gICAgICAgICAgcjogcixcbiAgICAgICAgICBnOiBnLFxuICAgICAgICAgIGI6IGIsXG4gICAgICAgICAgYTogYVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJnYiBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmdiYVN0cmluZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJnYmEgPSB0aGlzLnJnYmE7XG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYS5yICsgXCIsIFwiICsgcmdiYS5nICsgXCIsIFwiICsgcmdiYS5iICsgXCIsIFwiICsgcmdiYS5hICsgXCIpXCI7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZ2JTdHJpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGV4U3RyaW5nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmdiID0gdGhpcy5yZ2I7XG4gICAgICByZXR1cm4gXCIjXCIgKyBpbnRUb0hleChyZ2IucikgKyBpbnRUb0hleChyZ2IuZykgKyBpbnRUb0hleChyZ2IuYik7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIG1hdGNoO1xuICAgICAgdmFyIHIsXG4gICAgICAgICAgZyxcbiAgICAgICAgICBiLFxuICAgICAgICAgIGEgPSAyNTU7XG5cbiAgICAgIGlmIChtYXRjaCA9IFJFR0VYX0hFWF8zLmV4ZWModmFsdWUpKSB7XG4gICAgICAgIHIgPSBwYXJzZUhleEludChtYXRjaFsxXSkgKiAxNztcbiAgICAgICAgZyA9IHBhcnNlSGV4SW50KG1hdGNoWzJdKSAqIDE3O1xuICAgICAgICBiID0gcGFyc2VIZXhJbnQobWF0Y2hbM10pICogMTc7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID0gUkVHRVhfSEVYXzQuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlSGV4SW50KG1hdGNoWzFdKSAqIDE3O1xuICAgICAgICBnID0gcGFyc2VIZXhJbnQobWF0Y2hbMl0pICogMTc7XG4gICAgICAgIGIgPSBwYXJzZUhleEludChtYXRjaFszXSkgKiAxNztcbiAgICAgICAgYSA9IHBhcnNlSGV4SW50KG1hdGNoWzRdKSAqIDE3O1xuICAgICAgfSBlbHNlIGlmIChtYXRjaCA9IFJFR0VYX0hFWF82LmV4ZWModmFsdWUpKSB7XG4gICAgICAgIHIgPSBwYXJzZUhleEludChtYXRjaFsxXSk7XG4gICAgICAgIGcgPSBwYXJzZUhleEludChtYXRjaFsyXSk7XG4gICAgICAgIGIgPSBwYXJzZUhleEludChtYXRjaFszXSk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID0gUkVHRVhfSEVYXzguZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgciA9IHBhcnNlSGV4SW50KG1hdGNoWzFdKTtcbiAgICAgICAgZyA9IHBhcnNlSGV4SW50KG1hdGNoWzJdKTtcbiAgICAgICAgYiA9IHBhcnNlSGV4SW50KG1hdGNoWzNdKTtcbiAgICAgICAgYSA9IHBhcnNlSGV4SW50KG1hdGNoWzRdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMucmdiID0ge1xuICAgICAgICAgIHI6IHIsXG4gICAgICAgICAgZzogZyxcbiAgICAgICAgICBiOiBiLFxuICAgICAgICAgIGE6IGEgLyAyNTVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhleDhTdHJpbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZ2JhID0gdGhpcy5yZ2JhO1xuICAgICAgcmV0dXJuIFwiI1wiICsgaW50VG9IZXgocmdiYS5yKSArIGludFRvSGV4KHJnYmEuZykgKyBpbnRUb0hleChyZ2JhLmIpICsgaW50VG9IZXgoZmxvb3IocmdiYS5hICogMjU1KSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5oZXhTdHJpbmcgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaHNsU3RyaW5nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgaHNsID0gdGhpcy5oc2w7XG4gICAgICByZXR1cm4gXCJoc2woXCIgKyBoc2wuaCArIFwiLCBcIiArIGhzbC5zICsgXCIlLCBcIiArIGhzbC5sICsgXCIlKVwiO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHZhciBoLFxuICAgICAgICAgIHMsXG4gICAgICAgICAgbCxcbiAgICAgICAgICBhID0gMTtcblxuICAgICAgaWYgKG1hdGNoID0gUkVHRVhfRlVOQ1RJT05BTF9IU0wuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgaCA9IHBhcnNlVW5pdChtYXRjaFsxXSwgMzYwKTtcbiAgICAgICAgcyA9IHBhcnNlVW5pdChtYXRjaFsyXSwgMTAwKTtcbiAgICAgICAgbCA9IHBhcnNlVW5pdChtYXRjaFszXSwgMTAwKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBSRUdFWF9GVU5DVElPTkFMX0hTTEEuZXhlYyh2YWx1ZSkpIHtcbiAgICAgICAgaCA9IHBhcnNlVW5pdChtYXRjaFsxXSwgMzYwKTtcbiAgICAgICAgcyA9IHBhcnNlVW5pdChtYXRjaFsyXSwgMTAwKTtcbiAgICAgICAgbCA9IHBhcnNlVW5pdChtYXRjaFszXSwgMTAwKTtcbiAgICAgICAgYSA9IHBhcnNlVW5pdChtYXRjaFs0XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLmhzbCA9IHtcbiAgICAgICAgICBoOiBoLFxuICAgICAgICAgIHM6IHMsXG4gICAgICAgICAgbDogbCxcbiAgICAgICAgICBhOiBhXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaHNsIHN0cmluZycpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoc2xhU3RyaW5nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgaHNsYSA9IHRoaXMuaHNsYTtcbiAgICAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhLmggKyBcIiwgXCIgKyBoc2xhLnMgKyBcIiUsIFwiICsgaHNsYS5sICsgXCIlLCBcIiArIGhzbGEuYSArIFwiKVwiO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaHNsU3RyaW5nID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElyb0NvbG9yO1xufSgpO1xuXG52YXIgc2xpZGVyRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNsaWRlclNoYXBlOiAnYmFyJyxcbiAgc2xpZGVyVHlwZTogJ3ZhbHVlJyxcbiAgbWluVGVtcGVyYXR1cmU6IDIyMDAsXG4gIG1heFRlbXBlcmF0dXJlOiAxMTAwMFxufTtcbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGJvdW5kaW5nIGRpbWVuc2lvbnMgb2YgdGhlIHNsaWRlclxyXG4gKiBAcGFyYW0gcHJvcHMgLSBzbGlkZXIgcHJvcHNcclxuICovXG5cbmZ1bmN0aW9uIGdldFNsaWRlckRpbWVuc2lvbnMocHJvcHMpIHtcbiAgdmFyIF9zbGlkZXJTaXplO1xuXG4gIHZhciB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgc2xpZGVyU2l6ZSA9IHByb3BzLnNsaWRlclNpemUsXG4gICAgICBib3JkZXJXaWR0aCA9IHByb3BzLmJvcmRlcldpZHRoLFxuICAgICAgaGFuZGxlUmFkaXVzID0gcHJvcHMuaGFuZGxlUmFkaXVzLFxuICAgICAgcGFkZGluZyA9IHByb3BzLnBhZGRpbmcsXG4gICAgICBzbGlkZXJTaGFwZSA9IHByb3BzLnNsaWRlclNoYXBlO1xuICB2YXIgaXNob3Jpem9udGFsID0gcHJvcHMubGF5b3V0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7IC8vIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHNsaWRlclNpemUgaWYgaXRzIG5vdCBkZWZpbmVkXG5cbiAgc2xpZGVyU2l6ZSA9IChfc2xpZGVyU2l6ZSA9IHNsaWRlclNpemUpICE9IG51bGwgPyBfc2xpZGVyU2l6ZSA6IHBhZGRpbmcgKiAyICsgaGFuZGxlUmFkaXVzICogMjtcblxuICBpZiAoc2xpZGVyU2hhcGUgPT09ICdjaXJjbGUnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhbmRsZVN0YXJ0OiBwcm9wcy5wYWRkaW5nICsgcHJvcHMuaGFuZGxlUmFkaXVzLFxuICAgICAgaGFuZGxlUmFuZ2U6IHdpZHRoIC0gcGFkZGluZyAqIDIgLSBoYW5kbGVSYWRpdXMgKiAyLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiB3aWR0aCxcbiAgICAgIGN4OiB3aWR0aCAvIDIsXG4gICAgICBjeTogd2lkdGggLyAyLFxuICAgICAgcmFkaXVzOiB3aWR0aCAvIDIgLSBib3JkZXJXaWR0aCAvIDJcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBoYW5kbGVTdGFydDogc2xpZGVyU2l6ZSAvIDIsXG4gICAgICBoYW5kbGVSYW5nZTogd2lkdGggLSBzbGlkZXJTaXplLFxuICAgICAgcmFkaXVzOiBzbGlkZXJTaXplIC8gMixcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IGlzaG9yaXpvbnRhbCA/IHNsaWRlclNpemUgOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaXNob3Jpem9udGFsID8gd2lkdGggOiBzbGlkZXJTaXplXG4gICAgfTtcbiAgfVxufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWUgZm9yIGEgZ2l2ZW4gY29sb3IsIGFzIGEgcGVyY2VudGFnZVxyXG4gKiBAcGFyYW0gcHJvcHMgLSBzbGlkZXIgcHJvcHNcclxuICogQHBhcmFtIGNvbG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2xpZGVyVmFsdWUocHJvcHMsIGNvbG9yKSB7XG4gIHZhciBoc3ZhID0gY29sb3IuaHN2YTtcbiAgdmFyIHJnYiA9IGNvbG9yLnJnYjtcblxuICBzd2l0Y2ggKHByb3BzLnNsaWRlclR5cGUpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgcmV0dXJuIHJnYi5yIC8gMi41NTtcblxuICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgIHJldHVybiByZ2IuZyAvIDIuNTU7XG5cbiAgICBjYXNlICdibHVlJzpcbiAgICAgIHJldHVybiByZ2IuYiAvIDIuNTU7XG5cbiAgICBjYXNlICdhbHBoYSc6XG4gICAgICByZXR1cm4gaHN2YS5hICogMTAwO1xuXG4gICAgY2FzZSAna2VsdmluJzpcbiAgICAgIHZhciBtaW5UZW1wZXJhdHVyZSA9IHByb3BzLm1pblRlbXBlcmF0dXJlLFxuICAgICAgICAgIG1heFRlbXBlcmF0dXJlID0gcHJvcHMubWF4VGVtcGVyYXR1cmU7XG4gICAgICB2YXIgdGVtcGVyYXR1cmVSYW5nZSA9IG1heFRlbXBlcmF0dXJlIC0gbWluVGVtcGVyYXR1cmU7XG4gICAgICB2YXIgcGVyY2VudCA9IChjb2xvci5rZWx2aW4gLSBtaW5UZW1wZXJhdHVyZSkgLyB0ZW1wZXJhdHVyZVJhbmdlICogMTAwOyAvLyBjbG1hcCBwZXJjZW50YWdlXG5cbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihwZXJjZW50LCAxMDApKTtcblxuICAgIGNhc2UgJ2h1ZSc6XG4gICAgICByZXR1cm4gaHN2YS5oIC89IDMuNjtcblxuICAgIGNhc2UgJ3NhdHVyYXRpb24nOlxuICAgICAgcmV0dXJuIGhzdmEucztcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGhzdmEudjtcbiAgfVxufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWUgZnJvbSB1c2VyIGlucHV0XHJcbiAqIEBwYXJhbSBwcm9wcyAtIHNsaWRlciBwcm9wc1xyXG4gKiBAcGFyYW0geCAtIGdsb2JhbCBpbnB1dCB4IHBvc2l0aW9uXHJcbiAqIEBwYXJhbSB5IC0gZ2xvYmFsIGlucHV0IHkgcG9zaXRpb25cclxuICovXG5cbmZ1bmN0aW9uIGdldFNsaWRlclZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KSB7XG4gIHZhciBfZ2V0U2xpZGVyRGltZW5zaW9ucyA9IGdldFNsaWRlckRpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgaGFuZGxlUmFuZ2UgPSBfZ2V0U2xpZGVyRGltZW5zaW9ucy5oYW5kbGVSYW5nZSxcbiAgICAgIGhhbmRsZVN0YXJ0ID0gX2dldFNsaWRlckRpbWVuc2lvbnMuaGFuZGxlU3RhcnQ7XG5cbiAgdmFyIGhhbmRsZVBvcztcblxuICBpZiAocHJvcHMubGF5b3V0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBoYW5kbGVQb3MgPSAtMSAqIHkgKyBoYW5kbGVSYW5nZSArIGhhbmRsZVN0YXJ0O1xuICB9IGVsc2Uge1xuICAgIGhhbmRsZVBvcyA9IHggLSBoYW5kbGVTdGFydDtcbiAgfSAvLyBjbGFtcCBoYW5kbGUgcG9zaXRpb25cblxuXG4gIGhhbmRsZVBvcyA9IE1hdGgubWF4KE1hdGgubWluKGhhbmRsZVBvcywgaGFuZGxlUmFuZ2UpLCAwKTtcbiAgdmFyIHBlcmNlbnQgPSBNYXRoLnJvdW5kKDEwMCAvIGhhbmRsZVJhbmdlICogaGFuZGxlUG9zKTtcblxuICBzd2l0Y2ggKHByb3BzLnNsaWRlclR5cGUpIHtcbiAgICBjYXNlICdrZWx2aW4nOlxuICAgICAgdmFyIG1pblRlbXBlcmF0dXJlID0gcHJvcHMubWluVGVtcGVyYXR1cmUsXG4gICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSBwcm9wcy5tYXhUZW1wZXJhdHVyZTtcbiAgICAgIHZhciB0ZW1wZXJhdHVyZVJhbmdlID0gbWF4VGVtcGVyYXR1cmUgLSBtaW5UZW1wZXJhdHVyZTtcbiAgICAgIHJldHVybiBtaW5UZW1wZXJhdHVyZSArIHRlbXBlcmF0dXJlUmFuZ2UgKiAocGVyY2VudCAvIDEwMCk7XG5cbiAgICBjYXNlICdhbHBoYSc6XG4gICAgICByZXR1cm4gcGVyY2VudCAvIDEwMDtcblxuICAgIGNhc2UgJ2h1ZSc6XG4gICAgICByZXR1cm4gcGVyY2VudCAqIDMuNjtcblxuICAgIGNhc2UgJ3JlZCc6XG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgcmV0dXJuIHBlcmNlbnQgKiAyLjU1O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwZXJjZW50O1xuICB9XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IGhhbmRsZSBwb3NpdGlvbiBmb3IgYSBnaXZlbiBjb2xvclxyXG4gKiBAcGFyYW0gcHJvcHMgLSBzbGlkZXIgcHJvcHNcclxuICogQHBhcmFtIGNvbG9yXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRTbGlkZXJIYW5kbGVQb3NpdGlvbihwcm9wcywgY29sb3IpIHtcbiAgdmFyIF9nZXRTbGlkZXJEaW1lbnNpb25zMiA9IGdldFNsaWRlckRpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgd2lkdGggPSBfZ2V0U2xpZGVyRGltZW5zaW9uczIud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfZ2V0U2xpZGVyRGltZW5zaW9uczIuaGVpZ2h0LFxuICAgICAgaGFuZGxlUmFuZ2UgPSBfZ2V0U2xpZGVyRGltZW5zaW9uczIuaGFuZGxlUmFuZ2UsXG4gICAgICBoYW5kbGVTdGFydCA9IF9nZXRTbGlkZXJEaW1lbnNpb25zMi5oYW5kbGVTdGFydDtcblxuICB2YXIgaXNob3Jpem9udGFsID0gcHJvcHMubGF5b3V0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gIHZhciBzbGlkZXJWYWx1ZSA9IGdldEN1cnJlbnRTbGlkZXJWYWx1ZShwcm9wcywgY29sb3IpO1xuICB2YXIgbWlkUG9pbnQgPSBpc2hvcml6b250YWwgPyB3aWR0aCAvIDIgOiBoZWlnaHQgLyAyO1xuICB2YXIgaGFuZGxlUG9zID0gaGFuZGxlU3RhcnQgKyBzbGlkZXJWYWx1ZSAvIDEwMCAqIGhhbmRsZVJhbmdlO1xuXG4gIGlmIChpc2hvcml6b250YWwpIHtcbiAgICBoYW5kbGVQb3MgPSAtMSAqIGhhbmRsZVBvcyArIGhhbmRsZVJhbmdlICsgaGFuZGxlU3RhcnQgKiAyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBpc2hvcml6b250YWwgPyBtaWRQb2ludCA6IGhhbmRsZVBvcyxcbiAgICB5OiBpc2hvcml6b250YWwgPyBoYW5kbGVQb3MgOiBtaWRQb2ludFxuICB9O1xufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgZ3JhZGllbnQgc3RvcHMgZm9yIGEgc2xpZGVyXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHNsaWRlciBwcm9wc1xyXG4gKiBAcGFyYW0gY29sb3JcclxuICovXG5cbmZ1bmN0aW9uIGdldFNsaWRlckdyYWRpZW50KHByb3BzLCBjb2xvcikge1xuICB2YXIgaHN2ID0gY29sb3IuaHN2O1xuICB2YXIgcmdiID0gY29sb3IucmdiO1xuXG4gIHN3aXRjaCAocHJvcHMuc2xpZGVyVHlwZSkge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICByZXR1cm4gW1swLCBcInJnYihcIiArIDAgKyBcIixcIiArIHJnYi5nICsgXCIsXCIgKyByZ2IuYiArIFwiKVwiXSwgWzEwMCwgXCJyZ2IoXCIgKyAyNTUgKyBcIixcIiArIHJnYi5nICsgXCIsXCIgKyByZ2IuYiArIFwiKVwiXV07XG5cbiAgICBjYXNlICdncmVlbic6XG4gICAgICByZXR1cm4gW1swLCBcInJnYihcIiArIHJnYi5yICsgXCIsXCIgKyAwICsgXCIsXCIgKyByZ2IuYiArIFwiKVwiXSwgWzEwMCwgXCJyZ2IoXCIgKyByZ2IuciArIFwiLFwiICsgMjU1ICsgXCIsXCIgKyByZ2IuYiArIFwiKVwiXV07XG5cbiAgICBjYXNlICdibHVlJzpcbiAgICAgIHJldHVybiBbWzAsIFwicmdiKFwiICsgcmdiLnIgKyBcIixcIiArIHJnYi5nICsgXCIsXCIgKyAwICsgXCIpXCJdLCBbMTAwLCBcInJnYihcIiArIHJnYi5yICsgXCIsXCIgKyByZ2IuZyArIFwiLFwiICsgMjU1ICsgXCIpXCJdXTtcblxuICAgIGNhc2UgJ2FscGhhJzpcbiAgICAgIHJldHVybiBbWzAsIFwicmdiYShcIiArIHJnYi5yICsgXCIsXCIgKyByZ2IuZyArIFwiLFwiICsgcmdiLmIgKyBcIiwwKVwiXSwgWzEwMCwgXCJyZ2IoXCIgKyByZ2IuciArIFwiLFwiICsgcmdiLmcgKyBcIixcIiArIHJnYi5iICsgXCIpXCJdXTtcblxuICAgIGNhc2UgJ2tlbHZpbic6XG4gICAgICB2YXIgc3RvcHMgPSBbXTtcbiAgICAgIHZhciBtaW4gPSBwcm9wcy5taW5UZW1wZXJhdHVyZTtcbiAgICAgIHZhciBtYXggPSBwcm9wcy5tYXhUZW1wZXJhdHVyZTtcbiAgICAgIHZhciBudW1TdG9wcyA9IDg7XG4gICAgICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG5cbiAgICAgIGZvciAodmFyIGtlbHZpbiA9IG1pbiwgc3RvcCA9IDA7IGtlbHZpbiA8IG1heDsga2VsdmluICs9IHJhbmdlIC8gbnVtU3RvcHMsIHN0b3AgKz0gMSkge1xuICAgICAgICB2YXIgX0lyb0NvbG9yJGtlbHZpblRvUmdiID0gSXJvQ29sb3Iua2VsdmluVG9SZ2Ioa2VsdmluKSxcbiAgICAgICAgICAgIHIgPSBfSXJvQ29sb3Ika2VsdmluVG9SZ2IucixcbiAgICAgICAgICAgIGcgPSBfSXJvQ29sb3Ika2VsdmluVG9SZ2IuZyxcbiAgICAgICAgICAgIGIgPSBfSXJvQ29sb3Ika2VsdmluVG9SZ2IuYjtcblxuICAgICAgICBzdG9wcy5wdXNoKFsxMDAgLyBudW1TdG9wcyAqIHN0b3AsIFwicmdiKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiKVwiXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9wcztcblxuICAgIGNhc2UgJ2h1ZSc6XG4gICAgICByZXR1cm4gW1swLCAnI2YwMCddLCBbMTYuNjY2LCAnI2ZmMCddLCBbMzMuMzMzLCAnIzBmMCddLCBbNTAsICcjMGZmJ10sIFs2Ni42NjYsICcjMDBmJ10sIFs4My4zMzMsICcjZjBmJ10sIFsxMDAsICcjZjAwJ11dO1xuXG4gICAgY2FzZSAnc2F0dXJhdGlvbic6XG4gICAgICB2YXIgbm9TYXQgPSBJcm9Db2xvci5oc3ZUb0hzbCh7XG4gICAgICAgIGg6IGhzdi5oLFxuICAgICAgICBzOiAwLFxuICAgICAgICB2OiBoc3YudlxuICAgICAgfSk7XG4gICAgICB2YXIgZnVsbFNhdCA9IElyb0NvbG9yLmhzdlRvSHNsKHtcbiAgICAgICAgaDogaHN2LmgsXG4gICAgICAgIHM6IDEwMCxcbiAgICAgICAgdjogaHN2LnZcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtbMCwgXCJoc2woXCIgKyBub1NhdC5oICsgXCIsXCIgKyBub1NhdC5zICsgXCIlLFwiICsgbm9TYXQubCArIFwiJSlcIl0sIFsxMDAsIFwiaHNsKFwiICsgZnVsbFNhdC5oICsgXCIsXCIgKyBmdWxsU2F0LnMgKyBcIiUsXCIgKyBmdWxsU2F0LmwgKyBcIiUpXCJdXTtcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGhzbCA9IElyb0NvbG9yLmhzdlRvSHNsKHtcbiAgICAgICAgaDogaHN2LmgsXG4gICAgICAgIHM6IGhzdi5zLFxuICAgICAgICB2OiAxMDBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtbMCwgJyMwMDAnXSwgWzEwMCwgXCJoc2woXCIgKyBoc2wuaCArIFwiLFwiICsgaHNsLnMgKyBcIiUsXCIgKyBoc2wubCArIFwiJSlcIl1dO1xuICB9XG59XG5cbnZhciBUQVUgPSBNYXRoLlBJICogMjsgLy8gamF2YXNjcmlwdCdzIG1vZHVsbyBvcGVyYXRvciBkb2Vzbid0IHByb2R1Y2UgcG9zaXRpdmUgbnVtYmVycyB3aXRoIG5lZ2F0aXZlIGlucHV0XG4vLyBodHRwczovL2Rldi50by9tYXVyb2JyaW5nb2xmL2EtbmVhdC10cmljay10by1jb21wdXRlLW1vZHVsby1vZi1uZWdhdGl2ZS1udW1iZXJzLTExMWVcblxudmFyIG1vZCA9IGZ1bmN0aW9uIG1vZChhLCBuKSB7XG4gIHJldHVybiAoYSAlIG4gKyBuKSAlIG47XG59OyAvLyBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50cyAoeCwgeSkgYW5kICgwLCAwKVxuXG5cbnZhciBkaXN0ID0gZnVuY3Rpb24gZGlzdCh4LCB5KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG59O1xuLyoqXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHdoZWVsIHByb3BzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRIYW5kbGVSYW5nZShwcm9wcykge1xuICByZXR1cm4gcHJvcHMud2lkdGggLyAyIC0gcHJvcHMucGFkZGluZyAtIHByb3BzLmhhbmRsZVJhZGl1cyAtIHByb3BzLmJvcmRlcldpZHRoO1xufVxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBwb2ludCAoeCwgeSkgbGFuZHMgaW5zaWRlIHRoZSB3aGVlbFxyXG4gKiBAcGFyYW0gcHJvcHMgLSB3aGVlbCBwcm9wc1xyXG4gKiBAcGFyYW0geFxyXG4gKiBAcGFyYW0geVxyXG4gKi9cblxuXG5mdW5jdGlvbiBpc0lucHV0SW5zaWRlV2hlZWwocHJvcHMsIHgsIHkpIHtcbiAgdmFyIF9nZXRXaGVlbERpbWVuc2lvbnMgPSBnZXRXaGVlbERpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgY3ggPSBfZ2V0V2hlZWxEaW1lbnNpb25zLmN4LFxuICAgICAgY3kgPSBfZ2V0V2hlZWxEaW1lbnNpb25zLmN5O1xuXG4gIHZhciByID0gcHJvcHMud2lkdGggLyAyO1xuICByZXR1cm4gZGlzdChjeCAtIHgsIGN5IC0geSkgPCByO1xufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgcG9pbnQgYXMgdGhlIGNlbnRlciBvZiB0aGUgd2hlZWxcclxuICogQHBhcmFtIHByb3BzIC0gd2hlZWwgcHJvcHNcclxuICovXG5cbmZ1bmN0aW9uIGdldFdoZWVsRGltZW5zaW9ucyhwcm9wcykge1xuICB2YXIgciA9IHByb3BzLndpZHRoIC8gMjtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgcmFkaXVzOiByIC0gcHJvcHMuYm9yZGVyV2lkdGgsXG4gICAgY3g6IHIsXG4gICAgY3k6IHJcbiAgfTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBUcmFuc2xhdGUgYW4gYW5nbGUgYWNjb3JkaW5nIHRvIHdoZWVsQW5nbGUgYW5kIHdoZWVsRGlyZWN0aW9uXHJcbiAqIEBwYXJhbSBwcm9wcyAtIHdoZWVsIHByb3BzXHJcbiAqIEBwYXJhbSBhbmdsZSAtIGlucHV0IGFuZ2xlXHJcbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVXaGVlbEFuZ2xlKHByb3BzLCBhbmdsZSwgaW52ZXJ0KSB7XG4gIHZhciB3aGVlbEFuZ2xlID0gcHJvcHMud2hlZWxBbmdsZTtcbiAgdmFyIHdoZWVsRGlyZWN0aW9uID0gcHJvcHMud2hlZWxEaXJlY3Rpb247IC8vIGludmVydGVkIGFuZCBjbG9ja3dpc2VlXG5cbiAgaWYgKGludmVydCAmJiB3aGVlbERpcmVjdGlvbiA9PT0gJ2Nsb2Nrd2lzZScpIHsgYW5nbGUgPSB3aGVlbEFuZ2xlICsgYW5nbGU7IH0gLy8gY2xvY2t3aXNlIChpbnB1dCBoYW5kbGluZylcbiAgZWxzZSBpZiAod2hlZWxEaXJlY3Rpb24gPT09ICdjbG9ja3dpc2UnKSB7IGFuZ2xlID0gMzYwIC0gd2hlZWxBbmdsZSArIGFuZ2xlOyB9IC8vIGludmVydGVkIGFuZCBhbnRpY2xvY2t3aXNlXG4gICAgZWxzZSBpZiAoaW52ZXJ0ICYmIHdoZWVsRGlyZWN0aW9uID09PSAnYW50aWNsb2Nrd2lzZScpIHsgYW5nbGUgPSB3aGVlbEFuZ2xlICsgMTgwIC0gYW5nbGU7IH0gLy8gYW50aWNsb2Nrd2lzZSAoaW5wdXQgaGFuZGxpbmcpXG4gICAgICBlbHNlIGlmICh3aGVlbERpcmVjdGlvbiA9PT0gJ2FudGljbG9ja3dpc2UnKSB7IGFuZ2xlID0gd2hlZWxBbmdsZSAtIGFuZ2xlOyB9XG4gIHJldHVybiBtb2QoYW5nbGUsIDM2MCk7XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IGhhbmRsZSBwb3NpdGlvbiBmb3IgYSBnaXZlbiBjb2xvclxyXG4gKiBAcGFyYW0gcHJvcHMgLSB3aGVlbCBwcm9wc1xyXG4gKiBAcGFyYW0gY29sb3JcclxuICovXG5cbmZ1bmN0aW9uIGdldFdoZWVsSGFuZGxlUG9zaXRpb24ocHJvcHMsIGNvbG9yKSB7XG4gIHZhciBoc3YgPSBjb2xvci5oc3Y7XG5cbiAgdmFyIF9nZXRXaGVlbERpbWVuc2lvbnMyID0gZ2V0V2hlZWxEaW1lbnNpb25zKHByb3BzKSxcbiAgICAgIGN4ID0gX2dldFdoZWVsRGltZW5zaW9uczIuY3gsXG4gICAgICBjeSA9IF9nZXRXaGVlbERpbWVuc2lvbnMyLmN5O1xuXG4gIHZhciBoYW5kbGVSYW5nZSA9IGdldEhhbmRsZVJhbmdlKHByb3BzKTtcbiAgdmFyIGhhbmRsZUFuZ2xlID0gKDE4MCArIHRyYW5zbGF0ZVdoZWVsQW5nbGUocHJvcHMsIGhzdi5oLCB0cnVlKSkgKiAoVEFVIC8gMzYwKTtcbiAgdmFyIGhhbmRsZURpc3QgPSBoc3YucyAvIDEwMCAqIGhhbmRsZVJhbmdlO1xuICB2YXIgZGlyZWN0aW9uID0gcHJvcHMud2hlZWxEaXJlY3Rpb24gPT09ICdjbG9ja3dpc2UnID8gLTEgOiAxO1xuICByZXR1cm4ge1xuICAgIHg6IGN4ICsgaGFuZGxlRGlzdCAqIE1hdGguY29zKGhhbmRsZUFuZ2xlKSAqIGRpcmVjdGlvbixcbiAgICB5OiBjeSArIGhhbmRsZURpc3QgKiBNYXRoLnNpbihoYW5kbGVBbmdsZSkgKiBkaXJlY3Rpb25cbiAgfTtcbn1cbi8qKlxyXG4gKiBAZGVzYyBHZXQgdGhlIGN1cnJlbnQgd2hlZWwgdmFsdWUgZnJvbSB1c2VyIGlucHV0XHJcbiAqIEBwYXJhbSBwcm9wcyAtIHdoZWVsIHByb3BzXHJcbiAqIEBwYXJhbSB4IC0gZ2xvYmFsIGlucHV0IHggcG9zaXRpb25cclxuICogQHBhcmFtIHkgLSBnbG9iYWwgaW5wdXQgeSBwb3NpdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0V2hlZWxWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSkge1xuICB2YXIgX2dldFdoZWVsRGltZW5zaW9uczMgPSBnZXRXaGVlbERpbWVuc2lvbnMocHJvcHMpLFxuICAgICAgY3ggPSBfZ2V0V2hlZWxEaW1lbnNpb25zMy5jeCxcbiAgICAgIGN5ID0gX2dldFdoZWVsRGltZW5zaW9uczMuY3k7XG5cbiAgdmFyIGhhbmRsZVJhbmdlID0gZ2V0SGFuZGxlUmFuZ2UocHJvcHMpO1xuICB4ID0gY3ggLSB4O1xuICB5ID0gY3kgLSB5OyAvLyBDYWxjdWxhdGUgdGhlIGh1ZSBieSBjb252ZXJ0aW5nIHRoZSBhbmdsZSB0byByYWRpYW5zXG5cbiAgdmFyIGh1ZSA9IHRyYW5zbGF0ZVdoZWVsQW5nbGUocHJvcHMsIE1hdGguYXRhbjIoLXksIC14KSAqICgzNjAgLyBUQVUpKTsgLy8gRmluZCB0aGUgcG9pbnQncyBkaXN0YW5jZSBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHdoZWVsXG4gIC8vIFRoaXMgaXMgdXNlZCB0byBzaG93IHRoZSBzYXR1cmF0aW9uIGxldmVsXG5cbiAgdmFyIGhhbmRsZURpc3QgPSBNYXRoLm1pbihkaXN0KHgsIHkpLCBoYW5kbGVSYW5nZSk7XG4gIHJldHVybiB7XG4gICAgaDogTWF0aC5yb3VuZChodWUpLFxuICAgIHM6IE1hdGgucm91bmQoMTAwIC8gaGFuZGxlUmFuZ2UgKiBoYW5kbGVEaXN0KVxuICB9O1xufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgYm91bmRpbmcgZGltZW5zaW9ucyBvZiB0aGUgYm94XHJcbiAqIEBwYXJhbSBwcm9wcyAtIGJveCBwcm9wc1xyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm94RGltZW5zaW9ucyhwcm9wcykge1xuICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aCxcbiAgICAgIGJveEhlaWdodCA9IHByb3BzLmJveEhlaWdodCxcbiAgICAgIHBhZGRpbmcgPSBwcm9wcy5wYWRkaW5nLFxuICAgICAgaGFuZGxlUmFkaXVzID0gcHJvcHMuaGFuZGxlUmFkaXVzO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGJveEhlaWdodCAhPSBudWxsID8gYm94SGVpZ2h0IDogd2lkdGgsXG4gICAgcmFkaXVzOiBwYWRkaW5nICsgaGFuZGxlUmFkaXVzXG4gIH07XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IGJveCB2YWx1ZSBmcm9tIHVzZXIgaW5wdXRcclxuICogQHBhcmFtIHByb3BzIC0gYm94IHByb3BzXHJcbiAqIEBwYXJhbSB4IC0gZ2xvYmFsIGlucHV0IHggcG9zaXRpb25cclxuICogQHBhcmFtIHkgLSBnbG9iYWwgaW5wdXQgeSBwb3NpdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm94VmFsdWVGcm9tSW5wdXQocHJvcHMsIHgsIHkpIHtcbiAgdmFyIF9nZXRCb3hEaW1lbnNpb25zID0gZ2V0Qm94RGltZW5zaW9ucyhwcm9wcyksXG4gICAgICB3aWR0aCA9IF9nZXRCb3hEaW1lbnNpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2dldEJveERpbWVuc2lvbnMuaGVpZ2h0LFxuICAgICAgcmFkaXVzID0gX2dldEJveERpbWVuc2lvbnMucmFkaXVzO1xuXG4gIHZhciBoYW5kbGVTdGFydCA9IHJhZGl1cztcbiAgdmFyIGhhbmRsZVJhbmdlWCA9IHdpZHRoIC0gcmFkaXVzICogMjtcbiAgdmFyIGhhbmRsZVJhbmdlWSA9IGhlaWdodCAtIHJhZGl1cyAqIDI7XG4gIHZhciBwZXJjZW50WCA9ICh4IC0gaGFuZGxlU3RhcnQpIC8gaGFuZGxlUmFuZ2VYICogMTAwO1xuICB2YXIgcGVyY2VudFkgPSAoeSAtIGhhbmRsZVN0YXJ0KSAvIGhhbmRsZVJhbmdlWSAqIDEwMDtcbiAgcmV0dXJuIHtcbiAgICBzOiBNYXRoLm1heCgwLCBNYXRoLm1pbihwZXJjZW50WCwgMTAwKSksXG4gICAgdjogTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwIC0gcGVyY2VudFksIDEwMCkpXG4gIH07XG59XG4vKipcclxuICogQGRlc2MgR2V0IHRoZSBjdXJyZW50IGJveCBoYW5kbGUgcG9zaXRpb24gZm9yIGEgZ2l2ZW4gY29sb3JcclxuICogQHBhcmFtIHByb3BzIC0gYm94IHByb3BzXHJcbiAqIEBwYXJhbSBjb2xvclxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm94SGFuZGxlUG9zaXRpb24ocHJvcHMsIGNvbG9yKSB7XG4gIHZhciBfZ2V0Qm94RGltZW5zaW9uczIgPSBnZXRCb3hEaW1lbnNpb25zKHByb3BzKSxcbiAgICAgIHdpZHRoID0gX2dldEJveERpbWVuc2lvbnMyLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2dldEJveERpbWVuc2lvbnMyLmhlaWdodCxcbiAgICAgIHJhZGl1cyA9IF9nZXRCb3hEaW1lbnNpb25zMi5yYWRpdXM7XG5cbiAgdmFyIGhzdiA9IGNvbG9yLmhzdjtcbiAgdmFyIGhhbmRsZVN0YXJ0ID0gcmFkaXVzO1xuICB2YXIgaGFuZGxlUmFuZ2VYID0gd2lkdGggLSByYWRpdXMgKiAyO1xuICB2YXIgaGFuZGxlUmFuZ2VZID0gaGVpZ2h0IC0gcmFkaXVzICogMjtcbiAgcmV0dXJuIHtcbiAgICB4OiBoYW5kbGVTdGFydCArIGhzdi5zIC8gMTAwICogaGFuZGxlUmFuZ2VYLFxuICAgIHk6IGhhbmRsZVN0YXJ0ICsgKGhhbmRsZVJhbmdlWSAtIGhzdi52IC8gMTAwICogaGFuZGxlUmFuZ2VZKVxuICB9O1xufVxuLyoqXHJcbiAqIEBkZXNjIEdldCB0aGUgZ3JhZGllbnQgc3RvcHMgZm9yIGEgYm94XHJcbiAqIEBwYXJhbSBwcm9wcyAtIGJveCBwcm9wc1xyXG4gKiBAcGFyYW0gY29sb3JcclxuICovXG5cbmZ1bmN0aW9uIGdldEJveEdyYWRpZW50cyhwcm9wcywgY29sb3IpIHtcbiAgdmFyIGh1ZSA9IGNvbG9yLmh1ZTtcbiAgcmV0dXJuIFsvLyBzYXR1cmF0aW9uIGdyYWRpZW50XG4gIFtbMCwgJyNmZmYnXSwgWzEwMCwgXCJoc2woXCIgKyBodWUgKyBcIiwxMDAlLDUwJSlcIl1dLCAvLyBsaWdodG5lc3MgZ3JhZGllbnRcbiAgW1swLCAncmdiYSgwLDAsMCwwKSddLCBbMTAwLCAnIzAwMCddXV07XG59XG5cbi8vIEtlZXAgdHJhY2sgb2YgaHRtbCA8YmFzZT4gZWxlbWVudHMgZm9yIHJlc29sdmVTdmdVcmxcbi8vIGdldEVsZW1lbnRzQnlUYWdOYW1lIHJldHVybnMgYSBsaXZlIEhUTUxDb2xsZWN0aW9uLCB3aGljaCBzdGF5cyBpbiBzeW5jIHdpdGggdGhlIERPTSB0cmVlXG4vLyBTbyBpdCBvbmx5IG5lZWRzIHRvIGJlIGNhbGxlZCBvbmNlXG52YXIgQkFTRV9FTEVNRU5UUztcbi8qKlxyXG4gKiBAZGVzYyBSZXNvbHZlIGFuIFNWRyByZWZlcmVuY2UgVVJMXHJcbiAqIFRoaXMgaXMgcmVxdWlyZWQgdG8gd29yayBhcm91bmQgaG93IFNhZmFyaSBhbmQgaU9TIHdlYnZpZXdzIGhhbmRsZSBncmFkaWVudCBVUkxTIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9uc1xyXG4gKiBJZiBhIHBhZ2UgaXMgdXNpbmcgYSBjbGllbnQtc2lkZSByb3V0aW5nIGxpYnJhcnkgd2hpY2ggbWFrZXMgdXNlIG9mIHRoZSBIVE1MIDxiYXNlPiB0YWcsXHJcbiAqIFNhZmFyaSB3b24ndCBiZSBhYmxlIHRvIHJlbmRlciBTVkcgZ3JhZGllbnRzIHByb3Blcmx5IChhcyB0aGV5IGFyZSByZWZlcmVuY2VkIGJ5IFVSTHMpXHJcbiAqIE1vcmUgaW5mbyBvbiB0aGUgcHJvYmxlbTpcclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NDI4MDUvYW5ndWxhci1hbmQtc3ZnLWZpbHRlcnMvMTk3NTM0MjcjMTk3NTM0MjdcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2phYW1lcy9pcm8uanMvaXNzdWVzLzE4XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWFtZXMvaXJvLmpzL2lzc3Vlcy80NVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFhbWVzL2lyby5qcy9wdWxsLzg5XHJcbiAqIEBwcm9wcyB1cmwgLSBTVkcgcmVmZXJlbmNlIFVSTFxyXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVN2Z1VybCh1cmwpIHtcbiAgaWYgKCFCQVNFX0VMRU1FTlRTKSB7IEJBU0VfRUxFTUVOVFMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpOyB9IC8vIFNuaWZmIHVzZXJhZ2VudCBzdHJpbmcgdG8gY2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBTYWZhcmlcblxuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCh1YSk7XG4gIHZhciBpc0lvcyA9IC9pUGhvbmV8aVBvZHxpUGFkL2kudGVzdCh1YSk7XG4gIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgcmV0dXJuIChpc1NhZmFyaSB8fCBpc0lvcykgJiYgQkFTRV9FTEVNRU5UUy5sZW5ndGggPiAwID8gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyB1cmwgOiB1cmw7XG59XG4vKipcclxuICogQGRlc2MgR2l2ZW4gYSBzcGVjaWZjICh4LCB5KSBwb3NpdGlvbiwgdGVzdCBpZiB0aGVyZSdzIGEgaGFuZGxlIHRoZXJlIGFuZCByZXR1cm4gaXRzIGluZGV4LCBlbHNlIHJldHVybiBudWxsLlxyXG4gKiAgICAgICBUaGlzIGlzIHVzZWQgZm9yIGNvbXBvbmVudHMgbGlrZSB0aGUgYm94IGFuZCB3aGVlbCB3aGljaCBzdXBwb3J0IG11bHRpcGxlIGhhbmRsZXMgd2hlbiBtdWx0aWNvbG9yIGlzIGFjdGl2ZVxyXG4gKiBAcHJvcHMgeCAtIHBvaW50IHggcG9zaXRpb25cclxuICogQHByb3BzIHkgLSBwb2ludCB5IHBvc2l0aW9uXHJcbiAqIEBwcm9wcyBoYW5kbGVQb3NpdGlvbnMgLSBhcnJheSBvZiB7eCwgeX0gY29vcmRzIGZvciBlYWNoIGhhbmRsZVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0SGFuZGxlQXRQb2ludChwcm9wcywgeCwgeSwgaGFuZGxlUG9zaXRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRYID0gaGFuZGxlUG9zaXRpb25zW2ldLnggLSB4O1xuICAgIHZhciBkWSA9IGhhbmRsZVBvc2l0aW9uc1tpXS55IC0geTtcbiAgICB2YXIgZGlzdCA9IE1hdGguc3FydChkWCAqIGRYICsgZFkgKiBkWSk7XG5cbiAgICBpZiAoZGlzdCA8IHByb3BzLmhhbmRsZVJhZGl1cykge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNzc0JvcmRlclN0eWxlcyhwcm9wcykge1xuICByZXR1cm4ge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGJvcmRlcjogcHJvcHMuYm9yZGVyV2lkdGggKyBcInB4IHNvbGlkIFwiICsgcHJvcHMuYm9yZGVyQ29sb3JcbiAgfTtcbn1cbmZ1bmN0aW9uIGNzc0dyYWRpZW50KHR5cGUsIGRpcmVjdGlvbiwgc3RvcHMpIHtcbiAgcmV0dXJuIHR5cGUgKyBcIi1ncmFkaWVudChcIiArIGRpcmVjdGlvbiArIFwiLCBcIiArIHN0b3BzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBvID0gX3JlZlswXSxcbiAgICAgICAgY29sID0gX3JlZlsxXTtcbiAgICByZXR1cm4gY29sICsgXCIgXCIgKyBvICsgXCIlXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiKVwiO1xufVxuZnVuY3Rpb24gY3NzVmFsdWUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbn1cblxudmFyIGlyb0NvbG9yUGlja2VyT3B0aW9uRGVmYXVsdHMgPSB7XG4gIHdpZHRoOiAzMDAsXG4gIGhlaWdodDogMzAwLFxuICBjb2xvcjogJyNmZmYnLFxuICBjb2xvcnM6IFtdLFxuICBwYWRkaW5nOiA2LFxuICBsYXlvdXREaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIGJvcmRlckNvbG9yOiAnI2ZmZicsXG4gIGJvcmRlcldpZHRoOiAwLFxuICBoYW5kbGVSYWRpdXM6IDgsXG4gIGFjdGl2ZUhhbmRsZVJhZGl1czogbnVsbCxcbiAgaGFuZGxlU3ZnOiBudWxsLFxuICBoYW5kbGVQcm9wczoge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9LFxuICB3aGVlbExpZ2h0bmVzczogdHJ1ZSxcbiAgd2hlZWxBbmdsZTogMCxcbiAgd2hlZWxEaXJlY3Rpb246ICdhbnRpY2xvY2t3aXNlJyxcbiAgc2xpZGVyU2l6ZTogbnVsbCxcbiAgc2xpZGVyTWFyZ2luOiAxMixcbiAgYm94SGVpZ2h0OiBudWxsXG59O1xuXG52YXIgU0VDT05EQVJZX0VWRU5UUyA9IFtcIm1vdXNlbW92ZVwiIC8qIE1vdXNlTW92ZSAqLywgXCJ0b3VjaG1vdmVcIiAvKiBUb3VjaE1vdmUgKi8sIFwibW91c2V1cFwiIC8qIE1vdXNlVXAgKi8sIFwidG91Y2hlbmRcIiAvKiBUb3VjaEVuZCAqL107XHJcbi8vIEJhc2UgY29tcG9uZW50IGNsYXNzIGZvciBpcm8gVUkgY29tcG9uZW50c1xyXG4vLyBUaGlzIGV4dGVuZHMgdGhlIFByZWFjdCBjb21wb25lbnQgY2xhc3MgdG8gYWxsb3cgdGhlbSB0byByZWFjdCB0byBtb3VzZS90b3VjaCBpbnB1dCBldmVudHMgYnkgdGhlbXNlbHZlc1xyXG52YXIgSXJvQ29tcG9uZW50V3JhcHBlciA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIElyb0NvbXBvbmVudFdyYXBwZXIocHJvcHMpIHtcclxuICAgICAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdW5pcXVlIElEIGZvciB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgLy8gVGhpcyBjYW4gYmUgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzIGZvciBncmFkaWVudHMsIGV0Y1xyXG4gICAgICAgIHRoaXMudWlkID0gKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDUpO1xyXG4gICAgfVxuXG4gICAgaWYgKCBDb21wb25lbnQgKSBJcm9Db21wb25lbnRXcmFwcGVyLl9fcHJvdG9fXyA9IENvbXBvbmVudDtcbiAgICBJcm9Db21wb25lbnRXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbXBvbmVudCAmJiBDb21wb25lbnQucHJvdG90eXBlICk7XG4gICAgSXJvQ29tcG9uZW50V3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJcm9Db21wb25lbnRXcmFwcGVyO1xyXG4gICAgSXJvQ29tcG9uZW50V3JhcHBlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChwcm9wcykge1xyXG4gICAgICAgIHZhciBldmVudEhhbmRsZXIgPSB0aGlzLmhhbmRsZUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdmFyIHJvb3RQcm9wcyA9IHtcclxuICAgICAgICAgICAgb25Nb3VzZURvd246IGV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2phYW1lcy9pcm8uanMvaXNzdWVzLzEyNlxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8yMTEzI2lzc3VlY29tbWVudC01NTM0MDg3NjdcclxuICAgICAgICAgICAgb250b3VjaHN0YXJ0OiBldmVudEhhbmRsZXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaXNIb3Jpem9udGFsID0gcHJvcHMubGF5b3V0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgdmFyIG1hcmdpbiA9IHByb3BzLm1hcmdpbiA9PT0gbnVsbCA/IHByb3BzLnNsaWRlck1hcmdpbiA6IHByb3BzLm1hcmdpbjtcclxuICAgICAgICB2YXIgcm9vdFN0eWxlcyA9IHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogaXNIb3Jpem9udGFsID8gJ2lubGluZS1ibG9jaycgOiAnYmxvY2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmaXJzdCBjb21wb25lbnQgc2hvdWxkbid0IGhhdmUgYW55IG1hcmdpblxyXG4gICAgICAgIGlmIChwcm9wcy5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgcm9vdFN0eWxlc1tpc0hvcml6b250YWwgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luVG9wJ10gPSBtYXJnaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoaChkLCBudWxsLCBwcm9wcy5jaGlsZHJlbih0aGlzLnVpZCwgcm9vdFByb3BzLCByb290U3R5bGVzKSkpO1xyXG4gICAgfTtcclxuICAgIC8vIE1vcmUgaW5mbyBvbiBoYW5kbGVFdmVudDpcclxuICAgIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AV2ViUmVmbGVjdGlvbi9kb20taGFuZGxlZXZlbnQtYS1jcm9zcy1wbGF0Zm9ybS1zdGFuZGFyZC1zaW5jZS15ZWFyLTIwMDAtNWJmMTcyODdmZDM4XHJcbiAgICAvLyBUTDtEUiB0aGlzIGxldHMgdXMgaGF2ZSBhIHNpbmdsZSBwb2ludCBvZiBlbnRyeSBmb3IgbXVsdGlwbGUgZXZlbnRzLCBhbmQgd2UgY2FuIGF2b2lkIGNhbGxiYWNrL2JpbmRpbmcgaGVsbFxyXG4gICAgSXJvQ29tcG9uZW50V3JhcHBlci5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiBoYW5kbGVFdmVudCAoZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxyXG4gICAgICAgIHZhciBpbnB1dEhhbmRsZXIgPSB0aGlzLnByb3BzLm9uSW5wdXQ7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBzY3JlZW4gcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLmJhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gUHJlZmVjdCBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIERldGVjdCBpZiB0aGUgZXZlbnQgaXMgYSB0b3VjaCBldmVudCBieSBjaGVja2luZyBpZiBpdCBoYXMgdGhlIGB0b3VjaGVzYCBwcm9wZXJ0eVxyXG4gICAgICAgIC8vIElmIGl0IGlzIGEgdG91Y2ggZXZlbnQsIHVzZSB0aGUgZmlyc3QgdG91Y2ggaW5wdXRcclxuICAgICAgICB2YXIgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcclxuICAgICAgICB2YXIgeCA9IHBvaW50LmNsaWVudFggLSBib3VuZHMubGVmdDtcclxuICAgICAgICB2YXIgeSA9IHBvaW50LmNsaWVudFkgLSBib3VuZHMudG9wO1xyXG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3VzZWRvd25cIiAvKiBNb3VzZURvd24gKi86XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaHN0YXJ0XCIgLyogVG91Y2hTdGFydCAqLzpcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dEhhbmRsZXIoeCwgeSwgMCAvKiBTdGFydCAqLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFNFQ09OREFSWV9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcyQxLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb3VzZW1vdmVcIiAvKiBNb3VzZU1vdmUgKi86XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIiAvKiBUb3VjaE1vdmUgKi86XHJcbiAgICAgICAgICAgICAgICBpbnB1dEhhbmRsZXIoeCwgeSwgMSAvKiBNb3ZlICovKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2V1cFwiIC8qIE1vdXNlVXAgKi86XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGVuZFwiIC8qIFRvdWNoRW5kICovOlxyXG4gICAgICAgICAgICAgICAgaW5wdXRIYW5kbGVyKHgsIHksIDIgLyogRW5kICovKTtcclxuICAgICAgICAgICAgICAgIFNFQ09OREFSWV9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzJDEsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XG5cbiAgICByZXR1cm4gSXJvQ29tcG9uZW50V3JhcHBlcjtcbn0obSkpO1xuXG5mdW5jdGlvbiBJcm9IYW5kbGUocHJvcHMpIHtcclxuICAgIHZhciByYWRpdXMgPSBwcm9wcy5yO1xyXG4gICAgdmFyIHVybCA9IHByb3BzLnVybDtcclxuICAgIHZhciBjeCA9IHJhZGl1cztcclxuICAgIHZhciBjeSA9IHJhZGl1cztcclxuICAgIHJldHVybiAoaChcInN2Z1wiLCB7IGNsYXNzTmFtZTogKFwiSXJvSGFuZGxlIElyb0hhbmRsZS0tXCIgKyAocHJvcHMuaW5kZXgpICsgXCIgXCIgKyAocHJvcHMuaXNBY3RpdmUgPyAnSXJvSGFuZGxlLS1pc0FjdGl2ZScgOiAnJykpLCBzdHlsZToge1xyXG4gICAgICAgICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMCk7JyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAoXCJ0cmFuc2xhdGUoXCIgKyAoY3NzVmFsdWUocHJvcHMueCkpICsgXCIsIFwiICsgKGNzc1ZhbHVlKHByb3BzLnkpKSArIFwiKVwiKSxcclxuICAgICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgIHRvcDogY3NzVmFsdWUoLXJhZGl1cyksXHJcbiAgICAgICAgICAgIGxlZnQ6IGNzc1ZhbHVlKC1yYWRpdXMpLFxyXG4gICAgICAgICAgICB3aWR0aDogY3NzVmFsdWUocmFkaXVzICogMiksXHJcbiAgICAgICAgICAgIGhlaWdodDogY3NzVmFsdWUocmFkaXVzICogMiksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnXHJcbiAgICAgICAgfSB9LFxyXG4gICAgICAgIHVybCAmJiAoaChcInVzZVwiLCBPYmplY3QuYXNzaWduKHsgeGxpbmtIcmVmOiByZXNvbHZlU3ZnVXJsKHVybCkgfSwgcHJvcHMucHJvcHMpKSksXHJcbiAgICAgICAgIXVybCAmJiAoaChcImNpcmNsZVwiLCB7IGN4OiBjeCwgY3k6IGN5LCByOiByYWRpdXMsIGZpbGw6IFwibm9uZVwiLCBcInN0cm9rZS13aWR0aFwiOiAyLCBzdHJva2U6IFwiIzAwMFwiIH0pKSxcclxuICAgICAgICAhdXJsICYmIChoKFwiY2lyY2xlXCIsIHsgY3g6IGN4LCBjeTogY3ksIHI6IHJhZGl1cyAtIDIsIGZpbGw6IHByb3BzLmZpbGwsIFwic3Ryb2tlLXdpZHRoXCI6IDIsIHN0cm9rZTogXCIjZmZmXCIgfSkpKSk7XHJcbn1cclxuSXJvSGFuZGxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZpbGw6ICdub25lJyxcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgcjogOCxcclxuICAgIHVybDogbnVsbCxcclxuICAgIHByb3BzOiB7IHg6IDAsIHk6IDAgfVxyXG59O1xuXG5mdW5jdGlvbiBJcm9TbGlkZXIocHJvcHMpIHtcclxuICAgIHZhciBhY3RpdmVJbmRleCA9IHByb3BzLmFjdGl2ZUluZGV4O1xyXG4gICAgdmFyIGFjdGl2ZUNvbG9yID0gKGFjdGl2ZUluZGV4ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZlSW5kZXggPCBwcm9wcy5jb2xvcnMubGVuZ3RoKSA/IHByb3BzLmNvbG9yc1thY3RpdmVJbmRleF0gOiBwcm9wcy5jb2xvcjtcclxuICAgIHZhciByZWYgPSBnZXRTbGlkZXJEaW1lbnNpb25zKHByb3BzKTtcbiAgICB2YXIgd2lkdGggPSByZWYud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgdmFyIHJhZGl1cyA9IHJlZi5yYWRpdXM7XHJcbiAgICB2YXIgaGFuZGxlUG9zID0gZ2V0U2xpZGVySGFuZGxlUG9zaXRpb24ocHJvcHMsIGFjdGl2ZUNvbG9yKTtcclxuICAgIHZhciBncmFkaWVudCA9IGdldFNsaWRlckdyYWRpZW50KHByb3BzLCBhY3RpdmVDb2xvcik7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dCh4LCB5LCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0U2xpZGVyVmFsdWVGcm9tSW5wdXQocHJvcHMsIHgsIHkpO1xyXG4gICAgICAgIHByb3BzLnBhcmVudC5pbnB1dEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYWN0aXZlQ29sb3JbcHJvcHMuc2xpZGVyVHlwZV0gPSB2YWx1ZTtcclxuICAgICAgICBwcm9wcy5vbklucHV0KHR5cGUsIHByb3BzLmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoaChJcm9Db21wb25lbnRXcmFwcGVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBvbklucHV0OiBoYW5kbGVJbnB1dCB9KSwgZnVuY3Rpb24gKHVpZCwgcm9vdFByb3BzLCByb290U3R5bGVzKSB7IHJldHVybiAoaChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCByb290UHJvcHMsIHsgY2xhc3NOYW1lOiBcIklyb1NsaWRlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwge3Bvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB3aWR0aDogY3NzVmFsdWUod2lkdGgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNzc1ZhbHVlKGhlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogY3NzVmFsdWUocmFkaXVzKSxcclxuICAgICAgICAgICAgLy8gY2hlY2tlcmVkIGJnIHRvIHJlcHJlc2VudCBhbHBoYVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImNvbmljLWdyYWRpZW50KCNjY2MgMjUlLCAjZmZmIDAgNTAlLCAjY2NjIDAgNzUlLCAjZmZmIDApXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnOHB4IDhweCd9LFxyXG4gICAgICAgICAgICByb290U3R5bGVzKSB9KSxcclxuICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIklyb1NsaWRlckdyYWRpZW50XCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCB7cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogY3NzVmFsdWUocmFkaXVzKSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNzc0dyYWRpZW50KCdsaW5lYXInLCBwcm9wcy5sYXlvdXREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd0byB0b3AnIDogJ3RvIHJpZ2h0JywgZ3JhZGllbnQpfSxcclxuICAgICAgICAgICAgICAgIGNzc0JvcmRlclN0eWxlcyhwcm9wcykpIH0pLFxyXG4gICAgICAgIGgoSXJvSGFuZGxlLCB7IGlzQWN0aXZlOiB0cnVlLCBpbmRleDogYWN0aXZlQ29sb3IuaW5kZXgsIHI6IHByb3BzLmhhbmRsZVJhZGl1cywgdXJsOiBwcm9wcy5oYW5kbGVTdmcsIHByb3BzOiBwcm9wcy5oYW5kbGVQcm9wcywgeDogaGFuZGxlUG9zLngsIHk6IGhhbmRsZVBvcy55IH0pKSk7IH0pKTtcclxufVxyXG5Jcm9TbGlkZXIuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgc2xpZGVyRGVmYXVsdE9wdGlvbnMpO1xuXG5mdW5jdGlvbiBJcm9Cb3gocHJvcHMpIHtcclxuICAgIHZhciByZWYgPSBnZXRCb3hEaW1lbnNpb25zKHByb3BzKTtcbiAgICB2YXIgd2lkdGggPSByZWYud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHJlZi5oZWlnaHQ7XG4gICAgdmFyIHJhZGl1cyA9IHJlZi5yYWRpdXM7XHJcbiAgICB2YXIgY29sb3JzID0gcHJvcHMuY29sb3JzO1xyXG4gICAgdmFyIGNvbG9yUGlja2VyID0gcHJvcHMucGFyZW50O1xyXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gcHJvcHMuYWN0aXZlSW5kZXg7XHJcbiAgICB2YXIgYWN0aXZlQ29sb3IgPSAoYWN0aXZlSW5kZXggIT09IHVuZGVmaW5lZCAmJiBhY3RpdmVJbmRleCA8IHByb3BzLmNvbG9ycy5sZW5ndGgpID8gcHJvcHMuY29sb3JzW2FjdGl2ZUluZGV4XSA6IHByb3BzLmNvbG9yO1xyXG4gICAgdmFyIGdyYWRpZW50cyA9IGdldEJveEdyYWRpZW50cyhwcm9wcywgYWN0aXZlQ29sb3IpO1xyXG4gICAgdmFyIGhhbmRsZVBvc2l0aW9ucyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiBnZXRCb3hIYW5kbGVQb3NpdGlvbihwcm9wcywgY29sb3IpOyB9KTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0KHgsIHksIGlucHV0VHlwZSkge1xyXG4gICAgICAgIGlmIChpbnB1dFR5cGUgPT09IDAgLyogU3RhcnQgKi8pIHtcclxuICAgICAgICAgICAgLy8gZ2V0SGFuZGxlQXRQb2ludCgpIHJldHVybnMgdGhlIGluZGV4IGZvciB0aGUgaGFuZGxlIGlmIHRoZSBwb2ludCAnaGl0cycgaXQsIG9yIG51bGwgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVIYW5kbGUgPSBnZXRIYW5kbGVBdFBvaW50KHByb3BzLCB4LCB5LCBoYW5kbGVQb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaGl0IGEgaGFuZGxlLCBzZXQgaXQgYXMgdGhlIGFjdGl2ZSBoYW5kbGUsIGJ1dCBkb24ndCB1cGRhdGUgdGhlIGNvbG9yXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVIYW5kbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yUGlja2VyLnNldEFjdGl2ZUNvbG9yKGFjdGl2ZUhhbmRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRpZG4ndCBoaXQgYSBoYW5kbGUsIHNldCB0aGUgY3VycmVudGx5IGFjdGl2ZSBoYW5kbGUgdG8gdGhhdCBwb3NpdGlvblxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yUGlja2VyLmlucHV0QWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yLmhzdiA9IGdldEJveFZhbHVlRnJvbUlucHV0KHByb3BzLCB4LCB5KTtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uSW5wdXQoaW5wdXRUeXBlLCBwcm9wcy5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbW92ZSBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIGhhcyBzdGFydGVkIGRyYWdnaW5nXHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSAxIC8qIE1vdmUgKi8pIHtcclxuICAgICAgICAgICAgY29sb3JQaWNrZXIuaW5wdXRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBhY3RpdmVDb2xvci5oc3YgPSBnZXRCb3hWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCB0aGUgY29sb3IgcGlja2VyIGZpcmUgaW5wdXQ6c3RhcnQsIGlucHV0Om1vdmUgb3IgaW5wdXQ6ZW5kIGV2ZW50c1xyXG4gICAgICAgIHByb3BzLm9uSW5wdXQoaW5wdXRUeXBlLCBwcm9wcy5pZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGgoSXJvQ29tcG9uZW50V3JhcHBlciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgb25JbnB1dDogaGFuZGxlSW5wdXQgfSksIGZ1bmN0aW9uICh1aWQsIHJvb3RQcm9wcywgcm9vdFN0eWxlcykgeyByZXR1cm4gKGgoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgcm9vdFByb3BzLCB7IGNsYXNzTmFtZTogXCJJcm9Cb3hcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIHt3aWR0aDogY3NzVmFsdWUod2lkdGgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNzc1ZhbHVlKGhlaWdodCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnfSxcclxuICAgICAgICAgICAgcm9vdFN0eWxlcykgfSksXHJcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJJcm9Cb3hcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIHt3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGNzc1ZhbHVlKHJhZGl1cyl9LFxyXG4gICAgICAgICAgICAgICAgY3NzQm9yZGVyU3R5bGVzKHByb3BzKSxcclxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kOiBjc3NHcmFkaWVudCgnbGluZWFyJywgJ3RvIGJvdHRvbScsIGdyYWRpZW50c1sxXSlcclxuICAgICAgICAgICAgICAgICAgICArICcsJyArXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzR3JhZGllbnQoJ2xpbmVhcicsICd0byByaWdodCcsIGdyYWRpZW50c1swXSl9KSB9KSxcclxuICAgICAgICBjb2xvcnMuZmlsdGVyKGZ1bmN0aW9uIChjb2xvcikgeyByZXR1cm4gY29sb3IgIT09IGFjdGl2ZUNvbG9yOyB9KS5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiAoaChJcm9IYW5kbGUsIHsgaXNBY3RpdmU6IGZhbHNlLCBpbmRleDogY29sb3IuaW5kZXgsIGZpbGw6IGNvbG9yLmhzbFN0cmluZywgcjogcHJvcHMuaGFuZGxlUmFkaXVzLCB1cmw6IHByb3BzLmhhbmRsZVN2ZywgcHJvcHM6IHByb3BzLmhhbmRsZVByb3BzLCB4OiBoYW5kbGVQb3NpdGlvbnNbY29sb3IuaW5kZXhdLngsIHk6IGhhbmRsZVBvc2l0aW9uc1tjb2xvci5pbmRleF0ueSB9KSk7IH0pLFxyXG4gICAgICAgIGgoSXJvSGFuZGxlLCB7IGlzQWN0aXZlOiB0cnVlLCBpbmRleDogYWN0aXZlQ29sb3IuaW5kZXgsIGZpbGw6IGFjdGl2ZUNvbG9yLmhzbFN0cmluZywgcjogcHJvcHMuYWN0aXZlSGFuZGxlUmFkaXVzIHx8IHByb3BzLmhhbmRsZVJhZGl1cywgdXJsOiBwcm9wcy5oYW5kbGVTdmcsIHByb3BzOiBwcm9wcy5oYW5kbGVQcm9wcywgeDogaGFuZGxlUG9zaXRpb25zW2FjdGl2ZUNvbG9yLmluZGV4XS54LCB5OiBoYW5kbGVQb3NpdGlvbnNbYWN0aXZlQ29sb3IuaW5kZXhdLnkgfSkpKTsgfSkpO1xyXG59XG5cbnZhciBIVUVfR1JBRElFTlRfQ0xPQ0tXSVNFID0gJ2NvbmljLWdyYWRpZW50KHJlZCwgeWVsbG93LCBsaW1lLCBhcXVhLCBibHVlLCBtYWdlbnRhLCByZWQpJztcclxudmFyIEhVRV9HUkFESUVOVF9BTlRJQ0xPQ0tXSVNFID0gJ2NvbmljLWdyYWRpZW50KHJlZCwgbWFnZW50YSwgYmx1ZSwgYXF1YSwgbGltZSwgeWVsbG93LCByZWQpJztcclxuZnVuY3Rpb24gSXJvV2hlZWwocHJvcHMpIHtcclxuICAgIHZhciByZWYgPSBnZXRXaGVlbERpbWVuc2lvbnMocHJvcHMpO1xuICAgIHZhciB3aWR0aCA9IHJlZi53aWR0aDtcbiAgICB2YXIgY29sb3JzID0gcHJvcHMuY29sb3JzO1xuICAgIHZhciBib3JkZXJXaWR0aCA9IHByb3BzLmJvcmRlcldpZHRoO1xyXG4gICAgdmFyIGNvbG9yUGlja2VyID0gcHJvcHMucGFyZW50O1xyXG4gICAgdmFyIGFjdGl2ZUNvbG9yID0gcHJvcHMuY29sb3I7XHJcbiAgICB2YXIgaHN2ID0gYWN0aXZlQ29sb3IuaHN2O1xyXG4gICAgdmFyIGhhbmRsZVBvc2l0aW9ucyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7IHJldHVybiBnZXRXaGVlbEhhbmRsZVBvc2l0aW9uKHByb3BzLCBjb2xvcik7IH0pO1xyXG4gICAgdmFyIGNpcmNsZVN0eWxlcyA9IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dCh4LCB5LCBpbnB1dFR5cGUpIHtcclxuICAgICAgICBpZiAoaW5wdXRUeXBlID09PSAwIC8qIFN0YXJ0ICovKSB7XHJcbiAgICAgICAgICAgIC8vIGlucHV0IGhpdGJveCBpcyBhIHNxdWFyZSwgXHJcbiAgICAgICAgICAgIC8vIHNvIHdlIHdhbnQgdG8gaWdub3JlIGFueSBpbml0aWFsIGNsaWNrcyBvdXRzaWRlIHRoZSBjaXJjdWxhciBzaGFwZSBvZiB0aGUgd2hlZWxcclxuICAgICAgICAgICAgaWYgKCFpc0lucHV0SW5zaWRlV2hlZWwocHJvcHMsIHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5pbmcgZmFsc2Ugd2lsbCBjZWFzZSBhbGwgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgaW50ZXJhY3Rpb25cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBnZXRIYW5kbGVBdFBvaW50KCkgcmV0dXJucyB0aGUgaW5kZXggZm9yIHRoZSBoYW5kbGUgaWYgdGhlIHBvaW50ICdoaXRzJyBpdCwgb3IgbnVsbCBvdGhlcndpc2VcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUhhbmRsZSA9IGdldEhhbmRsZUF0UG9pbnQocHJvcHMsIHgsIHksIGhhbmRsZVBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBoaXQgYSBoYW5kbGUsIHNldCBpdCBhcyB0aGUgYWN0aXZlIGhhbmRsZSwgYnV0IGRvbid0IHVwZGF0ZSB0aGUgY29sb3JcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUhhbmRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3JQaWNrZXIuc2V0QWN0aXZlQ29sb3IoYWN0aXZlSGFuZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGlkbid0IGhpdCBhIGhhbmRsZSwgc2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGhhbmRsZSB0byB0aGF0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3JQaWNrZXIuaW5wdXRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3IuaHN2ID0gZ2V0V2hlZWxWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbklucHV0KGlucHV0VHlwZSwgcHJvcHMuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG1vdmUgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBoYXMgc3RhcnRlZCBkcmFnZ2luZ1xyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gMSAvKiBNb3ZlICovKSB7XHJcbiAgICAgICAgICAgIGNvbG9yUGlja2VyLmlucHV0QWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWN0aXZlQ29sb3IuaHN2ID0gZ2V0V2hlZWxWYWx1ZUZyb21JbnB1dChwcm9wcywgeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCB0aGUgY29sb3IgcGlja2VyIGZpcmUgaW5wdXQ6c3RhcnQsIGlucHV0Om1vdmUgb3IgaW5wdXQ6ZW5kIGV2ZW50c1xyXG4gICAgICAgIHByb3BzLm9uSW5wdXQoaW5wdXRUeXBlLCBwcm9wcy5pZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGgoSXJvQ29tcG9uZW50V3JhcHBlciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgb25JbnB1dDogaGFuZGxlSW5wdXQgfSksIGZ1bmN0aW9uICh1aWQsIHJvb3RQcm9wcywgcm9vdFN0eWxlcykgeyByZXR1cm4gKGgoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgcm9vdFByb3BzLCB7IGNsYXNzTmFtZTogXCJJcm9XaGVlbFwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwge3dpZHRoOiBjc3NWYWx1ZSh3aWR0aCksXHJcbiAgICAgICAgICAgIGhlaWdodDogY3NzVmFsdWUod2lkdGgpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ30sXHJcbiAgICAgICAgICAgIHJvb3RTdHlsZXMpIH0pLFxyXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiSXJvV2hlZWxIdWVcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGNpcmNsZVN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHt0cmFuc2Zvcm06IChcInJvdGF0ZVooXCIgKyAocHJvcHMud2hlZWxBbmdsZSArIDkwKSArIFwiZGVnKVwiKSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHByb3BzLndoZWVsRGlyZWN0aW9uID09PSAnY2xvY2t3aXNlJyA/IEhVRV9HUkFESUVOVF9DTE9DS1dJU0UgOiBIVUVfR1JBRElFTlRfQU5USUNMT0NLV0lTRX0pIH0pLFxyXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiSXJvV2hlZWxTYXR1cmF0aW9uXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBjaXJjbGVTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICB7YmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlLCAjZmZmLCB0cmFuc3BhcmVudCknfSkgfSksXHJcbiAgICAgICAgcHJvcHMud2hlZWxMaWdodG5lc3MgJiYgKGgoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiSXJvV2hlZWxMaWdodG5lc3NcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGNpcmNsZVN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxIC0gaHN2LnYgLyAxMDB9KSB9KSksXHJcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJJcm9XaGVlbEJvcmRlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgY2lyY2xlU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgY3NzQm9yZGVyU3R5bGVzKHByb3BzKSkgfSksXHJcbiAgICAgICAgY29sb3JzLmZpbHRlcihmdW5jdGlvbiAoY29sb3IpIHsgcmV0dXJuIGNvbG9yICE9PSBhY3RpdmVDb2xvcjsgfSkubWFwKGZ1bmN0aW9uIChjb2xvcikgeyByZXR1cm4gKGgoSXJvSGFuZGxlLCB7IGlzQWN0aXZlOiBmYWxzZSwgaW5kZXg6IGNvbG9yLmluZGV4LCBmaWxsOiBjb2xvci5oc2xTdHJpbmcsIHI6IHByb3BzLmhhbmRsZVJhZGl1cywgdXJsOiBwcm9wcy5oYW5kbGVTdmcsIHByb3BzOiBwcm9wcy5oYW5kbGVQcm9wcywgeDogaGFuZGxlUG9zaXRpb25zW2NvbG9yLmluZGV4XS54LCB5OiBoYW5kbGVQb3NpdGlvbnNbY29sb3IuaW5kZXhdLnkgfSkpOyB9KSxcclxuICAgICAgICBoKElyb0hhbmRsZSwgeyBpc0FjdGl2ZTogdHJ1ZSwgaW5kZXg6IGFjdGl2ZUNvbG9yLmluZGV4LCBmaWxsOiBhY3RpdmVDb2xvci5oc2xTdHJpbmcsIHI6IHByb3BzLmFjdGl2ZUhhbmRsZVJhZGl1cyB8fCBwcm9wcy5oYW5kbGVSYWRpdXMsIHVybDogcHJvcHMuaGFuZGxlU3ZnLCBwcm9wczogcHJvcHMuaGFuZGxlUHJvcHMsIHg6IGhhbmRsZVBvc2l0aW9uc1thY3RpdmVDb2xvci5pbmRleF0ueCwgeTogaGFuZGxlUG9zaXRpb25zW2FjdGl2ZUNvbG9yLmluZGV4XS55IH0pKSk7IH0pKTtcclxufVxuXG5mdW5jdGlvbiBjcmVhdGVXaWRnZXQoV2lkZ2V0Q29tcG9uZW50KSB7XHJcbiAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IGZ1bmN0aW9uIChwYXJlbnQsIHByb3BzKSB7XHJcbiAgICAgICAgdmFyIHdpZGdldDsgLy8gd2lsbCBiZWNvbWUgYW4gaW5zdGFuY2Ugb2YgdGhlIHdpZGdldCBjb21wb25lbnQgY2xhc3NcclxuICAgICAgICB2YXIgd2lkZ2V0Um9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vIFJlbmRlciB3aWRnZXQgaW50byBhIHRlbXAgRE9NIG5vZGVcclxuICAgICAgICBJKGgoV2lkZ2V0Q29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB7cmVmOiBmdW5jdGlvbiAocmVmKSB7IHJldHVybiB3aWRnZXQgPSByZWY7IH19LFxyXG4gICAgICAgICAgICBwcm9wcykpLCB3aWRnZXRSb290KTtcclxuICAgICAgICBmdW5jdGlvbiBtb3VudFdpZGdldCgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcmVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBwYXJlbnQgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aWRnZXQuYmFzZSk7XHJcbiAgICAgICAgICAgIHdpZGdldC5vbk1vdW50KGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE1vdW50IGl0IGludG8gdGhlIERPTSB3aGVuIHRoZSBwYWdlIGRvY3VtZW50IGlzIHJlYWR5XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xyXG4gICAgICAgICAgICBtb3VudFdpZGdldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1vdW50V2lkZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpZGdldDtcclxuICAgIH07XHJcbiAgICAvLyBBbGxvdyB0aGUgd2lkZ2V0IGZhY3RvcnkgdG8gaW5oZXJpdCBjb21wb25lbnQgcHJvdG90eXBlICsgc3RhdGljIGNsYXNzIG1ldGhvZHNcclxuICAgIC8vIFRoaXMgbWFrZXMgaXQgZWFzaWVyIGZvciBwbHVnaW4gYXV0aG9ycyB0byBleHRlbmQgdGhlIGJhc2Ugd2lkZ2V0IGNvbXBvbmVudFxyXG4gICAgd2lkZ2V0RmFjdG9yeS5wcm90b3R5cGUgPSBXaWRnZXRDb21wb25lbnQucHJvdG90eXBlO1xyXG4gICAgT2JqZWN0LmFzc2lnbih3aWRnZXRGYWN0b3J5LCBXaWRnZXRDb21wb25lbnQpO1xyXG4gICAgLy8gQWRkIHJlZmVyZW5jZSB0byBiYXNlIGNvbXBvbmVudCB0b29cclxuICAgIHdpZGdldEZhY3RvcnkuX19jb21wb25lbnQgPSBXaWRnZXRDb21wb25lbnQ7XHJcbiAgICByZXR1cm4gd2lkZ2V0RmFjdG9yeTtcclxufVxuXG52YXIgSXJvQ29sb3JQaWNrZXIgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBJcm9Db2xvclBpY2tlcihwcm9wcykge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxyXG4gICAgICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKTtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5wdXRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcclxuICAgICAgICB2YXIgY29sb3JzID0gcHJvcHMuY29sb3JzLmxlbmd0aCA+IDAgPyBwcm9wcy5jb2xvcnMgOiBbcHJvcHMuY29sb3JdO1xyXG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvclZhbHVlKSB7IHJldHVybiB0aGlzJDEuYWRkQ29sb3IoY29sb3JWYWx1ZSk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQ29sb3IoMCk7XHJcbiAgICAgICAgLy8gUGFzcyBhbGwgdGhlIHByb3BzIGludG8gdGhlIGNvbXBvbmVudCdzIHN0YXRlLFxyXG4gICAgICAgIC8vIEV4Y2VwdCB3ZSB3YW50IHRvIGFkZCB0aGUgY29sb3Igb2JqZWN0IGFuZCBtYWtlIHN1cmUgdGhhdCByZWZzIGFyZW4ndCBwYXNzZWQgZG93biB0byBjaGlsZHJlblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyxcclxuICAgICAgICAgICAge2NvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICBjb2xvcnM6IHRoaXMuY29sb3JzLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IHByb3BzLmxheW91dH0pO1xyXG4gICAgfVxuXG4gICAgaWYgKCBDb21wb25lbnQgKSBJcm9Db2xvclBpY2tlci5fX3Byb3RvX18gPSBDb21wb25lbnQ7XG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29tcG9uZW50ICYmIENvbXBvbmVudC5wcm90b3R5cGUgKTtcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJcm9Db2xvclBpY2tlcjtcclxuICAgIC8vIFBsdWJpYyBtdWx0aWNvbG9yIEFQSVxyXG4gICAgLyoqXHJcbiAgICAqIEBkZXNjIEFkZCBhIGNvbG9yIHRvIHRoZSBjb2xvciBwaWNrZXJcclxuICAgICogQHBhcmFtIGNvbG9yIG5ldyBjb2xvciB0byBhZGRcclxuICAgICogQHBhcmFtIGluZGV4IG9wdGlvbmFsIGNvbG9yIGluZGV4XHJcbiAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLmFkZENvbG9yID0gZnVuY3Rpb24gYWRkQ29sb3IgKGNvbG9yLCBpbmRleCkge1xuICAgICAgICBpZiAoIGluZGV4ID09PSB2b2lkIDAgKSBpbmRleCA9IHRoaXMuY29sb3JzLmxlbmd0aDtcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpcm8uQ29sb3JcclxuICAgICAgICAvLyBBbHNvIGJpbmQgaXQgdG8gb25Db2xvckNoYW5nZSwgc28gd2hlbmV2ZXIgdGhlIGNvbG9yIGNoYW5nZXMgaXQgdXBkYXRlcyB0aGUgY29sb3IgcGlja2VyXHJcbiAgICAgICAgdmFyIG5ld0NvbG9yID0gbmV3IElyb0NvbG9yKGNvbG9yLCB0aGlzLm9uQ29sb3JDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gSW5zZXJ0IGNvbG9yIEAgdGhlIGdpdmVuIGluZGV4XHJcbiAgICAgICAgdGhpcy5jb2xvcnMuc3BsaWNlKGluZGV4LCAwLCBuZXdDb2xvcik7XHJcbiAgICAgICAgLy8gUmVpbmRleCBjb2xvcnNcclxuICAgICAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvciwgaW5kZXgpIHsgcmV0dXJuIGNvbG9yLmluZGV4ID0gaW5kZXg7IH0pO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwaWNrZXIgc3RhdGUgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yczogdGhpcy5jb2xvcnMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZpcmUgY29sb3IgaW5pdCBldmVudFxyXG4gICAgICAgIHRoaXMuZGVmZXJyZWRFbWl0KCdjb2xvcjppbml0JywgbmV3Q29sb3IpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgUmVtb3ZlIGEgY29sb3IgZnJvbSB0aGUgY29sb3IgcGlja2VyXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggY29sb3IgaW5kZXhcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLnJlbW92ZUNvbG9yID0gZnVuY3Rpb24gcmVtb3ZlQ29sb3IgKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5jb2xvcnMuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICAvLyBEZXN0cm95IHRoZSBjb2xvciBvYmplY3QgLS0gdGhpcyB1bmJpbmRzIGl0IGZyb20gdGhlIGNvbG9yIHBpY2tlclxyXG4gICAgICAgIGNvbG9yLnVuYmluZCgpO1xyXG4gICAgICAgIC8vIFJlaW5kZXggY29sb3JzXHJcbiAgICAgICAgdGhpcy5jb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IsIGluZGV4KSB7IHJldHVybiBjb2xvci5pbmRleCA9IGluZGV4OyB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgcGlja2VyIHN0YXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IHRoaXMuY29sb3JzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgYWN0aXZlIGNvbG9yIHdhcyByZW1vdmVkLCBkZWZhdWx0IGFjdGl2ZSBjb2xvciB0byAwXHJcbiAgICAgICAgaWYgKGNvbG9yLmluZGV4ID09PSB0aGlzLmNvbG9yLmluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQ29sb3IoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZpcmUgY29sb3IgcmVtb3ZlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb2xvcjpyZW1vdmUnLCBjb2xvcik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBTZXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgY29sb3JcclxuICAgICAqIEBwYXJhbSBpbmRleCBjb2xvciBpbmRleFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuc2V0QWN0aXZlQ29sb3IgPSBmdW5jdGlvbiBzZXRBY3RpdmVDb2xvciAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvcnNbaW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogdGhpcy5jb2xvciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmlyZSBjb2xvciBzd2l0Y2ggZXZlbnRcclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbG9yOnNldEFjdGl2ZScsIHRoaXMuY29sb3IpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgUmVwbGFjZSBhbGwgb2YgdGhlIGN1cnJlbnQgY29sb3JQaWNrZXIgY29sb3JzXHJcbiAgICAgKiBAcGFyYW0gbmV3Q29sb3JWYWx1ZXMgbGlzdCBvZiBuZXcgY29sb3JzIHRvIGFkZFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuc2V0Q29sb3JzID0gZnVuY3Rpb24gc2V0Q29sb3JzIChuZXdDb2xvclZhbHVlcywgYWN0aXZlQ29sb3JJbmRleCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgaWYgKCBhY3RpdmVDb2xvckluZGV4ID09PSB2b2lkIDAgKSBhY3RpdmVDb2xvckluZGV4ID0gMDtcblxyXG4gICAgICAgIC8vIFVuYmluZCBjb2xvciBldmVudHNcclxuICAgICAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikgeyByZXR1cm4gY29sb3IudW5iaW5kKCk7IH0pO1xyXG4gICAgICAgIC8vIERlc3Ryb3kgb2xkIGNvbG9yc1xyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcbiAgICAgICAgLy8gQWRkIG5ldyBjb2xvcnNcclxuICAgICAgICBuZXdDb2xvclZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvclZhbHVlKSB7IHJldHVybiB0aGlzJDEuYWRkQ29sb3IoY29sb3JWYWx1ZSk7IH0pO1xyXG4gICAgICAgIC8vIFJlc2V0IGFjdGl2ZSBjb2xvclxyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQ29sb3IoYWN0aXZlQ29sb3JJbmRleCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjb2xvcjpzZXRBbGwnLCB0aGlzLmNvbG9ycyk7XHJcbiAgICB9O1xyXG4gICAgLy8gUHVibGljIENvbG9yUGlja2VyIGV2ZW50cyBBUElcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgU2V0IGEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFuIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRMaXN0IGV2ZW50KHMpIHRvIGxpc3RlbiB0b1xyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIGZpcmVkXHJcbiAgICAgKi9cclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uIChldmVudExpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG4gICAgICAgIC8vIGV2ZW50TGlzdCBjYW4gYmUgYW4gZXZlbnRUeXBlIHN0cmluZyBvciBhbiBhcnJheSBvZiBldmVudFR5cGUgc3RyaW5nc1xyXG4gICAgICAgICghQXJyYXkuaXNBcnJheShldmVudExpc3QpID8gW2V2ZW50TGlzdF0gOiBldmVudExpc3QpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAvLyBBZGQgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICAgICAgKGV2ZW50c1tldmVudFR5cGVdIHx8IChldmVudHNbZXZlbnRUeXBlXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIC8vIENhbGwgZGVmZXJyZWQgZXZlbnRzXHJcbiAgICAgICAgICAgIC8vIFRoZXNlIGFyZSBldmVudHMgdGhhdCBjYW4gYmUgc3RvcmVkIHVudGlsIGEgbGlzdGVuZXIgZm9yIHRoZW0gaXMgYWRkZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMkMS5kZWZlcnJlZEV2ZW50c1tldmVudFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWZmZXJlZCBldmVudHMgc3RvcmUgYW4gYXJyYXkgb2YgYXJndW1lbnRzIGZyb20gd2hlbiB0aGUgZXZlbnQgd2FzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgdGhpcyQxLmRlZmVycmVkRXZlbnRzW2V2ZW50VHlwZV0uZm9yRWFjaChmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBkZWZlcnJlZCBldmVudHNcclxuICAgICAgICAgICAgICAgIHRoaXMkMS5kZWZlcnJlZEV2ZW50c1tldmVudFR5cGVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFJlbW92ZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhbiBldmVudCBhZGRlZCB3aXRoIG9uKClcclxuICAgICAqIEBwYXJhbSBldmVudExpc3QgLSBldmVudChzKSB0byBsaXN0ZW4gdG9cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmIChldmVudExpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXHJcbiAgICAgICAgKCFBcnJheS5pc0FycmF5KGV2ZW50TGlzdCkgPyBbZXZlbnRMaXN0XSA6IGV2ZW50TGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxsYmFja0xpc3QgPSB0aGlzJDEuZXZlbnRzW2V2ZW50VHlwZV07XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdEhvb2soJ2V2ZW50Om9mZicsIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tMaXN0KVxyXG4gICAgICAgICAgICAgICAgeyBjYWxsYmFja0xpc3Quc3BsaWNlKGNhbGxiYWNrTGlzdC5pbmRleE9mKGNhbGxiYWNrKSwgMSk7IH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIEVtaXQgYW4gZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgZXZlbnQgdG8gZW1pdFxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQgKGV2ZW50VHlwZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxyXG4gICAgICAgIHZhciBhY3RpdmVFdmVudHMgPSB0aGlzLmFjdGl2ZUV2ZW50cztcclxuICAgICAgICB2YXIgaXNFdmVudEFjdGl2ZSA9IGFjdGl2ZUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpID8gYWN0aXZlRXZlbnRzW2V2ZW50VHlwZV0gOiBmYWxzZTtcclxuICAgICAgICAvLyBQcmV2ZW50IGV2ZW50IGNhbGxiYWNrcyBmcm9tIGZpcmluZyBpZiB0aGUgZXZlbnQgaXMgYWxyZWFkeSBhY3RpdmVcclxuICAgICAgICAvLyBUaGlzIHN0b3BzIGluZmluaXRlIGxvb3BzIGlmIHNvbWV0aGluZyBpbiBhbiBldmVudCBjYWxsYmFjayBjYXVzZXMgdGhlIHNhbWUgZXZlbnQgdG8gYmUgZmlyZWQgYWdhaW5cclxuICAgICAgICAvLyAoZS5nLiBzZXR0aW5nIHRoZSBjb2xvciBpbnNpZGUgYSBjb2xvcjpjaGFuZ2UgY2FsbGJhY2spXHJcbiAgICAgICAgaWYgKCFpc0V2ZW50QWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUV2ZW50c1tldmVudFR5cGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrTGlzdCA9IHRoaXMuZXZlbnRzW2V2ZW50VHlwZV0gfHwgW107XHJcbiAgICAgICAgICAgIGNhbGxiYWNrTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4uYXBwbHkodGhpcyQxLCBhcmdzKTsgfSk7XHJcbiAgICAgICAgICAgIGFjdGl2ZUV2ZW50c1tldmVudFR5cGVdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgRW1pdCBhbiBldmVudCBub3csIG9yIHNhdmUgaXQgZm9yIHdoZW4gdGhlIHJlbGV2ZW50IGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGVtaXRcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLmRlZmVycmVkRW1pdCA9IGZ1bmN0aW9uIGRlZmVycmVkRW1pdCAoZXZlbnRUeXBlKSB7XG4gICAgICAgIHZhciByZWY7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcclxuICAgICAgICB2YXIgZGVmZXJyZWRFdmVudHMgPSB0aGlzLmRlZmVycmVkRXZlbnRzO1xyXG4gICAgICAgIChyZWYgPSB0aGlzKS5lbWl0LmFwcGx5KHJlZiwgWyBldmVudFR5cGUgXS5jb25jYXQoIGFyZ3MgKSk7XHJcbiAgICAgICAgKGRlZmVycmVkRXZlbnRzW2V2ZW50VHlwZV0gfHwgKGRlZmVycmVkRXZlbnRzW2V2ZW50VHlwZV0gPSBbXSkpLnB1c2goYXJncyk7XHJcbiAgICB9O1xyXG4gICAgLy8gUHVibGljIHV0aWxpdHkgbWV0aG9kc1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zIChuZXdPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdPcHRpb25zKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIFJlc2l6ZSB0aGUgY29sb3IgcGlja2VyXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggLSBuZXcgd2lkdGhcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uIHJlc2l6ZSAod2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoeyB3aWR0aDogd2lkdGggfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSZXNldCB0aGUgY29sb3IgcGlja2VyIHRvIHRoZSBpbml0aWFsIGNvbG9yIHByb3ZpZGVkIGluIHRoZSBjb2xvciBwaWNrZXIgb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHsgcmV0dXJuIGNvbG9yLnJlc2V0KCk7IH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcnM6IHRoaXMuY29sb3JzIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgQ2FsbGVkIGJ5IHRoZSBjcmVhdGVXaWRnZXQgd3JhcHBlciB3aGVuIHRoZSBlbGVtZW50IGlzIG1vdW50ZWQgaW50byB0aGUgcGFnZVxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciAtIHRoZSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhpcyBDb2xvclBpY2tlciBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBJcm9Db2xvclBpY2tlci5wcm90b3R5cGUub25Nb3VudCA9IGZ1bmN0aW9uIG9uTW91bnQgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuZWwgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5kZWZlcnJlZEVtaXQoJ21vdW50JywgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLy8gSW50ZXJuYWwgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSZWFjdCB0byBhIGNvbG9yIHVwZGF0ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yIC0gY3VycmVudCBjb2xvclxyXG4gICAgICogQHBhcmFtIGNoYW5nZXMgLSBzaG93cyB3aGljaCBoLHMsdixhIGNvbG9yIGNoYW5uZWxzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLm9uQ29sb3JDaGFuZ2UgPSBmdW5jdGlvbiBvbkNvbG9yQ2hhbmdlIChjb2xvciwgY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xvcjogdGhpcy5jb2xvciB9KTtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dEFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0QWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnaW5wdXQ6Y2hhbmdlJywgY29sb3IsIGNoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2NvbG9yOmNoYW5nZScsIGNvbG9yLCBjaGFuZ2VzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIEhhbmRsZSBpbnB1dCBmcm9tIGEgVUkgY29udHJvbCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gdHlwZSAtIGV2ZW50IHR5cGVcclxuICAgICAqL1xyXG4gICAgSXJvQ29sb3JQaWNrZXIucHJvdG90eXBlLmVtaXRJbnB1dEV2ZW50ID0gZnVuY3Rpb24gZW1pdElucHV0RXZlbnQgKHR5cGUsIG9yaWdpbklkKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDAgLyogU3RhcnQgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnB1dDpzdGFydCcsIHRoaXMuY29sb3IsIG9yaWdpbklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMSAvKiBNb3ZlICovKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnaW5wdXQ6bW92ZScsIHRoaXMuY29sb3IsIG9yaWdpbklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMiAvKiBFbmQgKi8pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnB1dDplbmQnLCB0aGlzLmNvbG9yLCBvcmlnaW5JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIElyb0NvbG9yUGlja2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxyXG4gICAgICAgIHZhciBsYXlvdXQgPSBzdGF0ZS5sYXlvdXQ7XHJcbiAgICAgICAgLy8gdXNlIGxheW91dCBzaG9ydGhhbmRzXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGxheW91dCkpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBzb21lP1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29tcG9uZW50OiBJcm9XaGVlbCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvbXBvbmVudDogSXJvU2xpZGVyIH0gXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhZGQgdHJhbnNwYXJlbmN5IHNsaWRlciB0byB0aGUgbGF5b3V0XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS50cmFuc3BhcmVuY3kpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IElyb1NsaWRlcixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlclR5cGU6ICdhbHBoYSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJJcm9Db2xvclBpY2tlclwiLCBpZDogc3RhdGUuaWQsIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5kaXNwbGF5XHJcbiAgICAgICAgICAgIH0gfSwgbGF5b3V0Lm1hcChmdW5jdGlvbiAocmVmLCBjb21wb25lbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBVaUNvbXBvbmVudCA9IHJlZi5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSByZWYub3B0aW9ucztcblxuICAgICAgICAgICAgICAgIHJldHVybiAoaChVaUNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG9wdGlvbnMsIHsgcmVmOiB1bmRlZmluZWQsIG9uSW5wdXQ6IHRoaXMkMS5lbWl0SW5wdXRFdmVudC5iaW5kKHRoaXMkMSksIHBhcmVudDogdGhpcyQxLCBpbmRleDogY29tcG9uZW50SW5kZXggfSkpKTtcbiAgICAgICAgfSkpKTtcclxuICAgIH07XG5cbiAgICByZXR1cm4gSXJvQ29sb3JQaWNrZXI7XG59KG0pKTtcclxuSXJvQ29sb3JQaWNrZXIuZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgaXJvQ29sb3JQaWNrZXJPcHRpb25EZWZhdWx0cyxcclxuICAgIHtjb2xvcnM6IFtdLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGlkOiBudWxsLFxyXG4gICAgbGF5b3V0OiAnZGVmYXVsdCcsXHJcbiAgICBtYXJnaW46IG51bGx9KTtcclxudmFyIElyb0NvbG9yUGlja2VyV2lkZ2V0ID0gY3JlYXRlV2lkZ2V0KElyb0NvbG9yUGlja2VyKTtcblxudmFyIGlybztcclxuKGZ1bmN0aW9uIChpcm8pIHtcclxuICAgIGlyby52ZXJzaW9uID0gXCI1LjUuMlwiOyAvLyByZXBsYWNlZCBieSBAcm9sbHVwL3BsdWdpbi1yZXBsYWNlOyBzZWUgcm9sbHVwLmNvbmZpZy5qc1xyXG4gICAgaXJvLkNvbG9yID0gSXJvQ29sb3I7XHJcbiAgICBpcm8uQ29sb3JQaWNrZXIgPSBJcm9Db2xvclBpY2tlcldpZGdldDtcclxuICAgIHZhciB1aTtcclxuICAgIChmdW5jdGlvbiAodWkpIHtcclxuICAgICAgICB1aS5oID0gaDtcclxuICAgICAgICB1aS5Db21wb25lbnRCYXNlID0gSXJvQ29tcG9uZW50V3JhcHBlcjtcclxuICAgICAgICB1aS5IYW5kbGUgPSBJcm9IYW5kbGU7XHJcbiAgICAgICAgdWkuU2xpZGVyID0gSXJvU2xpZGVyO1xyXG4gICAgICAgIHVpLldoZWVsID0gSXJvV2hlZWw7XHJcbiAgICAgICAgdWkuQm94ID0gSXJvQm94O1xyXG4gICAgfSkodWkgPSBpcm8udWkgfHwgKGlyby51aSA9IHt9KSk7XHJcbn0pKGlybyB8fCAoaXJvID0ge30pKTtcclxudmFyIGlybyQxID0gaXJvO1xuXG5leHBvcnQgZGVmYXVsdCBpcm8kMTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICAgLS1yb3dzOiAyMDA7XFxuICAgIC0tY29sczogMTAwO1xcblxcbiAgICAtLXByaW1hcnktY29sb3I6IHJnYigyMTQsIDE0MiwgNyk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xcblxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLS1tZW51LWJhY2tncm91bmQ6IHJnYmEoMTc2LCAxNzYsIDE3NiwgMC44NTcpO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogcmdiKDEyMywgMTIzLCAxMjMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiBpbmhlcml0O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KHZhcigtLXJvd3MpLCAxZnIpIC8gcmVwZWF0KHZhcigtLWNvbHMpLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLmFsaXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiBjYWxjKDQwdmggKyA2MHB4KTtcXG4gICAgcmlnaHQ6IDF2dztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTcwcHggMTcwcHggY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5jYW5jZWwsXFxuLmNvbG9yUGlja2VyVUkgLnN1Ym1pdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm90dG9tOiA0OHB4O1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSAuY2FuY2VsIHtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkgLnN1Ym1pdCB7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSAuY2FuY2VsOmFjdGl2ZSxcXG4uY29sb3JQaWNrZXJVSSAuc3VibWl0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4uc3R5bGVzTWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiBjYWxjKDQwdmggKyA2MHB4KTtcXG4gICAgcmlnaHQ6IDM3MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uc3R5bGVNZW51IHtcXG4gICAgYm90dG9tOiBjYWxjKDQwdmggLSAyMHB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG5leHQgdHdvIGxpbmVzIGNlbnRlciAqL1xcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gOTVweCk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5zZWxlY3RlZCBzdmcge1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpKTtcXG5cXG59XFxuXFxuLnN0eWxlTWVudS5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQ1MHB4KTtcXG59XFxuXFxuLnN0eWxlTWVudSBkaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLm9wZW5TdHlsZU1lbnUsXFxuLnN0eWxlTWVudUljb24sXFxuLnNhdmVTdHlsZSB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5wcmltYXJ5Q29sb3IsXFxuLnNlY29uZGFyeUNvbG9yLFxcbi5iYWNrZ3JvdW5kQ29sb3IsXFxuLmJvcmRlclJhZGl1c0ljb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ub3BlblN0eWxlTWVudTphY3RpdmUsXFxuLnByaW1hcnlDb2xvcjphY3RpdmUsXFxuLnNlY29uZGFyeUNvbG9yOmFjdGl2ZSxcXG4uYmFja2dyb3VuZENvbG9yOmFjdGl2ZSxcXG4uc2F2ZVN0eWxlOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4uc3R5bGVNZW51IC5zYXZlU3R5bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uc3R5bGVNZW51IC5zdHlsZU1lbnVJY29uLFxcbi5zdHlsZU1lbnUgLmJhY2tncm91bmRDb2xvcixcXG4uc3R5bGVNZW51IC5ib3JkZXJSYWRpdXMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XFxufVxcblxcbi5wcmltYXJ5Q29sb3Igc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zZWNvbmRhcnlDb2xvciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uYmFja2dyb3VuZENvbG9yIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ucmVzaXplTWVudSB7XFxuICAgIGJvdHRvbTogY2FsYyg0MHZoIC0gMTAwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA5NXB4KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUub3BlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NTBweCk7XFxufVxcblxcbi5yZXNpemVNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucm93SWNvbixcXG4uY29sSWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5vcGVuUmVzaXplTWVudSxcXG4ucmVzaXplTWVudUljb24sXFxuLmxvY2tlZCB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5yZXNpemVNZW51IC5sb2NrZWQge1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuXFxuLyogbWFrZSBwbGF5L3BhdXNlIGJ1dHRvbiBcXFwicG9wXFxcIiB1cG9uIGNsaWNraW5nICovXFxuLm9wZW5SZXNpemVNZW51OmFjdGl2ZSxcXG4ubG9ja2VkOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDF2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG5cXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDEyMywgMTIzLCAxMjMpO1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ucGxheSxcXG4ucGF1c2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWJhY2tNZW51IC5zcGVlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5zcGVlZCxcXG4ucmVmcmVzaCB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbmRpdiBzdmd7XFxuICAgIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyogbWFrZSBwbGF5L3BhdXNlIGJ1dHRvbiBcXFwicG9wXFxcIiB1cG9uIGNsaWNraW5nICovXFxuLnBsYXk6YWN0aXZlLFxcbi5wYXVzZTphY3RpdmUsXFxuLnJlZnJlc2g6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogNHB4O1xcbn1cXG5cXG4ucGxheWJhY2tTcGVlZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuLmNvbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdyYW5nZSddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpOyAgXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhbmdlJ106Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyBcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uZ3JheWVkT3V0IHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC43KTtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztJQUVoQixXQUFXO0lBQ1gsV0FBVzs7SUFFWCxpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLHNDQUFzQzs7SUFFdEMsb0JBQW9COztJQUVwQiw2Q0FBNkM7SUFDN0Msa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0VBQWtFO0lBQ2xFLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixV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QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICAtLXJvd3M6IDIwMDtcXG4gICAgLS1jb2xzOiAxMDA7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogcmdiKDIxNCwgMTQyLCA3KTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAxNDksIDE0OSk7XFxuXFxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAtLW1lbnUtYmFja2dyb3VuZDogcmdiYSgxNzYsIDE3NiwgMTc2LCAwLjg1Nyk7XFxuICAgIC0tc2hhZG93LWNvbG9yOiByZ2IoMTIzLCAxMjMsIDEyMyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IGluaGVyaXQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQodmFyKC0tcm93cyksIDFmcikgLyByZXBlYXQodmFyKC0tY29scyksIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uYWxpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoNDB2aCArIDYwcHgpO1xcbiAgICByaWdodDogMXZ3O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNzBweCAxNzBweCBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmNvbG9yUGlja2VyVUkgLmNhbmNlbCxcXG4uY29sb3JQaWNrZXJVSSAuc3VibWl0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3R0b206IDQ4cHg7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5jYW5jZWwge1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY29sb3JQaWNrZXJVSSAuc3VibWl0IHtcXG4gICAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jb2xvclBpY2tlclVJIC5jYW5jZWw6YWN0aXZlLFxcbi5jb2xvclBpY2tlclVJIC5zdWJtaXQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5zdHlsZXNNZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoNDB2aCArIDYwcHgpO1xcbiAgICByaWdodDogMzcwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5zdHlsZU1lbnUge1xcbiAgICBib3R0b206IGNhbGMoNDB2aCAtIDIwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbmV4dCB0d28gbGluZXMgY2VudGVyICovXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA5NXB4KTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLnNlbGVjdGVkIHN2ZyB7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcikpO1xcblxcbn1cXG5cXG4uc3R5bGVNZW51Lm9wZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUwcHgpO1xcbn1cXG5cXG4uc3R5bGVNZW51IGRpdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4ub3BlblN0eWxlTWVudSxcXG4uc3R5bGVNZW51SWNvbixcXG4uc2F2ZVN0eWxlIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnByaW1hcnlDb2xvcixcXG4uc2Vjb25kYXJ5Q29sb3IsXFxuLmJhY2tncm91bmRDb2xvcixcXG4uYm9yZGVyUmFkaXVzSWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5vcGVuU3R5bGVNZW51OmFjdGl2ZSxcXG4ucHJpbWFyeUNvbG9yOmFjdGl2ZSxcXG4uc2Vjb25kYXJ5Q29sb3I6YWN0aXZlLFxcbi5iYWNrZ3JvdW5kQ29sb3I6YWN0aXZlLFxcbi5zYXZlU3R5bGU6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5zdHlsZU1lbnUgLnNhdmVTdHlsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbi5zdHlsZU1lbnUgLnN0eWxlTWVudUljb24sXFxuLnN0eWxlTWVudSAuYmFja2dyb3VuZENvbG9yLFxcbi5zdHlsZU1lbnUgLmJvcmRlclJhZGl1cyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcXG59XFxuXFxuLnByaW1hcnlDb2xvciBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlY29uZGFyeUNvbG9yIHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5iYWNrZ3JvdW5kQ29sb3Igc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5yZXNpemVNZW51IHtcXG4gICAgYm90dG9tOiBjYWxjKDQwdmggLSAxMDBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBuZXh0IHR3byBsaW5lcyBjZW50ZXIgKi9cXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDk1cHgpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4ucmVzaXplTWVudS5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQ1MHB4KTtcXG59XFxuXFxuLnJlc2l6ZU1lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5yb3dJY29uLFxcbi5jb2xJY29uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLm9wZW5SZXNpemVNZW51LFxcbi5yZXNpemVNZW51SWNvbixcXG4ubG9ja2VkIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnJlc2l6ZU1lbnUgLmxvY2tlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG5cXG4vKiBtYWtlIHBsYXkvcGF1c2UgYnV0dG9uIFxcXCJwb3BcXFwiIHVwb24gY2xpY2tpbmcgKi9cXG4ub3BlblJlc2l6ZU1lbnU6YWN0aXZlLFxcbi5sb2NrZWQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbi5wbGF5YmFja01lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMXZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG5leHQgdHdvIGxpbmVzIGNlbnRlciAqL1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2IoMTIzLCAxMjMsIDEyMyk7XFxufVxcblxcbi5wbGF5YmFja01lbnUgZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5wbGF5LFxcbi5wYXVzZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wbGF5YmFja01lbnUgLnNwZWVkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuLnNwZWVkLFxcbi5yZWZyZXNoIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuZGl2IHN2Z3tcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBtYWtlIHBsYXkvcGF1c2UgYnV0dG9uIFxcXCJwb3BcXFwiIHVwb24gY2xpY2tpbmcgKi9cXG4ucGxheTphY3RpdmUsXFxuLnBhdXNlOmFjdGl2ZSxcXG4ucmVmcmVzaDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA0cHg7XFxufVxcblxcbi5wbGF5YmFja1NwZWVkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uY29scyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhbmdlJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7ICBcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFuZ2UnXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IFxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5ncmF5ZWRPdXQge1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjcpO1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihyb3dzLCBjb2xzKSB7XG4gICAgdGhpcy5ib29sQm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgY29uc3QgdGVtcE5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sczsgY29sKyspIHtcbiAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRoaXMuZGV0ZXJtaW5lSW5pdExpZmUoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvb2xCb2FyZC5wdXNoKHRlbXBOZXdBcnIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbEJvYXJkLmxlbmd0aDtcbiAgfVxuXG4gIGdldENvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbEJvYXJkWzBdLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xCb2FyZDtcbiAgfVxuXG4gIHN0ZXBGb3J3YXJkKCkge1xuICAgIGNvbnN0IG5laWdib3JBcnIgPSB0aGlzLmdldE5laWdoYm9yQXJyKCk7XG4gICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgZm9yIChsZXQgY2hlY2tSb3cgPSAwOyBjaGVja1JvdyA8IHRoaXMuYm9vbEJvYXJkLmxlbmd0aDsgY2hlY2tSb3crKykge1xuICAgICAgY29uc3QgdGVtcE5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgY2hlY2tDb2wgPSAwOyBjaGVja0NvbCA8IHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XS5sZW5ndGg7IGNoZWNrQ29sKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XVtjaGVja0NvbF0pIHsgLy8gaWYgdGhlIGNlbGwgaXMgY3VycmVudGx5IGFsaXZlO1xuICAgICAgICAgIGlmIChuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMiB8fCBuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMykge1xuICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRydWUpOyAvLyBhbGl2ZSB3aXRoIHR3byBvciAzIG5laWdoYm9ycywgc3Vydml2ZXNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKGZhbHNlKTsgLy8gYWxpdmUgd2l0aCB0b28gbWFueS9mZXcgbmVpZ2hib3JzLCBkaWVzXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgY2VsbCBpcyBjdXJyZW50bHkgZGVhZFxuICAgICAgICAgIGlmIChuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMykge1xuICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRydWUpOyAvLyBkZWFkIHdpdGggdGhyZWUgbmVpZ2hib3JzLCBjb21lcyBhbGl2ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2goZmFsc2UpOyAvLyBkZWFkIHdpdGggITMgbmVpZ2hib3JzLCBzdGF5cyBkZWFkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZXdBcnIucHVzaCh0ZW1wTmV3QXJyKTtcbiAgICB9XG4gICAgdGhpcy5ib29sQm9hcmQgPSBuZXdBcnI7XG4gIH1cblxuICBnZXROZWlnaGJvckFycigpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvb2xCb2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBjb25zdCB0ZW1wTmV3QXJyID0gW107XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmJvb2xCb2FyZFtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRoaXMuZ2V0TmVpZ2hib3JzKHJvdywgY29sKSk7XG4gICAgICB9XG4gICAgICByZXQucHVzaCh0ZW1wTmV3QXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldE5laWdoYm9ycyhyb3csIGNvbCkge1xuICAgIGxldCByZXQgPSAwO1xuICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgOXg5IHN1cnJvdW5kaW5nIHRoZSBjZWxsIHBhc3NlZCBpblxuICAgIGZvciAobGV0IGNoZWNrUm93ID0gcm93IC0gMTsgY2hlY2tSb3cgPCByb3cgKyAyOyBjaGVja1JvdysrKSB7XG4gICAgICBmb3IgKGxldCBjaGVja0NvbCA9IGNvbCAtIDE7IGNoZWNrQ29sIDwgY29sICsgMjsgY2hlY2tDb2wrKykge1xuICAgICAgICAvLyBpcyBpbiBib3VuZHNcbiAgICAgICAgaWYgKGNoZWNrUm93IDwgdGhpcy5ib29sQm9hcmQubGVuZ3RoICYmIGNoZWNrUm93ID49IDBcbiAgICAgICAgICAgICAgICAgICAgJiYgY2hlY2tDb2wgPCB0aGlzLmJvb2xCb2FyZFtjaGVja1Jvd10ubGVuZ3RoICYmIGNoZWNrQ29sID49IDApIHtcbiAgICAgICAgICAvLyBpc24ndCB0aGUgY2VsbCBpdHNlbGZcbiAgICAgICAgICBpZiAoIShjaGVja1JvdyA9PSByb3cgJiYgY2hlY2tDb2wgPT0gY29sKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9vbEJvYXJkW2NoZWNrUm93XVtjaGVja0NvbF0pIHtcbiAgICAgICAgICAgICAgcmV0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBkZXRlcm1pbmVJbml0TGlmZSgpIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICBjb25zdHJ1Y3RvcihwcmltYXJ5LCBzZWNvbmRhcnksIGJhY2tncm91bmQsIHJhZGl1cykge1xuICAgIHRoaXMucHJpbWFyeSA9IHByaW1hcnk7XG4gICAgdGhpcy5zZWNvbmRhcnkgPSBzZWNvbmRhcnk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgfVxuXG4gIGdldFByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWFyeTtcbiAgfVxuXG4gIGdldFNlY29uZGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWNvbmRhcnk7XG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2tncm91bmQ7XG4gIH1cblxuICBnZXRSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICB9XG59XG4iLCJpbXBvcnQgU3R5bGUgZnJvbSAnLi9TdHlsZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlU2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBbXTtcbiAgfVxuXG4gIGFkZFN0eWxlKHN0eWxlKSB7XG4gICAgdGhpcy5zdHlsZXNbdGhpcy5zdHlsZXMubGVuZ3RoXSA9IHN0eWxlO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0eWxlcztcbiAgfVxufVxuIiwiaW1wb3J0IGlybyBmcm9tICdAamFhbWVzL2lybyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qcyc7XG4vLyBpbXBvcnRlZCBjb2xvciBwaWNrZXJcbmltcG9ydCBTdHlsZVNldCBmcm9tICcuL1N0eWxlU2V0LmpzJztcbmltcG9ydCBTdHlsZSBmcm9tICcuL1N0eWxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgYm9hcmQgPSBuZXcgQm9hcmQoNTAsIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAod2luZG93LmlubmVySGVpZ2h0IC8gNTApKSk7XG5cbiAgc3RhdGljIHJvd0NvbExvY2sgPSB0cnVlO1xuXG4gIHN0YXRpYyBwbGF5YmFja1NwZWVkID0gKDEwNTAgLSA0NzUpO1xuXG4gIHN0YXRpYyB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICB0aGlzLmJvYXJkLnN0ZXBGb3J3YXJkKCk7XG4gICAgVUkuZHJhd0JvYXJkKCk7XG4gIH0sIHRoaXMucGxheWJhY2tTcGVlZCk7XG5cbiAgc3RhdGljIHBsYXlpbmcgPSB0cnVlO1xuXG4gIHN0YXRpYyBjb2xvclBpY2tlciA9IG5ldyBpcm8uQ29sb3JQaWNrZXIoJyNwaWNrZXInKTtcblxuICBzdGF0aWMgY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPSAnbm9uZSc7XG5cbiAgc3RhdGljIHN0eWxlcyA9IG5ldyBTdHlsZVNldCgpO1xuXG4gIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKSB7XG4gICAgVUkuYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIFVJLmxvYWRTYXZlZFN0eWxlcygpO1xuXG4gICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICBVSS5hZGRXaW5kb3dSZXNpemVFdmVudExpc3RlbmVyKCk7XG4gICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgVUkuYWRkUGxheWJhY2tNZW51TGlzdGVuZXJzKCk7XG4gICAgVUkuYWRkUmVzaXplTWVudUxpc3RlbmVycygpO1xuICAgIFVJLmFkZFN0eWxlTWVudUxpc3RlbmVycygpO1xuICB9XG5cbiAgc3RhdGljIGFkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5zdHlsZXMuYWRkU3R5bGUobmV3IFN0eWxlKCdyZ2IoMjE0LCAxNDIsIDcpJywgJ3JnYigyNTUsIDI1NSwgMjU1KScsICdyZ2IoMTQ5LCAxNDksIDE0OSknLCAnNXB4JykpO1xuICAgIHRoaXMuc3R5bGVzLmFkZFN0eWxlKG5ldyBTdHlsZSgncmdiKDIxNCwgMTQyLCA3MCknLCAncmdiKDAsIDAsIDApJywgJ3JnYigxOSwgMTQ5LCAxNDkpJywgJzJweCcpKTtcbiAgICB0aGlzLnN0eWxlcy5hZGRTdHlsZShuZXcgU3R5bGUoJ3JnYigyMSwgMTQyLCA3KScsICdyZ2IoMTAwLCAxMDAsIDEwMCknLCAncmdiKDE0OSwgMTksIDE0OSknLCAnMTBweCcpKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkU2F2ZWRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZXNNZW51Jyk7XG4gICAgc3R5bGVzTWVudS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMuc3R5bGVzLmdldFN0eWxlcygpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3R5bGUuZ2V0QmFja2dyb3VuZCgpfTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBgKTtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtzdHlsZS5nZXRTZWNvbmRhcnkoKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHtzdHlsZS5nZXRSYWRpdXMoKX07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZS5nZXRQcmltYXJ5KCl9O1xuICAgICAgICAgICAgYCk7XG4gICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgc3R5bGVzTWVudS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB9KTtcbiAgICBVSS5hZGRTdHlsZXNNZW51TGlzdGVuZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgYWRkU3R5bGVzTWVudUxpc3RlbmVycygpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHlsZXNNZW51ID4gZGl2Jyk7XG4gICAgc3R5bGVEaXZzLmZvckVhY2goKHN0eWxlRGl2KSA9PiB7XG4gICAgICBzdHlsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kLWNvbG9yJywgc3R5bGVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWNvbG9yJywgc3R5bGVEaXYuY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnktY29sb3InLCBzdHlsZURpdi5jaGlsZHJlblswXS5zdHlsZS5ib3JkZXJDb2xvcik7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYm9yZGVyLXJhZGl1cycsIHN0eWxlRGl2LmNoaWxkcmVuWzBdLnN0eWxlLmJvcmRlclJhZGl1cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRTdHlsZU1lbnVMaXN0ZW5lcnMoKSB7XG4gICAgLy8gb3BlbiB0aGUgc3R5bGUgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5vcGVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblN0eWxlTWVudSAub3BlbicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblN0eWxlTWVudSAuY2xvc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0eWxlTWVudScpLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZXNNZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICB9KTtcbiAgICAvLyBjbG9zZSB0aGUgc3R5bGUgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5TdHlsZU1lbnUgLmNsb3NlJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuU3R5bGVNZW51IC5vcGVuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZU1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZCAhPSAnbm9uZScpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JQaWNrZXJVSScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3R5bGVzTWVudScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgLy8gYm9yZGVyIHJhZGl1cyBhZGp1c3RtZW50XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImJvcmRlclJhZGl1c1wiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvcmRlci1yYWRpdXMnLCBgJHtlLnRhcmdldC52YWx1ZX1weGApO1xuICAgIH0pO1xuICAgIC8vIGNsaWNrIG9uIGEgY29sb3IgdG8gY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaW1hcnlDb2xvciwgLnNlY29uZGFyeUNvbG9yLCAuYmFja2dyb3VuZENvbG9yJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZCA9PSAnbm9uZScpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdFswXTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZCA9IHNlbGVjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JQaWNrZXJVSScpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgICAgIFVJLnNldENvbG9yUGlja2VyQ29sb3IoKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgLy8gY29sb3IgcGlja2VyIGNhbmNlbCBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JQaWNrZXJVSSAuY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkfWApLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICB0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yUGlja2VyVUknKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgIH0pO1xuICAgIC8vIGNvbG9yIHBpY2tlciBzdWJtaXQgYnV0dG9uXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yUGlja2VyVUkgLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jdXJyZW50Q29sb3JCZWluZ1BpY2tlZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yUGlja2VyVUknKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgVUkucGlja0NvbG9yKCk7XG4gICAgICB0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIC8vIG5ldyBzYXZlZCBzdHlsZSBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZVN0eWxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgY29uc3QgbmV3U3R5bGUgPSBuZXcgU3R5bGUoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wcmltYXJ5LWNvbG9yJyksXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zZWNvbmRhcnktY29sb3InKSxcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJhY2tncm91bmQtY29sb3InKSxcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJvcmRlci1yYWRpdXMnKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnN0eWxlcy5hZGRTdHlsZShuZXdTdHlsZSk7XG4gICAgICBVSS5sb2FkU2F2ZWRTdHlsZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRDb2xvclBpY2tlckNvbG9yKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgbGV0IG5ld0NvbG9yO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPT0gJ3ByaW1hcnlDb2xvcicpIHtcbiAgICAgIG5ld0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXByaW1hcnktY29sb3InKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudENvbG9yQmVpbmdQaWNrZWQgPT0gJ3NlY29uZGFyeUNvbG9yJykge1xuICAgICAgbmV3Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tc2Vjb25kYXJ5LWNvbG9yJyk7XG4gICAgfSBlbHNlIHsgLy8gYmFja2dyb3VuZCBjb2xvclxuICAgICAgbmV3Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY29sb3JQaWNrZXIuY29sb3IucmdiU3RyaW5nID0gbmV3Q29sb3I7XG4gIH1cblxuICBzdGF0aWMgcGlja0NvbG9yKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgbmV3Q29sb3IgPSB0aGlzLmNvbG9yUGlja2VyLmNvbG9yLnJnYlN0cmluZztcblxuICAgIGlmICh0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID09ICdwcmltYXJ5Q29sb3InKSB7XG4gICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnktY29sb3InLCBuZXdDb2xvcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRDb2xvckJlaW5nUGlja2VkID09ICdzZWNvbmRhcnlDb2xvcicpIHtcbiAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Vjb25kYXJ5LWNvbG9yJywgbmV3Q29sb3IpO1xuICAgIH0gZWxzZSB7IC8vIGJhY2tncm91bmQgY29sb3JcbiAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsIG5ld0NvbG9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkUmVzaXplTWVudUxpc3RlbmVycygpIHtcbiAgICAvLyBvcGVuIHRoZSByZXNpemUgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAub3BlbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5SZXNpemVNZW51IC5vcGVuJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuUmVzaXplTWVudSAuY2xvc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2l6ZU1lbnUnKS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgfSk7XG4gICAgLy8gY2xvc2UgdGhlIHJlc2l6ZSBtZW51XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5SZXNpemVNZW51IC5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5SZXNpemVNZW51IC5jbG9zZScpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlblJlc2l6ZU1lbnUgLm9wZW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2l6ZU1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfSk7XG4gICAgLy8gbG9jayByb3dzICYgY29sdW1uc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQgLmxvY2tPcGVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ja2VkIC5sb2NrT3BlbicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9ja2VkIC5sb2NrQ2xvc2VkJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xJY29uLCAuY29scycpLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JheWVkT3V0JykpO1xuICAgICAgdGhpcy5yb3dDb2xMb2NrID0gdHJ1ZTtcbiAgICAgIFVJLmxvY2tCb2FyZCgpO1xuICAgIH0pO1xuICAgIC8vIHVubG9jayByb3dzICYgY29sdW1uc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQgLmxvY2tDbG9zZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQgLmxvY2tDbG9zZWQnKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2tlZCAubG9ja09wZW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbEljb24sIC5jb2xzJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmF5ZWRPdXQnKSk7XG4gICAgICB0aGlzLnJvd0NvbExvY2sgPSBmYWxzZTtcbiAgICB9KTtcbiAgICAvLyByb3cgc2l6aW5nIGFkanVzdG1lbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicm93c1wiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Jvd3MgPSAoMTYwIC0gZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucm93Q29sTG9jaykge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKG5ld1Jvd3MsIDEpO1xuICAgICAgICBVSS5sb2NrQm9hcmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVJLnVwZGF0ZVJvd3MobmV3Um93cyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29sIHNpemluZyBhZGp1c3RtZW50XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvbHNcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucm93Q29sTG9jaykge1xuICAgICAgICBVSS51cGRhdGVDb2xzKDE2MCAtIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVDb2xzKG5ld0NvbHMpIHtcbiAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICBVSS5wYXVzZSgpO1xuICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmJvYXJkLmdldFJvd3MoKSwgbmV3Q29scyk7XG4gICAgICBVSS5hZGp1c3RDU1NSb3dzQ29scygpO1xuICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICBVSS5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5ib2FyZC5nZXRSb3dzKCksIG5ld0NvbHMpO1xuICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgIFVJLmRyYXdCb2FyZCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVSb3dzKG5ld1Jvd3MpIHtcbiAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICBVSS5wYXVzZSgpO1xuICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChuZXdSb3dzLCB0aGlzLmJvYXJkLmdldENvbHMoKSk7XG4gICAgICBVSS5hZGp1c3RDU1NSb3dzQ29scygpO1xuICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICBVSS5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQobmV3Um93cywgdGhpcy5ib2FyZC5nZXRDb2xzKCkpO1xuICAgICAgVUkuYWRqdXN0Q1NTUm93c0NvbHMoKTtcbiAgICAgIFVJLmRyYXdCb2FyZCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBsb2NrQm9hcmQoKSB7XG4gICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgVUkucGF1c2UoKTtcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5ib2FyZC5nZXRSb3dzKCksIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAod2luZG93LmlubmVySGVpZ2h0IC8gdGhpcy5ib2FyZC5nZXRSb3dzKCkpKSk7XG4gICAgICBVSS5hZGp1c3RDU1NSb3dzQ29scygpO1xuICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICBVSS5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5ib2FyZC5nZXRSb3dzKCksIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyAod2luZG93LmlubmVySGVpZ2h0IC8gdGhpcy5ib2FyZC5nZXRSb3dzKCkpKSk7XG4gICAgICBVSS5hZGp1c3RDU1NSb3dzQ29scygpO1xuICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkanVzdENTU1Jvd3NDb2xzKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yb3dzJywgdGhpcy5ib2FyZC5nZXRSb3dzKCkpO1xuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY29scycsIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRXaW5kb3dSZXNpemVFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yb3dDb2xMb2NrKSB7XG4gICAgICAgIFVJLmxvY2tCb2FyZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZFBsYXliYWNrTWVudUxpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgIFVJLnBsYXkoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICAgIFVJLnBhdXNlKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGxheWJhY2tTcGVlZFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIHRoaXMucGxheWJhY2tTcGVlZCA9IChlLnRhcmdldC52YWx1ZSk7XG4gICAgICB0aGlzLnBsYXliYWNrU3BlZWQgPSAoMTA1MCAtIHRoaXMucGxheWJhY2tTcGVlZCk7XG4gICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XG4gICAgICAgIFVJLnBhdXNlKCk7XG4gICAgICAgIFVJLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5yZWZyZXNoQm9hcmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyByZWZyZXNoQm9hcmQoKSB7XG4gICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgVUkucGF1c2UoKTtcbiAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5ib2FyZC5nZXRSb3dzKCksIHRoaXMuYm9hcmQuZ2V0Q29scygpKTtcbiAgICAgIFVJLmRyYXdCb2FyZCgpO1xuICAgICAgVUkucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuYm9hcmQuZ2V0Um93cygpLCB0aGlzLmJvYXJkLmdldENvbHMoKSk7XG4gICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGxheSgpIHtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5zdGVwRm9yd2FyZCgpO1xuICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgfSwgdGhpcy5wbGF5YmFja1NwZWVkKTtcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RhdGljIHBhdXNlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZHJhd0JvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IGJvb2xCb2FyZCA9IHRoaXMuYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgIC8vIGNsZWFyIG9sZCBib2FyZFxuICAgIGJvYXJkRWxlbS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgYm9vbEJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdCb2FyZFBpZWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmIChjb2wpIHtcbiAgICAgICAgICBuZXdCb2FyZFBpZWNlLmNsYXNzTGlzdC5hZGQoJ2FsaXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Qm9hcmRQaWVjZS5jbGFzc0xpc3QuYWRkKCdkZWFkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmRFbGVtLmFwcGVuZENoaWxkKG5ld0JvYXJkUGllY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==