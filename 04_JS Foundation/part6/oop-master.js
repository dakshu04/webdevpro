let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start : function () {
        return `${this.make} car got started in ${this.year}`
    }
}
// console.log(car.start());

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function() {
    return `Custom method ${this}`
}

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritence example`
    }
}
let myCar = new Car("Toyota", "Corola")
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation
class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount
        return this.#balance
    }
    getBalance() {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.balance); //cant access - undefined
// console.log(account.getBalance());


// Abstraction
class CoffeeMachine {
    start() {
        //call DB
        //filter value
        return `Starting the machine..`
    }
    brewCoffee() {
        //complex calculation
        return `Brewing Coffee`
    }

    pressStartButton() {
        let msgOne = this.start();
        let msgTwo = this.brewCoffee()
        return `${msgOne} + ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());



//Polymorphism
class Bird {
    fly() {
        return `flying..`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

//Static
class Calculator {
    static add(a, b) {
        return a+b
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); can't use it as static keyword is used

// console.log(Calculator.add(2, 3))

//Getters and Setters
class Employee{
    // #salary // a private field
    constructor(name, salary) {
        // if(salary < 0) {
        //     throw new Error("Salary can not be negative")
        // }
        this.name = name;
        this._salary = salary // _ is used signalling us that getters and setters are comming
    }
    get salary() {
        return `You are not allowed to see salary`
    }
    set salary(value) {
        if(value < 0) {
            console.error("Invalid Salary")
        } else {
            this._salary = value
        }
    }
}
let emp = new Employee("Alice", -50000);
console.log(emp.salary);

