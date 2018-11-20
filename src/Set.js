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