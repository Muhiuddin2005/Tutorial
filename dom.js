// const liCollection = document.getElementsByTagName('li');
// for (const li of liCollection) {
//   console.log(li.innerText);
// }
// It does NOT return a real array. Instead, it returns an HTMLCollection (a special “array-like” object).
// Difference between HTMLCollection and Array

// ✅ Similarities:

// You can access items by index → liCollection[0]

// You can use for...of loop to go through elements.

// ❌ Limitations:

// HTMLCollection does not have array methods like .map(), .forEach(), .filter().





// const foodTitleH1 = document.getElementById('food-title');
// foodTitleH1.innerText = 'Foods I loved to eat';
// const foreignElements = document.getElementsByClassName('foreign');
// for(const element of foreignElements){
//   console.log(element.innerText);
// }
// const spanElements = document.querySelectorAll('#old-dhaka p span');
// for(const span of spanElements){
//   console.log(span.innerText);
// }
// querySelectorAll is more powerful.

// It selects all <span> inside <p> inside id="old-dhaka".

// Then loops and prints each.


// getElementById('id') → Select one element by ID.

// getElementsByTagName('tag') → Select all tags (returns collection).

// getElementsByClassName('class') → Select by class.

// querySelectorAll('CSS selector') → Most flexible, allows CSS-like selection.








// 📘 Notes: querySelector vs querySelectorAll  

// - querySelector(selector) → returns the **first matching element** (or null if not found).  
//   Example: document.querySelector('p'); // selects only the first <p>.  

// - querySelectorAll(selector) → returns **all matching elements** as a NodeList (array-like, not real array).  
//   Example: document.querySelectorAll('p'); // selects all <p> tags.  

// 🔑 Key Differences:
// - querySelector → single element.  
// - querySelectorAll → NodeList of elements.  
// - NodeList is not a real array, but you can loop with for..of or use Array.from() to convert.  
// - querySelectorAll is **static** (doesn’t auto-update when new elements are added).  









// Both NodeList (from querySelectorAll) and HTMLCollection (from getElementsByTagName, getElementsByClassName) are array-like objects, not real arrays.
// That means they don’t have full array methods like .map(), .filter(), .reduce().

// 👉 To make them a real array, you can use Array.from() or the spread operator [... ].

// const liCollection = document.getElementsByTagName('li');
// const liArray = Array.from(liCollection);
// const liArray = [...liCollection];









// 📘 Notes: HTMLCollection vs NodeList  

// 🔑 HTMLCollection  
// - Returned by: getElementsByTagName(), getElementsByClassName(), etc.  
// - Live → auto-updates if DOM changes.  
// - Only contains element nodes.  
// - Example:  
//   const items = document.getElementsByTagName('li');  
//   items.length // updates if new <li> is added.  

// 🔑 NodeList  
// - Returned by: querySelectorAll(), childNodes, etc.  
// - Static → does NOT auto-update (snapshot).  
// - Can contain text, comment, and element nodes.  
// - Example:  
//   const items = document.querySelectorAll('li');  
//   items.length // stays the same even if new <li> is added.  

// 📝 Quick Comparison  
// - HTMLCollection → live, elements only.  
// - NodeList → static, can include other node types.  


// <ul id="fruits">
//   <li>Apple</li>
//   <li>Mango</li>
// </ul>

// <script>
//   // Live collection (HTMLCollection)
//   const liveItems = document.getElementsByTagName('li');

//   // Static collection (NodeList)
//   const staticItems = document.querySelectorAll('li');

//   console.log("Initial live count:", liveItems.length);   // 2
//   console.log("Initial static count:", staticItems.length); // 2

//   // Add a new <li>
//   const ul = document.getElementById('fruits');
//   const newItem = document.createElement('li');
//   newItem.innerText = 'Banana';
//   ul.appendChild(newItem);

