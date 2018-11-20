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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Array.js":
/*!**********************!*\
  !*** ./src/Array.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/**\r\n * Returns the single element in the array.\r\n *\r\n * @throws {Error} Array does not have a single element.\r\n */\nArray.prototype.single = function () {\n  if (this.length > 1) {\n    throw new Error(\"Array has more than one element. (\".concat(this.length, \")\"));\n  } else if (this.length === 0) {\n    throw new Error(\"Array is empty\");\n  }\n\n  return this[0];\n};\n/**\r\n * Returns the single element in the array.  If the array is empty, returns `null`.\r\n *\r\n * @throws {Error} Array has more than one element.\r\n */\n\n\nArray.prototype.singleOrNull = function () {\n  if (this.length > 1) {\n    throw new Error(\"Array has more than one element. (\".concat(this.length, \")\"));\n  } else if (this.length === 0) {\n    return null;\n  }\n\n  return this[0];\n};\n\nvar oldFilter = Array.prototype.filter;\n/**\r\n * Returns an array containing the elements of the specified original array that meet the condition specified in a\r\n * callback function. If no callback is specified, filters out falsey values.\r\n *\r\n * @template S\r\n * @param {(value: any, index: number, array: any[]) => value is S} callbackfn A function that accepts up to three\r\n *      arguments. The filter method calls the callbackfn function one time for each element in the array.\r\n * @param {any?} thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is\r\n *                       omitted, undefined is used as the this value.\r\n * @returns {S[]} The elements of an array that meet the condition specified in the callback function. If no callback is\r\n *                specified, filters out falsey values.\r\n */\n\nArray.prototype.filter = function () {\n  var callbackfn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (v) {\n    return !!v;\n  };\n  var thisArg = arguments.length > 1 ? arguments[1] : undefined;\n  return oldFilter.call(this, callbackfn.bind(thisArg));\n};\n/**\r\n * Returns `true` if all values in the array resolves to truthy, else `false`.  Short-circuits if any value evaluates to\r\n * falsey.\r\n */\n\n\nArray.prototype.asyncAll =\n/*#__PURE__*/\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;\n\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _iteratorNormalCompletion = true;\n          _didIteratorError = false;\n          _iteratorError = undefined;\n          _context.prev = 3;\n          _iterator = this[Symbol.iterator]();\n\n        case 5:\n          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n            _context.next = 18;\n            break;\n          }\n\n          i = _step.value;\n\n          if (!(i instanceof Function)) {\n            _context.next = 11;\n            break;\n          }\n\n          _context.next = 10;\n          return i();\n\n        case 10:\n          i = _context.sent;\n\n        case 11:\n          _context.next = 13;\n          return i;\n\n        case 13:\n          if (_context.sent) {\n            _context.next = 15;\n            break;\n          }\n\n          return _context.abrupt(\"return\", false);\n\n        case 15:\n          _iteratorNormalCompletion = true;\n          _context.next = 5;\n          break;\n\n        case 18:\n          _context.next = 24;\n          break;\n\n        case 20:\n          _context.prev = 20;\n          _context.t0 = _context[\"catch\"](3);\n          _didIteratorError = true;\n          _iteratorError = _context.t0;\n\n        case 24:\n          _context.prev = 24;\n          _context.prev = 25;\n\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n\n        case 27:\n          _context.prev = 27;\n\n          if (!_didIteratorError) {\n            _context.next = 30;\n            break;\n          }\n\n          throw _iteratorError;\n\n        case 30:\n          return _context.finish(27);\n\n        case 31:\n          return _context.finish(24);\n\n        case 32:\n          return _context.abrupt(\"return\", true);\n\n        case 33:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, this, [[3, 20, 24, 32], [25,, 27, 31]]);\n}));\n/**\r\n * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to\r\n * falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.\r\n *\r\n * @see `Array.prototype.asyncAll()`\r\n */\n\nArray.prototype.all = function () {\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var _step2$value = _slicedToArray(_step2.value, 2),\n          _idx = _step2$value[0],\n          i = _step2$value[1];\n\n      if (i instanceof Function) {\n        i = i();\n      }\n\n      if (i instanceof Promise) {\n        var arr = _toConsumableArray(this);\n\n        arr.slice(_idx);\n        return arr.asyncAll();\n      }\n\n      if (!i) {\n        return false;\n      }\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n        _iterator2.return();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  return true;\n};\n/**\r\n * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves\r\n * to truthy.\r\n */\n\n\nArray.prototype.anyAsync =\n/*#__PURE__*/\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee2() {\n  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i;\n\n  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _iteratorNormalCompletion3 = true;\n          _didIteratorError3 = false;\n          _iteratorError3 = undefined;\n          _context2.prev = 3;\n          _iterator3 = this[Symbol.iterator]();\n\n        case 5:\n          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {\n            _context2.next = 18;\n            break;\n          }\n\n          i = _step3.value;\n\n          if (!(i instanceof Function)) {\n            _context2.next = 11;\n            break;\n          }\n\n          _context2.next = 10;\n          return i();\n\n        case 10:\n          i = _context2.sent;\n\n        case 11:\n          _context2.next = 13;\n          return i;\n\n        case 13:\n          if (!_context2.sent) {\n            _context2.next = 15;\n            break;\n          }\n\n          return _context2.abrupt(\"return\", true);\n\n        case 15:\n          _iteratorNormalCompletion3 = true;\n          _context2.next = 5;\n          break;\n\n        case 18:\n          _context2.next = 24;\n          break;\n\n        case 20:\n          _context2.prev = 20;\n          _context2.t0 = _context2[\"catch\"](3);\n          _didIteratorError3 = true;\n          _iteratorError3 = _context2.t0;\n\n        case 24:\n          _context2.prev = 24;\n          _context2.prev = 25;\n\n          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n            _iterator3.return();\n          }\n\n        case 27:\n          _context2.prev = 27;\n\n          if (!_didIteratorError3) {\n            _context2.next = 30;\n            break;\n          }\n\n          throw _iteratorError3;\n\n        case 30:\n          return _context2.finish(27);\n\n        case 31:\n          return _context2.finish(24);\n\n        case 32:\n          return _context2.abrupt(\"return\", false);\n\n        case 33:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2, this, [[3, 20, 24, 32], [25,, 27, 31]]);\n}));\n/**\r\n * Returns `true` if any element in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to\r\n * truthy.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.\r\n *\r\n * @see `Array.prototype.asyncAny()`\r\n */\n\nArray.prototype.any = function () {\n  var _iteratorNormalCompletion4 = true;\n  var _didIteratorError4 = false;\n  var _iteratorError4 = undefined;\n\n  try {\n    for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n      var i = _step4.value;\n\n      if (i instanceof Function) {\n        i = i();\n      }\n\n      if (i instanceof Promise) {\n        var arr = _toConsumableArray(this);\n\n        arr.slice(idx);\n        return arr.asyncAny();\n      }\n\n      if (i) {\n        return true;\n      }\n    }\n  } catch (err) {\n    _didIteratorError4 = true;\n    _iteratorError4 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n        _iterator4.return();\n      }\n    } finally {\n      if (_didIteratorError4) {\n        throw _iteratorError4;\n      }\n    }\n  }\n\n  return false;\n};\n/**\r\n * Flattens the array recursively.\r\n *\r\n * @template T\r\n * @typedef {Array<T>} ArrayOfArrays\r\n * @example\r\n * [1, [2, 3]].flat() // => [1, 2, 3]\r\n *\r\n * @example\r\n * [[1, [2, 3], [4, [5]]], 6].flat() // => [1, 2, 3, 4, 5, 6]\r\n */\n\n\nArray.prototype.flat = function () {\n  return this.reduce(function (a, val) {\n    return Array.isArray(val) ? a.concat(val.flat()) : a.concat(val);\n  }, []);\n};\n\n//# sourceURL=webpack:///./src/Array.js?");

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/**\r\n * Returns an ordinary object using the Map's keys as the object's keys and its values as the object's values.\r\n *\r\n * @throws {Error} Since object keys are evaluated as strings (in particular, `{ [myObj]: value }` will have a key named\r\n *                 `[Object object]`), it's possible that two keys within the Map may evaluate to the same object key.\r\n *                 In this case, if the associated values are not the same, throws an Error.\r\n */\nMap.prototype.toObject = function () {\n  var o = {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _step$value = _slicedToArray(_step.value, 2),\n          key = _step$value[0],\n          value = _step$value[1];\n\n      if (o.hasOwnProperty(key) && o[key] !== value) {\n        throw new Error(\"Duplicate key \".concat(key, \" found in Map.  First value: \").concat(o[key], \", next value: \").concat(value));\n      }\n\n      o[key] = value;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return o;\n};\n/**\r\n * Defines the default JSON representation of a Map to be an array of key-value pairs.\r\n */\n\n\nMap.prototype.toJSON = function () {\n  return Array.from(this.entries());\n};\n\n//# sourceURL=webpack:///./src/Map.js?");

/***/ }),

/***/ "./src/Object.js":
/*!***********************!*\
  !*** ./src/Object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * Calls a defined callback function on each entry of an object, and returns an array that contains the results.\r\n * \r\n * @param {object} object The object whose entries on which to call callbackfn.\r\n * @param {(entry: [string|number|Symbol, any], index: number, array: [string|number|Symbol, any][]) => U} callbackfn \r\n *      A function that accepts up to three arguments. The map method calls the callbackfn function one time for each\r\n *      element in the array. \r\n * @param {any} [thisArg] An object to which the this keyword can refer in the callbackfn function. If thisArg is\r\n *      omitted, undefined is used as the this value.\r\n * @template U\r\n * @returns {U[]} An array of each entry mapped to a valued via callbackfn.\r\n * \r\n * @see `Object.entries()`\r\n */\nObject.map = function (object, callbackfn, thisArg) {\n  return Object.entries(object).map(callbackfn, thisArg);\n};\n\n//# sourceURL=webpack:///./src/Object.js?");

/***/ }),

/***/ "./src/Promise.js":
/*!************************!*\
  !*** ./src/Promise.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the specified\r\n * period instead of resolving.\r\n *\r\n * @param {number} time Amount of time in milliseconds to wait before resolving.  Defaults to 0.\r\n * @param {bool?} throws If `true`, causes returned Promise to reject after the specified amount of time rather than\r\n *                       resolving.\r\n */\nPromise.delay = function () {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var throws = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (throws) {\n    return new Promise(function (_, rej) {\n      return setTimeout(rej, time);\n    });\n  }\n\n  return new Promise(function (res) {\n    return setTimeout(res, time);\n  });\n};\n\n//# sourceURL=webpack:///./src/Promise.js?");

/***/ }),

