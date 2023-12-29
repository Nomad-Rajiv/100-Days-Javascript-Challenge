// JavaScript Program to Merge Two Arrays and Remove Duplicate Items

function mergeArrayAndRemoveDuplicate(arr1,arr2){
  let mergedArray = [...arr1,...arr2]  // here spread opeartor merged two arrays
  let result = [...new Set(mergedArray)] // Here used spread operator with set 
  console.log(result); // This will print array without duplicate

}

let arr1 = [1,2,3,4,5,6,6]

let arr2 = [7,8,9,]

mergeArrayAndRemoveDuplicate(arr1,arr2)