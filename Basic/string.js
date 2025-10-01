// string is immutable --> not changeable
// array is mutable --> you can change the array elements
// const capital = 'Dhaka';
// console.log(capital.length);
// console.log(capital[3]);
// capital[0] = 'F';
// console.log(capital);



// const school = 'RAJ UK Uttara Model School';

// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());



// const subject = 'Chemistry';
// const book = 'ChemIsTry';
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('I am reading book aibar porikkhai fatai felmu');
// }


// const userInput = '   Muhi  ';
// const savedUsername = 'Muhi';

// if (userInput.trim() === savedUsername.trim()) {
//     console.log('Login Successful');
// } else {
//     console.log('Wrong Username');
// }
// .trimStart() or .trimLeft() → Removes spaces only from the LEFT side


// const address = 'Chittagong';
// const part = address.slice(2, 5);
// console.log(part);


// const sentence = 'I am a good and hardworking person.';

// // Split by space
// console.log(sentence.split(' '));
// It looks for spaces " " and cuts the string there
// ["I", "am", "a", "good", "and", "hardworking", "person."]
// // Split by letter 'a'
// console.log(sentence.split('a'));
// It removes every 'a' it finds, then cuts the string at those points.
// ["I ", "m ", " good ", "nd h", "rdworking person."]
// Original string with friends separated by commas


// const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';

// // split(',') → Converts the string into an array by splitting at commas
// const friends = friendsStr.split(',');
// console.log(friends); 
// // Output: [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ]

// // Create a real array of friends directly
// const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];

// // join() without argument → Joins array back into a string using commas (default)
// console.log(realFriend.join()); 
// // Output: "Rahim,kahim,dahim,lahim,fahim,sahim"

// // join('|') → Joins array into a string with '|' between elements
// console.log(realFriend.join('|')); 
// // Output: "Rahim|kahim|dahim|lahim|fahim|sahim"

// // join('-') → Joins array into a string with '-' between elements
// console.log(realFriend.join('-')); 
// // Output: "Rahim-kahim-dahim-lahim-fahim-sahim"


// // String concatenation using .concat()
// const first = 'Abid';
// const last = 'Navid';

// // concat() joins strings together
// // Here: first + " " + last = "Abid Navid"
// const fullName2 = first.concat(' ').concat(last);
// console.log(fullName2);  
// // Output: "Abid Navid"

// // ---------------------------------------

// // String searching with .includes()
// // .includes('x') checks if 'x' exists inside "Navid"
// console.log(last.includes('x'));  
// // Output: false (because "Navid" does not contain "x")

// // Another example:
// console.log(last.includes('Nav')); 
// // Output: true (because "Nav" exists at the start of "Navid")


// const sentence = 'I am learning Web Dev.';

// // Step 1: split('') 
// // Breaks the string into an array of characters
// // Example: ['I',' ','a','m',' ','l','e','a','r','n','i','n','g',' ','W','e','b',' ','D','e','v','.']
// const chars = sentence.split('');

// // Step 2: reverse()
// // Reverses the order of the array elements
// // Example: ['.','v','e','D',' ','b','e','W',' ','g','n','i','n','r','a','e','l',' ','m','a',' ','I']
// const reversedChars = chars.reverse();

// // Step 3: join('')
// // Joins the reversed array back into a string without spaces in between
// // Example: ".veD beW gninrael ma I"
// const reversed = reversedChars.join('');

// console.log(reversed);  
// // Output: ".veD beW gninrael ma I"



// let sentence = "i am learning web development";

// // Step 1: Split the string into words using space
// let words = sentence.split(' '); 
// // ["i", "am", "learning", "web", "development"]

// // Step 2: Capitalize first letter of each word
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     // words[i][0] → first letter
//     // .toUpperCase() → make it capital
//     // .slice(1) → rest of the word unchanged
// }

// // Step 3: Join words back into a single string
// let capitalizedSentence = words.join(' ');

// console.log(capitalizedSentence);
// // Output: "I Am Learning Web Development"

