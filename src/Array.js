/**
 * Returns the single element in the array.
 *
 * @throws {Error} Array does not have a single element.
 */
Array.prototype.single = function () {
    if (this.length > 1) {
        throw new Error(`Array has more than one element. (${this.length})`);
    } else if (this.length === 0) {
        throw new Error(`Array is empty`);
    }

    return this[0];
}

/**
 * Returns the single element in the array.  If the array is empty, returns `null`.
 *
 * @throws {Error} Array has more than one element.
 */
Array.prototype.singleOrNull = function () {
    if (this.length > 1) {
        throw new Error(`Array has more than one element. (${this.length})`);
    } else if (this.length === 0) {
        return null;
    }

    return this[0];
}

const oldFilter = Array.prototype.filter;

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
Array.prototype.filter = function (callbackfn = v => !!v, thisArg) {
    return oldFilter.call(this, callbackfn.bind(thisArg));
}

/**
 * Returns `true` if all values in the array resolves to truthy, else `false`.  Short-circuits if any value evaluates to
 * falsey.
 */
Array.prototype.asyncAll = async function () {
    for (let i of this) {
        if (i instanceof Function) {
            i = await i();
        }

        if (!(await i)) {
            return false;
        }
    }

    return true;
}

/**
 * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
 * falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
 *
 * @see `Array.prototype.asyncAll()`
 */
Array.prototype.all = function () {
    for (let [idx, i] of this.entries()) {
        if (i instanceof Function) {
            i = i();
        }

        if (i instanceof Promise) {
            let arr = [...this];
            arr.slice(idx);
            return arr.asyncAll();
        }

        if (!i) {
            return false;
        }
    }

    return true;
}

/**
 * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves
 * to truthy.
 */
Array.prototype.anyAsync = async function () {
    for (let i of this) {
        if (i instanceof Function) {
            i = await i();
        }

        if (await i) {
            return true;
        }
    }

    return false;
}

/**
 * Returns `true` if any element in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
 * truthy.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
 *
 * @see `Array.prototype.asyncAny()`
 */
Array.prototype.any = function () {
    for (let i of this) {
        if (i instanceof Function) {
            i = i();
        }

        if (i instanceof Promise) {
            let arr = [...this];
            arr.slice(idx);
            return arr.asyncAny();
        }

        if (i) {
            return true;
        }
    }

    return false;
}

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
    return this.reduce((a, val) => Array.isArray(val) ? a.concat(val.flat()) : a.concat(val), []);
}