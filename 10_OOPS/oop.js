const user1 = {
    username: "Shobhit",
    loggenIn:  true,
    loginCount: 7,

    getUserDetails: function(){
        console.log(this.username);
        console.log(user1.username);
        console.log(this);
    }
}

function userDetails(){
    console.log(this.username);
    console.log(user1.username);
    // console.log(this);
}

const user2 = {
    username: "Ritesh",
    loggenIn:  true,
    loginCount: 8,
    getUserDetails: userDetails
}

console.log(user2.getUserDetails());
console.log(user1.getUserDetails());

// ---------------------------------------Constructor Functions ----------------------------------------------

// function user(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     this.greeting = function() {
//         console.log(`welcome ${this.username}`);
//     }

//     return this
// }

// const userOne = new user("Shobhit", 7, true)
// const userTwo = new user("Ritesh", 8, false)
// console.log("This is user one", userOne);
// console.log("This is user two", userTwo); 