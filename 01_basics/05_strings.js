// const gameName = "Shobhit-jain"

// console.log(typeof gameName)
// console.log(gameName[3])

const gamename = new String("Shobhit-Jain-SU-DOT-COM")

// console.log(typeof gamename)
// console.log(gamename)
// console.log(gamename.length)
// console.log(gamename.charAt(2))
// console.log(gamename.indexOf("S"))
// console.log(gamename.toUpperCase())

//SUBSTRING
let newString = gamename.substring(0,4)
// console.log(newString)
// console.log(gameName)


//SLICE
// let anotherString = gamename.slice(0,8)
// console.log(anotherString)
// anotherString = gamename.slice(-4)
// console.log(anotherString)

//REPLACE
// let url = "https://www.shobhit%20jain.com"
// console.log(url.replace("%20", "-"))

//SPLIT
const arr = gamename.split("-")
console.log(arr[3])
console.log(arr)
