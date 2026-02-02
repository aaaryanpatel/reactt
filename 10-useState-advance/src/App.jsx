import React, { useState } from 'react'



const App = () => {
  
  const [num, setNum] = useState({user: "rishi", age: 17})
  
  const btnClicked = () => {
    setNum(prev=>({...prev,age:50}))

    setNum(prev=>({...prev,user:"aryan"}))
    
    
    
  }
  

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>


    </div>
  )
}

export default App
