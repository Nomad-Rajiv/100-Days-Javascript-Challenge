// JavaScript Program to Replace all Instances of a Character in a String

/* 

Predefined function that we used is 

replace() := The replaced function finds, replaces and return a new string.
syntax = replace(find, replace)

*/

let string = "Mr. Red has red car and red bike"

let reg = RegExp('red', 'gi')

let result = string.replace(reg, 'blue');
console.log(result);

// here RegExp is used to remove case senstivity  