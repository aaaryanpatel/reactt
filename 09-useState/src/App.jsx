import React, { useState } from 'react'
import Calculator from './Calculator'


const App = () => {

  const [Num, setNum] = useState(0)

  function increaseNum() {
    setNum(Num + 1)
  }

  function decreaseNum() {
    setNum(Num - 1)
  }

  function jump5Num() {
    setNum(Num + 5)
  }

  function resetNum() {
    setNum(0)
  }

  function increaseBy(amount) {
    setNum(Num + amount)

    
  }

  return (

    // <div>
    //   <h1>{Num}</h1>
    //   <h2>Increase by</h2>
    //   <div className='div1'>
    //     <button onClick={() =>{increaseBy(1)}} className='btn1'>1</button>
    //     <button>2</button>
    //     <button>3</button>


    //   </div>
    //   <div className='div2'>
    //     <button>4</button>
    //     <button>5</button>
    //     <button>6</button>
    //   </div>

    //    <div className='div3'>
    //     <button>7</button>
    //     <button>8</button>
    //     <button>9</button>

    //   </div>

    //   <button onClick={increaseNum}>increase</button>
    //   <button onClick={decreaseNum}>decrease</button>
    //   <button onClick={jump5Num}>Jump by 5</button>
    //   <button onClick={resetNum}>Reset</button>



    // </div>

    <>
      <Calculator />
    </>
  )
}

export default App
