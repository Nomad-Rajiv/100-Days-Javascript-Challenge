// JavaScript Program to Remove All Whitespaces From a Text

let string = "           rajiv               "

let nospace = string.trim()  // using this trim() function we remove whitespace 
console.log(string);
console.log(nospace);


// we can do it in another format also

let charector  = "          Kumar"

let nospacecharector =  charector.replace(/\s/g, ''); // we can use this function alsoo

console.log(nospacecharector);