/***/ "./src/RegExp.js":
/*!***********************!*\
  !*** ./src/RegExp.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_supports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/supports */ \"./src/util/supports.js\");\n\n/**\r\n * Escapes a string for use within a regular expression pattern.\r\n * \r\n * @example\r\n * \r\n * // properly escapes the '.' in `failstream.net`\r\n * new RegExp(`^${RegExp.escapeExpression('failstream.net')}`) \r\n * \r\n * @see Stolen from [How to escape regular expression special characters using javascript?]{@link https://stackoverflow.com/a/9310752/3120446}\r\n */\n\nRegExp.escapeExpression = function (text) {\n  return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');\n};\n/**\r\n * Creates a `RegExp` that matches strings that do not start with `expr`.\r\n * \r\n * @param {string|RegExp} expr The string or regular expression that should not be matched.\r\n * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a \r\n *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.\r\n */\n\n\nRegExp.notStartsWith = function (expr, flags) {\n  if (expr.constructor === RegExp) {\n    expr = expr.source;\n    flags = arguments.length === 1 ? expr.flags : flags;\n  } else {\n    expr = RegExp.escapeExpression(expr);\n  }\n\n  return new RegExp(\"^(?!\".concat(expr, \").*$\"), flags);\n};\n/**\r\n * Creates a `RegExp` that matches strings that do not contain `expr`.\r\n * \r\n * @param {string|RegExp} expr The string or regular expression that should not be matched.\r\n * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a \r\n *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.\r\n */\n\n\nRegExp.notContains = function (expr, flags) {\n  if (expr.constructor === RegExp) {\n    expr = expr.source;\n    flags = arguments.length === 1 ? expr.flags : flags;\n  } else {\n    expr = RegExp.escapeExpression(expr);\n  }\n\n  return new RegExp(\"^(?:(?!\".concat(expr, \").)*$\"), flags);\n};\n\nvar repCasedChar = function () {\n  if (_util_supports__WEBPACK_IMPORTED_MODULE_0__[\"supportsNegativeLookbehind\"]) {\n    return function (_, c) {\n      var cUp = c.toUpperCase(),\n          cLow = c.toLowerCase();\n\n      if (cUp !== cLow) {\n        return \"[\".concat(cLow).concat(cUp, \"]\");\n      }\n\n      return c;\n    };\n  }\n\n  return function (_, c) {\n    var cUp = c.toUpperCase(),\n        cLow = c.toLowerCase();\n\n    if (cUp !== cLow) {\n      return \"[\".concat(cLow).concat(cUp, \"]\").reverse();\n    }\n\n    return c.reverse();\n  };\n}();\n/**\r\n * Returns a regular expression *string* mimicking case-insensitivity by replacing literal cased-characters with a\r\n * character class containing both cases.\r\n * \r\n * @example\r\n * RegExp.fakeCaseInsensitive('_Foo1\\nbar') \r\n * // returns '_[fF][oO][oO]1\\n[bB][aA][rR]'\r\n * \r\n * @warning\r\n * This method has particularly poor performance when used in an environment that does not support negative-lookbehind\r\n * regular expressions for long strings as it performs two string reversals in order to mimick the behavior.\r\n */\n\n\nRegExp.fakeCaseInsensitive = function (expr) {\n  if (expr.constructor === RegExp) {\n    expr = expr.source;\n  }\n\n  if (_util_supports__WEBPACK_IMPORTED_MODULE_0__[\"supportsNegativeLookbehind\"]) {\n    return expr.replace(/(?<!\\\\)((?:\\\\\\\\)*[^\\\\\\s])/g, repCasedChar);\n  }\n\n  return expr.reverse().replace(/([^\\\\]|(?:\\\\\\\\)*)(?!\\\\)/g, repCasedChar).reverse();\n};\n\n//# sourceURL=webpack:///./src/RegExp.js?");

