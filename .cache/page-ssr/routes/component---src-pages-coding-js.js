"use strict";
exports.id = "component---src-pages-coding-js";
exports.ids = ["component---src-pages-coding-js"];
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

/***/ "./src/pages/coding.js?export=default":
/*!********************************************!*\
  !*** ./src/pages/coding.js?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");


const codingPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I have worked as a web developer since the summer of 2013. My work involves building websites and apps for a broad range of clients, using JavaScript, HTML, CSS, PHP, React, React Native, OpenAI, Git, WordPress, Drupal, Sanity, Contentful and other languages and platforms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My work for the non-profit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.endthebacklog.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "End the Backlog"), " was nominated for a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.webbyawards.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Webby"), " in 2014."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Select sites I have worked on include:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://sustainability.southerncompanygas.com/"
}, "Southern - Sustainability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://digitalreport.southerncompanygas.com/"
}, "Southern - Digital Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pikerenewables.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pike")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://energy.hawaii.gov/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Hawai'i State Energy Office")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://build-ri.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "BuildRI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://realfoodmedia.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Real Food Media")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://tippingpoint.org/outofsight/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tipping Point")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://water.nature.org/sourceofyou/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Source of You")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.cnbcprime.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CNBC Prime (WordPress Multisite)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.shotatlife.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Shot@Life")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://mathforamerica.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Math for America")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://jacobsinstitute.berkeley.edu/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "UC Berkeley: Jacobs Institute")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.raisingofamerica.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Raising of America (PBS Show)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://endthebacklog.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "End the Backlog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://nationalvoterregistrationday.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "National Voter Registration Day")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.stroke.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "National Stroke Association")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://joyfulheartfoundation.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Joyful Heart Foundation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://foodfirst.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Food First")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://greaterthan.org/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Greater Than AIDS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.andrewsolomon.com/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Andrew Solomon")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (codingPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-coding-js.js.map