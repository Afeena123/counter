import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
 
// Importing app.css is css file to add styling
import "./App.css";
 
const App = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);
 
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };
 
    return (
        <div>Counter Program
            <div>
                {counter}
            </div>
            <div className="buttons">
                <button onClick={handleClick1}>ADD 1</button>
                <button onClick={handleClick2}>SUBTRACT 1</button>
            </div>
        </div>
    );
};
export default App;