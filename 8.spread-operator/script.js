console.log("Spread Operator");
/* 
    ==> The spread operator (...) allows an iterable (like an array) to be expanded in places 
        where zero or more arguments or elements are expected.
    --> It can be used to copy arrays, concatenate arrays, or spread elements in function calls.
    --> Example 1: Copying an array
                    const arr1 = [1, 2, 3];
                    const arr2 = [...arr1];
                    console.log(arr2); // Output: [1, 2, 3]
*/

let car = {
    make: "Audi",
    model: "A4",
    year: 2020,
    features: ["Leather seats", "Sunroof", "Bluetooth"],
    price: 40000,
    color: "Red",
    engine: "V6",
};

let car2 = { ...car, model: "X5" };
console.log("My Car Details are: ", car2);

/* 
    My Car Details:  {
    make: 'Audi',
    model: 'X5',
    year: 2020,
    features: [ 'Leather seats', 'Sunroof', 'Bluetooth' ],
    price: 40000,
    color: 'Red',
    engine: 'V6'
}

*/
