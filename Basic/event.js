// Using onclick directly in the HTML tag.
// <button onclick="console.log(7)">Click me</button>
// <button onclick="console.log('i am clicked')">Third button</button>
// You can define a JavaScript function and call it via onclick.
// <button onclick="makeYellow()">Make Yellow</button>
// <button onclick="makeRed()">Make Red</button>
// function makeYellow() {
//     document.body.style.backgroundColor = 'yellow';
// }

// function makeRed() {
//     document.body.style.backgroundColor = 'red';
// }


// Get an element in JS using getElementById and assign a function to onclick.
// document.getElementById('btn-make-blue').onclick = function() {
//     document.body.style.backgroundColor = 'blue';
// };



// Using addEventListener (Recommended)
// document.getElementById('btn-make-green').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'green';
// });

// document.getElementById('btn-make-gold').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'goldenrod';
// });


// document.getElementById('btn-update-title')
//     .addEventListener('click', function () {
//         // console.log('btn clicked')
//         const pageTitleElement = document.getElementById('page-title');
//         console.log(pageTitleElement);
//         pageTitleElement.innerText = 'Updated page title text.'
//     })


// document.getElementById('btn-login')
//     .addEventListener('click', function () {
//         const userInfoEl = document.getElementById('user-info');
//         userInfoEl.innerText = 'user logged In successfully'
//     })








// event.target	The element that triggered the event
// event.type	Type of the event (click, keypress, mouseover…)
// event.clientX / event.clientY	Mouse position on the page (for mouse events)
// event.key	Key pressed (for keyboard events)
// event.preventDefault()	Stops default browser behavior (like form submission or link navigation)


// btn.addEventListener('click', function(event) {
//     alert('You clicked: ' + event.target.innerText);
// });


// document.body.addEventListener('mousemove', function(event) {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
// });



// document.addEventListener('keydown', function(event) {
//     console.log('Key pressed: ' + event.key);
// });



// <a href="https://google.com" id="myLink">Go to Google</a>
// <script>
// const link = document.getElementById('myLink');
// link.addEventListener('click', function(event) {
//     event.preventDefault(); // stops navigating to Google
//     alert('Link clicked but navigation prevented!');
// });
// </script>




// 1️⃣ Mouse Events

// Mouse events happen when the user interacts with the mouse.

// Event	Description
// click	Triggered when an element is clicked
// dblclick	Triggered when an element is double-clicked
// mousedown	Triggered when mouse button is pressed down
// mouseup	Triggered when mouse button is released
// mouseenter	Triggered when mouse enters an element
// mouseleave	Triggered when mouse leaves an element
// mousemove	Triggered when mouse moves inside an element


// 2️⃣ Key Events

// Key events happen when the user interacts with the keyboard.

// Event	Description
// keydown	Triggered when a key is pressed down
// keyup	Triggered when a key is released


// 3️⃣ Window Events

// Window events happen on the browser window or document itself.

// Event	Description
// load	Triggered when the page fully loads (HTML, CSS, JS, images)
// resize	Triggered when the browser window is resized
// scroll	Triggered when the user scrolls the page
// beforeunload	Triggered when the user tries to leave the page
// unload	Triggered when the page is unloaded (closed or navigated away)


// submit → triggers when a form is submitted, can prevent default reload.

// change → triggers when input or select value changes and loses focus.

// focus → triggers when an input or element gains focus.

// Always use addEventListener to attach these events.






// 6️⃣ Step-by-Step Flow in This Code

// User types a name in the input box.

// User clicks the "update" button.

// Event listener triggers the function.

// JS gets the input value.

// JS updates the paragraph text with the input value.

// Console logs show what’s happening at each step.

// 🔑 Key Takeaways for Beginners

// Use addEventListener for handling events.

// Use getElementById to access elements.

// Input values are read using .value.

// Update page content using .innerText or .innerHTML.

// console.log is your friend for debugging.









// // ===========================
// // COMMENT BOX DYNAMIC EXAMPLE
// // ===========================

// // Step 1: Select the button using its ID and set a click event listener
// const postBtn = document.getElementById('btn-post-comment');
// postBtn.addEventListener('click', function () {
    
//     // Step 2: Get the textarea input
//     const commentTextBox = document.getElementById('comment-text-box');
//     const newComment = commentTextBox.value; // the text typed by user
    
//     // Step 3: Find the parent container where new comments will be added
//     const commentContainer = document.getElementById('comment-container');

//     // Step 4: Create a new <p> element to hold the comment
//     const commentElement = document.createElement('p');
//     commentElement.classList.add('comment'); // add styling class
//     commentElement.innerText = newComment;   // set the text

//     // Step 5: Append the new comment to the parent container
//     commentContainer.appendChild(commentElement);

//     // Step 6: Clear the textarea for the next comment
//     commentTextBox.value = '';
// });












// // ===========================
// // MORE EVENTS EXAMPLE WITH BASIC ACTIONS
// // ===========================

// // MOUSE EVENTS ON BUTTON
// const mouseBtn = document.getElementById('btn-mouse');

// // mouseenter -> change button background when mouse enters
// mouseBtn.addEventListener('mouseenter', function(){
//     mouseBtn.style.backgroundColor = 'lightblue';
//     mouseBtn.innerText = 'Mouse Entered!';
// });

// // mousemove -> track movement: change text to show moving
// mouseBtn.addEventListener('mousemove', function(){
//     mouseBtn.style.color = 'red';
//     mouseBtn.innerText = 'Mouse Moving!';
// });

// // mouseout -> reset button when mouse leaves
// mouseBtn.addEventListener('mouseout', function(){
//     mouseBtn.style.backgroundColor = '';
//     mouseBtn.style.color = '';
//     mouseBtn.innerText = 'Micky mouse minnie';
// });


