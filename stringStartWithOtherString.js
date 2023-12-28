// JavaScript Program to Check if a String Starts With Another String

/*
Inbuilt Function to be used ....

string.startsWith() = It will check the first chafrecter of the string and return 
true or false.

string.endsWith() = it will check the last charecter of the string, and return true or false

*/ 

let string = "Philanthropist"

let testStart = string.startsWith('P');
let testEnd = string.endsWith('l');

console.log(`start : ${testStart} and End: ${testEnd}`);
