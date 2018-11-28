type mapCallbackFn<U> = (entry: [number|string|symbol, any], index: number, array: [number|string|symbol, any][]) => U;

export {}

declare global {
    interface ObjectConstructor {
        /**
         * Calls a defined callback function on each entry of an object, and returns an array that contains the results.
         *
         * @param object The object whose entries on which to call callbackfn.
         * @param callbackFn A function that accepts up to three arguments. The map method calls the callbackfn function
         *                   one time for each element in the array. 
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is
         *                omitted, undefined is used as the this value.
         *
         * @see `Object.entries()`
         */
        map<T extends object, U>(object: T, callbackFn: mapCallbackFn<U>, thisArg?: any): U[];
    }
}

/**
 * Calls a defined callback function on each entry of an object, and returns an array that contains the results.
 *
 * @param object The object whose entries on which to call callbackfn.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one
 *                   time for each element in the array. 
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,
 *                undefined is used as the this value.
 * @returns An array of each entry mapped to a valued via callbackfn.
 *
 * @see `Object.entries()`
 */
Object.map = function<T extends object, U>(object: T, callbackfn: mapCallbackFn<U>, thisArg?: any): U[] {
    return Object.entries(object).map(callbackfn, thisArg);
}