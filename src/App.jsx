/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//for first assingment
//import Heading from './Heading'     //Importing and creating components in react

/*function App() {
  return (
  <div className='App'>
    This is my first lab.
  <Heading />
  </div>
  );
}

export default App;
//import "./App.css";

//2nd react assingment of creaing cards
import Card from './Card';
function App() {
  return (
    <div style={{display: "flex" , flexDirection: "column", alignItems: "center"}}> 
      <h1 >Task: Add three Card elements</h1>
      <Card h2 = "First card's h2" h3 = "First card's h3" />
      <Card h2 = "Second card's h2" h3= "Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3" />

    </div>
  );
}

export default App;*/
import React from 'react';
import './App.css';
function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number:")
    alert(`Computer number: ${randomNum} , Your Guess: ${userInput} `);
  }
  return (
    <div className='container'>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3.</button>
    </div>
  );
}

export default App;


