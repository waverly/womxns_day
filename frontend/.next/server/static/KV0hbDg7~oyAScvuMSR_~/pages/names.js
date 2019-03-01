module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setBodyHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return genId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _onShareClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _addHighlightClass; });
var setBodyHeight = function setBodyHeight() {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      var womanListHeight = document.getElementById("womanList").scrollHeight; // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 1.5;
      console.log("in set body height ", womanListHeight);
      document.body.style.height = womanListHeight + womanListHeight * 0.05 + "px";
    }
  }
};
var genId = function genId(name) {
  var id = name.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase();
  return id;
};
var _onShareClick = function _onShareClick(e) {
  try {
    console.log("inside ons hare click");
    var id = e.currentTarget.parentNode.parentNode.dataset.nameid;
    console.log({
      id: id
    });
    var domain = "http://localhost:7777";
    var link = "".concat(domain, "/names#").concat(id);
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.classList.add("display-none");
    dummy.value = link;
    console.log(dummy.value);
    console.log(dummy);
    dummy.select();
    document.execCommand("copy");
    alert("Copied the text: " + dummy.value);
    document.body.removeChild(dummy);
    e.currentTarget.innerHTML = "Copied to clipboard";
  } catch (err) {
    console.log("Error while copying to clipboard: " + err);
  }
};
var _addHighlightClass = function _addHighlightClass(e) {
  // extract data-nameid
  var dataId = e.currentTarget.dataset.nameid;
  document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
    return el.classList.add("highlighted");
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-17gzo85-0"
})(["position:fixed;width:100vh;z-index:150;display:flex;justify-content:flex-end;font-size:1.5rem;height:50px;right:0;top:0;transform:translateY(-65px) rotate(calc(-90deg));transform-origin:right bottom;a,button{margin:auto 2rem;display:inline-block;position:relative;text-transform:uppercase;font-weight:900;font-size:2rem;background:none;border:0;cursor:pointer;color:black;&:hover{-webkit-text-stroke:1px black;color:transparent;}@media (max-width:700px){font-size:10px;}}@media (max-width:1300px){}"]);
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/Nav.js




var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(styles_NavStyles, null, external_react_default.a.createElement(link_default.a, {
    href: "/addname"
  }, external_react_default.a.createElement("a", null, "Add a name")), external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "About")));
};

/* harmony default export */ var components_Nav = __webpack_exports__["a"] = (Nav_Nav);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(5);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/Nav.js + 1 modules
var Nav = __webpack_require__(6);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(9);

// CONCATENATED MODULE: ./components/styles/WomenList.js

