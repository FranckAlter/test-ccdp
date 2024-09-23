const parseArguments = require('../src/utils/parseArguments.js').parseArguments;
const ScriptError = require('../src/utils/exceptions/scriptError.js');

describe('parseArguments', () => {

    test('should throw error if no arguments are provided', () => {
        const args = ['node', 'app.js'];
        expect(() => parseArguments(args)).toThrow(ScriptError);
        expect(() => parseArguments(args)).toThrow('Missing argument. Use "--filter=chaine" or "--count".');
    });

    test('should return filter mode and string when --filter is provided', () => {
        const args = ['node', 'app.js', '--filter=test'];
        const result = parseArguments(args);
        expect(result).toEqual({ mode: 'filter', string: 'test' });
    });

    test('should throw error if --filter is provided without a value', () => {
        const args = ['node', 'app.js', '--filter='];
        expect(() => parseArguments(args)).toThrow(ScriptError);
        expect(() => parseArguments(args)).toThrow('Missing string after --filter.');
    });

    test('should return count mode when --count is provided', () => {
        const args = ['node', 'app.js', '--count'];
        const result = parseArguments(args);
        expect(result).toEqual({ mode: 'count' });
    });

    test('should throw error if an unknown argument is provided', () => {
        const args = ['node', 'app.js', '--unknown'];
        expect(() => parseArguments(args)).toThrow(ScriptError);
        expect(() => parseArguments(args)).toThrow('Unknown argument: --unknown. Use \'--filter=string\' or \'--count\'.');
    });

    test('should return filter mode with a string containing spaces', () => {
        const argsWithSpace = ['node', 'app.js', '--filter=test with spaces'];
        const result = parseArguments(argsWithSpace);
        expect(result).toEqual({ mode: 'filter', string: 'test with spaces' });
    });

});