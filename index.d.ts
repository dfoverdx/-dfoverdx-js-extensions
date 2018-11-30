declare module 'js-extensions/src/jQuery' {
	import jQuery from 'jquery';

	interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
	    /**
	     * If `newNodeName` is specified, changes the element type of every item in the list to `newNodeName`.
	     * Otherwise, returns the node name of the first element in the list.
	     * 
	     * @param newNodeName The new node name to change the elements to.
	     */
	    nodeName(newNodeName?: string): this;
	}
}
declare module 'js-extensions/src/Array' {
	export {}; global {
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

}
declare module 'js-extensions/src/Map' {
	export {}; global {
	    interface Map<K, V> {
	        /**
	         * Returns an ordinary object using the Map's keys as the object's keys and its values as the object's values.
	         *
	         * @throws {Error} Since object keys are evaluated as strings (in particular, `{ [myObj]: value }` will have a key named
	         *                 `[Object object]`), it's possible that two keys within the Map may evaluate to the same object key.
	         *                 In this case, if the associated values are not the same, throws an Error.
	         */
	        toObject(): object;
	        /**
	         * Defines the default JSON representation of a Map to be an array of key-value pairs.
	         */
	        toJSON(): [K, V][];
	    }
	}

}
declare module 'js-extensions/src/Object' {
	type mapCallbackFn<U> = (entry: [number | string | symbol, any], index: number, array: [number | string | symbol, any][]) => U;
	export {}; global {
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

}
declare module 'js-extensions/src/Promise' {
	export {}; global {
	    interface PromiseConstructor {
	        /**
	         * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the
	         * specified period instead of resolving.
	         *
	         * @param time Amount of time in milliseconds to wait before resolving.  Defaults to 0.
	         * @param throws If `true`, causes returned Promise to reject after the specified amount of time rather than
	         *               resolving.
	         */
	        delay(time?: number, throws?: boolean): Promise<void>;
	    }
	}

}
declare module 'js-extensions/src/RegExp' {
	export {};

}
declare module 'js-extensions/src/RegExpInterface' {
	export {}; global {
	    interface RegExpConstructor {
	        /**
	         * Escapes a string for use within a regular expression pattern.
	         *
	         * @param text The expression to be escaped.
	         *
	         * @example
	         *
	         * // properly escapes the '.' in `failstream.net`
	         * new RegExp(`^${RegExp.escapeExpression('failstream.net')}`)
	         *
	         * @see Stolen from [How to escape regular expression special characters using javascript?]{@link https://stackoverflow.com/a/9310752/3120446}
	         */
	        escapeExpression(text: string): string;
	        /**
	         * Creates a `RegExp` that matches strings that do not start with `expr`.
	         *
	         * @param expr The string or regular expression that should not be matched.
	         * @param flags The flags to apply to the returned `RegExp`.  If not specified and `expr` is a `RegExp`, the
	         *              returned `RegExp` will inherit `expr`'s flags.
	         */
	        notStartsWith(expr: string | RegExp, flags?: string): RegExp;
	        /**
	         * Creates a `RegExp` that matches strings that do not contain `expr`.
	         *
	         * @param expr The string or regular expression that should not be matched.
	         * @param flags The flags to apply to the returned `RegExp`.  If not specified and `expr` is a `RegExp`, the
	         *              returned `RegExp` will inherit `expr`'s flags.
	         */
	        notContains(exp: string | RegExp, flags?: string): RegExp;
	        /**
	         * Returns a regular expression *string* mimicking case-insensitivity by replacing literal cased-characters with a
	         * character class containing both cases.
	         *
	         * @param expr The string or regular expression to be case-insensitized.
	         *
	         * @example
	         * RegExp.fakeCaseInsensitive('_Foo1\nbar')
	         * // returns '_[fF][oO][oO]1\n[bB][aA][rR]'
	         *
	         * @warning
	         * This method has particularly poor performance when used in an environment that does not support negative-lookbehind
	         * regular expressions for long strings as it performs two string reversals in order to mimick the behavior.
	         */
	        fakeCaseInsensitive(expr: string | RegExp): string;
	    }
	}

}
interface Set<T> {
    /**
     * If the specified item is in the Set, removes it from the set, else adds it.  Returns `true` if the item was added,
     * else `false`.
     */
    toggle(item: T): boolean;
    /**
     * Returns an array consisting of the elements of the set.
     */
    toArray(): T[];
    /**
     * Defines the default JSON representation of a Set to be an array of the items within the set.
     */
    toJSON(): T[];
}
declare module 'js-extensions/src/String' {
	export {}; global {
	    interface String {
	        /**
	         * Returns a new string with its characters in reverse order.
	         *
	         * @example
	         * var foo = 'abcde';
	         * console.log(foo.reverse()); // edcba
	         */
	        reverse(): string;
	    }
	}

}
declare module 'js-extensions/src/index' {
	import 'js-extensions/src/Object';
	import 'js-extensions/src/String';
	import 'js-extensions/src/Array';
	import 'js-extensions/src/RegExp';
	import 'js-extensions/src/Set';
	import 'js-extensions/src/Map';
	import 'js-extensions/src/Promise';
	import 'js-extensions/src/jQuery';

}
declare module 'js-extensions/src/__tests__/RegExp' {
	import 'js-extensions/src/index';

}
