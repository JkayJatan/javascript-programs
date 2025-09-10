let str = "Hello World";
let count = 0;

// Convert string to lowercase to handle both cases
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        count++;
    }
}

console.log("Number of vowels:", count);
