exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"src\\pages\\_app.tsx","import":"","arguments":[{"src":[{"path":"../../public/fonts/NotoSansRegular.ttf","weight":"400"}],"variable":"--font-notoSans"}],"variableName":"NotoSansRegularFonts"}
var NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts_ = __webpack_require__(825);
var NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts_default = /*#__PURE__*/__webpack_require__.n(NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts_);
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"src\\pages\\_app.tsx","import":"","arguments":[{"src":[{"path":"../../public/fonts/NotoSansBold.ttf","weight":"700"}],"variable":"--font-notoSansBold"}],"variableName":"NotoSansBoldFonts"}
var NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts_ = __webpack_require__(123);
var NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts_default = /*#__PURE__*/__webpack_require__.n(NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/components/Header.tsx



const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed w-full z-50 text-ym-gray-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "h-[54px] pc:h-[100px] flex items-center justify-center bg-ym-blue",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "hidden pc:block",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "hover:cursor-pointer",
                            src: `/images/BannerPC.png`,
                            width: 336,
                            height: 48,
                            alt: "Banner",
                            onClick: ()=>{
                                router.push("/");
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "block pc:hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "hover:cursor-pointer",
                            src: `/images/Banner.png`,
                            width: 173,
                            height: 26,
                            alt: "Banner",
                            onClick: ()=>{
                                router.push("/");
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h-[50px] pc:h-[89px] flex items-center justify-center bg-white border-b border-b-ym-border",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between w-[90vw] pc:mx-[25vw] gap-[10px] pc:gap-[3.125vw] pc:text-[20px] text-[14px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer",
                            onClick: ()=>{
                                router.push("/");
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `h-[50px] pc:h-[89px] flex items-center ${router.asPath === "/" ? "text-black" : "group-hover:text-black"}`,
                                    children: "병원 소개"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `border ${router.asPath === "/" ? "border-black" : "group-hover:border-black border-transparent"} w-full pc:w-[115px]`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer",
                            onClick: ()=>{
                                router.push("/prostate");
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `h-[50px] pc:h-[89px] flex items-center ${router.asPath === "/prostate" ? "text-black" : "group-hover:text-black"}`,
                                    children: "전립선 치료"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `border ${router.asPath === "/prostate" ? "border-black" : "group-hover:border-black border-transparent"} w-full pc:w-[115px]`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-not-allowed",
                            onClick: ()=>{
                            // router.push('/thyroid');
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `h-[50px] pc:h-[89px] flex items-center ${router.asPath === "/thyroid" ? "text-black" : "group-hover:text-black"}`,
                                    children: "갑상선 치료"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `border ${router.asPath === "/thyroid" ? "border-black" : "group-hover:border-black border-transparent"} w-full pc:w-[115px]`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "group h-[50px] pc:h-[89px] pc:w-full flex flex-col items-center hover:cursor-pointer",
                            onClick: ()=>{
                                router.push("/directions");
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `h-[50px] pc:h-[89px] flex items-center ${router.asPath === "/directions" ? "text-black" : "group-hover:text-black"}`,
                                    children: "오시는 길"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `border ${router.asPath === "/directions" ? "border-black" : "group-hover:border-black border-transparent"} w-full pc:w-[115px]`
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






const App = ({ Component, pageProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "NextTemplate"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts_default()).variable} ${(NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts_default()).variable}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


const Document = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        className: "bg-default",
        lang: "ko",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;