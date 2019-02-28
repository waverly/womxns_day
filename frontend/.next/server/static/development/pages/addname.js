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

/***/ "./components/CreateWoman.js":
/*!***********************************!*\
  !*** ./components/CreateWoman.js ***!
  \***********************************/
/*! exports provided: default, CREATE_WOMAN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_WOMAN_MUTATION", function() { return CREATE_WOMAN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
/* harmony import */ var _Women__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Women */ "./components/Women.js");

var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/CreateWoman.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query WOMAN_QUERY {\n    women {\n      id\n      name\n      slug\n      createdAt\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query WOMAN_QUERY($slug: String!) {\n    women(where: { slug: $slug }) {\n      id\n      name\n      slug\n      createdAt\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_WOMAN_MUTATION($name: String!, $slug: String!) {\n    createWoman(name: $name, slug: $slug) {\n      name\n      slug\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var CREATE_WOMAN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var QUERY_WOMEN = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2());
var WOMAN_QUERY_NO_ARGS = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3());

var CreateWoman =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateWoman, _Component);

  function CreateWoman() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateWoman);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateWoman)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;
      var slug = Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["genId"])(val);

      _this.setState({
        name: val,
        slug: slug
      });
    });

    return _this;
  }

  _createClass(CreateWoman, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: CREATE_WOMAN_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, function (createWoman, _ref) {
          var loading = _ref.loading,
              error = _ref.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                var totalRes, _ref3, data, res, _totalRes;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault(); // TODO:
                        // without refreshing page, the list of names does not refresh
                        // therefore u can enter the same name infinite times until u refresh the page

                        console.log(_this2.state.slug);
                        _context.next = 4;
                        return client.query({
                          query: WOMAN_QUERY_NO_ARGS
                        });

                      case 4:
                        totalRes = _context.sent;
                        console.log(totalRes.data);
                        _context.next = 8;
                        return client.query({
                          query: QUERY_WOMEN,
                          variables: {
                            slug: _this2.state.slug
                          }
                        });

                      case 8:
                        _ref3 = _context.sent;
                        data = _ref3.data;
                        // if the query for this name returns with any results,
                        console.log(data.women);
                        console.log(data.women.length);

                        if (!(data.women.length > 0)) {
                          _context.next = 18;
                          break;
                        }

                        console.log("not adding to db");
                        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/names#".concat(_this2.state.slug));

                        _this2.setState({
                          name: "",
                          slug: ""
                        });

                        _context.next = 29;
                        break;

                      case 18:
                        console.log("adding to db"); // only run query if data.women did not have any items in it

                        _context.next = 21;
                        return createWoman({
                          refetchQueries: [{
                            query: _Women__WEBPACK_IMPORTED_MODULE_10__["ALL_WOMEN_QUERY"]
                          }]
                        });

                      case 21:
                        res = _context.sent;
                        console.log(res);
                        _context.next = 25;
                        return client.query({
                          query: WOMAN_QUERY_NO_ARGS
                        });

                      case 25:
                        _totalRes = _context.sent;
                        console.log(_totalRes.data);
                        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/names#".concat(_this2.state.slug));

                        _this2.setState({
                          name: "",
                          slug: ""
                        });

                      case 29:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/names",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            className: "close",
            width: "31",
            height: "31",
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
            d: "M9.20022 24.7566L5.6216 21.178L11.5109 15.2887L5.88929 9.6671L9.66706 5.88934L15.2887 11.5109L21.1779 5.62164L24.7566 9.20027L18.8673 15.0896L24.5163 20.7386L20.7385 24.5163L15.0895 18.8673L9.20022 24.7566Z",
            fill: "black",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, "Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            // onFocus={this.props.onFocus}
            // onBlur={this.props.onBlur}
            type: "text",
            id: "name",
            name: "name",
            placeholder: "...",
            required: true,
            value: _this2.state.name,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            willdisplay: _this2.state.name.length > 0,
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
            d: "M23 19L23 19.75L23.75 19.75L23.75 19L23 19ZM0.469667 18.4697C0.176775 18.7626 0.176775 19.2374 0.469667 19.5303L5.24264 24.3033C5.53553 24.5962 6.01041 24.5962 6.3033 24.3033C6.59619 24.0104 6.59619 23.5355 6.3033 23.2426L2.06066 19L6.3033 14.7574C6.59619 14.4645 6.59619 13.9896 6.3033 13.6967C6.01041 13.4038 5.53553 13.4038 5.24264 13.6967L0.469667 18.4697ZM22.25 1.84178e-06L22.25 19L23.75 19L23.75 1.97292e-06L22.25 1.84178e-06ZM23 18.25L0.999998 18.25L0.999998 19.75L23 19.75L23 18.25Z",
            fill: "black",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }))))));
        });
      });
    }
  }]);

  return CreateWoman;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateWoman);


