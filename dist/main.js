/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/client/styles/base.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/client/styles/base.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _media_static_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/static/hero.jpg */ \"./src/client/media/static/hero.jpg\");\n/* harmony import */ var _media_static_testImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/static/testImage.jpg */ \"./src/client/media/static/testImage.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_media_static_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_media_static_testImage_jpg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#hero-banner {\\n  width: 100vw;\\n  height: 100vh;\\n  background-image: linear-gradient(rgba(241, 42, 7, 0.6), rgba(218, 245, 66, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: left;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  flex-direction: column;\\n  color: #fff;\\n  transform: scaleX(-1);\\n}\\n#hero-banner h1 {\\n  font-size: calc(100vw/7);\\n  line-height: 1em;\\n  opacity: 1;\\n  font-weight: 300;\\n  animation-name: fadeIn;\\n  animation-duration: 4s;\\n  padding: 0;\\n  margin: 0;\\n  text-align: left;\\n  width: 90vw;\\n  transform: scaleX(-1);\\n  word-wrap: break-word;\\n}\\n@media (min-width: 1540px) {\\n  #hero-banner h1 {\\n    font-size: 16em;\\n    line-height: 1em;\\n    justify-content: center;\\n  }\\n}\\n@media (min-width: 2027px) {\\n  #hero-banner h1 {\\n    max-width: 1824px;\\n  }\\n}\\n#hero-banner div {\\n  cursor: pointer;\\n  transform: scaleX(-1);\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  animation-name: flash;\\n  animation-duration: 3s;\\n  animation-delay: 2s;\\n  animation-iteration-count: infinite;\\n  opacity: 0;\\n  margin: 20vh 0 0 0;\\n  width: 300px;\\n}\\n@media (min-width: 768px) {\\n  #hero-banner div {\\n    width: 500px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  #hero-banner div {\\n    margin: 0;\\n  }\\n}\\n#hero-banner div img {\\n  height: 1em;\\n  width: auto;\\n  margin: 0 5px;\\n}\\n@media (min-width: 768px) {\\n  #hero-banner div img {\\n    font-size: 1.6em;\\n  }\\n}\\n#hero-banner div h2 {\\n  font-size: 2em;\\n  font-weight: 300;\\n  margin: 0;\\n}\\n@media (min-width: 768px) {\\n  #hero-banner div h2 {\\n    font-size: 2.5em;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  #hero-banner div h2 {\\n    font-size: 3em;\\n  }\\n}\\n\\n@keyframes flash {\\n  0% {\\n    opacity: 0;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n  100% {\\n    opacity: 0;\\n  }\\n}\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n#form-section {\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #eeeeee;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  padding-top: 3%;\\n}\\n#form-section > h2 {\\n  width: 90vw;\\n  font-size: 2em;\\n  font-weight: 300;\\n  text-align: center;\\n  margin: 0 0 3% 0;\\n}\\n@media (min-width: 425px) {\\n  #form-section > h2 {\\n    font-size: 2.2em;\\n    width: 80vw;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #form-section > h2 {\\n    font-size: 3em;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  #form-section > h2 {\\n    font-size: 4em;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #form-section > h2 {\\n    width: 90%;\\n  }\\n}\\n#form-section > h2 em {\\n  color: #f62c19;\\n}\\n#form-section form {\\n  background-color: #fff;\\n  border-radius: 2px;\\n  width: 90vw;\\n  height: 30vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 1.5rem;\\n  text-align: center;\\n  margin-bottom: 3%;\\n}\\n@media (min-width: 425px) {\\n  #form-section form {\\n    width: 80vw;\\n    max-width: 340px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #form-section form {\\n    max-width: none;\\n    width: 85%;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  #form-section form {\\n    flex-direction: row;\\n    height: 10vh;\\n    align-items: center;\\n    justify-content: space-around;\\n    font-size: 2rem;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  #form-section form {\\n    max-width: 1300px;\\n  }\\n}\\n#form-section form button {\\n  width: 85%;\\n  margin: 1em 0 0 0;\\n  font-size: 1em;\\n  background-color: rgba(245, 81, 66, 0.5);\\n  border: none;\\n  color: #f62c19;\\n}\\n@media (min-width: 1024px) {\\n  #form-section form button {\\n    width: 12%;\\n    align-self: center;\\n    margin: 0;\\n  }\\n}\\n\\n#date-div {\\n  width: 85%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n@media (min-width: 1024px) {\\n  #date-div {\\n    width: 35%;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  #date-div {\\n    width: 30%;\\n  }\\n}\\n#date-div label {\\n  color: dimgray;\\n  text-align: left;\\n  font-size: 1rem;\\n  margin: 0.5rem 0;\\n}\\n@media (min-width: 1024px) {\\n  #date-div label {\\n    margin: 0 20px 0 0;\\n    font-size: 1.5rem;\\n  }\\n}\\n#date-div input {\\n  font-size: 1em;\\n  background-color: #f3f3f3;\\n  border: none;\\n  padding: 5px;\\n}\\n\\n#dest-div {\\n  width: 85%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n@media (min-width: 1024px) {\\n  #dest-div {\\n    width: 45%;\\n    margin: 0 0 0 10px;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n}\\n#dest-div label {\\n  color: dimgray;\\n  text-align: left;\\n  font-size: 1rem;\\n  margin: 0.5rem 0;\\n}\\n@media (min-width: 1024px) {\\n  #dest-div label {\\n    margin: 0 20px 0 0;\\n    font-size: 1.5rem;\\n  }\\n}\\n#dest-div input {\\n  font-size: 1em;\\n  background-color: #f3f3f3;\\n  border: none;\\n  padding: 5px;\\n}\\n@media (min-width: 1024px) {\\n  #dest-div input {\\n    width: 60%;\\n  }\\n}\\n\\n.results {\\n  width: 90vw;\\n  background-color: #fff;\\n  flex-direction: column;\\n}\\n@media (min-width: 425px) {\\n  .results {\\n    width: 80vw;\\n    max-width: 340px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .results {\\n    max-width: none;\\n    width: 85%;\\n    flex-direction: row;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  .results {\\n    max-width: 1300px;\\n  }\\n}\\n.results .results-image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 180px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n}\\n@media (min-width: 768px) {\\n  .results .results-image {\\n    max-width: none;\\n    width: 60%;\\n    height: auto;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .results .results-image {\\n    width: 55%;\\n  }\\n}\\n.results .results-image .locationHeader {\\n  background-color: white;\\n  font-weight: 300;\\n  font-size: 2.5rem;\\n  padding: 0 2%;\\n}\\n@media (min-width: 1024px) {\\n  .results .results-image .locationHeader {\\n    font-size: 3.5rem;\\n  }\\n}\\n.results .results-text {\\n  height: 240px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n@media (min-width: 768px) {\\n  .results .results-text {\\n    width: 40%;\\n    height: auto;\\n    height: 40vh;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .results .results-text {\\n    width: 45%;\\n    height: 50vh;\\n  }\\n}\\n.results .results-text .results-divider {\\n  background-color: lightgray;\\n  height: 2px;\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n.results button {\\n  width: 100%;\\n  font-size: 1.5em;\\n  background-color: rgba(245, 81, 66, 0.5);\\n  border: none;\\n  color: #f62c19;\\n  padding: 1% 0;\\n}\\n\\n.weather-section {\\n  display: flex;\\n}\\n@media (min-width: 768px) {\\n  .weather-section {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n.weather-section .weather-icon {\\n  max-width: 160px;\\n  height: auto;\\n}\\n@media (min-width: 1024px) {\\n  .weather-section .weather-icon {\\n    width: 160px;\\n    height: auto;\\n  }\\n}\\n.weather-section .weather-details {\\n  width: 55%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 0 1vw 0 0;\\n}\\n.weather-section .weather-details h3 {\\n  font-weight: 300;\\n  font-size: 1.3rem;\\n  margin: 0 0 10px 0;\\n  text-align: center;\\n}\\n@media (min-width: 768px) {\\n  .weather-section .weather-details h3 {\\n    width: auto;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .weather-section .weather-details h3 {\\n    font-size: 1.8rem;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  .weather-section .weather-details h3 {\\n    font-size: 2rem;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .weather-section .weather-details {\\n    padding: 0;\\n  }\\n}\\n\\n.temperature-details {\\n  display: flex;\\n  align-items: center;\\n}\\n@media (min-width: 768px) {\\n  .temperature-details {\\n    justify-content: center;\\n  }\\n}\\n.temperature-details img {\\n  height: 30px;\\n  width: auto;\\n}\\n.temperature-details h4 {\\n  margin: 0 5%;\\n  font-size: 1.3rem;\\n  font-weight: 300;\\n}\\n@media (min-width: 1024px) {\\n  .temperature-details h4 {\\n    font-size: 1.8rem;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  .temperature-details h4 {\\n    font-size: 2rem;\\n  }\\n}\\n\\n.time-to-trip {\\n  text-align: center;\\n  display: flex;\\n  justify-content: center;\\n  padding: 5px;\\n  font-size: 1.3rem;\\n  font-weight: 300;\\n  margin: 1vh 0 0 0;\\n}\\n@media (min-width: 1024px) {\\n  .time-to-trip {\\n    font-size: 1.8rem;\\n    margin: 3vh 0 0 0;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  .time-to-trip {\\n    font-size: 2rem;\\n  }\\n}\\n.time-to-trip img {\\n  height: 25px;\\n  width: auto;\\n}\\n@media (min-width: 1024px) {\\n  .time-to-trip img {\\n    height: 40px;\\n  }\\n}\\n.time-to-trip p {\\n  margin: 0;\\n}\\n\\n.display-flex {\\n  display: flex;\\n  animation: flexIn 2s;\\n  opacity: 1;\\n}\\n\\n.display-none {\\n  display: none;\\n  opacity: 0;\\n}\\n\\n@keyframes flexIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n.transformStartPosition {\\n  transform: translateY(25vh);\\n}\\n\\n.transformEndPosition {\\n  animation: transformAnimation 2s;\\n  transform: translateY(0);\\n}\\n\\n@keyframes transformAnimation {\\n  0% {\\n    transform: translateY(25vh);\\n  }\\n  100% {\\n    transform: translateY(0);\\n  }\\n}\\n.loader {\\n  border: 16px solid #fff;\\n  /* Light grey */\\n  border-top: 16px solid #f62c19;\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px;\\n}\\n@media (min-width: 768px) {\\n  .loader {\\n    width: 60px;\\n    height: 60px;\\n  }\\n}\\n\\n.loader-animation-translate-rotate {\\n  animation: spinTranslate 2s linear infinite;\\n}\\n\\n.loader-animation-rotate {\\n  animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spinTranslate {\\n  0% {\\n    transform: translateY(25vh) rotate(0deg);\\n  }\\n  100% {\\n    transform: translateY(25vh) rotate(360deg);\\n  }\\n}\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.section-display-none {\\n  display: none;\\n}\\n\\n.section-display-flex {\\n  display: flex;\\n}\\n\\n#travel-log {\\n  min-height: 94vh;\\n  width: 100vw;\\n  background-color: #f6f5f5;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  padding-bottom: 3vh;\\n  padding-top: 3vh;\\n}\\n#travel-log > h2 {\\n  width: 90vw;\\n  font-size: 2em;\\n  font-weight: 300;\\n  text-align: center;\\n  margin: 0 0 3% 0;\\n}\\n@media (min-width: 425px) {\\n  #travel-log > h2 {\\n    font-size: 2.2em;\\n    width: 80vw;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #travel-log > h2 {\\n    font-size: 3em;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  #travel-log > h2 {\\n    font-size: 4em;\\n  }\\n}\\n@media (min-width: 768px) {\\n  #travel-log > h2 {\\n    width: 90%;\\n  }\\n}\\n#travel-log > h2 em {\\n  color: #f62c19;\\n}\\n\\n.travel-cards {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-auto-rows: auto;\\n  width: 90vw;\\n  grid-row-gap: 2vh;\\n}\\n@media (min-width: 425px) {\\n  .travel-cards {\\n    width: 80vw;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .travel-cards {\\n    width: 90vw;\\n    grid-template-columns: 1fr 1fr;\\n    grid-column-gap: 5vw;\\n    grid-row-gap: 5vw;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .travel-cards {\\n    width: 90vw;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-column-gap: 30px;\\n    grid-row-gap: 30px;\\n  }\\n}\\n@media (min-width: 1330px) {\\n  .travel-cards {\\n    max-width: 1197px;\\n  }\\n}\\n\\n@keyframes fadeCardIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n.travel-card {\\n  animation-name: fadeCardIn;\\n  animation-duration: 3s;\\n  animation-timing-function: ease-in;\\n  opacity: 1;\\n  background-color: #fff;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n.travel-card .card-image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 180px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n}\\n.travel-card .card-image .locationHeader {\\n  background-color: white;\\n  font-weight: 300;\\n  font-size: 2.5rem;\\n  padding: 0 2%;\\n}\\n@media (min-width: 1024px) {\\n  .travel-card .card-image .locationHeader {\\n    font-size: 3rem;\\n  }\\n}\\n.travel-card .card-text {\\n  height: 240px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.travel-card .card-text .card-divider {\\n  background-color: lightgray;\\n  height: 2px;\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n.travel-card button {\\n  width: 100%;\\n  font-size: 1.5em;\\n  background-color: rgba(245, 81, 66, 0.5);\\n  border: none;\\n  color: #f62c19;\\n  padding: 1% 0;\\n}\\n\\n.card-weather-section {\\n  display: flex;\\n  justify-content: center;\\n}\\n.card-weather-section .card-weather-icon {\\n  max-width: 160px;\\n  height: auto;\\n}\\n.card-weather-section .card-weather-details {\\n  width: 55%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 0 1vw 0 0;\\n}\\n.card-weather-section .card-weather-details h3 {\\n  font-weight: 300;\\n  font-size: 1.3rem;\\n  margin: 0 0 10px 0;\\n  text-align: center;\\n}\\n@media (min-width: 768px) {\\n  .card-weather-section .card-weather-details {\\n    padding: 0;\\n  }\\n}\\n\\n.card-temperature-details {\\n  display: flex;\\n  align-items: center;\\n}\\n.card-temperature-details img {\\n  height: 30px;\\n  width: auto;\\n}\\n.card-temperature-details h4 {\\n  margin: 0 5%;\\n  font-size: 1.3rem;\\n  font-weight: 300;\\n}\\n\\n.card-time-to-trip {\\n  text-align: center;\\n  display: flex;\\n  justify-content: center;\\n  padding: 5px;\\n  font-size: 1.3rem;\\n  font-weight: 300;\\n  margin: 1vh 0 0 0;\\n}\\n.card-time-to-trip img {\\n  height: 25px;\\n  width: auto;\\n}\\n.card-time-to-trip p {\\n  margin: 0;\\n}\\n\\n.add-new-trip {\\n  border: 2px rgba(245, 81, 66, 0.5) solid;\\n  height: 416px;\\n  width: 100%;\\n  color: rgba(245, 81, 66, 0.5);\\n  font-weight: 300;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.8rem;\\n  cursor: pointer;\\n}\\n.add-new-trip img {\\n  width: 25%;\\n  height: auto;\\n}\\n.add-new-trip:hover {\\n  font-weight: 600;\\n}\\n.add-new-trip:hover img {\\n  transform: scale(1.1, 1.1);\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.shadow {\\n  -webkit-box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.3);\\n  box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.3);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://travel-app/./src/client/styles/base.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://travel-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://travel-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./base.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/client/styles/base.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://travel-app/./src/client/styles/base.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://travel-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/base.scss */ \"./src/client/styles/base.scss\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/client/js/app.js\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n/* harmony import */ var _js_trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/trip */ \"./src/client/js/trip.js\");\n/* harmony import */ var _media_static_double_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/static/double_arrow.png */ \"./src/client/media/static/double_arrow.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n//images\r\n\n\n//# sourceURL=webpack://travel-app/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/***/ (() => {

