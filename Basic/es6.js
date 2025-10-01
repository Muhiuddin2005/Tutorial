// Default: Use const

// Makes your code safer and easier to debug.

// Signals to others (and yourself) that this variable should not be reassigned.



// Default Parameters

// What it is:
// In ES6, you can give a default value to a function parameter. If the caller does not pass that argument, the default is used.

// Why useful:
// Prevents undefined or NaN errors and allows your functions to work even with missing arguments.

// Examples from your code:

// function sum(num1 = 0, num2 = 0) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }

// sum(10);      // num2 defaults to 0 → logs: 10, 0, 10

// Using default for multiplication
// function multiply(num1 = 1, num2 = 1) {
//     const result = num1 * num2;
//     console.log(result)
// }

// multiply()


// function fullName(first, last = '') {
//     const name = first + ' ' + last;
//     console.log(name)
// }

// fullName('kamruzzaman');  // logs: "kamruzzaman"
// If last is not passed, it defaults to an empty string '', so concatenation works without errors.


// Thumb rules for default values
// Operation / Type	Suggested Default Value
// Addition / Subtraction	0
// Multiplication	1
// String	'' (empty string)
// Array	[]
// Object	{}



// Why?

// This avoids undefined or NaN issues.

// Makes functions safer and predictable.









// Function Expression

// Function is stored in a variable.

// Not hoisted — can only be called after declaration.

// const addition = function(num1, num2) {
//     return num1 + num2;
// };

// console.log(addition(10, 20)); 


// Arrow Functions (ES6)

// Shorter syntax.

// Automatically returns expression if single line without {}.

// Useful for simple functions.

// const add2 = (num1, num2) => num1 + num2;
// const multiply = (a, b) => a * b;
// const isFirstBig = (x, y) => x > y;

// console.log(add2(17, 13));      // 30
// console.log(multiply(5, 7));    // 35
// console.log(isFirstBig(5, 12)); // false




// Multi-line Arrow Function

// Use {} and return when you have multiple steps inside the function.

// Can include intermediate variables and calculations.

// const doMath = (x, y) => {
//     const makeDouble = x * 2;
//     const againDouble = y * 2;
//     const result = makeDouble + againDouble;
//     return result;
// };

// console.log(doMath(3, 5)); // 16





// Example with Function Declaration (hoisted):
// console.log(add(5, 3)); // 8 → works even before the function is declared

// function add(a, b) {
//     return a + b;
// }


// Here, add works even if called before the declaration because function declarations are hoisted.

// Example with Function Expression (not hoisted):
// console.log(addition(5, 3)); // ❌ Error: Cannot access 'addition' before initialization

// const addition = function(a, b) {
//     return a + b;
// }







// // No parameter
// const logIt = () => console.log(78);

// If no parameter, you must use ().

// console.log(logIt());             // 78 and undefined (because logIt() itself doesn't return anything)

// Anonymous functions

// Functions without a name.

// Often used directly as arguments to other functions, like event handlers:

// document.getElementById('btn-click').addEventListener('click', () => {
//     console.log('Button clicked!');
// });










// const numbers = [87, 118, 5, 91];
// console.log(numbers);      // [87, 118, 5, 91]
// console.log(...numbers);   // 87 118 5 91 (spread into separate values)


// const max = Math.max(...numbers); // equivalent to Math.max(87, 118, 5, 91)
// console.log(max); // 118


// const first = [1, 2, 3, 4, 5];
// const second = first; // points to the same array
// second.push(6);
// console.log(first);  // [1, 2, 3, 4, 5, 6] -> first also changed


// const second = [...first];  // copies values
// second.push(6);
// console.log(first);   // [1, 2, 3, 4, 5] -> original not changed
// console.log(second);  // [1, 2, 3, 4, 5, 6]


// const third = [0, ...first, 97, 45, 12];
// console.log(third); // [0, 1, 2, 3, 4, 5, 97, 45, 12]

// const ages = [45, 45, 1];
// const prices = [98, 65, 45];
// const all = [...ages, 5555, ...prices];
// console.log(all); // [45, 45, 1, 5555, 98, 65, 45]


// const person = { name: 'Parmisan', age: 25 };
// const employee = { designation: 'dev', ...person };
// console.log(employee);
// // { designation: 'dev', name: 'Parmisan', age: 25 }


// const total = (a, b, c) => a + b + c;
// const digits = [78, 55, 66];
// const result = total(...digits); // equivalent to total(78, 55, 66)
// console.log(result); // 199







// Object Destructuring

// Object destructuring allows you to extract properties from an object into variables easily.

// const product = { name: 'shirt', price: 500, quantity: 7 };

// // extract properties
// const { price, quantity, tax = 7 } = product;

// console.log(price);    // 500
// console.log(quantity); // 7
// console.log(tax);      // 7 (default value used because object has no `tax`)


// Notes:

