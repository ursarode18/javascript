// Run using node
// to check in node
/* console.log("This is a variable & datatype example"); */

// Variable declaration
// var
/* 
    var is function scoped or globally scoped.
    It can be re-declared and updated.
    It is hoisted to the top of its scope, meaning it can be used before it is declared.
    It can be reassigned.    
*/
//var x = 10; console.log(x); // Output: 10

// The typeof() function returns the type of a variable
// var x = 10; console.log(typeof(x));  // Output: number

// var x = "10"; console.log(typeof(x)); // Output: string

// var x = true; console.log(typeof(x)); // Output: boolean

// var x; console.log(typeof(x)); // Output: undefined

// var x = 10;
// var x = 20; // Re-declaring the variable
// console.log(x); // Output: 20

/* 
    ==> Let
    let is block scoped.
    It can be updated but not re-declared in the same scope.
    It is also hoisted, but not initialized, meaning it cannot be used before it is declared.
    It cannot be reassigned.
    let x = 10; console.log(x); // Output: 10
*/

// let x = 10; //console.log(x); // Output: 10
// x = 30; console.log(x); // Output: 30

/* 
    ==> Const
    const is block scoped.
    It can be updated but not re-declared in the same scope.
    It is also hoisted, but not initialized, meaning it cannot be used before it is declared.
    It cannot be reassigned.
    const x = 10; console.log(x); // Output: 10
*/

const x = 10; //console.log(x); // Output: 10
//x = 30; // Uncaught TypeError: Assignment to constant variable.
//console.log(x); // Error: Assignment to constant variable.
