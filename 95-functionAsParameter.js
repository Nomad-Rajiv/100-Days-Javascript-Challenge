// JavaScript Program to Pass a Function as Parameter


// Function that takes another function as parameter

function performOperation(operation,a,b){
  return operation(a,b)
}

// Example function to pass as parameter

function add(x,y){
  return x + y;
}

function subtract(x,y){
  return x - y;
}
function multiply(x,y){
  return x * y
}

// Example Usage

const resultAddition = performOperation(add,5,6)
console.log("Result of Addition is :", resultAddition);


const resultSubtraction = performOperation(subtract,5,6)
console.log("Result of Subtraction is :", resultSubtraction);

const resultMultiplication = performOperation(multiply,5,6)
console.log("Result of multiply is :", resultMultiplication);