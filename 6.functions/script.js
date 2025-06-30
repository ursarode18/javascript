/* 
    ==> functions
    --> function is a block of code designed to perform a particular task.
    --> functions are executed when they are invoked or called.
    --> functions can take parameters and return values.
    --> functions can be defined using the function keyword or as arrow functions.
    --> functions can be nested, meaning you can define a function inside another function.
    --> functions can be anonymous, meaning they do not have a name.
    --> functions can be self-invoking, meaning they are executed immediately after being defined.
    --> functions can be used as arguments to other functions.
    --> functions can be used to create closures, which are functions that have access to variables in
        the scope in which they were defined, even after that scope has been exited.
    --> functions can be used to create higher-order functions, which are functions that take other functions
        as arguments or return functions as their result.
    syntax:
    function functionName(parameters) { 
        // code to be executed
    }
    functionName();
*/
function greet(){
    console.log("Hello, World!");
}
// Calling the function
greet(); // Output: Hello, World!

// Function with parameters
function sum(a, b) {
    return a + b; 
    /* 
        The return statement is used to return a value from the function.
        If no return statement is used, the function will return undefined.        
    */
                
}
// Calling the function with arguments
console.log(sum(5, 10)); // Output: 15
console.log(sum(100, 200)); // Output: 300
console.log(sum(1000, 2000)); // Output: 3000

function userName(name){
    return `Hello, ${name} !`;
}
let user = userName("Umesh Sarode");
console.log(user); // Output: Hello, Umesh Sarode !


 

