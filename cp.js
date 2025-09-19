// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reverse();
// console.log(result);

// const friends = ['sakib', 'nokib', 'akib', 'rakib', 'bakib', 'taaabul']
// friends.sort();
// console.log(friends);
// =>["akib", "bakib", "nokib", "rakib", "sakib", "taaabul"]
// const ages = [1, 5, 100, 15, 12, 8, 2, 28];
// ages.sort();
// console.log(ages);
// =>[1, 100, 12, 15, 2, 28, 5, 8]
// const sorted_ages = ages.sort(function (a, b) { 
//     return a - b; 
// });
// console.log(sorted_ages);
// ages.sort((a, b) => a - b); // ascending
// ages.sort((a, b) => b - a); // descending

// const employees = [
//   { name: "Ashik", designation: "Content Writer", salary: 25000 },
//   { name: "Atik", designation: "Developer", salary: 29000 },
//   { name: "Abdul Rahim", designation: "Digital Marketer", salary: 21000 },
//   { name: "Asifa", designation: "Web Dev", salary: 29000 }
// ];

// // ✅ Update property
// employees[0].name = "Ashraf";

// // ✅ Access individual values
// console.log(employees[1].salary);       // 29000
// console.log(employees[3].designation);  // "Web Dev"

// // ✅ Looping through the array of objects
// for (const emp of employees) {
//   const person = emp; // each object
//   const personInfo = person.name + ": " + person.salary;
//   console.log(personInfo);
// }



// 🔥 Revision Notes: 2D Arrays (Nested Arrays) + Array Operations + Looping

// 1️⃣ 2D Arrays (Nested Arrays)
// Arrays containing other arrays
// const exam_marks = [
//     [98, 87, 45, 12, 63],
//     [54, 89, 74, 23, 11],
//     [45, 87, 12, 56, 45],
//     [78, 65, 32, 87, 54]
// ];

// // 2️⃣ Accessing Elements
// const first_class_marks = exam_marks[0];      // first sub-array
// console.log(first_class_marks[0]);            // 98 → first element
// console.log(exam_marks[0][0]);               // direct access → same

// // 3️⃣ Updating Values
// exam_marks[0][1] = 66;                       // change 87 → 66

// // 4️⃣ Array Methods on Inner Arrays
// exam_marks[1].pop();                         // removes last element from 2nd row
// exam_marks[1].push(44);                      // adds 44 at the end of 2nd row

// // 5️⃣ Looping Through Nested Arrays
// for(const marks of exam_marks){
//     console.log(marks);                       // prints each inner array
// }


// const products = [25, 25, 25];
// const comp_products = products;  // <-- shallow copy
// comp_products[0] = 15;
// console.log(products);       // [15, 25, 25] ← changed!
// console.log(comp_products);  // [15, 25, 25]
// Deep Copy (Independent Copy)

// To avoid this, you need to create a new independent array:
// // Using a loop
// const comp_products = [];
// for (const product of products) {
//     comp_products.push(product);
// }

// // OR using modern methods
// const new_numbers = [...numbers];          // spread operator
// const new_numbers2 = Array.from(numbers);  // Array.from()
// const new_numbers3 = [].concat(numbers);   // concat
// comp_products[0] = 15;
// products[0] = 55;

// console.log(products);      // [55, 25, 25]
// console.log(comp_products); // [15, 25, 25]
// ...numbers “spreads” all the values into a new array.
// Creates a brand new array with the same values.

// Array.from() Independent like spread operator.
// [].concat(numbers); Concatenates the old array into a new empty array.

// Works the same as spread or Array.from().






// let x = 5; 
// let y = 7; 

// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);





// const phones = [
//     { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
//     { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
//     { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
//     { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
//     { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
//     { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
// ]


// function getCheapestPhone(phones){
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone
//         }
//     }
//     return min;
// }

// const cheap = getCheapestPhone(phones);
// console.log('Cheapest phone is: ', cheap);







// const products = [
//     { name: 'shampoo', price: 300 },
//     { name: 'chiruni', price: 100 },
//     { name: 'shirt', price: 700 },
//     { name: 'pant', price: 1200 }
// ]

