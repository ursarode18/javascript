/* 
    ==> if statement
    --> The if statement executes a block of code if a specified condition is true.
        Syntax: if (condition) { // code to execute if condition is true } 
    ==> else statement
    --> The else statement executes a block of code if the condition is false.
        Syntax: 
            if (condition) { // code to execute if condition is true } 
            else { // code to execute if condition is false }
    ==> else if statement
    --> The else if statement allows you to check multiple conditions.
        Syntax: 
            if (condition1) { // code to execute if condition1 is true } 
            else if (condition2) { // code to execute if condition2 is true } 
            else { // code to execute if both conditions are false }
*/
// if statement
let x = 4;
if (x > 5) {
    console.log("x is greater than 5"); // This will execute
}else{
    console.log("x is not greater than 5"); // This will not execute
}
// o/p - x is greater   than 5
/* 
    Logical Operators: && (AND), || (OR), ! (NOT)
    ==> && (AND) operator returns true if both conditions are true.
    ==> || (OR) operator returns true if at least one condition is true.
    ==> ! (NOT) operator negates the condition, returning true if the condition is false.
*/

let age = 28;
let dl = true;

if(age > 18 &&  dl === true){ 
    console.log("You can Drive"); // This will execute
}else{
    console.log("You cannot Drive"); // This will not execute
}   
// o/p - You can Drive

// if else if else statement
let aadhar = false;
let pan = false;
if(aadhar){
    console.log("You can open account in our bank - using Aadhar");
}else if(pan){
    console.log("You can open account in our bank - using PAN");
}else{
    console.log("You cannot open account in our bank");
}


/* 
    ==> switch statement
    --> The switch statement evaluates an expression and executes code based on matching cases.
        Syntax: 
            switch (expression) { 
                case value1: // code to execute if expression matches value1 
                    break; 
                case value2: // code to execute if expression matches value2 
                    break; 
                default: // code to execute if no cases match 
            }
    --> The break statement is used to exit the switch block after executing a case.
    --> The default case is optional and executes if no cases match.
    --> The break statement is used to exit the switch block after executing a case.
    --> The default case is optional and executes if no cases match.
*/
let day = 10;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// o/p - Wednesday
