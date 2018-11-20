/**
 * The built in Set object.
 * @external "Set.prototype"
 */

/**
 * If the specified item is in the Set, removes it from the set, else adds it.  Returns `true` if the item was added,
 * else `false`.
 *
 * @function external:"Set.prototype".toggle
 */
Set.prototype.toggle = function toggle(item) {
    if (this.has(item)) {
        this.delete(item);
        return false;
    } else {
        this.add(item);
        return true;
    }
}

Set.prototype.toArray = function() {
    return Array.from(this);
}

Set.prototype.toJSON = Set.prototype.toArray;