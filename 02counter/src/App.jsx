import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] =  useState(0);

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);

  }

  const removevalue = () => {
    if(counter > 0)
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter With React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>Current Value : {counter}</p>
    </>
  )
}

export default App
