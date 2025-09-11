let str1 = "listen";
let str2 = "silent";

let isAnagram = str1.split("").sort().join("") === str2.split("").sort().join("");

console.log(isAnagram); // true
