webpackHotUpdate("static/development/pages/addname.js",{

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
      var womanListHeight = document.getElementById("womanList").scrollHeight; // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list

      var halfHeight = window.innerHeight / 1.5;
      console.log("in set body height ", womanListHeight);
      document.body.style.height = womanListHeight + womanListHeight * 0.05 + "px";
    }
  }
};
var genId = function genId(name) {
  return name.replace(/\s/g, "_").replace(/\W/ig, "");
};
/* export const genId = name => {
  const id = name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();
  return id;
}; */

var _addHighlightClass = function _addHighlightClass(e) {
  // extract data-nameid
  var dataId = e.currentTarget.dataset.nameid;
  document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
    return el.classList.add("highlighted");
  });
};

/***/ })

})
//# sourceMappingURL=addname.js.6bb050e4bf0bc36f259a.hot-update.js.map