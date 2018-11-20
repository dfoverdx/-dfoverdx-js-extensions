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
}