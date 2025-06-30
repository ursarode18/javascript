// Operators in JavaScript
/* 
    Operators are special symbols that perform operations on variables and values. JavaScript has various types of operators, including:
    1. Arithmetic Operators: Used for mathematical calculations.
    2. Assignment Operators: Used to assign values to variables.
    3. Comparison Operators: Used to compare two values.
    4. Logical Operators: Used to combine multiple conditions.   
    5. Ternary Operator: A shorthand for if-else statements.
*/

// 1. Arithmetic Operators: + , - , * , / , % , ** (exponentiation)
/* let a = 10;
let b = 3;
console.log("a + b =", a + b); // Addition a + b = 13
console.log("a - b =", a - b); // Subtraction a - b = 7
console.log("a * b =", a * b); // Multiplication a * b = 30
console.log("a / b =", a / b); // Division a / b = 3.3333333333333335
console.log("a % b =", a % b); // Modulus (remainder) a % b = 1
console.log("a ** b =", a ** b); // Exponentiation (a raised to the power of b) // a ** b = 1000 */

// 2. Assignment Operators: = , += , -= , *= , /= , %= , **=
/* let x = 17; console.log("Assign value to x:", x); // Assign value to x = 17
let y = 10;
// Addition assignment
x = x + y; console.log("After x = x + y:", x); // After x = x + y: 27
// shorthand for addition assignment
x += y; console.log("After x += y:", x); // After x += y: 27

// Subtraction assignment
x = x - y; console.log("After x = x - y:", x); // After x = x - y: 17
// shorthand for subtraction assignment
x -= y; console.log("After x -= y:", x); // After x -= y: 17

// Multiplication assignment
x = x * y; console.log("After x = x * y:", x); // After x = x * y: 170
// shorthand for multiplication assignment
x *= y; console.log("After x *= y:", x); // After x *= y: 1700

// Division assignment
x = x / y; console.log("After x = x / y:", x); // After x = x / y: 170
// shorthand for division assignment
x /= y; console.log("After x /= y:", x); // After x /= y: 17 */


// 3. Comparison Operators: == , === , != , !== , > , < , >= , <=
// == checks for equality of values.
/* let a = 5;
let b = '5';
console.log(a == b); // true (== checks for value only)

console.log(a === b); // false (=== checks for both value and type)

console.log(a != b); // false (!= checks for value only)

console.log(a !== b); // true (!== checks for both value and type) */


// 4. Logical Operators: && , || , !

// 5. Ternary Operator: ? :
/*  
    ==> The ternary operator is a shorthand for if-else statements.
    It takes three operands: a condition, a value if true, and a value if false.
    Syntax: condition ? valueIfTrue : valueIfFalse    
*/
let age = 18;
let canVote = (age > 18) ? "You can vote." : "You cannot vote."; 
console.log(canVote); // O/P - "You cannot vote."

age = 21;
canVote = (age > 18) ? "You can vote." : "You cannot vote.";
console.log(canVote); // O/P - "You can vote."

/* 
    => Template Literals:
    -> Template literals are string literals allowing embedded expressions.
    -> You can use multi-line strings and string interpolation features with them.
    -> They are enclosed by backticks (`) instead of single or double quotes.
    -> You can embed expressions inside template literals using the ${expression} syntax.
    Example:
            let name = "John";
            let greeting = `Hello, ${name}!`;   
            console.log(greeting); // O/P - "Hello, John!"
    -> Template literals can also span multiple lines without needing concatenation or escape characters.    
*/

let name = "Umesh";
let roll = 25;
let address = "123 Main St";
console.log(`My name is ${name}, I am ${roll} years old, and I live at ${address}.`);
