webpackHotUpdate("static/development/pages/names.js",{

/***/ "./components/helpers/index.js":
/*!*************************************!*\
  !*** ./components/helpers/index.js ***!
  \*************************************/
/*! exports provided: setBodyHeight, genId, _addHighlightClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyHeight", function() { return setBodyHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genId", function() { return genId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addHighlightClass", function() { return _addHighlightClass; });
var queryString = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var setBodyHeight = function setBodyHeight() {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      var womanListHeight = document.getElementById("womanList").scrollHeight;
      document.body.style.height = womanListHeight + womanListHeight * 0.05 + "px";
    }
  }
};
var genId = function genId(name) {
  return name.replace(/\s/g, "_").replace(/\W/gi, "").toLowerCase();
};
var _addHighlightClass = function _addHighlightClass(e) {
  // extract data-nameid
  var dataId = e.currentTarget.dataset.nameid;
  document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
    return el.classList.add("highlighted");
  });
};

/***/ })

})
//# sourceMappingURL=names.js.253e3cd56c5d216e6c4b.hot-update.js.map