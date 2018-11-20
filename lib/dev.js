'use strict';

/**
 * Calls a defined callback function on each entry of an object, and returns an array that contains the results.
 * 
 * @param {object} object The object whose entries on which to call callbackfn.
 * @param {(entry: [string|number|Symbol, any], index: number, array: [string|number|Symbol, any][]) => U} callbackfn 
 *      A function that accepts up to three arguments. The map method calls the callbackfn function one time for each
 *      element in the array. 
 * @param {any} [thisArg] An object to which the this keyword can refer in the callbackfn function. If thisArg is
 *      omitted, undefined is used as the this value.
 * @template U
 * @returns {U[]} An array of each entry mapped to a valued via callbackfn.
 * 
 * @see `Object.entries()`
 */
Object.map = function (object, callbackfn, thisArg) {
  return Object.entries(object).map(callbackfn, thisArg);
};

/**
 * Returns a new string with its characters in reverse order.
 * 
 * @example
 * var foo = 'abcde';
 * console.log(foo.reverse()); // edcba
 */
String.prototype.reverse = function () {
  var s = '';

  for (var i = this.length - 1; i >= 0; i--) {
    s += this.charAt(i);
  }

  return s;
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Returns the single element in the array.
 *
 * @throws {Error} Array does not have a single element.
 */
Array.prototype.single = function () {
  if (this.length > 1) {
    throw new Error("Array has more than one element. (".concat(this.length, ")"));
  } else if (this.length === 0) {
    throw new Error("Array is empty");
  }

  return this[0];
};
/**
 * Returns the single element in the array.  If the array is empty, returns `null`.
 *
 * @throws {Error} Array has more than one element.
 */


Array.prototype.singleOrNull = function () {
  if (this.length > 1) {
    throw new Error("Array has more than one element. (".concat(this.length, ")"));
  } else if (this.length === 0) {
    return null;
  }

  return this[0];
};

var oldFilter = Array.prototype.filter;
/**
 * Returns an array containing the elements of the specified original array that meet the condition specified in a
 * callback function. If no callback is specified, filters out falsey values.
 *
 * @template S
 * @param {(value: any, index: number, array: any[]) => value is S} callbackfn A function that accepts up to three
 *      arguments. The filter method calls the callbackfn function one time for each element in the array.
 * @param {any?} thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is
 *                       omitted, undefined is used as the this value.
 * @returns {S[]} The elements of an array that meet the condition specified in the callback function. If no callback is
 *                specified, filters out falsey values.
 */

Array.prototype.filter = function () {
  var callbackfn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (v) {
    return !!v;
  };
  var thisArg = arguments.length > 1 ? arguments[1] : undefined;
  return oldFilter.call(this, callbackfn.bind(thisArg));
};
/**
 * Returns `true` if all values in the array resolves to truthy, else `false`.  Short-circuits if any value evaluates to
 * falsey.
 */


Array.prototype.asyncAll =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = this[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          i = _step.value;

          if (!(i instanceof Function)) {
            _context.next = 11;
            break;
          }

          _context.next = 10;
          return i();

        case 10:
          i = _context.sent;

        case 11:
          _context.next = 13;
          return i;

        case 13:
          if (_context.sent) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", false);

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          return _context.abrupt("return", true);

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[3, 20, 24, 32], [25,, 27, 31]]);
}));
/**
 * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
 * falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
 *
 * @see `Array.prototype.asyncAll()`
 */

Array.prototype.all = function () {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = this.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _idx = _step2$value[0],
          i = _step2$value[1];

      if (i instanceof Function) {
        i = i();
      }

      if (i instanceof Promise) {
        var arr = _toConsumableArray(this);

        arr.slice(_idx);
        return arr.asyncAll();
      }

      if (!i) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
};
/**
 * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves
 * to truthy.
 */


