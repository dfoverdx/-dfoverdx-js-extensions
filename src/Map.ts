export {} 
declare global {
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

/**
 * Returns an ordinary object using the Map's keys as the object's keys and its values as the object's values.
 *
 * @throws {Error} Since object keys are evaluated as strings (in particular, `{ [myObj]: value }` will have a key named
 *                 `[Object object]`), it's possible that two keys within the Map may evaluate to the same object key.
 *                 In this case, if the associated values are not the same, throws an Error.
 */
Map.prototype.toObject = function(): object {
    let o = {};
    for (let [key, value] of this.entries()) {
        if (o.hasOwnProperty(key) && o[key] !== value) {
            throw new Error(`Duplicate key ${key} found in Map.  First value: ${o[key]}, next value: ${value}`);
        }

        o[key] = value;
    }

    return o;
}

/**
 * Defines the default JSON representation of a Map to be an array of key-value pairs.
 */
Map.prototype.toJSON = function<K, V>(): [K, V][] {
    return Array.from(this.entries());
};