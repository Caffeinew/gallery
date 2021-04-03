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

  var PIXABAY_KEY = process.env.PIXABAY_KEY;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJQSVhBQkFZX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRlcm0iLCJzZXRUZXJtIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoaXRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImdldFN0YXRpY1Byb3BzIiwibWFwIiwib2JqIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxNQUN0QkMsV0FEc0IsR0FDTkMsT0FBTyxDQUFDQyxHQURGLENBQ3RCRixXQURzQjs7QUFBQSxrQkFFRkcsc0RBQVEsQ0FBQyxFQUFELENBRk47QUFBQSxNQUV2QkMsTUFGdUI7QUFBQSxNQUVmQyxTQUZlOztBQUFBLG1CQUdJRixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR3ZCRyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7O0FBQUEsbUJBSU5KLHNEQUFRLENBQUMsRUFBRCxDQUpGO0FBQUEsTUFJdkJLLElBSnVCO0FBQUEsTUFJakJDLE9BSmlCOztBQU05QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssd0NBQzZCWCxXQUQ3QixnQkFDOENRLElBRDlDLHdCQUVILENBQUNBLElBQUQsQ0FGRyxDQUFMLENBSUdJLElBSkgsQ0FJUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQUpSLEVBS0dGLElBTEgsQ0FLUSxVQUFDRyxJQUFELEVBQVU7QUFDZFYsZUFBUyxDQUFDVSxJQUFJLENBQUNDLElBQU4sQ0FBVDtBQUNBVCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBUkgsV0FTUyxVQUFDVSxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBVFQ7QUFVRCxHQVhRLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQWMsZUFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQVEsZ0JBQVUsRUFBRSxvQkFBQ0csSUFBRDtBQUFBLGVBQVVDLGNBQWMsQ0FBQ0QsSUFBRCxDQUF4QjtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFDLDZHQUFmO0FBQUEsZ0JBQ0doQixNQUFNLENBQUNrQixHQUFQLENBQVcsVUFBQ0MsR0FBRDtBQUFBLDRCQUNWLHFFQUFDLHdEQUFEO0FBQU0sY0FBSSxFQUFFQTtBQUFaLFdBQXNCQSxHQUFHLENBQUNDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUEsa0JBREY7QUFXRDs7R0E3QnVCekIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNWI3MTFlMWI1NDUxYjIxZjMxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgeyBWaWV3R3JpZEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHsgUElYQUJBWV9LRVkgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0ke1BJWEFCQVlfS0VZfSZxPSR7dGVybX0maW1hZ2VfdHlwZT1waG90b2AsXHJcbiAgICAgIFt0ZXJtXVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlcyhkYXRhLmhpdHMpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxWaWV3R3JpZEljb24gY2xhc3NOYW1lPVwidy0xNiB0ZXh0LWJsdWUtNDAwIHJlbGF0aXZlIG15LTYgbXgtYXV0byBzbTptLTEyIFwiIC8+XHJcbiAgICAgIDxTZWFyY2ggU2VhcmNoVGV4dD17KHRleHQpID0+IGdldFN0YXRpY1Byb3BzKHRleHQpfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBzbTpwLTQgbXgtYXV0byBjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAteC04IGdhcC15LTE2XCI+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKG9iaikgPT4gKFxyXG4gICAgICAgICAgPENhcmQgZGF0YT17b2JqfSBrZXk9e29iai5pZH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=