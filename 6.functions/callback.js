/* 
    ==> Callback Functions in JavaScript
    --> Functions that are passed as arguments to other functions
    --> It gets executed after a certain task is completed.    
    --> Useful for asynchronous operations, event handling, and more
    --> Example: setTimeout, setInterval, AJAX requests, etc.
    --> Syntax: function_name(argument) {
                    // code to be executed
                }
*/

console.log("Callback Functions in JavaScript");


// define a callback function
const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
};
/* 
    This function takes one parameter: name.

    It prints:
    👉 "Hello, [name]!"

    For example:
    sayHello("Umesh") will print:
    Hello, Umesh!
*/

// Define a function that takes a callback
const greetUser = (userName, callback) => {
    callback(userName); // Call the callback function with the userName
};
/* 
    This function takes two parameters:

    userName: the name of the user.

    callback: a function you want to call.

    Inside greetUser, it calls the callback function and passes userName to it.
*/

// Call the function and pass the callback
greetUser("Umesh", sayHello);
/* 
    --> greetUser receives "Umesh" and sayHello.
        It calls:
        callback("Umesh")
    --> which is the same as:
        sayHello("Umesh")
        
        sayHello prints:
        Hello, Umesh!
*/