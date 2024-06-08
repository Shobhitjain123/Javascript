// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2
//     return number1 + number2
// }

// const result = addTwoNumbers(3,7)
// console.log(result)

// -----------------------------------------------------------------------

// function loginUserMessage(username = "Some User") {
//     if(username) {
//         console.log(username)
//         return
//     }
        
//     return console.log("No Username")
// }

// loginUserMessage()

// ------------------------------------------------------------------------------

// Using Rest Operator

function calculateCartPrice(...num1) // ... is used as a Rest Operator here to bundle up multiple values into single variable to handle dynamic input
{
    return num1
}

console.log(calculateCartPrice(200, 300, 2000, 400, 10))






