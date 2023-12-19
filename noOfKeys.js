// JavaScript Program to Count the Number of Keys/Properties in an Object

// Using for in loop

let obj = {
  Name : "Rajiv",
  Age : 21,
  Gmail : 'rajivkum2021@gmail.com',
  Gender : "Male"
}

let count = 0;

for( let key in obj){
  count ++
}
console.log(`The no of key in an object is ${count}`);