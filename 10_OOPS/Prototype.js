// let firstName = "Shobhit        "
// let lastName = "Jain       "

// console.log(firstName.trueLength);
// console.log(lastName.trueLength);

const heroNames = ["Thor", "Spiderman"];

const heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpidermanPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.shobhit = function() {
    console.log("SJ is present is all objects");
}

Array.prototype.heyShobhit = function() {
    console.log("Shobhit says hello to all");
}

// heroPower.shobhit();
// heroNames.shobhit();

// heroNames.heyShobhit()
// heroPower.heyShobhit()


// ---------------------------------Inheritance-----------------------------------------

const User = {
    username: "SJ",
    email: "sj@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: "JS",
    fullTime: true,

    __proto__: teachingSupport
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable);
// console.log(Teacher.username);
// console.log(Teacher.email)
// console.log(User.makeVideo);

Object.setPrototypeOf(teachingSupport, Teacher);
// console.log(teachingSupport.makeVideo);
// console.log(Teacher.isAvailable);

let username = "ShobhitJain       "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length of the string is ${this.trim().length}`)
}

username.trueLength()