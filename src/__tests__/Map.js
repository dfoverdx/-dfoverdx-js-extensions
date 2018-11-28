import '../index';

describe('Map.prototype.toObject', () => {
    it('returns an empty object when the Map is empty', () => {
        let map = new Map();
        expect(map.toObject()).toEqual({});
    });

    it('returns an object with correlated keys and values', () => {
        let symbol = Symbol('mySymbol'),
            array = [1, 2, 3],
            map = new Map([
                ['a', 1],
                [2, 'b'],
                [symbol, array]
            ]);

        expect(map.toObject()).toEqual({
            a: 1,
            2: 'b',
            [symbol]: array
        });
    });

    it('returns throws an error when there are duplicate keys', () => {
        let map = new Map([
            [{ a: 1 }, 'foo'],
            [{ b: 2 }, 'bar']
        ]);
        expect(() => map.toObject()).toThrow();
    });
});

describe('Map.prototype.toJSON', () => {
    it('returns an array of key-value pairs', () => {
        let array = [
                [1, 'foo'],
                [2, 'bar']
            ],
            map = new Map(array);

        expect(map.toJSON()).toEqual(array);
    });
});