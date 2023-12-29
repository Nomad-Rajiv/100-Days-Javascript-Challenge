// JavaScript Program to Remove Specific Item From an Array

/* 

We are gonna do this question using splice method 
splice method used two value one of is index value like what index we have to remove and second one is 
how many item is deleted...

*/


// let productList = ['mango','banana','apple','papaya','grapes']

// console.log(productList.indexOf('grapes'));

// console.log(productList.splice(productList.indexOf('grapes'),1));

// console.log(productList);


// Another program to remove element 


function removeEl(){
  //  position = parseInt(position) // for converting the integere value
  
let position = 2; // It can be taken dynamically usnig DOM
for(let i = position; i < data.length-1; i++){
  data[i] = data[i + 1]
}
data.length = data.length - 1;
console.log(data)
}
let data = ['Apple', 'Mango', 'Grapes', 'Banana','Strwaberry']

removeEl(data)
