let num = 153;   // try 123
let sum = 0;
let temp = num;
let digits = num.toString().length;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** digits;
  temp = Math.floor(temp / 10);
}

if (sum === num) {
  console.log(num + " is an Armstrong number");
} else {
  console.log(num + " is NOT an Armstrong number");
}
