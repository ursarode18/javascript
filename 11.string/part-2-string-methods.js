/* 
    * Part - 2 String Methods in JavaScript
    ==> substring(start, end): Returns a portion of the string between the specified start and end indices.
    ==> split(separator): Splits the string into an array of substrings based on a specified separator.
    ==> slice(start, end): Extracts a section of the string and returns it as a new string.
    ==> replace(searchValue, newValue): Replaces a specified substring with another substring.    
    ==> charAt(index): Returns the character at the specified index in the string.
*/

// substring(start, end): Returns a portion of the string between the specified start and end indices.
let str1 = "Returns a portion of the string between the specified start and end indices";
console.log(str1.substring(0, 31)+'...'); 
// output: Returns a portion of the string...

// slice(start, end): Extracts a section of the string and returns it as a new string.
let str2 = "JavaScript is a versatile programming language";
console.log(str2.slice(10, 30)); 
// output: is a versatile prog

// replace(searchValue, newValue): Replaces a specified substring with another substring.
let str3 = "I love JavaScript programming";
console.log(str3.replace("JavaScript", "Laravel"));
// output: I love Laravel programming

// split(separator): Splits the string into an array of substrings based on a specified separator.
let str4 = "apple,banana,cherry";
console.log(str4.split(",")); // Output: [ 'apple', 'banana', 'cherry' ]

let str5 = "apple banana cherry date fig grape kiwi";
console.log(str5.split(" ")); 
// Output: [ 'apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi' ]

// charAt(index): Returns the character at the specified index in the string.
let str6 = "specified";
console.log(str6.charAt(5)); // Output: f
console.log(str6.charAt(0)); // Output: s


