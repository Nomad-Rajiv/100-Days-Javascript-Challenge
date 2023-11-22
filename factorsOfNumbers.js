function factorOfNumbers(num){
  for(var i = 0; i<= num; i++){
    if(num % i == 0){
      console.log(i);
    }
  }
  // return i;
}
var num = 10;
var result = factorOfNumbers(num);
