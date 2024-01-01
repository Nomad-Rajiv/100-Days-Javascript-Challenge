// JavaScript Program to Illustrate Different Set Operations

/* 1. In javascript, a Set is a collection of unique values. It is simillar to an array,
but the values in a set are not ordered and cannot be repeated. */

// Here is an example of how to create and use a Set in javascript :
 

// Create a new Set 

const mySet = new Set();

// Add some values to Set using add method

mySet.add(1);  // variableName.add(value)   (syntex)
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);


// Now check the size of the Set using size property

console.log(mySet.size);

// check if value is exist in the Set using has method.

console.log(mySet.has(2));  //It will return true or false if data is prsent return true or false

// Remove value using delete Method

console.log(mySet.delete(3));

console.log(mySet.size)

// Iterate Over the value in the Set 

/*  we can iterate over the Set using For of loop of for in loop 
  we will be using for of loop for iterating */

  for(let setValue of mySet){
    console.log(setValue);
  }

  // You can also create a Set from an Array by using the Set constructor:

  const array = [1,2,3,3,4,4,5,6,6,6]

  const mySetArr = new Set(array);
  console.log(mySetArr.size);


  /* Note that the Set only keeps track of unique values, so if you pass an array 
  with duplicate values to the Set constructor, it will only keep one copy of each value.
  
  Use case -
  To remove the duplicate from an array
  
  */