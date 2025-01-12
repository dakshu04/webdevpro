let computer = { cpu: 12}
let lenovo = { 
    screen: "HD",
    __proto__: computer //computer obj ka saare properties lenovo me aajae
}
let tomHardware = {}

// console.log(`computer `, computer.__proto__) // to know prototype in any object use it in browser
// console.log(`lenovo `, lenovo.__proto__)

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
// console.log(`tesla `, genericCar);
console.log(`tesla `, Object.getPrototypeOf(tesla));