var WomenListWrap = external_styled_components_default.a.div.withConfig({
  displayName: "WomenList__WomenListWrap",
  componentId: "sc-3l0rl8-0"
})(["position:fixed;top:0;left:0;width:90vw;left:5vw;top:0vh;height:90vh;-webkit-perspective:200px;perspective:200px;transition:0.5s opacity;opacity:", ";.hidden{overflow:hidden;}.womenWrapper{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;padding-bottom:5%;position:absolute;top:0;width:100%;}.womanItem{background:transparent;display:flex;align-items:center;-webkit-transform:translate3d(0,0,0);.inner-relative{position:relative;display:inline-block !important;cursor:pointer;}.super-cta{position:absolute;right:0;top:-5vw;font-size:3vw;text-transform:uppercase;color:black;-webkit-text-stroke:2px black;color:", ";display:none;@media screen and (max-width:768px){font-size:5vw;top:-7vw;}}&.highlighted{.super-cta{display:block;}}&:nth-child(3n + 1){justify-content:flex-start;}&:nth-child(3n + 2){justify-content:center;text-align:center;}&:nth-child(3n + 3){justify-content:flex-end;text-align:right;}&:nth-child(4n + 1){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 2){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 3){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 4){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}h1{text-transform:uppercase;font-size:14vw;display:inline-block;margin-block-start:10px;margin-block-end:10px;height:auto;transition:0.5s all;line-height:0.7;margin-block-start:1rem;margin-block-end:1rem;word-break:break-word;&:hover{color:transparent;}@media screen and (max-width:768px){font-size:18vw;}}}"], function (props) {
  return props.formFocused ? ".1" : "1";
}, function (props) {
  return props.theme.darkerOffWhite;
}, function (props) {
  return props.theme.teal;
}, function (props) {
  return props.theme.teal;
}, function (props) {
  return props.theme.teal;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.gold;
}, function (props) {
  return props.theme.gold;
}, function (props) {
  return props.theme.gold;
}, function (props) {
  return props.theme.maroon;
}, function (props) {
  return props.theme.maroon;
}, function (props) {
  return props.theme.maroon;
});
var Container = external_styled_components_default.a.div.withConfig({
  displayName: "WomenList__Container",
  componentId: "sc-3l0rl8-1"
})(["height:calc(100vh / 3);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;background:", ";position:relative;&:first-of-type{&:before{content:\"\";position:absolute;top:0;left:0;display:none;width:100%;height:80%;background:-webkit-gradient( linear,left top,left bottom,from(", "),to(rgba(17,17,17,0)) );background:-webkit-linear-gradient( top,from(", "),rgba(17,17,17,0) );background:-o-linear-gradient( top,from(", "),rgba(17,17,17,0) );background:linear-gradient( to bottom,from(", "),rgba(17,17,17,0) );z-index:20;-webkit-backface-visibility:hidden;backface-visibility:hidden;}}&:last-of-type{&:after{content:\"\";position:absolute;bottom:0;left:0;display:block;width:100%;height:80%;background:-webkit-gradient( linear,left top,left bottom,from(from(", ")),to(rgba(17,17,17,0)) );background:-webkit-linear-gradient( top,rgba(17,17,17,0),from(", ") );background:-o-linear-gradient( top,rgba(17,17,17,0),from(", ") );background:linear-gradient( to bottom,rgba(17,17,17,0),from(", ") );z-index:20;-webkit-backface-visibility:hidden;backface-visibility:hidden;}}"], function (props) {
  return props.theme.darkerOffWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
var InnerWrap = external_styled_components_default.a.div.withConfig({
  displayName: "WomenList__InnerWrap",
  componentId: "sc-3l0rl8-2"
})(["overflow:hidden;position:relative;margin-top:", ";"], function (props) {
  return props.order ? "calc((-100vh / 3) * ".concat(props.order, ");") : "0";
});
// EXTERNAL MODULE: ./components/helpers/index.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InnerNames.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var OuterWrap = external_styled_components_default.a.div.withConfig({
  displayName: "InnerNames__OuterWrap",
  componentId: "njma8s-0"
})(["overflow:hidden;padding-top:5vw;"]);

var InnerNames_renderNamesWithId = function _renderNamesWithId(names, highlightedid) {
  if (names) {
    return names.map(function (woman, index) {
      var personId = Object(helpers["c" /* genId */])(woman.name); //   console.log(personId);

      return external_react_default.a.createElement("div", {
        "data-scrollid": personId,
        "data-nameid": personId,
        className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
        key: woman.id + personId + index,
        onClick: function onClick(e) {
          return Object(helpers["a" /* _addHighlightClass */])(e);
        }
      }, external_react_default.a.createElement("span", {
        className: "inner-relative"
      }, external_react_default.a.createElement("span", {
        onClick: function onClick(e) {
          return Object(helpers["b" /* _onShareClick */])(e);
        },
        className: "super-cta"
      }, "Share"), external_react_default.a.createElement("h1", null, woman.name)));
    });
  }
};

var InnerNames_renderNames = function _renderNames(names, highlightedid) {
  if (names) {
    return names.map(function (woman, index) {
      var personId = Object(helpers["c" /* genId */])(woman.name);
      return external_react_default.a.createElement("div", {
        "data-nameid": personId,
        className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
        key: woman.id + personId + index,
        onClick: function onClick(e) {
          return Object(helpers["a" /* _addHighlightClass */])(e);
        }
      }, external_react_default.a.createElement("span", {
        className: "inner-relative"
      }, external_react_default.a.createElement("span", {
        onClick: function onClick(e) {
          return Object(helpers["b" /* _onShareClick */])(e);
        },
        className: "super-cta"
      }, "Share"), external_react_default.a.createElement("h1", null, woman.name)));
    });
  }
}; // TODO: figure out why mouseMove is causing this component to rerender


