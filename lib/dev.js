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

/***/ "./src/Array.ts":
/*!**********************!*\
  !*** ./src/Array.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __values = (this && this.__values) || function (o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n};\r\nvar __read = (this && this.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nvar __spread = (this && this.__spread) || function () {\r\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Returns the single element in the array.\r\n *\r\n * @throws {Error} Array does not have a single element.\r\n */\r\nArray.prototype.single = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (array.length > 1) {\r\n        throw new Error(\"Array has more than one element. (\" + this.length + \")\");\r\n    }\r\n    else if (array.length === 0) {\r\n        throw new Error(\"Array is empty\");\r\n    }\r\n    return array[0];\r\n};\r\n/**\r\n * Returns the single element in the array.  If the array is empty, returns `null`.\r\n *\r\n * @throws {Error} Array has more than one element.\r\n */\r\nArray.prototype.singleOrNull = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (array.length > 1) {\r\n        throw new Error(\"Array has more than one element. (\" + this.length + \")\");\r\n    }\r\n    else if (array.length === 0) {\r\n        return null;\r\n    }\r\n    return array[0];\r\n};\r\nArray.prototype.firstOrNull = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (!array.length) {\r\n        return null;\r\n    }\r\n    return array[0];\r\n};\r\nArray.prototype.first = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (!array.length) {\r\n        if (predicate) {\r\n            throw new Error('No elements matched the given predicate.');\r\n        }\r\n        throw new Error('Array is empty');\r\n    }\r\n    return array[0];\r\n};\r\nArray.prototype.lastOrNull = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (!array.length) {\r\n        return null;\r\n    }\r\n    return array[array.length - 1];\r\n};\r\nArray.prototype.last = function (predicate) {\r\n    var array = this;\r\n    if (predicate) {\r\n        array = array.filter(predicate);\r\n    }\r\n    if (!array.length) {\r\n        if (predicate) {\r\n            throw new Error('No elements matched the given predicate.');\r\n        }\r\n        throw new Error('Array is empty');\r\n    }\r\n    return array[array.length - 1];\r\n};\r\nArray.prototype.skip = function (count) {\r\n    var i;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                i = count;\r\n                _a.label = 1;\r\n            case 1:\r\n                if (!(i < this.length)) return [3 /*break*/, 4];\r\n                return [4 /*yield*/, this[i]];\r\n            case 2:\r\n                _a.sent();\r\n                _a.label = 3;\r\n            case 3:\r\n                ++i;\r\n                return [3 /*break*/, 1];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n};\r\nvar oldFilter = Array.prototype.filter;\r\nArray.prototype.filter = function (callbackfn, thisArg) {\r\n    if (callbackfn === void 0) { callbackfn = function (val) { return !!val; }; }\r\n    return oldFilter.call(this, callbackfn.bind(thisArg));\r\n};\r\nArray.prototype.allAsync = function () {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var e_1, _a, _b, _c, i, e_1_1;\r\n        return __generator(this, function (_d) {\r\n            switch (_d.label) {\r\n                case 0:\r\n                    _d.trys.push([0, 7, 8, 9]);\r\n                    _b = __values(this), _c = _b.next();\r\n                    _d.label = 1;\r\n                case 1:\r\n                    if (!!_c.done) return [3 /*break*/, 6];\r\n                    i = _c.value;\r\n                    if (!(i instanceof Function)) return [3 /*break*/, 3];\r\n                    return [4 /*yield*/, i()];\r\n                case 2:\r\n                    i = _d.sent();\r\n                    _d.label = 3;\r\n                case 3: return [4 /*yield*/, i];\r\n                case 4:\r\n                    if (!(_d.sent())) {\r\n                        return [2 /*return*/, false];\r\n                    }\r\n                    _d.label = 5;\r\n                case 5:\r\n                    _c = _b.next();\r\n                    return [3 /*break*/, 1];\r\n                case 6: return [3 /*break*/, 9];\r\n                case 7:\r\n                    e_1_1 = _d.sent();\r\n                    e_1 = { error: e_1_1 };\r\n                    return [3 /*break*/, 9];\r\n                case 8:\r\n                    try {\r\n                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\r\n                    }\r\n                    finally { if (e_1) throw e_1.error; }\r\n                    return [7 /*endfinally*/];\r\n                case 9: return [2 /*return*/, true];\r\n            }\r\n        });\r\n    });\r\n};\r\n/**\r\n * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to\r\n * falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.\r\n *\r\n * @see `Array.prototype.asyncAll()`\r\n */\r\nArray.prototype.all = function () {\r\n    var e_2, _a;\r\n    try {\r\n        for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {\r\n            var _d = __read(_c.value, 2), idx = _d[0], i = _d[1];\r\n            if (i instanceof Function) {\r\n                i = i();\r\n            }\r\n            if (i instanceof Promise) {\r\n                var arr = __spread(this);\r\n                arr.slice(idx);\r\n                return arr.allAsync();\r\n            }\r\n            if (!i) {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    catch (e_2_1) { e_2 = { error: e_2_1 }; }\r\n    finally {\r\n        try {\r\n            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\r\n        }\r\n        finally { if (e_2) throw e_2.error; }\r\n    }\r\n    return true;\r\n};\r\n/**\r\n * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves\r\n * to truthy.\r\n */\r\nArray.prototype.anyAsync = function () {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var e_3, _a, _b, _c, i, e_3_1;\r\n        return __generator(this, function (_d) {\r\n            switch (_d.label) {\r\n                case 0:\r\n                    _d.trys.push([0, 7, 8, 9]);\r\n                    _b = __values(this), _c = _b.next();\r\n                    _d.label = 1;\r\n                case 1:\r\n                    if (!!_c.done) return [3 /*break*/, 6];\r\n                    i = _c.value;\r\n                    if (!(i instanceof Function)) return [3 /*break*/, 3];\r\n                    return [4 /*yield*/, i()];\r\n                case 2:\r\n                    i = _d.sent();\r\n                    _d.label = 3;\r\n                case 3: return [4 /*yield*/, i];\r\n                case 4:\r\n                    if (_d.sent()) {\r\n                        return [2 /*return*/, true];\r\n                    }\r\n                    _d.label = 5;\r\n                case 5:\r\n                    _c = _b.next();\r\n                    return [3 /*break*/, 1];\r\n                case 6: return [3 /*break*/, 9];\r\n                case 7:\r\n                    e_3_1 = _d.sent();\r\n                    e_3 = { error: e_3_1 };\r\n                    return [3 /*break*/, 9];\r\n                case 8:\r\n                    try {\r\n                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\r\n                    }\r\n                    finally { if (e_3) throw e_3.error; }\r\n                    return [7 /*endfinally*/];\r\n                case 9: return [2 /*return*/, false];\r\n            }\r\n        });\r\n    });\r\n};\r\n/**\r\n * Returns `true` if any element in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to\r\n * truthy.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.\r\n *\r\n * @see `Array.prototype.asyncAny()`\r\n */\r\nArray.prototype.any = function () {\r\n    var e_4, _a;\r\n    try {\r\n        for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {\r\n            var _d = __read(_c.value, 2), i = _d[0], val = _d[1];\r\n            if (val instanceof Function) {\r\n                val = val();\r\n            }\r\n            if (val instanceof Promise) {\r\n                var arr = __spread(this);\r\n                arr.slice(i);\r\n                return arr.anyAsync();\r\n            }\r\n            if (val) {\r\n                return true;\r\n            }\r\n        }\r\n    }\r\n    catch (e_4_1) { e_4 = { error: e_4_1 }; }\r\n    finally {\r\n        try {\r\n            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\r\n        }\r\n        finally { if (e_4) throw e_4.error; }\r\n    }\r\n    return false;\r\n};\r\nArray.prototype.flat = function () {\r\n    return this.reduce(function (a, val) {\r\n        if (Array.isArray(val)) {\r\n            a.push.apply(a, __spread(val.flat()));\r\n        }\r\n        else {\r\n            a.push(val);\r\n        }\r\n        return a;\r\n    }, []);\r\n};\r\nArray.makeArray = function (val) {\r\n    if (!arguments.length) {\r\n        throw new Error(\"Missing argument 'val'\");\r\n    }\r\n    if (Array.isArray(val)) {\r\n        return val;\r\n    }\r\n    return [val];\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Array.ts?");

/***/ }),

