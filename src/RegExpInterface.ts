export{} 

declare global {
    export interface RegExpConstructor {
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
        notStartsWith(expr: string|RegExp, flags?: string): RegExp;

        /**
         * Creates a `RegExp` that matches strings that do not contain `expr`.
         * 
         * @param expr The string or regular expression that should not be matched.
         * @param flags The flags to apply to the returned `RegExp`.  If not specified and `expr` is a `RegExp`, the
         *              returned `RegExp` will inherit `expr`'s flags. 
         */
        notContains(exp: string|RegExp, flags?: string): RegExp;

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
        fakeCaseInsensitive(expr: string|RegExp): string;
    }
}