/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/InnerNames.js":
/*!**********************************!*\
  !*** ./components/InnerNames.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/InnerNames.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var OuterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InnerNames__OuterWrap",
  componentId: "njma8s-0"
})(["overflow:hidden;"]);

var _renderNamesWithId = function _renderNamesWithId(names, highlightedid) {
  if (names) {
    return names.map(function (woman, index) {
      var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["genId"])(woman.name); //   console.log(personId);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "data-nameid": personId,
        className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
        key: woman.id + personId + index,
        onClick: function onClick(e) {
          return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["_addHighlightClass"])(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "inner-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: function onClick(e) {
          return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["_onShareClick"])(e);
        },
        className: "super-cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, woman.name)));
    });
  }
};

var _renderNames = function _renderNames(names, highlightedid) {
  if (names) {
    return names.map(function (woman, index) {
      var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["genId"])(woman.name);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
        key: woman.id + personId + index,
        onClick: function onClick(e) {
          return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["_addHighlightClass"])(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "inner-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: function onClick(e) {
          return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["_onShareClick"])(e);
        },
        className: "super-cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, woman.name)));
    });
  }
}; // TODO: figure out why mouseMove is causing this component to rerender


var InnerNames =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.props.renderwithid ? _renderNamesWithId(this.props.names, this.props.highlightedid) : _renderNames(this.props.names, this.props.highlightedid));
    }
  }]);

  return InnerNames;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (InnerNames);

/***/ }),

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
  var data = _taggedTemplateLiteral(["\n  query ALL_WOMEN_QUERY {\n    women(orderBy: createdAt_DESC) {\n      id\n      name\n      createdAt\n      slug\n    }\n  }\n"]);

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
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        onMouseMove: this._onMouseMove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_WOMEN_QUERY,
        refetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
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
            lineNumber: 171
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
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
            lineNumber: 174
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
/* harmony import */ var _InnerNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InnerNames */ "./components/InnerNames.js");
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
      newlyAddedItem: null,
      highlightedId: null
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

          _this.setState({
            highlightedId: id
          }); // TODO: refactor to use refs instead


          var womenWrapper = document.getElementById("womanList");
          var scrollEl = document.querySelector("[data-nameid=".concat(id, "]")); // console.log(womenWrapper);
          // console.log(scrollEl);
          // debugger;

          if (scrollEl) {
            var elScrollHeight = scrollEl.offsetTop;
            var halfHeight = window.innerHeight / 2.5;
            var totalScrollHeight = elScrollHeight - halfHeight;
            document.querySelectorAll(".".concat(id)).forEach(function (el) {
              el.classList.add("highlighted");
            }); // console.log(totalScrollHeight);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      var bodyScrollTop = window.pageYOffset;

      _this.setState({
        scrollTop: bodyScrollTop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_throttleScroll", lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"](_this._onScroll, 100));

    return _this;
  }

  _createClass(WomenList, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"])();
      document.addEventListener("scroll", this._throttleScroll);
      window.addEventListener("resize", _helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"]);
      this.setState({
        scrollTop: window.pageYOffset
      });
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
      var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["WomenListWrap"], {
        formFocused: this.props.formFocused,
        style: {
          transform: "rotateY(".concat(this.props.x, "deg)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "bottom center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
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
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InnerNames__WEBPACK_IMPORTED_MODULE_5__["default"], {
        highlightedid: this.state.highlightedId,
        names: reversedNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
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
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InnerNames__WEBPACK_IMPORTED_MODULE_5__["default"], {
        highlightedid: this.state.highlightedId,
        names: reversedNames,
        renderwithid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "top center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InnerNames__WEBPACK_IMPORTED_MODULE_5__["default"], {
        highlightedid: this.state.highlightedId,
        names: reversedNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })))));
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
/*! exports provided: setBodyHeight, genId, _onShareClick, _addHighlightClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyHeight", function() { return setBodyHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genId", function() { return genId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_onShareClick", function() { return _onShareClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addHighlightClass", function() { return _addHighlightClass; });
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
var _onShareClick = function _onShareClick(e) {
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
};
var _addHighlightClass = function _addHighlightClass(e) {
  // extract data-nameid
  var dataId = e.currentTarget.dataset.nameid;
  document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
    return el.classList.add("highlighted");
  });
};

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1g9snaq-0"
})(["padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;position:fixed;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;left:0;bottom:0;.close{position:fixed;top:10px;right:10px;}label{display:block;margin-bottom:1rem;color:white;}input,textarea,select{padding:0.5rem;font-size:1rem;color:", ";font-size:16px;border:unset;&:focus{outline:0;border-bottom:2px solid ", ";}}input#name{width:70vw;border-bottom:2px solid black;font-size:4rem;color:black;font-size:4rem;font-family:\"Khand\",sans-serif;}input[type=\"submit\"]{width:auto;background:transparent;color:", ";border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border:2px solid;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border-radius:30%;border-collapse:separate;display:block;border:unset;}.wrapper{display:flex;flex-direction:row;width:100%;justify-content:space-between;label{width:70%;display:flex;flex-direction:column;align-items:flex-start;color:transparent;}input{width:100%;width:100%;background-color:transparent;::-webkit-input-placeholder{color:black;font-size:4rem;font-family:\"Khand\",sans-serif;}::-moz-placeholder{color:black;font-size:4rem;font-family:\"Khand\",sans-serif;}:-ms-input-placeholder{color:black;font-size:4rem;font-family:\"Khand\",sans-serif;}:-moz-placeholder{color:black;font-size:4rem;font-family:\"Khand\",sans-serif;}}}fieldset{border:0;padding:0;display:flex;&[disabled]{opacity:0.5;}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
}, loading);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Form__Button",
  componentId: "sc-1g9snaq-1"
})(["width:auto;background:transparent;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;font-size:2.5rem;font-weight:600;padding:0.5rem 1.2rem;border-radius:30%;border-collapse:separate;display:", ";display:block;position:fixed;bottom:10px;right:10px;&:focus{outline:unset;}span{margin-right:10px;text-transform:uppercase;font-family:\"Khand\",sans-serif;}svg{height:20px;}"], function (props) {
  return props.willdisplay ? "block" : "none";
});
/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/***/ "./pages/addname.js":
/*!**************************!*\
  !*** ./pages/addname.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateWoman__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateWoman */ "./components/CreateWoman.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/pages/addname.js";



var AddName = function AddName(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreateWoman__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddName);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/addname.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/addname.js */"./pages/addname.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=addname.js.map