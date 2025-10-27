//have the user enter their age
//if they are under 13 they are a chind
//if they are under 20 they are a teenager
//if they are under 60 they are an adult
//if they are 60 or above they are a senior

const prompt = require('prompt-sync')();

let age= parseInt(prompt("Enter age here: "))
let result= age<13 ? "Your are a Child." :
age<20 ? "You are a Teenager.":
age<60 ? "You are an Adult.":
"You are a Senior.";
console.log(result);