/***/ "./src/Map.ts":
/*!********************!*\
  !*** ./src/Map.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __values = (this && this.__values) || function (o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n};\r\nvar __read = (this && this.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Returns an ordinary object using the Map's keys as the object's keys and its values as the object's values.\r\n *\r\n * @throws {Error} Since object keys are evaluated as strings (in particular, `{ [myObj]: value }` will have a key named\r\n *                 `[Object object]`), it's possible that two keys within the Map may evaluate to the same object key.\r\n *                 In this case, if the associated values are not the same, throws an Error.\r\n */\r\nMap.prototype.toObject = function () {\r\n    var e_1, _a;\r\n    var o = {};\r\n    try {\r\n        for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {\r\n            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];\r\n            if (o.hasOwnProperty(key) && o[key] !== value) {\r\n                throw new Error(\"Duplicate key \" + key + \" found in Map.  First value: \" + o[key] + \", next value: \" + value);\r\n            }\r\n            o[key] = value;\r\n        }\r\n    }\r\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\r\n    finally {\r\n        try {\r\n            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\r\n        }\r\n        finally { if (e_1) throw e_1.error; }\r\n    }\r\n    return o;\r\n};\r\n// TODO when TypeScript finally acacepts symbol as a valid key indexer.  Also, change \"strict\": true in tsconfig.json\r\n// Map.prototype.toObject = function<K, V>(this: Map<K, V>): object {\r\n//     let o: { \r\n//         [key: string]: V,\r\n//         [key: number]: V,\r\n//         [key: symbol]: V\r\n//     } = {};\r\n//     for (let [key, value] of this.entries()) {\r\n//         let keyStr: string | symbol | number = typeof key === 'symbol' || typeof key === 'number' ? key : key.toString();\r\n//         if (o.hasOwnProperty(keyStr) && o[keyStr] !== value) {\r\n//             throw new Error(`Duplicate key ${keyStr} found in Map.  First value: ${o[keyStr]}, next value: ${value}`);\r\n//         }\r\n//         o[keyStr] = value;\r\n//     }\r\n//     return o;\r\n// }\r\n/**\r\n * Defines the default JSON representation of a Map to be an array of key-value pairs.\r\n */\r\nMap.prototype.toJSON = function () {\r\n    return Array.from(this.entries());\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Map.ts?");

/***/ }),

/***/ "./src/Object.ts":
/*!***********************!*\
  !*** ./src/Object.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Calls a defined callback function on each entry of an object, and returns an array that contains the results.\r\n *\r\n * @param object The object whose entries on which to call callbackfn.\r\n * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one\r\n *                   time for each element in the array.\r\n * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,\r\n *                undefined is used as the this value.\r\n * @returns An array of each entry mapped to a valued via callbackfn.\r\n *\r\n * @see `Object.entries()`\r\n */\r\nObject.map = function (object, callbackfn, thisArg) {\r\n    return Object.entries(object).map(callbackfn, thisArg);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Object.ts?");

/***/ }),

