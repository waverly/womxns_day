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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/Nav.js";




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/addname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Add a name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Women.js":
/*!*****************************!*\
  !*** ./components/Women.js ***!
  \*****************************/
/*! exports provided: default, ALL_WOMEN_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_WOMEN_QUERY", function() { return ALL_WOMEN_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _WomenList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WomenList */ "./components/WomenList.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/Women.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_WOMEN_QUERY {\n    women {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ALL_WOMEN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Women__Center",
  componentId: "sc-188374r-0"
})(["position:fixed;width:100vw;height:100vh;perspective:150px;top:0;left:0;"]);
var ManifestoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
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

var Women =
/*#__PURE__*/
function (_Component) {
  _inherits(Women, _Component);

  function Women() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Women);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Women)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      x: null,
      y: null,
      displayManifesto: true,
      formFocused: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onMouseMove", function (e) {
      _this.setState({
        x: calcX(e.clientX),
        y: calcY(e.clientY),
        matrix3DVal1: calcMatrix3D1(e.clientY),
        matrix3DVal2: calcMatrix3D2(e.clientY)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_closeManifesto", function () {
      _this.setState({
        displayManifesto: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onFormFocus", function () {
      console.log("hi hi hi hi hi in focus");

      _this.setState({
        formFocused: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onFormBlur", function () {
      console.log("hi hi hi hi hi in blur");

      _this.setState({
        formFocused: 0
      });
    });

    return _this;
  }

  _createClass(Women, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        onMouseMove: this._onMouseMove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_WOMEN_QUERY,
        refetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return null;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WomenList__WEBPACK_IMPORTED_MODULE_5__["default"], {
          formFocused: _this2.state.formFocused,
          women: data.women,
          x: _this2.state.x,
          y: _this2.state.y,
          matrix3DVal1: _this2.state.matrix3DVal1,
          matrix3DVal2: _this2.state.matrix3DVal2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }));
      })));
    }
  }]);

  return Women;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Women);


/***/ }),

/***/ "./components/WomenList.js":
/*!*********************************!*\
  !*** ./components/WomenList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_WomenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/WomenList */ "./components/styles/WomenList.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/WomenList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var WomenList =
/*#__PURE__*/
function (_Component) {
  _inherits(WomenList, _Component);

  function WomenList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WomenList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WomenList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      scrollTop: 0,
      newlyAddedItem: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allWomen", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "womenWithId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_scrollToHash", function () {
      console.log("scroll to hash fx");

      if (typeof window === "undefined") {
        return 0;
      } else {
        var hash = window.location.hash;

        if (hash !== "") {
          var id = hash.substr(1);
          var womenWrapper = document.getElementById("womanList");
          var scrollEl = document.querySelector("[data-nameid=".concat(id, "]"));
          console.log(womenWrapper);
          console.log(scrollEl);
          console.log(womenWrapper); // setTimeout(() => {
          //   const timeoutscrollel = document.querySelector(
          //     `[data-nameid="jenny"]`
          //   );
          //   console.log(timeoutscrollel);
          // }, 500);
          // debugger;

          if (scrollEl) {
            var elScrollHeight = scrollEl.offsetTop;
            console.log(womenWrapper);
            console.log(scrollEl);
            console.log(elScrollHeight);
            console.log(womenWrapper.lastChild.lastChild);
            var halfHeight = window.innerHeight / 2.5;
            var totalScrollHeight = elScrollHeight - halfHeight;
            document.querySelectorAll(".".concat(id)).forEach(function (el) {
              el.classList.add("highlighted");
            });
            window.scrollTo({
              top: totalScrollHeight,
              left: 0 // behavior: "smooth"

            });
          } else {
            window && (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.scrollTo && typeof window.scrollTo === "function" && window.scrollTo(0, 0);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_calcWomenList", function () {
      if (_this.props.women) {
        console.log("running calc women list");
        _this.womenWithId = _this.props.women.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["genId"])(woman.name);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-nameid": personId,
            className: "womanItem ".concat(personId),
            key: woman.id + personId + index,
            onClick: function onClick(e) {
              return _this._addHighlightClass(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            onClick: function onClick(e) {
              return _this._onShareClick(e);
            },
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, woman.name)));
        });
        _this.allWomen = _this.props.women.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["genId"])(woman.name);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this._addHighlightClass(e);
            },
            className: "womanItem ".concat(personId),
            key: woman.id + index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            onClick: function onClick(e) {
              return _this._onShareClick(e);
            },
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, woman.name)));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      var bodyScrollTop = window.pageYOffset;

      _this.setState({
        scrollTop: bodyScrollTop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_throttleScroll", lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"](_this._onScroll, 100));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onShareClick", function (e) {
      console.log("inside ons hare click");
      var id = e.currentTarget.parentNode.parentNode.dataset.nameid;
      console.log({
        id: id
      });
      var domain = "http://localhost:7777";
      var link = "".concat(domain, "/names#").concat(id);
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.classList.add("display-none");
      dummy.innerHTML = link;
      console.log(dummy);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      console.log(link);
      e.currentTarget.innerHTML = "Copied to clipboard";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_addHighlightClass", function (e) {
      // extract data-nameid
      var dataId = e.currentTarget.dataset.nameid;
      document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
        return el.classList.add("highlighted");
      }); // el.classList.addClass("highlighted");
    });

    return _this;
  }

  _createClass(WomenList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this._calcWomenList();

      console.log(this.props.women[this.props.women.length - 1]);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // console.log(nextProps.women.length, this.props.women.length);
      if (nextProps.women.length !== this.props.women.length) {
        console.log("COMPONENT WILL RECEIVE PROPS, next and current props are diff lengths");
        console.log(nextProps.women[nextProps.women.length - 1]); // this._scrollToHash();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"])();
      document.addEventListener("scroll", this._throttleScroll);
      window.addEventListener("resize", _helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"]);
      this.setState({
        scrollTop: window.pageYOffset
      });
      console.log(this.props.women[this.props.women.length - 1]);
      console.log("COMPONENT DID MOUNT");

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
      var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["WomenListWrap"], {
        formFocused: this.props.formFocused,
        style: {
          transform: "rotateY(".concat(this.props.x, "deg)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "bottom center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        order: 0,
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, this.allWomen)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        id: "womanList",
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 1,
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, this.womenWithId)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "top center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 2,
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, this.allWomen)))));
      return containers;
    }
  }]);

  return WomenList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Set default props


WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};
/* harmony default export */ __webpack_exports__["default"] = (WomenList);

/***/ }),

/***/ "./components/helpers/index.js":
/*!*************************************!*\
  !*** ./components/helpers/index.js ***!
  \*************************************/
/*! exports provided: setBodyHeight, genId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyHeight", function() { return setBodyHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genId", function() { return genId; });
var setBodyHeight = function setBodyHeight() {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      var womanListHeight = document.getElementById("womanList").scrollHeight; // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 1.5;
      document.body.style.height = womanListHeight + womanListHeight * 0.05 + "px";
    }
  }
};
var genId = function genId(name) {
  var id = name.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase();
  return id;
};

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-17gzo85-0"
})(["position:fixed;width:100vh;z-index:150;display:flex;justify-content:flex-end;font-size:1.5rem;height:50px;right:0;top:0;transform:translateY(-65px) rotate(calc(-90deg));transform-origin:right bottom;a,button{margin:auto 2rem;display:inline-block;position:relative;text-transform:uppercase;font-weight:900;font-size:2rem;background:none;border:0;cursor:pointer;color:black;&:hover{-webkit-text-stroke:1px black;color:transparent;}@media (max-width:700px){font-size:10px;}}@media (max-width:1300px){}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/WomenList.js":
/*!****************************************!*\
  !*** ./components/styles/WomenList.js ***!
  \****************************************/
/*! exports provided: WomenListWrap, Container, InnerWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenListWrap", function() { return WomenListWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerWrap", function() { return InnerWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var WomenListWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__WomenListWrap",
  componentId: "sc-3l0rl8-0"
})(["position:fixed;top:0;left:0;width:90vw;left:5vw;top:0vh;height:90vh;-webkit-perspective:200px;perspective:200px;transition:0.5s opacity;opacity:", ";.hidden{overflow:hidden;}.womenWrapper{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;padding-bottom:5%;position:absolute;top:0;width:100%;}.womanItem{width:100%;background:transparent;display:flex;align-items:center;-webkit-transform:translate3d(0,0,0);.inner-relative{position:relative;display:inline-block !important;cursor:pointer;}.super-cta{position:absolute;right:0;top:-30px;font-size:2rem;text-transform:uppercase;color:black;-webkit-text-stroke:1px black;color:", ";display:none;}&.highlighted{.super-cta{display:block;}}&:nth-child(3n + 1){justify-content:flex-start;}&:nth-child(3n + 2){justify-content:center;text-align:center;}&:nth-child(3n + 3){justify-content:flex-end;text-align:right;}&:nth-child(4n + 1){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 2){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 3){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}&:nth-child(4n + 4){h1{color:", ";-webkit-text-stroke:2px ", ";}&.highlighted{h1{color:transparent;-webkit-text-stroke:2px ", ";}}}h1{text-transform:uppercase;font-size:14vw;display:block;margin-block-start:10px;margin-block-end:10px;height:auto;transition:0.5s all;line-height:0.7;margin-block-start:1rem;margin-block-end:1rem;&:hover{color:transparent;}}}"], function (props) {
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
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
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
var InnerWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WomenList__InnerWrap",
  componentId: "sc-3l0rl8-2"
})(["overflow:hidden;position:relative;margin-top:", ";"], function (props) {
  return props.order ? "calc((-100vh / 3) * ".concat(props.order, ");") : "0";
});

/***/ }),

/***/ "./pages/names.js":
/*!************************!*\
  !*** ./pages/names.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Women__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Women */ "./components/Women.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/pages/names.js";



var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Women__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/names.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/names.js */"./pages/names.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=names.js.map