// You can provide default values like tax = 7.

// It saves you from repeatedly writing product.price, product.quantity, etc.


// Array Destructuring

// Array destructuring allows you to assign array elements to variables quickly.

// const numbers = [25, 88, 89, 101];
// const [first, second] = numbers;

// console.log(first);  // 25
// console.log(second); // 88


// Another example:

// const [math, physics] = [90, 99];
// console.log(physics); // 99

// Using Destructuring in Calculations

// Destructuring makes code cleaner when working with object properties:

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// console.log(totalAmount);

// Instead of repeatedly writing product.price, you just use price directly after destructuring.






// Object.keys(), Object.values(), Object.entries()

// These help you work with objects like arrays.

// const employee = {
//   name: 'Raja Rani',
//   designation: 'QA',
//   salary: '20000',
//   experience: 1
// };

// const keys = Object.keys(employee);     // ['name', 'designation', 'salary', 'experience']
// const values = Object.values(employee); // ['Raja Rani', 'QA', '20000', 1]
// const entries = Object.entries(employee);
// // [
// //   ['name', 'Raja Rani'],
// //   ['designation', 'QA'],
// //   ['salary', '20000'],
// //   ['experience', 1]
// // ]


// ✅ keys → property names
// ✅ values → property values
// ✅ entries → array of [key, value] pairs (useful in loops)

// Object.freeze()

// When you freeze an object:

// ❌ Cannot add new properties

// ❌ Cannot delete properties

// ❌ Cannot modify property values

// const employee = { name: 'Raja Rani', salary: 20000 };
// Object.freeze(employee);

// employee.salary = 25000;  // ❌ ignored
// employee.location = 'Dhaka'; // ❌ ignored
// delete employee.name; // ❌ ignored

// console.log(employee); // { name: 'Raja Rani', salary: 20000 }

// Object.seal()

// When you seal an object:

// ❌ Cannot add new properties

// ❌ Cannot delete properties

// ✅ Can modify existing property values

// const employee = { name: 'Raja Rani', salary: 20000 };
// Object.seal(employee);

// employee.salary = 25000;  // ✅ allowed
// employee.location = 'Dhaka'; // ❌ ignored
// delete employee.name; // ❌ ignored

// console.log(employee); // { name: 'Raja Rani', salary: 25000 }


// Think: 🔒 Seal = locked shape, but values can still change.

// Using Object.keys() + for...of
// const keys = Object.keys(employee);
// for (const key of keys) {
//   const value = employee[key];
//   console.log(key, value);
// }








// Why this is useful

// Without optional chaining, accessing a deep property can throw:

// const user = {};              // user has no address
// console.log(user.address.city); // ❌ TypeError: Cannot read property 'city' of undefined


// With optional chaining:

// const user = {};
// console.log(user.address?.city); // undefined (no error)


// const prop = 'age';
// const p = { age: 22 };
// console.log(p?.[prop]); // 22


// const api = {
//   getName() { return 'Alice'; }
// };

// console.log(api.getName?.()); // 'Alice'
// console.log(api.getAge?.());  // undefined (no error, method missing)







// Array Methods
// (a) map → creates new array by transforming each element
// const nums = [2, 4, 6];
// const doubled = nums.map(x => x * 2); // [4, 8, 12]

// (b) forEach → runs function on each element (no new array)
// nums.forEach(x => console.log(x * 2));

// (c) filter → keeps elements that match condition
// const nums = [5, 10, 15];
// const evens = nums.filter(x => x % 2 === 0); // [10]

// (d) find → returns first matching element
// const nums = [5, 10, 15];
// const firstEven = nums.find(x => x % 2 === 0); // 10




// What is reduce()?

// reduce() is an array method in JavaScript.

// It is used to take an array and reduce it into a single value (number, string, object, etc.).

// Think of it like a “machine” that goes through each item in your array and combines them step by step into one final result.

// 🟢 Syntax
// array.reduce((accumulator, currentValue, index, array) => {
//     // logic here
// }, initialValue);

// Parameters:

// accumulator (acc) → the "total" or "collected result" so far.

// currentValue (curr) → the current element being processed.

// index (optional) → index of the current element.

// array (optional) → the full array itself.

// initialValue (optional, but recommended) → starting value of acc.

// 🟢 Example 1: Summing Numbers
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10


// 👉 Step by step:

// Start with acc = 0 (because we gave initialValue = 0).

// First round: acc = 0 + 1 = 1

// Second round: acc = 1 + 2 = 3

// Third round: acc = 3 + 3 = 6

// Fourth round: acc = 6 + 4 = 10

// ✅ Final result = 10

// 🟢 Example 2: Multiply Numbers
// const nums = [2, 3, 4];

// const product = nums.reduce((acc, curr) => acc * curr, 1);

// console.log(product); // 24


// 👉 Step by step:

// Start with acc = 1

