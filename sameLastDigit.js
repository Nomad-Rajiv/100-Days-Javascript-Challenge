function haveSameLastDigit(num1, num2){
  var lastDigit1 = num1 % 10;
  var lastDigit2 = num2 % 10;
  if(lastDigit1 === lastDigit2){
    console.log("The number have the same last digit ");
  }
  else {
    console.log("The number have not same digit number");
  }
  return lastDigit1 === lastDigit2;
}
var number1 = 20;
var number2 = 8;
var result = haveSameLastDigit(number1, number2);
