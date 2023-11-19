// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to print prime numbers in an interval
function printPrimesInInterval(start, end) {
  console.log("Prime numbers in the interval [" + start + ", " + end + "]:");
  
  for (var i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// Example usage
var intervalStart = 10;   // Replace with the starting value of the interval
var intervalEnd = 20;     // Replace with the ending value of the interval

// Call the function to print prime numbers in the specified interval
printPrimesInInterval(intervalStart, intervalEnd);
