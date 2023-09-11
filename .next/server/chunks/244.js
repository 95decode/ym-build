exports.id = 244;
exports.ids = [244];
exports.modules = {

/***/ 683:
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
// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"src\\pages\\_app.tsx","import":"","arguments":[{"src":[{"path":"../../public/fonts/AppleSDGothicNeoB.ttf","weight":"400"}],"variable":"--font-apple"}],"variableName":"Applefonts"}
var AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts_ = __webpack_require__(341);
var AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts_default = /*#__PURE__*/__webpack_require__.n(AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts_);
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Contact.tsx




const Contact = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const toggle = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed z-50 pc:w-[140px] pc:h-[390px] bg-transparent pc:bg-white flex flex-col items-center justify-between bottom-[25px] pc:bottom-[70px] right-[25px] pc:right-[100px] text-[16px] text-ym-gray-2 font-apple",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${isOpen ? "block" : "hidden pc:block"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border pc:border-ym-gray-4 mb-[10px] pc:mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-gray-2 flex items-center justify-center pc:mb-[12px] hover:cursor-pointer",
                                onClick: ()=>{
                                    router.push("/").then(()=>{
                                        window.scrollTo(0, 300000);
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "hidden pc:block",
                                        src: "/images/Online.png",
                                        width: 38,
                                        height: 28,
                                        alt: "Online"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "block pc:hidden",
                                        src: "/images/Online.png",
                                        width: 23,
                                        height: 17,
                                        alt: "Online"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "hidden pc:block",
                                children: "온라인 상담"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border-x pc:border-ym-gray-4 mb-[10px] pc:mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-yellow flex items-center justify-center pc:mb-[12px] hover:cursor-pointer",
                                onClick: ()=>{
                                    window.open("https://open.kakao.com/o/srL8BUFf");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "hidden pc:block",
                                        src: "/images/Kakao.png",
                                        width: 27,
                                        height: 25,
                                        alt: "Kakao"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "block pc:hidden",
                                        src: "/images/Kakao.png",
                                        width: 19,
                                        height: 18,
                                        alt: "Kakao"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "hidden pc:block",
                                children: "카카오 상담"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-[40px] pc:h-[130px] w-[40px] pc:w-[140px] pc:border pc:border-ym-gray-4 mb-[10px] pc:mb-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-[40px] pc:w-[57px] h-[40px] pc:h-[57px] rounded-full overflow-hidden bg-ym-blue-3 pc:bg-ym-blue-5 flex items-center justify-center pc:mb-[11px] hover:cursor-pointer",
                                onClick: ()=>{
                                    console.log("TODO");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "hidden pc:block",
                                        src: "/images/Call.png",
                                        width: 27,
                                        height: 27,
                                        alt: "Call"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "block pc:hidden",
                                        src: "/images/Call.png",
                                        width: 18,
                                        height: 18,
                                        alt: "Call"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "hidden pc:block",
                                children: "상담전화"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-[12px] text-ym-blue-5 hidden pc:block",
                                children: "010-5883-0348"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `w-[40px] h-[40px] rounded-full ${isOpen ? "bg-ym-blue-3" : "bg-ym-blue-6"} flex items-center justify-center pc:hidden`,
                onClick: ()=>{
                    toggle();
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: "absolute",
                        src: "/images/Vertical.png",
                        width: 2,
                        height: 18,
                        alt: "Vertical"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: "absolute",
                        src: "/images/Horizontal.png",
                        width: 18,
                        height: 2,
                        alt: "Horizontal"
                    })
                ]
            })
        ]
    });
};

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
                className: `${(AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts_default()).variable} ${(NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts_default()).variable} ${(NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts_default()).variable}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Contact, {})
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