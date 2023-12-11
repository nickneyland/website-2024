"use strict";
exports.id = "component---src-pages-contact-js";
exports.ids = ["component---src-pages-contact-js"];
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

/***/ "./src/pages/contact.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/contact.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");


const contactPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
  name: "contact",
  method: "post",
  "data-netlify-recaptcha": "true",
  "netlify-honeypot": "bot-field",
  "data-netlify": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Contact me using the form below. Thanks!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "hidden"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Don\u2019t fill this out if you're human: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
  name: "bot-field"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
  type: "text",
  name: "name",
  placeholder: "Name"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
  type: "email",
  name: "email",
  placeholder: "Email"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
  name: "message",
  placeholder: "Message"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  "data-netlify-recaptcha": "true"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
  type: "submit"
}, "Send")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map