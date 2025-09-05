let a = 10, b = 25, c = 15;
let largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log("Largest number is:", largest);
