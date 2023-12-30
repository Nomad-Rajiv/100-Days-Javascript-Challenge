// JavaScript Program To Perform Intersection Between Two Arrays


let arr1 = [1,2,3,4,4,5]

let arr2 = [2,3,6,7,8,1,5]

let intersectionArray = arr1.filter((ele) => {
  return arr2.includes(ele)
})

console.log(intersectionArray);