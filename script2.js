// Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `Person[Name=${this.getFullName()}, Age=${this.age}, Email=${this.email}]`;
    }
}

const person = new Person("Harish", "G", 24, "itsharishg@gmail.com");

console.log("Full Name:", person.getFullName());
console.log("Age:", person.getAge());
console.log("Email:", person.getEmail());
console.log(person.toString());
