function Setusername (username) {
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    Setusername.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("SJ", "Sj@fb.com", "Sjn123")
console.log(user)