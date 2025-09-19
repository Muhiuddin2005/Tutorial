// function isOdd(number){
//     if(number % 2 === 1){
//         return true;
//     }
//     return false;
// }

// console.log(isOdd(10));
// console.log(isOdd(7));


// function getAge(person){
//     const age = person.age;
//     return age;
// }


/**
 * create function that will return only the even numbers
 * return the sum and avg of even numbers
*/

// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             // console.log(number);
//             odds.push(number);
//         }
//     }
//     // odds is the array that contains only the odd numbers 
//     // console.log(odds)
//     let sum = 0;
//     for (const number of odds) {
//         sum = sum + number;
//     }
//     const count = odds.length;
//     console.log(sum, count);
//     const avg = sum / count;
//     return avg;
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is: ', avg);




/**
 * array has some duplicate elements
 * []
*/

// const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
// const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];


// function noDuplicate(array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = noDuplicate(numbers);
// console.log(uniqueArray);








