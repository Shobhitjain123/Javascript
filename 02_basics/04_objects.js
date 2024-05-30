const medicosUser = {}

medicosUser.id = "123abc"
medicosUser.name = "Sammy"
medicosUser.age = 23

// console.log(medicosUser)
// console.log(Object.keys(medicosUser))
// console.log(Object.values(medicosUser))
// console.log(medicosUser.hasOwnProperty("age"))// hasOwnProperty method is used to check if the key property exists in the object
 
// --------------------------------------------------------------------

let regularUser = {
    email: "help@gmail.com",
    fullName: {
        userName: {
            firstName: "Shobhit",
            lastName: "Jain"
        },
        userCredentials: {
            userId: "sjnn123",
            password: "sjn@123"
        },
    },

    age: 23,

    hobbies: ["Cricket", "Singing", "Coding", "Book writing"]
}

// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userName)
// console.log(regularUser.fullName.userName.firstName)
// console.log(regularUser.fullName.userName.age)
// console.log(regularUser.fullName.userCredentials)
// console.log(regularUser.fullName.userCredentials.password)
// console.log(regularUser.fullName.userCredentials.firstName)

// ---------------------------------------------------------------------------------


let obj1 = {1: "a", 2: "b", 3: "c", 4: "d"}
let obj2 = {5: "q", 6: "e", 7: "t", 8: "y"}

// let obj3 = {obj1, obj2}
// let obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// -----------------------------------------------------------------------

// Object Destructuring

const course = {
    courseName: "Javascript",
    coursePrice: "100",
    courseLearner: "Shobhit"
}

// console.log(courseLearner)

const {courseLearner: learner} = course

// console.log(courseLearner)
console.log(learner)