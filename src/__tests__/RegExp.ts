import '../index';

let supports = require('../util/supports');

jest.mock('../util/supports.js');

describe('RegExp.notStartsWith', () => {
    it('matches strings that do not start with the given expression', () => {
        let re = RegExp.notStartsWith('foo');
        expect(re.test('barfoo')).toBe(true);

        re = RegExp.notStartsWith(/foo/);
        expect(re.test('barfoo')).toBe(true);
    });

    it('does not match strings that begin with the given expression', () => {
        let re = RegExp.notStartsWith('foo');
        expect(re.test('foobar')).toBe(false);

        re = RegExp.notStartsWith(/foo/);
        expect(re.test('foobar')).toBe(false);
    });

    it('correctly handles escaped sequences', () => {
        let re = RegExp.notStartsWith('foo\nbar');
        expect(re.test('foo\nbar')).toBe(false);
        expect(re.test('foonbar')).toBe(true);

        re = RegExp.notStartsWith(/foo\nbar/);
        expect(re.test('foo\nbar')).toBe(false);
        expect(re.test('foonbar')).toBe(true);
    });

    it('correctly handles the flags argument', () => {
        let re = RegExp.notStartsWith('foo', '');
        expect(re.test('FOObar')).toBe(true);

        re = RegExp.notStartsWith('foo', 'i');
        expect(re.test('FOObar')).toBe(false);

        re = RegExp.notStartsWith(/foo/, 'i');
        expect(re.test('FOObar')).toBe(false);

        re = RegExp.notStartsWith(/foo/i, '');
        expect(re.test('FOObar')).toBe(true);

        re = RegExp.notStartsWith(/foo/i);
        expect(re.test('FOObar')).toBe(false);
    });

    it('correctly interprets strings as literal expressions', () => {
        let re = RegExp.notStartsWith('[fb]oo');
        expect(re.test('foobar')).toBe(true);
        expect(re.test('boobar')).toBe(true);
        expect(re.test('[fb]oo')).toBe(false);

        re = RegExp.notStartsWith('(foo|bar)');
        expect(re.test('foobar')).toBe(true);
        expect(re.test('barbar')).toBe(true);
        expect(re.test('(foo|bar)baz')).toBe(false);
    });

    it('correctly interprets RegExps as regex expressions', () => {
        let re = RegExp.notStartsWith(/[fb]\soo/);
        expect(re.test('f oobar')).toBe(false);
        expect(re.test('b oobar')).toBe(false);
        expect(re.test('[fb]\\soo')).toBe(true);

        re = RegExp.notStartsWith(/(foo|bar)\s/);
        expect(re.test('foo bar')).toBe(false);
        expect(re.test('bar\tbar')).toBe(false);
        expect(re.test('(foo|bar)\\sbaz')).toBe(true);
    });
});

