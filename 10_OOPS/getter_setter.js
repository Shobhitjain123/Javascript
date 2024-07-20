class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}123`
    }

    set password(value) {
        this._password = value
    }
}
const newUser = new User("sj@gmail.com", "sjnn")
console.log(newUser.password);