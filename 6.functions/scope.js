console.log("We are learning function scope...");

// function local Scope
/* 
    let and const are block-scoped variables, 
    meaning they are only accessible within the block they are defined in.
*/
function localScope() {
    let localVar = "I am a local variable";
    console.log(localVar); // Output: I am a local variable
}   
localScope(); // Output: I am a local variable
//console.log(localVar); // Output: ReferenceError: localVar is not defined (It's local to the function)

// function global Scope
/* 
    global variables are accessible from anywhere in the code,
    including inside functions.
*/
// Global Scope
let globalVar = 10;

let display = () => {
    let globalVar = 10;
    console.log('Inside the display function');
    console.log(`Inside the function`, globalVar); // Output: 10
}
display();
console.log(globalVar); // Output: 10