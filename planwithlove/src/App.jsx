import React from 'react';
import { useState } from 'react'
import data from './Data';
import Tours from './components/Tours';
import './App.css'

function App() {

  const [tours, setTours] = useState(data);
  
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    console.log("remove");
  
  }

  return (
    <>
     <div>
      
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
    </>
   
  )
}

export default App
