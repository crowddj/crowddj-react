module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(82);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(85);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /* --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif; */\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */ }\n", "", {"version":3,"sources":["/./components/variables.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;EACE;;gFAE8E;EAC9E,wEAAwE;EACxE;;gFAE8E;EAC9E,4BAA4B;EAC5B;;gFAE8E;EAC9E,uBAAuB;EACvB,gCAAgC;EAChC,uBAAuB;EACvB,2BAA2B;EAC3B,uBAAuB;EACvB,6BAA6B;EAC7B,wBAAwB;EACxB,iCAAiC,EAAE","file":"variables.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /* --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif; */\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */ }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reBase = __webpack_require__(88);

var _reBase2 = _interopRequireDefault(_reBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _reBase2.default.createClass({
  apiKey: "AIzaSyAtnwNgh3qzpYFwurHb0Myg7k8ZLnRyTTA",
  authDomain: "crowddj-be2bb.firebaseapp.com",
  databaseURL: "https://crowddj-be2bb.firebaseio.com"
}, 'crowddj-be2bb');

exports.default = base;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddedSongs = getAddedSongs;
exports.hasAddedSong = hasAddedSong;
exports.addSong = addSong;
exports.getVotedSongs = getVotedSongs;
exports.voteSong = voteSong;
exports.getRatedSongs = getRatedSongs;
exports.rateSong = rateSong;

var _Cookies = __webpack_require__(45);

var _Cookies2 = _interopRequireDefault(_Cookies);

var _reactCookie = __webpack_require__(89);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAddedSongs() {
  var currentAddedSongs = _reactCookie2.default.load(_Cookies2.default.AddedSongs);
  if (currentAddedSongs == null || currentAddedSongs == undefined || currentAddedSongs.constructor !== Array) {
    currentAddedSongs = [];
  }
  return currentAddedSongs;
}

function hasAddedSong(song) {
  return getAddedSongs().filter(function (item) {
    return item == song.name;
  }).length > 0;
}

function addSong(song) {
  var current = getAddedSongs();
  current.push(song.name);
  _reactCookie2.default.save(_Cookies2.default.AddedSongs, current);
  return current;
}

function getVotedSongs() {
  var currentVotedSongs = _reactCookie2.default.load(_Cookies2.default.VotedSongs);
  if (currentVotedSongs == null || currentVotedSongs == undefined || currentVotedSongs.constructor !== Array) {
    currentVotedSongs = [];
  }
  return currentVotedSongs;
}

// returns true if not yet voted, false if already voted for
function voteSong(song) {
  var current = getVotedSongs();

  if (current.includes(song.trackId)) {
    return false;
  } else {
    current.push(song.trackId);
    _reactCookie2.default.save(_Cookies2.default.VotedSongs, current);
    return true;
  }
}

function getRatedSongs() {
  var currentRatedSongs = _reactCookie2.default.load(_Cookies2.default.RatedSongs);
  if (currentRatedSongs == null || currentRatedSongs == undefined || currentRatedSongs.constructor !== Array) {
    currentRatedSongs = [];
  }
  return currentRatedSongs;
}

// returns true if not yet voted, false if already voted for
function rateSong(trackId) {
  var current = getRatedSongs();

  if (current.includes(trackId)) {
    return false;
  } else {
    current.push(trackId);
    _reactCookie2.default.save(_Cookies2.default.RatedSongs, current);
    return true;
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Layout/Layout.js'; /**
                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                     *
                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                     *
                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                     */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Layout = __webpack_require__(71);

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _SearchBox = __webpack_require__(16);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(18);

var _SongList2 = _interopRequireDefault(_SongList);

var _NowPlaying = __webpack_require__(15);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'site', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        _react2.default.createElement(_Header2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })
      );
    }
  }]);
  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  children: _react.PropTypes.node.isRequired
};
exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(83);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/NowPlaying/NowPlaying.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NowPlaying = __webpack_require__(72);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(13);

var _NowPlayingRating = __webpack_require__(40);

var _NowPlayingRating2 = _interopRequireDefault(_NowPlayingRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseURL = 'https://api.spotify.com/v1/tracks/';

var NowPlaying = function (_React$Component) {
  (0, _inherits3.default)(NowPlaying, _React$Component);

  function NowPlaying(props) {
    (0, _classCallCheck3.default)(this, NowPlaying);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NowPlaying.__proto__ || (0, _getPrototypeOf2.default)(NowPlaying)).call(this, props));

    _this.state = {
      current: {}
    };

    _this.vote = _this.vote.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NowPlaying, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('in now playing: ' + this.props.roomId);
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/current', {
        context: this,
        state: 'current'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.getAlbumArtwork();
    }
  }, {
    key: 'getAlbumArtwork',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var response, responseJson, artwork;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('' + baseURL + this.state.current.trackId);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                artwork = responseJson.album.images[0].url;

                this.setState({ imageURL: artwork });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAlbumArtwork() {
        return _ref.apply(this, arguments);
      }

      return getAlbumArtwork;
    }()
  }, {
    key: 'vote',
    value: function vote(rating) {
      var state = (0, _extends3.default)({}, this.state);
      if ((0, _utils.rateSong)(this.state.current.trackId)) {
        var current = (0, _extends3.default)({}, this.state.current);
        if (current.rating) {
          console.log(current.rating);
          var weightedRating = current.rating * current.ratingCount;
          weightedRating += rating;
          current.ratingCount += 1;
          current.rating = weightedRating / current.ratingCount;
        } else {
          current.rating = rating;
          current.ratingCount = 1;
        }
        state.current = current;
        this.setState(state);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'now-playing', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        },
        _react2.default.createElement('img', { className: 'artwork', src: this.state.imageURL, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }),
        !this.props.isDj && _react2.default.createElement(_NowPlayingRating2.default, {
          track: this.state.current.name,
          sendRating: this.vote.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }),
        _react2.default.createElement(
          'div',
          { className: 'info', __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'currently', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            },
            'Currently Playing'
          ),
          _react2.default.createElement(
            'div',
            { className: 'song', __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            },
            _react2.default.createElement(
              'span',
              { className: 'name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                },
                __self: this
              },
              this.state.current.name,
              ','
            ),
            _react2.default.createElement(
              'span',
              { className: 'artist', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                },
                __self: this
              },
              this.state.current.artist
            )
          )
        ),
        this.props.isDj && _react2.default.createElement(
          'div',
          { className: 'vote', __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          _react2.default.createElement(
            'i',
            { className: 'material-icons', __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            'favorite_solid'
          ),
          (0, _keys2.default)(this.state.current).length > 0 && _react2.default.createElement(
            'span',
            { className: 'upvotes', __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            },
            this.state.current.rating.toString().substring(0, 3)
          )
        )
      );
    }
  }]);
  return NowPlaying;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_NowPlaying2.default)(NowPlaying);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SearchBox/SearchBox.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SearchBox = __webpack_require__(76);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SearchResults = __webpack_require__(43);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSearchURL = 'https://api.spotify.com/v1/search';
var searchTypes = 'artist,track';

