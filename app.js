const parseArguments = require('./src/utils/parseArguments.js').parseArguments;
const ScriptError = require('./src/utils/exceptions/scriptError.js');
const DataFormatError = require('./src/utils/exceptions/dataFormatError.js');
const verifyData = require('./src/model/validateModel.js').verifyData;
const data = require('./resources/data.js');
const Country = require('./src/model/datamodel.js').Country;
const filterCountriesBySearch = require('./src/commands/filter.js').filterCountriesBySearch;
const addCountToName = require('./src/commands/count.js').addCountToName;



try {
    const args = parseArguments(process.argv);
    verifyData(new Country(), data.data);
    if (args.mode === 'filter') {
        const filteredData = filterCountriesBySearch(data.data, args.string);
        console.log(JSON.stringify(filteredData, null, 2));
    } 
    else {
        data.data.forEach(country => addCountToName(country));
        console.log(JSON.stringify(data.data, null, 2));
    }
} catch (error) {
    if (error instanceof ScriptError) {
        console.error(`Error: ${error.message}`);
    }
    else if (error instanceof DataFormatError) {
        console.error(`Data format error: ${error.message}`);
    }
    else {
        console.error("Unexpected error", error);
    }
}
