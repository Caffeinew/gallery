webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
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
    fetch("https://pixabay.com/api/?key=20990566-a736427b048592d450fe30b92&q=".concat(term, "&image_type=photo"), [term]).then(function (res) {
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
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
      SearchText: function SearchText(text) {
        return setTerm(text);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-8 sm:p-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16",
      children: images.length != 0 && !isLoading ? images.map(function (obj) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: obj
        }, obj.id, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 34
        }, _this);
      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "flex justify-center items-center text-gray-500 w-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["EmojiSadIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 83
        }, this), "  \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRlcm0iLCJzZXRUZXJtIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoaXRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImxlbmd0aCIsIm1hcCIsIm9iaiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDdkJDLE1BRHVCO0FBQUEsTUFDZkMsU0FEZTs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUV2QkcsU0FGdUI7QUFBQSxNQUVaQyxZQUZZOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3ZCSyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLDZFQUNrRUgsSUFEbEUsd0JBRUgsQ0FBQ0EsSUFBRCxDQUZHLENBQUwsQ0FJR0ksSUFKSCxDQUlRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSlIsRUFLR0YsSUFMSCxDQUtRLFVBQUNHLElBQUQsRUFBVTtBQUNkVixlQUFTLENBQUNVLElBQUksQ0FBQ0MsSUFBTixDQUFUO0FBQ0FULGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FSSCxXQVNTLFVBQUNVLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUVDtBQVVELEdBWFEsQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBUSxnQkFBVSxFQUFFLG9CQUFDRyxJQUFEO0FBQUEsZUFBVVgsT0FBTyxDQUFDVyxJQUFELENBQWpCO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUMsNkdBQWY7QUFBQSxnQkFDSWhCLE1BQU0sQ0FBQ2lCLE1BQVAsSUFBaUIsQ0FBakIsSUFBc0IsQ0FBQ2YsU0FBdkIsR0FDRUYsTUFBTSxDQUFDa0IsR0FBUCxDQUFXLFVBQUNDLEdBQUQ7QUFBQSw0QkFBVSxxRUFBQyx3REFBRDtBQUFNLGNBQUksRUFBRUE7QUFBWixXQUFzQkEsR0FBRyxDQUFDQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFWO0FBQUEsT0FBWCxDQURGLGdCQUdFO0FBQUksaUJBQVMsRUFBQyx1REFBZDtBQUFBLGdDQUFzRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQWFEOztHQTlCdUJ0QixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkNmY4OWM1MDY3NjAyZTJmNDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XHJcbmltcG9ydCB7IFZpZXdHcmlkSWNvbiwgRW1vamlTYWRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9rZXk9MjA5OTA1NjYtYTczNjQyN2IwNDg1OTJkNDUwZmUzMGI5MiZxPSR7dGVybX0maW1hZ2VfdHlwZT1waG90b2AsXHJcbiAgICAgIFt0ZXJtXVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlcyhkYXRhLmhpdHMpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFZpZXdHcmlkSWNvbiBjbGFzc05hbWU9XCJ3LTE2IHRleHQtYmx1ZS00MDAgcmVsYXRpdmUgbXktNiBteC1hdXRvIHNtOm0tMTIgXCIgLz5cclxuICAgICAgPFNlYXJjaCBTZWFyY2hUZXh0PXsodGV4dCkgPT4gc2V0VGVybSh0ZXh0KX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggc206cC00IG14LWF1dG8gY29udGFpbmVyIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLXgtOCBnYXAteS0xNlwiPlxyXG4gICAgICAgIHsgaW1hZ2VzLmxlbmd0aCAhPSAwICYmICFpc0xvYWRpbmcgPyBcclxuICAgICAgICAgICAgaW1hZ2VzLm1hcCgob2JqKSA9PiAoPENhcmQgZGF0YT17b2JqfSBrZXk9e29iai5pZH0gLz4pKSBcclxuICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIHctZnVsbFwiPjxFbW9qaVNhZEljb24gLz4gINCd0LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9oMT4pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==