var SearchBox = function (_React$Component) {
  (0, _inherits3.default)(SearchBox, _React$Component);

  function SearchBox(props) {
    (0, _classCallCheck3.default)(this, SearchBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBox.__proto__ || (0, _getPrototypeOf2.default)(SearchBox)).call(this, props));

    _this.state = {
      query: '',
      tracks: []
    };

    _this.onChangeSearch = _this.onChangeSearch.bind(_this);
    _this.getSearchResults = _this.getSearchResults.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SearchBox, [{
    key: 'onChangeSearch',
    value: function onChangeSearch(event) {
      this.setState({ query: event.target.value }, this.getSearchResults);
    }
  }, {
    key: 'getSearchResults',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var response, responseJson, tracks, artists;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.query.length > 0)) {
                  _context.next = 18;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return fetch(baseSearchURL + '?q=' + this.state.query + '&type=' + searchTypes);

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                responseJson = _context.sent;
                tracks = this.filterTrackDuplicates(responseJson.tracks.items.sort(this.popularitySort));
                artists = responseJson.artists.items.sort(this.popularitySort);

                this.setState({ tracks: tracks.slice(0, 10) });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](1);

                console.log(_context.t0);

              case 16:
                _context.next = 19;
                break;

              case 18:
                this.setState({ tracks: [] });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      function getSearchResults() {
        return _ref.apply(this, arguments);
      }

      return getSearchResults;
    }()
  }, {
    key: 'popularitySort',
    value: function popularitySort(a, b) {
      return b.popularity - a.popularity;
    }
  }, {
    key: 'filterTrackDuplicates',
    value: function filterTrackDuplicates(tracks) {
      var filtered = [];
      var seen = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(tracks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var track = _step.value;

          var trackArtist = track.artists[0].name;
          if (!seen[track.name + '-' + trackArtist]) {
            filtered.push(track);
            seen[track.name + '-' + trackArtist] = true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return filtered;
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({ query: '', tracks: [] });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-box', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: 'search-bar', __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'placeholder', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            },
            _react2.default.createElement(
              'i',
              { className: 'material-icons search', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              'search'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              placeholder: 'Search for a song to request',
              value: this.state.query,
              onChange: this.onChangeSearch,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }),
            _react2.default.createElement(
              'i',
              { className: 'material-icons cancel', onClick: this.clearSearch.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              },
              'cancel'
            )
          )
        ),
        _react2.default.createElement(_SearchResults2.default, { tracks: this.state.tracks, roomId: this.props.roomId, onSelectSong: this.clearSearch.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        })
      );
    }
  }]);
  return SearchBox;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_SearchBox2.default)(SearchBox);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SongList/SongList.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SongList = __webpack_require__(79);

var _SongList2 = _interopRequireDefault(_SongList);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _Song = __webpack_require__(44);

var _Song2 = _interopRequireDefault(_Song);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongList = function (_React$Component) {
  (0, _inherits3.default)(SongList, _React$Component);

  function SongList(props) {
    (0, _classCallCheck3.default)(this, SongList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SongList.__proto__ || (0, _getPrototypeOf2.default)(SongList)).call(this, props));

    _this.state = {
      queue: []
    };
    return _this;
  }

  (0, _createClass3.default)(SongList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('roomid' + this.props.roomId);
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/queue', {
        context: this,
        state: 'queue',
        asArray: true
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'list-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        _react2.default.createElement(
          'h3',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          'Requested Songs'
        ),
        _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }),
        _react2.default.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          _react2.default.createElement(
            'table',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            _react2.default.createElement(
              'tbody',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              this.state.queue.sort(function (a, b) {
                return b.voteCount - a.voteCount;
              }).map(function (song) {
                return _react2.default.createElement(_Song2.default, {
                  key: song.key,
                  song: song,
                  roomId: _this2.props.roomId,
                  isDj: _this2.props.isDj,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this2
                });
              })
            )
          )
        )
      );
    }
  }]);
  return SongList;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_SongList2.default)(SongList);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

var port = exports.port = process.env.PORT || 3000;
var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;

var analytics = exports.analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};

var auth = exports.auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(67);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./ErrorPage.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(84);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Link/Link.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(46);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  (0, _inherits3.default)(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      _history2.default.push(_this.props.to);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);

      return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        children
      );
    }
  }]);
  return Link;
}(_react2.default.Component);

Link.propTypes = {
  to: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node,
  onClick: _react.PropTypes.func
};
exports.default = Link;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: _react.PropTypes.func.isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var App = function (_React$PureComponent) {
  (0, _inherits3.default)(App, _React$PureComponent);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return _react2.default.Children.only(this.props.children);
    }
  }]);
  return App;
}(_react2.default.PureComponent);

App.propTypes = {
  context: _react.PropTypes.shape(ContextType).isRequired,
  children: _react.PropTypes.element.isRequired
};
App.childContextTypes = ContextType;
exports.default = App;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Html.js'; /**
                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                            *
                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                            *
                                                                                            * This source code is licensed under the MIT license found in the
                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                            */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function (_React$Component) {
  (0, _inherits3.default)(Html, _React$Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          description = _props.description,
          style = _props.style,
          scripts = _props.scripts,
          children = _props.children;

      return _react2.default.createElement(
        'html',
        { className: 'no-js', lang: 'en', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        _react2.default.createElement(
          'head',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          _react2.default.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            'Crowd DJ'
          ),
          _react2.default.createElement('meta', { name: 'description', content: description, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }),
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,500,700', rel: 'stylesheet', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }),
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Asap:400,500,700', rel: 'stylesheet', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }),
          style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }),
          scripts && scripts.map(function (script) {
            return _react2.default.createElement('script', { key: script, src: script, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: _this2
            });
          }),
          _config.analytics.google.trackingId && _react2.default.createElement('script', {
            dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }),
          _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          })
        )
      );
    }
  }]);
  return Html;
}(_react2.default.Component);

Html.propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.string,
  scripts: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
  children: _react.PropTypes.string
};
exports.default = Html;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPageWithoutStyle = undefined;

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/error/ErrorPage.js'; /**
                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                   *
                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                   *
                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                   */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ErrorPage = __webpack_require__(21);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function (_React$Component) {
  (0, _inherits3.default)(ErrorPage, _React$Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorPage, [{
    key: 'render',
    value: function render() {
      if (true) {
        var error = this.props.error;

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            error.name
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            error.message
          ),
          _react2.default.createElement(
            'pre',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            error.stack
          )
        );
      }

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        _react2.default.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          'Error'
        ),
        _react2.default.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          'Sorry, a critical error occurred on this page.'
        )
      );
    }
  }]);
  return ErrorPage;
}(_react2.default.Component);

ErrorPage.propTypes = {
  error: _react.PropTypes.object.isRequired
};
exports.ErrorPageWithoutStyle = ErrorPage;
exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */

// The top-level (parent) route
exports.default = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(50).default, __webpack_require__(54).default, __webpack_require__(48).default, __webpack_require__(56).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(52).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next;
    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var route;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = (route.title || 'Untitled Page') + ' - www.reactstarterkit.com';
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("./assets");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/set");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Header/Header.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = __webpack_require__(70);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        _react2.default.createElement(
          'a',
          { className: 'title', href: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          'CrowdDJ'
        )
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/NowPlayingRating/NowPlayingRating.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NowPlayingRating = __webpack_require__(73);

