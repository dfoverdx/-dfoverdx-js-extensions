const actualValues = jest.requireActual('../supports.js'),
    mock = jest.genMockFromModule('../supports.js');

mock.__setSupportsNegativeLookbehind = function(doesSupport) {
    mock.supportsNegativeLookbehind = doesSupport;
}

mock.__reset = function () {
    mock.supportsNegativeLookbehind = actualValues.supportsNegativeLookbehind;
}

module.exports = mock;