function decimalToBinary(decimal) {
  if ( decimal === 0 ){
    return "0";
  }
  else {
    let binary = "";
    while (decimal > 0){
      binary = (decimal % 2 ) + binary;
      decimal = Math.floor(decimal / 2 );
    }
    return binary;
  }

}

const decimalNumber = 20;
const resultBinary = decimalToBinary(decimalNumber);
console.log(resultBinary);