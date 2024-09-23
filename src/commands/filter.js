const Person = require('../model/datamodel.js').Person;
const Country = require('../model/datamodel.js').Country;

function filterPersonBySearch(person, queryString) {
    const filteredAnimals = person.animals.filter(animal => animal.name.includes(queryString));
    return new Person(person.name, filteredAnimals);
}

function filterPeopleBySearch(people, queryString) {
    return people
        .map(person => filterPersonBySearch(person, queryString)) 
        .filter(person => person.animals.length > 0);
}

function filterCountriesBySearch(countries, queryString) {
    return countries
        .map(country => {
            const filteredPeople = filterPeopleBySearch(country.people, queryString);
            return new Country(country.name, filteredPeople);
        })
        .filter(country => country.people.length > 0);
}

module.exports = {filterPersonBySearch, filterPeopleBySearch, filterCountriesBySearch}


