// JavaScript Program to Format the Date

var tarikh = new Date();
console.log(formatDate(tarikh));

function formatDate(pd){
  var date = pd.getDate();
  var month = pd.getMonth();
  month++;
  var year = pd.getFullYear();
  return date + "-" + month + "-" + year;
}