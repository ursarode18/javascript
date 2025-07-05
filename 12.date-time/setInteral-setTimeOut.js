/* 
    ==> setInterval()
    -->  The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
     Example:
    setInterval(() => {
        console.log("This message is displayed every 2 seconds");
    }, 2000); // 2000 milliseconds = 2 seconds
    // output: This message is displayed every 2 seconds

    ==> setTimeout()
    --> The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    Example:
    setTimeout(() => {
        console.log("This message is displayed after 3 seconds");
    }, 3000); // 3000 milliseconds = 3 seconds
    // output: This message is displayed after 3 seconds
*/
// setInterval example
/* setInterval(() => {
    console.log("This message is displayed every 2 seconds");    
}, 2000); */
// output: This message is displayed every 2 seconds

// setTimeout example
setTimeout(() =>{
    console.log("This message is displayed after 3 seconds");        
}, 3000); // 3000 milliseconds = 3 seconds
// output: This message is displayed after 3 seconds