/***/ }),

/***/ "./src/Set.js":
/*!********************!*\
  !*** ./src/Set.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Set.prototype.toggle = function toggle(item) {\n  if (this.has(item)) {\n    this.delete(item);\n    return false;\n  } else {\n    this.add(item);\n    return true;\n  }\n};\n\nSet.prototype.toArray = function () {\n  return Array.from(this);\n};\n\nSet.prototype.toJSON = Set.prototype.toArray;\n\n//# sourceURL=webpack:///./src/Set.js?");

/***/ }),

/***/ "./src/String.js":
/*!***********************!*\
  !*** ./src/String.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * Returns a new string with its characters in reverse order.\r\n * \r\n * @example\r\n * var foo = 'abcde';\r\n * console.log(foo.reverse()); // edcba\r\n */\nString.prototype.reverse = function () {\n  var s = '';\n\n  for (var i = this.length - 1; i >= 0; i--) {\n    s += this.charAt(i);\n  }\n\n  return s;\n};\n\n//# sourceURL=webpack:///./src/String.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ \"./src/Object.js\");\n/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Object__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./String */ \"./src/String.js\");\n/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_String__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Array */ \"./src/Array.js\");\n/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Array__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RegExp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExp */ \"./src/RegExp.js\");\n/* harmony import */ var _Set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Set */ \"./src/Set.js\");\n/* harmony import */ var _Set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Set__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Map */ \"./src/Map.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Map__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Promise */ \"./src/Promise.js\");\n/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Promise__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _jQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jQuery */ \"./src/jQuery.js\");\n/* harmony import */ var _jQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jQuery__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jQuery.js":
