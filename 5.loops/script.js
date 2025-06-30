// For Loop
/* 
    -->    The for loop is used to execute a block of code a specific number of times.
    -->    It consists of three parts: initialization, condition, and increment/decrement.
    -->    The syntax is:
            for (initialization; condition; increment/decrement) {
                // code to be executed  
            }
        i++ is equivalent to i = i + 1, and i-- is equivalent to i = i - 1.
*/
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration 'Umesh' : " + i);
}
/* 
    O/P
    For Loop Iteration 'Umesh' : 0
    For Loop Iteration 'Umesh' : 1
    For Loop Iteration 'Umesh' : 2
    For Loop Iteration 'Umesh' : 3
    For Loop Iteration 'Umesh' : 4
*/

let n = 2;
for(let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
/* 
    O/P
    2 x 1 = 2
    2 x 2 = 4
    2 x 3 = 6
    2 x 4 = 8
    2 x 5 = 10
    2 x 6 = 12
    2 x 7 = 14
    2 x 8 = 16
    2 x 9 = 18
    2 x 10 = 20
*/
// While Loop
/* 
    -->    The while loop is used to execute a block of code as long as a specified condition is true.
    -->    It checks the condition before executing the block of code.
    -->    The syntax is:
            while (condition) {
                // code to be executed  
            }
    -->    If the condition is false initially, the block of code will not execute at all.
    -->    Be careful to avoid infinite loops by ensuring the condition will eventually become false.
*/  
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration 'Umesh' : " + j);
    j++;
}
/* 
    While Loop Iteration 'Umesh' : 0
    While Loop Iteration 'Umesh' : 1
    While Loop Iteration 'Umesh' : 2
    While Loop Iteration 'Umesh' : 3
    While Loop Iteration 'Umesh' : 4
*/
let m = 1;
do{
    console.log(m);
    m++;    
}while(m < 5);
/* 
    O/P
    1
    2
    3
    4
*/


