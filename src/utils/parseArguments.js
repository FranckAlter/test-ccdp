const ScriptError = require('./exceptions/scriptError.js');

function parseArguments(args) {
    const parsedArgs = {};
    if (args.length <= 2) {
        throw new ScriptError('Missing argument. Use "--filter=chaine" or "--count".');
    }

    args.slice(2).forEach(argument => {
        if (argument.startsWith('--filter=')) {
            const filterValue = argument.split('=')[1];
            if (!filterValue) {
                throw new ScriptError('Missing string after --filter.');
            }
            parsedArgs.mode = 'filter';
            parsedArgs.string = filterValue;
        } else if (argument === '--count') {
            parsedArgs.mode = 'count';
        } else {
            throw new ScriptError(`Unknown argument: ${argument}. Use '--filter=string' or '--count'.`);
        }
    });

    return parsedArgs;
}




module.exports = {parseArguments};