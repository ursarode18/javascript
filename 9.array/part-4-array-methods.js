console.log("Part 4: Array Methods");

/* 
    16. map()
    --> Creates a new array populated with the results of calling a provided function on every element in the calling array.
    Example:
        const numbers = [1, 2, 3, 4];
        const doubled = numbers.map(num => num * 2);
        console.log(doubled); // Output: [2, 4, 6, 8]
    
    17. filter()
    --> Creates and returns a new array with all elements that pass a specified test condition.
    Example:
        const numbers = [1, 2, 3, 4, 5];
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log(evenNumbers); // Output: [2, 4]
        
    18. reduce()
    --> Executes a reducer function on each element of the array, resulting in a single output value.
    Example:
        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
        // explanation: The reduce method takes a callback function that accumulates the sum of the numbers in the array, starting from an initial value of 0.

        console.log(sum); // Output: 10
*/

// 16. map() 
let numbers = [1, 2, 3, 4];
let result = numbers.map((num) => num * 2);
console.log(result); // Output: [2, 4, 6, 8]

// 17. filter()
result = numbers.filter((num) => num % 2 === 1);
console.log(result); // Output: [1, 3] // odd number
result = numbers.filter((num) => num % 2 === 0);
console.log(result); // Output: [2, 4] // even number

// 18. reduce()
let num = [1, 2, 3, 4, 5];
let sum = num.reduce((prev, curr) => prev + curr, 0); 
// explanation: The reduce method takes a callback function that accumulates the sum of the numbers in the array, starting from an initial value of 0.
console.log(sum); // Output: 15




