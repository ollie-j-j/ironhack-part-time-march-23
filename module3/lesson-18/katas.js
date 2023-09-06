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

scramble('dow','wood') //true
// scramble('cedewaraaossoqqyt', 'codewars') // true
// scramble('katas', 'steak')// false

// Balancing Parantheses Solutions (https://www.codewars.com/kata/all-that-is-open-must-be-closed-dot-dot-dot)