eval("//interactive webpage\r\nconst formSection = document.querySelector('#form-section');\r\nconst callToAction = document.querySelector('.call-to-action');\r\n\r\ncallToAction.addEventListener('click', (event)=> {\r\n    formSection.scrollIntoView({\r\n        behavior: \"smooth\"\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://travel-app/./src/client/js/app.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideResultsCard\": () => (/* binding */ hideResultsCard)\n/* harmony export */ });\n/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ \"./src/client/js/trip.js\");\n\r\n\r\n//handle the form controls\r\nconst searchBtn = document.querySelector('#search');\r\n\r\nsearchBtn.addEventListener('click', (event) => {\r\n    //stop reloading of page\r\n    event.preventDefault();\r\n\r\n    //handle form validation here\r\n    //TODO: user input validation\r\n\r\n\r\n    //get the user input data\r\n    const destination = document.querySelector('#destination').value;\r\n    const date = document.querySelector('#date').value;\r\n\r\n    const sendObj = {\r\n        destination: destination,\r\n        date: date\r\n    }\r\n\r\n    //determine if this is the first search or not\r\n    if (isFirstSearch()){\r\n        console.log('first search');\r\n        displayLoaderSpinnerFirstSearch();\r\n    } else {\r\n        //not first search\r\n        console.log('Not first search');\r\n        //remove results and show non translated spinner\r\n        hideResultsCard();\r\n        displayLoaderSpinner();\r\n    }\r\n\r\n\r\n    \r\n\r\n    postData('http://localhost:8000/query', sendObj)\r\n        .then(result => {\r\n            displayResults(result);\r\n            //send latest results to the trip js file\r\n            //so they can be used to display if trip is added\r\n            //to my trips section\r\n            (0,_trip__WEBPACK_IMPORTED_MODULE_0__.updateResults)(result);\r\n        })\r\n        .catch((error) => {\r\n            console.log(error);\r\n        });\r\n\r\n});\r\n\r\n/**\r\n * Send a post request in JSON format to the defined url \r\n * @param {string} url \r\n * @param {object} data \r\n */\r\n const postData = async(url, data) => {\r\n\r\n    const response = await fetch(url, {\r\n        method: 'POST',\r\n        headers:{\r\n            'content-type':'application/json'\r\n        },\r\n        body: JSON.stringify(data)\r\n    });\r\n\r\n    try{\r\n        const newData = await response.json();\r\n        return newData;\r\n    }catch(error){\r\n        throw Error(error);\r\n    }\r\n}\r\n\r\nconst displayLoaderSpinnerFirstSearch = () => {\r\n    const loader = document.querySelector('.loader');\r\n    loader.classList.add('display-flex');\r\n    loader.classList.remove('display-none');\r\n}\r\n\r\nconst hideLoaderSpinner = () => {\r\n    const loader = document.querySelector('.loader');\r\n    loader.classList.remove('display-flex');\r\n    loader.classList.add('display-none');\r\n}\r\n\r\nconst displayLoaderSpinner = () => {\r\n\r\n    const loader = document.querySelector('.loader');\r\n    loader.classList.add('display-flex');\r\n    loader.classList.remove('display-none');\r\n\r\n    if (loader.classList.contains('loader-animation-translate-rotate')){\r\n        loader.classList.remove('loader-animation-translate-rotate');\r\n        loader.classList.add('loader-animation-rotate');\r\n    }\r\n\r\n}\r\n\r\nconst displayResults = (data) => {\r\n\r\n    console.log('From displayResults function');\r\n    console.log(data);\r\n\r\n    //get the elements to update\r\n    const image = document.querySelector('.results-image'); //location image\r\n    const locationName = document.querySelector('.locationHeader'); //location name\r\n    const daysElement = document.querySelector('.time-to-trip > p'); //days until trip\r\n    \r\n    //weather details\r\n    const weatherDescription = document.querySelector('.weather-details > h3');\r\n    const weatherIcon = document.querySelector('.weather-icon');\r\n    const weatherTemps = document.querySelector('.temperature-details-temps');\r\n\r\n    //extract the results from the object\r\n    const imageURL = data.response.imageUrl;\r\n    const location = data.response.location.place;\r\n    const daysToTrip = data.response.daysToTrip;\r\n\r\n    //weather\r\n    const weatherInfo = data.response.weather.description;\r\n    const weatherIconUrl = data.response.weather.iconUrl;\r\n    const highTemp = data.response.weather.highTemp;\r\n    const lowTemp = data.response.weather.lowTemp;\r\n\r\n    image.style.cssText = `background-image: url(${imageURL});`\r\n    locationName.innerHTML = location;\r\n    weatherDescription.innerHTML = weatherInfo;\r\n    weatherIcon.src = weatherIconUrl;\r\n    weatherTemps.innerHTML = `${highTemp} / ${lowTemp} &deg C`;\r\n    daysElement.innerHTML = `${daysToTrip} days until your trip`\r\n\r\n\r\n    //if the form has transformEndPosition class then a search has already occured\r\n\r\n\r\n    if (isFirstSearch()){\r\n        document.querySelector('form').classList.add('transformEndPosition');\r\n        document.querySelector('#form-section > h2').classList.add('transformEndPosition');\r\n    \r\n        document.querySelector('form').classList.remove('transformStartPosition');\r\n        document.querySelector('#form-section > h2').classList.remove('transformStartPosition');\r\n    } else {\r\n        displayResultsCard();\r\n    }\r\n\r\n    hideLoaderSpinner();\r\n    //display the results card\r\n    //document.querySelector('.results').classList.remove('display-none');\r\n    //document.querySelector('.results').classList.add('display-flex');\r\n}\r\n\r\n//set up some animation\r\ndocument.querySelector('form').addEventListener('animationend', (event)=>{\r\n    console.log('Animation has ended');\r\n    displayResultsCard();\r\n});\r\n\r\n//display results\r\nconst displayResultsCard = () => {\r\n    document.querySelector('.results').classList.remove('display-none');\r\n    document.querySelector('.results').classList.add('display-flex');\r\n}\r\n\r\n//hide results\r\nconst hideResultsCard = () => {\r\n    document.querySelector('.results').classList.add('display-none');\r\n    document.querySelector('.results').classList.remove('display-flex');\r\n}\r\n\r\n//determine if this is first search or the not\r\n//first search has different animation to the next searchs\r\nconst isFirstSearch = () => {\r\n    return document.querySelector('form').classList.contains('transformStartPosition');\r\n}\n\n//# sourceURL=webpack://travel-app/./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/js/trip.js":
/*!*******************************!*\
  !*** ./src/client/js/trip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateResults\": () => (/* binding */ updateResults)\n/* harmony export */ });\n/* harmony import */ var _media_static_temperature_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/static/temperature_icon.png */ \"./src/client/media/static/temperature_icon.png\");\n/* harmony import */ var _media_static_clock_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/static/clock_icon.png */ \"./src/client/media/static/clock_icon.png\");\n/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formHandler */ \"./src/client/js/formHandler.js\");\n//images\r\n\r\n\r\n\r\n//help function\r\n\r\n\r\n//Control all actions to do with planning trip\r\nlet latestResults = null;\r\n\r\nconst updateResults = (resultsObj) => {\r\n    latestResults = resultsObj;\r\n} \r\n\r\n//Add trip. Click the add trip button on the results form\r\nconst addTripButton = document.querySelector('.results button');\r\naddTripButton.addEventListener('click', (event)=> {\r\n    \r\n    if (latestResults == null){\r\n        alert('error adding trip results');\r\n        return;\r\n    }\r\n    //parse results object for add trip function\r\n    const imageURL = latestResults.response.imageUrl;\r\n    const location = latestResults.response.location.place;\r\n    const daysToTrip = latestResults.response.daysToTrip;\r\n    const weatherInfo = latestResults.response.weather.description;\r\n    const weatherIconUrl = latestResults.response.weather.iconUrl;\r\n    const highTemp = latestResults.response.weather.highTemp;\r\n    const lowTemp = latestResults.response.weather.lowTemp;\r\n    \r\n    addTrip(location, daysToTrip, weatherIconUrl, weatherInfo, highTemp, lowTemp, imageURL);\r\n\r\n    //if this is the first trip to add then display the my trip section\r\n    //remove the display none class and add the display flex class\r\n    const myTripSection = document.querySelector('#travel-log');\r\n    if (myTripSection.classList.contains('section-display-none')){\r\n        myTripSection.classList.remove('section-display-none');\r\n        myTripSection.classList.add('section-display-flex');\r\n    }\r\n\r\n    //scroll to the my trip section\r\n    myTripSection.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        alignToTop: false\r\n    });\r\n\r\n    //reset result screen\r\n    //delay this so it doesnt display appear instantly, \r\n    //spoiling the scroll smooth effect \r\n    setTimeout(resetResults, 500);\r\n});\r\n\r\n\r\n/**\r\n * Add the new trip into the my trip section by creating a card using a document fragment\r\n * and inserting it at the end of the my trip card section\r\n * @param {} location \r\n */\r\nconst addTrip = (location, timeToTrip, weatherIcon, weatherDescription, highTemp, lowTemp, imageURL) => {\r\n    //create a Document fragment to contain the card\r\n    //let tripCard = new DocumentFragment();\r\n\r\n    let htmlString = `<div class=\"travel-card display-flex shadow\">\r\n    <div class=\"card-image\">\r\n      <h2 class=\"locationHeader\">${location}</h2>\r\n    </div>\r\n    <div class =\"card-text\">\r\n      <div class=\"card-time-to-trip\">\r\n        <img src=${_media_static_clock_icon_png__WEBPACK_IMPORTED_MODULE_1__}>\r\n        <p>${timeToTrip} days until trip</p>\r\n      </div>\r\n      <div class=\"card-divider\"></div>\r\n      <div class=\"card-weather-section\">\r\n        <img class=\"card-weather-icon\" src=\"${weatherIcon}\">\r\n        <div class=\"card-weather-details\">\r\n          <h3>${weatherDescription}</h3>\r\n          <div class=\"card-temperature-details\">\r\n            <img class=\"card-temperature-details-image\" src=${_media_static_temperature_icon_png__WEBPACK_IMPORTED_MODULE_0__}>\r\n            <h4 class=\"card-temperature-details-temps\">${highTemp} / ${lowTemp} &deg C</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"remove-trip\" >Remove Trip</button>\r\n    </div>\r\n    </div>`;\r\n\r\n    let tripCard = htmlToElement(htmlString);\r\n    tripCard.querySelector('.card-image').style.cssText = `background-image: url(${imageURL});`;\r\n\r\n    //add the remove card event listener\r\n    tripCard.querySelector('.remove-trip').addEventListener('click', (event)=> {\r\n        console.log('I am clicking a delete button');\r\n        event.target.parentElement.parentElement.remove();\r\n    });\r\n\r\n    //add card to dom\r\n    //document.querySelector('.travel-cards').insertAdjacentElement(\"beforeend\", tripCard);\r\n    const addNewTripCard = document.querySelector('.add-new-trip');\r\n    addNewTripCard.parentElement.insertBefore(tripCard, addNewTripCard);\r\n\r\n}\r\n\r\n\r\n//html to Element\r\nconst htmlToElement = (htmlString) => {\r\n    let template = document.createElement('template'); //create a template element\r\n    const html = htmlString.trim();\r\n    template.innerHTML = html; //add the html string\r\n    return template.content.firstChild; //return the content inside the template which is an element\r\n}\r\n\r\n/**\r\n * From the results card and move the form and heading back to the center\r\n */\r\nconst resetResults = () => {\r\n    //hide the results card\r\n    ;(0,_formHandler__WEBPACK_IMPORTED_MODULE_2__.hideResultsCard)();\r\n    //moves the heading and form back to the middle of the page\r\n    document.querySelector('form').classList.remove('transformEndPosition');\r\n    document.querySelector('#form-section > h2').classList.remove('transformEndPosition');\r\n    document.querySelector('form').classList.add('transformStartPosition');\r\n    document.querySelector('#form-section > h2').classList.add('transformStartPosition');\r\n}\r\n\r\n//Add New Trip Card Button\r\ndocument.querySelector('.add-new-trip').addEventListener('click', (event) => {\r\n    //simpl;y scroll up to the form section\r\n    document.querySelector('#form-section').scrollIntoView({\r\n        behavior: \"smooth\"\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://travel-app/./src/client/js/trip.js?");

