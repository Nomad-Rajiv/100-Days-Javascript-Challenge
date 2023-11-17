function primeNum(num){
    if(num == 1){
        return `${value} is neither Prime nor composite number`
    }
    else if(num < 1){
        return `${value} is negaive number and it's nor a prime number`
    }
    else{
        for (var i = 2; i < num; i++){
            if(num % i == 0){
                return `${num} is not a PRIME Number`;
                break;
            }
            else{
                return `${num} is a Prime Number`;
            }
        }
    }
    return `Enter a correct number`;
}
var num = 10;
var result = primeNum(num);
console.log(result);