var InnerNames_InnerNames =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InnerNames, _React$PureComponent);

  function InnerNames() {
    _classCallCheck(this, InnerNames);

    return _possibleConstructorReturn(this, _getPrototypeOf(InnerNames).apply(this, arguments));
  }

  _createClass(InnerNames, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(OuterWrap, null, this.props.renderwithid ? InnerNames_renderNamesWithId(this.props.names, this.props.highlightedid) : InnerNames_renderNames(this.props.names, this.props.highlightedid));
    }
  }]);

  return InnerNames;
}(external_react_default.a.PureComponent);

/* harmony default export */ var components_InnerNames = (InnerNames_InnerNames);
// CONCATENATED MODULE: ./components/WomenList.js
function WomenList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WomenList_typeof = function _typeof(obj) { return typeof obj; }; } else { WomenList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WomenList_typeof(obj); }

function WomenList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WomenList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WomenList_createClass(Constructor, protoProps, staticProps) { if (protoProps) WomenList_defineProperties(Constructor.prototype, protoProps); if (staticProps) WomenList_defineProperties(Constructor, staticProps); return Constructor; }

function WomenList_possibleConstructorReturn(self, call) { if (call && (WomenList_typeof(call) === "object" || typeof call === "function")) { return call; } return WomenList_assertThisInitialized(self); }

function WomenList_getPrototypeOf(o) { WomenList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WomenList_getPrototypeOf(o); }

function WomenList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WomenList_setPrototypeOf(subClass, superClass); }

function WomenList_setPrototypeOf(o, p) { WomenList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WomenList_setPrototypeOf(o, p); }

