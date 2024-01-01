// Javascript Program to Generate a Random Number Between Two Numbers

const max =  20;
const min = 10;

const randomNumber = Math.floor(Math.random() * (max - min) +1) + min;

console.log(`Random Value Between ${max} and ${min} is ${randomNumber} `);