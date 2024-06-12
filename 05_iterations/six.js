// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNums.filter((item) => item > 4);
// console.log(newNum);

// const newNums = [];
// myNums.forEach((item) => {
//     if(item > 4) {
//         newNums.push(item);
//     }
// })
// console.log(newNums)

// -------------------------------------------------------------------

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const myNum = nums.map((num) => num + 10);
// console.log(myNum);

// const myNum = nums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .map((num) => num > 40);
// console.log(myNum);


// -----------------------------------------------------------------------

//reduce method

// const nums = [1, 2, 3];

// const myNums = nums.reduce((acc, currVal) => {
//     console.log(`acc:${acc}, currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myNums);

// -----------------------------------------------------------------------

const shoppingCart = [
    {
        courseName: "JS",
        price: 299
    },
    {
        courseName: "Java",
        price: 399
    },
    {
        courseName: "Python",
        price: 499
    },
    {
        courseName: "SQL",
        price: 599
    }
]

const totalPrice = shoppingCart.reduce((acc, items) => acc + items.price, 0);

console.log(totalPrice);