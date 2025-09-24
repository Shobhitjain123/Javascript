const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 is success")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 is success")
        reject("P2 is Fail")
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 is success")
        reject("P3 is Fail")
    }, 2000)
})

Promise.all([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch(error => {
    console.log(error);
})

Promise.allSettled([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch(error => {
    console.log(error);
})

Promise.race([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch(error => {
    console.log(error);
})

Promise.any([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch(error => {
    console.log(error);
})