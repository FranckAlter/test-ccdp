const DataFormatError = require('../utils/exceptions/dataFormatError.js');
const {Animal, Person, Country} = require('../model/datamodel.js');

function validateModel(model, data) {
    if (model instanceof Animal) {
        return typeof data.name === 'string';
    }
    if (model instanceof Person) {
        if (typeof data.name !== 'string' || !Array.isArray(data.animals)) {
            return false;
        }
        return data.animals.every(animal => validateModel(new Animal(), animal));
    }
    if (model instanceof Country) {
        if (typeof data.name !== 'string' || !Array.isArray(data.people)) {
            return false;
        }
        return data.people.every(person => validateModel(new Person(), person));
    }
    return false;
}

function verifyData(model, data) {
    data.forEach(country => {
        if (!validateModel(model, country)) {
            throw new DataFormatError('Invalid data format');
        }
    });
}

module.exports = {verifyData, validateModel};