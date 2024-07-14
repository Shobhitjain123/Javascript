// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const user = {
    username: "Shobhit jain",
    password: "sjnn123",
    email: "sjnn@gmail.com",

    userOrder: function () {
        console.log("Error code")
    }
}

// console.log(Object.getOwnPropertyDescriptor(user, "username"));
// console.log(Object.getOwnPropertyDescriptor(user, "password"));
// console.log(Object.getOwnPropertyDescriptor(user, "email"));

Object.defineProperty(user, 'username', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "username"));

for (let [key, value] of Object.entries(user)) {

    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
   
}