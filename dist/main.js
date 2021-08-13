/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_game__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_player__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"gameCanvas\");\n  var ctx = canvas.getContext(\"2d\");\n  canvas.width = 960;\n  canvas.height = 480; // backgroundImg.onload = function(){\n  //     ctx.drawImage(backgroundImg, 0, 0);\n  // }\n\n  var player = new (_scripts_player__WEBPACK_IMPORTED_MODULE_1___default())();\n  console.log(player);\n  var game = new (_scripts_game__WEBPACK_IMPORTED_MODULE_0___default())(ctx, player);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFDcEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUgsRUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdBQWUsR0FBZjtBQUNBSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsR0FBaEIsQ0FMb0QsQ0FNcEQ7QUFDQTtBQUNBOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJVCx3REFBSixFQUFmO0FBQ0FVLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsTUFBTUcsSUFBSSxHQUFHLElBQUliLHNEQUFKLENBQVNNLEdBQVQsRUFBY0ksTUFBZCxDQUFiO0FBQ0gsQ0FaRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Nub3dicmF3bC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllclwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gOTYwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA0ODA7XG4gICAgLy8gYmFja2dyb3VuZEltZy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmRJbWcsIDAsIDApO1xuICAgIC8vIH1cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBwbGF5ZXIpXG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiUGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar bgImg = new Image();\nbgImg.src = \"./src/assets/background.png\";\n\nvar Game = function Game(ctx, player) {\n  _classCallCheck(this, Game);\n\n  this.ctx = ctx;\n  this.player = player;\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbm93YnJhd2wvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiYmdJbWciLCJJbWFnZSIsInNyYyIsIkdhbWUiLCJjdHgiLCJwbGF5ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFDQUQsS0FBSyxDQUFDRSxHQUFOLEdBQVksNkJBQVo7O0lBRU1DLEksR0FDRixjQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF3QjtBQUFBOztBQUNwQixPQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxDOztBQUlMQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmdJbWcgPSBuZXcgSW1hZ2UoKVxuYmdJbWcuc3JjID0gXCIuL3NyYy9hc3NldHMvYmFja2dyb3VuZC5wbmdcIlxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHBsYXllcil7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function Player() {\n  _classCallCheck(this, Player);\n\n  var playerBear = new Image();\n  playerBear.src = \"./src/assets/bear.png\";\n  this.x = 200;\n  this.y = 200;\n  this.height = 40;\n  this.width = 20;\n};\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbm93YnJhd2wvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwbGF5ZXJCZWFyIiwiSW1hZ2UiLCJzcmMiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7SUFBTUEsTSxHQUNGLGtCQUFhO0FBQUE7O0FBQ1QsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBbkI7QUFDQUQsRUFBQUEsVUFBVSxDQUFDRSxHQUFYLEdBQWlCLHVCQUFqQjtBQUNBLE9BQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxPQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0gsQzs7QUFLTEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc3QgcGxheWVyQmVhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXJCZWFyLnNyYyA9IFwiLi9zcmMvYXNzZXRzL2JlYXIucG5nXCJcbiAgICAgICAgdGhpcy54ID0gMjAwO1xuICAgICAgICB0aGlzLnkgPSAyMDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAyMDtcbiAgICB9XG5cbiAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3BsYXllci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbm93YnJhd2wvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;