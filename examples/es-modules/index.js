import greeting, { title, myObj } from "./modules/a.js?a=1&b=2";

greeting();

// title = "read only";
console.log("title:", title + "is read only")


myObj.hello = "freezing object";

console.log("myObj:", ++myObj.b)

console.log("myObj:", myObj.b)

import * as order from './modules/b.js';

// console.log(id)
console.log(order.default)


console.log(import.meta)