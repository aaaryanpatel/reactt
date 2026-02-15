import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// two methods fetch and axios 
// fetch is inbuild in js 
// 

const App = () => {
 
  
// fetch method  
// async function getData() {
//   const respose = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(respose)
// }

// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data)
// }

// axios
// const getData = async () => {
//   const {data} =  await axios.get('https://jsonplaceholder.typicode.com/users')
//   console.log(data);

// }


  const [data, setData] = useState([])
    
  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx) {
          return <h3>hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
  }

  export default App