/***/ "./src/Promise.ts":
/*!************************!*\
  !*** ./src/Promise.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the specified\r\n * period instead of resolving.\r\n *\r\n * @param time Amount of time in milliseconds to wait before resolving.  Defaults to 0.\r\n * @param throws If `true`, causes returned Promise to reject after the specified amount of time rather than\r\n *               resolving.\r\n */\r\nPromise.delay = function (time, throws) {\r\n    if (time === void 0) { time = 0; }\r\n    if (throws) {\r\n        return new Promise(function (_, rej) { return setTimeout(rej, time); });\r\n    }\r\n    return new Promise(function (res) { return setTimeout(res, time); });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/Promise.ts?");

/***/ }),

/***/ "./src/RegExp.ts":
/*!***********************!*\
  !*** ./src/RegExp.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar supports_1 = __webpack_require__(/*! ./util/supports */ \"./src/util/supports.ts\");\r\n/**\r\n * Escapes a string for use within a regular expression pattern.\r\n *\r\n * @example\r\n *\r\n * // properly escapes the '.' in `failstream.net`\r\n * new RegExp(`^${RegExp.escapeExpression('failstream.net')}`)\r\n *\r\n * @see Stolen from [How to escape regular expression special characters using javascript?]{@link https://stackoverflow.com/a/9310752/3120446}\r\n */\r\nRegExp.escapeExpression = function (text) {\r\n    return text.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');\r\n};\r\n/**\r\n * Creates a `RegExp` that matches strings that do not start with `expr`.\r\n *\r\n * @param expr The string or regular expression that should not be matched.\r\n * @param flags The flags to apply to the returned `RegExp`.  If not specified and `expr` is a `RegExp`, the returned\r\n *              `RegExp` will inherit `expr`'s flags.\r\n */\r\nRegExp.notStartsWith = function (expr, flags) {\r\n    if (expr instanceof RegExp) {\r\n        flags = arguments.length === 1 ? expr.flags : flags;\r\n        expr = expr.source;\r\n    }\r\n    else {\r\n        expr = RegExp.escapeExpression(expr);\r\n    }\r\n    return new RegExp(\"^(?!\" + expr + \").*$\", flags);\r\n};\r\n/**\r\n * Creates a `RegExp` that matches strings that do not contain `expr`.\r\n *\r\n * @param {string|RegExp} expr The string or regular expression that should not be matched.\r\n * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a\r\n *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.\r\n */\r\nRegExp.notContains = function (expr, flags) {\r\n    if (expr instanceof RegExp) {\r\n        flags = arguments.length === 1 ? expr.flags : flags;\r\n        expr = expr.source;\r\n    }\r\n    else {\r\n        expr = RegExp.escapeExpression(expr);\r\n    }\r\n    return new RegExp(\"^(?:(?!\" + expr + \").)*$\", flags);\r\n};\r\nvar repCasedChar = (function () {\r\n    if (supports_1.supportsNegativeLookbehind) {\r\n        return function (_, c) {\r\n            var cUp = c.toUpperCase(), cLow = c.toLowerCase();\r\n            if (cUp !== cLow) {\r\n                return \"[\" + cLow + cUp + \"]\";\r\n            }\r\n            return c;\r\n        };\r\n    }\r\n    return function (_, c) {\r\n        var cUp = c.toUpperCase(), cLow = c.toLowerCase();\r\n        if (cUp !== cLow) {\r\n            return (\"[\" + cLow + cUp + \"]\").reverse();\r\n        }\r\n        return c.reverse();\r\n    };\r\n})();\r\n/**\r\n * Returns a regular expression *string* mimicking case-insensitivity by replacing literal cased-characters with a\r\n * character class containing both cases.\r\n *\r\n * @example\r\n * RegExp.fakeCaseInsensitive('_Foo1\\nbar')\r\n * // returns '_[fF][oO][oO]1\\n[bB][aA][rR]'\r\n *\r\n * @warning\r\n * This method has particularly poor performance when used in an environment that does not support negative-lookbehind\r\n * regular expressions for long strings as it performs two string reversals in order to mimick the behavior.\r\n */\r\nRegExp.fakeCaseInsensitive = function (expr) {\r\n    if (expr instanceof RegExp) {\r\n        expr = expr.source;\r\n    }\r\n    if (supports_1.supportsNegativeLookbehind) {\r\n        return expr.replace(new RegExp('(?<!\\\\\\\\)((?:\\\\\\\\\\\\\\\\)*[^\\\\\\\\\\\\s])', 'g'), repCasedChar);\r\n    }\r\n    return expr\r\n        .reverse()\r\n        .replace(/([^\\\\]|(?:\\\\\\\\)*)(?!\\\\)/g, repCasedChar)\r\n        .reverse();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/RegExp.ts?");

