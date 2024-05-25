//Dates
let myDate = new Date()

// console.log(typeof myDate)
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// let myCreatedDate = new Date(2023, 0, 21, 5, 6, 45)

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let newDate = new Date()

// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getMinutes())

console.log(newDate.toLocaleString("default", {
    weekday: "short",
    month: "2-digit"
}))