Array.prototype.anyAsync =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context2.prev = 3;
          _iterator3 = this[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context2.next = 18;
            break;
          }

          i = _step3.value;

          if (!(i instanceof Function)) {
            _context2.next = 11;
            break;
          }

          _context2.next = 10;
          return i();

        case 10:
          i = _context2.sent;

        case 11:
          _context2.next = 13;
          return i;

        case 13:
          if (!_context2.sent) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", true);

        case 15:
          _iteratorNormalCompletion3 = true;
          _context2.next = 5;
          break;

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](3);
          _didIteratorError3 = true;
          _iteratorError3 = _context2.t0;

        case 24:
          _context2.prev = 24;
          _context2.prev = 25;

          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }

        case 27:
          _context2.prev = 27;

          if (!_didIteratorError3) {
            _context2.next = 30;
            break;
          }

          throw _iteratorError3;

        case 30:
          return _context2.finish(27);

        case 31:
          return _context2.finish(24);

        case 32:
          return _context2.abrupt("return", false);

        case 33:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this, [[3, 20, 24, 32], [25,, 27, 31]]);
}));
/**
 * Returns `true` if any element in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
 * truthy.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
 *
 * @see `Array.prototype.asyncAny()`
 */

Array.prototype.any = function () {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var i = _step4.value;

      if (i instanceof Function) {
        i = i();
      }

      if (i instanceof Promise) {
        var arr = _toConsumableArray(this);

        arr.slice(idx);
        return arr.asyncAny();
      }

      if (i) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return false;
};
/**
 * Flattens the array recursively.
 *
 * @template T
 * @typedef {Array<T>} ArrayOfArrays
 * @example
 * [1, [2, 3]].flat() // => [1, 2, 3]
 *
 * @example
 * [[1, [2, 3], [4, [5]]], 6].flat() // => [1, 2, 3, 4, 5, 6]
 */


Array.prototype.flat = function () {
  return this.reduce(function (a, val) {
    return Array.isArray(val) ? a.concat(val.flat()) : a.concat(val);
  }, []);
};

var supportsNegativeLookbehind = function () {
  try {
    return true;
  } catch (_unused) {
    return false;
  }
}();

/**
 * Escapes a string for use within a regular expression pattern.
 * 
 * @example
 * 
 * // properly escapes the '.' in `failstream.net`
 * new RegExp(`^${RegExp.escapeExpression('failstream.net')}`) 
 * 
 * @see Stolen from [How to escape regular expression special characters using javascript?]{@link https://stackoverflow.com/a/9310752/3120446}
 */

