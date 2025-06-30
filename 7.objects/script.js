console.log('We are learning objects');

/* 
    ==> Objects
    --> Objects are a collection of key-value pairs.
    --> They can contain any data type, including other objects and functions.
    --> Objects are defined using curly braces {}.
    --> Each key-value pair is separated by a comma.
    --> Keys are strings (or Symbols) and values can be of any 
        datatype(integer, float, string, array, function, etc.).

    --> Accessing values can be done using dot notation or bracket notation.
    --> Example:
                const person = { 
                    name: 'John',
                    age: 30,
                    greet: function() {
                        console.log('Hello, my name is ' + this.name);
                    }
                };
                console.log(person.name); // Output: John
                person.greet(); // Output: Hello, my name is John
*/

let person = {
    name: "Swati",
    age: 28,
    greet: function(){
        //console.log(`Hello, my name is ${this.name} & I am ${this.age} years old.`);
        return (`Hello, my name is ${this.name} & I am ${this.age} years old.`);
    }
};

console.log(person.name); // Output: Swati
person.greet() // Output: Hello, my name is Swati & I am 28 years old.
console.log(person.greet());

