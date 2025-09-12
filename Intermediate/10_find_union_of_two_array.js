let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let union = [...new Set([...arr1, ...arr2])];

console.log(union); // [1, 2, 3, 4, 5]
