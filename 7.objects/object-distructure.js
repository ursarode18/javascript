console.log("Object Distructure");

/* 
    ==> Object Destructuring
    --> Object destructuring is a syntax that allows you to extract properties from an object and assign them to variables.
    --> It provides a more concise and readable way to access and work with object properties.
    --> Example:
            const person = {
                name: "John",
                age: 30,
                city: "New York"
            };
            const { name, age } = person;
            console.log(name); // Output: John
            console.log(age);  // Output: 30
*/

let mobile = {
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    year: 2025,
    price: 100000,
    color: "Space Gray",
    storage: "1TB",
    features: ["5G", "A15 Bionic chip", "Dual-camera system"],
    ram: "8GB",
    camera: "12MP",
    battery: "5000mAh",
    weight: "190g",
}

let { brand, model, year, price, color, storage, features } = mobile;

console.log("Mobile Details: ",{ brand, model, year, price, color, storage, features }); 
// Output: Mobile Details:  { brand: 'Apple', model: 'iPhone 16 Pro Max', 
// year: 2025, price: 100000, color: 'Space Gray', storage: '1TB', 
// features: [ '5G', 'A15 Bionic chip', 'Dual-camera system' ] }
console.log("Mobile Features :", mobile.features[1]); // Output: undefined, as there is no 4th element in the features array

/* O/P -
    Mobile Details:  {
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
    year: 2025,
    price: 100000,
    color: 'Space Gray',
    storage: '1TB',
    features: [ '5G', 'A15 Bionic chip', 'Dual-camera system' ] },
    Mobile Features : A15 Bionic chip

*/


