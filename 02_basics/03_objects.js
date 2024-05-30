let mySym = Symbol("key1")

let jsUser = {
    name: "Shobhit",
    "fullName": "Shobhit Jain",
    age: 24,
    [mySym]: "myKey1",
    email: "sjnn123@google.com",
    location: "Meerut",
    greeting: function(){
        console.log("Hello JS user")
    },

    greetingTwo: function(){
        console.log(`Hey There ${this.fullName}`)
    }
}

// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser.fullName)
// console.log(jsUser.mySym)
// console.log(typeof jsUser[mySym])
// console.log(jsUser)

console.log(jsUser)
console.log(jsUser.greeting)
console.log(jsUser.greetingTwo)
console.log(jsUser.greetingTwo())
