let firstName = "Lloyd"; // String
let lastName = "Chambrier"; // String
const age = 33; // Number
let isMarried = true;
let likesCoffee = true; // Boolean
let likesDutchWeather = false; // Boolean
let favoriteBook = null; // Empty value
let favoriteHobby; // undefined

let teacher = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    isMarried: isMarried,
    likesCoffee: likesCoffee,
    likesDutchWeather: likesDutchWeather
}

favoriteBook = {
    name: 'The Art Of War',
    author: 'Sun Tzu',
    genre: ['Personal development', 'management', 'Strategy']
}

lastName = "R. Chambrier";
likesDutchWeather = true;

// console.log(firstName.length);
// console.log(hobbies.length);
// console.log(favoriteBook.name.replace('The Art', 'Art'))

if(teacher.isMarried === true){
    console.log("Congrats! Enjoy the honeymoon :)")
}
else {
    console.log("Enjoy that bachelor life buddy!")
}
//////////////////////////////////

if(firstName.length > 5){
    console.log('First name has more than 5 characters')
}
else if(firstName.length < 5){
    console.log('First name has less than 5 characters')
}
else {
    console.log('First name has 5 characters')
}
////////////////////////////////

for(let i = 0; i < 5; i++){
    console.log('iteration', i+1, 'times');
}

////////////////////////////////

let hobbies = ["meditation", "gym", "play guitar", "travel"];
// console.log(hobbies[0])
for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
}