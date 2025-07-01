console.log("We are lerning arrays in JavaScript!");

/* 
    ==> Array:
    --> An array is a special variable, which can hold more than one value at a time.
    --> An array is a collection of items stored at contiguous memory locations.
    --> It is a data structure that can store multiple values of the same type.
    --> Syntax:
        var array_name = [item1, item2, item3, ...];
    --> Example:
        var fruits = ["apple", "banana", "cherry"];
    --> Accessing elements:
        console.log(fruits[0]); // Output: apple
*/

let person = ["John", 30, "Engineer", true];
let info = ['pune', 'IT', 'Senior Developer', person];

console.log("User name is: ", person[0]); // Output: John
console.log(info[3]); // Output: [ 'John', 30, 'Engineer', true ]
console.log(`User name is "${person[0]}" and his age is "${person[1]}" and he is in "${info[1]}" department as a "${info[2]}". ` ); 
// Output: User name is "John" and his age is "30" and he is in "IT" department as a "Senior Developer".

for (let i = 0; i < info.length; i++) {
    const element = info[i];
    console.log(`Element at index ${i} is: ${element}`);
}
/* 
    let info = ['pune', 'IT', 'Senior Developer', person];
    Output:
    Element at index 0 is: pune
    Element at index 1 is: IT
    Element at index 2 is: Senior Developer
    Element at index 3 is: John,30,Engineer,true
*/




