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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
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
    }, this), images.length === 0 && !isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "flex justify-center items-center text-gray-500 w-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["EmojiSadIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), " \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-8 sm:p-4 mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16",
      children: images.map(function (obj) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: obj
        }, obj.id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(index, "O9Iot8JDFSA/bxU3+14d6OR3Wxg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRlcm0iLCJzZXRUZXJtIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJoaXRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImxlbmd0aCIsIm1hcCIsIm9iaiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDdkJDLE1BRHVCO0FBQUEsTUFDZkMsU0FEZTs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUV2QkcsU0FGdUI7QUFBQSxNQUVaQyxZQUZZOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3ZCSyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLDZFQUNrRUgsSUFEbEUsd0JBRUgsQ0FBQ0EsSUFBRCxDQUZHLENBQUwsQ0FJR0ksSUFKSCxDQUlRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBSlIsRUFLR0YsSUFMSCxDQUtRLFVBQUNHLElBQUQsRUFBVTtBQUNkVixlQUFTLENBQUNVLElBQUksQ0FBQ0MsSUFBTixDQUFUO0FBQ0FULGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FSSCxXQVNTLFVBQUNVLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FUVDtBQVVELEdBWFEsQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBUSxnQkFBVSxFQUFFLG9CQUFDRyxJQUFEO0FBQUEsZUFBVVgsT0FBTyxDQUFDVyxJQUFELENBQWpCO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBSUdoQixNQUFNLENBQUNpQixNQUFQLEtBQWtCLENBQWxCLElBQXVCLENBQUNmLFNBQXhCLGdCQUNDO0FBQUksZUFBUyxFQUFDLHVEQUFkO0FBQUEsOEJBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQUtDO0FBQUssZUFBUyxFQUFDLDZHQUFmO0FBQUEsZ0JBQ0dGLE1BQU0sQ0FBQ2tCLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsNEJBQ1YscUVBQUMsd0RBQUQ7QUFBTSxjQUFJLEVBQUVBO0FBQVosV0FBc0JBLEdBQUcsQ0FBQ0MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQSxrQkFERjtBQWtCRDs7R0FuQ3VCdEIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYzNhN2NmZDcxMmRjNjFkOTUwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgeyBWaWV3R3JpZEljb24sIEVtb2ppU2FkSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9rZXk9MjA5OTA1NjYtYTczNjQyN2IwNDg1OTJkNDUwZmUzMGI5MiZxPSR7dGVybX0maW1hZ2VfdHlwZT1waG90b2AsXHJcbiAgICAgIFt0ZXJtXVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlcyhkYXRhLmhpdHMpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxWaWV3R3JpZEljb24gY2xhc3NOYW1lPVwidy0xNiB0ZXh0LWJsdWUtNDAwIHJlbGF0aXZlIG15LTYgbXgtYXV0byBzbTptLTEyIFwiIC8+XHJcbiAgICAgIDxTZWFyY2ggU2VhcmNoVGV4dD17KHRleHQpID0+IHNldFRlcm0odGV4dCl9IC8+XHJcblxyXG4gICAgICB7aW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgPEVtb2ppU2FkSWNvbiAvPiDQndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggc206cC00IG14LWF1dG8gY29udGFpbmVyIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLXgtOCBnYXAteS0xNlwiPlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoKG9iaikgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBkYXRhPXtvYmp9IGtleT17b2JqLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=