/***/ }),

/***/ "./src/client/media/static/clock_icon.png":
/*!************************************************!*\
  !*** ./src/client/media/static/clock_icon.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a88d6cc138007e5770e.png\";\n\n//# sourceURL=webpack://travel-app/./src/client/media/static/clock_icon.png?");

/***/ }),

/***/ "./src/client/media/static/double_arrow.png":
/*!**************************************************!*\
  !*** ./src/client/media/static/double_arrow.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e9bc89a406b4baa590f7.png\";\n\n//# sourceURL=webpack://travel-app/./src/client/media/static/double_arrow.png?");

/***/ }),

/***/ "./src/client/media/static/hero.jpg":
/*!******************************************!*\
  !*** ./src/client/media/static/hero.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a355ffb66114ec48c21d.jpg\";\n\n//# sourceURL=webpack://travel-app/./src/client/media/static/hero.jpg?");

/***/ }),

/***/ "./src/client/media/static/temperature_icon.png":
/*!******************************************************!*\
  !*** ./src/client/media/static/temperature_icon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8afec4b4a994dbd0e696.png\";\n\n//# sourceURL=webpack://travel-app/./src/client/media/static/temperature_icon.png?");

/***/ }),

/***/ "./src/client/media/static/testImage.jpg":
/*!***********************************************!*\
  !*** ./src/client/media/static/testImage.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a3a5077a88c45b54f074.jpg\";\n\n//# sourceURL=webpack://travel-app/./src/client/media/static/testImage.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	
/******/ })()
;