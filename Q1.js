//assign "hot" if temp is >30
//asign "normal" if not >30
const prompt = require('prompt-sync')();

let temp=parseInt(prompt("Enter Temperature: "));
let result = temp>30 ? "It is Hot out!" : "It is a Normal Temperature today!";
console.log(result);