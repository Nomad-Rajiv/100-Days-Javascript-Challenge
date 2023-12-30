// JavaScript Program to Split Array into Smaller Chunks


function chunkArray(myArray, chunkSize){
  let result = [];
  while(myArray.length){
    result.push(myArray.slice(0,chunkSize));
    myArray = myArray.slice(chunkSize)
  }
  return result
}

let myArray = [1,2,3,4,5,6,7]
console.log(chunkArray(myArray,3));