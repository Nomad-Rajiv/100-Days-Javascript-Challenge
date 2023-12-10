// Program to Replace Characters of a String

var value = "This is Number and changed into number";
var reg = new RegExp('number','gi');
var newString = value.replace(reg, 'string');

console.log(newString);
