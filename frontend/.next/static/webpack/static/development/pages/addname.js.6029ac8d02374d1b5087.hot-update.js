webpackHotUpdate("static/development/pages/addname.js",{

/***/ "./components/CreateWoman.js":
/*!***********************************!*\
  !*** ./components/CreateWoman.js ***!
  \***********************************/
/*! exports provided: default, CREATE_WOMAN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_WOMAN_MUTATION", function() { return CREATE_WOMAN_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
                var name, _ref3, data;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        name = _this2.state.name.toLowerCase();
                        _context.next = 4;
                        return client.query({
                          query: WOMAN_QUERY_NO_ARGS
                        });

                      case 4:
                        _ref3 = _context.sent;
                        data = _ref3.data;
                        console.log(data); // const { data } = await client.query({
                        //   query: QUERY_WOMEN,
                        //   variables: {
                        //     slug: this.state.slug
                        //   }
                        // });
                        // if the query for this name returns with any results,
                        // console.log(data.women);
                        // console.log(data.women.length);
                        // if (data.women.length > 0) {
                        //   const id = genId(name);
                        //   Router.push(`/names#${id}`);
                        //   this.setState({ name: "" });
                        // } else {
                        //   console.log("adding to db");
                        //   // only run query if data.women did not have any items in it
                        //   const res = await createWoman({
                        //     refetchQueries: [
                        //       {
                        //         query: ALL_WOMEN_QUERY
                        //       }
                        //     ]
                        //   });
                        //   const id = genId(name);
                        //   Router.push(`/names#${id}`);
                        //   this.setState({ name: "" });
                        // }

                      case 7:
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
              lineNumber: 104
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
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
              lineNumber: 106
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
            d: "M9.20022 24.7566L5.6216 21.178L11.5109 15.2887L5.88929 9.6671L9.66706 5.88934L15.2887 11.5109L21.1779 5.62164L24.7566 9.20027L18.8673 15.0896L24.5163 20.7386L20.7385 24.5163L15.0895 18.8673L9.20022 24.7566Z",
            fill: "black",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
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
              lineNumber: 126
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            willdisplay: _this2.state.name.length > 0,
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
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
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
            d: "M23 19L23 19.75L23.75 19.75L23.75 19L23 19ZM0.469667 18.4697C0.176775 18.7626 0.176775 19.2374 0.469667 19.5303L5.24264 24.3033C5.53553 24.5962 6.01041 24.5962 6.3033 24.3033C6.59619 24.0104 6.59619 23.5355 6.3033 23.2426L2.06066 19L6.3033 14.7574C6.59619 14.4645 6.59619 13.9896 6.3033 13.6967C6.01041 13.4038 5.53553 13.4038 5.24264 13.6967L0.469667 18.4697ZM22.25 1.84178e-06L22.25 19L23.75 19L23.75 1.97292e-06L22.25 1.84178e-06ZM23 18.25L0.999998 18.25L0.999998 19.75L23 19.75L23 18.25Z",
            fill: "black",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
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


/***/ })

})
//# sourceMappingURL=addname.js.6029ac8d02374d1b5087.hot-update.js.map