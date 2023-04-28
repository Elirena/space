"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/CardItem/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/CardItem/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardItem\": function() { return /* binding */ CardItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/components/CardItem/styled.ts\");\n/* harmony import */ var _StarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StarButton */ \"./src/components/StarButton/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Elirena\\\\Desktop\\\\proj-test\\\\spacex\\\\src\\\\components\\\\CardItem\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst CardItem = _ref => {\n  _s();\n\n  let {\n    card\n  } = _ref;\n  const {\n    missionName,\n    launchDate,\n    details,\n    links,\n    rocket: {\n      rocketName\n    }\n  } = card;\n  const date = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    const D = new Date(1000 * Number(launchDate));\n    return new Intl.DateTimeFormat('en-GB', {\n      dateStyle: 'long'\n    }).format(D);\n  }, [launchDate]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledTitle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n        children: missionName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 16\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_StarButton__WEBPACK_IMPORTED_MODULE_2__.StarButton, {\n        card: card\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: [launchDate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledDate, {\n        children: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }, undefined), rocketName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n        children: rocketName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined), details && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledDetails, {\n        children: \"Details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledText, {\n        children: details\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true), links.pressKit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.StyledPress, {\n      href: links.pressKit,\n      children: \"Press kit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(CardItem, \"/i5/KsEptyuA1SdhX3MWimUQvhU=\");\n\n_c = CardItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"CardItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkSXRlbS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBZU8sTUFBTVMsUUFBNEIsR0FBRyxRQUFhO0VBQUE7O0VBQUEsSUFBWjtJQUFFQztFQUFGLENBQVk7RUFDckQsTUFBTTtJQUNGQyxXQURFO0lBRUZDLFVBRkU7SUFHRkMsT0FIRTtJQUlGQyxLQUpFO0lBS0ZDLE1BQU0sRUFBRTtNQUFFQztJQUFGO0VBTE4sSUFNRk4sSUFOSjtFQVFELE1BQU1PLElBQUksR0FBR2hCLDhDQUFPLENBQUMsTUFBTTtJQUN2QixNQUFNaUIsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FBUyxPQUFPQyxNQUFNLENBQUNSLFVBQUQsQ0FBdEIsQ0FBVjtJQUNBLE9BQU8sSUFBSVMsSUFBSSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDO01BQUVDLFNBQVMsRUFBRTtJQUFiLENBQWpDLEVBQXVEQyxNQUF2RCxDQUE4RE4sQ0FBOUQsQ0FBUDtFQUNILENBSG1CLEVBR2pCLENBQUNOLFVBQUQsQ0FIaUIsQ0FBcEI7RUFLQyxvQkFDSSw4REFBQyxrREFBRDtJQUFBLHdCQUNJLDhEQUFDLGdEQUFEO01BQUEsd0JBQ0c7UUFBQSxVQUFPRDtNQUFQO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFESCxlQUVJLDhEQUFDLG1EQUFEO1FBQVksSUFBSSxFQUFFRDtNQUFsQjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBRko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREosZUFNSTtNQUFBLFdBQ0tFLFVBQVUsaUJBQ1AsOERBQUMsK0NBQUQ7UUFBQSxVQUFhSztNQUFiO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFGUixFQUlLRCxVQUFVLGlCQUNQO1FBQUEsVUFBT0E7TUFBUDtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBTFI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBTkosRUFjS0gsT0FBTyxpQkFDSjtNQUFBLHdCQUNJLDhEQUFDLGtEQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREosZUFJSSw4REFBQywrQ0FBRDtRQUFBLFVBQ0tBO01BREw7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUpKO0lBQUEsZ0JBZlIsRUF3QktDLEtBQUssQ0FBQ1csUUFBTixpQkFDRyw4REFBQyxnREFBRDtNQUFhLElBQUksRUFBRVgsS0FBSyxDQUFDVyxRQUF6QjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQXpCUjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFESjtBQWdDSCxDQTlDTTs7R0FBTWhCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkSXRlbS9pbmRleC50c3g/ZmZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZFdyYXBwZXIsIFN0eWxlZFRpdGxlLCBTdHlsZWREYXRlLCBTdHlsZWREZXRhaWxzLCBTdHlsZWRUZXh0LCBTdHlsZWRQcmVzcyB9IGZyb20gJy4vc3R5bGVkJztcclxuaW1wb3J0IHsgU3RhckJ1dHRvbiB9IGZyb20gJy4uL1N0YXJCdXR0b24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkSSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbWlzc2lvbk5hbWU6IHN0cmluZztcclxuICAgIGxhdW5jaERhdGU6IHN0cmluZztcclxuICAgIGRldGFpbHM6IHN0cmluZztcclxuICAgIHJvY2tldDoge1xyXG4gICAgICAgIHJvY2tldE5hbWU6IHN0cmluZztcclxuICAgIH1cclxuICAgIGxpbmtzOiB7XHJcbiAgICAgICAgcHJlc3NLaXQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSXRlbTogRkM8eyBjYXJkOkNhcmRJIH0+ID0gKHsgY2FyZH0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtaXNzaW9uTmFtZSxcclxuICAgICAgICBsYXVuY2hEYXRlLFxyXG4gICAgICAgIGRldGFpbHMsXHJcbiAgICAgICAgbGlua3MsXHJcbiAgICAgICAgcm9ja2V0OiB7IHJvY2tldE5hbWUgfVxyXG4gICAgfSA9IGNhcmQ7XHJcblxyXG4gICBjb25zdCBkYXRlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICBjb25zdCBEID0gbmV3IERhdGUoMTAwMCAqIE51bWJlcihsYXVuY2hEYXRlKSk7XHJcbiAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyBkYXRlU3R5bGU6ICdsb25nJ30pLmZvcm1hdChEKTtcclxuICAgfSwgW2xhdW5jaERhdGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgPHNwYW4+e21pc3Npb25OYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxTdGFyQnV0dG9uIGNhcmQ9e2NhcmR9IC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xhdW5jaERhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGF0ZT57ZGF0ZX08L1N0eWxlZERhdGU+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7cm9ja2V0TmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb2NrZXROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtkZXRhaWxzICYmXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bGlua3MucHJlc3NLaXQgJiZcclxuICAgICAgICAgICAgICAgIDxTdHlsZWRQcmVzcyBocmVmPXtsaW5rcy5wcmVzc0tpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlc3Mga2l0XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFByZXNzPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiU3R5bGVkV3JhcHBlciIsIlN0eWxlZFRpdGxlIiwiU3R5bGVkRGF0ZSIsIlN0eWxlZERldGFpbHMiLCJTdHlsZWRUZXh0IiwiU3R5bGVkUHJlc3MiLCJTdGFyQnV0dG9uIiwiQ2FyZEl0ZW0iLCJjYXJkIiwibWlzc2lvbk5hbWUiLCJsYXVuY2hEYXRlIiwiZGV0YWlscyIsImxpbmtzIiwicm9ja2V0Iiwicm9ja2V0TmFtZSIsImRhdGUiLCJEIiwiRGF0ZSIsIk51bWJlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImRhdGVTdHlsZSIsImZvcm1hdCIsInByZXNzS2l0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CardItem/index.tsx\n"));

/***/ })

});