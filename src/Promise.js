/**
 * Returns a promise that resolves after the specified amount of time.  If throws is true, rejects after the specified
 * period instead of resolving.
 *
 * @param {number} time Amount of time in milliseconds to wait before resolving.  Defaults to 0.
 * @param {bool?} throws If `true`, causes returned Promise to reject after the specified amount of time rather than
 *                       resolving.
 */
Promise.delay = function (time = 0, throws = false) {
    if (throws) {
        return new Promise((_, rej) => setTimeout(rej, time));
    }

    return new Promise(res => setTimeout(res, time));
}