// JavaScript Program to Append an Object to An Array

// using push() Method

let arr = [1,3,4]

let students = {
  Name: "Rajiv",
  LastName: "Kumar"
}

/*arr.push(students)
console.log(arr); */

// using spread Operator

arr = [...arr,students];
console.log(arr);
