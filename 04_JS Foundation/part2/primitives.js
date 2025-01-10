//Number

let balance = 120
let anotherBalance = new Number(120)

// console.log(balance)
// console.log(anotherBalance.valueOf())
console.log(typeof balance);
console.log(typeof anotherBalance)


//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null or undefined

let firstname;
console.log(firstname) //undefined - data ka type nahi pata h

let secondname = null;
console.log(secondname) // null

//String
let myString = "hellow"
let myStringOne = 'Hola'
let username = 'hitesh'


let oldGreet = myString + ' ' + 'Hitesh'
console.log(oldGreet)

let greetMessage = `${myString} Hitesh` 
console.log(greetMessage)