var _NowPlayingRating2 = _interopRequireDefault(_NowPlayingRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseURL = 'https://api.spotify.com/v1/tracks/';

var NowPlayingRating = function (_React$Component) {
  (0, _inherits3.default)(NowPlayingRating, _React$Component);

  function NowPlayingRating(props) {
    (0, _classCallCheck3.default)(this, NowPlayingRating);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NowPlayingRating.__proto__ || (0, _getPrototypeOf2.default)(NowPlayingRating)).call(this, props));

    _this.state = {
      rating: 0,
      confirmed: false,
      confirmedRating: null,
      currentTrack: props.track
    };

    _this.renderHeart = _this.renderHeart.bind(_this);
    _this.resetRating = _this.resetRating.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NowPlayingRating, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.track != this.state.currentTrack) {
        this.setState({ rating: 0, confirmed: false, confirmRating: null, currentTrack: nextProps.track });
      }
    }
  }, {
    key: 'setRating',
    value: function setRating(rating) {
      this.setState({ rating: rating });
    }
  }, {
    key: 'resetRating',
    value: function resetRating() {
      this.setState({ rating: 0 });
    }
  }, {
    key: 'confirmRating',
    value: function confirmRating(rating) {
      var _this2 = this;

      if (!this.state.confirmed) {
        this.setState({ confirmed: true, confirmRating: rating }, function () {
          _this2.props.sendRating(_this2.state.confirmRating);
        });
      }
    }
  }, {
    key: 'renderHeart',
    value: function renderHeart(index) {
      var _this3 = this;

      var rating = this.state.confirmed ? this.state.confirmRating : this.state.rating;
      if (index < rating) {
        return _react2.default.createElement(
          'i',
          {
            key: index,
            className: 'material-icons heart',
            onMouseOver: function onMouseOver() {
              return _this3.setRating(index + 1);
            },
            onClick: function onClick() {
              return _this3.confirmRating(index + 1);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          },
          'favorite_solid'
        );
      } else {
        return _react2.default.createElement(
          'i',
          {
            key: index,
            className: 'material-icons heart',
            onMouseOver: function onMouseOver() {
              return _this3.setRating(index + 1);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          'favorite_border'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'span',
        { className: 'rating', onMouseLeave: this.resetRating, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        [0, 1, 2, 3, 4].map(function (index) {
          return _this4.renderHeart(index);
        })
      );
    }
  }]);
  return NowPlayingRating;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_NowPlayingRating2.default)(NowPlayingRating);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/PlayedSong/PlayedSong.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _PlayedSong = __webpack_require__(74);

var _PlayedSong2 = _interopRequireDefault(_PlayedSong);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayedSong = function (_React$Component) {
  (0, _inherits3.default)(PlayedSong, _React$Component);

  function PlayedSong(props) {
    (0, _classCallCheck3.default)(this, PlayedSong);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlayedSong.__proto__ || (0, _getPrototypeOf2.default)(PlayedSong)).call(this, props));

    if (!_this.props.song.rating) {
      _this.props.song.rating = 0;
    }
    return _this;
  }

  (0, _createClass3.default)(PlayedSong, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/queue/' + this.props.song.key + '/voteCount', {
        context: this,
        state: 'voteCount'
      });
      this.fullRef = _base2.default.syncState('rooms/' + this.props.roomId + '/queue/' + this.props.song.key, {
        context: this,
        state: 'song'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
      _base2.default.removeBinding(this.fullRef);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          song = _props.song,
          roomId = _props.roomId,
          isDj = _props.isDj;

      return _react2.default.createElement(
        'tr',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        _react2.default.createElement('td', { className: 'ranking', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }),
        _react2.default.createElement(
          'td',
          { className: 'name-artist', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          _react2.default.createElement(
            'span',
            { className: 'name', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            song.name
          ),
          _react2.default.createElement(
            'span',
            { className: 'artist', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            song.artist
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'vote', __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          _react2.default.createElement(
            'i',
            { className: 'material-icons', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            'favorite_solid'
          ),
          _react2.default.createElement(
            'span',
            { className: 'upvotes', __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            song.rating.toString().substring(0, 3)
          )
        )
      );
    }
  }]);
  return PlayedSong;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_PlayedSong2.default)(PlayedSong);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Playlist/Playlist.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Playlist = __webpack_require__(75);

var _Playlist2 = _interopRequireDefault(_Playlist);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _PlayedSong = __webpack_require__(41);

var _PlayedSong2 = _interopRequireDefault(_PlayedSong);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function (_React$Component) {
  (0, _inherits3.default)(Playlist, _React$Component);

  function Playlist(props) {
    (0, _classCallCheck3.default)(this, Playlist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Playlist.__proto__ || (0, _getPrototypeOf2.default)(Playlist)).call(this, props));

    _this.state = {
      played: []
    };
    return _this;
  }

  (0, _createClass3.default)(Playlist, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('roomid' + this.props.roomId);
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/played', {
        context: this,
        state: 'played',
        asArray: true
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'list-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        _react2.default.createElement(
          'h3',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          },
          'Party Playlist'
        ),
        _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }),
        _react2.default.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          _react2.default.createElement(
            'table',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            _react2.default.createElement(
              'tbody',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              this.state.played.sort(function (a, b) {
                return b.voteCount - a.voteCount;
              }).map(function (song) {
                return _react2.default.createElement(_PlayedSong2.default, {
                  key: song.key,
                  song: song,
                  roomId: _this2.props.roomId,
                  isDj: _this2.props.isDj,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this2
                });
              })
            )
          )
        )
      );
    }
  }]);
  return Playlist;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_Playlist2.default)(Playlist);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SearchResults/SearchResults.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SearchResults = __webpack_require__(77);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchResults = function (_React$Component) {
  (0, _inherits3.default)(SearchResults, _React$Component);

  function SearchResults(props) {
    (0, _classCallCheck3.default)(this, SearchResults);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchResults.__proto__ || (0, _getPrototypeOf2.default)(SearchResults)).call(this, props));

    _this.state = {
      queue: []
    };
    return _this;
  }

  (0, _createClass3.default)(SearchResults, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('in search results: ' + this.props.roomId);
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/queue', {
        context: this,
        state: 'queue',
        asArray: true
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'renderTracks',
    value: function renderTracks() {
      var _this2 = this;

      if (this.props.tracks.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'search-results-tracks', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          _react2.default.createElement(
            'ul',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            this.props.tracks.map(function (track) {
              return _react2.default.createElement(
                'li',
                {
                  key: track.id, onClick: function onClick() {
                    _this2.addTrackToQueue(track);
                    _this2.props.onSelectSong();
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this2
                },
                _react2.default.createElement(
                  'span',
                  { className: 'track-name', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: _this2
                  },
                  track.name
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'track-artist-name', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: _this2
                  },
                  track.artists[0].name
                )
              );
            })
          )
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'addTrackToQueue',
    value: function addTrackToQueue(track) {
      var queue = this.state.queue;
      var newTrack = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(queue), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var queuedTrack = _step.value;

          if (track.name == queuedTrack.name && track.artists[0].name == queuedTrack.artist) {
            if ((0, _utils.voteSong)(queuedTrack)) {
              queuedTrack.voteCount++;
            }
            newTrack = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (newTrack) {
        var trackObj = {
          name: track.name,
          artist: track.artists[0].name,
          voteCount: 1,
          trackId: track.id
        };
        queue.push(trackObj);
        (0, _utils.voteSong)(trackObj);
      }
      this.setState({ queue: queue });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-results', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        },
        this.renderTracks()
      );
    }
  }]);
  return SearchResults;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_SearchResults2.default)(SearchResults);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Song/Song.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Song = __webpack_require__(78);

