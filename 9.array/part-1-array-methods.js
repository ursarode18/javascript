/* 
    ==> Array Methods in JavaScript <==
    --> Array methods are built-in functions that allow you to manipulate arrays in JavaScript.
    --> Common array methods include:
    --> 1. push() - Adds one or more elements to the end of an array.
    --> 2. pop() - Removes the last element from an array and returns it.
    --> 3. shift() - Removes the first element from an array and returns it.
    --> 4. unshift() - Adds one or more elements to the beginning of an array.
    --> 5. length() - Returns the number of elements in an array.    
*/

let arr = [10, 20, 30, 40,];

// 1. push() - Adds one or more elements to the end of an array.
arr.push(50);
console.log("After push:", arr); // Output: [10, 20, 30, 40, 50]

// 2. pop() - Removes the last element from an array and returns it.
arr.pop();
console.log("After pop:", arr); // Output: [10, 20, 30, 40]

// 3. shift() - Removes the first element from an array and returns it.
arr.shift();
console.log("After shift:", arr); // Output: [20, 30, 40]

// 4. unshift() - Adds one or more elements to the beginning of an array.
arr.unshift(5,10);
console.log("After unshift:", arr); // Output: [10, 20, 30, 40]

// 5. length - Returns the number of elements in an array.
console.log("Length of array:", arr.length); // Output: 4