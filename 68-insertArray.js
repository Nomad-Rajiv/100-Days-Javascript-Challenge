// JavaScript Program to Insert Item in an Array

const arr = [10,20,30,40,50];

let newEl = 55;
let position = 4;

for(let i = arr.length -1; i >=0; i--){
  if(i >= position){
    arr[i + 1] = arr[i]
    if(i === position){
      arr[i] = newEl;
    }
  }
}

console.log(arr);
