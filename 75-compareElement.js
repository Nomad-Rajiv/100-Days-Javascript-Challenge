// JavaScript Program to Compare Elements of Two Arrays

function compareArray(arr1,arr2){
  if(arr1.length != arr2.length){
    return false;
  }
  else{
    for(let i = 0; i< arr1.length; i++){
      if(arr1[i] != arr2[i]){
        return false;
      }
    }
    return true;
  }
}

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let result = compareArray(arr1,arr2)

if(result){
  console.log("Both Array are of equal length");
}
else{
  console.log("Both array are not equal");
}