describe('RegExp.notContains', () => {
    it('matches strings that do not contain the given expression', () => {
        let re = RegExp.notContains('foo');
        expect(re.test('bar')).toBe(true);

        re = RegExp.notContains(/foo/);
        expect(re.test('bar')).toBe(true);
    });

    it('does not match strings that contain the given expression', () => {
        let re = RegExp.notContains('foo');
        expect(re.test('foobar')).toBe(false);
        expect(re.test('barfoo')).toBe(false);
        expect(re.test('barfoobaz')).toBe(false);

        re = RegExp.notContains(/foo/);
        expect(re.test('foobar')).toBe(false);
        expect(re.test('barfoo')).toBe(false);
        expect(re.test('barfoobaz')).toBe(false);
    });

    it('correctly handles escaped sequences', () => {
        let re = RegExp.notContains('foo\nbar');
        expect(re.test('foo\nbar')).toBe(false);
        expect(re.test('foonbar')).toBe(true);

        re = RegExp.notContains(/foo\nbar/);
        expect(re.test('foo\nbar')).toBe(false);
        expect(re.test('foonbar')).toBe(true);
    });

    it('correctly handles the flags argument', () => {
        let re = RegExp.notContains('foo', '');
        expect(re.test('lolFOObar')).toBe(true);

        re = RegExp.notContains('foo', 'i');
        expect(re.test('lolFOObar')).toBe(false);

        re = RegExp.notContains(/foo/, 'i');
        expect(re.test('lolFOObar')).toBe(false);

        re = RegExp.notContains(/foo/i, '');
        expect(re.test('lolFOObar')).toBe(true);

        re = RegExp.notContains(/foo/i);
        expect(re.test('lolFOObar')).toBe(false);
    });

    it('correctly interprets strings as literal expressions', () => {
        let re = RegExp.notContains('[fb]oo');
        expect(re.test('lolfoobar')).toBe(true);
        expect(re.test('lolboobar')).toBe(true);
        expect(re.test('lol[fb]oo')).toBe(false);

        re = RegExp.notContains('(foo|bar)');
        expect(re.test('lolfoobar')).toBe(true);
        expect(re.test('lolbarbar')).toBe(true);
        expect(re.test('lol(foo|bar)baz')).toBe(false);
    });

    it('correctly interprets RegExps as regex expressions', () => {
        let re = RegExp.notContains(/[fb]\soo/);
        expect(re.test('lolf oobar')).toBe(false);
        expect(re.test('lolb oobar')).toBe(false);
        expect(re.test('lol[fb]\\soo')).toBe(true);

        re = RegExp.notContains(/(foo|bar)\s/);
        expect(re.test('lolfoo bar')).toBe(false);
        expect(re.test('lolbar\tbar')).toBe(false);
        expect(re.test('lol(foo|bar)\\sbaz')).toBe(true);
    });
});

describe('RegExp.fakeCaseInsensitive', () => {
    beforeEach(() => {
        supports.__reset();
        jest.resetModules();
        supports = require('../util/supports');
        require('../index');
    });

    afterAll(() => {
        jest.resetModules();
        require('../index');
    });

    function disableNegativeLookbehind() {
        jest.resetModules();
        supports = require('../util/supports');
        supports.__setSupportsNegativeLookbehind(false);
        require('../RegExp');
    }

    it('properly handles alphabetic strings', () => {
        let expr = RegExp.fakeCaseInsensitive('abc');
        expect(expr).toMatchInlineSnapshot(`"[aA][bB][cC]"`);

        expr = RegExp.fakeCaseInsensitive(/abc/);
        expect(expr).toMatchInlineSnapshot(`"[aA][bB][cC]"`);

        disableNegativeLookbehind();

        expr = RegExp.fakeCaseInsensitive('abc');
        expect(expr).toMatchInlineSnapshot(`"[aA][bB][cC]"`);

        expr = RegExp.fakeCaseInsensitive(/abc/);
        expect(expr).toMatchInlineSnapshot(`"[aA][bB][cC]"`);
    });

    it('properly handles non-alphabetic strings', () => {
        let expr = RegExp.fakeCaseInsensitive('-\n1\\\\\'\\s\\^'),
            re = new RegExp(expr);
        expect(re.source).toBe('-\n1\\\\\'\\s\\^');
        expect(re.test('-\n1\\\' ^')).toBe(true);

        expr = RegExp.fakeCaseInsensitive(/-\n1\\'\s\^/);
        re = new RegExp(expr);
        expect(re.source).toBe('-\\n1\\\\\'\\s\\^');
        expect(re.test('-\n1\\\' ^')).toBe(true);

        disableNegativeLookbehind();

        expr = RegExp.fakeCaseInsensitive('-\n1\\\\\'\\s\\^'),
        re = new RegExp(expr);
        expect(re.source).toBe('-\n1\\\\\'\\s\\^');
        expect(re.test('-\n1\\\' ^')).toBe(true);

        expr = RegExp.fakeCaseInsensitive(/-\n1\\'\s\^/);
        re = new RegExp(expr);
        expect(re.source).toBe('-\\n1\\\\\'\\s\\^');
        expect(re.test('-\n1\\\' ^')).toBe(true);
    });
});
