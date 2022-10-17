"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listProducts",{

/***/ "./pages/listProducts.js":
/*!*******************************!*\
  !*** ./pages/listProducts.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ editProduto; }\n/* harmony export */ });\n/* harmony import */ var D_Faculdade_Projetos_Atualizado2_GestOn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Faculdade_Projetos_Atualizado2_GestOn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Faculdade_Projetos_Atualizado2_GestOn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_carrozel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/carrozel */ \"./components/carrozel.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_navbarLogOnFornecedor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbarLogOnFornecedor */ \"./components/navbarLogOnFornecedor.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction goCreateProduct() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/createProduct\");\n}\nfunction editProduto() {\n    _s();\n    var ref = UseAuth(), user = ref.user, signin = ref.signin, signout = ref.signout;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([\n        1,\n        2\n    ]), produtos = ref1[0], setProdutos = ref1[1];\n    var options = {\n        method: \"GET\",\n        url: \"http://localhost:3000/api/produto\"\n    };\n    function loadProduct() {\n        return _loadProduct.apply(this, arguments);\n    }\n    function _loadProduct() {\n        _loadProduct = _asyncToGenerator(D_Faculdade_Projetos_Atualizado2_GestOn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_Faculdade_Projetos_Atualizado2_GestOn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        axios__WEBPACK_IMPORTED_MODULE_6___default().request(options).then(function(response) {\n                            console.log(response.data);\n                            setProdutos(response.data);\n                            document.getElementById(\"lista_produto\").hidden = false;\n                        }).catch(function(error) {\n                            console.error(error);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadProduct.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navbarLogOnFornecedor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 39,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 39,\n                columnNumber: 25\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 39,\n                columnNumber: 31\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Center, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    fontWeight: 300,\n                    fontSize: {\n                        base: \"2xl\",\n                        sm: \"4xl\",\n                        md: \"6xl\"\n                    },\n                    lineHeight: \"110%\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                        as: \"span\",\n                        color: \"green.400\",\n                        children: \"Sugest\\xf5es de Produtos\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"150px\",\n                    paddingRight: \"2px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                rounded: \"3xl\",\n                                padding: \"5px\",\n                                placeholder: \"Pesquise por produtos\",\n                                _placeholder: {\n                                    opacity: 1,\n                                    color: \"gray.500\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                rounded: \"2xl\",\n                                ml: \"15px\",\n                                padding: \"20px\",\n                                onClick: function() {\n                                    return goCreateProduct();\n                                },\n                                children: \"Cadastrar Produto Inexistente\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        rounded: \"2xl\",\n                        ml: \"15px\",\n                        padding: \"20px\",\n                        onClick: function() {\n                            return loadProduct();\n                        },\n                        children: \"Listar produtos\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        id: \"lista_produto\",\n                        hidden: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_carrozel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            produtos: produtos\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Faculdade\\\\Projetos\\\\Atualizado2\\\\GestOn\\\\pages\\\\listProducts.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(editProduto, \"SkRKQ6kz8HaCCJWenIof+UhSyWs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRTsyQ0FBTTNDLGVBQWUsRUFBRTtpQ0FBQTswQ0FBRywrQkFFbEY7Ozs7O29DQUFTOzs7Ozs7NEJBQ047a0NBQ1AsOERBQUN3QixJQUFFOzs7OzRCQUFHO2tDQUNOLDhEQUFDL0Isb0RBQU07d0JBQUM0QyxPQUFPLEVBQUMsS0FBSzt3QkFBQ0ssRUFBRSxFQUFDLE1BQU07d0JBQUNKLE9BQU8sRUFBQyxNQUFNO3dCQUFDSyxPQUFPLEVBQUU7bUNBQU0vQixXQUFXLEVBQUU7eUJBQUE7a0NBQUcsaUJBRTlFOzs7Ozs0QkFBUztrQ0FDVCw4REFBQ3FCLEtBQUc7d0JBQUNXLEVBQUUsRUFBQyxlQUFlO3dCQUFDdkIsTUFBTTtrQ0FDMUIsNEVBQUMzQiw0REFBYTs0QkFBQ2EsUUFBUSxFQUFFQSxRQUFROzs7OztnQ0FBSTs7Ozs7NEJBQ25DOzs7Ozs7b0JBQ0o7O29CQUNQLENBQ047Q0FDSjtHQXJEdUJMLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdFByb2R1Y3RzLmpzPzdkNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENlbnRlcixcclxuICAgIEhlYWRpbmcsXHJcbiAgICBUZXh0LFxyXG4gICAgRmxleCxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgTGlzdGFDYXJyb3plbCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnJvemVsJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5hdmJhckxvZ09uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyTG9nT25Gb3JuZWNlZG9yJztcclxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gZ29DcmVhdGVQcm9kdWN0KCkge1xyXG4gICAgUm91dGVyLnB1c2goJy9jcmVhdGVQcm9kdWN0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRQcm9kdXRvKCkge1xyXG5cclxuICAgIGNvbnN0IHsgdXNlciwgc2lnbmluLCBzaWdub3V0IH0gPSBVc2VBdXRoKCk7XHJcblxyXG4gICAgdmFyIFtwcm9kdXRvcywgc2V0UHJvZHV0b3NdID0gdXNlU3RhdGUoWzEsIDJdKTtcclxuXHJcbiAgICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdXRvJyB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9kdWN0KCkge1xyXG4gICAgICAgIEF4aW9zLnJlcXVlc3Qob3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2R1dG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGFfcHJvZHV0bycpLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhckxvZ09uIC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJzJ4bCcsIHNtOiAnNHhsJywgbWQ6ICc2eGwnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD17JzExMCUnfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz17J3NwYW4nfSBjb2xvcj17J2dyZWVuLjQwMCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWdlc3TDtWVzIGRlIFByb2R1dG9zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L0NlbnRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTUwcHgnLCBwYWRkaW5nUmlnaHQ6ICcycHgnIH19ID5cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwiM3hsXCIgcGFkZGluZz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQZXNxdWlzZSBwb3IgcHJvZHV0b3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBvcGFjaXR5OiAxLCBjb2xvcjogJ2dyYXkuNTAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3VuZGVkPVwiMnhsXCIgbWw9JzE1cHgnIHBhZGRpbmc9XCIyMHB4XCIgb25DbGljaz17KCkgPT4gZ29DcmVhdGVQcm9kdWN0KCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FkYXN0cmFyIFByb2R1dG8gSW5leGlzdGVudGVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3VuZGVkPVwiMnhsXCIgbWw9JzE1cHgnIHBhZGRpbmc9XCIyMHB4XCIgb25DbGljaz17KCkgPT4gbG9hZFByb2R1Y3QoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIExpc3RhciBwcm9kdXRvc1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdsaXN0YV9wcm9kdXRvJyBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RhQ2Fycm96ZWwgcHJvZHV0b3M9e3Byb2R1dG9zfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkNlbnRlciIsIkhlYWRpbmciLCJUZXh0IiwiRmxleCIsIklucHV0IiwiQnV0dG9uIiwiTGlzdGFDYXJyb3plbCIsIlJvdXRlciIsIk5hdmJhckxvZ09uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF4aW9zIiwiZ29DcmVhdGVQcm9kdWN0IiwicHVzaCIsImVkaXRQcm9kdXRvIiwiVXNlQXV0aCIsInVzZXIiLCJzaWduaW4iLCJzaWdub3V0IiwicHJvZHV0b3MiLCJzZXRQcm9kdXRvcyIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJsb2FkUHJvZHVjdCIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoaWRkZW4iLCJjYXRjaCIsImVycm9yIiwiYnIiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYXNlIiwic20iLCJtZCIsImxpbmVIZWlnaHQiLCJhcyIsImNvbG9yIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nUmlnaHQiLCJyb3VuZGVkIiwicGFkZGluZyIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwib3BhY2l0eSIsIm1sIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/listProducts.js\n");

/***/ })

});