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