RegExp.escapeExpression = function (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
/**
 * Creates a `RegExp` that matches strings that do not start with `expr`.
 * 
 * @param {string|RegExp} expr The string or regular expression that should not be matched.
 * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a 
 *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.
 */


RegExp.notStartsWith = function (expr, flags) {
  if (expr.constructor === RegExp) {
    expr = expr.source;
    flags = arguments.length === 1 ? expr.flags : flags;
  } else {
    expr = RegExp.escapeExpression(expr);
  }

  return new RegExp("^(?!".concat(expr, ").*$"), flags);
};
/**
 * Creates a `RegExp` that matches strings that do not contain `expr`.
 * 
 * @param {string|RegExp} expr The string or regular expression that should not be matched.
 * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a 
 *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.
 */


RegExp.notContains = function (expr, flags) {
  if (expr.constructor === RegExp) {
    expr = expr.source;
    flags = arguments.length === 1 ? expr.flags : flags;
  } else {
    expr = RegExp.escapeExpression(expr);
  }

  return new RegExp("^(?:(?!".concat(expr, ").)*$"), flags);
};

var repCasedChar = function () {
  if (supportsNegativeLookbehind) {
    return function (_, c) {
      var cUp = c.toUpperCase(),
          cLow = c.toLowerCase();

      if (cUp !== cLow) {
        return "[".concat(cLow).concat(cUp, "]");
      }

      return c;
    };
  }

  return function (_, c) {
    var cUp = c.toUpperCase(),
        cLow = c.toLowerCase();

    if (cUp !== cLow) {
      return "[".concat(cLow).concat(cUp, "]").reverse();
    }

    return c.reverse();
  };
}();
/**
 * Returns a regular expression *string* mimicking case-insensitivity by replacing literal cased-characters with a
 * character class containing both cases.
 * 
 * @example
 * RegExp.fakeCaseInsensitive('_Foo1\nbar') 
 * // returns '_[fF][oO][oO]1\n[bB][aA][rR]'
 * 
 * @warning
 * This method has particularly poor performance when used in an environment that does not support negative-lookbehind
 * regular expressions for long strings as it performs two string reversals in order to mimick the behavior.
 */


RegExp.fakeCaseInsensitive = function (expr) {
  if (expr.constructor === RegExp) {
    expr = expr.source;
  }

  if (supportsNegativeLookbehind) {
    return expr.replace(/(?<!\\)((?:\\\\)*[^\\\s])/g, repCasedChar);
  }

  return expr.reverse().replace(/([^\\]|(?:\\\\)*)(?!\\)/g, repCasedChar).reverse();
};

Set.prototype.toggle = function toggle(item) {
  if (this.has(item)) {
    this.delete(item);
    return false;
  } else {
    this.add(item);
    return true;
  }
};

Set.prototype.toArray = function () {
  return Array.from(this);
};

Set.prototype.toJSON = Set.prototype.toArray;

/**
 * Returns an ordinary object using the Map's keys as the object's keys and its values as the object's values.
 *
 * @throws {Error} Since object keys are evaluated as strings (in particular, `{ [myObj]: value }` will have a key named
 *                 `[Object object]`), it's possible that two keys within the Map may evaluate to the same object key.
 *                 In this case, if the associated values are not the same, throws an Error.
 */
Map.prototype.toObject = function () {
  var o = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (o.hasOwnProperty(key) && o[key] !== value) {
        throw new Error("Duplicate key ".concat(key, " found in Map.  First value: ").concat(o[key], ", next value: ").concat(value));
      }

      o[key] = value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return o;
};
/**
 * Defines the default JSON representation of a Map to be an array of key-value pairs.
 */


Map.prototype.toJSON = function () {
  return Array.from(this.entries());
};

/**
 * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the specified
 * period instead of resolving.
 *
 * @param {number} time Amount of time in milliseconds to wait before resolving.  Defaults to 0.
 * @param {bool?} throws If `true`, causes returned Promise to reject after the specified amount of time rather than
 *                       resolving.
 */
Promise.delay = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var throws = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (throws) {
    return new Promise(function (_, rej) {
      return setTimeout(rej, time);
    });
  }

  return new Promise(function (res) {
    return setTimeout(res, time);
  });
};

var jq;

if (typeof window !== 'undefined') {
  if (window.jQuery) {
    jq = jQuery;
  }
}

if (!jq) {
  try {
    jq = require('jquery');
  } catch (_unused) {}
}

(function ($) {
  if (!$) {
    return;
  }

  $.fn.nodeName = function (newNodeName) {
    if (!this.length) {
      if (newNodeName !== undefined) {
        return this;
      }

      return undefined;
    }

    if (newNodeName === undefined) {
      return this[0].nodeName;
    }

    if (newNodeName instanceof Function) {
      return this.map(function (index) {
        return this.nodeName(newNodeName(index, this))[0];
      });
    }

    return this.map(function () {
      var $this = $(this),
          $el = $("<".concat(newNodeName, ">")).data($this.data());
      $.fn.click;
      Array.from(this.attributes).forEach(function (a) {
        if (!a.name.startsWith('data-')) {
          $el.attr(a.name, a.value);
        }
      });

      var _arr = Object.values($._data($this[0], 'events') || {});

      for (var _i = 0; _i < _arr.length; _i++) {
        var events = _arr[_i];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;
            var name = event.namespace ? "".concat(event.type, ".").concat(event.namespace) : event.type;
            $el.bind(name, event.data, event.handler);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      $this.wrapInner($el);
      $this.contents().unwrap();
      return $el[0];
    });
  };
})(jq);
