class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createID() {
        return "123";
    }
}

const user1 = new User("Shobhit");

// console.log(user1.createID());

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

// console.log(iphone.createID())

console.log(User.createID())
console.log(Teacher.createID())