// 1 * 2 = 2

// 2 * 3 = 6

// 6 * 4 = 24

// ✅ Result = 24

// 🟢 Example 3: Find Maximum
// const nums = [10, 25, 3, 99, 4];

// const max = nums.reduce((acc, curr) => {
//     return acc > curr ? acc : curr;
// }, nums[0]);

// console.log(max); // 99


// 👉 Explanation:

// Start with acc = 10

// Compare with each number:

// max(10,25) → 25

// max(25,3) → 25

// max(25,99) → 99

// max(99,4) → 99

// ✅ Result = 99

// 🟢 Example 4: Counting with Reduce

// Suppose we want to count how many times each fruit appears:

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(count);
// // { apple: 3, banana: 2, orange: 1 }


// 👉 Explanation:

// Start with {} (empty object).

// For each fruit:

// If it doesn’t exist, set count = 1.

// If it exists, add +1.

// ✅ Final result = { apple: 3, banana: 2, orange: 1 }





// Real Example with Students
// const students = [
//   { id: 1, name: 'abul', marks: 50 },
//   { id: 2, name: 'Nabul', marks: 85 },
//   { id: 3, name: 'kabul', marks: 95 },
// ];

// // map → transform marks
// const weighted = students.map(s => s.marks * 0.75); // [37.5, 63.75, 71.25]

// // filter → select students
// const good = students.filter(s => s.marks > 80); // Nabul, kabul

// // find → first good student
// const top = students.find(s => s.marks > 80); // Nabul













// 1. Class

// A class is like a blueprint or template.

// From this template, you can create objects (real instances).

// 👉 Example:

// class Player {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     goal() {
//         console.log("Scored a goal!");
//     }
// }


// Here:

// Player is a class (template).

// constructor sets up initial values.

// goal() is a method (function inside a class).

// 👉 Creating objects:

// const player1 = new Player("Messi", 36);
// console.log(player1.name); // Messi
// player1.goal(); // Scored a goal!

// 2. Constructor

// Special function inside a class.

// Runs automatically when a new object is created.

// Used for setting initial values (this.name, this.age, etc).

// 👉 Think: “Whenever I build a new car, the constructor installs the engine and wheels.”

// 3. Object

// An instance of a class.

// Contains its own properties (data) and can use methods (functions).

// 👉 Example:

// const dog1 = new Dog("Tommy", "German Shepherd", 3);


// Here dog1 is an object → created from the Dog class.

// 4. Inheritance

// A class can inherit properties and methods from another class using extends.

// Child class uses super() to call parent’s constructor.

// 👉 Example:

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// }

// const dog1 = new Dog("Tommy");
// dog1.eat();   // from Animal
// dog1.bark();  // from Dog


// 👉 Dog inherits from Animal → so it gets both eat() and bark().

// 5. Private Properties

// In JavaScript, you can make something private using #.

// Private = cannot be accessed directly from outside.

// 👉 Example:

// class Vehicle {
//     #tin; // private property
//     constructor(type, brand, price) {
//         this.type = type;
//         this.brand = brand;
//         this.price = price;
//         this.#tin = "SECRET123";
//     }
//     getTin() {
//         return this.#tin;
//     }
// }

// const car1 = new Vehicle("Car", "Toyota", 500000);
// console.log(car1.getTin()); // SECRET123 ✅
// console.log(car1.#tin);     // ❌ Error (private)

// 6. this keyword

// Refers to the current object.

// In normal functions inside an object/class, this points to that object.

// In arrow functions, this does not bind to the object → it looks outside.

// 👉 Example:

// const student = {
//     name: "Rahul",
//     getScore: function() {
//         console.log(this.name); // "Rahul"
//     },
//     getScoreArrow: () => {
//         console.log(this.name); // undefined (arrow doesn't bind `this`)
//     }
// };
// student.getScore();
// student.getScoreArrow();



// Encapsulation

// Now let’s explain this clearly after all the above.

// 🔹 Definition:
// Encapsulation = wrapping data (properties) and methods inside a class, and restricting direct access to protect data.

// 🔹 In your code:

// class Vehicle {
//     #tin; // private
//     constructor(type, brand, price) {
//         this.type = type;
//         this.brand = brand;
//         this.price = price;
//         this.#tin = "12412QWSAS";
//     }
//     getTin() {
//         return this.#tin;  // controlled access
//     }
// }


// Here, #tin is hidden (encapsulated).

// You can’t change it directly → only accessible through getTin() method.

// 🔹 Real-life analogy:
// Think of your ATM account:

// Your balance is private (bank doesn’t let you directly touch database).

// You interact using methods like deposit() and withdraw().

// That’s encapsulation → hides data, gives controlled access.

// ✅ Encapsulation summary:

// Keeps data safe.

// Allows controlled access via methods.

// Prevents unwanted changes.

// Makes code clean and secure.