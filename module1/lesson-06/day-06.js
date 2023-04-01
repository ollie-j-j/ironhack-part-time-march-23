// Recap

// What is an algorithm?
// A set of ordered instructions to reach a particular goal

// i.e: How do we make a cake?

// 1. Look up the recipe for that cake
// 2. Gather the ingredients and the tools to make that cake
// 3. Start cooking the cake

// Advanced Functions Recap
const accumulateFunction = (accumulator, currentVal) => accumulator + currentVal;
// Function declaration style
function generateSum(values){ // const generateSum = (a,b) => a+b
    return values.reduce(accumulateFunction)
}


// Function expression style
const generateProduct = function(a, b) {
    return a*b;
}

// Arrow function syntax 
const generateHello = () => console.log('Hello');

const sayHello = personName => console.log(`Hello ${personName}`)

const generateDivision = (a, b) => a/b;

const generateSumAndProduct = (a,b,c) => {
    const sum = a+b;
    return sum * c;
}

function main(a,b){
    function secondary(word){
        return word
    }
    const generateWord = secondary('test');
    return generateWord+a+b;
}

//Array map examples
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

// Create a new array with the cities first letter capitalized, use .map()
// 'miami' --> 'Miami'

// ES5 syntax
// const capitalizedCities = cities.map(function(city){
//     return city[0].toUpperCase() + city.slice(1);
// })

//ES6 syntax
// how can i capitalize a city made of more than one word?
const capitalizedCities = cities.map(city => {
    if(city === 'sao paulo'){
        return 'Sao Paulo'
    }
    else if(city === 'mexico city'){
        return 'Mexico City'
    }
    else{
        return city[0].toUpperCase() + city.slice(1)
    }
})

console.log('capitalizedCities', capitalizedCities);

const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];
// Find all places which are less than 150 
const cheaperPlacesCondition = place => place.price < 150 

const cheaperPlaces = places.filter(cheaperPlacesCondition)
// Find all places between 150 and 400
const affordablePlaces = places.filter(place => place.price >= 150 && place.price < 400)
// Find all places with a garage, a pool and cost less than 500 euros
const placesWithGarageAndPool = places.filter(place => place.pool && place.garage && place.price < 500 )
// Find all places with a swimming pool
const placesWithSwimmingPool = places.filter(place => place.pool)
console.log('cheaperPlaces', cheaperPlaces.length)
console.log('affordablePlaces', affordablePlaces.length)
console.log('placesWithGarageAndPool', placesWithGarageAndPool)
console.log('placesWithSwimmingPool', placesWithSwimmingPool.length)

// Goal: Determine what's the average price of an airbnb
// 1. Make the sum of all airbnb prices
// Solution 1
// const airbnbSum = places.reduce((accumulator, place) => { return accumulator + place.price}, 0)
// Solution 2
// const pricesArray = places.map(place => place.price); // [200,300]
// const airbnbSum = pricesArray.reduce((accumulator, price) => { return accumulator + price})
// Solution 3
const airbnbSum =  places
                        .map(place => place.price)
                        .reduce((accumulator, price) => { return accumulator + price})
console.log('airbnbSum', airbnbSum);
// 2. Divide that sum by the number of airbnb places
// 3. Display the returned value
console.log('avgPrice', `${airbnbSum/places.length} euros`)