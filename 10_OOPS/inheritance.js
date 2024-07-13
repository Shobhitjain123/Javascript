class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New Course is added by ${this.username}`);
    }
}

const user1 = new Teacher("shobhit", "sj@gmail.com", "123");
const user2 = new User("Rahul");

// user1.addCourse();
// user1.logMe();

// user2.logMe();
// user2.addCourse();

console.log(user1 === user2);
console.log(user1 === Teacher);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);
console.log(user2 instanceof Teacher);