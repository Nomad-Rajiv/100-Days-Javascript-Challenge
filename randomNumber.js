function getRandom() {
  let x = Math.floor(Math.random() * 10) + 1;
  return x;
}
const randomNum = getRandom();
console.log(randomNum);