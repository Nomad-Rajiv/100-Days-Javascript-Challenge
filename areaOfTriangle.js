// -------------- Area of Right Angle Triangle  

var side1 = 10;
var side2 = 20;

var area = (side1 * side2) / 2;

console.log("The Area of Triangle is ", area);

// Area of Triangle when all sides known

var a = 100;
var b = 50;
var c = 50;

var sum = (a + b + c) / 2;

var temp = sum* (sum - a) * (sum - b) * (sum - c);
var area = Math.sqrt(temp);
console.log(area);