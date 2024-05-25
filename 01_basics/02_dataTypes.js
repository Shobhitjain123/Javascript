let id = Symbol('123')

let anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)
// console.log(id == anotherId)
// console.log(id === anotherId)


// ---------------------Stacks and Heaps--------------------------


let email = "shobhit@google.com"
let emailTwo = email

// console.log(email)
// console.log(emailTwo)

// emailTwo = "shobhitdotcom"

// console.log(email)
// console.log(emailTwo)

let user = {
    email: "Sjnn124",
    id: "#123"
}

let user2 = user

console.log(user)
console.log(user2)

user2.email = "sjnn@123"

console.log(user)
console.log(user2)