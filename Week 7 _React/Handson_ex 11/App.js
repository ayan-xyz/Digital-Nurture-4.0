// src/App.js
import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [counter, setCounter] = useState(0);

  // Function to increment counter
  const increment = () => {
    setCounter(prev => prev + 1);
  };

  // Function to say hello
  const sayHello = () => {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  };

  // Combine both functions for Increase button
  const handleIncrease = () => {
    increment();
    sayHello();
  };

  // Function to decrement counter
  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  // Say welcome function with parameter
  const sayWelcome = (msg) => {
    alert(msg);
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎯 Event Examples App</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={decrement}>Decrease</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
