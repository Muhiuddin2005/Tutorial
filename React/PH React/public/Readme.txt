💡Use <div> if you need a wrapper element (for styling, layout, CSS classes, etc.).

Use <> </> (Fragment) if you just need to group multiple elements without adding extra tags.



💡Basic Functional Component
function App() {
  return (
    <>
    <h1>Hello React 🚀</h1>
    </>
  )
}

export default App

📌 Explanation:

function App() { ... } → defines the component.

return ( ... ) → tells React what to display.

<h1>Hello React 🚀</h1> → JSX (looks like HTML, but it’s JavaScript).

export default App → makes the component usable in main.jsx.



💡Why use variables/objects outside of return?

Because return in a React component is only JSX (the UI structure).
JSX cannot directly contain JavaScript declarations (like const, let, function).

JSX is for Markup (UI only)

The return block is where React describes what to render (like <p>, <h1>, etc.).
It’s like HTML + little embedded JavaScript expressions inside {}.



💡String

<Developer name="Ayesha" tech="JavaScript" />


→ {props.name} = "Ayesha"

Number

<Developer name="Sabbir" age={25} />


→ {props.age} = 25
⚠️ Numbers must be written inside {} not quotes (age={25} ✅, not "25").

Boolean

<Developer name="Karim" isSenior={true} />


→ {props.isSenior} = true

Array

<Developer skills={['HTML', 'CSS', 'React']} />


→ {props.skills} = ['HTML','CSS','React']
Example usage:

<p>Skills: {props.skills.join(', ')}</p>

Displaying each skill separately (like a list):

<ul>
  {props.skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ))}
</ul>


Object

<Developer details={{ country: 'Bangladesh', experience: 3 }} />


→ {props.details.country} = Bangladesh

Function

<Developer sayHello={() => alert('Hello!')} />


→ You can call it inside the component:

<button onClick={props.sayHello}>Click Me</button>


JSX (Children)

<Developer name="Nusrat">
  <p>This is extra info</p>
</Developer>


→ Accessible as {props.children}



💡Using && (Logical AND)
return isDone && <li>Done Tasks: {task} time: {time}</li>


Works like:

If isDone is true, render the <li>

If isDone is false, render nothing.

Good for conditionally showing something only when true.

Using || (Logical OR)
return isDone || <li>Not Done Tasks: {task} time: {time}</li>


Works like:

If isDone is true, returns true → renders nothing (not usual for JSX).

If isDone is false, returns <li>Not Done...</li> → rendered.




💡function App() {
  const time = 60; // optional

  return (
    <>
      <ToDo task="Learn React" isDone={true} time={time} />
      <ToDo task="Revise JS" isDone={false} />
      <ToDo task="Take a shower" isDone={true} time="" />
    </>
  );
}

export default App;
Explanation:

<ToDo /> is the child component.

task, isDone, time are props sent from the parent.

Notice the second <ToDo /> has no time prop. This is where default props come in.

Child Component with Default Props
jsx
Copy code
export default function ToDo({ task, isDone, time = 0 }) {
  return isDone 
    ? <li>Done: {task} Duration: {time}</li>
    : <li>To be done: {task}</li>;
}
Explanation:

Destructuring props:

jsx
Copy code
{ task, isDone, time = 0 }
React automatically assigns the values sent from parent.

time = 0 → default value if parent didn’t send time.





!!![
  { id: 1, name: 'Dr. Mahfuz', age: 68 },
  { id: 2, name: 'Tahsan', age: 45 },
  { id: 3, name: 'Shuvro Deb', age: 57 }
]
singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)


import './App.css'

export default function Singer({ singer }) {
    console.log(singer)
    return (
        <div className='singer'>
            <h3>Name: {singer.name}</h3>
            <p>age: {singer.age}</p>
        </div>
    )
}




!!!const handleClick3 = () => {
    alert('clicked 3')
}
const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
}

return (
  <button onClick={handleClick3}>Click me 3</button>
  <button onClick={() => handleAdd5(10)}>Click Add 5</button>
)

Here, we are using an inline arrow function: () => handleAdd5(10).

Why? Because handleAdd5 needs a parameter (num).

If you did onClick={handleAdd5(10)}, it would execute immediately when the component renders, which is not what you want.

Using () => handleAdd5(10) ensures the function runs only when clicked.




!!!1. What is useState?

