// Day 3

// Write a function that takes in a parameter "name", tells the user what name was entered and returns it.
// i.e: "John" ---> "Hi John"

function sayHi(name){
    return `Hi ${name}`;
}

console.log(sayHi("John"))
console.log(sayHi("Julie"))

// Write a function that takes in a parameter "input" and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"

// "John" ---> 3 // .length --> 4
// "Julie" --> 4 // .length --> 5
function lastCharacter(input){
    return input[input.length - 1]
}

console.log(lastCharacter("John"))
console.log(lastCharacter("Julie"))

// Write a function that takes in one parameter "length" and prints out that many stars
// i.e: 3 ---> ***
function numberOfStars(length){
    return "*".repeat(length);
}

console.log(numberOfStars(3)) // "***"
console.log(numberOfStars(5)) // "*****"

function printStars(word){
    return "*".repeat(word.length);
}

console.log('printStars', printStars("Johnny"))
// Write a function that takes in two parameters "length" and "height" and prints out a rectangle of stars
// i.e: 3,2 ---> ***
//               ***

// Write a function that takes in an array of integers and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2