// // FOCUS AND BLUR EVENTS ON INPUTS
// const userName = document.getElementById('user-name');
// const userEmail = document.getElementById('user-email');

// // focus -> highlight input border when typing starts
// userName.addEventListener('focus', function () {
//     userName.style.border = '2px solid green';
// });
// userEmail.addEventListener('focus', function () {
//     userEmail.style.border = '2px solid green';
// });

// // blur -> remove highlight when typing ends
// userName.addEventListener('blur', function () {
//     userName.style.border = '';
// });
// userEmail.addEventListener('blur', function () {
//     userEmail.style.border = '';
// });


// // KEYBOARD EVENTS
// // keydown -> show what key is pressed in a placeholder (live feedback)
// userName.addEventListener('keydown', function (event) {
//     userName.placeholder = 'Key Pressed: ' + event.key;
// });

// // keyup -> display typed value in placeholder
// userName.addEventListener('keyup', function (event) {
//     userName.placeholder = 'Typing: ' + event.target.value;
// });

// // =================================
// // KEY CONCEPTS AND TIPS FOR BEGINNERS
// // =================================

// // 1. Mouse Events:
// //    - mouseenter: perform action when mouse enters (e.g., change color)
// //    - mousemove: perform action while mouse moves inside element (e.g., text change)
// //    - mouseout: reset changes when mouse leaves element

// // 2. Focus & Blur Events:
// //    - focus: visually highlight the input box when user starts typing
// //    - blur: remove highlight when user finishes typing

// // 3. Keyboard Events:
// //    - keydown: trigger action while key is pressed (e.g., show key pressed)
// //    - keyup: trigger action after key release (e.g., display typed text)







{/* <input id="user-name" placeholder="Type something" type="text">
<script>
const userName = document.getElementById('user-name');

userName.addEventListener('keydown', function(event){
    userName.style.backgroundColor = 'lightyellow'; // highlight input while typing
    userName.placeholder = 'Key Pressed: ' + event.key;
});

userName.addEventListener('keyup', function(event){
    userName.style.backgroundColor = 'white'; // reset background
    userName.placeholder = 'Typing: ' + event.target.value;
});
</script>







<input id="password" placeholder="Type 'open'">
<button id="door" disabled>Open Door</button>
<p id="door-msg">Door is locked</p>

<script>
document.getElementById('password').addEventListener('keyup', function(event){
    const text = event.target.value;
    const doorButton = document.getElementById('door');
    const doorMsg = document.getElementById('door-msg');
    
    if(text === 'open'){
        doorButton.removeAttribute('disabled');
        doorMsg.innerText = 'Door is open!';
    } else {
        doorButton.setAttribute('disabled', true);
        doorMsg.innerText = 'Door is locked';
    }
});
</script>









Event Bubbling

When you click on an element (like a <li>), the event doesn’t stop there.

It "bubbles up" through its parent → grandparent → all the way to <body> and <html>.

Example: Click <li> → event also reaches <ol> → <section> → <body>.


Events bubble up through parent elements by default.

Multiple listeners can exist on the same element.

stopPropagation() → stops bubbling upwards.

stopImmediatePropagation() → stops bubbling + stops other listeners on the same element.





keydown → Old value, good for restrictions/shortcuts.

keyup → Updated value, good for live typing.

input → Always updated, best for tracking any change.

document.getElementById('item-2')
            .addEventListener('click', function (event) {
                console.log('item 2 clicked');
                // event.stopPropagation()
                event.stopImmediatePropagation();})



                Why is event used as a parameter?

When an event happens in JavaScript (like a click, keypress, submit), the browser automatically creates an event object.
This object has information about what happened.

For example:

If you pressed a key → event.key tells which key.

If you clicked → event.target tells which element was clicked.

If you submitted a form → event.preventDefault() can stop page reload.









The "Normal Way" (One by One Listener)
const items = document.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

This only works for the items that were already there at the start.
If you add a new item later, it won’t have the "destroy yourself" instruction — so clicking it will do nothing ❌.

The "Better Way" (Event Delegation)

Instead of telling every single note one by one,
you tell their parent:
👉 "If any of your children are tapped, remove them."

That way, old children and new children all follow the rule automatically. 🎉

<ol id="item-list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
</ol>
<script>
document.getElementById('item-list')
  .addEventListener('click', function(event){
    event.target.remove(); // remove the clicked <li>
  });
</script>










Why use stopPropagation()?

Sometimes you don’t want the event to travel upward.
You only want the action to stay on the clicked element.

<div id="parent" style="padding:20px; background:lightblue;">
  Parent (DIV)
  <button id="child">Click Me</button>
</div>

<script>
  // Parent listener
  document.getElementById("parent").addEventListener("click", function() {
    alert("Parent DIV clicked!");
  });

  // Child listener
  document.getElementById("child").addEventListener("click", function(event) {
    alert("Button clicked!");
    event.stopPropagation(); // ❌ stop bubbling here
  });
</script>


What happens:

If you click the button:
→ Only "Button clicked!" shows (parent does NOT trigger).

If you click the parent div (not the button):
→ "Parent DIV clicked!" shows.

Without stopPropagation(), clicking the button would trigger:

"Button clicked!"

"Parent DIV clicked!"

If the parent doesn’t have any event listener, then bubbling doesn’t cause any visible effect.

Bubbling only matters if some ancestor element is listening for that event.

If no one is listening, the event just bubbles up silently and nothing happens.

Think of it like shouting in an empty room: the sound travels, but no one hears it, so it has no effect.

So stopPropagation() is only needed when you want to prevent ancestor elements (that have listeners) from reacting to the child event. */}