// Scramblies Solutions (https://www.codewars.com/kata/scramblies/)

// SIMON SOLUTION
    function scramble(str1, str2) {
        const charCounter = {};
      
        for (const char of str1) {
          charCounter[char] = (charCounter[char] || 0) + 1;
        }
        
        for (const char of str2) {
          if (!charCounter[char]) {
            return console.log(false);
          } else {
            charCounter[char]--;
          }
        }
        console.log("charCounter", charCounter);
        return console.log(true);
      }
 
// MY SOLUTION


// function scramble(str1, str2) {
//     if(str1.length < str2.length){
//         return false
//     }
//     else{
//          // Check if all characters of str2 are in str1
//          const convertStr1 = str1.split("").sort();
//          const convertStr2 = str2.split("").sort();
//         //  console.log("convertStr1", convertStr1)
//         //  console.log("convertStr2", convertStr2)
         
//          const check = convertStr2.map(char => {
//             if(convertStr1.includes(char)){
//                 convertStr1.slice(convertStr1.indexOf(char), 1)
//                 return convertStr1.includes(char);
//             }
            
//          })
//          console.log(!check.includes(false))
//          return !check.includes(false);
//     }
// }

// scramble('dow','wood') //true
// scramble('cedewaraaossoqqyt', 'codewars') // true
// scramble('katas', 'steak')// false

// Pete the Baker (https://www.codewars.com/kata/pete-the-baker/train/javascript)

//RAPHAEL SOLUTION

function cakes(recipe, available) {
  let maxCakes = 0;

  for (const ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient) || available[ingredient] < recipe[ingredient]) {
      return 0;
    }

    const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
   maxCakes = maxCakes == 0 ? possibleCakes : Math.min(maxCakes, possibleCakes);
  }

  return maxCakes;
}

// MY OWN SOLUTION

function cakes(recipe, available) {
  // Check which keys are present in both recipe and available
      // Compare those
  // Conditionally increase the number of cake
  // Set a condition so that if one ingredient is less than the minimum required
  // amount for the recipe then return the current number of cakes
  // return the maximum number of cakes that can be baked
  let recipeKeys = Object.keys(recipe); // creating an array with all the keys/ingredients name
  let recipeValues = Object.values(recipe); // creating an array with all the values/ingredients name
  let maxCakesPerIngredients = [] // this is used so I can add later the max amount of cakes for each ingredients

  for(let i = 0; i < recipeKeys.length; i++) {
    // if(available[recipeKeys[i]]){ // check if the key exists in 
    //     maxCakesPerIngredients.push(Math.floor(available[recipeKeys[i]] / recipeValues[i]))
    // }
    // else {
    //     maxCakesPerIngredients.push(0);
    // }
    available[recipeKeys[i]] ? maxCakesPerIngredients.push(Math.floor(available[recipeKeys[i]] / recipeValues[i])) : maxCakesPerIngredients.push(0);
    
  }
  console.log( Math.min(...maxCakesPerIngredients))
  return Math.min(...maxCakesPerIngredients);
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});