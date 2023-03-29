const { myObj, add } = require("./a");

console.log("1. call require():")
console.log(myObj.count);
add();
console.log(myObj.count);

console.log("-------------------")

console.log("2. call require()")
const { myObj: myObj1 } = require("./a");

console.log(myObj1.count)
