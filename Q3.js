//Calculate ticket price
//if age is less than 12 it is $8
//if age is bigger than 12 it is $15
const prompt = require('prompt-sync')();

let ticketprice=parseInt(prompt("How old are you?: "));
let result=ticketprice>=12 ? "Ticket is $15" : "Ticket is $8";
console.log(result);