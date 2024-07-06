// const promiseOne = new Promise((resolved, rejected) => {
//     setTimeout(()=>{
//         console.log('Async promise');
//         resolved();
//     }, 1000)
// })

// promiseOne.then(()=> {
//     console.log("Promised Resolved");
// })

// new Promise((resolved, resjected) => {
//     setTimeout(()=>{
//         console.log("Async promise 2")
//         resolved();
//     }, 2000)
// }).then(() => {
//     console.log("Promise 2 resolved");
// })

// const promiseThree = new Promise((resolved, reject) => {
//     setTimeout(() => {
//         resolved({username: "SJ", email: "sj@shobhit.com"})
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     const err = true;
//     if(!err){
//         resolve({username: 'SJ', email: "Shobhitjain@sj.com"})
//     }else{
//         reject("ERR: Something Went Wrong")
//     }
// })

// promiseFour.then((user) => {
//     console.log(user);
//     const {email} = user;
//     const {username} = user;
//     // console.log(email);
//     return [username, email];
// }).then((userDetails) => {
//     console.log(userDetails[0], userDetails[1]);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => console.log("Promise is either resolved or rejected"));

// const promiseFive = new Promise((resolve, reject) => {
//     const err = true;
//     if(!err){
//         resolve({username: 'Javascript', email: "123"})
//     }else{
//         reject("ERR: JS Went Wrong")
//     }
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response  = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})