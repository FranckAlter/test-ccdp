const {validateModel} = require('../src/model/validateModel.js');
const { Animal, Person, Country } = require('../src/model/datamodel.js');

describe('validateModel', () => {
    test('should return true for a valid Animal object', () => {
        const model = new Animal();
        const data = { name: 'Dog' };
        expect(validateModel(model, data)).toBe(true);
    });

    test('should return false for an invalid Animal object with missing name', () => {
        const model = new Animal();
        const data = { };
        expect(validateModel(model, data)).toBe(false);
    });

    test('should return true for a valid Person object', () => {
        const model = new Person();
        const data = {
            name: 'John',
            animals: [
                { name: 'Dog' },
                { name: 'Cat' }
            ]
        };
        expect(validateModel(model, data)).toBe(true);
    });

    test('should return false for a Person object with invalid animals array', () => {
        const model = new Person();
        const data = {
            name: 'John',
            animals: [
                { name: 123 }
            ]
        };
        expect(validateModel(model, data)).toBe(false);
    });

    test('should return true for a valid Country object', () => {
        const model = new Country();
        const data = {
            name: 'France',
            people: [
                {
                    name: 'Jean',
                    animals: [
                        { name: 'Dog' },
                        { name: 'Cat' }
                    ]
                },
                {
                    name: 'Marie',
                    animals: [
                        { name: 'Bird' }
                    ]
                }
            ]
        };
        expect(validateModel(model, data)).toBe(true);
    });

    test('should return false for a Country object with missing people array', () => {
        const model = new Country();
        const data = {
            name: 'France'
            
        };
        expect(validateModel(model, data)).toBe(false);
    });
    
    test('should return false for a Country object with invalid people array', () => {
        const model = new Country();
        const data = {
            name: 'France',
            people: [
                {
                    animals: [
                        { name: 'Dog' }
                    ]
                }
            ]
        };
        expect(validateModel(model, data)).toBe(false);
    });
});
