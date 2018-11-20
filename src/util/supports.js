export const supportsNegativeLookbehind = (function () {
    try {
        new RegExp('(?<!.).');
        return true;
    } catch {
        return false;
    }
})();