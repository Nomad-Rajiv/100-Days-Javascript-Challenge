// JavaScript Program to Convert Objects to Strings

// first creat an object

let students = {
  name : "Rajiv Kumar",
  course : "Frontend Developer",
  Duration :  "6 Month"
}

// The task is to convert this object into string
// we will use JSON.Stringfy for converting object to string

let result = JSON.stringify(students)
console.log(result); // this is converted to string 