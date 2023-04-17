/*
Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
    Take into account that the division must not allow 0 dividend
    The sum function allows an array as an input parameter and adds all its elements.
    The subtraction function allows an array as an input parameter and subtracts all its elements.
    Multiplication Function - Ditto
    The division function accepts two parameters: a and b.
*/

const calculator = {
    sum: (arr) => arr.reduce((acc, val) => acc + val, 0),
    subtraction: (arr) => arr.reduce((acc, val) => acc - val),
    multiplication: (arr) => arr.reduce((acc, val) => acc * val, 1),
    division: (a, b) => {
        if (b === 0) {
            throw new Error("0 is not a allowed dividend");
        }
        return a / b;
    },
};

const numbers = [30, 20, 10];
console.log(calculator.sum(numbers));
console.log(calculator.subtraction(numbers));
console.log(calculator.multiplication(numbers));
console.log(calculator.division(90, 3));
