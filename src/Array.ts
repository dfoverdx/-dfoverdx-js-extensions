export {}
declare global {
    type JaggedArrayItem<T> = T | JaggedArray<T>;
    interface JaggedArray<T> extends Array<JaggedArrayItem<T>> { }

    interface Array<T> {
        /**
         * Returns the single element in the array.
         *
         * @throws {Error} Array does not have a single element.
         */
        single(predicate?: (item: T) => boolean): T;

        /**
         * Returns the single element in the array.  If the array is empty, returns `null`.
         *
         * @throws {Error} Array has more than one element.
         */
        singleOrNull(predicate?: (item: T) => boolean): T | null;

        first(predicate?: (item: T) => boolean): T;

        firstOrNull(predicate?: (item: T) => boolean): T | null;

        last(predicate?: (item: T) => boolean): T;

        lastOrNull(predicate?: (item: T) => boolean): T | null;

        /**
         * Returns an array containing the elements of the specified original array that meet the condition specified in a
         * callback function. If no callback is specified, filters out falsey values.
         *
         * @override
         * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function
         *                   one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,
         *                undefined is used as the this value.
         * @returns The elements of an array that meet the condition specified in the callback function. If no callback is
         *          specified, filters out falsey values.
         */
        filter(callbackfn?: (val: T, idx: number, array: T[]) => boolean, thisArg?: any): Array<T>;

        /**
         * Returns `true` if all values in the array resolve to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness.  Short-circuits if any value evaluates to falsey.
         */
        allAsync(): Promise<boolean>;

        /**
         * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness.  Short-circuits if any value evaluates to falsey.  If any element evaluates to a
         * `Promise`, returns a `Promise` with the resulting value.
         *
         * @see `Array.prototype.allAsync()`
         */
        all(): T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

        /**
         * Returns `true` if any element in the array resolves to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness. Short-circuits if any element resolves to truthy.
         */    
        anyAsync(): Promise<boolean>;

        /**
         * Returns `true` if any element in the array evaluate to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness.  Short-circuits if any value evaluates to truthy.  If any element evaluates to a
         * `Promise`, returns a `Promise` with the resulting value.
         *
         * @see `Array.prototype.anyAsync()`
         */
        any(): T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

        /**
         * Flattens the array recursively.  Removes empty elements.
         *
         * @example
         * [1, [2, 3]].flat() // => [1, 2, 3]
         *
         * @example
         * [[1, [2, 3], [4, [5]]], 6].flat() // => [1, 2, 3, 4, 5, 6]
         * 
         * @example
         * let arr = new Array(3);
         * arr[0] = 1;
         * arr[2] = underined;
         * 
         * arr.flat() // => [1, undefined]
         */
        flat(this: JaggedArray<T>): Array<T>;
    }

    interface ArrayConstructor {
        makeArray<T>(val: T | T[]): T[];
    }
}

/**
 * Returns the single element in the array.
 *
 * @throws {Error} Array does not have a single element.
 */
Array.prototype.single = function<T>(this: T[], predicate?: (item: T) => boolean) {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (array.length > 1) {
        throw new Error(`Array has more than one element. (${this.length})`);
    } else if (array.length === 0) {
        throw new Error(`Array is empty`);
    }

    return array[0];
}

/**
 * Returns the single element in the array.  If the array is empty, returns `null`.
 *
 * @throws {Error} Array has more than one element.
 */
Array.prototype.singleOrNull = function<T>(this: T[], predicate?: (item: T) => boolean): T|null {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (array.length > 1) {
        throw new Error(`Array has more than one element. (${this.length})`);
    } else if (array.length === 0) {
        return null;
    }

    return array[0];
}

Array.prototype.firstOrNull = function<T>(predicate?: (item: T) => boolean) {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (!array.length) {
        return null;
    }

    return array[0];
}

Array.prototype.first = function<T>(predicate?: (item: T) => boolean) {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (!array.length) {
        throw new Error('Array is empty');
    }

    return array[0];
}

Array.prototype.lastOrNull = function<T>(predicate?: (item: T) => boolean) {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (!array.length) {
        return null;
    }

    return array[array.length - 1];
}

Array.prototype.last = function<T>(predicate?: (item: T) => boolean) {
    let array = this;
    if (predicate) {
        array = array.filter(predicate);
    }

    if (!array.length) {
        throw new Error('Array is empty');
    }

    return array[array.length - 1];
}

const oldFilter = Array.prototype.filter;

type Falsey = undefined | null | false | 0 | '';
type Truthy<T> = T extends Falsey ? never : T;

/**
 * Returns an array containing the elements of the specified original array that meet the condition specified in a
 * callback function. If no callback is specified, filters out falsey values.
 *
 * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one
 *                   time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,
 *                undefined is used as the this value.
 * @returns The elements of an array that meet the condition specified in the callback function. If no callback is
 *          specified, filters out falsey values.
 */
Array.prototype.filter = function <T>(callbackfn: (val: T, idx: number, array: T[]) => boolean = val => !!val, thisArg?: any): T[] {
    return oldFilter.call(this, callbackfn.bind(thisArg));
}

/**
 * Returns `true` if all values in the array resolves to truthy, else `false`.  Short-circuits if any value evaluates to
 * falsey.
 */
Array.prototype.allAsync = async function() {
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
Array.prototype.all = function() {
    for (let [idx, i] of this.entries()) {
        if (i instanceof Function) {
            i = i();
        }

        if (i instanceof Promise) {
            let arr = [...this];
            arr.slice(idx);
            return arr.allAsync();
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
Array.prototype.anyAsync = async function() {
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
Array.prototype.any = function() {
    for (let [i, val] of this.entries()) {
        if (val instanceof Function) {
            val = val();
        }

        if (val instanceof Promise) {
            let arr = [...this];
            arr.slice(i);
            return arr.anyAsync();
        }

        if (val) {
            return true;
        }
    }

    return false;
}

Array.prototype.flat = function() {
    return this.reduce((a, val) => {
        if (Array.isArray(val)) {
            a.push(...val.flat());
        } else {
            a.push(val);
        }

        return a;
    }, []);
}

Array.makeArray = function<T>(val: T | T[]): T[] {
    if (!arguments.length) {
        throw new Error(`Missing argument 'val'`)
    }

    if (Array.isArray(val)) {
        return val;
    }

    return [val];
}