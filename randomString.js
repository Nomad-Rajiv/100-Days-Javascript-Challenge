// JavaScript Program to Generate Random String


function createRandomString(string_length)  {
  var random_string = "";
  var charecter = "ABCDEFGHIJKLMNOPQRESTUVWXYZ0123456789abcdefghijklmnopqrestuvwxyz";
  for(var i = 0; i < string_length; i++){
    random_string += charecter.charAt(Math.floor(Math.random() * charecter.length))
  }
  return random_string
}

console.log(createRandomString(10))