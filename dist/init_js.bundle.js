"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["init_js"],{

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./pkg/wasm_test_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg__WEBPACK_IMPORTED_MODULE_0__]);\n_pkg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nlet result = _pkg__WEBPACK_IMPORTED_MODULE_0__.add(1, 2);\n\nconsole.log(result);\n});\n\n//# sourceURL=webpack:///./init.js?");

/***/ }),

/***/ "./pkg/wasm_test_bg.js":
/*!*****************************!*\
  !*** ./pkg/wasm_test_bg.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_test_bg.wasm */ \"./pkg/wasm_test_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n/**\n* @param {number} n1\n* @param {number} n2\n* @returns {number}\n*/\nfunction add(n1, n2) {\n    var ret = _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.add(n1, n2);\n    return ret;\n}\n\n\n});\n\n//# sourceURL=webpack:///./pkg/wasm_test_bg.js?");

/***/ }),

/***/ "./pkg/wasm_test_bg.wasm":
/*!*******************************!*\
  !*** ./pkg/wasm_test_bg.wasm ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.v(exports, module.id, \"bc3b8e53f4ba5589e727\");\n\n//# sourceURL=webpack:///./pkg/wasm_test_bg.wasm?");

/***/ })

}]);