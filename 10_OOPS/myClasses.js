// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUser() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const newUser1 = new user("shobhit", "sj@gmail.com", "sjnn123");
// console.log(newUser1);
// console.log(newUser1.encryptPassword());
// console.log(newUser1.changeUser());

// Behinf the Scenes via functions

function newuser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

newuser.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

newuser.prototype.changeUser = function() {
    return `${this.username.toUpperCase()}`;
}

const newuser2 = new newuser("Raj", "raj@fb.com", "rjnn123")

console.log(newuser2);
console.log(newuser2.changeUser());
console.log(newuser2.encryptPassword());