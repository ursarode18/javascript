console.log("We are learning about arrow functions.");
/* 
    ==> Arrow Functions
    --> Arrow functions are a more concise(short) way to write functions in JavaScript.
    --> They are defined using the arrow syntax (=>).
    --> They do not have their own 'this' context, which means they inherit 'this' from the parent scope.
    --> They cannot be used as constructors and do not have the 'new' keyword.
    --> They are always anonymous, meaning they do not have a name.
    syntax:
    const functionName = (parameters) => {
        // code to be executed
    }
    --> Arrow functions are often used as callbacks and event handlers.
*/

let greet = () => {
    console.log("Hello function from arrow function!");
}
greet();

// arrow function without braces
/* 
    --> When the function body has only one expression, you can omit the braces and the return keyword.
    --> The expression will be returned implicitly.
    syntax:
    const greet = name => `Hello, ${name}!`;
    conslole.log(greet("John")); // Output: "Hello, John!"
*/
let info = (a, b) => console.log(a + b);
info(10, 20); // Output: 30




