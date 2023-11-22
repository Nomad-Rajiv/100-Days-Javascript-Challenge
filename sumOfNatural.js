// Fucntion to find the sum of natural number

function sumOfNaturalNumber(limit){
  if( limit < 1){
    return "Invalid input. Please enter a positive integer. ";
  }
  var sum = 0;
  for ( let i = 0; i <= limit; i++ ){
    sum += i;
  }
  return sum;
}
var limit = 10
var result = sumOfNaturalNumber(limit);
console.log(`The sum of first ${limit} Natural number is: ${result}`);