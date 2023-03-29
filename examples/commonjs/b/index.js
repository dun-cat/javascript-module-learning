var counter = require('./b').counter; // (B)
var incCounter = require('./b').incCounter;
var getCounter = require('./b').getCounter;

// The imported value is a (disconnected) copy of a copy
console.log(counter); // 3
incCounter();
console.log(counter); // 3
console.log(getCounter())

// The imported value can be changed
counter++;
console.log(counter); // 4



