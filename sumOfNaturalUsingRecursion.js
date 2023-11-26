function sumOfNaturalNumbers(n){
  if(n == 0){
    return 0
  }
  else{
    return n + sumOfNaturalNumbers(n - 1);
  }
} 
let n = 5;
const result = sumOfNaturalNumbers(n);
console.log(`The sum of first ${n} Natural number is: ${result}`);