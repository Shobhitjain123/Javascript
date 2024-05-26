let marvelHeroes = ["IronMan", "Spiderman", "Thor"]
let dcHeroes = ["Aquaman", "Flash", "Superman"]

//Using Push method to add dcHeroes elements into marvelHeroes
// marvelHeroes.push(dcHeroes) // Push method add takes second array as a whole element and add in the new element in the first array
// console.log(marvelHeroes) 

//Using Concat to add second array elements into first elements
// let allHeroes = marvelHeroes.concat(dcHeroes) // Concat methods concatenates the elements of second array into first array as individual elements, and returns new array without modifying existing arrays
// console.log(allHeroes)
// console.log(marvelHeroes)
// console.log(dcHeroes)

//Using spread operator to add elements of second array into first array
// let all_heroes = [...marvelHeroes, ...dcHeroes]
// console.log(all_heroes)


//Using Flat method to flatten all the sub-arrays present inside the array, and return new array with individual indexed elements
let newArr = [1,2,3,[4,5,6], 7, [6,7], 5, [6,5,8,[2,3,7,1,[4,5,2],6,7], 1,1,2], 7,0,0]
let flattenArray = newArr.flat(Infinity)// Flat method is used to concatenate all subarrays into discrete elements and returns a new array
// console.log(flattenArray)


//Using Array Class
// console.log(Array.isArray(flattenArray))
// console.log(Array.isArray("Shobhit"))
// console.log(Array.from("Shobhit"))
// console.log(Array.from({name: "Shobhit", age: 24}))
// console.log(Array.isArray({name: "Shobhit", age: 24}))

const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1, score2, score3, "Shobhit", [1,2,3], {age: 23}))

let arr = new Array(5,6)
// console.log(arr)

console.log(Array.isArray([]))