// function getShoppingTotal (products){
//     let total = 0;
//     for(const product of products){
//         total = total + product.price;
//     }
//     return total;
// }

// const total = getShoppingTotal(products);
// console.log('total ajke khosabe: ', total);







// const products = [
//     { name: 'shampoo', price: 300, quantity: 2 },
//     { name: 'chiruni', price: 100, quantity: 3 },
//     { name: 'shirt', price: 700, quantity: 5 },
//     { name: 'pant', price: 1200, quantity: 1 },
// ]

// function cartTotal (products){
//     let total = 0;
//     for(const product of products){
//         const thisProductCost = product.price * product.quantity;
//         total = total + thisProductCost;
//     }
//     return total;
// }

// const shoppingCost = cartTotal(products);
// console.log(shoppingCost);







// function discountedPrice(quantity) {
//     if (quantity <= 100) {               // Case 1: 100 or fewer items
//         const total = quantity * 100;    // price = 100 per item
//         return total;
//     }
//     else if (quantity <= 200) {          // Case 2: between 101 and 200
//         const total = quantity * 90;     // price = 90 per item
//         return total;
//     }
//     else {                               // Case 3: more than 200
//         const total = quantity * 70;     // price = 70 per item
//         return total;
//     }
// }

// const total = discountedPrice(201);      // Example: buy 201 items
// console.log(total);                      // Output → 201 * 70 = 14070









/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
*/


// function layeredDiscountedTotal (quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if(quantity <= 100){
//         const total = quantity * first100Price;
//         return total;
//     }
//     else if (quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }











// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(a, b, operation) {
//     if (operation === 'add') {
//         const result = add(a, b);
//         return result;
//     }
//     else if(operation === 'subtract'){
//         const result = subtract(a, b);
//         return result;
//     }
//     else if(operation === 'multiply'){
//         return multiply(a, b);
//     }
//     else if (operation === 'divide'){
//         return divide(a, b);
//     }
//     else {
//         return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
//     }
// }


// const result = calculator(5, 7, 'add');
// console.log(result);












// function multiply(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return 'Please provide a number'
//     }
//     const mult = num1 * num2;
//     return mult;
// }

// const result = multiply(5, 'seven');
// // console.log(result);

// function fullName(first, second) {
//     if (typeof first !== 'string') {
//         return 'First name should be a string';
//     }
//     else if (typeof second !== 'string') {
//         return 'Second Name should be a string';
//     }
//     const full = first + ' ' + second;
//     return full;
// }

// const full = fullName('Akmal')
// // console.log(full);

// function getPrice(product) {
//     if (typeof product !== 'object') {
//         return 'Please provide an object'
//     }
//     const price = product.price;
//     return price;
// }

// // const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' })
// const price = getPrice(5)
// // console.log(price)

// function getSecond(numbers) {
//     if(Array.isArray(numbers) === false){
//         return 'Please provide an array'
//     }
//     const second = numbers[1];
//     return second;
// }

// const second = getSecond([45, 61, 2])
// console.log(second)











// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return i * factorial(i-1);
// }








// function matchedProducts (products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.name.toLowerCase().includes(search.toLowerCase())){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'laptop');
// console.log(result);








// function sum(i){
//     if( i == 1 ){
//         return 1;
//     }
//     return i + sum(i-1);
// }
// const result = sum(5);
// console.log(result);






// const nayok = {
//     name: 'Sakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
//     movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
//     act: function(){
//         console.log('acting like Sakib khan');
//     },
//     car: {
//         brand: 'tesla',
//         price: 50000000,
//         made: 2025,
//         manufacturer: {
//             name: 'tesla',
//             ceo: 'Elon Mask',
//             country: 'USA'
//         }
//     }
// }

// // console.log(student.car);
// console.log(nayok.act);
// nayok.act();

// console.log(nayok.act);

// 👉 This does not call the function.
// It only prints the function definition itself, like:[Function: act]
// nayok.act();

// 👉 This calls (executes) the function.
// So it will print:acting like Sakib khan






