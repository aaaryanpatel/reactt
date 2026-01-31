import React, { useState } from 'react'


const Calculator = () => {

    const [display, setDisplay] = useState(0);
    const [op, setOp] = useState(null);


    function inputDigit() {
        if(clearNext) {
            setDisplay(String(digit));
            setClearNext(false);
        }
    }

  return (
    <>
        <div>{display}</div>
        <div className='div1'>
        <div className='div1'>
                <button>C</button>
                <button>⌫</button>
                <button>÷</button>
                <button>×</button>

            <div>
                <button onClick={() => inputDigit(7)}>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
            </div>

            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>=</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Calculator
