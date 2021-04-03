webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");

var _jsxFileName = "C:\\Users\\tarab\\Desktop\\gallery\\components\\card.js";

function card(_ref) {
  var _ref$data = _ref.data,
      webformatURL = _ref$data.webformatURL,
      views = _ref$data.views,
      downloads = _ref$data.downloads,
      likes = _ref$data.likes,
      user = _ref$data.user,
      userImageURL = _ref$data.userImageURL;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-auto shadow-lg card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: webformatURL,
      className: "h-64 w-full object-cover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex px-8 pt-8 items-center relative",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: userImageURL,
        className: "w-24 rounded-full object-cover absolute -top-12 right-4 border-4 border-gray-200 profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: " my-3 text-gray-800 text-2xl ",
        children: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full px-8 pb-8 text-gray-700",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["EyeIcon"], {
          className: "w-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), " \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B: ", views]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["DownloadIcon"], {
          className: "w-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438: ", downloads]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "flex my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__["ThumbUpIcon"], {
          className: "w-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), " \u041B\u0430\u0439\u043A\u0438: ", likes]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbImNhcmQiLCJkYXRhIiwid2ViZm9ybWF0VVJMIiwidmlld3MiLCJkb3dubG9hZHMiLCJsaWtlcyIsInVzZXIiLCJ1c2VySW1hZ2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULE9BQXFGO0FBQUEsdUJBQXRFQyxJQUFzRTtBQUFBLE1BQTlEQyxZQUE4RCxhQUE5REEsWUFBOEQ7QUFBQSxNQUFoREMsS0FBZ0QsYUFBaERBLEtBQWdEO0FBQUEsTUFBekNDLFNBQXlDLGFBQXpDQSxTQUF5QztBQUFBLE1BQTlCQyxLQUE4QixhQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsSUFBdUIsYUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFlBQWlCLGFBQWpCQSxZQUFpQjtBQUNsRyxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFTCxZQUFWO0FBQXdCLGVBQVMsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxzQ0FBZjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFSyxZQURQO0FBRUUsaUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUErQ0Q7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBU0U7QUFBSyxlQUFTLEVBQUMsZ0NBQWY7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUMsV0FBaEI7QUFBQSxnQ0FDRSxxRUFBQyw4REFBRDtBQUFTLG1CQUFTLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERiwrREFDK0NILEtBRC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsbUVBQUQ7QUFBYyxtQkFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYseURBQ21EQyxTQURuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBLGdDQUNFLHFFQUFDLGtFQUFEO0FBQWEsbUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLHVDQUMrQ0MsS0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjg1NDYxYWM3NjRmNmYzYTBlYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV5ZUljb24sIFRodW1iVXBJY29uLCBEb3dubG9hZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZCh7ZGF0YSA6eyB3ZWJmb3JtYXRVUkwsIHZpZXdzLCBkb3dubG9hZHMsIGxpa2VzLCB1c2VyLCB1c2VySW1hZ2VVUkwgfX0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gc2hhZG93LWxnIGNhcmRcIj5cclxuICAgICAgPGltZyBzcmM9e3dlYmZvcm1hdFVSTH0gY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB4LTggcHQtOCBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3VzZXJJbWFnZVVSTH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMjQgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBhYnNvbHV0ZSAtdG9wLTEyIHJpZ2h0LTQgYm9yZGVyLTQgYm9yZGVyLWdyYXktMjAwIHByb2ZpbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBteS0zIHRleHQtZ3JheS04MDAgdGV4dC0yeGwgXCI+e3VzZXJ9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTggcGItOCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBteS0yXCI+XHJcbiAgICAgICAgICA8RXllSWNvbiBjbGFzc05hbWU9XCJ3LTQgbXItMlwiIC8+INCf0YDQvtGB0LzQvtGC0YDRizoge3ZpZXdzfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG15LTJcIj5cclxuICAgICAgICAgIDxEb3dubG9hZEljb24gY2xhc3NOYW1lPVwidy00IG1yLTJcIiAvPiDQl9Cw0LPRgNGD0LfQutC4OiB7ZG93bmxvYWRzfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG15LTJcIj5cclxuICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJ3LTQgbXItMlwiIC8+INCb0LDQudC60Lg6IHtsaWtlc31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9