// Write a program to find multiplication of number

function displayMultiplicationTable(number){
  console.log("Multiplication table for " + number);

  for (let i = 1; i <= 10; i++){
    var result = number*i;
    console.log(number + " * " + i + " = " + result);
  }
}
var inputNumber = 7;
displayMultiplicationTable(inputNumber);