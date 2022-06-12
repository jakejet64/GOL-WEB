/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
class Board {
    constructor(rows, cols) {
        this.boolBoard = [];
        for(let row = 0; row < rows; row++){
            const tempNewArr = [];
            for(let col = 0; col < cols; col++){
                tempNewArr.push(this.determineInitLife());
            }
            this.boolBoard.push(tempNewArr);
        }
    }

    getBoard(){
        return this.boolBoard;
    }

    stepForward(){
        const neigborArr = this.getNeighborArr();
        const newArr = [];
        for(let checkRow = 0; checkRow < this.boolBoard.length; checkRow++){
            let tempNewArr = [];
            for(let checkCol = 0; checkCol < this.boolBoard[checkRow].length; checkCol++){
                if(this.boolBoard[checkRow][checkCol]){ // if the cell is currently alive;
                    if(neigborArr[checkRow][checkCol] == 2 || neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // alive with two or 3 neighbors, survives
                    }else{
                        tempNewArr.push(false); // alive with too many/few neighbors, dies
                    }
                }else{ // if the cell is currently dead
                    if(neigborArr[checkRow][checkCol] == 3){
                        tempNewArr.push(true); // dead with three neighbors, comes alive
                    }else{
                        tempNewArr.push(false); // dead with !3 neighbors, stays dead
                    }
                }
            }
            newArr.push(tempNewArr);
        }        
        this.boolBoard = newArr;
    }

    getNeighborArr(){
        const ret = [];
        for(let row = 0; row < this.boolBoard.length; row++){
            const tempNewArr = [];
            for(let col = 0; col < this.boolBoard[row].length; col++){
                tempNewArr.push(this.getNeighbors(row, col));
            }
            ret.push(tempNewArr);
        }
        return ret;
    }

    getNeighbors(row, col){
        let ret = 0;
        // loop through the 9x9 surrounding the cell passed in
        for(let checkRow = row-1; checkRow < row+2; checkRow++){
            for(let checkCol = col-1; checkCol < col+2; checkCol++){
                // is in bounds
                if(checkRow < this.boolBoard.length && checkRow >= 0 &&
                    checkCol < this.boolBoard[checkRow].length && checkCol >= 0){
                        // isn't the cell itself
                        if(!(checkRow == row && checkCol == col)){
                            if(this.boolBoard[checkRow][checkCol]){
                                ret++;
                            }
                        }
                }
            }
        }
        return ret;
    }

    determineInitLife(){
        if(Math.random() > .7){
            return true;
        }else{
            return false;
        }
    }
}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ "./src/modules/Board.js");


const board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__["default"](40, 40);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (board);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.js */ "./src/modules/Board.js");