//   console.log("After append live count:", liveItems.length);   // 3 ✅ auto-updated
//   console.log("After append static count:", staticItems.length); // 2 ❌ not updated
// </script>








// getElementsByClassName → HTMLCollection → Live

// Automatically updates if new elements with that class are added.

// Good for things like counting items, tracking live elements.

// querySelectorAll → NodeList → Static

// Does not update when new elements are added.

// Good for one-time tasks like styling or processing elements that exist now.










// 📘 Notes: Dynamic Style, getAttribute, setAttribute, innerText, innerHTML  

// 1️⃣ Dynamic Style  
// - Change CSS of an element dynamically using `.style`.  
// - Example:  
//   const para = document.getElementById('myPara');  
//   para.style.color = 'red';  
//   para.style.fontSize = '20px';  

// 2️⃣ getAttribute()  
// - Get the value of an HTML attribute.  
// - Example:  
//   const img = document.getElementById('myImg');  
//   img.getAttribute('src'); // "apple.png"  

// 3️⃣ setAttribute()  
// - Set or update an HTML attribute.  
// - Example:  
//   img.setAttribute('src', 'banana.png');  
//   img.setAttribute('alt', 'Banana');  

// 4️⃣ innerText  
// - Get or set only **visible text** inside an element.  
// - Example:  
//   const title = document.getElementById('title');  
//   title.innerText = 'New Title';  

// 5️⃣ innerHTML  
// - Get or set **HTML content** inside an element (can include tags).  
// - Example:  
//   const container = document.getElementById('container');  
//   container.innerHTML = '<p style="color:blue">I am a paragraph</p>';  

// 💡 Tips:  
// - innerText → safe for text only  
// - innerHTML → can include HTML, more powerful  
// - getAttribute → read attribute  
// - setAttribute → change or add attribute  
// - .style → change CSS dynamically














// const sections = document.querySelectorAll('section')
// // console.log(sections);
// for(const section of sections){
//     // console.log(section);
//     section.style.backgroundColor = 'lightblue'
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '15px';
//     section.style.padding = '10px';













// for(const section of sections){
//     // section.classList.add('section-card')
// }











// // 1️⃣ Create a new element and set text
// const newChild = document.createElement('li');
// newChild.innerText = 'New born footballer here';

// // 2️⃣ Find the parent element where it will be added
// const playersList = document.getElementById('player-list');

// // 3️⃣ Append the new child to the parent
// playersList.appendChild(newChild);












// // 1. parent node
// const mainContainer = document.getElementById('main-container');

// // 2. create child node
// const placesSection = document.createElement('section');

// // crate h1 
// const h1 = document.createElement('h1');
// h1.innerText = 'Places I want to visit';
// placesSection.appendChild(h1);

// const ul = document.createElement('ul');

// const li1 = document.createElement('li');
// li1.innerText= 'bandorbon';
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li2.innerText= 'Sundorbon';
// ul.appendChild(li2)


// placesSection.appendChild(ul);


// // 3. append placesSEction to the mainContainer
// mainContainer.appendChild(placesSection)


// // easier to create HTML
// const booksSection = document.createElement('section');

// booksSection.innerHTML = `
// <h1>Books I need to read</h1>
// <ul>
//     <li>Physics</li>
//     <li>Chemistry</li>
//     <li>Math</li>
//     <li>Biology</li>
// </ul>
// `
// mainContainer.appendChild(booksSection)














// document.getElementById('players-container')
//   .childNodes[3]         // selects the 4th child node of 'players-container'
//   .childNodes[1]         // selects the 2nd child of that node
//   .parentNode            // goes back to parent
//   .parentNode            // goes up again
//   .parentNode            // goes up again
//   .parentNode            // goes up again
//   .parentNode            // goes up again
//   .parentNode            // goes up again
//   .parentNode            // goes up again



// Avoid long chains of .childNodes and .parentNode.

// Use IDs, classes, and query selectors to directly access elements.

















