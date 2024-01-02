// JavaScript Program to Check If a Variable is of Function Type


function isFunction(varibale) {
  return typeof varibale === 'function'
} 

// Example usage

const myFunction = function(){
  console.log('I am a fucntion');
}

const myVariable = 42;

console.log(`Is myFunction is a function? ${isFunction(myFunction)}`);

console.log(`Is myVariable is a fucnttion? ${isFunction(myVariable)}`);