// const pax = {
//     username: "SJ",
//     flight: 1234,
//     date: "26JUN"
// }

// const user = {
//     username: "Shobhit",
//     price: 99,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to Website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     const username = "SJ"
//     console.log(this)
// }

// chai()

// const code = () => {
//     const username = "SJ"
//     console.log(this)
// }

// code()

// ------------------------------------------------------------

//Arrow functions

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2 // Implicit Run

// const addTwo = (num1 , num2) => (num1 + num2) // Implicit Run

// const addTwo = (num1 , num2) => ({username: "SJ"}) // Implicit Run
// console.log(addTwo(3,4))

// ----------------------------------------------------------------------------

// Immediately Invoked functions IIFE

(function chai() {
    console.log("DB CONNECTED")
})();

( () => {
    console.log("DB CONNECTED TWO")
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("SJ")