/**
 * Returns a new string with its characters in reverse order.
 * 
 * @example
 * var foo = 'abcde';
 * console.log(foo.reverse()); // edcba
 */
String.prototype.reverse = function() {
    let s = '';
    for (let i = this.length - 1; i >= 0; i--) {
        s += this.charAt(i);
    }

    return s;
}