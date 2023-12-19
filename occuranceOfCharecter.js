
// Check the Number of Occurrences of a Character in the String 

let passage = "Hello there";
let charecter = "l";

let strLen = passage.length;


let count = 0;
for(var i = 0; i < strLen; i++){
  if(passage[i] == charecter){
    count++;
  }
}
console.log(`${passage} => ${charecter} => ${count}`);