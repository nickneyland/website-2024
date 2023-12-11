"use strict";
exports.id = "component---src-pages-writing-js";
exports.ids = ["component---src-pages-writing-js"];
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

/***/ "./src/pages/writing.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/writing.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");


const writingPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "My writing has featured in the Wall Street Journal, the BBC, Pitchfork, Red Bull Music Academy, the New York Press, Drowned in Sound, CMJ, and many others."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I am also an experienced copywriter who has written and edited content for the Writers Guild of America, Nielsen, Amazon, Yahoo, AOL, the iTunes store, and many other outlets."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Looking at the list below, many of them are now dead links. I will try to dig out the original files and upload them at a later date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Extended list of links to past and present writing projects: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2015")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Pitchfork:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/features/pitchfork-essentials/9705-harder-shade-of-dark-the-sound-of-bristol-post-rock/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Harder Shade of Dark: The Sound of Bristol Post-Rock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/21005-imagori/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mueller & Roedelius \u2013 Imagori: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/tracks/17716-tindersticks-we-are-dreamers-ft-jehnny-beth/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tindersticks \u2013 We Are Dreamers: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/20513-lost-river-ost/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Johnny Jewel \u2013 Lost River OST: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/20304-sonnet/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Beno\xEEt Pioulard \u2013 Sonnet: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/20364-iii/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "F\xF6llakzoid \u2013 III: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/20242-kailash/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Popol Vuh/Florian Fricke \u2013 Kailash: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/20236-wild-strawberries/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Eternal Tapestry \u2013 Wild Strawberries: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/20231-carter-tutti-plays-chris-cosey/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Carter Tutti \u2013 Plays Chris & Cosey: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17310-lotic-heterocetera/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lotic \u2013 Heterocetera: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/20159-part-8-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Herbert \u2013 Part 8: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/20084-euclid/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kaitlyn Aurelia Smith \u2013 Euclid: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/20081-from-out-here/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Advisory Circle \u2013 From Out Here: Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2014")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Red Bull Music Academy:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.redbullmusicacademy.com/magazine/boredoms-guide",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Guide to Boredoms (Feature)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The Dissolve:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://thedissolve.com/news/3349-more-great-pop-music-movie-moments-from-our-friend/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "On 2001 and \u201CDaisy Bell\u201D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Pitchfork:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17257-kaitlyn-aurelia-smith-sundry/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kaitlyn Aurelia Smith \u2013 Sundry: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/20009-tindersticks-ypres/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tindersticks \u2013 Ypres: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19899-the-fall-live-uurop-viii-xii-places-in-sun-winter-son/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Fall \u2013 Live: Uurop VIII-XII Places In Sun & Winter, Son: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19942-mark-lanegan-band-phantom-radio/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mark Lanegan Band \u2013 Phantom Radio: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17175-ariel-pink-black-ballerina/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ariel Pink \u2013 Black Ballerina: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19898-cut-hands-festival-of-the-dead/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cut Hands \u2013 Festival of the Dead: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19906-underworld-dubnobasswithmyheadman-20th-anniversary-remaster/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Underworld \u2013 Dubnobasswithmyheadman (20th Anniversary Remaster): Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19737-takako-minekawa-dustin-wong-savage-imagination/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Takako Minekawa / Dustin Wong \u2013 Savage Imagination: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19842-shellac-dude-incredible/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Shellac \u2013 Dude Incredible: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19730-lee-gamble-koch/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lee Gamble \u2013 KOCH: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19780-tricky-adrian-thaws/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tricky \u2013 Adrian Thaws: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19729-mazes-wooden-aquarium/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mazes \u2013 Wooden Aquarium: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17161-lucrecia-dalt-esotro/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lucrecia Dalt \u2013 Esotro: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19630-fat-white-family-champagne-holocaust/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fat White Family \u2013 Champagne Holocaust: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19627-various-artists-music-from-the-mountain-provinces/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Various Artists \u2013 Music From The Mountain Provinces: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19640-the-amazing-snakeheads-amphetamine-ballads/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Amazing Snakeheads \u2013 Amphetamine Ballads: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19599-herbert-part-6-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Herbert \u2013 Part 6: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19495-viet-cong-cassette-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Viet Cong \u2013 Cassette EP: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17114-dj-spoko-mshongoville/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "DJ Spoko \u2013 Mshongoville: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19551-cabaret-voltaire-7885-electropunk-to-technopop-1978-1985/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cabaret Voltaire \u2013 #7885 (Electropunk to Technopop 1978-1985): Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19467-brian-reitzell-auto-music/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brian Reitzell \u2013 Auto Music: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19360-watter-this-world/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Watter \u2013 This World: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19339-leslie-winer-witch/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Leslie Winer \u2013 Witch: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17058-pharmakon-body-betrays-itself/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pharmakon \u2013 Body Betrays Itself: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19355-carl-hultgren-tomorrow/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Carl Hultgren \u2013 Tomorrow: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19347-arto-lindsay-the-encyclopedia-of-arto-lindsay/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Arto Lindsay \u2013 The Encyclopedia of Arto Lindsay: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19328-sleaford-mods-divide-and-exit/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Sleaford Mods \u2013 Divide and Exit: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/17028-lee-gamble-kali-wave/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lee Gamble \u2013 Kali Wave: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19318-fatima-al-qadiri-asiatisch/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fatima Al Qadiri \u2013 Asiatisch: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19313-brian-eno-karl-hyde-someday-world/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brian Eno/Karl Hyde \u2013 Someday World: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16998-vessel-red-sex/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Vessel \u2013 Red Sex: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19246-william-basinski-melancholia/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "William Basinski \u2013 Melancholia: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16940-call-mr-moriba/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Drift Machine \u2013 Call Mr. Moriba: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19283-thee-silver-mt-zion-memorial-orchestra-hang-on-to-each-other-ep/\"",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Thee Silver Mt. Zion Memorial Orchestra \u2013 Hang On to Each Other EP: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19271-space-project/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Various Artists \u2013 Space Project: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://pitchfork.com/reviews/albums/19192-j-spaceman-kid-millions-live-at-le-poisson-rouge/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "J. Spaceman / Kid Millions \u2013 Live at Le Poisson Rouge: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19190-wallsoram-sound-houses/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Walls/Oram \u2013 Sound Houses: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16904-ii/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Moon Gangs \u2013 II: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19242-squarepusher-z-machines-music-for-robots/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Squarepusher/Z Machines \u2013 Music for Robots: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19180-the-body-i-shall-die-here/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Body \u2013 I Shall Die Here: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19195-luke-wyatt-through-force-of-will/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Torn Hawk \u2013 Through Force of Will: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19158-pan-sonic-oksastus/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pan Sonic \u2013 Okastus: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16808-a-little-god-in-my-hands/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Swans \u2013 A Little God in My Hands: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19110-tycho-awake/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tycho \u2013 Awake: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19112-shit-robot-we-got-a-love/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Shit Robot \u2013 We Got a Love: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19035-patten-estoile-naiant/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "patten \u2013 ESTOILE NAIANT: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19054-the-notwist-close-to-the-glass/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Notwist \u2013 Close to the Glass: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19038-karen-gwyer-new-roof-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Karen Gwyer \u2013 New Roof: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16617-i-walked-alone/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Windy & Carl \u2013 I Walked Alone: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19010-leyland-kirby-breaks-my-heart-each-time/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Leyland Kirby \u2013 Breaks My Heart Each Time: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/19030-hands-the-soul-is-quick/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Hands \u2013 The Soul is Quick: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18968-four-tet-thirtysixtwentyfive-misnomer-glasshead-dialogue/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Four Tet \u2013 Thirtysixtwentyfive/Misnomer/Glasshead/Dialogue: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16525-perfect-pussy-driver/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Perfect Pussy \u2013 Driver: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18949-nils-frahm-spaces/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Nils Frahm \u2013 Spaces: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18896-mogwai-rave-tapes/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mogwai \u2013 Rave Tapes: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16524-nils-frahm-says/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Nils Frahm \u2013 Says: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18838-the-verlaines-hallelujah-all-the-way-home-juvenilia/"
}, "The Verlaines \u2013 Hallelujah All the Way Home/Juvenalia: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16513-liars-mess-on-a-mission/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Liars \u2013 Mess on a Mission: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18838-the-verlaines-hallelujah-all-the-way-home-juvenilia/"
}, "Kerridge \u2013 A Fallen Empire: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18789-bryce-hackford-fair/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Bryce Hackford: Fair: Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2013")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Pitchfork:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18648-gardland-syndrome-syndrome/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gardland \u2013 Syndrome Syndrome: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18788-beedeegee-sumone/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "bEEdEEgEE \u2013 Sum/One: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16454-anxiety/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dino Spiluttini \u2013 Anxiety: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18759-creep-echoes/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CREEP \u2013 Echoes: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18755-tindersticks-across-six-leap-years/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tindersticks \u2013 Across Six Leap Years: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18686-the-stranger-watching-dead-empires-in-decay/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Stranger \u2013 Watching Dead Empires in Decay: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18686-the-stranger-watching-dead-empires-in-decay/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gatekeeper \u2013 Young Chronos: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18772-gatekeeper-young-chronos-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Autechre \u2013 L-event\xA0: EP review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16437-come-down-to-us/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Burial \u2013 Come Down To Us: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18672-autechre-l-event-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Juana Molina \u2013 Wed 21: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18666-juana-molina-wed-21/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Schneider TM \u2013 Guitar Sounds: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16368-damballah-58/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cut Hands \u2013 Damballah 58: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18522-schneider-tm-guitar-sounds/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Schneider TM \u2013 Guitar Sounds: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18573-quasi-mole-city/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Quasi \u2013 Mole City: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18434-dustin-wong-meditation-of-ecstatic-energy/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dustin Wong \u2013 Meditation of Ecstatic Energy: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18528-arp-more/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Arp \u2013 More: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/thepitch/69-death-waltz-records/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "An Introduction to the Strange World of Death Waltz Records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18494-yoko-ono-plastic-ono-band-take-me-to-the-land-of-hell/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Yoko Ono Plastic Ono Band \u2013 Take Me to the Land of Hell: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18590-twigs-ep2/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "FKA twigs \u2013 EP2: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18400-m-geddes-gengras-collected-works-vol-1-the-moog-years/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "M. Geddes Gengras \u2013 Collected Works Vol. 1 The Moog Years: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Album Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18391-slow-walkers-slow-walkers/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Slow Walkers \u2013 Slow Walkers: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/16010-ducktails-honey-tiger-eyes/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ducktails \u2013 Honey Tiger Eyes: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15813-high-heeled-clouds/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Arp \u2013 High-Heeled Clouds: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15683-pool-ft-john-stanier/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Rone \u2013 Pool [ft. John Stanier]: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15641-polarity/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Stellar Om Source \u2013 Polarity: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15621-one-half/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Julianna Barwick \u2013 One Half: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15598-girl-like-me/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Slava \u2013 Girl Like Me: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15590-lustmord-chorazin-extract/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lustmord \u2013 Chorazin (Extract): Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15569-thors-stone/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Forest Swords \u2013 Thor\u2019s Stone: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/thepitch/33-black-dice/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "From Noise to Nike: Black Dice\u2019s Meta-Aesthetic: Feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18300-ken-camden-space-mirror/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ken Camden \u2013 Space Mirror: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18254-eric-copeland-joke-in-the-hole/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Eric Copeland \u2013 Joke in the Hole: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18287-true-widow-circumambulation/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "True Widow \u2013 Circumambulation: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18269-salvia-plath-the-bardo-story/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Salvia Plath \u2013 The Bardo Story: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18289-roedelius-schneider-tiden/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Roedelius Schneider \u2013 Tiden: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18209-david-yow-tonight-you-look-like-a-spider/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "David Yow \u2013 Tonight You Look Like a Spider: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18282-william-basinski-nocturnes/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "William Basinski \u2013 Nocturnes: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18252-alex-burkat-tarot/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Alex Burkat \u2013 Tarot: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18171-keith-fullerton-whitman-floris-vanhoof-split-lp/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Keith Fullerton Whitman and Floris Vanhoof \u2013 Split LP: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18203-people-of-the-north-sub-contra/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "People of the North \u2013 Sub Contra: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18112-jan-st-werner-blaze-colour-burn/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jan St. Werner \u2013 Blaze Colour Burn: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18246-new-order-live-at-bestival-2012/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "New Order \u2013 Live at Bestival 2012: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18243-daftside-random-access-memories-memories/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Daftside \u2013 Random Acess Memories Memories: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18039-matthew-herbert-the-end-of-silence/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matthew Herbert \u2013 The End of Silence: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18083-sfv-acid-the-dwell/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "SFV Acid \u2013 The Dwell: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18080-koreless-yugen-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Koreless \u2013 Yugen: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18130-lilacs-champagne-danish-blue/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lilacs and Champagne \u2013 Danish and Blue: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15520-boards-of-canada-reach-for-the-dead/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Boards of Canada \u2013 Reach for the Dead: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17956-dean-blunt-the-redeemer/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dean Blunt \u2013 The Redeemer: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17952-secret-circuit-tactile-galactics/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Secret Circuit \u2013 Tactile Galactics: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18051-laurel-halo-behind-the-green-door-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Laurel Halo \u2013 Behind the Green Door: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18077-squrl-squrl-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Squrl \u2013 Squrl: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18009-pharmakon-abandon/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pharmakon \u2013 Abandon: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18027-patrick-vian-bruits-et-temps-analogues/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Patrick Vian \u2013 Bruits et Temps Analogues: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15460-xeno-oaklander-sheen/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Xeno & Oaklander \u2013 Sheen: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18069-the-focus-group-the-elektrik-karousel/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Focus Group \u2013 Elektrik Karousel: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18036-pharaohs-replicant-moods/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pharaohs \u2013 Replicant Moods: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17945-pan-american-cloud-room-glass-room/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pan American \u2013 Cloud Room, Glass Room: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17871-adr-chunky-monkey/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ADR \u2013 Chunky Monkey: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15349-part-1/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matthew Herbert \u2013 Part 1: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/18014-snapper-snapper-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Snapper \u2013 EP: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15261-var-the-world-fell/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Var \u2013 The World Fell: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17910-life-coach-alphawaves/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Life Coach \u2013 Alphawaves: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17732-the-mirror-reflecting-part-2-excavation/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Haxan Cloak \u2013 Excavation: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15231-monomania/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Deerhunter \u2013 Monomania: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17912-disappears-kone-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Disappears \u2013 Kone EP: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17900-music-for-dancefloors-the-kpm-music-library/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Music For Dancefloors: The KPM Music Library: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17755-edwyn-collins-understated/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Edwyn Collins \u2013 Understated: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15164-night-club/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Radio People \u2013 Night Club: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17700-blanche-blanche-blanche-wooden-ball/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Blanche Blanche Banche \u2013 Wooden Ball: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17790-karl-bartos-off-the-record/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Karl Bartos \u2013 Off the Record: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17782-julian-lynch-lines/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Julian Lynch \u2013 Lines: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15119-drift/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Stygian Stride \u2013 Drift: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17777-leven-signs-hemp-is-here/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Leven Signs \u2013 Hemp is Here: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17774-ellen-allien-lism/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ellen Allien \u2013 LISm \u2013 Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17706-pete-swanson-punk-authority-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pete Swanson \u2013 Punk Authority: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15099-that-magik/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "C.L.A.W.S. \u2013 That Magik: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15066-beachcombing/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Factory Floor/Peter Gordon \u2013 Beachcombing: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17746-karen-gwyer-needs-continuum/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Karen Gwyer \u2013 Needs Continuum: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15031-the-instinct-extended-12-version/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mark McGuire \u2013 The Instinct: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17670-benoit-pioulard-hymnal/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Benoit Pioulard \u2013 Hymnal: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/15014-grounds-for-arrest/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pete Swanson \u2013 Grounds for Arrest: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17767-lloyd-cole-hans-joachim-roedelius-selected-studies-vol-1/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lloyd Cole/Hans-Joachim Roedelius \u2013 Selected Studies Vol. 1: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14985-walk-away/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Thalia Zedek Band \u2013 Walk Away: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14976-various-artists-dont-get-any-closer/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Eluvium \u2013 Don\u2019t Get Any Closer: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17686-confrontations/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Umberto \u2013 Confrontations: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14911-in-the-city-chromatics-cover/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Anika \u2013 In the City: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14902-wizard-motor/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mogwai \u2013 Wizard Motor: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14884-chasing-the-light/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lust for Youth \u2013 Chasing the Light: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14864-high-above-a-grey-green-sea/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Colin Stetson \u2013 High Above a Grey Green Sea: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17560-centralia/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mountains \u2013 Centralia: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17587-brokeback-and-the-black-rock/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brokeback \u2013 Brokeback & the Black Rock: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14826-the-mirror-reflecting-part-2/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Haxan Cloak \u2013 The Mirror Reflecting (Part 2): Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14812-teen-paranormal-romance/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matmos \u2013 Teen Paranormal Romance: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17541-opus-2/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ethernet \u2013 Opus 2: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14759-doubles-trebles/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Wire \u2013 Doubles & Trebles: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14747-you-have-already-gone-to-the-other-world/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Hawk and a Hacksaw \u2013 You Have Already Gone to the Other World: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14729-colony-collapse-disorder/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mystical Weapons \u2013 Colony Collapse Disorder: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17511-elements-of-light/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Pantha du Prince & the Bell Laboratory \u2013 Elements of Light: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17492-berberian-sound-studio-original-motion-picture-soundtrack/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Broadcast \u2013 Berberian Sound Studio: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17488-nayim-from-the-halfway-line/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Alexis Taylor \u2013 Nayim from the Halfway Line: EP Review"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2012"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The Wall Street Journal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2012/02/10/the-walking-dead-zombie-slaying-actor-revels-his-outsider-role/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Zombie-Slaying Actor Plays It Tough (Walking Dead Feature)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2012/01/26/bjorks-latest-experiment-teaching-science/#",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Bjork\u2019s Latest Experiment: Teaching Science (Feature)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Pitchfork:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14628-dirty-shirt/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Metz \u2013 Dirty Shirt: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17480-the-mystery-of-heaven/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jozef Van Wissem & Jim Jarmusch \u2013 The Mystery of Heaven: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17385-night-has-a-thousand-screams/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Umberto \u2013 Night Has a Thousand Screams: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17444-black-mamba/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cut Hands \u2013 Black Mamba \u2013 Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17376-desertshore/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "X-TG \u2013 Desertshore/The Final Report: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17414-quarter-turns-over-a-living-line/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Raime \u2013 Quarter Turns Over a Living Line: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14550-intrusions/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tim Hecker/Daniel Lopatin \u2013 Intrusions: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14528-your-cast-will-tire/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Raime \u2013 Your Cast Will Tire: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14508-mono/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Beak> \u2013 Mono: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14499-beach-shelter/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Heathered Pearls \u2013 Beach Shelter: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14431-fire-back-about-your-new-babys-sex-live/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Don Caballero \u2013 Fire Back About Your New Baby\u2019s Sex (Live): Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/14417-the-flower-lane/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ducktails \u2013 The Flower Lane: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17265-too-late-box-set/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Trop Tard \u2013 Too Late: Box Set Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17286-order-of-noise/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Vessel \u2013 Order of Noise: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17339-connected/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oren Ambarchi/Robin Fox \u2013 Connected: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17175-the-ganzfeld-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matmos \u2013 The Ganzfeld: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17007-commercial-music/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fabulous Diamonds \u2013 Commercial Music: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17157-music-is-painting-in-the-air/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Sensations\u2019 Fix \u2013 Music Is Painting in the Air: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/17106-music-for-reliquary-house-in-1980-i-was-a-blue-square/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oneohtrix Point Never/Rene Hell \u2013 Music for Reliquary H0use/In 1980 I was a Blue Square: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16983-fantasm-planes/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Clark \u2013 Fantasm Planes: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16977-sagittarian-domain/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oren Ambarchi \u2013 Sagittarian Domain: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16959-lo-fi-hi-fives/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "R. Stevie Moore \u2013 Lo Fi High Fives: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/news/47538-the-peoples-list-our-staffs-picks/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "People\u2019s List Feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16909-ancient-future/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Willits + Sakamoto \u2013 Ancient Future: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16828-aun/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fennesz \u2013 Aun: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16954-regional-surrealism/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Konx-Om-Pax \u2013 Regional Surrealism: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16930-white-math-polymorph/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Blanck Mass \u2013 White Math/Polymorph: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16891-outsiderin-the-collection/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Luke Haines \u2013 Outsider/In: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16829-exo/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gatekeeper \u2013 Exo: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16892-strange-passion-explorations-in-irish-post-punk-1980-83/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Various \u2013 Strange Passion: Explorations in Irish Post Punk 1980-83: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16794-occlusions/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Keith Fullerton Whitman \u2013 Occlusions: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16837-manifest/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Friends \u2013 Manifest!: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16715-dub-egg/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Young \u2013 Dub Egg: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16687-trust-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Airbird \u2013 Trust: EP Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16652-masterpiece/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Andrew Weatherall \u2013 Masterpiece: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16600-drokk-music-inspired-by-mega-city-one/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Geoff Barrow & Ben Salisbury \u2013 DROKK: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16568-the-diver/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Led Er Est \u2013 The Diver: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16566-black-is-beautiful/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dean Blunt & Inga Copeland \u2013 Black Is Beautiful: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/features/articles/8813-record-store-day/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Record Store Day Feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16501-woods-amps-for-christ/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Woods/Amps for Christ \u2013 S/T: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16493-violet-replacement/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Grouper \u2013 Violet Replacement: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16467-i-dont-want-to-die/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ryan Power \u2013 I Don\u2019t Want to Die: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/13392-spring-01/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "King Felix \u2013 Spring 01: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/13379-gun-has-no-trigger/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dirty Projectors \u2013 Gun Has No Trigger: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16431-transverse/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Carter Tutti Void \u2013 Transverse: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16395-canto-arquipelago/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dolphins Into the Future \u2013 Canto Arquipelago: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16403-decade/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mi Ami \u2013 Decade: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16308-the-belbury-tales/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Belbury Poly \u2013 The Belbury Tales: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16343-pre-language/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Disappears \u2013 Pre Language: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16346-silica-gel/"
}, "Bodyguard \u2013 Silica Gel: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16332-a-victim-of-stars-1982-2012/"
}, "David Sylvian \u2013 A Victim of Stars: 1982-2012: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16320-audience-of-one/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oren Ambarchi \u2013 Audience of One: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16294-the-broken-man/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matt Elliott \u2013 The Broken Man: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16284-lixiviation/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Suzanne Ciani \u2013 Lixiviation: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16276-evidence/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Carlos Giffoni \u2013 Evidence: 12-Inch Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/13127-no-chance/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Unsane \u2013 No Chance: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16273-hotel-amour/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Terranova \u2013 Hotel Amour: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16255-le-voyage-dans-la-lune/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Air \u2013 Le Voyage Dans La Lune: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16222-we-will-always-be/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Windy & Carl \u2013 We Will Always Be: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16218-ui/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Leila \u2013 U&I: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/13060-the-broken-man/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Matt Elliott \u2013 Dust Flesh and Bones: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16200-wilson-semiconductors/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Howling Hex \u2013 Wilson Semiconductors: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16184-back-on-time/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Plug \u2013 Back on Time: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12948-pigs/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Black Dice \u2013 Pigs: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16124-grimm-reality/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dimlite \u2013 Grimm Reality: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "CMJ:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.cmj.com/feature/cmj-2012-artist-qa-daughn-gibson/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Daughn Gibson Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.cmj.com/feature/cmj-2012-artist-qa-maria-minerva/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Maria Minerva Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Drowned in Sound:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/16719/reviews/4144298",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Various: East of Underground \u2013 Hell Below: Album Review"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2011"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The Wall Street Journal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/12/23/manhattans-score-stores-face-the-music/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Manhattan\u2019s Score Stores Face the Music"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://online.wsj.com/article/SB10001424052970203699404577042382403152276.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Macy\u2019s Parade Studio on New Turf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/11/11/how-comedian-jb-smoove-became-a-character/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "How Comedian JB Smoove Became a Character"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/10/27/freak-shows-owner-finds-less-to-fear-on-coney-island/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Freak Show Owner Finds Less to Fear (Coney Island Freak Show)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/10/18/will-cmj-bands-play-the-wall-street-protest/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Will CMJ Bands Play the Wall Street Protest?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/09/23/the-rapture-returns-from-the-wilderness/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Rapture Returns From the Wilderness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://online.wsj.com/video/walking-with-omar-from-the-wire/CD670418-CA2A-405B-A1A5-4ED331606AC9.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Walking with Omar From \u2018The Wire\u2019 (Video)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/09/21/boardwalk-empire-michael-kenneth-williams-brooklyn-star/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Boardwalk Empire\u2019s Brooklyn Star (Michael K. Williams)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/09/12/das-racist-is-not-kidding/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Das Racist is Not Kidding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/07/19/theophilus-london-raps-marketable-new-face/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Theophilus London: Rap\u2019s Marketable New Face"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/07/06/shakespeare-in-the-parking-lot-lower-east-side/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "On the Lower East Side, Shakespeare Among the Camrys (Shakespeare in the Parking Lot) "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/06/10/a-trip-to-green-wood-cemetery-after-dark-without-dying-to-get-in/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Green-Wood Cemetery After Dark (Without Dying to Get In)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://online.wsj.com/article/SB10001424052748703864204576313441692801426.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "All The Fun of the Wheel, Minus Vanna (Yo La Tengo\u2019s Wheel Shows)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/04/15/a-one-day-revival-for-nycs-fading-record-stores/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A One-Day Revival For Fading Record Stores (Record Store Day)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/03/28/james-murphy-shuts-down-a-soundsystem/?KEYWORDS=lcd+soundsystem",
  target: "_blank",
  rel: "noopener noreferrer"
}, "James Murphy Shuts Down a Soundsystem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://blogs.wsj.com/metropolis/2011/02/09/a-rock-festival-embraces-the-jersey-commute/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Rock Festival Embraces The Jersey Commute (ATP Asbury Park)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Pitchfork:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16093-free-all-the-monsters/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Bats \u2013 Free All The Monsters: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16061-wild-one/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "North Highlands \u2013 Wild One: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16049-freeclouds/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Carter Tanton \u2013 Freeclouds: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/16028-pan-am-stories/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Rangers \u2013 Pan Am Stories: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15998-parallax/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Atlas Sound \u2013 Parallax: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12670-common-burn/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mazzy Star \u2013 Common Burn: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15947-the-ann-steel-album/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Roberto Cacciapaglia \u2013 The Ann Steel Album: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12575-replica/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oneohtrix Point Never \u2013 Replica: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15901-coracle/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Walls \u2013 Coracle: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15874-kinshasa-one-two/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "DRC Music \u2013 Kinshasa One Two: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12472-green-aisles/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Real Estate \u2013 Green Aisles: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15829-zig-zaj/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Boom Bip \u2013 Zig Zaj: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15837-pop-music-false-b-sides/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Baths \u2013 Pop Music/False B-Sides: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15802-odyshape/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Raincoats \u2013 Odyshape: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15735-widowspeak/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Widowspeak \u2013 Widowspeak: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15732-revisited-remixed-1970-1999/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Popol Vuh \u2013 Revisited & Remixed (1970-1999): Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12283-some-children-ft-michael-mcdonald/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Holy Ghost! \u2013 Some Children: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15712-as-the-crow-flies/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Advisory Circle \u2013 As The Crow Flies: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12277-locked/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Four Tet \u2013 Locked: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15692-parabolas/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "John Tejada \u2013 Parabolas: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15696-science-of-the-sea/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jurgen Muller \u2013 Science of the Sea: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12267-surgeon/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "St. Vincent \u2013 Surgeon: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15636-staring-into-the-sun/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Olivia Wyatt \u2013 Staring Into the Sun: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15631-mindreading/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Singer \u2013 Mindreading: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://nickneyland.blogspot.com/search/label/Pitchfork",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Real Estate \u2013 It\u2019s Real: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/features/staff-lists/7967-words-and-music-our-60-favorite-music-books/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Words and Music: Our 60 Favorite Music Books (Staff Feature)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12252-still-life/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Horrors \u2013 Still Life: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12242-crystalline/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Bjork \u2013 Crystalline: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15572-blanck-mass/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Blanck Mass \u2013 Blanck Mass: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15554-gimme-ten/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ungdomskulen \u2013 Gimme Ten: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12226-oh-why/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Balam Acab \u2013 Oh Why: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12222-daylight/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Thundercat \u2013 Daylight: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15490-absolute-ii/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Oneida \u2013 Absolute II: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12216-snooze-4-love/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Todd Terje \u2013 Snooze 4 Love: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12213-dirt/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "WU LYF \u2013 Dirt: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15461-zayna-jumma/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Group Doueh \u2013 Zayna Jumma: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15454-everythings-getting-older/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Aidan Moffat/Bill Wells \u2013 Everything\u2019s Getting Older: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12200-natalias-song/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Zomby \u2013 Natalia\u2019s Song: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15386-past-life-martyred-saints/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "EMA \u2013 Past Life Martyred Saints: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15354-talahomi-way/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The High Llamas \u2013 Talahomi Way: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15349-swanlights-ep/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Antony and the Johnsons \u2013 Swanlights EP: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15335-start-and-complete/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "About Group \u2013 Start and Complete: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12177-glitch/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brian Eno \u2013 Glitch: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12174-families-feat-glasser/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "John Talabot \u2013 Families [ft. Glasser]: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12170-nosebleed/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Deerhunter \u2013 Nosebleed: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12168-the-lonely-doll/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cass McCombs \u2013 The Lonely Doll: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15283-do-whatever-you-want-all-the-time/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ponytail \u2013 Do Whatever You Want All The Time: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12164-deeper-understanding/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kate Bush \u2013 Deeper Understanding: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12163-pushing-onlys/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Woods \u2013 Pushing Onlys: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15242-antonionian/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Antonionian \u2013 Antonionian: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15203-harbors/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "All Tiny Creatures \u2013 Harbors: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15202-as-high-as-the-highest-heavens-and-from-the-center-to-the-circumference-of-the-earth/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "True Widow \u2013 As High as The Highest Heavens: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12148-house-of-balloons/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Weeknd \u2013 House of Balloons: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12145-mirror/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Four Tet/Burial/Thom Yorke \u2013 Mirror: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12142-true-blue/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Dirty Beaches \u2013 True Blue: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12137-glass-bubbles/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "All Tiny Creatures \u2013 Glass Bubbles: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12135-the-wolf/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fever Ray \u2013 The Wolf: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12134-easy-peasy/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ponytail \u2013 Easy Peasy: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12130-glass-jar/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gang Gang Dance \u2013 Glass Jar: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12129-parallel-lines/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Night Plane \u2013 Parallel Lines: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12125-mornin/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Star Slinger \u2013 Mornin\u2019: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15113-hotel-shampoo/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gruff Rhys \u2013 Hotel Shampoo: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15123-you-today/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Martial Canterel \u2013 You Today: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12113-bizness/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "tUnE-yArDs \u2013 Bizness: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12104-the-piano-drop/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tim Hecker \u2013 The Piano Drop: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15057-until-the-light-of-morning/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Essie Jain \u2013 Until the Light of Morning: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12098-new-beat/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Toro Y Moi \u2013 New Beat: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/15001-grown-unknown/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Lia Ices \u2013 Grown Unknown: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12092-the-grey-ship/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "EMA \u2013 The Grey Ship: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12089-dark-allies/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Light Asylum \u2013 Dark Allies: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/14990-life-coach/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Phil Manley \u2013 Life Coach: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12086-bullfight/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Women \u2013 Bullfight: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/albums/14960-ducktails-iii-arcade-dynamics/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ducktails \u2013 Ducktails III: Arcade Dynamics: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12081-confusion/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Vacant Lots \u2013 Confusion: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://pitchfork.com/reviews/tracks/12077-dfm/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Thomas Fehlmann \u2013 DFM: Track Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Drowned in Sound: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4143742-atp-i-ll-be-your-mirror-new-jersey--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ATP I\u2019ll be Your Mirror Asbury Park: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/16454/reviews/4143415",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tinariwen \u2013 Tassili: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/16212/reviews/4142618",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Austra \u2013 Feel It Break: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15984/reviews/4142065",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Faust \u2013 Something Dirty: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15902/reviews/4141855",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Sic Alps \u2013 Napa Asylum: Album Review"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2010"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "BBC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/music/reviews/b3q4",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gil Scott-Heron \u2013 I\u2019m New Here: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "New York Press"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-21508-does-the-l-train-go-to-ronkonkoma.htmls/15605/reviews/4140776",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Does the L Train Go to Ronkonkoma? (Twin Sister Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-21425-casting-a-shadow.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Casting a Shadow (Twin Shadow Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-21176-get-sleighed.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Get Sleighed (Sleigh Bells Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-21057-what-the-eff.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "What the Eff (Effi Briest Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/blog-5812-don-giovanni-showcase-at-bowery-ballroom.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Screaming Females/JEFF the Brotherhood at Bowery Ballroom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-20870-an-orrall-fixation.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "JEFF the Brotherhood Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-20842-masses-attack.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Masses Attack (Midnight Masses Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/blog-5674-gang-gang-dance-and-dj_rupture-at-music-hall-of-wi.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gang Gang Dance/DJ/Rupture at Music Hall of Williamsburg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Drowned in Sound"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15866/reviews/4141723",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jon Spencer Blues Explosion \u2013 Reissues: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15839/reviews/4141604",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Third Eye Foundation \u2013 The Dark: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15806/reviews/4141496",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brian Eno \u2013 Small Craft on a Milk Sea: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4141041-an-oral-history-of-oneida%E2%80%99s-each-one-teach-one",
  target: "_blank",
  rel: "noopener noreferrer"
}, "An Oral History of Oneida\u2019s \u2018Each One Teach One\u2019"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4141419-cmj--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CMJ 2010: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4141049-new-york-week--a-guide-to-brooklyn-venues",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A guide to Brooklyn Venues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4141040-a-reflection-on-the-new-york-music-scene-2000-2009",
  target: "_blank",
  rel: "noopener noreferrer"
}, "A Reflection on the New York Music Scene"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15734/reviews/4141246",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Antony and the Johnsons \u2013 Swanlights: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15690/reviews/4141134",
  target: "_blank",
  rel: "noopener noreferrer"
}, "David Bowie \u2013 Station to Station: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15652/reviews/4140991",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Grinderman \u2013 Grinderman 2: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4140983-atp-new-york-2010--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ATP New York: 2010: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4140814-favourite-50--ghostface-killah-supreme-clientele-chosen-by-nick-neyland?dis-is-10-favourite-50",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ghostface Killah \u2013 Supreme Clientele: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15605/reviews/4140776",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Andreya Triana \u2013 Lost Where I Belong: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15566/reviews/4140632",
  target: "_blank",
  rel: "noopener noreferrer"
}, "K-X-P \u2013 K-X-P: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15538/reviews/4140526",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Department of Eagles \u2013 Archive: 2003-2006: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15474/reviews/4140293",
  target: "_blank",
  rel: "noopener noreferrer"
}, "James Holden \u2013 DJ Kicks: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15424/reviews/4140124",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Ariel Pink\u2019s Haunted Graffiti \u2013 Before Today: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15427/reviews/4140137",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Thee Oh Sees \u2013 Warm Slime: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15380/reviews/4139974",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kelis \u2013 Flesh Tone: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15357/reviews/4139878",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Javelin \u2013 No Mas: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15297/reviews/4139739",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Sweet Apple \u2013 Love & Desperation: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15311/reviews/4139733",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Fall \u2013 Your Future Our Clutter: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4139569-dis-meets-high-places",
  target: "_blank",
  rel: "noopener noreferrer"
}, "High Places Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15257/reviews/4139567",
  target: "_blank",
  rel: "noopener noreferrer"
}, "High Places \u2013 High Places vs. Mankind: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15213/reviews/4139431",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Rob Swift \u2013 The Architect: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15187/reviews/4139389",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Led Er Est \u2013 Dust On Common: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15176/reviews/4139299",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Loscil \u2013 Endless Falls: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15146/reviews/4139190",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Fur \u2013 Witches: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15106/reviews/4139088",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Cluster \u2013 Qua: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15063/reviews/4138953?search",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Bob Blank \u2013 Blank Generation: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/15051/reviews/4138914",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Chicago Underground Duo \u2013 Boca Negra: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Prefix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/features/barry-hogan/interview/43570/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ATP Founder Barry Hogan: Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/news/stars-pay-tribute-to-malcolm-mclaren/39491/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Malcolm McLaren R.I.P."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/news/musicians-by-the-million-mourn-for-alex-chilton/38783/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Alex Chilton R.I.P."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Culture Now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=42416",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The iPad and the Publishing Industry: A Match Made in Heaven"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=42420",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Remarkable Career of Malcolm McLaren"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=42410",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Era of New Pop Exclusivity"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2009"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "BBC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/music/reviews/2x3q",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Blakroc \u2013 Blakroc: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The New York Press"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/article-20644-gym-class-heroes.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gym Class Heroes (Growing Interview)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.nypress.com/blog-5376-crystal-stilts-grass-widow-and-the-beets-at-the-br.html",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Crystal Stilts at the Brooklyn Museum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Drowned in Sound"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14996/reviews/4138716",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Nite Jewel \u2013 Good Evening: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4138697-dis-staffers-09-mixtapes-part-2",
  target: "_blank",
  rel: "noopener noreferrer"
}, "DiS Staffers \u201809 Mixtapes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14970/reviews/4138548",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Trans Am \u2013 What Day Is It Tonight?: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14895/reviews/4138454",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Glass Ghost \u2013 Idol Omen: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4138353-shred-yr-ace--dis-meets-woods",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Woods Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14830/reviews/4138326",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Daniel Johnston \u2013 Is and Always Was: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4138275-cmj-days-1-2-amp-3--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CMJ 2009 Days 1, 2 & 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4138276-cmj-days-4-amp-5--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CMJ 2009 Days 4 & 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14795/reviews/4138237",
  target: "_blank",
  rel: "noopener noreferrer"
}, "4hero \u2013 Extensions: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14717/reviews/4138075",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kurt Vile \u2013 Childish Prodigy: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14668/reviews/4137937",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Rain Machine \u2013 Rain Machine: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/in_depth/4137865-atp-new-york-2009--the-dis-review",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ATP New York 2009: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14636/reviews/4137783",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Euros Childs \u2013 Son of Euros Childs: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14609/reviews/4137694",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Brendan Benson \u2013 My Old, Familiar Friend: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14589/reviews/4137626",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Squarepusher \u2013 Solo Electric Bass 1: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14561/reviews/4137539",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Clint Mansell \u2013 Moon: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/gigs/42912/reviews/4137516",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Deerhunter/Dan Deacon/No Age: Live Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14502/reviews/4137318",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tiny Vipers \u2013 Life on Earth: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14457/reviews/4137116",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tiny Masters of Today \u2013 Skeletons: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/gigs/43089/reviews/4137062",
  target: "_blank",
  rel: "noopener noreferrer"
}, "TV on the Radio/Dirty Projectors: Live Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://drownedinsound.com/releases/14422/reviews/4136935",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Women \u2013 Women: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Prefix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/news/sonic-youth-on-jimmy-fallon-report-from-the-band-b/29911/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Sonic Youth on Jimmy Fallon: Report from the Band Bench"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://nickneyland.tumblr.com/post/10081685593/northside-festival-coverage",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Northside Festival: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/hell/teufelswerk/28913/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Hell \u2013 Teufelswerk: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/the-vaselines/enter-the-vaselines/27972/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Vaselines \u2013 Enter the Vaselines: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/the-horrors/primary-colours/27968/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Horrors \u2013 Primary Colours: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/micachu-the-shapes/jewellery/27809/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Micachu & the Shapes \u2013 Jewellery: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/magik-markers/balf-quarry/27908/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Magik Markers \u2013 Balf Quarry: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/animal-collective/merriweather-post-pavilion/22243/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Animal Collective \u2013 Merriweather Post Pavillion: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/psychic-ills/mirror-eye/24834/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Psychic Ills \u2013 Mirror Eye: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/various-artists/dancehall-the-rise-of-jamaican-dancehall-culture/25277/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Various: Dancehall Culture: The Rise of Jamaican Dancehall Culture: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/abe-vigoda/reviver/24349/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Abe Vigoda \u2013 Reviver: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/seeland/tomorrow-today/26961/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Seeland \u2013 Tomorrow Today: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/iud/the-proper-sex/24696/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "I.U.D. \u2013 The Proper Sex: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/black-dice/repo/24616/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Black Dice \u2013 Repo: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/pj-harvey-john-parish/a-woman-a-man-walked-by/27497/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "PJ Harvey & John Parish \u2013 A Woman A Man Walked By: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Foto 8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.foto8.com/new/online/blog/923-pressure-cooker-jennifer-grausman-and-matt-becker-interview",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jennifer Grausman and Mark Becker Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.foto8.com/new/online/blog/896-in-a-dream-jeremiah-zagar-interview",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Jeremiah Zagar Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Culture Now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39797",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Military Madness: How the Army Courted the Music World"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=39705",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Struggle to Stream: Spotify Delays U.S. Launch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39675",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kickstarter, Topspin and the New Transparency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39649",
  target: "_blank",
  rel: "noopener noreferrer"
}, "CMJ 2009: Best of the Panels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=39569",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The CMJ Music Marathon 2009: Tips, Hits and Previews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=39540",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Future of Music Coalition Considers Journalism"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=39485",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Back to the Future: How the \u201990s Infiltrated the \u201900s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39465",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kraftwerk and the March of Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39435",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Battle For Your Eyes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39409",
  target: "_blank",
  rel: "noopener noreferrer"
}, "ATP and the New Festival Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39386",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Rock Music and the Battle to Go Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39358",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Everybody Needs a 404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39301",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Selling of a 21st Century Pop Star"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39207",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Chris Brown and the Death of the Music Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39183",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Artist As a Business Start-Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39162",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The New T-Shirt Revolution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://culturenow.com/site/item.cfm?item=39146",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Shock of the New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36442",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Top of the Pops: Do Charts Still Matter?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36413",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Anatomy of a Scoop: The Music Media and Michael Jackson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36400",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Freemium Thinking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36375",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Wireless Culture: Online vs. Terrestrial Radio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36346",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Power of Mashups and Mixtapes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36185",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Future of Music Writing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.culturenow.com/site/item.cfm?item=36064",
  target: "_blank",
  rel: "noopener noreferrer"
}, "How Twitter Is Shaping the Music Industry"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2008")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "BBC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A32131171",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Fiery Furnaces Interview/Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A31693070",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #18: Single Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A31425068",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #17: Single Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Prefix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/features/gang-gang-dance/interview/22545/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gang Gang Dance Interview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/silver-jews/lookout-mountain-lookout-sea/18732/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Silver Jews \u2013 Lookout Mountain, Lookout Sea: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/leila/blood-looms-and-blooms/19723/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Leila \u2013 Blood, Looms and Blooms: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/tickley-feather/tickley-feather/20336/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Tickley Feather \u2013 Tickley Feather: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/mars/the-complete-studio-recordings-nyc-1977-1978/20516/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Mars \u2013 The Complete Studio Recordings: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/high-places/high-places/21051/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "High Places \u2013 High Places: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/hush-arbors/hush-arbors/21713/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Hush Arbors \u2013 Hush Arbors: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/the-sea-and-cake/car-alarm/22053/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Sea and Cake \u2013 Car Alarm: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/djrupture/uproot/22146/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "DJ/Rupture \u2013 Uproot: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/gang-gang-dance/saint-dymphna/22025/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Gang Gang Dance \u2013 Saint Dymphna: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/crystal-stilts/alight-of-night/22496/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Crystal Stilts \u2013 Alight of Night: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/momus/joemus/22890/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Momus \u2013 Joemus: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/kieran-hebden-and-steve-reid/nyc/22877/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Kieran Hebden and Steve Reid \u2013 NYC: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/black-milk/tronic/23489/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Black Milk \u2013 Tronic: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/max-tundra/parallax-error-beheads-you/21943/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Max Tundra \u2013 Parallax Error Beheads You: Album Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/the-flaming-lips/christmas-on-mars/23684/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "The Flaming Lips \u2013 Christmas on Mars: Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "http://www.prefixmag.com/reviews/chris-brokaw/canaris/23861/",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Chris Brokaw \u2013 Canaris: Album Review"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
  className: "year"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "2007"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "BBC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A28857856",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Black Dice Interview/Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A29099758",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #13: Single Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A29855659",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #11: Single Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A29339625",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #09: Single Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.bbc.co.uk/dna/collective/A28641918",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Now Hear This #06: Single Reviews")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (writingPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-writing-js.js.map