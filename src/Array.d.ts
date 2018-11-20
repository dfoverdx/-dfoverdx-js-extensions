interface Array<T> {
    /**
     * Returns the single element in the array.
     *
     * @throws {Error} Array does not have a single element.
     */
    single(): T;

    /**
     * Returns the single element in the array.  If the array is empty, returns `null`.
     *
     * @throws {Error} Array has more than one element.
     */
    singleOrNull(): T|null;

    /**
     * Returns an array containing the elements of the specified original array that meet the condition specified in a
     * callback function. If no callback is specified, filters out falsey values.
     *
     * @override
     * @param {(value: any, index: number, array: any[]) => value is T} callbackfn A function that accepts up to three
     *      arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param {any?} thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is
     *                       omitted, undefined is used as the this value.
     * @returns {T[]} The elements of an array that meet the condition specified in the callback function. If no callback is
     *                specified, filters out falsey values.
     */
    filter(callbackfn = v => !!v, thisArg): Array[T];

    /**
     * Returns `true` if all values in the array resolves to truthy, else `false`.  Short-circuits if any value evaluates to
     * falsey.
     */
    async asyncAll(): boolean;

    /**
     * Returns `true` if all elements in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
     * falsey.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
     *
     * @see `Array.prototype.asyncAll()`
     */
    all(): boolean;

    /**
     * Returns `true` if any element in the array resolves to truthy, else `false`.  Short-circuits if any element resolves
     * to truthy.
     */    
    async asyncAny(): boolean;

    /**
     * Returns `true` if any element in the array evaluate to truthy, else `false`.  Short-circuits if any value evaluates to
     * truthy.  If any element evaluates to a `Promise`, returns a `Promise` with the resulting value.
     *
     * @see `Array.prototype.asyncAny()`
     */
    any(): boolean;

    /**
     * Flattens the array recursively.
     *
     * @example
     * [1, [2, 3]].flat() // => [1, 2, 3]
     *
     * @example
     * [[1, [2, 3], [4, [5]]], 6].flat() // => [1, 2, 3, 4, 5, 6]
     */
    flat(): any[];
}