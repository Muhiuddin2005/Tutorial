const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // promise of response
    .then((res) => res.json())
    // promise of json data
    .then((data) => console.log(data));
};


fetch(...)

fetch is a built-in browser function to get data from an API (a server).

It doesn’t give data immediately.

Instead, it returns a Promise (something like: “I’ll give you the result later”).

.then((res) => res.json())

The first .then waits until the server responds.

res here = Response object (not the actual data yet).

res.json() converts the response into real JSON data (another Promise).

.then((data) => console.log(data))

The second .then waits for the JSON to be ready.

Finally, data is the real object from the server:

Why do we need multiple .then?

Because:

First wait: get the response from the server.

Second wait: convert the response to JSON data.



he Response object (res) has a method .json().

This method reads the raw text and parses it into a JavaScript object.

It still returns a Promise, because parsing may take some time.

So here is the exact point where JSON (string) → Object happens.



which ones you can rename freely
res (inside first .then)
data (inside second .then)
data is another parameter name. It represents the parsed JSON object.
✅ You can rename it too (result, todo, obj):




Things you cannot change

"https://jsonplaceholder.typicode.com/todos/1" → this is the API URL. If you change it, you must make sure the new URL is valid, otherwise fetch will fail.

.json() → must stay .json(), because that’s the method provided by the Response object.

.then() → cannot rename this; it’s built into Promises.








Normal JavaScript object
const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 34000,
};
console.log(person, typeof person);


person is a JS object.

typeof person → "object".



Convert object → JSON string
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);


JSON.stringify(person) turns the object into a string in JSON format.
typeof personJSON → "string" ✅


Convert JSON string → JS object
const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);


JSON.parse(personJSON) changes the string back into a real object.




Now you can use dot notation:
console.log(parseJSON.name);     // "selim"
console.log(parseJSON.friends);  // ["alim", "kolim", "lamim"]
console.log(parseJSON.money);    // 34000




Why this matters

APIs always send data as JSON strings.

JavaScript needs objects to actually work with the data.

That’s why:

When sending → use JSON.stringify().

When receiving → use JSON.parse() (or res.json() in fetch, which does it for you).















<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mini Posts Example</title>
  <style>
    #container {
      max-width: 800px;
      margin: 40px auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 1px 1px 3px gray;
    }
    .card h3 {
      margin: 0 0 5px;
    }
    .card p {
      margin: 0;
      text-align: justify;
    }
  </style>
</head>
<body>
  <button id="loadBtn">Load Mini Posts</button>
  <div id="container"></div>

  <script src="app.js"></script>
</body>
</html>






// 1. Function to load posts from API
const loadPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=6") // fetch 6 posts
    .then(res => res.json())  // convert JSON string → JS object
    .then(data => displayPosts(data)); // send data to display function
};

// 2. Function to display posts in the page
const displayPosts = (posts) => {
  const container = document.getElementById("container");

  // Clear previous posts
  container.innerHTML = "";

  // Loop through posts and create card for each
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";

    // Template literals to fill content
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    // Append card to container
    container.append(card);
  });
};

// 3. Event listener for button
document.getElementById("loadBtn").addEventListener("click", loadPosts);

// Optional: auto-load posts on page load
loadPosts();





posts.forEach((post) => {
  // do something with each post
});
forEach is a method available on arrays.

It allows you to loop through each item in the array one by one.

Inside the callback (post) => { ... }, post represents one object at a time.

Is posts an array or object?
[
  { "userId": 1, "id": 1, "title": "Post 1", "body": "Content 1" },
  { "userId": 1, "id": 2, "title": "Post 2", "body": "Content 2" },
  { "userId": 1, "id": 3, "title": "Post 3", "body": "Content 3" }
]
This is an array of objects.

So posts is an array, and each post inside forEach is an object.
posts.forEach(post => {
  console.log(post.title);  // dot notation to access title
  console.log(post.body);   // dot notation to access body
});
post.title → accesses the title property of the object.

post.body → accesses the body property of the object.
Why dot notation works here

Dot notation works on objects, not arrays.

posts → array → use forEach to get each object.

post → object → use post.title, post.body, etc














<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mini Todo App</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
  />
  <style>
    #todo-container {
      max-width: 600px;
      margin: 30px auto;
    }
    .todo-card {
      display: flex;
      gap: 10px;
      align-items: center;
      border: 1px solid gray;
      padding: 8px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
    .todo-card h4 {
      margin: 0;
    }
  </style>
</head>
<body>
  <h1>All Todos</h1>
  <div id="todo-container"></div>
  <script src="todo.js"></script>
</body>
</html>







// 1. Fetch todo data
const loadTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=6");
  const todos = await res.json();
  displayTodos(todos);
};

// 2. Display todos in the page
const displayTodos = (todos) => {
// Yes! Absolutely. The name todos is just a variable name, you can call it anything you like
// const displayTodos = (items) => 
  const container = document.getElementById("todo-container");
  container.innerHTML = ""; // clear old content

  todos.forEach(todo => {
    const card = document.createElement("div");
    card.className = "todo-card";

    // conditional icon for completed or not
    const icon = todo.completed
      ? `<i class="fa-solid fa-square-check"></i>`
      : `<i class="fa-regular fa-square-check"></i>`;

    card.innerHTML = `
      ${icon}
      <h4>${todo.title}</h4>
    `;

    container.append(card);
  });
};

// 3. Load todos on page load
loadTodos();







Workflow Summary (for beginners)

Call loadTodos() → fetch todos from API.

Convert JSON string → array of objects (res.json()).

Select container → clear old content (innerHTML = "").

Loop through todos → create a card for each (forEach).

Use template literals → fill card with title.

Conditional rendering → check icon based on completed.

Append card → show it on the page.

CSS Flexbox → align icon + title horizontally.
















1. GET ✅

Purpose: Get/fetch data from a server.

Analogy:
You go to a library and ask for a book. You don’t change the book, you just read it.

2. POST 📝

Purpose: Send/create new data on the server.

Analogy:
You go to the library and add a new book to their collection.

3. PUT 🔄

Purpose: Replace/update a whole item on the server.

Analogy:
You go to the library and say: “Replace the 3rd edition of this book with this new book completely.”

4. PATCH ✏️

Purpose: Update part of an item on the server.

Analogy:
You go to the library and say: “Change only the book’s title, keep everything else the same.”

5. DELETE ❌

Purpose: Delete an item from the server.

Analogy:
You go to the library and remove a book from the shelf permanently.

Beginner tips:

GET → safe, no changes on server.

POST, PUT, PATCH, DELETE → modify server data.

Always use JSON.stringify() for sending data in POST/PUT/PATCH.












const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log("Hello");
  const json = await res.json();
  console.log(json);
  console.log(true);
};

data();

async marks the function as asynchronous.

Inside an async function, you can use await to pause execution until a promise resolves.

Think: “Wait for this to finish before moving to the next step.”

fetch(url) → requests data from the server (here, post with id 1).

await → tells JS to wait until the fetch is complete before moving to the next line.

res → the response object from the server.

console.log("Hello")

This will run after fetch is completed, because of await.

Logs "Hello" to the console.

res.json() → converts the response into a JavaScript object.

await → wait until the JSON conversion is done.

json → now contains the actual post data:




