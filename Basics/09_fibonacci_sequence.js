let n = 10; // number of terms
let a = 0, b = 1;

console.log("Fibonacci Sequence:");

for (let i = 0; i < n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
