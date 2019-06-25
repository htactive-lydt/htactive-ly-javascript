// ToString

let value = true;

console.log(typeof value); // boolean
value = String(value);

console.log(typeof value); // String

// ToNumber

let str = "123";

console.log(typeof str); //String

let num = Number(str);

console.log(typeof num); //Number

console.log(typeof parseInt(str)); // Number

console.log(parseInt("1235 anh có đánh rơi nhịp nào không")); // 1235
console.log(parseInt("anh có đánh rơi nhịp nào không")); // NaN
console.log(parseInt("123.56")); // 123

console.log(parseFloat("1234.676 fjdj")); // 1234.676
console.log(parseFloat("1234,676 fjdj")); // 1234

console.log(Number(true)); // 1 true or false will return 1 or 0
console.log(Number("123h")); // NaN

// ToBoolean

// Truthy
console.log("Truthy:")
console.log(Boolean(6));

console.log(Boolean("Ly cute"));

console.log(Boolean({}));

console.log(Boolean([]));

console.log(Boolean(Infinity));

console.log(Boolean(-34));

// Falsy
console.log("Falsy: ")
console.log(Boolean(null));

console.log(Boolean(undefined));

console.log(Boolean(0));

console.log(Boolean(NaN));

console.log(Boolean(""));