// Create an object "student" that represents you
// Give it for properties firstName, lastName, age, city, drinkCoffee, likeDogs, likeCats, favoriteFood, favoriteBook

// let name = 'Ana';
// console.log(`Hello there, ${name}!`);
// ==> Hello there, Ana!
 
// console.log(`${name} walks every day at least ${1 + 2} km.`);

// let emptyContainer = "";
// emptyContainer += "Hello there, student!";
// // += is equivalent to saying:
// // emptyContainer = emptyContainer + "Hello there, student!";
// console.log(emptyContainer);

// let test = "Hello"; // ['H', 'e','l','l','o']
// console.log(typeof test[0]);
// console.log(typeof test.charAt(0));

// let textExample = "And so he said \"We are all doomed!!\""
// console.log(textExample)

let likesCoffee = true;
let likesTea = false;
let likesCats = false;
let likesDogs = true;

let condition1 = likesCoffee && likesTea // true && false --> false
let condition2 = likesCats || likesDogs // false || true --> true
let condition3 = !likesTea // !false --> true
let condition4 = likesCoffee && likesDogs

// console.log(`condition1 ${condition1}`)
// console.log('condition2', condition2)
// console.log('condition3', condition3)
// console.log('condition4', condition4)

// const age = parseInt(prompt('Welcome to Ironhack cinema. How old are you?'));
 
// const age = 74

// if (age <= 16) {
//   console.log('You have a teenager discount.');
// } else if (age >= 65) {
//   console.log('You have a senior citizen discount :)');
// } else {
//   console.log("Sorry, you don't have any discount :(");
// }

// const name = 'Drogon';
// let house = '';
 
// if (name === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (name === 'Daenerys') {
//   house = 'Targaryen';
// } else if (name === 'Jon Snow' || name === 'Sansa' || name === 'Arya') {
//   house = 'Stark';
// } else if (name === 'Cersei' || name === 'Tyrion' || name === 'Ser Jaime') {
//   house = 'Lannister';
// } else {
//   house = 'Other';
// }

const name = 'Arya';
let house = '';
 
switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
    case 'Jon Snow':
    case 'Sansa':
    case 'Arya':
        house = 'Stark';
    break;
}
 
// console.log(`Your favorite character is from the house ${house}.`);

let student = {
  firstName: "João",
  lastName: "Elias",
  age: 23,
  city: "Lisbon",
  drinkCoffee: false,
  likeDogs: true,
  likeCats: true,
  favouriteFood: "Pizza",
  favouriteBook: "John and George: The Dog Who Changed My Life"
}

let student2 = {
  firstName: "Luis",
  lastName: "Ramirez",
  age: 39,
  city: "Hollywood",
  drinkCoffee: true,
  likeDogs: true,
  likeCats: true,
  favouriteFood: "sushi",
  favouriteBook: "Atomic Habits"
}

let student3 = {
  firstName: "Matt",
  lastName: "Krebs",
  age: 32,
  city: "Barcelona",
  drinkCoffee: true,
  likeDogs: true,
  likeCats: true,
  favouriteFood: "pizza",
  favouriteBook: "The 21 Balloons"}

  let student4 = {
    firstName: "Luke",
    lastName: "Chen",
    age: 37,
    city: "Den Haag",
    drinkCoffee: true,
    likeDogs: true,
    likeCats: true,
    favouriteFood: "noodles",
    favouriteBook: "Articulating Design Decision"
}

let student5 = {
  firstName: "Viviane",
  lastName: "Ferreira",
  age: 27,
  city: "Lisbon",
  drinkCoffee: true,
  likeDogs: true,
  likeCats: true,
  favouriteFood: "popcorn",
  favouriteBook: "Predictably Irrational"
}

let students = [student, student2, student3, student4, student5] // Array of objects

// for(let i = 0; i < students.length; i++){
//   console.log(`${students[i].firstName} ${students[i].lastName}`)
// }

function printFavouriteFood(){
  for(let i = 0; i < students.length; i++){
    console.log(`${students[i].lastName} ${students[i].firstName} favourite food is ${students[i].favouriteFood}`)
  }
}

// printFavouriteFood();

let i = 0;
 
// while (i <= 100) {
//   console.log(i);
//  i++; // this is the same as i = i + 1
// }

const someIterable = 'amsterdam'; //['a','m','s','t','e','r','d','a','m']
 
for(let student of students) {
  console.log(typeof student);
}

for(let whatever of someIterable){
  console.log(typeof whatever)
}
