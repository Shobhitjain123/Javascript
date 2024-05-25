// ++++++++++++++++++NUMBERS+++++++++++++++++++++++++++++++++++++++++
// Directly declaring number variable
const score = 400;
// console.log(score)
// console.log(score.toString().length)
// console.log(score.toFixed(3))

// Using Number creating new object
const balance = new Number(200)
// console.log(balance.toFixed(5)) //Number Method toFixed() is used

const otherNumber = 32.89763
// console.log(otherNumber.toPrecision(2)) //Number Method toPrecision() is used

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))
// console.log(hundreds.toLocaleString()) //Number Method toLocaleString() is used


// +++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(100))
// console.log(Math.min(3,2,5,6,8))
// console.log(Math.max(3,2,5,6,8))


// console.log(Math.random())
// console.log(Math.random()*10)
// console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20

console.log(Math.floor((Math.random() * 10) + min))




