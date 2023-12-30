// JavaScript Program to Get Random Item From an Array

const arr = [
  "One",
  "Two",
  "Three",
  "four",
  "tell",
  "me",
  "that",
  "you",
  "love",
  "me",
  "more"
]

const random = arr[Math.floor(Math.random() * (arr.length))];
console.log(random);