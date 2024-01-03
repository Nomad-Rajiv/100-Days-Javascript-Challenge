// JavaScript Program to Perform Function Overloading



class overloadingExample{
  //  Function with variable number of arguments

  add(){
    if(arguments.length === 2){
      return arguments[0] + arguments[1];
    }
    else if(arguments.length === 3){
      return arguments[0] + arguments[1] + arguments[2];
    }
    else{
      // Default Behaviour 
      return "Invalid number of arguments"
    }
  }
}

// Example Usage
const example = new overloadingExample()
console.log(example.add(2,3));
console.log(example.add(2,3,4,5));  