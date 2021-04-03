webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\tarab\\Desktop\\gallery\\pages\\index.js",
    _s = $RefreshSig$();





function index() {
  _s();

  var _this = this;

  var REACT_APP_PIXABAY_KEY = process.env.REACT_APP_PIXABAY_KEY;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      images = _useState[0],
      setImages = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch("https://pixabay.com/api/?key=".concat(PIXABAY_KEY, "&q=").concat(term, "&image_type=photo"), [term]).then(function (res) {
      return res.json();
    }).then(function (data) {
      setImages(data.hits);
      setIsLoading(false);
    })["catch"](function (error) {
      return console.log(error);
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["ViewGridIcon"], {
      className: "w-16 text-blue-400 relative my-6 mx-auto sm:m-12 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
      SearchText: function SearchText(text) {
        return getStaticProps(text);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-8 sm:p-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16",
      children: images.map(function (obj) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: obj
        }, obj.id, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(index, "QTxdCZDTgdqXFXg8wEY+OyZ73wo=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJSRUFDVF9BUFBfUElYQUJBWV9LRVkiLCJwcm9jZXNzIiwiZW52IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0ZXJtIiwic2V0VGVybSIsInVzZUVmZmVjdCIsImZldGNoIiwiUElYQUJBWV9LRVkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoaXRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImdldFN0YXRpY1Byb3BzIiwibWFwIiwib2JqIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxNQUN0QkMscUJBRHNCLEdBQ0lDLE9BQU8sQ0FBQ0MsR0FEWixDQUN0QkYscUJBRHNCOztBQUFBLGtCQUVGRyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRXZCQyxNQUZ1QjtBQUFBLE1BRWZDLFNBRmU7O0FBQUEsbUJBR0lGLHNEQUFRLENBQUMsSUFBRCxDQUhaO0FBQUEsTUFHdkJHLFNBSHVCO0FBQUEsTUFHWkMsWUFIWTs7QUFBQSxtQkFJTkosc0RBQVEsQ0FBQyxFQUFELENBSkY7QUFBQSxNQUl2QkssSUFKdUI7QUFBQSxNQUlqQkMsT0FKaUI7O0FBTTlCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyx3Q0FDNkJDLFdBRDdCLGdCQUM4Q0osSUFEOUMsd0JBRUgsQ0FBQ0EsSUFBRCxDQUZHLENBQUwsQ0FJR0ssSUFKSCxDQUlRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSlIsRUFLR0YsSUFMSCxDQUtRLFVBQUNHLElBQUQsRUFBVTtBQUNkWCxlQUFTLENBQUNXLElBQUksQ0FBQ0MsSUFBTixDQUFUO0FBQ0FWLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FSSCxXQVNTLFVBQUNXLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUVDtBQVVELEdBWFEsQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBUSxnQkFBVSxFQUFFLG9CQUFDRyxJQUFEO0FBQUEsZUFBVUMsY0FBYyxDQUFDRCxJQUFELENBQXhCO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUMsNkdBQWY7QUFBQSxnQkFDR2pCLE1BQU0sQ0FBQ21CLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsNEJBQ1YscUVBQUMsd0RBQUQ7QUFBTSxjQUFJLEVBQUVBO0FBQVosV0FBc0JBLEdBQUcsQ0FBQ0MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQVdEOztHQTdCdUIxQixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkOWJjNzBlYWM2YzRjNTcxYzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XHJcbmltcG9ydCB7IFZpZXdHcmlkSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgeyBSRUFDVF9BUFBfUElYQUJBWV9LRVkgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0ke1BJWEFCQVlfS0VZfSZxPSR7dGVybX0maW1hZ2VfdHlwZT1waG90b2AsXHJcbiAgICAgIFt0ZXJtXVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlcyhkYXRhLmhpdHMpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxWaWV3R3JpZEljb24gY2xhc3NOYW1lPVwidy0xNiB0ZXh0LWJsdWUtNDAwIHJlbGF0aXZlIG15LTYgbXgtYXV0byBzbTptLTEyIFwiIC8+XHJcbiAgICAgIDxTZWFyY2ggU2VhcmNoVGV4dD17KHRleHQpID0+IGdldFN0YXRpY1Byb3BzKHRleHQpfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBzbTpwLTQgbXgtYXV0byBjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAteC04IGdhcC15LTE2XCI+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKG9iaikgPT4gKFxyXG4gICAgICAgICAgPENhcmQgZGF0YT17b2JqfSBrZXk9e29iai5pZH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=