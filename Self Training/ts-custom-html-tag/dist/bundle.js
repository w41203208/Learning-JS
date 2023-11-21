/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/tool.ts":
/*!************************!*\
  !*** ./src/js/tool.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tool = void 0;
var CreateTool = function () { };
CreateTool.prototype = {
    getEl: function (context) {
        var text = this.stringSplit(context);
        switch (text[0]) {
            case 'id':
                return document.getElementById(text[1]);
            case 'class':
                return document.getElementsByClassName(text[1])[0];
        }
    },
    stringSplit: function (context) {
        var test;
        if (/(id|class):[\w]+/.test(context)) {
            test = context.split(':');
        }
        return test;
    },
};
exports.Tool = new CreateTool();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tool_1 = __webpack_require__(/*! ./js/tool */ "./src/js/tool.ts");
console.log(tool_1.Tool.getEl('id:test'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsWUFBWTs7Ozs7OztVQ3RCWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyxtQ0FBVztBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWN1c3RvbS1odG1sLXRhZy8uL3NyYy9qcy90b29sLnRzIiwid2VicGFjazovL3RzLWN1c3RvbS1odG1sLXRhZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1jdXN0b20taHRtbC10YWcvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Ub29sID0gdm9pZCAwO1xyXG52YXIgQ3JlYXRlVG9vbCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuQ3JlYXRlVG9vbC5wcm90b3R5cGUgPSB7XHJcbiAgICBnZXRFbDogZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuc3RyaW5nU3BsaXQoY29udGV4dCk7XHJcbiAgICAgICAgc3dpdGNoICh0ZXh0WzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2lkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZXh0WzFdKTtcclxuICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGV4dFsxXSlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0cmluZ1NwbGl0OiBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgIHZhciB0ZXN0O1xyXG4gICAgICAgIGlmICgvKGlkfGNsYXNzKTpbXFx3XSsvLnRlc3QoY29udGV4dCkpIHtcclxuICAgICAgICAgICAgdGVzdCA9IGNvbnRleHQuc3BsaXQoJzonKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlc3Q7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnRzLlRvb2wgPSBuZXcgQ3JlYXRlVG9vbCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRvb2xfMSA9IHJlcXVpcmUoXCIuL2pzL3Rvb2xcIik7XHJcbmNvbnNvbGUubG9nKHRvb2xfMS5Ub29sLmdldEVsKCdpZDp0ZXN0JykpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=