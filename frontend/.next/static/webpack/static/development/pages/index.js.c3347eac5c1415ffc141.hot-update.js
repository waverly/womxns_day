webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/helpers/index.js":
/*!*************************************!*\
  !*** ./components/helpers/index.js ***!
  \*************************************/
/*! exports provided: setBodyHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyHeight", function() { return setBodyHeight; });
var setBodyHeight = function setBodyHeight() {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      var womanListHeight = document.getElementById("womanList").scrollHeight; // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 1.5;
      document.body.style.height = womanListHeight + womanListHeight * 0.1 + "px";
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.c3347eac5c1415ffc141.hot-update.js.map