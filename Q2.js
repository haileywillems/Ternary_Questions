//is purchase amount is >=100$ that is a 10% discount
//if not- 0% discount
const prompt = require('prompt-sync')();

let amount=prompt("Enter Perchance Amount Here: $");
let result= amount>=100 ? "You get a 10% discount!" : "No discount for you!";
console.log(result);