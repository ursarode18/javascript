/* 
    11. splice() - Changes the contents of an array by removing or replacing existing
                   elements and/or adding new elements in place.
       Example:
         const months = ['Jan', 'March', 'April', 'June'];
            months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
            console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']
            months.splice(4, 1, 'May'); // Replaces 'June' with 'May'
            console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']
            months.splice(4, 1, 'May'); // Replaces 'June' with 'May'
            console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']
    
    12. sort() - Sorts the elements of an array in place and returns the sorted array.
       Example:
            const numbers = [4, 2, 5, 1, 3];
            numbers.sort(); // Sorts the array in ascending order
            console.log(numbers); // Output: [1, 2, 3, 4, 5]
            numbers.sort((a, b) => b - a); // Sorts the array in descending order
            console.log(numbers); // Output: [5, 4, 3, 2, 1]
            console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'May']
    
    13. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
        Example: 
            const numbers = [4, 2, 5, 1, 3];
            const index = numbers.findIndex((num) => num === 5);
            console.log(index); // Output: 2
    
    14. from() - Creates a new array from an array-like or iterable object.
        Example:
            const str = 'Hello';
            const chars = Array.from(str);
            console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

    15. isArray() - Determines whether the passed value is an Array.
        Example:
            console.log(Array.isArray([1, 2, 3])); // Output: true
            console.log(Array.isArray('Hello')); // Output: false       
*/

    // 11/ slice()
    let arr = [10,20,30,40,50];
    let result = arr.slice(1, 4); // Extracts elements from index 1 to 3
    console.log(result); // Output: [20, 30, 40]
    result = arr.slice(2, 5); // Extracts elements from index 2 to 4
    console.log(result); // Output: [30, 40, 50]

    // 12. short()
    arr = [4, 2, 5, 1, 3,1];
    console.log(arr.sort((a, b) => a - b)); // Sorts the array in ascending order
    // Output: [1, 1, 2, 3, 4, 5] );
    console.log(arr.sort((a, b) => b - a)); // Sorts the array in descending order
    // Output: [5, 4, 3, 2, 1, 1]

    // 13. findIndex()
    arr = [4, 2, 5, 1, 3];
    console.log(arr.findIndex((num) => num === 1)); 
    // findIndex
    // Output: 3

    // 14. from() 
    let str = 'RAMDAS';
    console.log(Array.from(str));  
    // Output: [ 'R', 'A', 'M', 'D', 'A', 'S' ]

    // 15. isArray()
    let arr1 = [1, 2, 3];
    console.log(Array.isArray(arr1));
    
    // Output: true
    let str1 = 'Hello';
    console.log(Array.isArray(str1));
    // Output: false
    
    let num1 = 10;
    console.log(Array.isArray(num1));
    // Output: false








    

    

    

