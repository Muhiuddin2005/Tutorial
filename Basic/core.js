// 👉 undefined means:

// "The variable exists, but no value has been assigned yet."

// JavaScript creates a placeholder but leaves it empty.

// Example:

// let money;
// console.log(money); // undefined


// Here:

// money is declared but not assigned → so output is undefined.


// Function without all arguments

// If you don’t pass all the required parameters → missing ones become undefined.

// function total(a, b) {
//     console.log(a, b);
//     const sum = a + b;
//     console.log(sum);
// }

// total(5); // a=5, b=undefined


// 👉 5 + undefined = NaN (Not a Number).


// Difference between undefined and null

// undefined = JavaScript gives automatically when something is missing.

// null = You set it manually to say “empty” or “nothing”.


// let x;          // undefined (not assigned)
// let y = null;   // null (manually set to empty)











// Falsy values in JavaScript

// Only 7 values are falsy:

// false
// 0
// -0
// 0n        // BigInt zero
// ""        // empty string
// null
// undefined
// NaN



// let data;
// data = 0;       // falsy
// data = '';      // falsy
// data = ' ';     // truthy (space counts as a character)
// data = '0';     // truthy (string is never falsy unless empty)
// data = false;   // falsy
// data = true;    // truthy
// data = null;    // falsy
// data = {};      // truthy (empty object is still truthy)
// data = [];      // truthy (empty array is also truthy)
// data = false;   // falsy
// data = true;    // truthy
// data = [];      // truthy



// console.log('value of data', data); 
// // output: value of data []








// console.log({} == {});   // false
// 👉 Two different object references → always false.

// js
// Copy code
// console.log([5] == [5]); // false
// 👉 Different array objects in memory → false.


// const p = [4, 5, 7, 8];
// const q = p;
// console.log(p == q);     // true
// 👉 p and q point to the same array reference → true.


// console.log(2 === 2);         // true  (same type, same value)
// console.log(2 === '2');       // false (number vs string)
// console.log(1 === 2);         // false (different numbers)
// console.log(true === 1);      // false (boolean vs number)
// console.log(false === 0);     // false (boolean vs number)
// console.log(null === undefined); // false (different types)
// console.log(0 === '');        // false (number vs string)
// console.log([] === '');       // false (array vs string)



// console.log(null == undefined);   // true   (special rule)
// console.log(NaN == NaN);          // false  (NaN is never equal to itself)
// console.log([] == '');            // true   ([] → "" by toString, then "" == "")
// console.log([5] == '5');          // true   ([5].toString() → "5", then "5" == "5")
// console.log([5] == 5);            // true   ([5].toString() → "5", "5" → number 5)




// Use === almost always (safe, predictable).

// Use == only if you know coercion rules and want them (rare).








// const name = 'Tom Hanks'
// console.log('location', location)
// Here, location is declared later with let.

// Accessing it before declaration → ❌ ReferenceError (Cannot access 'location' before initialization).

// Why? Because of the Temporal Dead Zone (TDZ).


// if (true) {
//     const data = 58;
//     console.log('inside the if block', data, name);
//     doMath(88, 999);
// }
// data exists only inside this if block (block scope).


// doMath(88, 999) works because function declarations are hoisted.

// function doMath(a, b) {
//     console.log(a, b)
//     const sum = a + b;
//     const total = sum + 10;
//     function doubleIt(x) {
//         return x * 2;
//     }
// }
// Variables a, b, sum, total, and function doubleIt exist only inside doMath.

// console.log(a, b) outside the function ❌ causes ReferenceError.

// Key Takeaways

// Block Scope (let, const) → Variables live only inside {} blocks.

// Function Scope (function keyword, var) → Variables/functions live inside the function body.

// TDZ (let/const) → You cannot access the variable before it’s declared.

// Hoisting

// var → hoisted + initialized as undefined.

// let / const → hoisted but not initialized (TDZ).

// function doMath → fully hoisted with its body.







// A callback is simply a function that is passed as an argument to another function so that it can be called (executed) later inside that function.


// function greet(name) {
//     console.log('Hello, ' + name);
// }

// function processUserInput(callback) {
//     const name = 'Tom';
//     callback(name); // call the callback
// }

// processUserInput(greet);
// // Output: Hello, Tom
// greet → the callback function

// processUserInput → takes a callback and executes it later

// When processUserInput runs, it calls greet('Tom') internally






// Callback Example
// function pakhiBhai(callMeBack, patro, patri) {
//     console.log('value of patro', patro)
//     if (patri) {
//         callMeBack(patro)
//     } else {
//         console.log('tor kopale biya nai')
//     }
// }

// function callSomeOne(person) {
//     console.log('calling', person)
// }

// Explanation:

// pakhiBhai takes three arguments:

// callMeBack → a function

// patro → string

// patri → boolean

// Inside pakhiBhai:

// If patri is truthy → call the callback: callMeBack(patro)

// Else → print "tor kopale biya nai"

// pakhiBhai(callSomeOne, 'jodu', 'modu')
// // Output:
// // value of patro jodu
// // calling jodu




// Arrow Function Example
// const addFive = x => x + 5
// [1, 2, 3, 5].map(addFive)
// addFive is an arrow function: x => x + 5

// map is a higher-order function (it takes a function as argument)

// Output: [6, 7, 8, 10]









// function multiply(x, y) {
//     x = x + 5;
//     y = y + 5;
//     const mult = x * y;
//     return mult;
// }

// const a = 5;
// const b = 7;
// console.log('before the function call: ', a, b)
// const result = multiply(a, b)
// console.log(result)
// console.log('after the function call: ', a, b)
// a and b are primitive numbers.

// When you pass them to multiply, copies of their values are sent.

// Inside the function, modifying x and y does not change a and b.

// before the function call:  5 7
// 100
// after the function call:  5 7




// const manik = { name: 'manik', balance: 5000 }
// const roton = { name: 'roton', balance: 40000 }

// function totalMoney(person1, person2) {
//     person1.balance = 0;
//     person2.balance = person2.balance / 2
//     const total = person1.balance + person2.balance
//     return total;
// }

// const balance = totalMoney(manik, roton)
// console.log('balance', balance)
// console.log('after function call', manik, roton)
// manik and roton are objects (non-primitive).

// When passed to totalMoney, the function gets a reference to the same objects.

// Changing person1.balance or person2.balance modifies the original objects.
// balance 20000
// after function call { name: 'manik', balance: 0 } { name: 'roton', balance: 20000 }






// arguments object

// Every regular function in JavaScript has a special arguments object.

// It contains all the arguments passed to the function, even if you didn’t declare them in the parameter list.

// It is not a real array (no array methods like map, forEach directly).
// function add(a, b){
//     console.log(arguments)
// }
// add(88, 77, 7, 5, 3)

// [Arguments] { '0': 88, '1': 77, '2': 7, '3': 5, '4': 3 }

// Convert arguments to a real array
// const params = [...arguments]
// console.log(params)


// Using spread operator ..., you can convert arguments into a true array.

// Now you can use array methods like map, filter, etc.




// arguments object (old way)

// function oldAdd(a, b) {
//     console.log(arguments);         // [Arguments] { '0': a, '1': b, ... }
//     const arr = [...arguments];    // convert to array
//     console.log(arr);              // [a, b, ...]
// }

// oldAdd(1, 2, 3, 4);




// Rest Parameters (modern way)

// function newAdd(...args) {
//     console.log(args);             // [1, 2, 3, 4]
// }

// newAdd(1, 2, 3, 4);














// What is a Closure?

// A closure happens when a function “remembers” variables from the place where it was created, even if that function is used outside of that place.

// Practical Real-Life Example

// Suppose you are making a website with a like button 👍.
// Each time someone clicks, the count should increase — but users should not be able to reset or directly change the count from outside.

// function createLikeButton() {
//     let likeCount = 0;  // private variable

//     return function() {  // inner function has access to likeCount
//         likeCount++;
//         console.log("Total Likes:", likeCount);
//     }
// }

// const like = createLikeButton();  

// like(); // Total Likes: 1
// like(); // Total Likes: 2
// like(); // Total Likes: 3





// function greetingMaker(name) {
//     return function(message) {
//         console.log(`${message}, ${name}!`);
//     }
// }

// const greetRahim = greetingMaker("Rahim");
// greetRahim("Hello"); // Hello, Rahim!
// greetRahim("Good Morning"); // Good Morning, Rahim!

// const greetKarim = greetingMaker("Karim");
// greetKarim("Hi"); // Hi, Karim!



// greetingMaker is the outer function.


// How do we know it’s an inner function?

// A function defined inside another function = inner function.

// In this case: function(message) { ... } is inside greetingMaker.


// Here we are calling the outer function greetingMaker.

// It doesn’t return a value like "Hello" or 5.

// Instead, it returns the inner function itself.


// That’s why greetRahim is now pointing to the inner function.


// Outer function: runs once, gives the name.

// Inner function: saved in a variable, can be reused, and remembers the name thanks to closure.


