const { Person, Animal, Country } = require('../src/model/datamodel');
const { filterPersonBySearch, filterPeopleBySearch, filterCountriesBySearch } = require('../src/commands/filter');

describe('filterPersonBySearch', () => {

    test('should return a person with filtered animals based on search string', () => {
        const person = new Person('Jean Dupont', [
            new Animal('Rex'),
            new Animal('Mimi'),
            new Animal('Coco')
        ]);

        const search = 'i';
        const filteredPerson = filterPersonBySearch(person, search);

        expect(filteredPerson.animals).toEqual([
            { name: 'Mimi' }
        ]);
        expect(filteredPerson.name).toBe('Jean Dupont');
    });

    test('should return a person with no animals if none match the search string', () => {
        const person = new Person('Jean Dupont', [
            new Animal('Rex'),
            new Animal('Mimi')
        ]);

        const search = 'z';
        const filteredPerson = filterPersonBySearch(person, search);

        expect(filteredPerson.animals).toEqual([]);
        expect(filteredPerson.name).toBe('Jean Dupont');
    });

    test('should return a person with all animals if all match the search string', () => {
        const person = new Person('Jean Dupont', [
            new Animal('Rexo'),
            new Animal('Coco')
        ]);

        const search = 'o';
        const filteredPerson = filterPersonBySearch(person, search);

        expect(filteredPerson.animals).toEqual([
            { name: 'Rexo' },
            { name: 'Coco' }
        ]);
    });

});

describe('filterPeopleBySearch', () => {

    test('should return people with animals filtered based on search string', () => {
        const people = [
            new Person('Jean Dupont', [new Animal('Rex'), new Animal('Mimi')]),
            new Person('Sophie Martin', [new Animal('Coco'), new Animal('Bella')])
        ];

        const search = 'i';
        const filteredPeople = filterPeopleBySearch(people, search);

        expect(filteredPeople).toEqual([
            new Person('Jean Dupont', [new Animal('Mimi')])
        ]);
    });

    test('should return an empty list if no animals match the search string', () => {
        const people = [
            new Person('Jean Dupont', [new Animal('Rex')]),
            new Person('Sophie Martin', [new Animal('Coco')])
        ];

        const search = 'z';
        const filteredPeople = filterPeopleBySearch(people, search);

        expect(filteredPeople).toEqual([]);
    });

    test('should return all people if all their animals match the search string', () => {
        const people = [
            new Person('Jean Dupont', [new Animal('Rex'), new Animal('Mimi')]),
            new Person('Sophie Martin', [new Animal('Cece')])
        ];

        const search = 'e';
        const filteredPeople = filterPeopleBySearch(people, search);

        expect(filteredPeople).toEqual([
            new Person('Jean Dupont', [new Animal('Rex')]),
            new Person('Sophie Martin', [new Animal('Cece')])
        ]);
    });

});

describe('filterCountriesBySearch', () => {

    test('should return countries with people having animals filtered by search string', () => {
        const countries = [
            new Country('France', [
                new Person('Jean Dupont', [new Animal('Rex'), new Animal('Mimi')]),
                new Person('Sophie Martin', [new Animal('Coco')])
            ]),
            new Country('Italy', [
                new Person('Luca Rossi', [new Animal('Leo')]),
                new Person('Maria Bianchi', [new Animal('Bella'), new Animal('Zippy')])
            ])
        ];

        const search = 'i';
        const filteredCountries = filterCountriesBySearch(countries, search);

        expect(filteredCountries).toEqual([
            new Country('France', [
                new Person('Jean Dupont', [new Animal('Mimi')])
            ]),
            new Country('Italy', [
                new Person('Maria Bianchi', [new Animal('Zippy')])
            ])
        ]);
    });

    test('should return an empty list of countries if no animals match the search string', () => {
        const countries = [
            new Country('France', [
                new Person('Jean Dupont', [new Animal('Rex')]),
                new Person('Sophie Martin', [new Animal('Coco')])
            ]),
            new Country('Italy', [
                new Person('Luca Rossi', [new Animal('Leo')]),
                new Person('Maria Bianchi', [new Animal('Bella')])
            ])
        ];

        const search = 'z';
        const filteredCountries = filterCountriesBySearch(countries, search);

        expect(filteredCountries).toEqual([]);
    });

    test('should return all countries if all their people\'s animals match the search string', () => {
        const countries = [
            new Country('France', [
                new Person('Jean Dupont', [new Animal('Rex'), new Animal('Mimi')]),
                new Person('Sophie Martin', [new Animal('Coco')])
            ]),
            new Country('Italy', [
                new Person('Luca Rossi', [new Animal('Leo')]),
                new Person('Maria Bianchi', [new Animal('Bella'), new Animal('Zippy')])
            ])
        ];

        const search = 'e';
        const filteredCountries = filterCountriesBySearch(countries, search);

        expect(filteredCountries).toEqual([
            new Country('France', [
                new Person('Jean Dupont', [new Animal('Rex')])
            ]),
            new Country('Italy', [
                new Person('Luca Rossi', [new Animal('Leo')]),
                new Person('Maria Bianchi', [new Animal('Bella')])
            ])
        ]);
    });

});
