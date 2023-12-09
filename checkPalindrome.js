let value = 'madam';

const revValue = () =>{
  const myrevValue = value.toString().split("").reverse().join("");
  const mystr = value.toString();
  if(mystr == myrevValue){
    console.log("The given value is Palondrome");
  }else{
    console.log("The given value is not Palondrome");
  }
}

revValue()