class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Person {
    constructor(name, animals = []) {
        this.name = name;
        this.animals = animals;
    }
}

class Country {
    constructor(name, people = []) {
        this.name = name;
        this.people = people;
    }
}

module.exports = { Person, Country, Animal };