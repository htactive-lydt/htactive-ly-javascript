alert(Math.max(3, 8, 1)); // 8

let arr = [3, 8, 1];

alert(Math.max(arr)); // NaN

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25