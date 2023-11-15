function convert(c){
    var f = (c * 1.8) + 32 ;
    return f;

}
var value = 30;
var result = convert(value);
console.log(`${value} C is equal to ${result} F`);