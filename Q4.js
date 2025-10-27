//State whether is it the weekend or not bassed in the input

const prompt = require('prompt-sync')();

let day=prompt("Enter the day: ");
let result= day==="Sunday"||day=== "Saturday" ? "It is the Weekend!" : "It is a Weekday!";
console.log(result);