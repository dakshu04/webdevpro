const person = {
    name: "Daksh",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet();

const greetFunction = person.greet;
greetFunction() //Hi, I am undefined - as **this** context will be lost when passing the func
//for this we have to bind it
const bindFunction = person.greet.bind({
    name: "John"
})
bindFunction()//Hi, I am John


//bind, call and apply - search