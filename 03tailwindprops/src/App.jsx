import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "himanshu",
    age: 25
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-xl'>Tailwind Test</h1>

      <Card channel = "himanshu" someObje={myObj} />
      <Card/>
    </>
  )
}

export default App
