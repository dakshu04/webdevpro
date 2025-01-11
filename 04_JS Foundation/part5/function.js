/*
    3.Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'/
    Store the result in a variable named 'totalCost'.
*/

// const calculateTotal = (price, quantity) => {
//     return price * quantity
// } OR

const calculateTotal = (price, quantity) => price * quantity //implicit return
let totalCost = calculateTotal(499 * 100)

/*
    4.Write a function named 'processTeaOrder' takes another function , 'makeTea' as a parameter and calls it with the argument 'early grey'
    Return the result of calling 'makeTea'.
*/
    function makeTea(typeOfTea) {
        return `maketea: ${typeOfTea}`
    }
    function processTeaOrder(teaFunction) {
        return teaFunction('early grey')
    }
    const order = processTeaOrder(makeTea)
    console.log(order)