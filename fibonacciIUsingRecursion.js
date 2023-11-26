function fibonacci(n) {
  if( n <= 1){
    return n;
  }
  else {
    return fibonacci( n - 1 ) + fibonacci( n - 2 );
  }

}

function displayFibonaciSequence(count) {
  for ( let i = 0; i < count; i++){
    console.log(fibonacci(i));
  }
}
let count = 6;
console.log(`Fibonacci Sequence of ${count} numbers: `);
displayFibonaciSequence(count);
