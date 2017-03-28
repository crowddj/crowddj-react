webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Layout/Layout.js'; /**
                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                     *
                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                     *
                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                     */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Layout = __webpack_require__(631);

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = __webpack_require__(327);

var _Header2 = _interopRequireDefault(_Header);

var _SearchBox = __webpack_require__(105);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(118);

var _SongList2 = _interopRequireDefault(_SongList);

var _NowPlaying = __webpack_require__(104);

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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(349);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(147);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/NowPlaying/NowPlaying.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NowPlaying = __webpack_require__(632);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(89);

var _NowPlayingRating = __webpack_require__(328);

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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(119);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SearchBox/SearchBox.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SearchBox = __webpack_require__(636);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SearchResults = __webpack_require__(331);

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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SongList/SongList.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SongList = __webpack_require__(639);

var _SongList2 = _interopRequireDefault(_SongList);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _Song = __webpack_require__(332);

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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(626);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
exports.default = true && (0, _createBrowserHistory2.default)(); /**
                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                 *
                                                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                 *
                                                                                 * This source code is licensed under the MIT license found in the
                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                 */

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(147);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(354);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Link/Link.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(217);

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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(811).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(659)
  };
}

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */

// The top-level (parent) route
exports.default = {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(338).default, __webpack_require__(342).default, __webpack_require__(336).default, __webpack_require__(344).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(340).default],

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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(216);

var _reduxThunk = __webpack_require__(814);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(334);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Header/Header.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Header = __webpack_require__(630);

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

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/NowPlayingRating/NowPlayingRating.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NowPlayingRating = __webpack_require__(633);

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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/PlayedSong/PlayedSong.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _PlayedSong = __webpack_require__(634);

var _PlayedSong2 = _interopRequireDefault(_PlayedSong);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(89);

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

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Playlist/Playlist.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Playlist = __webpack_require__(635);

var _Playlist2 = _interopRequireDefault(_Playlist);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _PlayedSong = __webpack_require__(329);

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

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(119);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/SearchResults/SearchResults.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SearchResults = __webpack_require__(637);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(89);

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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(147);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/components/Song/Song.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Song = __webpack_require__(638);

var _Song2 = _interopRequireDefault(_Song);

var _base = __webpack_require__(88);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(89);

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

/***/ 333:
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

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootReducer;

var _redux = __webpack_require__(216);

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//
// });
//
// export default rootReducer;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/dj/Dj.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SearchBox = __webpack_require__(105);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(118);

var _SongList2 = _interopRequireDefault(_SongList);

var _NowPlaying = __webpack_require__(104);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Layout = __webpack_require__(103);

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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/dj/index.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Dj = __webpack_require__(335);

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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/home/Home.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(642);

var _jquery2 = _interopRequireDefault(_jquery);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactstrap = __webpack_require__(313);

var _Link = __webpack_require__(218);

var _Link2 = _interopRequireDefault(_Link);

var _NowPlaying = __webpack_require__(104);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _SearchBox = __webpack_require__(105);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(118);

var _SongList2 = _interopRequireDefault(_SongList);

var _utils = __webpack_require__(89);

var _Layout = __webpack_require__(103);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(640);

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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/home/index.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(337);

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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/notFound/NotFound.js'; /**
                                                                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                     *
                                                                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                     *
                                                                                                     * This source code is licensed under the MIT license found in the
                                                                                                     * LICENSE.txt file in the root directory of this source tree.
                                                                                                     */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _NotFound = __webpack_require__(641);

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

/***/ 340:
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

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(103);

var _Layout2 = _interopRequireDefault(_Layout);

var _NotFound = __webpack_require__(339);

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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/room/Room.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(35);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactstrap = __webpack_require__(313);

var _Link = __webpack_require__(218);

var _Link2 = _interopRequireDefault(_Link);

var _NowPlaying = __webpack_require__(104);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _SearchBox = __webpack_require__(105);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _SongList = __webpack_require__(118);

var _SongList2 = _interopRequireDefault(_SongList);

var _utils = __webpack_require__(89);

var _Layout = __webpack_require__(103);

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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/room/index.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Room = __webpack_require__(341);

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

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(20);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(19);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/roomlist/RoomList.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SearchBox = __webpack_require__(105);

