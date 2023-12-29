// JavaScript Program to Remove Duplicates From Array



/*let result  = new Set(arr)
console.log(result);  */  // As we can see the array is now remove all the duplicates

// We can also do the same program in another form


function uniArr(arr) {
  let unique = []
  for(let i = 0; i < arr.length; i++){
    if(unique.indexOf(arr[i]) == -1){
      unique.push(arr[i])
    }
  }
  return unique;
}

let students = [1,2,2,3,4,4,5,7,9,7,6,5,6]

var uniq = uniArr(students)
console.log(uniq);

// As you can see this is also removing the dublicates elements 