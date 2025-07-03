console.log("Adv. Loop");

/* 
    ==> Adv. Loop

    ==> for in Loop
    --> The for...in loop is used to loop through the keys (property names) of 
        an object or the indexes of an array one by one.
    --> Example
        let mobile = {
            brand: "Apple",
            model: "iPhone 13 Pro Max",
            color: "Space Gray",
            price: 1000,
            ram: "16GB",
            storage: "256GB",
            camera: "12MP",
            battery: "8000mAh",
            features: "Face ID, 5G, A15 Bionic Chip"
        }
        for(let key in mobile){
            console.log(key + " : " + mobile[key]);
        }
    --> Output
        brand : Apple
        model : iPhone 13 Pro Max
        color : Space Gray
        price : 1000
        ram : 128GB
        }
*/

    let mobile  = {
            brand: "Apple",
            model: "iPhone 13 Pro Max",
            color: "Space Gray",
            price: 1000,
            ram: "16GB",
            storage: "256GB",
            camera: "12MP",
            battery: "8000mAh",
            features: "Face ID, 5G, A15 Bionic Chip"
        }

    for (let key in mobile){
      // fetch only key
       console.log(key); // output: brand, model, color, price, 
       // ram, storage, camera, battery, features      
    }
      
    for(let key in mobile){
        // fetch only value
        console.log(mobile[key]); 
        // output: Apple, iPhone 13 Pro Max, Space Gray, 1000, 16GB, 
        // 256GB, 12MP, 8000mAh, Face ID, 5G, A15 Bionic Chip
    }

    for (let key in mobile) {
       // fetch key & value
       console.log(key + " : " + mobile[key]);
       // output: brand : Apple, model : iPhone 13 Pro Max, color : Space Gray, price : 1000, 
       // ram : 16GB, storage : 256GB, camera : 12MP, battery : 8000mAh, features : Face ID, 5G, A15 Bionic Chip
    }
    

/* 
    ==> for...of Loop
    --> The for...of loop lets you go through each item in an array, 
        string, or other list-like collection one by one.
    --> Example:
            let colors = ["red", "green", "blue", 'black', 'white'];

            for (let color of colors) {
                console.log(color);  
            }
            Output:
                red
                green
                blue
                black
                white
*/

let colors = ["red", "green", "blue", "black", "white"];
for (let color of colors){
    console.log(color);    
}
/* 
    Output:
        red
        green
        blue
        black
        white
*/

/* 
    ==> foreach loop
    --> The foreach loop is used to loop through the items of an array one by one.
    --> Example:
            let colors = ["red", "green", "blue", "black", "white"];
            colors.forEach(function(color){
                console.log(color);
            });
            Output:
                red
                green
                blue
                black
                white
*/
    let fruits  = ["apple", "banana", "orange", "mango", "grape"];
    fruits.forEach(function(fruit){
        console.log(fruit);
    });
/* 
    Output:
        apple
        banana
        orange
        mango
        grape
*/
    

