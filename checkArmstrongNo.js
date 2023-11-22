// Proggram to check number is Armstrong or not Armstrong

let num = 153;
let numString = num.toString();
let noOfDigit = numString.length;
let sum = 0;
let temp = num;
 while(temp > 0){
  let rem = temp % 10;
  sum = sum + rem ** noOfDigit;
  temp = parseInt(temp/10);
 }
 if(sum == num){
  console.log(`Given Value ${num} is Armstrong Number`);
 }
 else{
  console.log(`Given Value ${num} is not an Armstrong Number`);
 }