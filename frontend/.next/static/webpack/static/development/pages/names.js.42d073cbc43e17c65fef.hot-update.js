webpackHotUpdate("static/development/pages/names.js",{

/***/ "./components/InnerNames.js":
/*!**********************************!*\
  !*** ./components/InnerNames.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/chrisconiglio/Repos/nk/womxns_day/frontend/components/InnerNames.js";

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






var OuterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "InnerNames__OuterWrap",
  componentId: "njma8s-0"
})(["overflow:hidden;padding-top:40vh;"]); // TODO: figure out why mouseMove is causing this component to rerender

var InnerNames =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InnerNames, _React$PureComponent);

  function InnerNames() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InnerNames);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InnerNames)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      copied: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderNamesWithId", function (names, highlightedid) {
      if (names) {
        return names.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["genId"])(woman);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-scrollid": personId,
            "data-nameid": personId,
            className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
            key: woman.id + personId + index,
            onClick: function onClick(e) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["_addHighlightClass"])(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], {
            text: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["frontend"], "/names#").concat(personId),
            onCopy: function onCopy() {
              return _this.setState({
                copied: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, _this.state.copied ? "Copied to clipboard" : "Share")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, woman)));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderNames", function (names, highlightedid) {
      if (names) {
        return names.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["genId"])(woman);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-nameid": personId,
            className: highlightedid === personId ? "womanItem ".concat(personId, " ").concat(highlightedid, " highlighted") : "womanItem ".concat(personId),
            key: woman.id + personId + index,
            onClick: function onClick(e) {
              return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["_addHighlightClass"])(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], {
            text: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["frontend"], "/names#").concat(personId),
            onCopy: function onCopy() {
              return _this.setState({
                copied: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, _this.state.copied ? "Copied to clipboard" : "Share")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, woman)));
        });
      }
    });

    return _this;
  }

  _createClass(InnerNames, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.props.renderwithid ? this._renderNamesWithId(this.props.names, this.props.highlightedid) : this._renderNames(this.props.names, this.props.highlightedid));
    }
  }]);

  return InnerNames;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (InnerNames);

/***/ })

})
//# sourceMappingURL=names.js.42d073cbc43e17c65fef.hot-update.js.map