useState is a React Hook.

A Hook is a special function that lets you “hook into” React features, like state or lifecycle methods, from functional components.

useState specifically is used to store and manage state in a component.

State in React

State is like a “memory” for your component.

It stores information that can change over time.

Example: a counter, a text input, or a toggle button.

When the state changes, React re-renders the component to show the new value.

2. How useState works
const [count, setCount] = useState(0);


This is destructuring assignment in JavaScript.

useState(0) means:

The initial value of the state is 0.

count → the current value of the state (like a variable that React keeps track of).

setCount → the function used to update the state. You cannot directly change count. Always use setCount(newValue).

Example:

setCount(5); // sets count to 5 and re-renders the component



!!!What is a Hook in React?

A Hook is a special function in React that lets you “hook into” React features from functional components.

Before Hooks, only class components could have features like state and lifecycle methods.

Hooks allow functional components to:

Store state (useState)

Run code at specific times (like when the component mounts or updates) (useEffect)

Access context (useContext)

And more advanced features (useReducer, useRef, etc.)



!!!export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle ={
        border: '2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}





!!!import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}



!!!const [name, setName] = useState("Muhiuddin"); // string
const [isLoggedIn, setIsLoggedIn] = useState(false); // boolean
const [items, setItems] = useState([]); // array
const [user, setUser] = useState({ age: 20, city: "Rajshahi" }); // object





!!!// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();}
function App() {
  // const friendsPromise = fetchFriends();
  return(
  {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */})}



Why the difference?
Case 1: Direct Promise (Users case)
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


Here, the fetch(...) runs immediately when this line is executed.

The result is a Promise object, stored inside fetchUsers.

So fetchUsers is not a function — it’s the actual running order slip for the data.

Whenever you pass fetchUsers, you’re just handing that already-created Promise.

✅ Pros: Simple, no function calls.
❌ Cons: The request starts running immediately when the component loads, even if you don’t need it.

Case 2: Function returning a Promise (Friends case)
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};


Here, fetchFriends is just a function. Nothing runs yet.

Only when you call fetchFriends() does the fetch actually start, and it returns a Promise.

So you control when the fetch starts.

✅ Pros: Flexible, you can call multiple times, or call later based on user action.
❌ Cons: You need to call it (fetchFriends()), otherwise it’s just a function, not data.

🔹 Which one is used more in real life?

👉 In real-world applications, the function-returning-a-promise style (async function) is used most often.

Why?

Because you usually want to fetch on demand (e.g., when user clicks, when component mounts, when a filter changes).

You can reuse the same function multiple times with different parameters (e.g., fetchUser(5), fetchUser(10)).

It works better with React hooks like useEffect or libraries like React Query.



import { use } from "react";
import Friend from './Friend';

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}

export default function Friend({ friend }) {

    console.log(friend);
    const {name, email, phone} = friend;

    return (
        <div className="card">
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}






!!!Why is fetch outside App() here?

Reason 1: Avoid multiple fetches
If you put fetch inside App(), it will run every time App re-renders.
Example:

function App() {
  const usersPromise = fetch(...); // 🔁 runs again on each re-render
}


That means unnecessary duplicate API calls.

Reason 2: Promise can live outside safely
Promises are just values. Declaring them outside the component ensures:

It’s created once.

It can be reused by components that need it.

It’s not tied to React’s render cycle.

🔹 Why can’t use() be outside?

use() is a React hook, and hooks must run inside a component function so React can track their state.
That’s why you always see:

fetch(...) → ✅ can live outside (safe, no React rules).

use(...) → ❌ must live inside a component.





!!!useEffect explained simply

Think of a React component as a room that gets “painted” every time it renders.

useEffect is like a cleaning crew or worker that comes after the room is painted to do something extra (side effect) — like fetching data, setting up a timer, or logging something.

Example in your code:

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPlayers(data));
}, []);


React first renders the component → shows an empty list (players = []).

useEffect runs after render → starts fetching player data.

When the fetch finishes → setPlayers(data) updates state → React re-renders → now the list shows players.

2. Dependency array explained with real-life analogy
useEffect(() => { ... }, [count]);


The array [count] tells React:

“Run this effect only when count changes.”

Real-life analogy:

Imagine you have a coffee machine in your kitchen.

Effect = making coffee.

Dependency array = the condition for making coffee:

Dependency Array	Real-Life Analogy
[] (empty)	Make coffee once when you wake up.
[count]	Make coffee only when your energy level (count) changes.
omitted	Make coffee every minute, even if not needed → wasteful.

So [] means run once when the component mounts, [count] means run when count changes, and nothing means run on every render.

3. When to use useEffect vs use()
Feature	useEffect	use()
Runs after render	✅	❌ (hook runs during render)
Handles side effects (API fetch, timers, logging)	✅	❌ (only reads Promise data for Suspense)
Can update state and cause re-render	✅	✅
Suspense integration	❌ (needs manual loading state)	✅ (automatically suspends until Promise resolves)
When to use	- Fetch data after component mounts
- Set up timers, subscriptions, event listeners
- Log or trigger animations	- Fetch data during render for React Suspense
- Display fallback UI automatically while data loads
- Works only with Promises



!!!Example: Using useEffect with [count]
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Effect that depends on `count`
  useEffect(() => {
    console.log("☕ Making coffee because energy level (count) changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Energy Level: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Energy</button>
      <button onClick={() => setCount(count - 1)}>Decrease Energy</button>
    </div>
  );
}




!!!React has strict rules called “Rules of Hooks”:

Hooks can only be called inside React function components (or custom hooks).
👉 If you put them outside, React won’t know which component they belong to.

Hooks must be called in the same order on every render.
👉 If you move them outside, this order breaks and React will throw errors.





!!!***country
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>You, me & 2 babies: Visited countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;***




***countries
import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)

    const handleVisited = () => {
         setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited' }`}>
        ***in css=.country-visited{background-color: aquamarine;}***
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 300000 ? "Big Country" : 'Small country'
            }</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() =>{ handleVisitedFlag(country?.flags?.flags?.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;***




!!!***app ReadAll
import { Suspense, useState } from "react";
import "./App.css";
 import { ToastContainer} from 'react-toastify';
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return  res.json()
}
const playersPromise = fetchPlayers()
function App() {
  ***const [toggle,setToggle] = useState(true)***
  ***const [availableBalance,setAvailableBalance] = useState(10000000)***
  const [purchasedPlayers,setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const fileteredData = purchasedPlayers.filter(ply=> ply.player_name!==p.player_name)
    console.log(p)
    setPurchasedPlayers(fileteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }

  
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">{
            toggle===true?"Available Players":`Selected Player (${purchasedPlayers.length}/6)`
            }</h1>

          <div className="font-bold">
           ***<button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>selected <span>***({purchasedPlayers.length})</span></button>
          </div>
      </div>

      ***{
        toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }***
      
      <ToastContainer/>
    </>
  );
}

export default App;***



***AvailablePlayers ReadAll
import React, { use } from "react";


import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,setPurchasedPlayers,purchasedPlayers }) => {
  const playerData = use(playersPromise);
 
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

    {
        playerData.map(player=><PlayerCard setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
    }


     
    </div>
  );
};

export default AvailablePlayers;



***PlayerCard ReadAll
import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";
import { toast } from "react-toastify";
const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchasedPlayers,purchasedPlayers }) => {

  ***const [isSelected, setIsSelected] = useState(false);***

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        toast("Not enough coins!!")
        return
    }
    if(purchasedPlayers.length===6){
        toast("6 players already selected!")
        return
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
    ); 
    setPurchasedPlayers([...purchasedPlayers,playerData])
    toast("Player purchased!")
  };
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt="Shoes"
          className="w-full h-[300px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
          <div className="flex items-center ">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>

          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          ***<button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">
            {isSelected === true ? "Selected" : "Choose player"}***
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;***




***import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
 
    return (
        <div className='max-w-[1200px] mx-auto'>
         {
            purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
         }
        </div>
    );
};

export default SelectedPlayers;




***SelectedCard
import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player)
    const handleRemove = () =>{
        removePlayer(
        player
        )
    }
    return ( 
         <div className='border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl'>
                <div className='flex items-center'>
                    <img src={player.player_image} className='h-[50px] w-[50px] rounded-xl' alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name
}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;


***// Without SelectedCard component
const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div>
      {purchasedPlayers.map(player => (
        <div className="border" key={player.player_name}>
          <h2>{player.player_name}</h2>
          <button onClick={() => removePlayer(player)}>Remove</button>
        </div>
      ))}
    </div>
  );
};











