// getters => access properties
// setters => change (mutate) them

// getters and setters secures better data quality

const person = {
    firstName = 'Thais',
    lastName = 'Costa',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person.fullName);