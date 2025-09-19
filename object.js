// // non-primitive
// const subject = {
//     name: 'biology',
//     teacher: 'rasheda mam',
//     examDate: '30 Feb', 
//     chapters: ['first', 'second', 'third'],
//     exams: {
//         name: 'Final Exam',
//         marks: 100
//     }
// }


// const person = {
//     name: 'sodor uddin', 
//     age: 25,
//     profession: 'developer',
//     salary: 25000,
//     married: true,
//     'fav places': ['bandorban', 'saintmartin', 'kuakata']
// }

// // 2. Bracket notation (used if property name has spaces or special characters)
// console.log(person['fav places']);
// person['age'] = 26;

// const computer = {
//     brand: 'lenovo',
//     price: 35000,
//     processor: 'intel',
//     hdd: '512gb', 
//     monitor: 'hp'
// }

// const keys = Object.keys(computer);
// console.log(keys)
// const values = Object.values(computer);
// console.log(values);


const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}
// college.unique.result.merit = 'top top top most'
// console.log(college['unique'].result.merit) 
// college.events[1] = '16 December'
// console.log(college.events[1])
// delete college.class;
// console.log(college)
// const obj = { "fav subject": "Math" };
// console.log(obj["fav subject"]); // ✅ works
// // console.log(obj.fav subject); // ❌ error
// const obj = { 1: "one", 2: "two" };
// console.log(obj[1]); // ✅ works
// const key = "events";
// console.log(college[key]); // ✅ accesses college.events cz dynamic variable

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
};

// ✅ for...in loop → used for OBJECTS
// It gives you the KEYS (property names) of the object
// for (const prop in mobile) {
//     console.log(prop);          // prints property name (key)
//     console.log(mobile[prop]);
//     Brackets let you use a variable as the key.Perfect for loops, dynamic keys, or property names with spaces.   
// prints the value of that property
// ✅ for...of loop → used for ARRAYS or ITERABLES
// const colors = ['red', 'green', 'blue'];

// for (const item of colors) {
//     console.log(item); // prints each value directly
// }

// const keys = Object.keys(mobile);
// console.log(keys);

// for(const key of keys){
//         console.log(key, ':', mobile[key]);}
    
// }
// mobile.key ❌ would look for a property literally named "key", not the value inside the variable.


// 1️⃣ Object literal (most common way)
// const pen = { 
//     brand: 'econo', 
//     price: 10, 
//     color: 'black' 
// };
// console.log(pen);  
// // Output: { brand: 'econo', price: 10, color: 'black' }

// // 2️⃣ Using the Object constructor with 'new'
// const pencil = new Object(); 
// console.log(pencil);  
// // Output: {} → empty object
// // You can add properties later:
// pencil.brand = 'Nataraj';
// pencil.price = 5;
// console.log(pencil);  
// // Output: { brand: 'Nataraj', price: 5 }

// // 3️⃣ Using Object.create()
// // Creates a new object with the specified prototype
// const rubber = Object.create({}); 
// console.log(rubber);  
// // Output: {} → empty object
// // You can also set properties on it later:
// rubber.brand = 'Faber';
// rubber.color = 'white';
// console.log(rubber);  
// // Output: { brand: 'Faber', color: 'white' }



