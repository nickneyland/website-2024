"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/styles/footer.module.css":
/*!*************************************************!*\
  !*** ./src/components/styles/footer.module.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   footerContainer: () => (/* binding */ footerContainer),
/* harmony export */   leftFooter: () => (/* binding */ leftFooter),
/* harmony export */   rightFooter: () => (/* binding */ rightFooter)
/* harmony export */ });
// Exports
var footer = "footer-module--footer--52221";
var footerContainer = "footer-module--footerContainer--0282c";
var leftFooter = "footer-module--leftFooter--35424";
var rightFooter = "footer-module--rightFooter--f5162";


/***/ }),

/***/ "./src/components/styles/homepage.module.css":
/*!***************************************************!*\
  !*** ./src/components/styles/homepage.module.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeText: () => (/* binding */ homeText),
/* harmony export */   typedText: () => (/* binding */ typedText),
/* harmony export */   typedtext: () => (/* binding */ typedtext)
/* harmony export */ });
// Exports
var typedText = "homepage-module--typedText--9ae23";
var typedtext = "homepage-module--typedtext--f4e07";
var homeText = "homepage-module--homeText--0a6ff";


/***/ }),

/***/ "./src/components/styles/layout.module.css":
/*!*************************************************!*\
  !*** ./src/components/styles/layout.module.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   containerHeader: () => (/* binding */ containerHeader),
/* harmony export */   containerMain: () => (/* binding */ containerMain),
/* harmony export */   site: () => (/* binding */ site),
/* harmony export */   siteTitle: () => (/* binding */ siteTitle)
/* harmony export */ });
// Exports
var container = "layout-module--container--596fc";
var containerMain = "layout-module--containerMain--c38f2";
var containerHeader = "layout-module--containerHeader--340ed";
var siteTitle = "layout-module--siteTitle--4e932";
var site = "layout-module--site--b9e56";


/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/layout.module.css */ "./src/components/styles/layout.module.css");
/* harmony import */ var _components_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/footer.module.css */ "./src/components/styles/footer.module.css");





const ListLink = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
  to: props.to
}, props.children);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: _components_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_3__.site
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Nick Neyland"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
  name: "title",
  content: "Nick Neyland"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
  rel: "canonical",
  href: "https://nickneyland.com"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
  name: "description",
  content: "Personal website of web developer and writer Nick Neyland."
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: _components_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_3__.containerHeader
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
  to: "/",
  className: _components_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_3__.siteTitle
}, "Nick Neyland"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListLink, {
  to: "/about"
}, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListLink, {
  to: "/coding"
}, "Coding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListLink, {
  to: "/writing"
}, "Writing"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: _components_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_3__.containerMain
}, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
  className: _components_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_4__.footer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: _components_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_4__.footerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
  className: _components_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_4__.leftFooter
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Site built with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.gatsbyjs.org",
  target: "_blank",
  rel: "noopener noreferrer"
}, "gatsby.js")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "\xA9 ", new Date().getFullYear(), " Nick Neyland")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
  className: _components_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_4__.rightFooter
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://github.com/nickneyland",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.linkedin.com/in/nick-neyland/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "LinkedIn")))))));

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/homepage.module.css */ "./src/components/styles/homepage.module.css");




const ListLink = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
  to: props.to
}, props.children);
const homePage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  id: _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__.typedText
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Hello"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__.homeText
}, "My name is Nick."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__.homeText
}, "I am an IT professional and former writer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__.homeText
}, "You can see some of my ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListLink, {
  to: "/coding"
}, "coding work here"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: _components_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_3__.homeText
}, "And you can see some of my ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListLink, {
  to: "/writing"
}, "work as a writer here"), ".")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map