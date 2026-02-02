import React from 'react'
import { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted by", Title)
  }
  
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>

      <input 
        type="text" 
        placeholder='Enter your name'
        value={Title}
        onChange={(e) => {
          setTitle (e.target.value)
        }}
        
      />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App


// in short we dont directly write on website we tell react to write it on the website when i write aryan it will be in setTitle and Title will be aryan and it will show me that