// const min = Math.min(45, 21, 65, 99, 126, 5, -99)
// console.log(min);
// const max = Math.max(45, 21, 65, 99, 126, 5, -99, 987);
// console.log(max);
// console.log(Math.abs(5-10))
// console.log(Math.round(2.25))
// console.log(Math.round(2.85))
// console.log(Math.floor(2.95))
// console.log(Math.floor(2.99995))
// console.log(Math.ceil(2.99995))
// console.log(Math.ceil(2.00001))
// console.log(Math.random())
// console.log(Math.random()*10)
// const rand = Math.round(Math.random()*10)
// console.log(rand)





// const numbers = [45, 21, 65, 99, 126, 5, -99];
// console.log(Math.min(...numbers));






// ✅ JavaScript Date Basics

// 1. Create Date objects
// const now = new Date()            // current date & time
// console.log(now);

// const fromString = new Date('2062-10-19'); // date from string
// const fromNumbers = new Date(2091, 0, 26); // year=2091, Jan(0), day=26

// // 2. Get values
// fromString.getMonth();   // 0–11 → Oct = 9
// fromString.getDay();     // 0–6  → Sunday=0, Monday=1, ...
// fromString.getDate();    // day of month → 19
// fromString.getFullYear();// year → 2062

// // 3. Set values
// fromNumbers.setMonth(10); // set month to Nov (10 = November)
// fromNumbers.setDate(15);  // set day to 15
// fromNumbers.setFullYear(2100); // change year

// // 4. Format values
// fromNumbers.toLocaleString('en-GB'); // British format → DD/MM/YYYY, HH:MM:SS
// const now2 = new Date().toLocaleString('en-GB'); 
// fromNumbers.toLocaleDateString();    // only date (system locale)
// fromNumbers.toLocaleTimeString();