function WomenList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var WomenList_WomenList =
/*#__PURE__*/
function (_Component) {
  WomenList_inherits(WomenList, _Component);

  function WomenList() {
    var _getPrototypeOf2;

    var _this;

    WomenList_classCallCheck(this, WomenList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = WomenList_possibleConstructorReturn(this, (_getPrototypeOf2 = WomenList_getPrototypeOf(WomenList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "state", {
      scrollTop: 0,
      newlyAddedItem: null,
      highlightedId: null
    });

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "allWomen", null);

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "womenWithId", null);

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "_scrollToHash", function () {
      console.log("scroll to hash fx");

      if (typeof window === "undefined") {
        return 0;
      } else {
        var hash = window.location.hash;

        if (hash !== "") {
          var id = hash.substr(1);

          _this.setState({
            highlightedId: id
          }); // TODO: refactor to use refs instead


          var womenWrapper = document.getElementById("womanList");
          var scrollEl = document.querySelector("[data-scrollid=".concat(id, "]"));

          if (scrollEl) {
            var elScrollHeight = scrollEl.offsetTop;
            var halfHeight = window.innerHeight / 2.5;
            var totalScrollHeight = elScrollHeight - halfHeight;
            document.querySelectorAll(".".concat(id)).forEach(function (el) {
              el.classList.add("highlighted");
            });
            window.scrollTo({
              top: totalScrollHeight,
              left: 0
            });
          } else {
            window && (typeof window === "undefined" ? "undefined" : WomenList_typeof(window)) === "object" && window.scrollTo && typeof window.scrollTo === "function" && window.scrollTo(0, 0);
          }
        }
      }
    });

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "_onScroll", function (e) {
      var bodyScrollTop = window.pageYOffset;

      _this.setState({
        scrollTop: bodyScrollTop
      });
    });

    _defineProperty(WomenList_assertThisInitialized(WomenList_assertThisInitialized(_this)), "_throttleScroll", external_lodash_["throttle"](_this._onScroll, 100));

    return _this;
  }

  WomenList_createClass(WomenList, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(helpers["d" /* setBodyHeight */])();
      document.addEventListener("scroll", this._throttleScroll);
      window.addEventListener("resize", helpers["d" /* setBodyHeight */]);
      this.setState({
        scrollTop: window.pageYOffset
      });

      this._scrollToHash();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        document.removeEventListener("scroll", this._throttleScroll);
      }
    } // This will run the first time setBodyHeight is called.

  }, {
    key: "render",
    value: function render() {
      // const reversedNames = this.props.women.reverse();
      var names = [{
        name: "one"
      }, {
        name: "two"
      }, {
        name: "three"
      }]; // console.log(names);
      // const names = this.props.women;

      var reversedNames = this.props.women;
      var containers = external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(WomenListWrap, {
        formFocused: this.props.formFocused,
        style: {
          transform: "rotateY(".concat(this.props.x, "deg)")
        }
      }, external_react_default.a.createElement(Container, {
        style: {
          transformOrigin: "bottom center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        }
      }, external_react_default.a.createElement("div", {
        className: "hidden"
      }, external_react_default.a.createElement(InnerWrap, {
        order: 0,
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        className: "womenWrapper"
      }, external_react_default.a.createElement(components_InnerNames, {
        highlightedid: this.state.highlightedId,
        names: reversedNames
      })))), external_react_default.a.createElement(Container, null, external_react_default.a.createElement("div", {
        className: "hidden"
      }, external_react_default.a.createElement(InnerWrap, {
        id: "womanList",
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 1,
        className: "womenWrapper"
      }, external_react_default.a.createElement(components_InnerNames, {
        highlightedid: this.state.highlightedId,
        names: reversedNames,
        renderwithid: true
      })))), external_react_default.a.createElement(Container, {
        style: {
          transformOrigin: "top center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        }
      }, external_react_default.a.createElement(InnerWrap, {
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 2,
        className: "womenWrapper"
      }, external_react_default.a.createElement(components_InnerNames, {
        highlightedid: this.state.highlightedId,
        names: reversedNames
      })))));
      return containers;
    }
  }]);

  return WomenList;
}(external_react_["Component"]); // Set default props


WomenList_WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};
/* harmony default export */ var components_WomenList = (WomenList_WomenList);
// CONCATENATED MODULE: ./components/Women.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_WOMEN_QUERY; });
function Women_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Women_typeof = function _typeof(obj) { return typeof obj; }; } else { Women_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Women_typeof(obj); }

function Women_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Women_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Women_createClass(Constructor, protoProps, staticProps) { if (protoProps) Women_defineProperties(Constructor.prototype, protoProps); if (staticProps) Women_defineProperties(Constructor, staticProps); return Constructor; }

function Women_possibleConstructorReturn(self, call) { if (call && (Women_typeof(call) === "object" || typeof call === "function")) { return call; } return Women_assertThisInitialized(self); }

function Women_getPrototypeOf(o) { Women_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Women_getPrototypeOf(o); }

function Women_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Women_setPrototypeOf(subClass, superClass); }

function Women_setPrototypeOf(o, p) { Women_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Women_setPrototypeOf(o, p); }

function Women_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Women_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_WOMEN_QUERY {\n    women(orderBy: createdAt_DESC) {\n      id\n      name\n      createdAt\n      slug\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ALL_WOMEN_QUERY = external_graphql_tag_default()(_templateObject());
var Center = external_styled_components_default.a.div.withConfig({
  displayName: "Women__Center",
  componentId: "sc-188374r-0"
})(["position:fixed;width:100vw;height:100vh;perspective:150px;top:0;left:0;"]);
var ManifestoWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "Women__ManifestoWrapper",
  componentId: "sc-188374r-1"
})(["width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:", ";justify-content:center;align-items:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;.module{width:70%;height:70%;color:white;background:black;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:50px;margin:0 auto;}h1{color:", ";}"], function (props) {
  return props.display ? "block" : "none";
}, function (props) {
  return props.theme.green;
});