/*!***********************!*\
  !*** ./src/jQuery.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jq;\n\nif (typeof window !== 'undefined') {\n  if (window.jQuery) {\n    jq = jQuery;\n  }\n}\n\nif (!jq) {\n  try {\n    jq = __webpack_require__(/*! jquery */ \"jquery\");\n  } catch (_unused) {}\n}\n\n(function ($) {\n  if (!$) {\n    return;\n  }\n\n  $.fn.nodeName = function (newNodeName) {\n    if (!this.length) {\n      if (newNodeName !== undefined) {\n        return this;\n      }\n\n      return undefined;\n    }\n\n    if (newNodeName === undefined) {\n      return this[0].nodeName;\n    }\n\n    if (newNodeName instanceof Function) {\n      return this.map(function (index) {\n        return this.nodeName(newNodeName(index, this))[0];\n      });\n    }\n\n    return this.map(function () {\n      var $this = $(this),\n          $el = $(\"<\".concat(newNodeName, \">\")).data($this.data());\n      $.fn.click;\n      Array.from(this.attributes).forEach(function (a) {\n        if (!a.name.startsWith('data-')) {\n          $el.attr(a.name, a.value);\n        }\n      });\n\n      var _arr = Object.values($._data($this[0], 'events') || {});\n\n      for (var _i = 0; _i < _arr.length; _i++) {\n        var events = _arr[_i];\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var event = _step.value;\n            var name = event.namespace ? \"\".concat(event.type, \".\").concat(event.namespace) : event.type;\n            $el.bind(name, event.data, event.handler);\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      }\n\n      $this.wrapInner($el);\n      $this.contents().unwrap();\n      return $el[0];\n    });\n  };\n})(jq);\n\n//# sourceURL=webpack:///./src/jQuery.js?");

/***/ }),

/***/ "./src/util/supports.js":
/*!******************************!*\
  !*** ./src/util/supports.js ***!
  \******************************/
/*! exports provided: supportsNegativeLookbehind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"supportsNegativeLookbehind\", function() { return supportsNegativeLookbehind; });\nvar supportsNegativeLookbehind = function () {\n  try {\n    new RegExp('(?<!.).');\n    return true;\n  } catch (_unused) {\n    return false;\n  }\n}();\n\n//# sourceURL=webpack:///./src/util/supports.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if(typeof jQuery === 'undefined') {var e = new Error(\"Cannot find module 'jQuery'\"); e.code = 'MODULE_NOT_FOUND'; throw e;}\nmodule.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });