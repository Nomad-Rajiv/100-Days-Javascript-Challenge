function lcmOfTwoNumber(num1, num2) {
  for (var i = 1; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i; // Return the LCM when found
    }
  }
}

var a = 40;
var b = 20;
var result = lcmOfTwoNumber(a, b);
console.log(`LCM of ${a} and ${b} is equal to ${result}`);
