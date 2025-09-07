let num = 121;
let reversed = Number(num.toString().split("").reverse().join(""));

if (num === reversed) {
  console.log(num + " is a Palindrome");
} else {
  console.log(num + " is NOT a Palindrome");
}
