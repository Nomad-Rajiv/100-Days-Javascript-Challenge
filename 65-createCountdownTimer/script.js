
const endDate = "2024-01-24T10:20:00";
document.getElementById('end-Date').innerText = endDate;
const inputs = document.querySelectorAll('input')

function clock(){
  const end = new Date(endDate);
  const now = new Date()
 const diff = (end - now) / 1000;

 if(diff < 0 ) return;


 // convert into days
 inputs[0].value = (Math.floor(diff/3600/24));
 //converted into hours
 inputs[1].value = (Math.floor(diff/3600) % 24);
 //converted into minutes
  inputs[2].value = (Math.floor(diff/60) % 60);
  //converted into seconds
  inputs[3].value = (Math.floor(diff) % 60);
}

// initial call
clock()


// creating setintervar for function calling every one second

setInterval(
  () =>{
    clock()
  },
  1000
)
