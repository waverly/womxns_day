webpackHotUpdate("static/development/pages/addname.js",{

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
//# sourceMappingURL=addname.js.c3f68e963ffa4dd88a3d.hot-update.js.map