var _Song2 = _interopRequireDefault(_Song);

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Song = function (_React$Component) {
  (0, _inherits3.default)(Song, _React$Component);

  function Song(props) {
    (0, _classCallCheck3.default)(this, Song);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Song.__proto__ || (0, _getPrototypeOf2.default)(Song)).call(this, props));

    _this.state = {
      song: {}
    };

    _this.upvote = _this.upvote.bind(_this);
    _this.remove = _this.remove.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Song, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.ref = _base2.default.syncState('rooms/' + this.props.roomId + '/queue/' + this.props.song.key, {
        context: this,
        state: 'song'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          song = _props.song,
          roomId = _props.roomId,
          isDj = _props.isDj;

      return _react2.default.createElement(
        'tr',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        _react2.default.createElement('td', { className: 'ranking', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }),
        _react2.default.createElement(
          'td',
          { className: 'name-artist', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement(
            'span',
            { className: 'name', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            song.name
          ),
          _react2.default.createElement(
            'span',
            { className: 'artist', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            },
            song.artist
          )
        ),
        isDj && _react2.default.createElement(
          'td',
          { className: 'vote', onClick: this.remove, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          _react2.default.createElement(
            'span',
            { className: 'upvotes', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            this.state.song.voteCount
          ),
          _react2.default.createElement(
            'i',
            { className: 'material-icons', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            },
            'cancel'
          )
        ),
        !isDj && _react2.default.createElement(
          'td',
          { className: 'vote', onClick: this.upvote, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          _react2.default.createElement(
            'i',
            { className: 'material-icons', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            'thumb_up'
          ),
          _react2.default.createElement(
            'span',
            { className: 'upvotes', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            this.state.song.voteCount
          )
        )
      );
    }
  }, {
    key: 'upvote',
    value: function upvote() {
      if ((0, _utils.voteSong)(this.props.song)) {
        var state = (0, _extends3.default)({}, this.state);
        state.song.voteCount += 1;
        this.setState(state);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      var state = (0, _extends3.default)({}, this.state);
      state.song = null;
      this.setState(state);
    }
  }]);
  return Song;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_Song2.default)(Song);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cookies = {
  AddedSongs: 'added_songs'
};

exports.default = cookies;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(86);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
exports.default = false && (0, _createBrowserHistory2.default)(); /**
                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                 *
                                                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                 *
                                                                                 * This source code is licensed under the MIT license found in the
                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                 */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/dj/Dj.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SearchBox = __webpack_require__(16);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(18);

var _SongList2 = _interopRequireDefault(_SongList);

var _NowPlaying = __webpack_require__(15);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dj = function (_React$Component) {
  (0, _inherits3.default)(Dj, _React$Component);

  function Dj(props) {
    (0, _classCallCheck3.default)(this, Dj);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dj.__proto__ || (0, _getPrototypeOf2.default)(Dj)).call(this, props));

    console.log(props.name);
    return _this;
  }

  (0, _createClass3.default)(Dj, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        _react2.default.createElement(_SongList2.default, {
          isDj: true,
          roomId: this.props.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        _react2.default.createElement(_NowPlaying2.default, {
          roomId: this.props.name,
          isDj: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      );
    }
  }]);
  return Dj;
}(_react2.default.Component);

Dj.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};
exports.default = Dj;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/dj/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dj = __webpack_require__(47);

var _Dj2 = _interopRequireDefault(_Dj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  path: '/dj/:room',

  action: function action(context) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', {
                title: context.params.room,
                component: _react2.default.createElement(_Dj2.default, { name: context.params.room, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  },
                  __self: _this
                })
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/home/Home.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(87);

var _jquery2 = _interopRequireDefault(_jquery);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactstrap = __webpack_require__(23);

var _Link = __webpack_require__(22);

var _Link2 = _interopRequireDefault(_Link);

var _NowPlaying = __webpack_require__(15);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _SearchBox = __webpack_require__(16);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(18);

var _SongList2 = _interopRequireDefault(_SongList);

var _utils = __webpack_require__(13);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(80);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
    // this.checkEnter = this.checkEnter.bind(this);
  }

  (0, _createClass3.default)(Home, [{
    key: 'checkEnter',
    value: function checkEnter(e) {
      console.log(e);
      if (e.keyCode === 13) {
        console.log('enter');
        parseJoinInput(e);
      }
    }
  }, {
    key: 'join',
    value: function join() {
      (0, _jquery2.default)('.copy .desc, .caption .cap1, .create-button, .overlay-join').fadeOut();
      (0, _jquery2.default)('.join-button .input-container, .caption .cap2').fadeIn();
    }
  }, {
    key: 'create',
    value: function create() {
      (0, _jquery2.default)('.copy .desc, .caption .cap1, .join-button, .overlay-create').fadeOut();
      (0, _jquery2.default)('.create-button .input-container, .caption .cap2').fadeIn();
    }
  }, {
    key: 'parseJoinInput',
    value: function parseJoinInput() {
      var name = (0, _jquery2.default)('#join-room-name').val();
      var result = '/r/' + name;
      (0, _jquery2.default)(".join").attr("href", result);
      (0, _jquery2.default)(".join").click();
    }
  }, {
    key: 'parseCreateInput',
    value: function parseCreateInput() {
      var name = (0, _jquery2.default)('#create-room-name').val();
      var result = '/dj/' + name;
      (0, _jquery2.default)(".create").attr("href", result);
      (0, _jquery2.default)(".create").click();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('Current songs: ' + (0, _utils.getAddedSongs)());
      console.log('Adding song');
      (0, _utils.addSong)({ name: 'test' });
      console.log('Current songs: ' + (0, _utils.getAddedSongs)());
      console.log('Has song named test: ' + (0, _utils.hasAddedSong)({ name: 'test' }));
      console.log('Has song named nottest: ' + (0, _utils.hasAddedSong)({ name: 'nottest' }));

      return _react2.default.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        },
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }),
        _react2.default.createElement(
          'div',
          { className: 'copy', __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'title', __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            },
            'Want to stay in the spotify queue tonight?'
          ),
          _react2.default.createElement(
            'p',
            { className: 'desc', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            },
            'This app let\u2019s you recommend songs for your DJ\u2028 friend to play throughout the night, updating in\u2028 real time, so they can finally take your suggestions seriously!'
          ),
          _react2.default.createElement(
            'p',
            { className: 'desc', __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            'Or they\u2019ll keep ignoring you as usual.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-container join-button', __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          },
          _react2.default.createElement(
            'span',
            { className: 'caption', __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            },
            _react2.default.createElement(
              'span',
              { className: 'cap1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                },
                __self: this
              },
              'Join your DJ\'s party now!'
            ),
            _react2.default.createElement(
              'span',
              { className: 'cap2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              'Enter your party\'s key!'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            },
            _react2.default.createElement('input', { id: 'join-room-name', type: 'text', onkeydown: this.checkEnter.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            })
          ),
          _react2.default.createElement('div', { className: 'overlay-join', onClick: this.join.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }),
          _react2.default.createElement(
            'a',
            { className: 'join', href: '#', onClick: this.parseJoinInput.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            },
            'Join ',
            _react2.default.createElement(
              'span',
              { className: 'extra', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                },
                __self: this
              },
              'A Party'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-container create-button', __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          _react2.default.createElement(
            'span',
            { className: 'caption', __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            _react2.default.createElement(
              'span',
              { className: 'cap1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                },
                __self: this
              },
              'Be the DJ friend!'
            ),
            _react2.default.createElement(
              'span',
              { className: 'cap2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                },
                __self: this
              },
              'Create your party\'s key!'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            _react2.default.createElement('input', { id: 'create-room-name', type: 'text', __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            })
          ),
          _react2.default.createElement('div', { className: 'overlay-create', onClick: this.create.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }),
          _react2.default.createElement(
            'a',
            { className: 'create', href: '#', onClick: this.parseCreateInput.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            },
            'Create ',
            _react2.default.createElement(
              'span',
              { className: 'extra', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                },
                __self: this
              },
              'A Party'
            )
          )
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/home/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(49);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  path: '/',

  action: function action() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                news: []
              };
              return _context.abrupt('return', {
                title: 'React Starter Kit',
                component: _react2.default.createElement(_Home2.default, { news: data.news, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: _this
                })
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/notFound/NotFound.js'; /**
                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                     *
                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                     *
                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                     */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NotFound = __webpack_require__(81);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function (_React$Component) {
  (0, _inherits3.default)(NotFound, _React$Component);

  function NotFound() {
    (0, _classCallCheck3.default)(this, NotFound);
    return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _NotFound2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        _react2.default.createElement(
          'div',
          { className: _NotFound2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            this.props.title
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);
  return NotFound;
}(_react2.default.Component);

NotFound.propTypes = {
  title: _react.PropTypes.string.isRequired
};
exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/notFound/index.js'; /**
                                                                                                  * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                  *
                                                                                                  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                  *
                                                                                                  * This source code is licensed under the MIT license found in the
                                                                                                  * LICENSE.txt file in the root directory of this source tree.
                                                                                                  */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

var _NotFound = __webpack_require__(51);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Page Not Found';

exports.default = {

  path: '*',

  action: function action() {
    return {
      title: title,
      component: _react2.default.createElement(
        _Layout2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        _react2.default.createElement(_NotFound2.default, { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/room/Room.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(7);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactstrap = __webpack_require__(23);

var _Link = __webpack_require__(22);

var _Link2 = _interopRequireDefault(_Link);

var _NowPlaying = __webpack_require__(15);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _SearchBox = __webpack_require__(16);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(18);

var _SongList2 = _interopRequireDefault(_SongList);

var _utils = __webpack_require__(13);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function (_React$Component) {
  (0, _inherits3.default)(Room, _React$Component);

  function Room(props) {
    (0, _classCallCheck3.default)(this, Room);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Room.__proto__ || (0, _getPrototypeOf2.default)(Room)).call(this, props));

    console.log(props.name);
    return _this;
  }

  (0, _createClass3.default)(Room, [{
    key: 'render',
    value: function render() {
      console.log('Current songs: ' + (0, _utils.getAddedSongs)());
      console.log('Adding song');
      (0, _utils.addSong)({ name: 'test' });
      console.log('Current songs: ' + (0, _utils.getAddedSongs)());
      console.log('Has song named test: ' + (0, _utils.hasAddedSong)({ name: 'test' }));
      console.log('Has song named nottest: ' + (0, _utils.hasAddedSong)({ name: 'nottest' }));

      return _react2.default.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }),
        _react2.default.createElement(_SearchBox2.default, { roomId: this.props.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }),
        _react2.default.createElement(_SongList2.default, { roomId: this.props.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }),
        _react2.default.createElement(_NowPlaying2.default, { roomId: this.props.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })
      );
    }
  }]);
  return Room;
}(_react2.default.Component);

Room.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};
exports.default = Room;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/room/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Room = __webpack_require__(53);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  path: '/r/:room',

  action: function action(context) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', {
                title: 'Music Room',
                component: _react2.default.createElement(_Room2.default, { name: context.params.room, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: _this
                })
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/roomlist/RoomList.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SearchBox = __webpack_require__(16);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _Playlist = __webpack_require__(42);

var _Playlist2 = _interopRequireDefault(_Playlist);

var _NowPlaying = __webpack_require__(15);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomList = function (_React$Component) {
  (0, _inherits3.default)(RoomList, _React$Component);

  function RoomList(props) {
    (0, _classCallCheck3.default)(this, RoomList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RoomList.__proto__ || (0, _getPrototypeOf2.default)(RoomList)).call(this, props));

    console.log(props.name);
    return _this;
  }

  (0, _createClass3.default)(RoomList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        _react2.default.createElement(_Playlist2.default, {
          isDj: true,
          roomId: this.props.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })
      );
    }
  }]);
  return RoomList;
}(_react2.default.Component);

RoomList.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};
exports.default = RoomList;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/roomlist/index.js';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RoomList = __webpack_require__(55);

var _RoomList2 = _interopRequireDefault(_RoomList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  path: '/list/:room',

  action: function action(context) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', {
                title: context.params.room,
                component: _react2.default.createElement(_RoomList2.default, { name: context.params.room, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  },
                  __self: _this
                })
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* @import '~bootstrap/scss/bootstrap.scss'; */\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #27232F;\n  color: #fff; }\n\n.header {\n  font-family: 'Asap', sans-serif;\n  background: #15131A;\n  padding: 20px 0 40px; }\n  .header .title {\n    display: block;\n    text-align: center;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-transform: uppercase; }\n    @media screen and (min-width: 768px) {\n      .header .title {\n        text-align: left;\n        font-size: 36px;\n        margin-top: 20px;\n        margin-left: 50px; } }\n", "", {"version":3,"sources":["/./components/Header/Header.css"],"names":[],"mappings":"AAAA,+CAA+C;AAC/C;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY,EAAE;;AAEhB;EACE,gCAAgC;EAChC,oBAAoB;EACpB,qBAAqB,EAAE;EACvB;IACE,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,0BAA0B,EAAE;IAC5B;MACE;QACE,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;QACjB,kBAAkB,EAAE,EAAE","file":"Header.css","sourcesContent":["/* @import '~bootstrap/scss/bootstrap.scss'; */\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #27232F;\n  color: #fff; }\n\n.header {\n  font-family: 'Asap', sans-serif;\n  background: #15131A;\n  padding: 20px 0 40px; }\n  .header .title {\n    display: block;\n    text-align: center;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-transform: uppercase; }\n    @media screen and (min-width: 768px) {\n      .header .title {\n        text-align: left;\n        font-size: 36px;\n        margin-top: 20px;\n        margin-left: 50px; } }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #1e1e2f;\n  color: #fff; }\n\na {\n  text-decoration: none;\n  color: #fff; }\n\n.site {\n  margin: 0; }\n  .site ul {\n    list-style: none;\n    padding: 0; }\n", "", {"version":3,"sources":["/./components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;EAGE,uBAAuB;EACvB,oCAAoC;EACpC,mCAAmC,EAAE;;AAEvC;;EAEE,UAAU;EACV,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY,EAAE;;AAEhB;EACE,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;EACE,UAAU,EAAE;EACZ;IACE,iBAAiB;IACjB,WAAW,EAAE","file":"Layout.css","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #1e1e2f;\n  color: #fff; }\n\na {\n  text-decoration: none;\n  color: #fff; }\n\n.site {\n  margin: 0; }\n  .site ul {\n    list-style: none;\n    padding: 0; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, ".now-playing {\n  border-radius: 3px;\n  padding: 15px 15px;\n  width: 90%;\n  margin: 20px auto;\n  background: #3B3546;\n  white-space: nowrap;\n  position: fixed;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  height: 70px; }\n  @media screen and (min-width: 768px) {\n    .now-playing {\n      position: absolute;\n      top: 120px;\n      right: 0;\n      left: auto;\n      bottom: auto;\n      margin: 20px 50px;\n      width: 22%;\n      height: 350px; } }\n  .now-playing h3 {\n    margin: 5px 0 20px; }\n  .now-playing .artwork {\n    width: 44px;\n    margin: 0px 10px 10px 0;\n    display: inline-block;\n    vertical-align: top; }\n    @media screen and (min-width: 768px) {\n      .now-playing .artwork {\n        width: 200px;\n        display: block;\n        margin: 35px auto 0; } }\n  .now-playing .info {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 14px;\n    position: relative;\n    width: 90%; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info {\n        display: block;\n        margin: 10px 25px;\n        position: static; } }\n    .now-playing .info .currently {\n      text-transform: uppercase;\n      font-size: 12px;\n      margin: 5px 0; }\n      @media screen and (min-width: 768px) {\n        .now-playing .info .currently {\n          position: absolute;\n          top: 20px;\n          left: 20px;\n          font-size: 14px; } }\n    .now-playing .info .name {\n      font-weight: 700;\n      margin-right: 7px; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info .artist {\n        display: block; } }\n  .now-playing .song {\n    width: 80%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .now-playing .rating {\n    position: absolute;\n    float: right;\n    top: 14px;\n    right: 14px;\n    z-index: 99999999; }\n    @media screen and (min-width: 768px) {\n      .now-playing .rating {\n        float: left;\n        top: auto;\n        right: auto;\n        bottom: 12px;\n        left: 40px; } }\n    .now-playing .rating .material-icons {\n      font-size: 18px;\n      margin: 0 1px; }\n  .now-playing .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer;\n    margin-left: 180px; }\n    .now-playing .vote i {\n      width: 30px; }\n    .now-playing .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      position: relative;\n      top: 3px;\n      bottom: 24px; }\n", "", {"version":3,"sources":["/./components/NowPlaying/NowPlaying.css"],"names":[],"mappings":"AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,aAAa,EAAE;EACf;IACE;MACE,mBAAmB;MACnB,WAAW;MACX,SAAS;MACT,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,cAAc,EAAE,EAAE;EACtB;IACE,mBAAmB,EAAE;EACvB;IACE,YAAY;IACZ,wBAAwB;IACxB,sBAAsB;IACtB,oBAAoB,EAAE;IACtB;MACE;QACE,aAAa;QACb,eAAe;QACf,oBAAoB,EAAE,EAAE;EAC9B;IACE,sBAAsB;IACtB,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW,EAAE;IACb;MACE;QACE,eAAe;QACf,kBAAkB;QAClB,iBAAiB,EAAE,EAAE;IACzB;MACE,0BAA0B;MAC1B,gBAAgB;MAChB,cAAc,EAAE;MAChB;QACE;UACE,mBAAmB;UACnB,UAAU;UACV,WAAW;UACX,gBAAgB,EAAE,EAAE;IAC1B;MACE,iBAAiB;MACjB,kBAAkB,EAAE;IACtB;MACE;QACE,eAAe,EAAE,EAAE;EACzB;IACE,WAAW;IACX,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,YAAY;IACZ,kBAAkB,EAAE;IACpB;MACE;QACE,YAAY;QACZ,UAAU;QACV,YAAY;QACZ,aAAa;QACb,WAAW,EAAE,EAAE;IACnB;MACE,gBAAgB;MAChB,cAAc,EAAE;EACpB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,YAAY,EAAE;IAChB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB;MACjB,mBAAmB;MACnB,SAAS;MACT,aAAa,EAAE","file":"NowPlaying.css","sourcesContent":["@import url(../variables.css);\n.now-playing {\n  border-radius: 3px;\n  padding: 15px 15px;\n  width: 90%;\n  margin: 20px auto;\n  background: #3B3546;\n  white-space: nowrap;\n  position: fixed;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  height: 70px; }\n  @media screen and (min-width: 768px) {\n    .now-playing {\n      position: absolute;\n      top: 120px;\n      right: 0;\n      left: auto;\n      bottom: auto;\n      margin: 20px 50px;\n      width: 22%;\n      height: 350px; } }\n  .now-playing h3 {\n    margin: 5px 0 20px; }\n  .now-playing .artwork {\n    width: 44px;\n    margin: 0px 10px 10px 0;\n    display: inline-block;\n    vertical-align: top; }\n    @media screen and (min-width: 768px) {\n      .now-playing .artwork {\n        width: 200px;\n        display: block;\n        margin: 35px auto 0; } }\n  .now-playing .info {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 14px;\n    position: relative;\n    width: 90%; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info {\n        display: block;\n        margin: 10px 25px;\n        position: static; } }\n    .now-playing .info .currently {\n      text-transform: uppercase;\n      font-size: 12px;\n      margin: 5px 0; }\n      @media screen and (min-width: 768px) {\n        .now-playing .info .currently {\n          position: absolute;\n          top: 20px;\n          left: 20px;\n          font-size: 14px; } }\n    .now-playing .info .name {\n      font-weight: 700;\n      margin-right: 7px; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info .artist {\n        display: block; } }\n  .now-playing .song {\n    width: 80%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .now-playing .rating {\n    position: absolute;\n    float: right;\n    top: 14px;\n    right: 14px;\n    z-index: 99999999; }\n    @media screen and (min-width: 768px) {\n      .now-playing .rating {\n        float: left;\n        top: auto;\n        right: auto;\n        bottom: 12px;\n        left: 40px; } }\n    .now-playing .rating .material-icons {\n      font-size: 18px;\n      margin: 0 1px; }\n  .now-playing .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer;\n    margin-left: 180px; }\n    .now-playing .vote i {\n      width: 30px; }\n    .now-playing .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      position: relative;\n      top: 3px;\n      bottom: 24px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".rating {\n  position: absolute;\n  float: right;\n  top: 14px;\n  right: 14px; }\n  .rating .material-icons.heart {\n    font-size: 18px;\n    width: 18px;\n    margin: 0 1px; }\n", "", {"version":3,"sources":["/./components/NowPlayingRating/NowPlayingRating.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,YAAY,EAAE;EACd;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc,EAAE","file":"NowPlayingRating.css","sourcesContent":[".rating {\n  position: absolute;\n  float: right;\n  top: 14px;\n  right: 14px; }\n  .rating .material-icons.heart {\n    font-size: 18px;\n    width: 18px;\n    margin: 0 1px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, ".list-container {\n  /* width: 100%; */ }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 0 auto; } }\n\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    tr .vote .material-icons {\n      display: inline-block;\n      width: 30px; }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px; }\n", "", {"version":3,"sources":["/./components/PlayedSong/PlayedSong.css"],"names":[],"mappings":"AACA;EACE,kBAAkB,EAAE;EACpB;IACE;MACE,WAAW;MACX,eAAe,EAAE,EAAE;;AAEzB;EACE,aAAa;EACb,8BAA8B,EAAE;EAChC;IACE,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe,EAAE;EACnB;IACE,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,iBAAiB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB,EAAE;IAClB;MACE,sBAAsB;MACtB,YAAY,EAAE;IAChB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB,EAAE","file":"PlayedSong.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  /* width: 100%; */ }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 0 auto; } }\n\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    tr .vote .material-icons {\n      display: inline-block;\n      width: 30px; }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, ".list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: 0; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border-color: #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0;\n    overflow-x: hidden; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n", "", {"version":3,"sources":["/./components/Playlist/Playlist.css"],"names":[],"mappings":"AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,OAAO,EAAE;EACT;IACE;MACE,WAAW;MACX,kBAAkB,EAAE,EAAE;EAC1B;IACE,0BAA0B;IAC1B,gBAAgB,EAAE;EACpB;IACE,sBAAsB,EAAE;EAC1B;IACE,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,mBAAmB,EAAE;IACrB;MACE;QACE,cAAc,EAAE,EAAE;IACtB;MACE,0BAA0B;MAC1B,YAAY;MACZ,oBAAoB,EAAE;MACtB;QACE,eAAe;QACf,0BAA0B,EAAE","file":"Playlist.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: 0; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border-color: #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0;\n    overflow-x: hidden; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, ".search-box {\n  position: relative;\n  top: -30px; }\n  @media screen and (min-width: 768px) {\n    .search-box {\n      display: none; } }\n  .search-box .search-bar {\n    width: 90%;\n    margin: 10px auto 0; }\n    .search-box .search-bar .placeholder {\n      position: relative; }\n    .search-box .search-bar .search, .search-box .search-bar .cancel {\n      position: absolute;\n      top: 7px;\n      left: 7px;\n      color: #bbb; }\n    .search-box .search-bar .cancel {\n      left: auto;\n      right: 7px;\n      display: none; }\n    .search-box .search-bar input:focus + .cancel {\n      display: block; }\n    .search-box .search-bar input {\n      border: none;\n      margin: 0 auto;\n      width: 100%;\n      height: 40px;\n      border-radius: 10px;\n      font-size: 16px;\n      padding: 10px;\n      padding-left: 40px;\n      background: #E8E4EF; }\n", "", {"version":3,"sources":["/./components/SearchBox/SearchBox.css"],"names":[],"mappings":"AACA;EACE,mBAAmB;EACnB,WAAW,EAAE;EACb;IACE;MACE,cAAc,EAAE,EAAE;EACtB;IACE,WAAW;IACX,oBAAoB,EAAE;IACtB;MACE,mBAAmB,EAAE;IACvB;MACE,mBAAmB;MACnB,SAAS;MACT,UAAU;MACV,YAAY,EAAE;IAChB;MACE,WAAW;MACX,WAAW;MACX,cAAc,EAAE;IAClB;MACE,eAAe,EAAE;IACnB;MACE,aAAa;MACb,eAAe;MACf,YAAY;MACZ,aAAa;MACb,oBAAoB;MACpB,gBAAgB;MAChB,cAAc;MACd,mBAAmB;MACnB,oBAAoB,EAAE","file":"SearchBox.css","sourcesContent":["@import url(../variables.css);\n.search-box {\n  position: relative;\n  top: -30px; }\n  @media screen and (min-width: 768px) {\n    .search-box {\n      display: none; } }\n  .search-box .search-bar {\n    width: 90%;\n    margin: 10px auto 0; }\n    .search-box .search-bar .placeholder {\n      position: relative; }\n    .search-box .search-bar .search, .search-box .search-bar .cancel {\n      position: absolute;\n      top: 7px;\n      left: 7px;\n      color: #bbb; }\n    .search-box .search-bar .cancel {\n      left: auto;\n      right: 7px;\n      display: none; }\n    .search-box .search-bar input:focus + .cancel {\n      display: block; }\n    .search-box .search-bar input {\n      border: none;\n      margin: 0 auto;\n      width: 100%;\n      height: 40px;\n      border-radius: 10px;\n      font-size: 16px;\n      padding: 10px;\n      padding-left: 40px;\n      background: #E8E4EF; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".search-results {\n  width: 90%;\n  margin: 0 auto;\n  background: #E8E4EF;\n  color: #A8A2B2;\n  z-index: 5;\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-radius: 10px; }\n  .search-results .search-results-tracks {\n    padding: 0; }\n    .search-results .search-results-tracks ul {\n      list-style: none;\n      padding: 0; }\n    .search-results .search-results-tracks li {\n      cursor: pointer;\n      padding: 10px 40px;\n      border-bottom: 1px solid #B8ACCB; }\n      .search-results .search-results-tracks li:last-of-type {\n        border: none; }\n      .search-results .search-results-tracks li .track-name {\n        display: block;\n        font-weight: 500;\n        color: #3B3546;\n        line-height: 18px; }\n      .search-results .search-results-tracks li .track-artist-name {\n        display: block;\n        font-size: 14px; }\n", "", {"version":3,"sources":["/./components/SearchResults/SearchResults.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,oBAAoB,EAAE;EACtB;IACE,WAAW,EAAE;IACb;MACE,iBAAiB;MACjB,WAAW,EAAE;IACf;MACE,gBAAgB;MAChB,mBAAmB;MACnB,iCAAiC,EAAE;MACnC;QACE,aAAa,EAAE;MACjB;QACE,eAAe;QACf,iBAAiB;QACjB,eAAe;QACf,kBAAkB,EAAE;MACtB;QACE,eAAe;QACf,gBAAgB,EAAE","file":"SearchResults.css","sourcesContent":[".search-results {\n  width: 90%;\n  margin: 0 auto;\n  background: #E8E4EF;\n  color: #A8A2B2;\n  z-index: 5;\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-radius: 10px; }\n  .search-results .search-results-tracks {\n    padding: 0; }\n    .search-results .search-results-tracks ul {\n      list-style: none;\n      padding: 0; }\n    .search-results .search-results-tracks li {\n      cursor: pointer;\n      padding: 10px 40px;\n      border-bottom: 1px solid #B8ACCB; }\n      .search-results .search-results-tracks li:last-of-type {\n        border: none; }\n      .search-results .search-results-tracks li .track-name {\n        display: block;\n        font-weight: 500;\n        color: #3B3546;\n        line-height: 18px; }\n      .search-results .search-results-tracks li .track-artist-name {\n        display: block;\n        font-size: 14px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, "tr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    @media screen and (min-width: 768px) {\n      tr .vote {\n        width: 100px; } }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      display: inline-block;\n      width: 20px; }\n      @media screen and (min-width: 768px) {\n        tr .vote .upvotes {\n          margin-right: 20px; } }\n", "", {"version":3,"sources":["/./components/Song/Song.css"],"names":[],"mappings":"AACA;EACE,aAAa;EACb,8BAA8B,EAAE;EAChC;IACE,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe,EAAE;EACnB;IACE,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,iBAAiB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB,EAAE;IAClB;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB;MACjB,sBAAsB;MACtB,YAAY,EAAE;MACd;QACE;UACE,mBAAmB,EAAE,EAAE","file":"Song.css","sourcesContent":["@import url(../variables.css);\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    @media screen and (min-width: 768px) {\n      tr .vote {\n        width: 100px; } }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      display: inline-block;\n      width: 20px; }\n      @media screen and (min-width: 768px) {\n        tr .vote .upvotes {\n          margin-right: 20px; } }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, ".list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: -15px; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border: 1px solid #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n", "", {"version":3,"sources":["/./components/SongList/SongList.css"],"names":[],"mappings":"AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,WAAW,EAAE;EACb;IACE;MACE,WAAW;MACX,kBAAkB,EAAE,EAAE;EAC1B;IACE,0BAA0B;IAC1B,gBAAgB,EAAE;EACpB;IACE,0BAA0B,EAAE;EAC9B;IACE,mBAAmB;IACnB,cAAc;IACd,WAAW,EAAE;IACb;MACE;QACE,cAAc,EAAE,EAAE;IACtB;MACE,0BAA0B;MAC1B,YAAY;MACZ,oBAAoB,EAAE;MACtB;QACE,eAAe;QACf,0BAA0B,EAAE","file":"SongList.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: -15px; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border: 1px solid #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n* {\n  line-height: 1.2;\n  margin: 0; }\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%; }\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em; }\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\np {\n  margin: 0 auto;\n  width: 280px; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;EACE,iBAAiB;EACjB,UAAU,EAAE;;AAEd;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY,EAAE;;AAEhB;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa,EAAE;;AAEjB;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,aAAa,EAAE;;AAEjB;EACE,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE;;IAEE,WAAW,EAAE;EACf;IACE,iBAAiB;IACjB,kBAAkB,EAAE,EAAE","file":"ErrorPage.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n* {\n  line-height: 1.2;\n  margin: 0; }\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%; }\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em; }\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\np {\n  margin: 0 auto;\n  width: 280px; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".copy {\n  margin: 30px 30px 50px;\n  font-family: 'Asap', sans-serif; }\n  .copy .title {\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 24px; }\n  .copy .desc {\n    line-height: 24px;\n    color: #A8A2B2; }\n\n.button-container {\n  margin: 30px;\n  font-family: 'Asap', sans-serif; }\n  .button-container .input-container {\n    margin-bottom: 20px;\n    display: none; }\n    .button-container .input-container input {\n      color: #fff;\n      background: transparent;\n      border: none;\n      border-bottom: 2px solid #A8A2B2;\n      height: 40px;\n      width: 250px;\n      font-size: 20px; }\n  .button-container .caption {\n    display: block;\n    margin-bottom: 15px;\n    color: #A8A2B2; }\n    .button-container .caption .cap2 {\n      display: none; }\n  .button-container .join, .button-container .create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    border: 2px solid #fff;\n    padding: 15px 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 20px; }\n  .button-container .overlay-join, .button-container .overlay-create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    position: absolute; }\n", "", {"version":3,"sources":["/./routes/home/Home.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,gCAAgC,EAAE;EAClC;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,gBAAgB,EAAE;EACpB;IACE,kBAAkB;IAClB,eAAe,EAAE;;AAErB;EACE,aAAa;EACb,gCAAgC,EAAE;EAClC;IACE,oBAAoB;IACpB,cAAc,EAAE;IAChB;MACE,YAAY;MACZ,wBAAwB;MACxB,aAAa;MACb,iCAAiC;MACjC,aAAa;MACb,aAAa;MACb,gBAAgB,EAAE;EACtB;IACE,eAAe;IACf,oBAAoB;IACpB,eAAe,EAAE;IACjB;MACE,cAAc,EAAE;EACpB;IACE,eAAe;IACf,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,mBAAmB;IACnB,gBAAgB,EAAE;EACpB;IACE,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB,EAAE","file":"Home.css","sourcesContent":[".copy {\n  margin: 30px 30px 50px;\n  font-family: 'Asap', sans-serif; }\n  .copy .title {\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 24px; }\n  .copy .desc {\n    line-height: 24px;\n    color: #A8A2B2; }\n\n.button-container {\n  margin: 30px;\n  font-family: 'Asap', sans-serif; }\n  .button-container .input-container {\n    margin-bottom: 20px;\n    display: none; }\n    .button-container .input-container input {\n      color: #fff;\n      background: transparent;\n      border: none;\n      border-bottom: 2px solid #A8A2B2;\n      height: 40px;\n      width: 250px;\n      font-size: 20px; }\n  .button-container .caption {\n    display: block;\n    margin-bottom: 15px;\n    color: #A8A2B2; }\n    .button-container .caption .cap2 {\n      display: none; }\n  .button-container .join, .button-container .create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    border: 2px solid #fff;\n    padding: 15px 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 20px; }\n  .button-container .overlay-join, .button-container .overlay-create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    position: absolute; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(11), "");

// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n.root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width); }\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AAEH;EACE,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC,EAAE","file":"NotFound.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import url(../../components/variables.css);\n.root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width); }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(57);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Header.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(58);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Layout.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(59);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NowPlaying.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NowPlaying.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(60);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NowPlayingRating.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NowPlayingRating.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(61);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./PlayedSong.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./PlayedSong.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(62);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Playlist.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Playlist.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(63);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SearchBox.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SearchBox.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(64);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SearchResults.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SearchResults.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(65);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Song.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Song.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(66);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SongList.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./SongList.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(68);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Home.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(69);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NotFound.css", function() {
        content = require("!!./../../../node_modules/css-loader/index.js??ref--1-1!./../../../node_modules/sass-loader/lib/loader.js!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(31);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _set = __webpack_require__(30);

var _set2 = _interopRequireDefault(_set);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/server.js';
// import expressJwt from 'express-jwt';
// import jwt from 'jsonwebtoken';

// import passport from './core/passport';
// eslint-disable-line import/no-unresolved

__webpack_require__(29);

var _path = __webpack_require__(35);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(34);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(33);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(37);

var _server2 = _interopRequireDefault(_server);

var _universalRouter = __webpack_require__(38);

var _universalRouter2 = _interopRequireDefault(_universalRouter);

var _prettyError = __webpack_require__(36);

var _prettyError2 = _interopRequireDefault(_prettyError);

var _App = __webpack_require__(24);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(25);

var _Html2 = _interopRequireDefault(_Html);

var _ErrorPage = __webpack_require__(26);

var _ErrorPage2 = __webpack_require__(21);

var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);

var _routes = __webpack_require__(27);

var _routes2 = _interopRequireDefault(_routes);

var _assets = __webpack_require__(28);

var _assets2 = _interopRequireDefault(_assets);

var _config = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
app.use((0, _cookieParser2.default)());

//
// Authentication
// -----------------------------------------------------------------------------
// app.use(expressJwt({
//   secret: auth.jwt.secret,
//   credentialsRequired: false,
//   getToken: req => req.cookies.id_token,
// }));
// app.use(passport.initialize());

// if (process.env.NODE_ENV !== 'production') {
//   app.enable('trust proxy');
// }
// app.get('/login/facebook',
//   passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false }),
// );
// app.get('/login/facebook/return',
//   passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
//   (req, res) => {
//     const expiresIn = 60 * 60 * 24 * 180; // 180 days
//     const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
//     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
//     res.redirect('/');
//   },
// );

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
    var _ret;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
              var css, context, route, data, html;
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      css = new _set2.default();

                      // Global (context) variables that can be easily accessed from any React component
                      // https://facebook.github.io/react/docs/context.html

                      context = {
                        // Enables critical path CSS rendering
                        // https://github.com/kriasoft/isomorphic-style-loader
                        insertCss: function insertCss() {
                          for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                            styles[_key] = arguments[_key];
                          }

                          // eslint-disable-next-line no-underscore-dangle
                          styles.forEach(function (style) {
                            return css.add(style._getCss());
                          });
                        }
                      };
                      _context.next = 4;
                      return _universalRouter2.default.resolve(_routes2.default, {
                        path: req.path,
                        query: req.query
                      });

                    case 4:
                      route = _context.sent;

                      if (!route.redirect) {
                        _context.next = 8;
                        break;
                      }

                      res.redirect(route.status || 302, route.redirect);
                      return _context.abrupt('return', {
                        v: void 0
                      });

                    case 8:
                      data = (0, _extends3.default)({}, route);

                      data.children = _server2.default.renderToString(_react2.default.createElement(
                        _App2.default,
                        { context: context, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                          },
                          __self: undefined
                        },
                        route.component
                      ));
                      data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                      data.scripts = [_assets2.default.vendor.js, _assets2.default.client.js];
                      if (_assets2.default[route.chunk]) {
                        data.scripts.push(_assets2.default[route.chunk].js);
                      }

                      html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        },
                        __self: undefined
                      })));

                      res.status(route.status || 200);
                      res.send('<!doctype html>' + html);

                    case 16:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            })(), 't0', 2);

          case 2:
            _ret = _context2.t0;

            if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt('return', _ret.v);

          case 5:
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t1 = _context2['catch'](0);

            next(_context2.t1);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

//
// Error handling
// -----------------------------------------------------------------------------
var pe = new _prettyError2.default();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
    _Html2.default,
    {
      title: 'Internal Server Error',
      description: err.message,
      style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: undefined
    },
    _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }))
  ));
  res.status(err.status || 500);
  res.send('<!doctype html>' + html);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(_config.port, function () {
  console.log('The server is running at http://localhost:' + _config.port + '/');
});
/* eslint-enable no-console */

/***/ })
/******/ ]);