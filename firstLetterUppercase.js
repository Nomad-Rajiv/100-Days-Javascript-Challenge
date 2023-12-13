// Check the Number of Occurrences of a Character in the String


let string = "rajiv"; // initialise the string
let first = string.charAt(0);  // target first charecter of a string
// console.log(first.toUpperCase()); // for uppercase first letter of a string
let rem = string.slice(1);  // to remove remainig charectors of a sring
let final = first.toUpperCase() + rem; // concatinate the uppercase and remainig part 

console.log( `${string} capatalise is ${final}`) // finally print the final result


