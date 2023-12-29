// JavaScript Program to Check if An Array Contains a Specified Value

// using include method 

/*let arr = [1,2,3,4,5];

let valueToFind = 2;

let hasValue = arr.includes(valueToFind);

if(hasValue){
  console.log(`${valueToFind} is present in array`);
}
else{
  console.log(`${valueToFind} is not present in array`);
} */

// Using indexOf method 

let arr = [1,2,3,4,5];

let valueToFind = 2;

let index = arr.indexOf(valueToFind);

if(index >= 0){
  console.log(`${valueToFind} is present in array`);
}
else{
  console.log(`${valueToFind} is not present in array`);
}