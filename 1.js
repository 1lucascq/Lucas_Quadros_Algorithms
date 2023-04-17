/*
Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
    Get an array containing just the letters
    Get an array containing just the numbers
    Get the highest number from the array above
*/

const letters = [];
const numbers = [];
const array = ["a", 10, "b", "hola", 122, 15];

for (let i = 0; i < array.length; i++) {
    typeof array[i] === "string" ? letters.push(array[i]) : numbers.push(array[i]);
}

const highestNumber = Math.max(...numbers);

console.log("Letters:", letters);
console.log("Numbers:", numbers);
console.log("Highest Number:", highestNumber);
