/* 
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
                             It is case-sensitive. 


*/

// length: Returns the length of the string.
    let str1 = "lorem ipsum dolor sit amet";
    console.log(str1.length); // Output: 26 

// toUpperCase(): Converts the string to uppercase.
    let str2 = "Converts the string to uppercase";
    console.log(str2.toUpperCase()); 
    // Output: CONVERTS THE STRING TO UPPERCASE

// toLowerCase(): Converts the string to lowercase.
    let str3 = "CONVERTS THE STRING TO LOWERCASE";
    console.log(str3.toLowerCase());
    // Output: converts the string to lowercase

// includes(): Checks if the string contains a specified substring.
    let str4 = "This is a sample string";
    console.log(str4.includes('sample')); // Output: true
    console.log(str4.includes('example')); // Output: false
    console.log(str4.includes('SAMPLE')); // Output: false (case-sensitive)
    

// indexOf(): Returns the index of the first occurrence of a substring.
    let str5 = "Find the index of a substring";
    console.log(str5.indexOf('index')); // Output: 5
    console.log(str5.indexOf('demo')); // Output: -1 (not found)

// trim(): Removes whitespace from both ends of the string.
    let str6 = " umesh sarode ";
    console.log(str6.length); // Output: 14
    console.log(str6.trim()); // Output: "umesh sarode"
    
    console.log(str6.trim().length); // Output: 12
    
    
