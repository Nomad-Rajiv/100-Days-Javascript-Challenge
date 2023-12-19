// Program to Clone a JS Object

let obj = {
  Name : "Vikash Kushwaha",
  age : 25
}

console.log(obj);


let object1_clone = Object.assign({},obj); // for cloning the object

console.log(object1_clone);