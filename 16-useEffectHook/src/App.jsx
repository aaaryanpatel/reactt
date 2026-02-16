import React from 'react'
import { useEffect, useState } from 'react'
// usecases when your state is changing useeffect is running along the way

const App = () => {

const [a, setA] = useState(0)
const [b, setB] = useState(0)



  function aChanging() {
    console.log('a value is change');
    
  }

  function BChanging() {
    console.log('B value is change');
    
  }

  useEffect(function() {
    aChanging()
  },[a])

  return (
   
   
   <div>  
    <h1>A is {a}</h1>
    <h1>B is {b}</h1>

    <button
      onClick={() => {
        setA(a + 1)
      }}>change A</button>
    <button
      onClick={() => {
        setB(b - 1)
      }}>Change B</button>

   </div>
  )
}

export default App
