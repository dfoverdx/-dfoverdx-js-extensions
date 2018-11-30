export {};
declare global {
    type JaggedArrayItem<T> = T | JaggedArray<T>;
    interface JaggedArray<T> extends Array<JaggedArrayItem<T>> {
    }
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
         * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Elements that are functions
         * are evaluated for truthiness.  Short-circuits if any value evaluates to falsey.  If any element evaluates to
         * a `Promise`, returns a `Promise` with the resulting value.
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
        flat(this: JaggedArray<T>): T[];
    }
    interface ArrayConstructor {
        /**
         * If `val` is already an array, returns `val`.  Else, wraps `val` in an array.
         */
        makeArray<T>(val: T | T[]): T[];
    }
}
