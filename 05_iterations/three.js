// For Of Loop Iterates over the Object/Array and returns the Actual value in the Array/Map

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     if(greet == " ") continue;
//     if(greet == " ") break;
//     // console.log(greet);
// }
// ---------------------------------------------------------------------

// Maps
const map = new Map();
map.set("IND", "India");
map.set("IRE", "Ireland");
map.set("FR", "France");

console.log(map);

for (const [countrycode, countryName] of map) {
    console.log(countrycode + " :- " + countryName);
}

// -------------------------------------------------------------------

//Objects
// Cannot iterate Object with For Of Iterator
// const myObject = {
//     "name": "SJ",
//     "age": 23,
//     "gender": "Male"
// }

// for (const {key} of myObject) {
//     console.log(key)
// }