var _SearchBox2 = _interopRequireDefault(_SearchBox);

var _Playlist = __webpack_require__(330);

var _Playlist2 = _interopRequireDefault(_Playlist);

var _NowPlaying = __webpack_require__(104);

var _NowPlaying2 = _interopRequireDefault(_NowPlaying);

var _Layout = __webpack_require__(103);

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

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/routes/roomlist/index.js';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _RoomList = __webpack_require__(343);

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

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "/* @import '~bootstrap/scss/bootstrap.scss'; */\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #27232F;\n  color: #fff; }\n\n.header {\n  font-family: 'Asap', sans-serif;\n  background: #15131A;\n  padding: 20px 0 40px; }\n  .header .title {\n    display: block;\n    text-align: center;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-transform: uppercase; }\n    @media screen and (min-width: 768px) {\n      .header .title {\n        text-align: left;\n        font-size: 36px;\n        margin-top: 20px;\n        margin-left: 50px; } }\n", "", {"version":3,"sources":["/./components/Header/Header.css"],"names":[],"mappings":"AAAA,+CAA+C;AAC/C;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY,EAAE;;AAEhB;EACE,gCAAgC;EAChC,oBAAoB;EACpB,qBAAqB,EAAE;EACvB;IACE,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,0BAA0B,EAAE;IAC5B;MACE;QACE,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;QACjB,kBAAkB,EAAE,EAAE","file":"Header.css","sourcesContent":["/* @import '~bootstrap/scss/bootstrap.scss'; */\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #27232F;\n  color: #fff; }\n\n.header {\n  font-family: 'Asap', sans-serif;\n  background: #15131A;\n  padding: 20px 0 40px; }\n  .header .title {\n    display: block;\n    text-align: center;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-transform: uppercase; }\n    @media screen and (min-width: 768px) {\n      .header .title {\n        text-align: left;\n        font-size: 36px;\n        margin-top: 20px;\n        margin-left: 50px; } }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #1e1e2f;\n  color: #fff; }\n\na {\n  text-decoration: none;\n  color: #fff; }\n\n.site {\n  margin: 0; }\n  .site ul {\n    list-style: none;\n    padding: 0; }\n", "", {"version":3,"sources":["/./components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;EAGE,uBAAuB;EACvB,oCAAoC;EACpC,mCAAmC,EAAE;;AAEvC;;EAEE,UAAU;EACV,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY,EAAE;;AAEhB;EACE,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;EACE,UAAU,EAAE;EACZ;IACE,iBAAiB;IACjB,WAAW,EAAE","file":"Layout.css","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Rubik', sans-serif;\n  font-weight: 400;\n  background: #1e1e2f;\n  color: #fff; }\n\na {\n  text-decoration: none;\n  color: #fff; }\n\n.site {\n  margin: 0; }\n  .site ul {\n    list-style: none;\n    padding: 0; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, ".now-playing {\n  border-radius: 3px;\n  padding: 15px 15px;\n  width: 90%;\n  margin: 20px auto;\n  background: #3B3546;\n  white-space: nowrap;\n  position: fixed;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  height: 70px; }\n  @media screen and (min-width: 768px) {\n    .now-playing {\n      position: absolute;\n      top: 120px;\n      right: 0;\n      left: auto;\n      bottom: auto;\n      margin: 20px 50px;\n      width: 22%;\n      height: 350px; } }\n  .now-playing h3 {\n    margin: 5px 0 20px; }\n  .now-playing .artwork {\n    width: 44px;\n    margin: 0px 10px 10px 0;\n    display: inline-block;\n    vertical-align: top; }\n    @media screen and (min-width: 768px) {\n      .now-playing .artwork {\n        width: 200px;\n        display: block;\n        margin: 35px auto 0; } }\n  .now-playing .info {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 14px;\n    position: relative;\n    width: 90%; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info {\n        display: block;\n        margin: 10px 25px;\n        position: static; } }\n    .now-playing .info .currently {\n      text-transform: uppercase;\n      font-size: 12px;\n      margin: 5px 0; }\n      @media screen and (min-width: 768px) {\n        .now-playing .info .currently {\n          position: absolute;\n          top: 20px;\n          left: 20px;\n          font-size: 14px; } }\n    .now-playing .info .name {\n      font-weight: 700;\n      margin-right: 7px; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info .artist {\n        display: block; } }\n  .now-playing .song {\n    width: 80%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .now-playing .rating {\n    position: absolute;\n    float: right;\n    top: 14px;\n    right: 14px;\n    z-index: 99999999; }\n    @media screen and (min-width: 768px) {\n      .now-playing .rating {\n        float: left;\n        top: auto;\n        right: auto;\n        bottom: 12px;\n        left: 40px; } }\n    .now-playing .rating .material-icons {\n      font-size: 18px;\n      margin: 0 1px; }\n  .now-playing .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer;\n    margin-left: 180px; }\n    .now-playing .vote i {\n      width: 30px; }\n    .now-playing .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      position: relative;\n      top: 3px;\n      bottom: 24px; }\n", "", {"version":3,"sources":["/./components/NowPlaying/NowPlaying.css"],"names":[],"mappings":"AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,aAAa,EAAE;EACf;IACE;MACE,mBAAmB;MACnB,WAAW;MACX,SAAS;MACT,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,WAAW;MACX,cAAc,EAAE,EAAE;EACtB;IACE,mBAAmB,EAAE;EACvB;IACE,YAAY;IACZ,wBAAwB;IACxB,sBAAsB;IACtB,oBAAoB,EAAE;IACtB;MACE;QACE,aAAa;QACb,eAAe;QACf,oBAAoB,EAAE,EAAE;EAC9B;IACE,sBAAsB;IACtB,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW,EAAE;IACb;MACE;QACE,eAAe;QACf,kBAAkB;QAClB,iBAAiB,EAAE,EAAE;IACzB;MACE,0BAA0B;MAC1B,gBAAgB;MAChB,cAAc,EAAE;MAChB;QACE;UACE,mBAAmB;UACnB,UAAU;UACV,WAAW;UACX,gBAAgB,EAAE,EAAE;IAC1B;MACE,iBAAiB;MACjB,kBAAkB,EAAE;IACtB;MACE;QACE,eAAe,EAAE,EAAE;EACzB;IACE,WAAW;IACX,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,YAAY;IACZ,kBAAkB,EAAE;IACpB;MACE;QACE,YAAY;QACZ,UAAU;QACV,YAAY;QACZ,aAAa;QACb,WAAW,EAAE,EAAE;IACnB;MACE,gBAAgB;MAChB,cAAc,EAAE;EACpB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,YAAY,EAAE;IAChB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB;MACjB,mBAAmB;MACnB,SAAS;MACT,aAAa,EAAE","file":"NowPlaying.css","sourcesContent":["@import url(../variables.css);\n.now-playing {\n  border-radius: 3px;\n  padding: 15px 15px;\n  width: 90%;\n  margin: 20px auto;\n  background: #3B3546;\n  white-space: nowrap;\n  position: fixed;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  height: 70px; }\n  @media screen and (min-width: 768px) {\n    .now-playing {\n      position: absolute;\n      top: 120px;\n      right: 0;\n      left: auto;\n      bottom: auto;\n      margin: 20px 50px;\n      width: 22%;\n      height: 350px; } }\n  .now-playing h3 {\n    margin: 5px 0 20px; }\n  .now-playing .artwork {\n    width: 44px;\n    margin: 0px 10px 10px 0;\n    display: inline-block;\n    vertical-align: top; }\n    @media screen and (min-width: 768px) {\n      .now-playing .artwork {\n        width: 200px;\n        display: block;\n        margin: 35px auto 0; } }\n  .now-playing .info {\n    display: inline-block;\n    vertical-align: top;\n    font-size: 14px;\n    position: relative;\n    width: 90%; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info {\n        display: block;\n        margin: 10px 25px;\n        position: static; } }\n    .now-playing .info .currently {\n      text-transform: uppercase;\n      font-size: 12px;\n      margin: 5px 0; }\n      @media screen and (min-width: 768px) {\n        .now-playing .info .currently {\n          position: absolute;\n          top: 20px;\n          left: 20px;\n          font-size: 14px; } }\n    .now-playing .info .name {\n      font-weight: 700;\n      margin-right: 7px; }\n    @media screen and (min-width: 768px) {\n      .now-playing .info .artist {\n        display: block; } }\n  .now-playing .song {\n    width: 80%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .now-playing .rating {\n    position: absolute;\n    float: right;\n    top: 14px;\n    right: 14px;\n    z-index: 99999999; }\n    @media screen and (min-width: 768px) {\n      .now-playing .rating {\n        float: left;\n        top: auto;\n        right: auto;\n        bottom: 12px;\n        left: 40px; } }\n    .now-playing .rating .material-icons {\n      font-size: 18px;\n      margin: 0 1px; }\n  .now-playing .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer;\n    margin-left: 180px; }\n    .now-playing .vote i {\n      width: 30px; }\n    .now-playing .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      position: relative;\n      top: 3px;\n      bottom: 24px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".rating {\n  position: absolute;\n  float: right;\n  top: 14px;\n  right: 14px; }\n  .rating .material-icons.heart {\n    font-size: 18px;\n    width: 18px;\n    margin: 0 1px; }\n", "", {"version":3,"sources":["/./components/NowPlayingRating/NowPlayingRating.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,YAAY,EAAE;EACd;IACE,gBAAgB;IAChB,YAAY;IACZ,cAAc,EAAE","file":"NowPlayingRating.css","sourcesContent":[".rating {\n  position: absolute;\n  float: right;\n  top: 14px;\n  right: 14px; }\n  .rating .material-icons.heart {\n    font-size: 18px;\n    width: 18px;\n    margin: 0 1px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, ".list-container {\n  /* width: 100%; */ }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 0 auto; } }\n\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    tr .vote .material-icons {\n      display: inline-block;\n      width: 30px; }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px; }\n", "", {"version":3,"sources":["/./components/PlayedSong/PlayedSong.css"],"names":[],"mappings":"AACA;EACE,kBAAkB,EAAE;EACpB;IACE;MACE,WAAW;MACX,eAAe,EAAE,EAAE;;AAEzB;EACE,aAAa;EACb,8BAA8B,EAAE;EAChC;IACE,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe,EAAE;EACnB;IACE,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,iBAAiB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB,EAAE;IAClB;MACE,sBAAsB;MACtB,YAAY,EAAE;IAChB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB,EAAE","file":"PlayedSong.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  /* width: 100%; */ }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 0 auto; } }\n\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    tr .vote .material-icons {\n      display: inline-block;\n      width: 30px; }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, ".list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: 0; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border-color: #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0;\n    overflow-x: hidden; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n", "", {"version":3,"sources":["/./components/Playlist/Playlist.css"],"names":[],"mappings":"AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,OAAO,EAAE;EACT;IACE;MACE,WAAW;MACX,kBAAkB,EAAE,EAAE;EAC1B;IACE,0BAA0B;IAC1B,gBAAgB,EAAE;EACpB;IACE,sBAAsB,EAAE;EAC1B;IACE,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,mBAAmB,EAAE;IACrB;MACE;QACE,cAAc,EAAE,EAAE;IACtB;MACE,0BAA0B;MAC1B,YAAY;MACZ,oBAAoB,EAAE;MACtB;QACE,eAAe;QACf,0BAA0B,EAAE","file":"Playlist.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: 0; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border-color: #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0;\n    overflow-x: hidden; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, ".search-box {\n  position: relative;\n  top: -30px; }\n  @media screen and (min-width: 768px) {\n    .search-box {\n      display: none; } }\n  .search-box .search-bar {\n    width: 90%;\n    margin: 10px auto 0; }\n    .search-box .search-bar .placeholder {\n      position: relative; }\n    .search-box .search-bar .search, .search-box .search-bar .cancel {\n      position: absolute;\n      top: 7px;\n      left: 7px;\n      color: #bbb; }\n    .search-box .search-bar .cancel {\n      left: auto;\n      right: 7px;\n      display: none; }\n    .search-box .search-bar input:focus + .cancel {\n      display: block; }\n    .search-box .search-bar input {\n      border: none;\n      margin: 0 auto;\n      width: 100%;\n      height: 40px;\n      border-radius: 10px;\n      font-size: 16px;\n      padding: 10px;\n      padding-left: 40px;\n      background: #E8E4EF; }\n", "", {"version":3,"sources":["/./components/SearchBox/SearchBox.css"],"names":[],"mappings":"AACA;EACE,mBAAmB;EACnB,WAAW,EAAE;EACb;IACE;MACE,cAAc,EAAE,EAAE;EACtB;IACE,WAAW;IACX,oBAAoB,EAAE;IACtB;MACE,mBAAmB,EAAE;IACvB;MACE,mBAAmB;MACnB,SAAS;MACT,UAAU;MACV,YAAY,EAAE;IAChB;MACE,WAAW;MACX,WAAW;MACX,cAAc,EAAE;IAClB;MACE,eAAe,EAAE;IACnB;MACE,aAAa;MACb,eAAe;MACf,YAAY;MACZ,aAAa;MACb,oBAAoB;MACpB,gBAAgB;MAChB,cAAc;MACd,mBAAmB;MACnB,oBAAoB,EAAE","file":"SearchBox.css","sourcesContent":["@import url(../variables.css);\n.search-box {\n  position: relative;\n  top: -30px; }\n  @media screen and (min-width: 768px) {\n    .search-box {\n      display: none; } }\n  .search-box .search-bar {\n    width: 90%;\n    margin: 10px auto 0; }\n    .search-box .search-bar .placeholder {\n      position: relative; }\n    .search-box .search-bar .search, .search-box .search-bar .cancel {\n      position: absolute;\n      top: 7px;\n      left: 7px;\n      color: #bbb; }\n    .search-box .search-bar .cancel {\n      left: auto;\n      right: 7px;\n      display: none; }\n    .search-box .search-bar input:focus + .cancel {\n      display: block; }\n    .search-box .search-bar input {\n      border: none;\n      margin: 0 auto;\n      width: 100%;\n      height: 40px;\n      border-radius: 10px;\n      font-size: 16px;\n      padding: 10px;\n      padding-left: 40px;\n      background: #E8E4EF; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".search-results {\n  width: 90%;\n  margin: 0 auto;\n  background: #E8E4EF;\n  color: #A8A2B2;\n  z-index: 5;\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-radius: 10px; }\n  .search-results .search-results-tracks {\n    padding: 0; }\n    .search-results .search-results-tracks ul {\n      list-style: none;\n      padding: 0; }\n    .search-results .search-results-tracks li {\n      cursor: pointer;\n      padding: 10px 40px;\n      border-bottom: 1px solid #B8ACCB; }\n      .search-results .search-results-tracks li:last-of-type {\n        border: none; }\n      .search-results .search-results-tracks li .track-name {\n        display: block;\n        font-weight: 500;\n        color: #3B3546;\n        line-height: 18px; }\n      .search-results .search-results-tracks li .track-artist-name {\n        display: block;\n        font-size: 14px; }\n", "", {"version":3,"sources":["/./components/SearchResults/SearchResults.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,oBAAoB,EAAE;EACtB;IACE,WAAW,EAAE;IACb;MACE,iBAAiB;MACjB,WAAW,EAAE;IACf;MACE,gBAAgB;MAChB,mBAAmB;MACnB,iCAAiC,EAAE;MACnC;QACE,aAAa,EAAE;MACjB;QACE,eAAe;QACf,iBAAiB;QACjB,eAAe;QACf,kBAAkB,EAAE;MACtB;QACE,eAAe;QACf,gBAAgB,EAAE","file":"SearchResults.css","sourcesContent":[".search-results {\n  width: 90%;\n  margin: 0 auto;\n  background: #E8E4EF;\n  color: #A8A2B2;\n  z-index: 5;\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-radius: 10px; }\n  .search-results .search-results-tracks {\n    padding: 0; }\n    .search-results .search-results-tracks ul {\n      list-style: none;\n      padding: 0; }\n    .search-results .search-results-tracks li {\n      cursor: pointer;\n      padding: 10px 40px;\n      border-bottom: 1px solid #B8ACCB; }\n      .search-results .search-results-tracks li:last-of-type {\n        border: none; }\n      .search-results .search-results-tracks li .track-name {\n        display: block;\n        font-weight: 500;\n        color: #3B3546;\n        line-height: 18px; }\n      .search-results .search-results-tracks li .track-artist-name {\n        display: block;\n        font-size: 14px; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, "tr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    @media screen and (min-width: 768px) {\n      tr .vote {\n        width: 100px; } }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      display: inline-block;\n      width: 20px; }\n      @media screen and (min-width: 768px) {\n        tr .vote .upvotes {\n          margin-right: 20px; } }\n", "", {"version":3,"sources":["/./components/Song/Song.css"],"names":[],"mappings":"AACA;EACE,aAAa;EACb,8BAA8B,EAAE;EAChC;IACE,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,eAAe,EAAE;EACnB;IACE,eAAe;IACf,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB,EAAE;EAC5B;IACE,iBAAiB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB,EAAE;IAClB;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE,oBAAoB;MACpB,gBAAgB;MAChB,iBAAiB;MACjB,sBAAsB;MACtB,YAAY,EAAE;MACd;QACE;UACE,mBAAmB,EAAE,EAAE","file":"Song.css","sourcesContent":["@import url(../variables.css);\ntr {\n  height: 70px;\n  counter-increment: my_counter; }\n  tr .ranking {\n    width: 30px;\n    position: relative;\n    top: -12px;\n    color: #a8a2b2; }\n  tr .name-artist span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  tr .name-artist .name {\n    font-weight: 700; }\n  tr .vote {\n    width: 60px;\n    padding-left: 10px;\n    cursor: pointer; }\n    @media screen and (min-width: 768px) {\n      tr .vote {\n        width: 100px; } }\n    tr .vote .upvotes {\n      vertical-align: top;\n      margin-top: 3px;\n      margin-left: 5px;\n      display: inline-block;\n      width: 20px; }\n      @media screen and (min-width: 768px) {\n        tr .vote .upvotes {\n          margin-right: 20px; } }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, ".list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: -15px; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border: 1px solid #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n", "", {"version":3,"sources":["/./components/SongList/SongList.css"],"names":[],"mappings":"AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,WAAW,EAAE;EACb;IACE;MACE,WAAW;MACX,kBAAkB,EAAE,EAAE;EAC1B;IACE,0BAA0B;IAC1B,gBAAgB,EAAE;EACpB;IACE,0BAA0B,EAAE;EAC9B;IACE,mBAAmB;IACnB,cAAc;IACd,WAAW,EAAE;IACb;MACE;QACE,cAAc,EAAE,EAAE;IACtB;MACE,0BAA0B;MAC1B,YAAY;MACZ,oBAAoB,EAAE;MACtB;QACE,eAAe;QACf,0BAA0B,EAAE","file":"SongList.css","sourcesContent":["@import url(../variables.css);\n.list-container {\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  top: -15px; }\n  @media screen and (min-width: 768px) {\n    .list-container {\n      width: 60%;\n      margin: 20px 50px; } }\n  .list-container h3 {\n    text-transform: uppercase;\n    font-size: 16px; }\n  .list-container hr {\n    border: 1px solid #3B3546; }\n  .list-container .container {\n    overflow-y: scroll;\n    height: 380px;\n    padding: 0; }\n    @media screen and (min-width: 768px) {\n      .list-container .container {\n        height: 450px; } }\n    .list-container .container table {\n      border-collapse: collapse;\n      width: 100%;\n      table-layout: fixed; }\n      .list-container .container table tbody {\n        overflow: auto;\n        counter-reset: my_counter; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".copy {\n  margin: 30px 30px 50px;\n  font-family: 'Asap', sans-serif; }\n  .copy .title {\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 24px; }\n  .copy .desc {\n    line-height: 24px;\n    color: #A8A2B2; }\n\n.button-container {\n  margin: 30px;\n  font-family: 'Asap', sans-serif; }\n  .button-container .input-container {\n    margin-bottom: 20px;\n    display: none; }\n    .button-container .input-container input {\n      color: #fff;\n      background: transparent;\n      border: none;\n      border-bottom: 2px solid #A8A2B2;\n      height: 40px;\n      width: 250px;\n      font-size: 20px; }\n  .button-container .caption {\n    display: block;\n    margin-bottom: 15px;\n    color: #A8A2B2; }\n    .button-container .caption .cap2 {\n      display: none; }\n  .button-container .join, .button-container .create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    border: 2px solid #fff;\n    padding: 15px 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 20px; }\n  .button-container .overlay-join, .button-container .overlay-create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    position: absolute; }\n", "", {"version":3,"sources":["/./routes/home/Home.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,gCAAgC,EAAE;EAClC;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,gBAAgB,EAAE;EACpB;IACE,kBAAkB;IAClB,eAAe,EAAE;;AAErB;EACE,aAAa;EACb,gCAAgC,EAAE;EAClC;IACE,oBAAoB;IACpB,cAAc,EAAE;IAChB;MACE,YAAY;MACZ,wBAAwB;MACxB,aAAa;MACb,iCAAiC;MACjC,aAAa;MACb,aAAa;MACb,gBAAgB,EAAE;EACtB;IACE,eAAe;IACf,oBAAoB;IACpB,eAAe,EAAE;IACjB;MACE,cAAc,EAAE;EACpB;IACE,eAAe;IACf,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,mBAAmB;IACnB,gBAAgB,EAAE;EACpB;IACE,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB,EAAE","file":"Home.css","sourcesContent":[".copy {\n  margin: 30px 30px 50px;\n  font-family: 'Asap', sans-serif; }\n  .copy .title {\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 24px; }\n  .copy .desc {\n    line-height: 24px;\n    color: #A8A2B2; }\n\n.button-container {\n  margin: 30px;\n  font-family: 'Asap', sans-serif; }\n  .button-container .input-container {\n    margin-bottom: 20px;\n    display: none; }\n    .button-container .input-container input {\n      color: #fff;\n      background: transparent;\n      border: none;\n      border-bottom: 2px solid #A8A2B2;\n      height: 40px;\n      width: 250px;\n      font-size: 20px; }\n  .button-container .caption {\n    display: block;\n    margin-bottom: 15px;\n    color: #A8A2B2; }\n    .button-container .caption .cap2 {\n      display: none; }\n  .button-container .join, .button-container .create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    border: 2px solid #fff;\n    padding: 15px 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 20px; }\n  .button-container .overlay-join, .button-container .overlay-create {\n    display: block;\n    width: 250px;\n    height: 57px;\n    position: absolute; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n.root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width); }\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AAEH;EACE,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC,EAAE","file":"NotFound.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import url(../../components/variables.css);\n.root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width); }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(590);
    var insertCss = __webpack_require__(39);

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

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(591);
    var insertCss = __webpack_require__(39);

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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(592);
    var insertCss = __webpack_require__(39);

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

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(593);
    var insertCss = __webpack_require__(39);

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

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(594);
    var insertCss = __webpack_require__(39);

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

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(595);
    var insertCss = __webpack_require__(39);

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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(596);
    var insertCss = __webpack_require__(39);

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

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(597);
    var insertCss = __webpack_require__(39);

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

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(598);
    var insertCss = __webpack_require__(39);

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

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(599);
    var insertCss = __webpack_require__(39);

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

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(600);
    var insertCss = __webpack_require__(39);

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

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(601);
    var insertCss = __webpack_require__(39);

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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /* --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif; */\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */ }\n", "", {"version":3,"sources":["/./components/variables.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;EACE;;gFAE8E;EAC9E,wEAAwE;EACxE;;gFAE8E;EAC9E,4BAA4B;EAC5B;;gFAE8E;EAC9E,uBAAuB;EACvB,gCAAgC;EAChC,uBAAuB;EACvB,2BAA2B;EAC3B,uBAAuB;EACvB,6BAA6B;EAC7B,wBAAwB;EACxB,iCAAiC,EAAE","file":"variables.css","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /* --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif; */\n  /*\n   * Layout\n   * ======================================================================== */\n  --max-content-width: 1000px;\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  --screen-xs-min: 480px;\n  /* Extra small screen / phone */\n  --screen-sm-min: 768px;\n  /* Small screen / tablet */\n  --screen-md-min: 992px;\n  /* Medium screen / desktop */\n  --screen-lg-min: 1200px;\n  /* Large screen / wide desktop */ }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(145);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsxFileName = '/Users/bencampbell/Developement/crowddj-react/src/client.js'; /**
                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                   *
                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                   *
                                                                                   * This source code is licensed under the MIT license found in the
                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                   */

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(location) {
    var _this = this;

    var _ret;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (_history2.default.action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context2.prev = 3;
            return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
              var route;
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _universalRouter2.default.resolve(routes, {
                        path: location.pathname,
                        query: _queryString2.default.parse(location.search)
                      });

                    case 2:
                      route = _context.sent;

                      if (!(currentLocation.key !== location.key)) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt('return', {
                        v: void 0
                      });

                    case 5:
                      if (!route.redirect) {
                        _context.next = 8;
                        break;
                      }

                      _history2.default.replace(route.redirect);
                      return _context.abrupt('return', {
                        v: void 0
                      });

                    case 8:

                      appInstance = _reactDom2.default.render(_react2.default.createElement(
                        _reactRedux.Provider,
                        { store: (0, _store2.default)({}), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 151
                          },
                          __self: _this
                        },
                        _react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 152
                            },
                            __self: _this
                          },
                          route.component
                        )
                      ), container, function () {
                        return onRenderComplete(route, location);
                      });

                    case 9:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this);
            })(), 't0', 5);

          case 5:
            _ret = _context2.t0;

            if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', _ret.v);

          case 8:
            _context2.next = 21;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t1 = _context2['catch'](3);

            console.error(_context2.t1); // eslint-disable-line no-console

            // Current url has been changed during navigation process, do nothing

            if (!(currentLocation.key !== location.key)) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt('return');

          case 15:
            if (false) {
              _context2.next = 20;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context2.t1.message;
            _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: _context2.t1, __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              },
              __self: this
            }), container);
            return _context2.abrupt('return');

          case 20:

            // Avoid broken navigation in production mode by a full page reload on error
            window.location.reload();

          case 21:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 10]]);
  }));

  return function onLocationChange(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


__webpack_require__(322);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(102);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fastclick = __webpack_require__(323);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _universalRouter = __webpack_require__(326);

var _universalRouter2 = _interopRequireDefault(_universalRouter);

var _queryString = __webpack_require__(324);

var _queryString2 = _interopRequireDefault(_queryString);

var _reactRedux = __webpack_require__(325);

var _PathUtils = __webpack_require__(146);

var _history = __webpack_require__(217);

var _history2 = _interopRequireDefault(_history);

var _App = __webpack_require__(318);

var _App2 = _interopRequireDefault(_App);

var _devUtils = __webpack_require__(319);

var _store = __webpack_require__(321);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  }
};

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}
function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}
function updateCustomMeta(property, content) {
  // eslint-disable-line no-unused-vars
  updateTag('meta', 'property', property, 'content', content);
}
function updateLink(rel, href) {
  // eslint-disable-line no-unused-vars
  updateTag('link', 'rel', rel, 'href', href);
}

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    updateMeta('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    if (window.ga) {
      window.ga('send', 'pageview', (0, _PathUtils.createPath)(location));
    }
  };
};

// Make taps on links and buttons work fast on mobiles
_fastclick2.default.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = _history2.default.location;
var routes = __webpack_require__(320).default;_history2.default.listen(onLocationChange);
onLocationChange(currentLocation);

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./routes', function () {
    routes = require('./routes').default; // eslint-disable-line global-require

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        (0, _devUtils.deepForceUpdate)(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: undefined
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reBase = __webpack_require__(655);

var _reBase2 = _interopRequireDefault(_reBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _reBase2.default.createClass({
  apiKey: "AIzaSyAtnwNgh3qzpYFwurHb0Myg7k8ZLnRyTTA",
  authDomain: "crowddj-be2bb.firebaseapp.com",
  databaseURL: "https://crowddj-be2bb.firebaseio.com"
}, 'crowddj-be2bb');

exports.default = base;

/***/ }),

/***/ 89:
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

var _Cookies = __webpack_require__(333);

var _Cookies2 = _interopRequireDefault(_Cookies);

var _reactCookie = __webpack_require__(658);

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

/***/ })

},[829]);
//# sourceMappingURL=client.js.map