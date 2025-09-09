let arr = [5, 12, 8, 130, 44];  
let largest = arr[0];  

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element in the array is: " + largest);
