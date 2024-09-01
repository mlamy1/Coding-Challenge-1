// Task 1: Variables and Data Types

let employeeName = "Cameron Johnson";
const employeeID = 21;
var isActive = true; 

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Airpods, Beats Pill, Sunglasses"];
const productDetails = {
    name: products, 
    price: 150.00,
    inStock: 100,
} 

console.log(products, productDetails);



//Task 3: Assignment Operators

let accountBalance = "2000";
accountBalance += 500; // accountBalance = accountBalance + 500 
console.log("updated accountBalance:", accountBalance); // Output: Updated accountBalance: 2500

accountBalance -= 500; // accountBalance = accountBalance - 500
console.log("Updated accountBalance:", accountBalance); // Output: Updated accountBalance: 500

accountBalance *= 500; // accountBalance = accountBalance * 500
console.log("Updated accountBalance:", accountBalance); // Output: Updated accountBalance: 1,000,000

accountBalance /= 500; // accountBalance = accountBalance / 500
console.log("Updated accountBalance:", accountBalance); // Output: Updated accountBalance: 4

accountBalance %= 500; // accountBalance = accountBalance % 500 
console.log("Updated accountBalance:", accountBalance); // Output: Updated accountBalance: 0 