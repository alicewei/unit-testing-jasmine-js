/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.js");

var moduleFunc = new _module__WEBPACK_IMPORTED_MODULE_0__["ModuleFunc"]([], [], [], [], [], {}, {});
var imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
var somewhere_over_the_rainbow = ['c', 'em', 'f', 'g', 'am'];
var tooManyCooks = ['c', 'g', 'f'];
var iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm'];
var babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab'];
var creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'];
var army = ['ab', 'ebm7', 'dbadd9', 'fm7', 'bbm', 'abmaj7', 'ebm'];
var paperBag = ['bm7', 'e', 'c', 'g', 'b7', 'f', 'em', 'a', 'cmaj7', 'em7', 'a7', 'f7', 'b'];
var toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'];
var bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'];
moduleFunc.train(imagine, 'easy');
moduleFunc.train(somewhere_over_the_rainbow, 'easy');
moduleFunc.train(tooManyCooks, 'easy');
moduleFunc.train(iWillFollowYouIntoTheDark, 'medium');
moduleFunc.train(babyOneMoreTime, 'medium');
moduleFunc.train(creep, 'medium');
moduleFunc.train(paperBag, 'hard');
moduleFunc.train(toxic, 'hard');
moduleFunc.train(bulletproof, 'hard');
moduleFunc.setLabelProbabilities();
moduleFunc.setChordCountsInLabels();
moduleFunc.setProbabilityOfChordsInLabels();
moduleFunc.classify(['d', 'g', 'e', 'dm']);
moduleFunc.classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']);

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! exports provided: ModuleFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFunc", function() { return ModuleFunc; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModuleFunc = /*#__PURE__*/function () {
  function ModuleFunc() {
    var songs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var allChords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var labelCounts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var labelProbabilities = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var chordCountsInLabels = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var probabilityOfChordsInLabels = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

    _classCallCheck(this, ModuleFunc);

    this.songs = songs;
    this.labels = labels;
    this.allChords = allChords;
    this.labelCounts = labelCounts;
    this.labelProbabilities = labelProbabilities;
    this.chordCountsInLabels = chordCountsInLabels;
    this.probabilityOfChordsInLabels = probabilityOfChordsInLabels;
  }

  _createClass(ModuleFunc, [{
    key: "train",
    value: function train(chords, label) {
      this.songs.push([label, chords]);
      this.labels.push(label);

      for (var i = 0; i < chords.length; i++) {
        if (!this.allChords.includes(chords[i])) {
          this.allChords.push(chords[i]);
        }

        if (!!Object.values(this.labelCounts).includes(label)) {
          this.labelCounts[i] = this.labelCounts + 1;
        } else {
          this.labelCounts[i] = 1;
        }
      }
    }
  }, {
    key: "getNumberOfSongs",
    value: function getNumberOfSongs() {
      return this.songs.length;
    }
  }, {
    key: "setLabelProbabilities",
    value: function setLabelProbabilities() {
      var _this = this;

      Object.keys(this.labelCounts).forEach(function (label) {
        var numberOfSongs = _this.getNumberOfSongs();

        _this.labelProbabilities[label] = _this.labelCounts[label] / numberOfSongs;
      });
    }
  }, {
    key: "setChordCountsInLabels",
    value: function setChordCountsInLabels() {
      var _this2 = this;

      this.songs.forEach(function (i) {
        if (_this2.chordCountsInLabels[i[0]] === undefined) {
          _this2.chordCountsInLabels[i[0]] = {};
        }

        i[1].forEach(function (j) {
          if (_this2.chordCountsInLabels[i[0]][j] > 0) {
            _this2.chordCountsInLabels[i[0]][j] = _this2.chordCountsInLabels[i[0]][j] + 1;
          } else {
            _this2.chordCountsInLabels[i[0]][j] = 1;
          }
        });
      });
    }
  }, {
    key: "setProbabilityOfChordsInLabels",
    value: function setProbabilityOfChordsInLabels() {
      var _this3 = this;

      this.probabilityOfChordsInLabels = this.chordCountsInLabels;
      Object.keys(this.probabilityOfChordsInLabels).forEach(function (i) {
        Object.keys(_this3.probabilityOfChordsInLabels[i]).forEach(function (j) {
          _this3.probabilityOfChordsInLabels[i][j] = _this3.probabilityOfChordsInLabels[i][j] * 1.0 / _this3.songs.length;
        });
      });
    }
  }, {
    key: "classify",
    value: function classify(chords) {
      var _this4 = this;

      var ttal = this.labelProbabilities;
      var classified = {};
      Object.keys(ttal).forEach(function (obj) {
        var first = _this4.labelProbabilities[obj] + 1.01;
        chords.forEach(function (chord) {
          var probabilityOfChordInLabel; // let probabilityOfChordInLabel = this.probabilityOfChordsInLabels[obj][chord];
          // Cannot read property [obj] of undefined

          if (probabilityOfChordInLabel === undefined) {
            first + 1.01;
          } else {
            first = first * (probabilityOfChordInLabel + 1.01);
          }
        });
        classified[obj] = first;
      });
    }
  }]);

  return ModuleFunc;
}();



/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./src/module.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/module.js */"./src/module.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map