// Program to Loop Through an Object

let objArr = {
  Name : 'Alex',
  Age : 22,
  Occupation : "Teacher",
  Gender : "Male"
}

let properties = Object.keys(objArr); // for converting the properties of an object in array form
// console.log(properties);

for (const prop of properties) {
  // console.log(prop);
}


// for looping the values variable 

let values  = Object.values(objArr);
console.log(values)

for (const value of values) {
  console.log(value);
}