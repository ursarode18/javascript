/* 
    ==> Array Methods - 2 <==
    --> 6. find() - Returns the first element in the array that satisfies the provided testing function.
        Example:
        const numbers = [1, 2, 3, 4, 5];
        const found = numbers.find(element => element > 3); 
        // what is element? 
        // In this context, 'element' represents each individual item in the 'numbers' array as the find() method iterates through it.
        // This line finds the first element greater than 3        
        console.log(found); // Output: 4

    --> 7. includes() - Determines whether an array includes a certain value among its entries.
        Example:
        const fruits = ['apple', 'banana', 'cherry'];
        console.log(fruits.includes('banana')); // Output: true
        console.log(fruits.includes('grape')); // Output: false

    --> 8. join() - Joins all elements of an array into a string.
        Example:
        const elements = ['Fire', 'Air', 'Water'];
        console.log(elements.join()); // Output: "Fire,Air,Water"
        console.log(elements.join('')); // Output: "FireAirWater"
        console.log(elements.join('-')); // Output: "Fire-Air-Water"

    --> 9. concat() - Merges two or more arrays and returns a new array.
        Example:
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const combined = array1.concat(array2);
        console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

    --> 10. splice() - Changes the contents of an array by removing or replacing existing
                      elements and/or adding new elements in place.
        Example:
        const months = ['Jan', 'March', 'April', 'June'];
        months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
        console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']
        months.splice(4, 1, 'May'); // Replaces 'June' with 'May'
        console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']
*/

let num = [1, 2, 3, 4, 5];
// 6. find() - Returns the first element in the array that satisfies the provided testing function.
let found = num.find((el) => el > 3); // el = element  
console.log("Found element grater than 3: ", found); // Output: 4

// 7. includes() - Determines whether an array includes a certain value among its entries.
console.log("Does num include 4? ", num.includes(4)); // Output: true
console.log("Does num include 6? ", num.includes(6)); // Output: false

// 8. concat() - Merges two or more arrays and returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log("Combined array: ", combined); // Output: [1, 2, 3, 4, 5, 6]

// 9. join() - Joins all elements of an array into a string.
let elements = ['Fire', 'Air', 'Water'];
console.log("Joined elements: ", elements.join(", ")); // Output: "Fire, Air, Water"
console.log("Joined elements with  space: ", elements.join(" ")); // Output: "FireAirWater"
console.log("Joined elements with hyphen: ", elements.join("-")); // Output: "Fire-Air-Water"

/**
 * 10. splice() - Changes the contents of an array by removing or replacing existing
 *                elements and/or adding new elements in place.
 * Example:
 * const months = ['Jan', 'March', 'April', 'June'];
 * months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
 * console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']
 * months.splice(4, 1, 'May'); // Replaces 'June' with 'May'
 * console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']  
 */

let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
console.log("Months after inserting Feb: ", months); 
// Output: ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // Replaces 'June' with 'May'
console.log("Months after replacing June with May: ", months); 
// Output: ['Jan', 'Feb', 'March', 'April', 'May']