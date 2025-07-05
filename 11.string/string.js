console.log('Learning String');

/* 
    ==> string:
    --> A string is a sequence of characters used to represent text. 
    --> In JavaScript, strings are immutable, meaning once created, they cannot be changed. 
    --> Strings can be created using single quotes (' '), double quotes (" "), 
        or backticks (` `) for template literals.
    --> Strings can be manipulated using various methods and properties.

    --> Common string methods include:
        1. length: Returns the length of the string.
        2. charAt(index): Returns the character at the specified index.
        3. indexOf(substring): Returns the index of the first occurrence of a substring.
        4. slice(start, end): Extracts a section of the string and returns it as a new string.
        5. toUpperCase(): Converts the string to uppercase.
        6. toLowerCase(): Converts the string to lowercase.
        7. trim(): Removes whitespace from both ends of the string.
        8. split(separator): Splits the string into an array of substrings based on a specified separator.
        9. replace(searchValue, newValue): Replaces occurrences of a specified value with a new value.
        10. includes(substring): Checks if the string contains a specified substring.
*/

// single quotes string
let str1 = 'Hello, World!';
console.log(str1); // Output: Hello, World!

// double quotes string
let str2 = "JavaScript is fun!";
console.log(str2); // Output: JavaScript is fun!

// backticks string (template literals)
let name = 'John';
let age = 30;
let str3 = `My name is "${name}" and I am "${age}" years old.`;
console.log(str3); // Output: My name is "John" and I am "30" years old.