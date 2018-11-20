import { supportsNegativeLookbehind } from './util/supports';

/**
 * Escapes a string for use within a regular expression pattern.
 * 
 * @example
 * 
 * // properly escapes the '.' in `failstream.net`
 * new RegExp(`^${RegExp.escapeExpression('failstream.net')}`) 
 * 
 * @see Stolen from [How to escape regular expression special characters using javascript?]{@link https://stackoverflow.com/a/9310752/3120446}
 */
RegExp.escapeExpression = function (text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Creates a `RegExp` that matches strings that do not start with `expr`.
 * 
 * @param {string|RegExp} expr The string or regular expression that should not be matched.
 * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a 
 *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.
 */
RegExp.notStartsWith = function(expr, flags) {
    if (expr.constructor === RegExp) {
        expr = expr.source;
        flags = arguments.length === 1 ? expr.flags : flags;
    } else {
        expr = RegExp.escapeExpression(expr);
    }

    return new RegExp(`^(?!${expr}).*$`, flags);
}

/**
 * Creates a `RegExp` that matches strings that do not contain `expr`.
 * 
 * @param {string|RegExp} expr The string or regular expression that should not be matched.
 * @param {string} [flags] The flags to apply to the returned `RegExp`.  If not specified and `expr` is a 
 *                         `RegExp`, the returned `RegExp` will inherit `expr`'s flags.
 */
RegExp.notContains = function(expr, flags) {
    if (expr.constructor === RegExp) {
        expr = expr.source;
        flags = arguments.length === 1 ? expr.flags : flags;
    } else {
        expr = RegExp.escapeExpression(expr);
    }

    return new RegExp(`^(?:(?!${expr}).)*$`, flags);
}

const repCasedChar = (function() {
    if (supportsNegativeLookbehind) {
        return function(_, c) {
            let cUp = c.toUpperCase(),
                cLow = c.toLowerCase();
            if (cUp !== cLow) {
                return `[${cLow}${cUp}]`;
            }
            
            return c;
        }
    }

    return function(_, c) {
        let cUp = c.toUpperCase(),
            cLow = c.toLowerCase();
        if (cUp !== cLow) {
            return `[${cLow}${cUp}]`.reverse();
        }
        
        return c.reverse();
    }
})();

/**
 * Returns a regular expression *string* mimicking case-insensitivity by replacing literal cased-characters with a
 * character class containing both cases.
 * 
 * @example
 * RegExp.fakeCaseInsensitive('_Foo1\nbar') 
 * // returns '_[fF][oO][oO]1\n[bB][aA][rR]'
 * 
 * @warning
 * This method has particularly poor performance when used in an environment that does not support negative-lookbehind
 * regular expressions for long strings as it performs two string reversals in order to mimick the behavior.
 */
RegExp.fakeCaseInsensitive = function(expr) {
    if (expr.constructor === RegExp) {
        expr = expr.source;
    }

    if (supportsNegativeLookbehind) {
        return expr.replace(/(?<!\\)((?:\\\\)*[^\\\s])/g, repCasedChar);
    }

    return expr
        .reverse()
        .replace(/([^\\]|(?:\\\\)*)(?!\\)/g, repCasedChar)
        .reverse();
}