var calcX = function calcX(x) {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (x) {
      var newX = x;

      if (x === 0) {
        newX = x + 0.001;
      }

      var center = window.innerWidth / 2;
      var distFromCenter = newX - center;
      var decimal = distFromCenter / center;
      var randVal = Math.floor(decimal * 0.95) + 0.6;
      return (newX - window.innerWidth / 2) / 100;
    }
  }
};

var calcY = function calcY(y) {
  if (typeof window === "undefined") {
    console.log("type of window undefine");
    return null;
  } else {
    var newY = y;

    if (y === 0) {
      newY = y + 0.001;
    }

    var center = window.innerHeight / 2;
    var distFromCenter = newY - center;
    var matrix3DVal = distFromCenter * 0.67 / center;
    return distFromCenter;
  }
};

var calcMatrix3D1 = function calcMatrix3D1(y) {
  if (typeof window === "undefined") {
    return 0;
  } else {
    if (y) {
      var center = window.innerHeight / 2;
      var distFromCenter = y - center;
      var matrix3DVal = distFromCenter * 0.5 / center; // console.log({ center, distFromCenter, matrix3DVal });

      return matrix3DVal;
    } else return 0;
  }
};

var calcMatrix3D2 = function calcMatrix3D2(y) {
  if (typeof window === "undefined") {
    console.log("window was undefined");
    return 0;
  } else {
    if (y) {
      var center = window.innerHeight / 2;
      var absFromCenter = Math.abs(y - center);
      var a = 0.99;
      var b = 0.74;
      var min = 0;
      var max = center;
      var x = absFromCenter;
      var scaled = (b - a) * (x - min) / (max - min) + a; // console.log({ scaled });

      return scaled;
    } else return 0;
  }
};

var Women_Women =
/*#__PURE__*/
function (_Component) {
  Women_inherits(Women, _Component);

  function Women() {
    var _getPrototypeOf2;

    var _this;

    Women_classCallCheck(this, Women);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Women_possibleConstructorReturn(this, (_getPrototypeOf2 = Women_getPrototypeOf(Women)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Women_defineProperty(Women_assertThisInitialized(Women_assertThisInitialized(_this)), "state", {
      x: null,
      y: null,
      displayManifesto: true,
      formFocused: 0
    });

    Women_defineProperty(Women_assertThisInitialized(Women_assertThisInitialized(_this)), "_onMouseMove", function (e) {
      _this.setState({
        x: calcX(e.clientX),
        y: calcY(e.clientY),
        matrix3DVal1: calcMatrix3D1(e.clientY),
        matrix3DVal2: calcMatrix3D2(e.clientY)
      });
    });

    Women_defineProperty(Women_assertThisInitialized(Women_assertThisInitialized(_this)), "_closeManifesto", function () {
      _this.setState({
        displayManifesto: false
      });
    });

    Women_defineProperty(Women_assertThisInitialized(Women_assertThisInitialized(_this)), "_onFormFocus", function () {
      console.log("hi hi hi hi hi in focus");

      _this.setState({
        formFocused: 1
      });
    });

    Women_defineProperty(Women_assertThisInitialized(Women_assertThisInitialized(_this)), "_onFormBlur", function () {
      console.log("hi hi hi hi hi in blur");

      _this.setState({
        formFocused: 0
      });
    });

    return _this;
  }

  Women_createClass(Women, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Nav["a" /* default */], null), external_react_default.a.createElement(Center, {
        onMouseMove: this._onMouseMove
      }, external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: ALL_WOMEN_QUERY,
        refetch: true
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return null;
        if (error) return external_react_default.a.createElement("p", null, "Error: ", error.message);
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(components_WomenList, {
          formFocused: _this2.state.formFocused,
          women: data.women,
          x: _this2.state.x,
          y: _this2.state.y,
          matrix3DVal1: _this2.state.matrix3DVal1,
          matrix3DVal2: _this2.state.matrix3DVal2
        }));
      })));
    }
  }]);

  return Women;
}(external_react_["Component"]);

/* harmony default export */ var components_Women = __webpack_exports__["b"] = (Women_Women);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Women__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Women__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })
/******/ ]);