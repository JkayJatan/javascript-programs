let str = "hello world";
let freq = {};

// Loop through each character
for (let char of str) {
    if (char !== " ") {  // ignore spaces (optional)
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
}

console.log("Character frequency:", freq);
