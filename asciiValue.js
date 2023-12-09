function findASCIIvalue(character){
  var asciiValue = character.charCodeAt(0);
  return asciiValue;
}
var character = 'C';
var asciiValue = findASCIIvalue(character);
console.log('ASCII value of ' + character + " : " +  asciiValue);