/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/firebase2/auth.js":
/*!**********************************!*\
  !*** ./src/js/firebase2/auth.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// const db = firebaseApp.firestore();\r\n// const auth = firebaseApp.auth();\r\n\r\n\r\n\r\nconst auth = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n\r\nconst register = () => {\r\n    const email = document.getElementById('email').value\r\n    const password = document.getElementById('password').value\r\n\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(auth, email, password)\r\n    .then((res) => {\r\n        console.log(res.user)\r\n    })\r\n    .catch((err) => {\r\n        alert(err.message)\r\n        console.log(err.code)\r\n        console.log(err.message)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n\n//# sourceURL=webpack://paisajismo_munoza/./src/js/firebase2/auth.js?");

/***/ }),

/***/ "./src/js/firebase2/config.js":
/*!************************************!*\
  !*** ./src/js/firebase2/config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyDwAv4dPHvXBGTXWk9N4lemF9P6vPhmEXQ\",\r\n    authDomain: \"paisajismo-munoza.firebaseapp.com\",\r\n    databaseURL: \"https://paisajismo-munoza-default-rtdb.firebaseio.com\",\r\n    projectId: \"paisajismo-munoza\",\r\n    storageBucket: \"paisajismo-munoza.appspot.com\",\r\n    messagingSenderId: \"1013941730612\",\r\n    appId: \"1:1013941730612:web:c1d3e7c6ded8f33d30f961\",\r\n    measurementId: \"G-0B66K64DG6\"\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n\n//# sourceURL=webpack://paisajismo_munoza/./src/js/firebase2/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase2_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase2/config.js */ \"./src/js/firebase2/config.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _firebase2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase2/auth */ \"./src/js/firebase2/auth.js\");\n// // Import our custom CSS\r\n// import '../scss/styles.scss'\r\n\r\n// // Import all of Bootstrap's JS\r\n// import * as bootstrap from 'bootstrap'\r\n\r\n//Firebase stuff\r\n//config oject for the firebase project\r\n\r\n\r\n//The function to start using firebase stuff\r\n\r\n\r\n\r\n//init firebase app with the info on the firebaseConfig Object\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_firebase2_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\n\n//# sourceURL=webpack://paisajismo_munoza/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;