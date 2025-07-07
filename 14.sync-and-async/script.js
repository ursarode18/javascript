console.log("Syncronous and Asynchronous JavaScript");

/* 
    ==> Synchronous:
    --> Code that runs in sequence, one after another. Each operation must complete before the next one starts.
    --> In synchronous excecution, code runs line by line, and each line must finish executing before the next one line starts.
    --> This can lead to delays if a task takes a long time (e.g. Fetching data from a server).
    --> Characteristics:
        - Blocking: The next line of code waits for the previous one to finish.
        - Predictable order of execution.

    --> Example:
        console.log("Step 1");
        console.log("Step 2");
        console.log("Step 3");
    
    ==> Asynchronous:
    --> Code that can run independently of the main program flow. 
    --> It allows other operations to continue while waiting for a task to complete.
    --> In asynchronous execution, certain operations can be initiated and will run in the background,
        allowing the rest of the code to continue executing without waiting for the task to finish.
    --> Characteristics:
        - Non-blocking: Other code can run while waiting  for an operation (like a network request) to complete.
    
    --> Example:
        console.log("start the code");
        setTimeout(() => {
            console.log("Step 2 (after 2 seconds)");
        }, 2000);
        console.log("End the code");  

    ==> Sync vs Async:
    ==== Synchronous =====                             ===== Asynchronous ====
    Execution line by line                      Executes tasks in the background, allowing other code to run

    Blocks further execution until task is      Does not block can continue running while waiting for 
    complete.                                   task to finish.

    Easier to read  &  understand for           More complex but essential for handling tasks like API(Application Programming 
    simple tasks.                               Interface) calls, timers, etc...
   
*/

// Synchronous Example
console.log("step 1");
console.log("step 2");
console.log("step 3");
/* 
    output:    
    step 1
    step 2
    step 3
*/


// Asynchronous Example
console.log("start the code");
setTimeout(() => {
    console.log("Step 2 (after 2 seconds)");
}, 2000);
console.log("End the code");

/* 
    output:    
    start the code
    End the code
    Step 2 (after 2 seconds)
*/

