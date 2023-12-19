
// JavaScript Program to Merge Property of Two Objects


let obj1 = {
  Name : "Rajiv",
  Age : 21
}

let obj2 = {
  Gender : "Male",
  Phone : 221233
}

let mergeObj = {
  ...obj1, ...obj2  // for merge the object using spread operator 
};

console.log(mergeObj);