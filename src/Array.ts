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

        /**
         * Returns the first element of the array or the first element that matches the given predicate.  Throws an
         * error if the array is empty or no elements match the predicate.
         * 
         * @param predicate A function by which to filter the array before returning the first element.
         */
        first(predicate?: (item: T) => boolean): T;

        /**
         * Returns the first element of the array or the first element that matches the given predicate.  Returns `null`
         * if the array is empty or no elements match the predicate.
         * 
         * @param predicate A function by which to filter the array before returning the first element.
         */
        firstOrNull(predicate?: (item: T) => boolean): T | null;

        /**
         * Returns the last element of the array or the last element that matches the given predicate.  Throws an error
         * if the array is empty or no elements match the predicate.
         * 
         * @param predicate A function by which to filter the array before returning the last element.
         */
        last(predicate?: (item: T) => boolean): T;

        /**
         * Returns the last element of the array or the last element that matches the given predicate.  Returns `null`
         * if the array is empty or no elements match the predicate.
         * 
         * @param predicate A function by which to filter the array before returning the last element.
         */
        lastOrNull(predicate?: (item: T) => boolean): T | null;

        /**
         * Returns an `Iterable` skipping the first `count` elements in the array.
         * 
         * @param count The number of elements to skip.
         */
        skip(count: number): Iterable<T>;

        /**
         * Returns an array containing the elements of the specified original array that meet the condition specified in
         * a callback function. If no callback is specified, filters out falsey values.
         *
         * @override
         * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn
         *                   function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is
         *                omitted, undefined is used as the this value.
         * @returns The elements of an array that meet the condition specified in the callback function. If no callback
         *          is specified, filters out falsey values.
         */
        filter(callbackfn?: (val: T, idx: number, array: T[]) => boolean, thisArg?: any): Array<T>;

        /**
         * Returns `true` if all values in the array resolve to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness.  Short-circuits if any value evaluates to falsey.
         */
        allAsync(): Promise<boolean>;

        /**
         * Returns `true` if all values in the array resolve to a value that fits the `predicate`, else `false`.
         * Elements that are functions are evaluated for before being applied to `predicate`.  Short-circuits if any
         * value's predicate evaluates to false.
         *
         * @param predicate A function that evaluates whether the an element matches the desired condition.
         */
        allAsync(predicate: (value: T) => boolean): Promise<boolean>;

        /**
         * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Elements that are functions
         * are evaluated for truthiness.  Short-circuits if any value evaluates to falsey.  If any element evaluates to
         * a `Promise`, returns a `Promise` with the resulting value.
         *
         * @see `Array.prototype.allAsync()`
         */
        all(): T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

        /**
         * Returns `true` if all elements in the array match `predicate`, else `false`.  Elements that are functions are
         * evaluated before being applied to `predicate`.  Short-circuits if any value's predicate is false.  If any
         * element evaluates to a `Promise`, returns a `Promise` with the resulting value.
         *
         * @see `Array.prototype.allAsync(predicate)`
         *
         * @param predicate A function that evaluates whether the an element matches the desired condition.
         */
        all(predicate: (value: T) => boolean): 
            T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

        /**
         * Returns `true` if any element in the array resolves to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness. Short-circuits if any element resolves to truthy.
         */
        anyAsync(): Promise<boolean>;

        /**
         * Returns `true` if any element in the array resolves to a value that matches `predicate`, else `false`.
         * Elements that are functions are evaluated before being applied to `predicate`. Short-circuits if any element
         * matches `predicate`.
         *
         * @param predicate A function that evaluates whether the an element matches the desired condition.
         */
        anyAsync(predicate: (value: T) => boolean): Promise<boolean>;

        /**
         * Returns `true` if any element in the array evaluate to truthy, else `false`.  Elements that are functions are
         * evaluated for truthiness.  Short-circuits if any value evaluates to truthy.  If any element evaluates to a
         * `Promise`, returns a `Promise` with the resulting value.
         *
         * @see `Array.prototype.anyAsync()`
         */
        any(): T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

        /**
         * Returns `true` if any element in the array evaluate to a value that matches `predicate`, else `false`.
         * Elements that are functions are evaluated before being applied to `predicate`.  Short-circuits if any value's
         * predicate evaluates to `true`.  If any element evaluates to a `Promise`, returns a `Promise` with the
         * resulting value.
         *
         * @see `Array.prototype.anyAsync()`
         *
         * @param predicate A function that evaluates whether the an element matches the desired condition.
         */
        any(predicate: (value: T) => boolean): 
            T extends (() => Promise<any>) | Promise<any> ? Promise<boolean> : boolean;

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
        flat(this: JaggedArray<T>): T[];
    }

    interface ArrayConstructor {
        /**
         * If `val` is already an array, returns `val`.  Else, wraps `val` in an array.
         */
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
        if (predicate) {
            throw new Error('No elements matched the given predicate.');
        }

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
        if (predicate) {
            throw new Error('No elements matched the given predicate.');
        }

        throw new Error('Array is empty');
    }

    return array[array.length - 1];
}

Array.prototype.skip = function*(count: number) {
    for (let i = count; i < this.length; ++i) {
        yield this[i];
    }
}

const oldFilter = Array.prototype.filter;

Array.prototype.filter = function<T>(callbackfn: (val: T, idx: number, array: T[]) => boolean = val => !!val, thisArg?: any): T[] {
    return oldFilter.call(this, callbackfn.bind(thisArg));
}

Array.prototype.allAsync = async function<T>(pred?: (val: T) => boolean) {
    for (let i of this) {
        if (i instanceof Function) {
            i = await i();
        }

        if (pred ? !pred(await i) : !(await i)) {
            return false;
        }
    }

    return true;
}

/**
 * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates
 * to falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
 *
 * @see `Array.prototype.asyncAll()`
 */
Array.prototype.all = function<T>(pred?: (val: T) => boolean) {
    for (let [idx, i] of this.entries()) {
        if (i instanceof Function) {
            i = i();
        }

        if (i instanceof Promise) {
            let arr = [...this];
            arr.slice(idx);
            return arr.allAsync(pred);
        }

        if (pred ? !pred(i) : !i) {
            return false;
        }
    }

    return true;
}

/**
 * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves
 * to truthy.
 */
Array.prototype.anyAsync = async function<T>(pred?: (val: T) => boolean) {
    for (let i of this) {
        if (i instanceof Function) {
            i = await i();
        }

        if (pred ? pred(await i) : await i) {
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
Array.prototype.any = function<T>(pred?: (val: T) => boolean) {
    for (let [i, val] of this.entries()) {
        if (val instanceof Function) {
            val = val();
        }

        if (val instanceof Promise) {
            let arr = [...this];
            arr.slice(i);
            return arr.anyAsync(pred);
        }

        if (pred ? pred(val) : val) {
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