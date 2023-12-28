  //JavaScript Program to Check Leap Year

let year = 2016;

function checkLeapYear(year){
  if(year % 4 == 0 && year % 100 != 0){
    return true
  }
  else if(year % 400 == 0){
    return true
  }
  else{
    return false
  }
}

if(checkLeapYear(year) == true){
  console.log(`The given year is ${year} is Leap Year`);
}
else{
  console.log(`The given year is ${year} is not Leap Year`);
  
}