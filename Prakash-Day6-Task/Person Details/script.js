// Person class to hold all the details
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    displayDetails() {
        return `Name: ${this.name}<br>Age: ${this.age}<br>Email: ${this.email}`;
    }
}

function displayPersonDetails() {
    // Get person details from input fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Create a new Person instance
    const person = new Person(name, age, email);

    // Display the person details
    document.getElementById('result').innerHTML = person.displayDetails();
}
