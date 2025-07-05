/* 
    ==> date-time.js <==
    This script demonstrates how to work with date and time in JavaScript.
    --> date and time
    --> In JavaScript, the Date object is used to work with dates and times.
    --> The Date object can be created using the Date() constructor.
    --> The Date object can be used to get the current date and time, as well as to manipulate dates and times.
    --> The Date object has methods to get and set the year, month, day, hour, minute, second, and millisecond.
    --> The Date object can also be used to format dates and times.
    --> syntax:
        let date = new Date(); // creates a new Date object with the current date and time
        let year = date.getFullYear(); // gets the year of the date (4 digits, e.g. 2025)
        let month = date.getMonth(); // gets the month of the date (0-11)
        let day = date.getDate(); // gets the day of the month (1-31)
        let hours = date.getHours(); // gets the hour of the date (0-23)
        let minutes = date.getMinutes(); // gets the minutes of the date (0-59)
        let seconds = date.getSeconds(); // gets the seconds of the date (0-59)
*/

let date = new Date(); // creates a new Date object with the current date and time
console.log("Current Date and Time: ", date);
console.log("Year: ", date.getFullYear()); // gets the year of the date (4 digits, e.g. 2025)
console.log("Month: ", date.getMonth() + 1); // gets the month of the date (0-11, so we add 1 for human-readable format)
console.log("Day:", date.getDate()); // gets the day of the month (1-31);
console.log("Hours: ", date.getHours()); // gets the hour of the date (0-23)
console.log("Minutes: ", date.getMinutes()); // gets the minutes of the date (0-59)
console.log("Seconds: ", date.getSeconds()); // gets the seconds of the date (0-59)

// Formatting the date in a human-readable format
let months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
let formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

console.log("Formatted Date: ", formattedDate);
// output: Formatted Date:  July 5, 2025 at 17:24:32

console.log("Month - Year: ", months[date.getMonth()] + ", " + date.getFullYear()); 
// Output: "Month - Year: July, 2025" (example output, will vary based on current date)







