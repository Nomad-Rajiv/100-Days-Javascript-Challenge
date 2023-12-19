// Program to Count the Number of Vowels in a String\

/*  we use Regix in this program 

so regix is know as regural Expression 
It is used to match, test and find charecter from a string.
 To find vowels :
 Expression : [a e i o u]
 Modifiers : [gi]       */



 var string = "Rajiv kumar"

 var reg = /[aeiou]/gi

 var chars = string.match(reg);
 console.log(chars.join(","));
 console.log(chars.length);