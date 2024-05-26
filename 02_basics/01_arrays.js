const myArr = [1,2,3,4,5,6]

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

let slicedArr = myArr.slice(1,3)
console.log(slicedArr)
console.log(`Original array after slicing ${myArr}`)

let splicedArr = myArr.splice(1,3)
console.log(splicedArr)
console.log(`Originalarray after splicing ${myArr}`)