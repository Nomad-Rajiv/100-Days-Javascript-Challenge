// Check Whether a String Starts and Ends With Certain Characters

// we can use startsWith() and endsWith() fucntion 

var string = "Thalabhu"

var testStart = string.startsWith('T');
var testEnd = string.endsWith('i');

if(testStart == true && testEnd == true){
  console.log(`${string} starts with T and ends with i`);
}
else if(testStart == true && testEnd == false){
  console.log(`${string} is start with T but not end with i`);
}
else if(testStart == false && testEnd == true){
  console.log(`${string} is not start with T but end with i`);
}
else{
  console.log(`${string} is not start with T not end with i`);
}

