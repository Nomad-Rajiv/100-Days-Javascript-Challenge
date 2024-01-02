// JavaScript Program to Generate a Range of Numbers and Characters

function generateRange(start,end){
  // check if start and end are valid 

  if(typeof start !== 'number' || typeof end !== 'number' ) {
    console.log("Invalid Inputs. Please provide valid numbers");
    return [];
  }

  // if start is greater than end, swap them
  if(start > end){
    [start,end] = [end, start];
  }

  // Generate the range of numbers and charecters

  const result = [];
  for(let i = start; i<= end; i++){
    result.push(i);
  }  

  return result;


}

// Example usage for generating a range of numbers from 1 to 10

const numberRange = generateRange(1, 5)
console.log("Generate range of numbers: ", numberRange);

// Example usage for generating a range of characters from 'A' to 'Z'
// const charRange = generateRange('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map(code => String.fromCharCode(code));
// console.log("Generated range of characters:", charRange);