/***/ }),

/***/ "./src/Set.ts":
/*!********************!*\
  !*** ./src/Set.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Set.prototype.toggle = function (item) {\r\n    if (this.has(item)) {\r\n        this.delete(item);\r\n        return false;\r\n    }\r\n    else {\r\n        this.add(item);\r\n        return true;\r\n    }\r\n};\r\nSet.prototype.toArray = function () {\r\n    return Array.from(this);\r\n};\r\nSet.prototype.toJSON = Set.prototype.toArray;\r\n\n\n//# sourceURL=webpack:///./src/Set.ts?");

/***/ }),

/***/ "./src/String.ts":
/*!***********************!*\
  !*** ./src/String.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Returns a new string with its characters in reverse order.\r\n *\r\n * @example\r\n * var foo = 'abcde';\r\n * console.log(foo.reverse()); // edcba\r\n */\r\nString.prototype.reverse = function () {\r\n    var s = '';\r\n    for (var i = this.length - 1; i >= 0; i--) {\r\n        s += this.charAt(i);\r\n    }\r\n    return s;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/String.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./Object */ \"./src/Object.ts\");\r\n__webpack_require__(/*! ./String */ \"./src/String.ts\");\r\n__webpack_require__(/*! ./Array */ \"./src/Array.ts\");\r\n__webpack_require__(/*! ./RegExp */ \"./src/RegExp.ts\");\r\n__webpack_require__(/*! ./Set */ \"./src/Set.ts\");\r\n__webpack_require__(/*! ./Map */ \"./src/Map.ts\");\r\n__webpack_require__(/*! ./Promise */ \"./src/Promise.ts\");\r\n__webpack_require__(/*! ./jQuery */ \"./src/jQuery.js\");\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/jQuery.js":
/*!***********************!*\
  !*** ./src/jQuery.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jq;\n\nif (typeof window !== 'undefined') {\n  if (window.jQuery) {\n    jq = jQuery;\n  }\n}\n\nif (!jq) {\n  try {\n    jq = __webpack_require__(/*! jquery */ \"jquery\");\n  } catch (_unused) {}\n}\n\n(function ($) {\n  if (!$) {\n    return;\n  }\n\n  $.fn.nodeName = function (newNodeName) {\n    if (!this.length) {\n      if (newNodeName !== undefined) {\n        return this;\n      }\n\n      return undefined;\n    }\n\n    if (newNodeName === undefined) {\n      return this[0].nodeName;\n    }\n\n    if (newNodeName instanceof Function) {\n      return this.map(function (index) {\n        return this.nodeName(newNodeName(index, this))[0];\n      });\n    }\n\n    return this.map(function () {\n      var $this = $(this),\n          $el = $(\"<\".concat(newNodeName, \">\")).data($this.data());\n      $.fn.click;\n      Array.from(this.attributes).forEach(function (a) {\n        if (!a.name.startsWith('data-')) {\n          $el.attr(a.name, a.value);\n        }\n      });\n\n      var _arr = Object.values($._data($this[0], 'events') || {});\n\n      for (var _i = 0; _i < _arr.length; _i++) {\n        var events = _arr[_i];\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var event = _step.value;\n            var name = event.namespace ? \"\".concat(event.type, \".\").concat(event.namespace) : event.type;\n            $el.bind(name, event.data, event.handler);\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      }\n\n      $this.wrapInner($el);\n      $this.contents().unwrap();\n      return $el[0];\n    });\n  };\n})(jq);\n\n//# sourceURL=webpack:///./src/jQuery.js?");

/***/ }),

/***/ "./src/util/supports.ts":
/*!******************************!*\
  !*** ./src/util/supports.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.supportsNegativeLookbehind = (function () {\r\n    try {\r\n        new RegExp('(?<!.).');\r\n        return true;\r\n    }\r\n    catch (_a) {\r\n        return false;\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/util/supports.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts?");

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