class UI {
    static loadHomepage(){
        UI.drawBoard();
        const player = setInterval(() => {
            _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].stepForward();
            UI.drawBoard();
        }, 200);
        _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].stepForward();
        console.log(_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getBoard());
    }

    static drawBoard(){
        const boardElem = document.querySelector('.board');
        const boolBoard = _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getBoard();

        // clear old board
        boardElem.textContent = '';

        boolBoard.forEach(row => {
            row.forEach(col => {
                const newBoardPiece = document.createElement('div');
                if(col){
                    newBoardPiece.classList.add('alive');
                }else{
                    newBoardPiece.classList.add('dead');
                }
                boardElem.appendChild(newBoardPiece);
            });
        });
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");


document.addEventListener('DOMContentLoaded', _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBLGtDQUFrQyw0Q0FBNEM7QUFDOUUsd0RBQXdEO0FBQ3hEO0FBQ0EsK0NBQStDO0FBQy9DLHFCQUFxQjtBQUNyQixnREFBZ0Q7QUFDaEQ7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBLCtDQUErQztBQUMvQyxxQkFBcUI7QUFDckIsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0EsNkJBQTZCLGtDQUFrQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRCxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRitCOztBQUUvQixrQkFBa0IsaURBQUs7O0FBRXZCLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNIOztBQUVmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBaUI7QUFDN0I7QUFDQSxTQUFTO0FBQ1QsUUFBUSwrREFBaUI7QUFDekIsb0JBQW9CLDREQUFjO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQWM7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlDOztBQUVqQyw4Q0FBOEMsbUVBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbC13ZWIvLi9zcmMvbW9kdWxlcy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nb2wtd2ViLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2wtd2ViL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sLXdlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbC13ZWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHMpIHtcbiAgICAgICAgdGhpcy5ib29sQm9hcmQgPSBbXTtcbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKyl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTmV3QXJyID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKXtcbiAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2godGhpcy5kZXRlcm1pbmVJbml0TGlmZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9vbEJvYXJkLnB1c2godGVtcE5ld0Fycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCb2FyZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5ib29sQm9hcmQ7XG4gICAgfVxuXG4gICAgc3RlcEZvcndhcmQoKXtcbiAgICAgICAgY29uc3QgbmVpZ2JvckFyciA9IHRoaXMuZ2V0TmVpZ2hib3JBcnIoKTtcbiAgICAgICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgICAgIGZvcihsZXQgY2hlY2tSb3cgPSAwOyBjaGVja1JvdyA8IHRoaXMuYm9vbEJvYXJkLmxlbmd0aDsgY2hlY2tSb3crKyl7XG4gICAgICAgICAgICBsZXQgdGVtcE5ld0FyciA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBjaGVja0NvbCA9IDA7IGNoZWNrQ29sIDwgdGhpcy5ib29sQm9hcmRbY2hlY2tSb3ddLmxlbmd0aDsgY2hlY2tDb2wrKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib29sQm9hcmRbY2hlY2tSb3ddW2NoZWNrQ29sXSl7IC8vIGlmIHRoZSBjZWxsIGlzIGN1cnJlbnRseSBhbGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYobmVpZ2JvckFycltjaGVja1Jvd11bY2hlY2tDb2xdID09IDIgfHwgbmVpZ2JvckFycltjaGVja1Jvd11bY2hlY2tDb2xdID09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKHRydWUpOyAvLyBhbGl2ZSB3aXRoIHR3byBvciAzIG5laWdoYm9ycywgc3Vydml2ZXNcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2goZmFsc2UpOyAvLyBhbGl2ZSB3aXRoIHRvbyBtYW55L2ZldyBuZWlnaGJvcnMsIGRpZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNleyAvLyBpZiB0aGUgY2VsbCBpcyBjdXJyZW50bHkgZGVhZFxuICAgICAgICAgICAgICAgICAgICBpZihuZWlnYm9yQXJyW2NoZWNrUm93XVtjaGVja0NvbF0gPT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2godHJ1ZSk7IC8vIGRlYWQgd2l0aCB0aHJlZSBuZWlnaGJvcnMsIGNvbWVzIGFsaXZlXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcE5ld0Fyci5wdXNoKGZhbHNlKTsgLy8gZGVhZCB3aXRoICEzIG5laWdoYm9ycywgc3RheXMgZGVhZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3QXJyLnB1c2godGVtcE5ld0Fycik7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICB0aGlzLmJvb2xCb2FyZCA9IG5ld0FycjtcbiAgICB9XG5cbiAgICBnZXROZWlnaGJvckFycigpe1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcbiAgICAgICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvb2xCb2FyZC5sZW5ndGg7IHJvdysrKXtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBOZXdBcnIgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ib29sQm9hcmRbcm93XS5sZW5ndGg7IGNvbCsrKXtcbiAgICAgICAgICAgICAgICB0ZW1wTmV3QXJyLnB1c2godGhpcy5nZXROZWlnaGJvcnMocm93LCBjb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldC5wdXNoKHRlbXBOZXdBcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZ2V0TmVpZ2hib3JzKHJvdywgY29sKXtcbiAgICAgICAgbGV0IHJldCA9IDA7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgOXg5IHN1cnJvdW5kaW5nIHRoZSBjZWxsIHBhc3NlZCBpblxuICAgICAgICBmb3IobGV0IGNoZWNrUm93ID0gcm93LTE7IGNoZWNrUm93IDwgcm93KzI7IGNoZWNrUm93Kyspe1xuICAgICAgICAgICAgZm9yKGxldCBjaGVja0NvbCA9IGNvbC0xOyBjaGVja0NvbCA8IGNvbCsyOyBjaGVja0NvbCsrKXtcbiAgICAgICAgICAgICAgICAvLyBpcyBpbiBib3VuZHNcbiAgICAgICAgICAgICAgICBpZihjaGVja1JvdyA8IHRoaXMuYm9vbEJvYXJkLmxlbmd0aCAmJiBjaGVja1JvdyA+PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ29sIDwgdGhpcy5ib29sQm9hcmRbY2hlY2tSb3ddLmxlbmd0aCAmJiBjaGVja0NvbCA+PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzbid0IHRoZSBjZWxsIGl0c2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIShjaGVja1JvdyA9PSByb3cgJiYgY2hlY2tDb2wgPT0gY29sKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib29sQm9hcmRbY2hlY2tSb3ddW2NoZWNrQ29sXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmVJbml0TGlmZSgpe1xuICAgICAgICBpZihNYXRoLnJhbmRvbSgpID4gLjcpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzJztcblxuY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoNDAsIDQwKTtcblxuZXhwb3J0IGRlZmF1bHQgYm9hcmQ7IiwiaW1wb3J0IGJvYXJkIGZyb20gJy4vU3RvcmFnZS5qcyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKXtcbiAgICAgICAgVUkuZHJhd0JvYXJkKCk7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGJvYXJkLnN0ZXBGb3J3YXJkKCk7XG4gICAgICAgICAgICBVSS5kcmF3Qm9hcmQoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgYm9hcmQuc3RlcEZvcndhcmQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRyYXdCb2FyZCgpe1xuICAgICAgICBjb25zdCBib2FyZEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICAgICAgY29uc3QgYm9vbEJvYXJkID0gYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgICAgICAvLyBjbGVhciBvbGQgYm9hcmRcbiAgICAgICAgYm9hcmRFbGVtLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgYm9vbEJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Qm9hcmRQaWVjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlmKGNvbCl7XG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkUGllY2UuY2xhc3NMaXN0LmFkZCgnYWxpdmUnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRQaWVjZS5jbGFzc0xpc3QuYWRkKCdkZWFkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkRWxlbS5hcHBlbmRDaGlsZChuZXdCb2FyZFBpZWNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9