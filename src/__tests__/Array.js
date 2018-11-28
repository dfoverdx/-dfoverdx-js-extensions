import '../index';

describe('Array.prototype.flat', () => {
    it('returns a copy of the original array when the input array is already flat', () => {
        let array = [1, 2, 3],
            flat = array.flat();
        expect(flat).toEqual(array);
    });

    it('returns an empty array when the original is empty', () => {
        let array = [],
            flat = array.flat();
        expect(flat).toEqual(array);
    });

    it('removes empty elements from arrays', () => {
        let array = new Array(3);
        array[0] = 1;
        array[2] = 'foo';

        let flat = array.flat();
        expect(flat).toEqual([1, 'foo']);
    });

    it('flattens arrays', () => {
        let array = [[1, [2, 3], [4, [5]]], 6].flat();
        expect(array).toEqual([1, 2, 3, 4, 5, 6]); 
    });
});

describe('Array.prototype.single', () => {
    it('returns the element of a single element array', () => {
        let array = [1];
        expect(array.single()).toBe(1);
    });

    it('throws when the array is empty', () => {
        let array = [];
        expect(() => array.single()).toThrow();
    });

    it('throws when the array has more than one element', () => {
        let array = [1, 2];
        expect(() => array.single()).toThrow();
    });
});

describe('Array.prototype.singleOrNull', () => {
    it('returns the element of a single element array', () => {
        let array = [1];
        expect(array.singleOrNull()).toBe(1);
    });

    it('returns null when the array is empty', () => {
        let array = [];
        expect(array.singleOrNull()).toBeNull();
    });

    it('throws when the array has more than one element', () => {
        let array = [1, 2];
        expect(() => array.singleOrNull()).toThrow();
    });
});

describe('Array.makeArray', () => {
    it('returns the original value if already an array', () => {
        let array = [1, 2, 3];
        expect(Array.makeArray(array)).toBe(array);
    });

    it('wraps the original value if not an array', () => {
        let item = { a: 1 };
        expect(Array.makeArray(item)).toEqual([item]);
    });

    it('throws when no value is passed', () => {
        expect(() => Array.makeArray()).toThrow();
    })
});