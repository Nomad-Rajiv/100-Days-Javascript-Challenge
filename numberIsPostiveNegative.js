function checkNumber(value){
    if(value > 0){
        return `${value} is POSITIVE`;
    }
    else if(value < 0){
        return `${value} is NEGATIVE`;
    }
       else if(value === 0){
        return `${value} is ZERO`;
       }
       return `Entered a Number`;
}
 
var number = 10;
var result = checkNumber(number);
console.log(result);