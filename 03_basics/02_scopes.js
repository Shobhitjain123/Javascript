// let a = 100

// if(true){
//     let a = 10
//     const b = 20
//     console.log(a)
// }

// console.log("Value of Global scope a: ", a)

// ----------------------------------------------------------------------------

// Testing Nested Scoped in functions

// function one(){
//     const username = "Shobhit"

//     function two() {
//         const website = "youtube"

//         console.log(username)
//     }
//     // console.log(website)

//     two()
// }

// one()

// ----------------------------------------------------------


console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addtwo(9))

const addtwo = function(num){
    return num + 2
}

