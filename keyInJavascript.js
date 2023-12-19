// Program to Check if a Key Exists in an Object

// we can use key in for checking the variables

let car = {
  color : "White",
  body : "salon"
}

if("color" in car){
  console.log(car.color);  // this is used for checking weather a key is available or not in an object
}

if("speed" in car){
  console.log(car.speed);
}
else{
  console.log("speed is not available");
}