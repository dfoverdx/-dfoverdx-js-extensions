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

Set.prototype.toggle = function(item): boolean {
    if (this.has(item)) {
        this.delete(item);
        return false;
    } else {
        this.add(item);
        return true;
    }
}

Set.prototype.toArray = function<T>(): T[] {
    return Array.from(this);
}

Set.prototype.toJSON = Set.prototype.toArray;